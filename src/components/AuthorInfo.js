import React from 'react';
import styled from '@emotion/styled';

import { SnapchatGhost, Instagram, Twitter, Youtube } from '@styled-icons/fa-brands';

import { ExternalLink } from '@styled-icons/heroicons-solid';

const Wrapper = styled('div')`
  .authorInfo {
    font-style: italic;
    font-size: 14px;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.heading};
  }

  .authorLinks {
    display: flex;
    flex-direction: row;
    color: ${props => props.theme.colors.heading};
  }

  .authorLinks a {
    color: ${props => props.theme.colors.heading};
    margin: 6px 16px 0px 0px;
  }

  .authorSocial {
    width: 18px;
  }

  .inlineSocial {
    width: 18px;
    display: inline-block;
  }

  .authorHomePageLink a {
    color: ${props => props.theme.colors.heading};
  }
`;

const AuthorInfo = ({ author, snapchat, instagram, twitter, youtube, homepage }) => (
  <Wrapper>
    <div className="authorInfo">
      {author && author.length > 0 && (
        <div className="authorHomePageLink">
          {`Contributed by ${author}`}{' '}
          {homepage && homepage.length > 0 && (
            <a href={`${homepage}`}>
              <div className="inlineSocial">
                <ExternalLink />
              </div>
            </a>
          )}
        </div>
      )}
      <div className="authorLinks">
        {snapchat && snapchat.length > 0 && (
          <a href={`https://www.snapchat.com/add/${snapchat}`}>
            <div className="authorSocial">
              <SnapchatGhost />
            </div>
          </a>
        )}

        {instagram && instagram.length > 0 && (
          <a href={`https://www.instagram.com/${instagram}`}>
            <div className="authorSocial">
              <Instagram />
            </div>
          </a>
        )}

        {twitter && twitter.length > 0 && (
          <a href={`https://www.twitter.com/${twitter}`}>
            <div className="authorSocial">
              <Twitter />
            </div>
          </a>
        )}

        {youtube && youtube.length > 0 && (
          <a href={`${youtube}`}>
            <div className="authorSocial">
              <Youtube />
            </div>
          </a>
        )}
      </div>
    </div>
  </Wrapper>
);

export default AuthorInfo;
