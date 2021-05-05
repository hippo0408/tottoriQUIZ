'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel=document.querySelector("#result p")

  const quizSet = [
    {q: '鳥取県の県庁所在地はどこかな?', c: ['鳥取市', '米子市', '松江市']},
    {q: '2015年までは47都道府県で唯一スターバックスがなかった鳥取県。「スタバはないけどすなばはある」のユニークな発言で話題になったのは？'
    , c: ['県知事', 'NHKのど自慢に出演した鳥取県民', '鳥取砂丘観光大使']},
    {q: '妖怪のまちとしても知られている境港市で、妖怪のブロンズ像が130体以上も並んでいる道を何というかな？', c: ['水木しげるロード', '鬼太郎ロード', 'ゲゲゲのロード']},
    {q: '名探偵コナンにたくさん会える街は北栄町。北栄町の出身でコナンの作者はだれかな？', c: ['青山剛昌', '井上雄彦', '尾田栄一郎']},
    {q: '鳥取県のご当地ラーメンで、味の決め手になるスープのだしをとっているのは何かな？', c: ['牛骨', 'ハタハタ', 'シカ肉']},
    {q: 'らっきょうの産地としても有名な鳥取県。一面のらっきょう畑に花が咲いた様子は「砂丘の○○」と呼ばれているよ。○に入る言葉は何かな？'
    , c: ['砂丘の「ラベンダー」', '砂丘の「大草原」', '砂丘の「瀬戸内海」']},
    {q: '鳥取県にある地名だよ。なんと読むのかな？「車尾」', c: ['くずも', 'くび', 'しゃびこ']},
    {q: '鳥取県に実際にある地名は次のうちどれかな？', c: ['耳取', '鼻取', '口取']},
    {q: '鳥取県の方言で、されると痛い「ほおたかばち」ってなんのことかな？', c: ['ビンタ', 'デコピン', 'ゲンコツ']},
    {q: '鳥取県の方言で「いらっしゃった」「よく来たね」という意味があるのは次のうちどれかな？', c: ['きんさった', 'ぎんさった', 'どうさった']},
  ];
  let currentNum = 0;
  let isAnswered;
  let score=0;

  

  function shuffle(arr){
    for(let i= arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[j],arr[i]]= [arr[i],arr[j]]
    }
    return arr;
  }

  function checkAnswer(li){
      if(isAnswered===true){
          return;
      }
      isAnswered=true;
  if(li.textContent===quizSet[currentNum].c[0]){
      li.classList.add("correct");
      score++;
            
  }else{
      li.classList.add("wrong");
  }

  btn.classList.remove("disabled");
}

function setQuiz(){
  isAnswered=false;
  question.textContent = quizSet[currentNum].q;

while(choices.firstChild){
    choices.removeChild(choices.firstChild);
}

  const shuffledChoices=shuffle([...quizSet[currentNum].c]);
  shuffledChoices.forEach(choice => {
    const li = document.createElement('li');
    li.textContent = choice;
    li.addEventListener("click",()=>{
        checkAnswer(li);
    });
    choices.appendChild(li);
  });

  if(currentNum===quizSet.length-1){
      btn.textContent="Show Score";
  }
}
setQuiz();

btn.addEventListener("click",()=>{
    if(btn.classList.contains("disabled")){
        return;
    }
    btn.classList.add("disabled");

    if(currentNum===quizSet.length-1){
        scoreLabel.textContent=`Score:${score}/${quizSet.length}`;
        result.classList.remove("hidden");
     } else{
            currentNum++;
            setQuiz();

        }
    
});
}