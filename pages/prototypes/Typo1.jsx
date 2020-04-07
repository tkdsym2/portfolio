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
         AnswerText,
         FilmFrame,
        } from '../../styles/prototypes/typo1'
import { LetterGenerator, CorrectTask, TaskGenerator, CorrectSentence } from '../../utils/LetterGenerator'

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
      number: 200,
      task: '',
      currentNum: 0,
      correctThresh: 5,
      correctedPos: 0,
      enGenerateLetters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      jaGenerateLetters: 'むかし、むかしきたのくににすむひとりのわかものがちちおやとゆきのなか、かりにでかけました。とつぜん、てんきがわるくなったので、ふたりはやまごやでよるをあかし、てんきがかいふくするのをまちました。まよなかのことです。ねているといりぐちがばたんとあき、しろいきものをきたひとりのいろじろのおんなのひとがそこにたっていました。わかものがはなしかけようとすると、そのおんなのひとはちちおやにしろいいきをふきかけたところ、ちちおやはたちまちしろくなるといっしゅんにこおってしまいました。ゆきおんなに、わかものはみうごきできませんでした。「わかいもの、おまえはたすけてやるが、きょうのことはけっしてだれにもはなしてはいけない。」そういうとゆきのなかにきえてしまいました。つぎのあさ、めがさめるとちちおやはこおってしんでいました。それからいちねんがたったあるあめのひのことです。うつくしいおんなのひとがのきしたであまやどりしていました。わかものはおんなのひとをいえのなかにはいれてあげるといきさつをきいたところ「なまえはなんという。これからどこにいくのか。」「なまえは「おゆき」といい、わたしにはみうちはいません。これからいくところもありません。」それをきいてしんぱいしたわかものはしばらくいえにおゆきをおいておくことをきめました。ふたりはやがてこいにおち、けっこんしてこどももでき、しあわせなひびをおくっていました。あるゆきのひのこと、わかものはうっかりとあのひのやまごやでのことをはなしてしまいました。おゆきはかなしいかおでいいました。「あれほどはなしてはいけないといったのにはなしてしまいましたね。」そういうと、おゆきはかれのもとからきえました。おゆきこそゆきおんなだったのです。それいらいおゆきのすがたをみたものはひとりもいませんでした。',
      enLetters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      jaLetters: 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよわをん',
      en: false,
      carning: 0.5,
      lineHeight: 1.55,
      fontSize: 1.2,
      property: false,
      toggle: false,
      blindTime: 100,
      loaded: false,
      sum: 52
    }

    this.CorrctLetters = this.CorrctLetters.bind(this);
  }

  // API request
  componentDidMount() {
    let _letters = this.state.en ? this.state.enGenerateLetters : this.state.jaGenerateLetters
    // let _task = LetterGenerator(this.state.number, _letters);
    // let _task = TaskGenerator(_letters);
    let _task = this.state.jaGenerateLetters;
    this.setState({
      task: _task,
      loaded: true
    })
  }

  GenerateTask = () => {
    let _letters = this.state.en ? this.state.enGenerateLetters : this.state.jaGenerateLetters;
    let _task = LetterGenerator(this.state.number, _letters);
    this.setState({
      task: _task
    })
  }

  // important func:
  // this correct task lettes by current letter count of user
  // if true: animation have to run
  CorrctLetters(current)  {
    const randomJudge = Math.floor(Math.random()*2)
    console.log(randomJudge);
    if(current >= this.state.correctThresh && this.state.sum > -1) {
      if(randomJudge > 0) {
        let correctStart = current - this.state.correctThresh;
        let correctedTask = CorrectSentence(this.state.jaGenerateLetters, correctStart, this.state.sum)
        // console.log(_correctedTask);
        // let correctedTask = CorrectTask(current, this.state.task, this.state.correctThresh, correctStart, this.state.jaLetters, this.state.enLetters, this.state.en)
        let _sum = this.state.sum - 1;
        this.setState({
          task: correctedTask,
          toggle: !this.state.toggle,
          sum: _sum
        }, () => {
          setTimeout(() => {
            this.setState({
              toggle: !this.state.toggle
            })
          }, this.state.blindTime)
        })
      } else {
        this.setState({
          toggle: !this.state.toggle,
        }, () => {
          setTimeout(() => {
            this.setState({
              toggle: !this.state.toggle
            })
          }, this.state.blindTime)
        })
      }
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

  Test = () => {
    this.setState({
      test: !this.state.test
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
        {this.state.loaded ? (
          <StudyFrame>
            <TaskFrame>
              <TaskLetter
                fontSize={this.state.fontSize}
                carning={this.state.carning}
                lineHeight={this.state.lineHeight}
              >{this.state.task}</TaskLetter>
              <FilmFrame toggle={this.state.toggle}/>
            </TaskFrame>
            <EditorFrame>
              <InputForm task={this.state.task} counter={num => {this.CorrctLetters(num);}}/>
            </EditorFrame>
          </StudyFrame>
        ) : (
          <UsingLetters>now loading...</UsingLetters>
        )}
      </DesktopFrame>
    )
  }
}
