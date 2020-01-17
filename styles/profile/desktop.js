import styled from 'styled-components';

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

import { Black, HeaderSize, CardSize, Gray, SentenceSize, TopicSize } from '../theme';

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
`

export const Header = styled.p`
  color: ${Black};
  font-size: ${HeaderSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  margin: 0;
  margin: 0.3rem 0 0.8rem 0;
`

export const ProfileFrame = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-basis: 50%; */
  /* justify-content: space-between; */
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
  align-items: center;
`

export const StyledName = styled.p`
  color: ${Black};
  font-size: ${TopicSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  margin: 0;
`

export const StyledText = styled.span`
  color: ${Gray};
  font-size: ${SentenceSize};
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: medium;
  margin-left: 0.5rem;
`

export const StyledSchoolIcon = styled(School).attrs(props => ({
  size: '1.2rem',
  color: 'black'
}))``

export const StyledMailIcon = styled(Mail).attrs(props => ({
  size: '1.2rem',
  color: 'black'
}))``

export const StyledBriefcaseIcon = styled(Briefcase).attrs(props => ({
  size: '1.2rem',
  color: 'black'
}))``

export const StyledTwitterIcon = styled(Twitter).attrs(props => ({
  size: '1.2rem',
  color: 'black'
}))``

export const StyledFacebookSquareIcon = styled(FacebookSquare).attrs(props => ({
  size: '1.2rem',
  color: 'black'
}))``

export const StyledGithubIcon = styled(Github).attrs(props => ({
  size: '1.2rem',
  color: 'black'
}))``

export const StyledLabIcon = styled(Lab).attrs(props => ({
  size: '1.2rem',
  color: 'black'
}))``

export const StyledLanguageIcon = styled(Language).attrs(props => ({
  size: '1.2rem',
  color: 'black'
}))``

export const StyledChipIcon = styled(Chip).attrs(props => ({
  size: '1.2rem',
  color: 'black'
}))``

export const StyledComputerIcon = styled(Computer).attrs(props => ({
  size: '1.2rem',
  color: 'black'
}))``

export const StyledCubeIcon = styled(Cube).attrs(props => ({
  size: '1.2rem',
  color: 'black'
}))``

export const StyledCreateIcon = styled(Create).attrs(props => ({
  size: '1.2rem',
  color: 'black'
}))``

export const ImageFrame = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  object-position: 0% 70%;
`
