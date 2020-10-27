import Link from 'next/link';
import * as S from './styles';

const Header = () => (
  <S.Wrapper>
    <S.InnerWrapper>
      <div>
        <Link href="/">
          <a>
            <S.Logo
              src="/img/wilsonneto.png"
              alt="Logo Wilson Neto"
              role="logo"
            />
          </a>
        </Link>
      </div>
      <div>
        <S.SocialIcon target="_blank" href="/" role="social-link">
          <img src="/img/ic-github.svg" alt="Wilson Neto - Github" />
        </S.SocialIcon>
        <S.SocialIcon target="_blank" href="/" role="social-link">
          <img src="/img/ic-linkedin.svg" alt="Wilson Neto - Linkedin" />
        </S.SocialIcon>
      </div>
    </S.InnerWrapper>
  </S.Wrapper>
);

export default Header;
