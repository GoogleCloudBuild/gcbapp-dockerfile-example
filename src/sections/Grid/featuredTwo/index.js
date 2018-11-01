import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponentSwitch from '../../../utils/ComponentSwitch';
import InternationalTourItem from './InternationalTour';
import {
  Section,
  SectionContent,
  Heading,
  Description,
  Grid,
} from './styles';

class DefaultGridSection extends Component {
  constructor(props) {
    super(props);

    this.gridItemSwitcher = new ComponentSwitch({
      parent: props.data,
      cases: {
        ContentfulItemInternationalTour: (item) => <InternationalTourItem key={item.contentful_id} data={item} />,
      },
    });
  }

  render() {
    const { data, ...rest } = this.props;
    const {
      heading,
      subHeading,
      description,
      items,
    } = data;

    return (
      <Section {...rest}>
        <SectionContent>
          {(heading || subHeading || description) && (
            <div>
              {heading && <Heading>{heading}</Heading>}
              {description && <Description>{description.description}</Description>}
            </div>)}
          <Grid maxRowItems={2}>{items.map((item, index) => this.gridItemSwitcher.switch(item, {}, index))}</Grid>
        </SectionContent>
      </Section>
    );
  }
}

DefaultGridSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DefaultGridSection;
