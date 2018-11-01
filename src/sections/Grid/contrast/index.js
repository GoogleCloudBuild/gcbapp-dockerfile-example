import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponentSwitch from '../../../utils/ComponentSwitch';
import Link from '../../../components/Link';
import {
  Section,
  HeadingColumn,
  Heading,
  SubHeading,
  Description,
  Grid,
} from './styles';

class DefaultGridSection extends Component {
  constructor(props) {
    super(props);

    this.gridItemSwitcher = new ComponentSwitch({
      parent: props.data,
      cases: {},
    });
  }

  render() {
    const { data, ...otherProps } = this.props;
    const {
      heading,
      subHeading,
      description,
      items,
      button,
    } = data;

    return (
      <Section {...otherProps}>
        {(heading || subHeading || description) && (
          <HeadingColumn>
            {heading && <Heading>{heading}</Heading>}
            {subHeading && <SubHeading>{subHeading}</SubHeading>}
            {description && <Description>{description.description}</Description>}
          </HeadingColumn>)}
        {items && <Grid>{items.map((item, index) => this.gridItemSwitcher.switch(item, {}, index))}</Grid>}
        {button && <Link data={button[0]} />}
      </Section>
    );
  }
}

DefaultGridSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DefaultGridSection;
