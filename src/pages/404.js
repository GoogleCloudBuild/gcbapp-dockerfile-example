import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const Box = styled.div`
  margin: 60px auto 0;
  padding: 4.8em 2.4em 3.2em;
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
  line-height: 1.6;
  margin: 0 0 1.6em 0;
`;

const Title = styled.h1`
  font-size: 4.8em;
  text-transform: capitalize;
  font-weight: 600;
  margin: 0 0 4.8rem 0;
  line-height: 1.2;
`;

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title>
        404 - Page Not Found
      </title>
      <meta name='description' content='Page not found' />
    </Helmet>

    <Box>
      <Title>
        404
      </Title>
      <Text>
        {'Sorry, that page can\'t be found.'}
      </Text>
    </Box>
  </div>
);

export default NotFoundPage;
