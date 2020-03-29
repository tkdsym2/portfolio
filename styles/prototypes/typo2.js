import styled from 'styled-components';

import { Black, BlackGray, Gray, Blue, White } from '../theme';

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

export const ParamFrame = styled.div`
  display: flex;
  flex-direction: column;
`

export const StudyFrame = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Black};
  font-size: 32px;
`

export const QuizText = styled.p`
  font-size: ${props => props.fontSize}em;
  letter-spacing: ${props => props.carning}em;
  color: ${White};
`

export const QuizImage = styled.image`

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


export const StyledButtton = styled.button`
  background: ${props => props.color ? Blue : White};
  color: ${props => props.color ? White : Black};
  visibility: ${props => props.visible ? 'visible' : 'hidden' };
  /* display: ${props => props.visible ? 'block' : 'none' }; */

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;

  &:hover{
    color: ${Black};
  }
`

export const AnswerText = styled.p`
  font-size: 1em;
  color: ${Gray};
  margin: 0 1em 0 1em;
`

export const SetttingBox = styled.div`
  display: ${props => props.open ? 'flex' : 'none'};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`