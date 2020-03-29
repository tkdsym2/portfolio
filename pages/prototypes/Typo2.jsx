import React from 'react';

import { DesktopFrame, ContentsFrame } from '../../styles/works/works_desktop';

import {
        ParamBox,
        SettingBox,
        ParamFrame,
        StudyFrame,
        QuizText,
        QuizImage,
        StyledButton,
        UsingLetters,
        StyledForm,
        StyledButtton,
        SetttingBox,
        AnswerText
       } from '../../styles/prototypes/typo2'
import { TaskGenerator } from '../../utils/QuizGenerator'

export default class Typo2 extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      quiz: [],
      len: 5,
      count: 0,
      initialCount: 0,
      isImage: false,
      isTask: false,
      property: false,
      interval: 1000,
      fontSize: 1,
      carning: 0,
      answers: false,
      answerList: false,
      ansList: []
    }
  }

  componentDidMount() {
    // let _quiz = TaskGenerator(this.state.len)
    // this.setState({
    //   quiz: _quiz
    // })
  }

  ShowInstruction = () => {
    let _quiz = TaskGenerator(this.state.len)
    this.setState({
      answers: false,
      answerList: false
    })

    const timer = setInterval(() => {
      let _initialCount = this.state.initialCount+1;
      this.setState({
        initialCount: _initialCount
      })
      if(this.state.initialCount > 4){
        clearInterval(timer);
        this.setState({
          isTask: true,
          quiz: this.state.quiz.concat(_quiz)
        })
        this.StartTimer()
      }
    }, 1000)
  }

  StartTimer = () => {
    const timer = setInterval(() => {
      let _count = this.state.count + 1;
      this.setState({
        count: _count
      })
      if(_count > this.state.quiz.length){
        clearInterval(timer)
        this.setState({
          isTask: false,
          initialCount: 0,
          answers: true
        })
      }
    }, this.state.interval)
  }

  OpenProperty = () => {
    let _flag = !this.state.property;
    this.setState({
      property: _flag
    })
  }
  
  ChangeTaskNum = event => {
    let _len = event.target.value;
    this.setState({
      len: _len
    })
  }

  ChangeInterval = event => {
    let _interval = event.target.value;
    this.setState({
      interval: _interval
    })
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

  OpenAnswers = () => {
    let _answerList = !this.state.answerList
    this.setState({
      answerList: _answerList,
      ansList: this.state.ansList.concat(this.state.quiz)
    })
  }

  render(){
    return (
      <DesktopFrame>
        <ParamFrame>
          <AnswerText>
            Pleae remember the words that appear.
          </AnswerText>
          <ParamBox>
            <StyledButton color={!this.state.isTask} onClick={this.ShowInstruction}>START</StyledButton>
            <StyledButton color={!this.state.property} onClick={this.OpenProperty}>
              {this.state.property ? 'CLOSE' : 'OPEN'}
            </StyledButton>
          </ParamBox>
          <SettingBox open={this.state.property}>
            <UsingLetters>Task Num: <StyledForm defaultValue={this.state.len} value={this.state.len} onChange={e => this.ChangeTaskNum(e)}/>[個] (max: 12)</UsingLetters>
            <UsingLetters>Interval: <StyledForm defaultValue={this.state.interval} value={this.state.value} onChange={e => this.ChangeInterval(e)} />[ms]</UsingLetters>
            <UsingLetters>Font Size: <StyledForm defaultValue={this.state.fontSize} value={this.state.fontSize} onChange={e => this.ChangeFontSize(e)}/>[em]</UsingLetters>
            <UsingLetters>Carning: <StyledForm defaultValue={this.state.carning} value={this.state.carning} onChange={e => this.ChangeCarning(e)} />[em]</UsingLetters>
          </SettingBox>
        </ParamFrame>
        <StudyFrame>
          {this.state.isTask ? (
            <QuizText fontSize={this.state.fontSize} carning={this.state.carning}>{this.state.quiz[this.state.count]}</QuizText>
          ) : (
            <QuizText>After {5 - this.state.initialCount} seconds, start task!</QuizText>
          )}
          {this.state.isImage ? <QuizImage /> : null}
        </StudyFrame>
        <ParamFrame>
          <StyledButtton visible={this.state.answers} color={true} onClick={this.OpenAnswers}>SHOW ANSWERS</StyledButtton>
          <SetttingBox open={this.state.answerList}>
            {this.state.ansList.map((_answer, index) => {
              <AnswerText key={index}>{_answer},</AnswerText>
            })}
          </SetttingBox>
        </ParamFrame>
      </DesktopFrame>
    )
  }
}