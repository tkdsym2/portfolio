const tasks = [
  ['チンパンジー', 'チンパジンー'],
  ['ボスニア＝ヘルツェゴビナ', 'ボスニア＝ヘルツェビゴナ'],
  ['ポルトガル', 'ポトルガル'],
  ['うらしまたろう', 'うらしたまろう'],
  ['ももたろう', 'もたもろう'],
  ['ジャヴァスクリプト', 'ジャヴァスリクプト'],
  ['ヒエラポリス=パムッカレ', 'ヒエラパリス＝ポムッカレ'],
  ['チットガーフォート', 'チットフォーガート'],
  ['みつびしでんき', 'みうびしてんき'],
  ['ねるねるねるね', 'ねるわるねるね'],
  ['ぬりぐすり', 'ぬいぐすり'],
  ['しらぬい', 'しらめい']
]

const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const TaskGenerator = number => {
  const _quizArray = [];
  for(let i = 0; i < tasks.length; i++) {
    let K = Math.floor(Math.random()*2);
    _quizArray.push(tasks[i][K])
  }
  const quizArray = shuffle(_quizArray)
  quizArray.length = number;
  return quizArray;
}