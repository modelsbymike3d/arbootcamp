import React from 'react';
import styled from 'styled-components'

import { SnapchatGhost, Instagram, Twitter } from '@styled-icons/fa-brands';

const SnapchatIcon = styled(SnapchatGhost)`
color: white;
`;

const InstagramIcon = styled(Instagram)`
color: white;
`;

const TwitterIcon = styled(Twitter)`
color: white;
`;

const SocialLinks = () =>
 (
   <>
    <li>
      <a href='https://www.snapchat.com/add/modelsbymike3d'>
        <div className="socialButton">
          <SnapchatIcon/>
        </div>
      </a>
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
  </>
);

export default SocialLinks;
