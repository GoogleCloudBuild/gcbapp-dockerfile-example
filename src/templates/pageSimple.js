import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import '../styles/global';
import config from '../utils/siteConfig';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Sections from '../components/Sections';
import mediaQueries from '../styles/mediaQueries';

const Content = styled.div`
  width: 100%;
  margin-top: 6.9rem;
`;

const SimpleWrapper = styled.div`
  width: 90rem;
  background-color: ${(props) => props.theme.colours[props.backgroundColour]};
  padding: 0;
  margin: 0 auto;
  @media ${mediaQueries.MAX_TABLET} {
    width: 100%;
    padding: 0 2rem;
  }
`;

const PageSimpleTemplate = ({ data, pageContext }) => {
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
  } = contentfulPage;

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
        <title>{`${pageTitle} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={contentfulPage} pageSEO />

      <Content>
        <Sections
          sectionList={content}
          SectionWrapper={SimpleWrapper}
          pageTheme={theme}
          wrapperProps={{
            wrapper: true,
          }}
        />
      </Content>
    </Layout>
  );
};

PageSimpleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export const query = graphql`
  query SimplePageQuery($slug: String!, $contentfulLocale: String!, $countryCode: String!) {
    contentfulPage(slug: { eq: $slug }, node_locale: { eq: $contentfulLocale}, countryCode: { eq: $countryCode }) {
      ...PageFragment
    }
  }
`;

export default PageSimpleTemplate;
