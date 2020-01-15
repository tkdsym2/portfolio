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
      <ProfileFrame>
        <Header>Kazuma Takada / 高田一真</Header>
        <DetailFrame>
          <ListWrapper>
            <ProfileList>
              <StyledLabIcon /><StyledText>Keita Watanabe Lab at Meiji University (M1). 2015~</StyledText>
            </ProfileList>
            <ProfileList>
              <StyledBriefcaseIcon /><StyledText>Fabnavi Project; Assistant Developer; web frontend, design. 2016~</StyledText>
            </ProfileList>
            <ProfileList>
              <StyledBriefcaseIcon /><StyledText>Sony Computer Science Labratory; Research Asssistant with Shunichi Kasahara. July. 2019~</StyledText>
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
            <ProfileList>
              <StyledText>My research field are Human-Computer Interaction (HCI) and Human Augmentation. In particular, hogehogehogehogehogehoge</StyledText>
            </ProfileList>
          </ListWrapper>
        </DetailFrame>
      </ProfileFrame>
      <ImageFrame src="https://i.gyazo.com/662f581635bd791007e4288f3ff45ece.jpg"/>
    </ContentsFrame>
    <ContentsFrame>
      <ProfileFrame>
        <Header>Education</Header>
        <ListWrapper>
          <ProfileList>
            <StyledSchoolIcon /><StyledText>B.S. in Computer Science at Meiji University (2015~2019)</StyledText>
          </ProfileList>
        </ListWrapper>
      </ProfileFrame>
      <ProfileFrame>
        <Header>Skills</Header>
        <ListWrapper>
          <ProfileList>
            <StyledSchoolIcon /><StyledText>Japanese (Native), English (Beginner)</StyledText>
          </ProfileList>
          <ProfileList>
            <StyledSchoolIcon /><StyledText>JavaScript(React), Python, Processing, Mobile(React Native or Android-Java), Touch Designer</StyledText>
          </ProfileList>
          <ProfileList>
            <StyledSchoolIcon /><StyledText>Arduino, Raspberry Pi, 3D Printer, Laser Cutter, Seld-Made Kyeboard (Hobby)</StyledText>
          </ProfileList>
          <ProfileList>
            <StyledSchoolIcon /><StyledText>AutoDesk Fusion360, AutoDesk Eagle(Beginner)</StyledText>
          </ProfileList>
          <ProfileList>
            <StyledSchoolIcon /><StyledText>Adobe CC (illustrator, lightroom, premiere), Procreate</StyledText>
          </ProfileList>
        </ListWrapper>
      </ProfileFrame>
    </ContentsFrame>
  </BioFrame>
)

export default Profile;