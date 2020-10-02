import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('div')`
  .versionInfo {
    font-style: italic;
    font-size: 14px;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.heading};
  }
`;

const AuthorInfo = ({ software, version }) => (
  <Wrapper>
    <div className="versionInfo">{`Using ${software} ${version}`}</div>
  </Wrapper>
);

export default AuthorInfo;
