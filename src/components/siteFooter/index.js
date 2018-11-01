import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import helpers from '../../utils/helpers';
import FooterItems from './FooterItems';
import mediaQueries from '../../styles/mediaQueries';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colours.primary};
  color: ${(props) => props.theme.colours.contrast};
  overflow: hidden;
  a {
    font-weight: inherit;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;
  padding: 0 10rem;

  @media ${mediaQueries.MAX_TABLET} {
    padding: 0 5rem;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    padding: 0 2rem;
  }
`;

const Footer = ({ data }) => {
  const { items } = data;
  return (
    <Wrapper data-ga-category='Footer'>
      <Container>
        {
          items && items.map((item) => {
            if (item.title) {
              const FooterItem = FooterItems[helpers.removeWhiteSpace(item.title)];
              return FooterItem ? (
                <FooterItem
                  key={item.title}
                  entry={item}
                />
              ) : <div>{item.title}</div>;
            }
            return null;
          })
        }
      </Container>
    </Wrapper>
  );
};

Footer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Footer;
