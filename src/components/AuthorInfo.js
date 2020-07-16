import React from 'react';
import styled from '@emotion/styled';

import { SnapchatGhost, Instagram, Twitter, Youtube } from '@styled-icons/fa-brands';

const Wrapper = styled('div')`
  .authorInfo {
    font-style: italic;
    font-size: 14px;
    margin-bottom: 20px;
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
`;

const AuthorInfo = ({author, snapchat, instagram, twitter, youtube}) =>
 (
   <Wrapper >
    <div className="authorInfo">
      { author && author.length > 0 &&
        <div>{`Contributed by ${author}`}</div>
      }
      <div className="authorLinks">
        { snapchat && snapchat.length > 0 &&
          <a href={`https://www.snapchat.com/add/${snapchat}`}>
            <div className="authorSocial">
              <SnapchatGhost/>
            </div>
          </a>
        }

        { instagram && instagram.length > 0 &&
          <a href={`https://www.instagram.com/${instagram}`}>
            <div className="authorSocial">
              <Instagram/>
            </div>
          </a>
        }

        { twitter && twitter.length > 0 &&
          <a href={`https://www.twitter.com/${twitter}`}>
            <div className="authorSocial">
              <Twitter/>
            </div>
          </a>
        }

        { youtube && youtube.length > 0 &&
          <a href={`https://www.twitter.com/${twitter}`}>
            <div className="authorSocial">
              <Youtube/>
            </div>
          </a>
        }
      </div>
    </div>
  </Wrapper>

);

export default AuthorInfo;
