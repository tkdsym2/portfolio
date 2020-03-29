import React from 'react';

import { DesktopFrame, ContentsFrame } from '../../styles/works/works_desktop';
import { StudyFrame,
         TaskFrame,
         EditorFrame,
         ParamFrame,
         ParamBox,
         StyledButton,
         TaskLetter,
         TaskFrom,
         UsingLetters,
         SettingBox,
         StyledForm,
         AnswerText
        } from '../../styles/prototypes/typo1'
import { LetterGenerator, CorrectTask } from '../../utils/LetterGenerator'

class InputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputLetters: 0,
      prevLetters:'',
      currentLetters: ''
    }
  }

  componentDidMount = () => {
    
  }

  onInputChange = event => {
    let letters = event.target.value;
    let sum = letters.length;
    this.setState({
      inputLetters: sum,
      currentLetters: letters
    })
    this.props.counter(sum);
  }

  render(){
    return (
      <TaskFrom onChange={e => this.onInputChange(e)} />
    )
  }
}

export default class Typo1 extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      number: 2000,
      task: '',
      currentNum: 0,
      correctThresh: 30,
      correctedPos: 0,
      enGenerateLetters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      jaGenerateLetters: 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよわをん',
      enLetters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      jaLetters: 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよわをん',
      en: true,
      carning: 0,
      lineHeight: 1.55,
      fontSize: 1,
      property: false
    }
  }

  componentDidMount() {
    let _letters = this.state.en ? this.state.enGenerateLetters : this.state.jaGenerateLetters
    let _task = LetterGenerator(this.state.number, _letters);
    this.setState({
      task: _task
    })
  }

  GenerateTask = () => {
    let _letters = this.state.en ? this.state.enGenerateLetters : this.state.jaGenerateLetters;
    let _task = LetterGenerator(this.state.number, _letters);
    this.setState({
      task: _task
    })
  }

  CorrctLetters = current => {
    if(current >= this.state.correctThresh) {
      let correctStart = current - this.state.correctThresh;
      let correctedTask = CorrectTask(current, this.state.task, this.state.correctThresh, correctStart, this.state.jaLetters, this.state.enLetters, this.state.en)
      this.setState({
        task: correctedTask
      })
    } else {
      this.setState({
        currentNum: current
      })
    }
  }

  ChangeLang = lang => {
    if(lang === 'en') {
      this.setState({
        en: true
      })
    } else {
      this.setState({
        en: false
      })
    }
    // this.GenerateTask()
  }

  ChangeFontSize = event => {
    let _size = event.target.value;
    this.setState({
      fontSize: _size
    })
  }

  ChangeCarning = event => {
    let _carning = event.target.value;
    this.setState({
      carning: _carning
    })
  }

  ChangeLineHeight = event => {
    let _height = event.target.value;
    this.setState({
      lineHeight: _height
    })
  }

  ChangeLetter = event => {
    let _letters = event.target.value
    if(this.state.en){
      this.setState({
        enLetters: _letters
      })
    } else {
      this.setState({
        jaLetters: _letters
      })
    }
  }

  ChangeGenerateLetter = event => {
    let _letters = event.target.value
    if(this.state.en){
      this.setState({
        enGenerateLetters: _letters
      })
    } else {
      this.setState({
        jaGenerateLetters: _letters
      })
    }
  }

  ChangeThresh = event => {
    let _thresh = event.target.value;
    this.setState({
      correctThresh: _thresh
    })
  }

  ChangeNumberLetters = event => {
    let _numbers = event.target.value;
    this.setState({
      number: _numbers
    })
  }

  OpenPropery = () => {
    let _flag = !this.state.property
    this.setState({
      property: _flag
    })
  }

  render() {
    return (
      <DesktopFrame>
        <ParamFrame>
          <AnswerText>
            Please transcribe the string that appears on the left to the right
          </AnswerText>
          <ParamBox>
            {/* Language Property */}
            <StyledButton color={this.state.property} onClick={this.OpenPropery}>Open Property</StyledButton>
            <StyledButton color={!this.state.en ? true:false} onClick={() => this.ChangeLang('ja')}>Japanese</StyledButton>
            <StyledButton color={this.state.en ? true:false} onClick={() => this.ChangeLang('en')}>English</StyledButton>
            <StyledButton color={true}onClick={this.GenerateTask}>Generate</StyledButton>
          </ParamBox>
          {/* Visual Property */}
          <SettingBox open={this.state.property}>
            {/* Corrected Letters */}
            <UsingLetters>
              GenerateLetters: {this.state.en ? <StyledForm defaultValue={this.state.enGenerateLetters} value={this.state.enGenerateLetters} onChange={e => this.ChangeGenerateLetter(e)}/> : <StyledForm defaultValue={this.state.jaGenerateLetters} value={this.state.jaGenerateLetters} onChange={e => this.ChangeGenerateLetter(e)}/>}
            </UsingLetters>
            <UsingLetters>
              Correcter Letters: {this.state.en ? <StyledForm defaultValue={this.state.enLetters} value={this.state.enLetters} onChange={e => this.ChangeLetter(e)}/> : <StyledForm defaultValue={this.state.jaLetters} value={this.state.jaLetters} onChange={e => this.ChangeLetter(e)}/>}
            </UsingLetters>
            <UsingLetters>
              Font Size: <StyledForm defaultValue={this.state.fontSize} onChange={e => this.ChangeFontSize(e)} />[em]
            </UsingLetters>
            <UsingLetters>
              Carning: <StyledForm defaultValue={this.state.carning} onChange={e => this.ChangeCarning(e)}/>[em]
            </UsingLetters>
            <UsingLetters>
              Line Height: <StyledForm defaultValue={this.state.lineHeight} onChange={e => this.ChangeLineHeight(e)} />[em]
            </UsingLetters>
            <UsingLetters>
              Thresh: <StyledForm defaultValue={this.state.correctThresh} onChange={e => this.ChangeThresh(e)} />[characters] over
            </UsingLetters>
            <UsingLetters>
              Task Numbers: <StyledForm defaultValue={this.state.number} onChange={e => this.ChangeNumberLetters(e)} />[characters]
            </UsingLetters>
          </SettingBox>
        </ParamFrame>
        <StudyFrame>
          <TaskFrame>
            <TaskLetter
              fontSize={this.state.fontSize}
              carning={this.state.carning}
              lineHeight={this.state.lineHeight}
            >{this.state.task}</TaskLetter>
          </TaskFrame>
          <EditorFrame>
            <InputForm task={this.state.task} counter={num => {this.CorrctLetters(num);}}/>
          </EditorFrame>
        </StudyFrame>
      </DesktopFrame>
    )
  }
}
