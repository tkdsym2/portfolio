import styled from 'styled-components';
import media from 'styled-media-query';

import { School } from 'styled-icons/material/School';
import { Mail } from 'styled-icons/material/Mail';
import { BirthdayCake } from 'styled-icons/fa-solid/BirthdayCake';
import { Briefcase } from 'styled-icons/boxicons-solid/Briefcase';
import { Twitter } from 'styled-icons/boxicons-logos/Twitter';
import { FacebookSquare } from 'styled-icons/boxicons-logos/FacebookSquare';
import { Github } from 'styled-icons/boxicons-logos/Github';
import { Lab } from 'styled-icons/icomoon/Lab';
import { Language } from 'styled-icons/material/Language';
import { Chip } from 'styled-icons/boxicons-regular/Chip';
import { Computer } from 'styled-icons/material/Computer';
import { Cube } from 'styled-icons/boxicons-solid/Cube';
import { Create } from 'styled-icons/material/Create';

import {
  Black,
  HeaderSize,
  CardSize,
  Gray,
  SentenceSize,
  TopicSize,
  large,
  IconSize,
  BlackGray,
  Blue
} from '../theme';

export const BioFrame = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
export const ContentsFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2.5rem 0 0 0;
  ${media.lessThan(`${large}`)`
    flex-direction: column;
    margin: 0;
  `}
`

export const Header = styled.p`
  color: ${Black};
  font-size: ${HeaderSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  letter-spacing: 0.1rem;
  margin: 0;
  margin: 0.3rem 0 0.8rem 0;
`

export const JaHeader = styled.span`
  color: ${Gray};
  font-size: ${TopicSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  letter-spacing: 0rem;
  margin: 0;
  margin: 0 0 0 0.3rem;
`

export const ProfileFrame = styled.div`
  display: flex;
  flex-direction: column;
  ${media.lessThan(`${large}`)`
    margin: 2.5rem 0 0 0;
  `}
`

export const DetailFrame = styled.div`
  display: flex;
  flex-direction: column;
`

export const ListWrapper = styled.ul`
  padding-left: 0;
  list-style: none;
  margin: 0;
`

export const ProfileList = styled.li`
  padding: 0;
  padding: 0.3rem 0 0.3rem 0;
  display: flex;
  align-items: flex-start;
`

export const StyledName = styled.p`
  color: ${Black};
  font-size: ${TopicSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  margin: 0;
`

export const StyledText = styled.span`
  color: ${BlackGray};
  font-size: ${SentenceSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: medium;
  margin-left: 0.8rem;
  letter-spacing: 0.01rem;
`

export const StyledLink = styled.a`
  color: ${BlackGray};
  font-size: ${SentenceSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: medium;

  &:hover {
    color: ${Blue};
  }
`

export const StyledSchoolIcon = styled(School).attrs(props => ({
  size: `${IconSize}`,
  color: `${BlackGray}`
}))``

export const StyledMailIcon = styled(Mail).attrs(props => ({
  size: `${IconSize}`,
  color: `${BlackGray}`
}))``

export const StyledBriefcaseIcon = styled(Briefcase).attrs(props => ({
  size: `${IconSize}`,
  color: `${BlackGray}`
}))``

export const StyledTwitterIcon = styled(Twitter).attrs(props => ({
  size: `${IconSize}`,
  color: `${BlackGray}`
}))``

export const StyledFacebookSquareIcon = styled(FacebookSquare).attrs(props => ({
  size: `${IconSize}`,
  color: `${BlackGray}`
}))``

export const StyledGithubIcon = styled(Github).attrs(props => ({
  size: `${IconSize}`,
  color: `${BlackGray}`
}))``

export const StyledLabIcon = styled(Lab).attrs(props => ({
  size: `${IconSize}`,
  color: `${BlackGray}`
}))``

export const StyledLanguageIcon = styled(Language).attrs(props => ({
  size: `${IconSize}`,
  color: `${BlackGray}`
}))``

export const StyledChipIcon = styled(Chip).attrs(props => ({
  size: `${IconSize}`,
  color: `${BlackGray}`
}))``

export const StyledComputerIcon = styled(Computer).attrs(props => ({
  size: `${IconSize}`,
  color: `${BlackGray}`
}))``

export const StyledCubeIcon = styled(Cube).attrs(props => ({
  size: `${IconSize}`,
  color: `${BlackGray}`
}))``

export const StyledCreateIcon = styled(Create).attrs(props => ({
  size: `${IconSize}`,
  color: `${BlackGray}`
}))``

export const ImageFrame = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  object-position: 0% 70%;
  ${media.lessThan(`${large}`)`
    display: none;
  `}
`
