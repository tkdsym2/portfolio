import styled, { keyframes, css } from 'styled-components';

import { Black, BlackGray, Gray, Blue, White } from '../theme';

export const StudyFrame = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0rem 0 4rem 0;
`

export const TaskFrame = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  border: 1px solid;
  border-color: ${Gray};
  border-radius: 3px;
  padding: 0;
  margin: 0;
  font-size: 19px;
`

const flash = keyframes`
  0%, 100%{
    opacity: 0
  }

  50% {
    opacity: 1
  }
`

const normal = keyframes`
  0%, 100% {
    opacity: 0
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    /* transform: scale(1); */
    opacity: 0;
  }
`;

const noise = keyframes`
  0% {
    left: -10px;
    clip: rect(10px, 9999px, 63px, 0);
  }
  4% {
    clip: rect(137px, 9999px, 150px, 0);
  }
  8% {
    clip: rect(82px, 9999px, 178px, 0);
  }
  12% {
    left: -2px;
    clip: rect(85px, 9999px, 125px, 0);
  }
  16% {
    clip: rect(223px, 9999px, 258px, 0);
  }
  20% {
    left: 10px;
    clip: rect(100px, 9999px, 146px, 0);
  }
  24% {
    clip: rect(41px, 9999px, 72px, 0);
  }
  28% {
    clip: rect(9px, 9999px, 45px, 0);
  }
  32% {
    clip: rect(136px, 9999px, 164px, 0);
    filter: hue-rotate(-25deg);
  }
  36% {
    left: -9px;
    clip: rect(84px, 9999px, 116px, 0);
  }
  40% {
    top: 7px;
    clip: rect(229px, 9999px, 315px, 0);
  }
  44% {
    clip: rect(37px, 9999px, 73px, 0);
  }
  48% {
    clip: rect(163px, 9999px, 180px, 0);
  }
  52% {
    clip: rect(205px, 9999px, 244px, 0);
  }
  56% {
    left: 6px;
    clip: rect(135px, 9999px, 170px, 0);
  }
  60% {
    clip: rect(14px, 9999px, 100px, 0);
  }
  64% {
    left: -2px;
    clip: rect(116px, 9999px, 129px, 0);
  }
  68% {
    clip: rect(37px, 9999px, 69px, 0);
  }
  72% {
    top: -9px;
    clip: rect(232px, 9999px, 264px, 0);
  }
  76% {
    left: -8px;
    clip: rect(100px, 9999px, 196px, 0);
    filter: hue-rotate(35deg);
  }
  80% {
    clip: rect(199px, 9999px, 245px, 0);
  }
  84% {
    clip: rect(37px, 9999px, 73px, 0);
  }
  88% {
    left: -10px;
    clip: rect(1px, 9999px, 296px, 0);
  }
  92% {
    clip: rect(141px, 9999px, 272px, 0);
  }
  96% {
    clip: rect(33px, 9999px, 65px, 0);
  }
  100% {
    clip: rect(137px, 9999px, 273px, 0);
  }
`

export const FilmFrame = styled.div`
  visibility: ${props => props.toggle ? 'visible' : 'hidden'};
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 1000px;
  background: white;
  opacity: 0.7;
`;

export const NoiseFrame = styled.div`
  visibility: ${props => props.toggle ? 'visible' : 'hidden'};
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 1000px;
  background: white;
`

export const TaskLetter = styled.p`
  position: absolute;
  left: 0px;
  top: 0px;
  font-family: 'Noto Sans CJK JP';
  word-break: break-all;
  font-size: ${props => props.fontSize}em;
  margin: 0;
  letter-spacing: ${props => props.carning}em;
  line-height: ${props => props.lineHeight}em;
  /* margin: 0.5em; */
`

export const ParamFrame = styled.div`
  display: flex;
  flex-direction: column;
`

export const ParamBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const SettingBox = styled.div`
  /* display: flex; */
  display: ${props => props.open ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const UsingLetters = styled.p`
  font-size: 1em;
  color: ${Gray};
  margin: 0.5em;
`

export const StyledForm = styled.input.attrs(props => ({
  type: 'text',
}))`
  padding: 0.5em;
  margin: 0.5em;
  color: ${Gray};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`

// --------------------

export const EditorFrame = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: ${Blue}; */
`

export const StyledButton = styled.button`
  background: ${props => props.color ? Blue : White};
  color: ${props => props.color ? White : Black};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;

  &:hover{
    color: ${Black};
  }
`

export const TaskFrom = styled.textarea`
  position: absolute;
  left: 0px;
  top: 0px;
  font-family: 'Noto Sans CJK JP';
  width: 200%;
  height: 1070px;
  font-size: 1.2em;
  word-break: break-all;
  letter-spacing: 0.5em;
`

export const FilmFrameInput = styled.div`
  visibility: ${props => props.toggle ? 'visible' : 'hidden'};
  position: absolute;
  top: 0px;
  left: 0px;
  width: 200%;
  height: 1000px;
  background: white;
  opacity: 0.7;
`;

export const AnswerText = styled.p`
  font-size: 1em;
  color: ${Gray};
  margin: 0 1em 0 1em;
`