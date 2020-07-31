import React from 'react'

import MetaCard from '../../components/MetaCard'
import {
  DetailFrame,
  Header,
  SubHeader,
  MainImage,
  DescriptionFrame,
  StyledDescription,
  StyledDetailFrame,
  LinkFrame,
  LinkHeader,
  WebLink
} from '../../styles/pages/detail'

import {
  SectionHeader,
  Description,
  SubSection,
  SubSubSection,
  FigureImage,
  FigureBox,
  Caption
} from '../../styles/keitalab/report'


const Report = ({ data }) => {
  return (
    <div>
      <MetaCard data={data}/>
      <DetailFrame>
        <Header>ダミーカーソル実験</Header>
        <SubHeader>August 1, 2020. Summer Term.</SubHeader>


        <SectionHeader>
          概要
        </SectionHeader>
        <Description>
          インタラクションおいて，ユーザの身体と操作するターゲットの動きの知覚関係は非常に重要であり，HCIの分野や認知科学の分野において実験と調査が行われている．
          我々は，インタフェースの中でもカーソルに着目し，カーソルに対して身体所有感を抱くかどうかを検証するための実験を実施した．
          この実験結果と，これまでに提案された複数カーソルを用いたインタラクティブシステムに基づいて，複数ダミーカーソルの中から
          唯一自身が操作していると感じるカーソル(リアルカーソル)を識別する，リアルカーソル/ダミーカーソル識別実験を開発した．
          本実験では，リアルカーソルの他に，独立して動く複数のダミーカーソルを画面上に呈示する．
          参加者は，自身の手で動かしているリアルカーソルを識別するタスクを遂行する．
          最初の実験では，リアルカーソル/ダミーカーソルを2~3個呈示し，それぞれのカーソルに対して自分が操作している確信度を参加者は回答した．
          この実験の結果，参加者はリアルカーソルとダミーカーソルを明確に識別できることがわかった．
          明確に識別できることから，実験の結果は識別可能/不可能で二値化することが可能である．そこで，次の実験ではダミーカーソル数を大幅に
          増やし，実験を実施した．この実験では，参加者はそれぞれのカーソルに対して確信度を回答するのではなく，ダミーカーソルの中から唯一存在する
          リアルカーソルを識別する．実験の結果，ほとんどの参加者はダミーカーソル数が多くても識別可能であることがわかった．
          これらの知見から，ダミーカーソル実験では従来手法と違い，定性的な評価ではなく定量的な評価を行うことが可能であると我々は考えている．
          本稿では，カーソルに対する身体所有感を調査するための実験，ダミーカーソル実験の設計と結果について述べ，GUIにおける身体所有感の定量的な評価や
          インタフェースの設計指針について議論する．
        </Description>

        <SectionHeader>
          前置き
        </SectionHeader>
        <FigureBox>
          <FigureImage src='/reports/Intro.png'/>
          <Caption>Fig0: 運動主体感・身体所有感</Caption>
        </FigureBox>
        <Description>
          本研究では，運動主体感と身体所有感というキーワードの内身体所有感，特にカーソルに対する身体所有感について扱います．
        </Description>

        <SectionHeader>
          はじめに
        </SectionHeader>
        <SubSection>
          コンピュータと身体所有感
        </SubSection>
        <Description>
          コンピュータのインタフェースやインタラクションの設計において，ユーザの身体と操作するターゲットの動きのリアルタイムな同期は非常に重要である．
          HCIの分野ではVirtual Reality(VR)におけるユーザの身体に対して，遅延や超人的な身体構造を加えることで，どのようにユーザの身体所有感が変容するかが調査れている．
          例えば，KasaharaらのMalleable Embodimentでは，ユーザの動きをトラッキングし，ユーザの動きと連動するVR内のアバターに対して遅延や予測行動を加えることで，身体が重くなったり
          軽くなったりするように感じると報告されている．こうしたHCIの領域だけではなく，認知科学の分野では従来手法のRubber Hand IllusionをVRに応用した実験も行われている．
          Yuanらは，Rubber Hand Illustionの実験手法を踏襲して，VRへの没入感はユーザの身体の影響によってどの程度変わるかが調査している．
        </Description>
        <SubSection>
          カーソルへ抱く感覚
        </SubSection>
        <Description>
          こうした背景の下，我々はコンピュータデスクトップにおける代表的なインタフェースであるカーソルに着目した．コンピュータが高負荷の処理を実行する際に生じる
          遅延や，低フレームレート環境下でのカーソルの操作では，違和感や不快感を感じることがある．また，Watanabeらはこうしたカーソルに対する感覚を利用したVisual Hapticsを開発した．
          我々は，こうした感覚をカーソルに抱く要因として，身体所有感を感じていると仮説を立てた．そこで，はじめにカーソルに対して身体所有感を感じるかを調査するため，従来手法に基づいて
          フリーズカーソル実験を設計した．
        </Description>
        <SubSection>
          フリーズカーソル実験
        </SubSection>
        <Description>
          フリーズカーソル実験では，参加者がポインティングタスクを遂行している際に，カーソルに対して不自然な停止動作を加えた．参加者はポインティングタスク
          終了後に，タスク遂行中にカーソルに対して違和感・不快感を感じたかについて7段階で回答した．今回は，現実に存在する様々な問題のため，フリーズではなく
          カーソル運動中にノイズを加える実験で代行した．結果，参加者は違和感・不快感を感じていることが明らかになり，
          カーソルに対して身体所有感を感じていることが示唆された．以下に実験の結果を記す．
        </Description>
        <FigureBox>
          <FigureImage src='/reports/graph3.png'/>
          <Caption>Fig1: 刺激の大きさごとの刺激頻度と違和感の強さの関係</Caption>
        </FigureBox>
        <Description>
          実験条件として，刺激の大きさを0~5の6段階，刺激の介入頻度を0~4の5段階をそれぞれ設定した．刺激の大きさと介入頻度からそれぞれ一つずつパラメータが選ばれ，ランダムな組み合わせの試行を
          参加者は遂行する．Fig1は23歳男性の実験結果である．Fig1のグラフから，刺激が大きく，介入頻度が高いほど違和感・不快感を感じることが読み取れる．
        </Description>

        <FigureBox>
          <FigureImage src='/reports/graph4.png'/>
          <Caption>Fig2: 刺激頻度と違和感の強さの関係</Caption>
        </FigureBox>
        <Description>
          Fig2はFig1の結果を一つのグラフに統合したものである．Fig1のグラフの傾向と同様に，刺激が大きく，介入頻度が高いほど違和感・不快感の指数は上昇している．これらの実験結果から，
          我々はカーソルに対して身体所有感を感じていると言える．
        </Description>


        <SectionHeader>
          ダミーカーソル実験
        </SectionHeader>
        <Description>
          予備実験でカーソルのSoOが示唆されたことから，我々は自己/他の識別による身体所有感を評価する手法 ダミーカーソル実験を開発した．
          予備実験(User Study#1)では，実験手法が有効であるかを確かめるため，画面上に2~3個のカーソルを並べ，参加者は自分が動かしているカーソルかどうかを
          7段階で評価する実験を実施した．実験の結果，ほぼ全ての参加者が明確に，リアルカーソルとダミーカーソルを判別できていた．
          この実験結果に基づき，本実験(User Study#2)では，ダミーカーソル数を大幅に増やして実験を実施した．この実験では，一つ一つのカーソルに対して
          評価を下すことは困難であるため，タスクをリアルカーソルの識別とした．結果，ほぼ全ての参加者が複数ダミーカーソルの中からリアルカーソルを
          識別できた．
          以下に，それぞれのUser Studyの詳細と結果について記す．
        </Description>
        <SubSection>
          User Study#1
        </SubSection>
        <Description>
          User Study#1では，カーソルを2~3個並べ，参加者は自分が動かしているカーソルかどうかをそれぞれに対して7段階で評価する．Unityで実装したが，オンラインサンプルを用意したので
          雰囲気を掴みたい方はどうぞ．
        </Description>
        <SubSubSection>
          目的
        </SubSubSection>
        <Description>
          本実験の目的は，リアル/ダミーカーソルの識別ができるかどうかを調査するための実験である．
        </Description>
        <SubSubSection>
          実験デザイン
        </SubSubSection>
        <Description>
          実験を開始すると，カーソルが2~3個提示される．参加者はマウスを操作し，それぞれのカーソルに対して "自分が操作している感" を7段階で評価する．
          一度の制限時間は20秒である．
        </Description>
        <SubSubSection>
          実験条件
        </SubSubSection>
        <Description>
          ダミーカーソルのモーションアルゴリズムには角速度を用いた．角速度のパラメータは[1, 5, 10, 15, 30, 45, 60, 75, 90]度の合計9つでそれぞれ最低2回の試行が行われる．
          また，今回の実験ではリアル/ダミーカーソル合わせて2個呈示する実験とした．
        </Description>
        <SubSubSection>
          結果
        </SubSubSection>
        <Description>
          実験の結果について記す．Fig3は，リアル/ダミーカーソルそれぞれに対して，自分が動かしている確信度を回転角ごとにプロットしたものである．
        </Description>
        <FigureBox>
          <FigureImage src='/reports/graph.png'/>
          <Caption>Fig3: (左)回転角ごとのリアルカーソルの識別率 / (右)回転角ごとのダミーカーソルの識別率</Caption>
        </FigureBox>
        <Description>
          Fig3の回転角15度以上のプロットを見ると，リアルカーソルとダミーカーソルの判別が明確についていることがわかる．しかし，回転角が15度以下の場合には，リアルカーソルとダミーカーソルの
          動きにほとんど差異がないため，誤認識や両方自身が動かしているカーソルだと感じる場合が多くなる．
        </Description>
        <FigureBox>
          <FigureImage src='/reports/graph2.png'/>
          <Caption>Fig: 4回転角ごとのリアルカーソル/ダミーカーソルの識別率</Caption>
        </FigureBox>
        <Description>
          Fig4はFig3の左右のプロットを一つにまとめたものである．この図からもわかる通り，回転角が15度以上の場合はリアルカーソルとダミーカーソルを
          明確に識別できていることがわかる．すなわち，識別可能/不可能の二値化で評価することが可能になる．
        </Description>

        <SubSection>
          User Study#2  
        </SubSection>
        <Description>
          User Study#1の結果を踏まえ，回転角を15度以上に設定し，ダミーカーソル数を大幅に増やした実験を設計する．
        </Description>
        <SubSubSection>
          目的
        </SubSubSection>
        <Description>
          本実験では，複数提示されるダミーカーソルの中から，リアルカーソルを識別できるかを調査する．
        </Description>
        <SubSubSection>
          実験デザイン
        </SubSubSection>
        <Description>
          Fig6に実験手順，Fig7に実験環境と実際の実験の様子について記載する．
        </Description>
        <FigureBox>
          <FigureImage src='/reports/procedure.png'/>
          <Caption>Fig6: 実験手順</Caption>
        </FigureBox>
        <FigureBox>
          <FigureImage src='/reports/US2andApparatus.png'/>
          <Caption>Fig7: (A)実験環境の構成 / (B)実験の様子</Caption>
        </FigureBox>
        <SubSubSection>
          結果
        </SubSubSection>
        <FigureBox>
          <FigureImage src='/reports/TimeAndDummyNum-fix.png'/>
          <Caption>Fig8: ダミーカーソル数と識別までに要する時間</Caption>
        </FigureBox>
        <Description>
          実験の結果，ほとんど全ての場合で，ダミーカーソル数に関係なく参加者はリアルカーソルを識別できた．このことから，参加者は自身の手の動きと
          カーソルの動きの相関関係を知覚，すなわち身体所有感があるからこそ識別可能であると我々は考えている．
        </Description>
        
        <SectionHeader>
          議論
        </SectionHeader>
        <Description>
          今回実施した実験結果から，我々はダミーカーソル実験により身体所有感の評価を従来のような定性的な評価(アンケート評価)ではなく，識別できるかできないかの
          二値による定量的な評価が可能であると考えている．さらに，我々の実験ではリアルカーソルをした際に身体所有感の生起が起こっていると考える．
        </Description>
        <FigureBox>
          <FigureImage src='/reports/Discussion.png'/>
          <Caption>Fig9: 身体所有感の生起</Caption>
        </FigureBox>

      </DetailFrame>
    </div>
  )
}

Report.getInitialProps = async ({ query }) => {
  const json = await import(`../../contents/keitalab/report2020.json`)
  return {
    data: json
  }
}

export default Report
