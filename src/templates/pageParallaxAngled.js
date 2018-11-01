import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import '../styles/global';
import config from '../utils/siteConfig';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import AngledSection from '../sections/Angled';
import Sections from '../components/Sections';

const Content = styled.div`
  width: 100%;
  padding-top: 6.9rem;
`;

const PageParallaxAngledTemplate = ({ data, pageContext }) => {
  const { contentfulPage } = data;
  const {
    navigationBar,
    footer,
    office,
    locales,
    currentLocale,
    isPreview,
  } = pageContext;
  const {
    pageTitle,
    slug,
    content,
    theme,
  } = data.contentfulPage;
  const postNode = contentfulPage;

  return (
    <Layout
      header={navigationBar}
      footer={footer}
      office={office}
      locales={locales}
      currentLocale={currentLocale}
      isPreview={isPreview}
    >
      <Helmet>
        <title>
          {`${pageTitle} - ${config.siteTitle}`}
        </title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} pageSEO />
      <Content>
        <Sections
          sectionList={content}
          SectionWrapper={AngledSection}
          pageTheme={theme}
          wrapperProps={{
            wrapper: true,
            offsetThis: 0,
            offsetNext: 0,
            offset: 0,
            degrees: 3,
            backgroundColour: 'contrast',
          }}
        />
      </Content>
    </Layout>
  );
};

PageParallaxAngledTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export const query = graphql`
  query ParallaxAngledPageQuery($slug: String!, $contentfulLocale: String!, $countryCode: String!) {
    contentfulPage(slug: { eq: $slug }, node_locale: { eq: $contentfulLocale}, countryCode: { eq: $countryCode }) {
      ...PageFragment
    }
  }
`;

export default PageParallaxAngledTemplate;
