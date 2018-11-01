import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import ComponentSwitch from '../../../utils/ComponentSwitch';

import AccordianItem from './AccordianItem';
import {
  Wrapper,
  SearchBar,
  Content,
  ContentHeading,
  ContentBody,
} from './styles';

const renderAccordianBodySection = (content, isOpen) => (
  <Content
    key={content.contentful_id || content.id}
    isOpen={isOpen}
  >
    {content.heading && <ContentHeading>{content.heading}</ContentHeading>}
    {content.description && <ContentBody>{content.description.description || content.description}</ContentBody>}
  </Content>
);

class SearchableAccordianWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openIndex: -1,
    };

    this.toggleAccordian = this.toggleAccordian.bind(this);

    this.accordianItemSwitcher = new ComponentSwitch({
      parent: props.data,
      cases: {
        ContentfulItemUniversity: (item, { isOpen }, index) => (
          <AccordianItem
            key={item.contentful_id}
            toggleAccordian={this.toggleAccordian}
            index={index}
            isOpen={isOpen}
            title={item.universityName}
          >
            {item.essayPrompts && item.essayPrompts.map((prompt) => renderAccordianBodySection(prompt, isOpen))}
          </AccordianItem>
        ),
        ContentfulItemCustom: (item, { isOpen }, index) => (
          <AccordianItem
            key={item.contentful_id}
            toggleAccordian={this.toggleAccordian}
            index={index}
            isOpen={isOpen}
            title={item.heading}
          >
            {item.description && renderAccordianBodySection(item.description, isOpen)}
          </AccordianItem>
        ),
      },
    });
  }

  toggleAccordian(index) {
    const { openIndex } = this.state;
    if (openIndex === index) {
      this.setState({ openIndex: -1 });
    } else {
      this.setState({ openIndex: index });
    }
  }

  render() {
    const { openIndex } = this.state;
    const { includeSearchBar, items } = this.props.data;

    return (
      <Wrapper>
        {includeSearchBar && <SearchBar>Search bar here</SearchBar>}
        {items.map((item, index) => (
          this.accordianItemSwitcher.switch(item, { isOpen: index === openIndex }, index)
        ))}
      </Wrapper>
    );
  }
}

export const query = graphql`
  fragment SearchableAccordianWidgetFragment on ContentfulWidgetSearchableAccordian {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    includeSearchBar
    items {
      ...on ContentfulItemUniversity {
        ...UniversityItemFragment
      }
      ...on ContentfulItemCustom {
        ...CustomItemFragment
      }
    }
  }
`;

SearchableAccordianWidget.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SearchableAccordianWidget;
