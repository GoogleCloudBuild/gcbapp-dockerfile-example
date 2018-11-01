import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UnsupportedElementWarning from './UnsupportedElementWarning';
import getSectionComponent from '../sections';

// Takes an array of objects representing sections:
// {
//  id: <contentful-id>,
//  type: <contentful-entry-type>,
//  options: <options-object>,
// }

const Wrapper = styled.div`
  z-index: 12;
  position: relative;
`;

const Sections = ({
  sectionList, SectionWrapper, wrapperProps, pageTheme,
}) => (
  <Wrapper>
    {sectionList && sectionList.map((section, index, sections) => {
      const sectionType = (section.internal && section.internal.type) || section.__typename;
      const Section = getSectionComponent(sectionType);
      const sectionOptions = section.options;
      if (sectionOptions) {
        Object.keys(sectionOptions).forEach((option) => {
          if (sectionOptions[option] === null) {
            delete sectionOptions[option];
          }
        });
      }

      const sectionWrapperProps = {
        ...wrapperProps,
        backgroundColor: section.backgroundColour,
        ...(sectionOptions || {}),
        index,
      };

      // Calculate section offsets
      sectionWrapperProps.offset = sectionWrapperProps.offsetThis || 0;

      const previous = sections[index - 1];
      if (previous && previous.options && previous.options.offsetNext) {
        sectionWrapperProps.offset += previous.offsetNext;
      }

      if (sectionWrapperProps.wrapper) {
        return (
          <SectionWrapper key={section.contentful_id || `${section.__typename}${index}`} {...sectionWrapperProps}>
            {Section
              ? <Section data={section} {...sectionWrapperProps} />
              : (
                <UnsupportedElementWarning
                  unsupported={sectionType}
                  id={section.contentful_id}
                  contentTheme={pageTheme}
                  index={index}
                />
              )}
          </SectionWrapper>
        );
      }

      return Section
        ? (
          <Section
            data={section}
            key={section.contentful_id}
            {...sectionWrapperProps}
          />
        ) : (
          <UnsupportedElementWarning
            key={section.contentful_id || `${section.__typename}${index}`}
            unsupported={sectionType}
            id={section.contentful_id}
            contentTheme={pageTheme}
            index={index}
          />
        );
    })}
  </Wrapper>
);

Sections.propTypes = {
  sectionList: PropTypes.array.isRequired,
  SectionWrapper: PropTypes.func,
  wrapperProps: PropTypes.object,
  pageTheme: PropTypes.string,
};

export default Sections;
