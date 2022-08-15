import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import FT from './styles/FooterStyle';

export default function Footer() {
  const url = 'http://localhost:3000/';

  return (
    <FT.Container>
      <FT.MoreInfo>
        <FT.InfoBox>
          Community
        </FT.InfoBox>
        <FT.InfoBox style={{ paddingRight: '20%' }}>
          About
        </FT.InfoBox>
        <FT.LogoBox>
          ⚛︎ GAINZ
        </FT.LogoBox>
        <FT.InfoBox style={{ paddingLeft: '22%' }}>
          Blog
        </FT.InfoBox>
        <FT.InfoBox>
          Resources
        </FT.InfoBox>
      </FT.MoreInfo>
      <FT.ShareOnSocial>
        <FT.SocialIconContainer>
          <FT.InfoBox>
            <FT.A
              type="button"
              role="button"
              title="Share on facebook"
              href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
              target="_blank"
              rel="noopener"
            >
              <FontAwesomeIcon
                icon={faFacebookSquare}
                style={{ margin: '20px' }}
              />
            </FT.A>
          </FT.InfoBox>
          <FT.InfoBox>
            <FT.A
              type="button"
              role="button"
              title="Share on twitter"
              href={`https://twitter.com/intent/tweet?url=${url}`}
              rel="noopener"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ margin: '20px' }}
              />
            </FT.A>
          </FT.InfoBox>
          <FT.InfoBox>
            <FT.A
              type="button"
              role="button"
              title="Share on pinterest"
              href={`http://pinterest.com/pin/create/link/?url=${url}&media=https://www.kindpng.com/picc/m/31-310489_six-thinking-hats-red-hd-png-download.png`}
              rel="noopener"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faPinterest}
                style={{ margin: '20px' }}
              />
            </FT.A>
          </FT.InfoBox>
        </FT.SocialIconContainer>
        <FT.InfoBox>
          © GAINZ-TeamHiddenMist 2022. We love our users!
        </FT.InfoBox>
      </FT.ShareOnSocial>
    </FT.Container>
  );
}
