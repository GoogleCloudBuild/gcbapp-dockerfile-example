import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import mediaQueries from '../../../styles/mediaQueries';
import UnsupportedElementWarning from '../../UnsupportedElementWarning';

import {
  Wrapper,
  ChoiceContainer,
  ChoiceColumn,
  ChoiceCard,
  ChoiceCardHeading,
  ChoiceCardOption,
  Radio,
  Checkbox,
  SummaryContainer,
  Summary,
  PriceBreakdown,
  Price,
  Variant,
  CheckoutButton,
  PriceLine,
  LineItem,
  ButtonColumn,
  Total,
} from './styles';

const renderChoiceOption = (option, selected, chooseThisOption) => (
  <ChoiceCardOption selected={selected} key={option.contentful_id} onClick={chooseThisOption}>
    <Variant selected={selected}>
      <Radio selected={selected} alt={option.label} />{option.label}
    </Variant>
    <Price selected={selected}>{`$${option.value}`}</Price>
  </ChoiceCardOption>
);

const renderChoiceCard = (variantChoice, index, selectedOption, chooseOption) => {
  const {
    contentful_id: id,
    name,
    label,
    options,
    fieldType,
  } = variantChoice;

  return fieldType === 'radio'
    ? (
      <ChoiceCard key={id}>
        <ChoiceCardHeading>{label}</ChoiceCardHeading>
        {options.map((option) => renderChoiceOption(
          option, selectedOption && selectedOption.label === option.label, () => chooseOption(name, option),
        ))}
      </ChoiceCard>
    )
    : (
      <UnsupportedElementWarning
        key={id}
        unsupported={fieldType}
        index={index}
        id={id}
        parent='ContentfulWidgetProductCustomiserForm'
      />
    );
};

const getProduct = (productName) => {
  const products = {
    'UCAS Personal Statement Review': {
      handle: 'ucas-personal-statement',
      prefix: '01',
    },
    'Common App Essay Review': {
      handle: 'essay-review',
      prefix: '02',
    },
    'Supplemental Essay': {
      handle: 'supplemental-essay',
      prefix: '03',
    },
  };

  return products[productName];
};

const getVariantId = (sku) => {
  const variants = {
    // UCAS Personal Statement Review
    '01-24-250': '13010315968589',
    '01-24-500': '12780447105101',
    '01-24-650': '12962014167117',
    '01-24-1000': '13010317541453',
    '01-24-1500': '13010317672525',
    '01-48-250': '13010319573069',
    '01-48-500': '12780447039565',
    '01-48-650': '12962013151309',
    '01-48-1000': '13010321145933',
    '01-48-1500': '13010323439693',
    '01-72-250': '13010325602381',
    '01-72-500': '12780446974029',
    '01-72-650': '12962012627021',
    '01-72-1000': '13010328223821',
    '01-72-1500': '13010330452045',

    // Common App Essay Review
    '02-24-250': '13010282905677',
    '02-24-500': '12962009251917',
    '02-24-650': '12780446777421',
    '02-24-1000': '13010291851341',
    '02-24-1500': '13010287755341',
    '02-48-250': '13010301386829',
    '02-48-500': '12962008989773',
    '02-48-650': '12780446711885',
    '02-48-1000': '13010293358669',
    '02-48-1500': '13010302074957',
    '02-72-250': '13010309611597',
    '02-72-500': '12962007154765',
    '02-72-650': '12780446646349',
    '02-72-1000': '13010295095373',
    '02-72-1500': '13010307416141',

    // College Supplemental Essays
    '03-24-250': '13010210914381',
    '03-24-500': '13010210947149',
    '03-24-650': '13010210979917',
    '03-24-1000': '13010211012685',
    '03-24-1500': '13010211045453',
    '03-48-250': '13010211078221',
    '03-48-500': '13010211110989',
    '03-48-650': '13010211143757',
    '03-48-1000': '13010211176525',
    '03-48-1500': '13010211209293',
    '03-72-250': '13010211242061',
    '03-72-500': '13010211274829',
    '03-72-650': '13010211307597',
    '03-72-1000': '13010211340365',
    '03-72-1500': '13010211373133',
  };

  return variants[sku] || '';
};

class ProductCustomiserFormWidget extends Component {
  constructor(props) {
    super(props);

    this.windowMediaQuery = typeof window !== 'undefined' && window.matchMedia(mediaQueries.MAX_MOBILE);

    this.state = {
      selectedOptions: {},
      acceptedTerms: false,
      isMobile: this.windowMediaQuery.matches,
    };

    this.chooseOption = this.chooseOption.bind(this);
    this.toggleAcceptTerms = this.toggleAcceptTerms.bind(this);
    this.resizeWindow = this.resizeWindow.bind(this);
  }

  componentDidMount() {
    const { selectedOptions } = this.state;
    const { variantChoices } = this.props.data;

    variantChoices.forEach((choice) => choice.options.forEach((option) => {
      if (option.default) {
        selectedOptions[choice.name] = option;
      }
    }));

    this.setState({ selectedOptions });

    this.windowMediaQuery.addListener(this.resizeWindow);
  }

  getTotalPrice() {
    const { selectedOptions } = this.state;
    return Object.values(selectedOptions).reduce((acc, curr) => acc + parseInt(curr.value, 10), 0);
  }

  chooseOption(groupName, option) {
    const { selectedOptions } = this.state;
    selectedOptions[groupName] = option;
    this.setState({ selectedOptions });
  }

  toggleAcceptTerms() {
    const { acceptedTerms } = this.state;
    this.setState({ acceptedTerms: !acceptedTerms });
  }

  resizeWindow(e) {
    this.setState({ isMobile: e.matches });
  }

  render() {
    const { data } = this.props;
    const {
      variantChoices,
      termsOfOrder,
      showPriceBreakdown,
      checkoutButton,
    } = data;
    const { selectedOptions, acceptedTerms, isMobile } = this.state;

    const { essayReviewProduct, essayReviewWordCount, essayReviewTime } = selectedOptions;

    let selectedVariant;
    let product = null;
    let checkoutURL;

    if (essayReviewProduct && essayReviewWordCount && essayReviewTime) {
      product = getProduct(essayReviewProduct.label);

      const variant = `${product.prefix}-${essayReviewTime.label
        .split(' ').slice(0, 1)}-${essayReviewWordCount.label
        .split(' ').slice(0, 1)}`;

      selectedVariant = getVariantId(variant);
    }

    const halfChoiceList = Math.ceil(variantChoices.length / 2);

    if (selectedVariant && product) {
      checkoutURL = `https://shop.crimsoneducation.org/products/${product.handle}?variant=${selectedVariant}`;
    }

    const button = checkoutURL ? Object.assign({}, checkoutButton[0], { url: checkoutURL }) : checkoutButton[0];

    return (
      <Wrapper data-ga-category='Product Form'>
        <ChoiceContainer>
          <ChoiceColumn>
            {variantChoices
              .slice(0, halfChoiceList)
              .map((choice, index) => renderChoiceCard(
                choice, index, selectedOptions[choice.name], this.chooseOption
              ))}
          </ChoiceColumn>
          <ChoiceColumn>
            {variantChoices
              .slice(halfChoiceList)
              .map((choice, index) => renderChoiceCard(
                choice, index, selectedOptions[choice.name], this.chooseOption
              ))}
            {termsOfOrder && (
              <ChoiceCard>
                <ChoiceCardOption onClick={this.toggleAcceptTerms}>
                  <Checkbox selected={acceptedTerms} />
                  {termsOfOrder}
                </ChoiceCardOption>
              </ChoiceCard>
            )}
          </ChoiceColumn>
        </ChoiceContainer>
        {isMobile
          ? (
            <SummaryContainer>
              <Summary>
                <span>Order Summary</span>
                <Total>Total</Total>
                <PriceLine>{`$${this.getTotalPrice()}`}</PriceLine>
              </Summary>
              {showPriceBreakdown && (
                <PriceBreakdown numberOfItems={Object.keys(selectedOptions).length}>
                  {Object.values(selectedOptions).map((option) => (
                    <LineItem key={`${option.label}-${option.value}`}>
                      <span>{option.label}</span>
                      <PriceLine>{`$${option.value}`}</PriceLine>
                    </LineItem>
                  ))}
                </PriceBreakdown>
              )}
              <CheckoutButton
                data={button}
                disabled={!acceptedTerms || Object.values(selectedOptions).length < 3}
              />
            </SummaryContainer>
          ) : (
            <SummaryContainer>
              <Summary>
                <span>Order Summary</span>
                <Total>Total</Total>
                <PriceLine>{`$${this.getTotalPrice()}`}</PriceLine>
                <ButtonColumn>
                  <CheckoutButton
                    data={button}
                    disabled={!acceptedTerms || Object.values(selectedOptions).length < 3}
                  />
                </ButtonColumn>
              </Summary>
              {showPriceBreakdown && (
                <PriceBreakdown numberOfItems={Object.keys(selectedOptions).length}>
                  {Object.values(selectedOptions).map((option) => (
                    <LineItem key={`${option.label}-${option.value}`}>
                      <span>{option.label}</span>
                      <PriceLine>{`$${option.value}`}</PriceLine>
                      <ButtonColumn />
                    </LineItem>
                  ))}
                </PriceBreakdown>
              )}
            </SummaryContainer>
          )
        }
      </Wrapper>
    );
  }
}

export const query = graphql`
  fragment ProductCustomiserFormWidgetFragment on ContentfulWidgetProductCustomiserForm {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    productType
    variantChoices {
      ...FormFieldGroupFragment
    }
    termsOfOrder
    showPriceBreakdown
    checkoutButton {
      ...on ContentfulLinkExternal {
        ...ExternalLinkFragment
      }
    }
  }
`;

ProductCustomiserFormWidget.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProductCustomiserFormWidget;
