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

export const FilmFrame = styled.div`
  visibility: ${props => props.toggle ? 'visible' : 'hidden'};
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 300px;
  background: white;
`;


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
  font-family: 'Noto Sans CJK JP';
  width: 100%;
  height: 1070px;
  font-size: 1.2em;
  word-break: break-all;
`

export const AnswerText = styled.p`
  font-size: 1em;
  color: ${Gray};
  margin: 0 1em 0 1em;
`