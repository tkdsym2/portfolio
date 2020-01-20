import React from 'react';

import {
  BioFrame,
  ContentsFrame,
  Header,
  JaHeader,
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
  StyledLanguageIcon,
  StyledChipIcon,
  StyledCubeIcon,
  StyledComputerIcon,
  StyledCreateIcon,
  StyledText,
  StyledLink
} from '../../../styles/profile/desktop'

const Profile = () => (
  <BioFrame>
    <ContentsFrame>
      <ProfileFrame>
        <Header>Kazuma Takada <JaHeader>/ 高田一真</JaHeader></Header>
        <DetailFrame>
          <ListWrapper>
            <ProfileList>
              <span><StyledLabIcon /></span>
              <StyledText> <StyledLink href="https://keita-lab.jp/" target="_blank">Keita Watanabe Lab</StyledLink> at Meiji University (M1). 2015~</StyledText>
            </ProfileList>
            <ProfileList>
              <span><StyledBriefcaseIcon /></span>
              <StyledText> <StyledLink href="http://mobiquitous.com/fabnavi/index-en.html" target="_blank">Fabnavi Project;</StyledLink> Assistant Developer(web frontend, design); 2016~</StyledText>
            </ProfileList>
            <ProfileList>
              <span><StyledBriefcaseIcon /></span>
              <StyledText>Sony Computer Science Labratory; Research Asssistant with <StyledLink href="https://shunichikasahara.com/" target="_blank">Shunichi Kasahara</StyledLink>; July.2019~</StyledText>
            </ProfileList>
            <ProfileList>
              <span><StyledMailIcon /></span>
              <StyledText>kazuma.takada222[at]gmail.com</StyledText>
            </ProfileList>
            <ProfileList>
              <span><StyledTwitterIcon /></span>
              <StyledText><StyledLink href="https://twitter.com/tkdsym2" target="_blank">@tkdsym2</StyledLink></StyledText>
            </ProfileList>
            <ProfileList>
              <span><StyledFacebookSquareIcon /></span>
              <StyledText><StyledLink href="https://www.facebook.com/kazuma.takada.90" target="_blank">kazuma.takada</StyledLink></StyledText>
            </ProfileList>
            <ProfileList>
              <span><StyledGithubIcon /></span>
              <StyledText><StyledLink href="https://github.com/tkdsym2" target="_blank">@tkdsym2</StyledLink></StyledText>
            </ProfileList>
            <ProfileList />
            <ProfileList>
              <StyledText>My research field are Human-Computer Interaction (HCI) and Human Augmentation. In particular, I'm interested in understanding our body from the Sense of Agency and the Sense of Ownership and expanding our interaction frame by using augmented devices.</StyledText>
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
            <span><StyledSchoolIcon /></span>
            <StyledText>Master's Student at Meiji University. Advisor: <StyledLink href="https://scrapbox.io/keitawatanabe/" target="_blank">Keita Watanabe</StyledLink>(2019~).</StyledText>
          </ProfileList>
          <ProfileList>
            <span><StyledSchoolIcon /></span>
            <StyledText>B.S. in Computer Science at Meiji University(2015~2019)</StyledText>
          </ProfileList>
        </ListWrapper>
      </ProfileFrame>
      <ProfileFrame>
        <Header>Skills</Header>
        <ListWrapper>
          <ProfileList>
            <span><StyledLanguageIcon /></span>
            <StyledText>Japanese(Native), English(Beginner)</StyledText>
          </ProfileList>
          <ProfileList>
            <span>
              <StyledComputerIcon />
            </span>
            <StyledText>JavaScript(React), Python, Processing, React Native, Touch Designer</StyledText>
          </ProfileList>
          <ProfileList>
            <span>
              <StyledChipIcon />
            </span>
            <StyledText>Arduino, Raspberry Pi, 3D Printer, Laser Cutter, Self-Made Keyboard(Hobby)</StyledText>
          </ProfileList>
          <ProfileList>
            <span>
              <StyledCubeIcon />
            </span>
            <StyledText>AutoDesk Fusion360, AutoDesk Eagle(Beginner)</StyledText>
          </ProfileList>
          <ProfileList>
            <span>
              <StyledCreateIcon />
            </span>
            <StyledText>Adobe CC(illustrator, lightroom, premiere), Procreate</StyledText>
          </ProfileList>
        </ListWrapper>
      </ProfileFrame>
    </ContentsFrame>
  </BioFrame>
)

export default Profile;