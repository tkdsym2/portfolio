import React from 'react';

import { DesktopFrame, ContentsFrame } from '../../styles/works/works_desktop';

import {
        ParamBox,
        SettingBox,
        ParamFrame,
        StudyFrame,
        QuizText,
        QuizImage,
        StyledButton
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
      open: false,
      isImage: false,
      isTask: false
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
    // this.setState({
    //   quiz: _quiz
    // })

    const timer = setInterval(() => {
      let _initialCount = this.state.initialCount+1;
      this.setState({
        initialCount: _initialCount
      })
      if(this.state.initialCount > 4){
        clearInterval(timer);
        this.setState({
          isTask: true,
          quiz: _quiz
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
          initialCount: 0
        })
      }
    }, 800)
  }

  UpdateArray = () => {
    // let _quiz = TaskGenerator(this.state.len)
    // this.setState({
    //   quiz: _quiz
    // })
    console.log(this.state.quiz);
  }

  render(){
    return (
      <DesktopFrame>
        <ParamFrame>
          <ParamBox>
            <StyledButton color={!this.state.isTask} onClick={this.ShowInstruction}>START</StyledButton>
            <StyledButton color={this.state.isTask} onClick={this.UpdateArray}>UPDATE</StyledButton>
          </ParamBox>
          <SettingBox open={this.state.open}>
            <p>hoge</p>
          </SettingBox>
        </ParamFrame>
        <StudyFrame>
          {this.state.isTask ? (
            <QuizText>{this.state.quiz[this.state.count]}</QuizText>
          ) : (
            <QuizText>After {5 - this.state.initialCount} seconds, start task!</QuizText>
          )}
          {this.state.isImage ? <QuizImage /> : null}
        </StudyFrame>
      </DesktopFrame>
    )
  }
}