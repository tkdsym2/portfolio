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
  '。', 

  'わかもの',   'が',    'はなしかけよ', 'う',   'と',   'する',
  'と',    '、',    'その',   'おんな',    'の',   'ひと',  'は',
  'ちちおや',   'に',      'しろい', 'いき',  'を',
  'ふきかけ', 'た',    'ところ',  '、',      'ちちおや',
  'は',    'たちまち', 'しろく',  'なる',     'と',   'いっ',  'しゅん',
  'に',    'こおっ',  'て',    'しまい',    'まし',  'た',   '。',

  'ゆき',   'おんな',  'に',    '、',      'わかもの',  'は',
  'み',    'うごき',  'でき',   'ませ',     'ん',   'でし',  'た',
  '。',    
  
  '「',    'わかい',  'もの',     '、',   'おまえ', 'は',
  'たすけ',  'て',    'やる',   'が',      '、',   'きょう', 'の',
  'こと',   'は',    'けっして', 'だれ',     'に',   'も',   'はなし',
  'て',    'は',    'いけ',   'ない',     '。',   '」',   'そう',
  'いう',   'と',    'ゆき',   'の',      'なか',  'に',   'きえ',
  'て',    'しまい',  'まし',   'た',      '。',   
  
  'つぎ',  'の', 
  'あさ',  '、',   'め',    'が',    'さめる', 'と',
  'ちちおや',  'は',   'こおっ',  'て',    'しん',  'で',
  'い',   'まし',    'た',   '。',   'それから', 'いち',   'ねん',  'が',
  'たった', 'ある',    'あめ',  'の',   'ひ',    'の',    'こと',  'です',
  '。',   
  
  'うつくしい', 'おんな', 'の',   'ひと',   'が',    'のきした',   
  'で',     'あま',  'やどり', 'し',    'て',    'い',   'まし',
  'た',   '。',     'わかもの',  'は',    'おんな',  'の',   'ひと',
  'を',   'いえ',    'の',   'なか',  'に',    'いれ',  'て',   'あげる',
  'と',   'いきさつ',  'を',   'きい',  'た',    'ところ',  '「',   'なまえ',
  'は',     'なんと', 'いう',  '。', 'これから', 'どこ',  'に',
  'いく',  'の',     'か',   '。',   '」', 
  
  '「',  'なま',  'え',   'は',    
  '「',    'お',   'ゆき',   '」',    'と',
  'いい', '、',   'わたし', 'に',    'は',    'みうち',   'は',    'い',
  'ませ', 'ん',   '。',   'これから', 'いく',   'ところ', 'も',    'あり',   'ませ',
  'ん',  '。',   '」',   'それ',   'を',    'きい',  'て',    'しんぱい', 'し',
  'た',  'わかもの',  'は',    'しばらく', 'いえ',  'に',    'お',    'ゆき',
  'を',  'おい',  'て',   'おく',   'こと',   'を',   'きめ',   'まし',   'た',
  '。',  
  
  'ふたり', 'は',   'やがて',  'こい',   'に',   'おち',   '、',    'けっこん',
  'し',  'て',   'こども', 'も',    'でき',   '、',   'しあわせ', 'な',    'ひび',
  'を',  'おくっ', 'て',   'い',    'まし',   'た',   '。', 'ある', 'ゆき',   'の',
  'ひ',   'の',    'こと',  '、',   'わかもの',
  'は',  'うっかり', 'と',  'あの',  'ひ',    'の',   'やまごや',
  'で',  'の',    'こと', 'を',   'はなし',  'て',   'しまい', 'まし',  'た',
  '。',  
  
  'お',    'ゆき', 'は',   'かなしい', 'かお',  'で',   'いい',  'まし',
  'た',  '。',    '「',  'あれ',  'ほど',   'はなし', 'て',   'は',   'いけ',
  'ない', 'と',    'いっ', 'た',   'のに',   'はなし', 'て',   'しまい', 'まし',
  'た',  'ね',    '。',  '」',   'そう',   'いう',  'と',   '、',   'お',
  'ゆき', 'は',    'かれ', 'の',   'もと',   'から',  'きえ',  'まし',  'た',
  '。',  'お',    'ゆき', 'こそ',  'ゆき',   'おんな', 'だっ',  'た',   'の',
  'です', '。', 
  
  'それ',  'いらい', 'お',  'ゆき',
  'の',   'すがた', 'を',
  'み',   'た',   'もの', 'は',
  'ひとり', 'も',   'い',  'ませ',
  'ん',   'でし',  'た',  '。'
]

const CorrectedArray = []

const SearchWords = [
  'きた', 'ひとり', 'わかもの', 'ちちおや', 'ゆき', 'とつぜん', 'わるく', 'ふたり', 'やまごや', 'よる', 'まよなか', 'ばたん',
  'しろい', 'ひとり', 'いろじろ', 'おんな', 'ひと',
  'わかもの', 'おんな', 'ちちおや', 'しろい', 'ちちおや', 'しろく',
  'ゆき',  'おんな', 'わかもの', 
  'おまえ', 'きょう', 'ゆき',
  'あさ', 'ちちおや', 'いち', 'あめ',
  'うつくしい', 'おんな', 'のきした', 'あま', 'わかもの', 'おんな', 'いえ',
  'みうち', 'ところ', 'わかもの',
  'ふたり', 'こい', 'しあわせ', 'ゆき', 'わかもの', 'やまごや', 
  'かなしい', 'ゆき', 'おんな',
]

const UpdatedWords = [
  'にし', 'ひとり', 'ろうじん', 'ははおや', 'あめ', 'きゅうに', 'すごく', 'ひとり', 'かわごや', 'あさ', 'まひるま',
  'がたん', 'くろい', 'ふたり', 'いろぐろ', 'おとこ', 'ねこ',
  'ろうじん', 'おとこ', 'ははおや', 'くろい', 'ははおや', 'くろく',
  'あめ', 'おとこ', 'ろうじん',
  'あなた', 'きのう', 'あめ',
  'ひる', 'ははおや', 'はち', 'ゆき',
  'すばらしい', 'おとこ', 'きのした', 'ゆき', 'ろうじん', 'おとこ', 'やど',
  'かぞく', 'ばしょ', 'ろうじん',
  'ごにん', 'いけ', 'こうふく', 'あめ', 'ろうじん', 'かわごや',
  'うれしい', 'あめ', 'おとこ',
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

export const GenerateCorrectSentence = () => {
  let _sentence = [];
  SearchWords.forEach((word, index) => {
    let pos = InitialArray.indexOf(word)
    let correctWord = UpdatedWords[index]
    InitialArray[pos] = correctWord
    InitialArray.forEach(val => _sentence.push(val))
  })
  return _sentence.join('')
}

// export const CorrectSentence = (original, corrector) => {
//   let newArr = []
//   let _d = []
//   original.split('').forEach((item, index) => {
//     if(item === b.split('')[index]) return;
//     const correctInfo = {
//       pos: index,
//       pre: item,
//       correct: b.split('')[index]
//     }
//     newArr.push(correctInfo);
//   })

//   _d = original;
//   let _arr = newArr.split('')
//   _arr.splice(object.pos);
// }

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

/**
 * replace user input letters
 */

const _SearchWords = [
  'きた', 'ひとり', 'わかもの', 'ちちおや', 'ゆき', 'とつぜん', 'わるく', 'ふたり', 'やまごや', 'よる', 'まよなか', 'ばたん',
  'しろい', 'ひとり', 'いろじろ', 'おんな', 'ひと',
  'わかもの', 'おんな', 'ちちおや', 'しろい', 'ちちおや', 'しろく',
  'ゆき',  'おんな', 'わかもの', 
  'おまえ', 'きょう', 'ゆき',
  'あさ', 'ちちおや', 'いち', 'あめ',
  'うつくしい', 'おんな', 'のきした', 'あま', 'わかもの', 'おんな', 'いえ',
  'みうち', 'ところ', 'わかもの',
  'ふたり', 'こい', 'しあわせ', 'ゆき', 'わかもの', 'やまごや', 
  'かなしい', 'ゆき', 'おんな',
]

const _UpdatedWords = [
  'にし', 'ひとり', 'ろうじん', 'ははおや', 'あめ', 'きゅうに', 'すごく', 'ひとり', 'かわごや', 'あさ', 'まひるま',
  'がたん', 'くろい', 'ふたり', 'いろぐろ', 'おとこ', 'ねこ',
  'ろうじん', 'おとこ', 'ははおや', 'くろい', 'ははおや', 'くろく',
  'あめ', 'おとこ', 'ろうじん',
  'あなた', 'きのう', 'あめ',
  'ひる', 'ははおや', 'はち', 'ゆき',
  'すばらしい', 'おとこ', 'きのした', 'ゆき', 'ろうじん', 'おとこ', 'やど',
  'かぞく', 'ばしょ', 'ろうじん',
  'ごにん', 'いけ', 'こうふく', 'あめ', 'ろうじん', 'かわごや',
  'うれしい', 'あめ', 'おとこ',
]

export const ReplaceUserLetters = letters => {
  const Items = []
  _SearchWords.some((item, index) => {
    let result = letters.indexOf(item)
    if(result === -1) return true
    const _item = {
      pos: result,
      word: item,
      len: item.length,
      corrected: _UpdatedWords[index],
      arrayPos: index
    }
    Items.push(_item);
    console.log(Items);
  })

  const K = Math.floor(Math.random() * 2)
  if(K !== 1 && Items.length !== 0) {
    let randomIndex = Math.floor(Math.random() * Items.length)
    const corrected = letters.replace(Items[randomIndex].word, Items[randomIndex].corrected)
    _SearchWords.splice(Items[randomIndex].arrayPos, 1)
    _UpdatedWords.splice(Items[randomIndex].arrayPos, 1)
    return corrected;
  } else {
    return letters
  }
}