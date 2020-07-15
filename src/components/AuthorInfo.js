import React from 'react';
import styled from '@emotion/styled';

import { SnapchatGhost, Instagram, Twitter } from '@styled-icons/fa-brands';

const SnapchatIcon = SnapchatGhost

const InstagramIcon = styled(Instagram)`
color: white;
`;

const TwitterIcon = styled(Twitter)`
color: white;
`;

const Wrapper = styled('div')`
  .authorLinks {
    display: flex;
    flex-direction: row;
    color: ${props => props.theme.colors.heading};
  }

  .authorLinks a {
    color: ${props => props.theme.colors.heading};
    margin: 6px 24px 0px 0px;
  }

  .authorSocial {
    width: 24px;
  }
`;

const AuthorInfo = ({author, snapchat, instagram, twitter}) =>
 (
   <Wrapper >
    <div className="authorInfo">
      {author}
      <div className="authorLinks">
        <a href='https://www.snapchat.com/add/modelsbymike3d'>
          <div className="authorSocial">
            <SnapchatIcon/>
          </div>
        </a>
      </div>

      <ul className="socialWrapper">
        <li>

        </li>
        <li>
          <a href='https://www.instagram.com/modelsbymike3d/'>
            <div className="socialButton">
              <InstagramIcon />
            </div>
          </a>
        </li>
        <li>
          <a href='https://www.twitter.com/modelsbymike3d/'>
            <div className="socialButton">
              <TwitterIcon />
            </div>
          </a>
        </li>
      </ul>
    </div>
  </Wrapper>

);

export default AuthorInfo;
