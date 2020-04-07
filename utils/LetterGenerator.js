// let S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const axios = require('axios');
const qs = require('qs');

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const AnalyzeLetter = sentence => {
  axios.post('https://maapi.net/apis/mecapi', 
    qs.stringify(
      {
        'sentence': sentence,
        'format': 'json',
        'response': ['surface', 'feature', 'baseform', 'pronounciation'],
      }
  ))
  .then(res => {
    return res.data
  })
}

export const TaskGenerator = sentence => {
  const data = {  
    'app_id': 'b30d6a1c7e19eb2e153fe51c91b531d2e9d1dcedcacab635f539f69febd22df8',
    'sentence': 'むかし、むかし北の国に住む一人の若者が父親と雪の中、狩に出かけました。突然、天気が悪くなったので、二人は山小屋で夜をあかし、天気が回復するのを待ちました。真夜中のことです。寝ていると入り口がバタンとあき、白い着物を着た一人の色白の女の人がそこに立っていました。',
    'output_type': 'hiragana'
  };

  const options = {
    method: 'post',
    // headers: { 'content-type': 'application/json' },
    data: qs.stringify(data),
    url: 'https://labs.goo.ne.jp/api/hiragana'
  };

  axios(options)
    .then(res => {
      let _sentence = AnalyzeLetter(res.data.converted)
      return res.data.converted.replace(/\s+/g, "")
    })
    .catch(err => {
      console.error(err)
      return 'ほげほげ'
    })
}


export const LetterGenerator = (number, letters) => {
  return Array.from(Array(number)).map(()=>letters[Math.floor(Math.random()*letters.length)]).join('')
}

const InitialArray = [
  'むかし', '、',  'むかし',  'きた',  'の',   'くに',  'に',   'すむ',
  'ひとり', 'の',  'わかもの',  'が',   'ちちおや',
  'と',   'ゆき', 'の',    'なか',  '、',   'かりに', 'でかけ', 'まし',
  'た',   '。',  'とつぜん', '、',   'てんき', 'が',   'わるく', 'なっ',
  'た',   'ので', '、',    'ふたり', 'は',   'やまごや',
  'で',   'よる', 'を',    'あかし', '、',   'てんき', 'が',   'かいふく', 
  'する', 'の',    'を',   'まち',  'まし',  'た',   '。',
  'まよなか',   'の',   'こと',  'です',  '。',   'ね',
  'て',   'いる', 'と',    'いり',  'ぐち',  'が',   'ばたん', 'と',
  'あき',  '、',  'しろい',  'きもの', 'を',   'き',   'た',   'ひとり',
  'の',   'いろじろ',  'の',  'おんな', 'の',   'ひと',
  'が',   'そこ', 'に',    'たっ',  'て',   'い',   'まし',  'た',
  '。'
]

const CorrectedArray = []

const SearchWords = [
  'きた', 'ひとり', 'わかもの', 'ちちおや', 'ゆき', 'とつぜん', 'わるく', 'ふたり', 'やまごや', 'よる', 'まよなか', 'ばたん',
  'しろい', 'ひとり', 'いろじろ', 'おんな', 'ひと'
]

const UpdatedWords = [
  'にし', 'ひとり', 'ろうじん', 'ははおや', 'あめ', 'きゅうに', 'すごく', 'ひとり', 'かわごや', 'あさ', 'まひるま',
  'がたん', 'くろい', 'ふたり', 'いろぐろ', 'おとこ', 'ねこ'
]

export const CorrectSentence = (task, correctStart, index) => {
  // index は react 側で減らす
  let randomIndex = Math.floor(Math.random() * index)
  let target = SearchWords[randomIndex]
  let correctPos = InitialArray.indexOf(target)
  let correctWord = UpdatedWords[randomIndex]
  // search と udate から指定の箇所を消す
  SearchWords.splice(randomIndex, 1)
  UpdatedWords.splice(randomIndex, 1)
  InitialArray[correctPos] = correctWord
  InitialArray.forEach(val => CorrectedArray.push(val))
  return InitialArray.join('')
}

export const CorrectTask = (currentNum, task, thresh, correctStart, jaCorrection, enCorrection, flag) => {
  let S = flag ? enCorrection : jaCorrection;
  let m = parseInt(correctStart / S.length);
  let correctLetter = S.substr(correctStart - S.length*m, 1);
  let before, after;
  let orderSum = S.length;
  if(correctStart !== 0){
    before = task.slice(0, correctStart);
    after = task.slice(correctStart + correctLetter.length);
    return before + correctLetter + after;
  } else {
    before = '';
    after = task.slice(correctStart+1, task.length);
    return S.substr(0,1) + task.slice(1)
  }
}