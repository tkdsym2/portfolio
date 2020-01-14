import React from 'react';

import {
  BioFrame,
  ContentsFrame,
  Header,
  ProfileFrame,
  DetailFrame,
  ImageFrame,
  ListWrapper,
  ProfileList,
  StyledSchoolIcon,
  StyledMailIcon,
  StyledBriefcaseIcon,
  StyledTwitterIcon,
  StyledFacebookSquareIcon,
  StyledGithubIcon,
  StyledLabIcon,
  StyledText
} from '../../../styles/profile/desktop'

const Profile = () => (
  <BioFrame>
    <ContentsFrame>
      <Header>Kazuma Takada / 高田一真</Header>
      <ProfileFrame>
        <DetailFrame>
          <ListWrapper>
            <ProfileList>
              <StyledSchoolIcon /><StyledText>Keita Watanabe Lab at Meiji University (M1)</StyledText>
            </ProfileList>
            <ProfileList>
              <StyledBriefcaseIcon /><StyledText>Fabnavi Project; Assistant Developer; web frontend, design</StyledText>
            </ProfileList>
            <ProfileList>
              <StyledBriefcaseIcon /><StyledText>Sony Computer Science Labratory; Research Asssistant with Shunichi Kasahara</StyledText>
            </ProfileList>
            <ProfileList>
              <StyledMailIcon /><StyledText>kazuma.takada222[at]gmail.com</StyledText>
            </ProfileList>
            <ProfileList>
              <StyledTwitterIcon /><StyledText>@tkdsym2</StyledText>
            </ProfileList>
            <ProfileList>
              <StyledFacebookSquareIcon /><StyledText>kazuma.takada</StyledText>
            </ProfileList>
            <ProfileList>
              <StyledGithubIcon /><StyledText>@tkdsym2</StyledText>
            </ProfileList>
            <ProfileList />
            <ProfileList />
            <ProfileList />
            <ProfileList>
              <StyledGithubIcon /><StyledText>@tkdsym2</StyledText>
            </ProfileList>
          </ListWrapper>
        </DetailFrame>
        <ImageFrame src="https://i.gyazo.com/662f581635bd791007e4288f3ff45ece.jpg"/>
      </ProfileFrame>
    </ContentsFrame>
  </BioFrame>
)

export default Profile;