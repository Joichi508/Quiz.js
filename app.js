const quiz = [
    {
      question: 'Which is the best-selling video game console in Japan in the history of video games?',
      answers: [ 'Super Nintendo Entertainment System', 'PlayStation 2', 'Nintendo DS', 'Xbox 360'],
      correct: 'Nintendo DS'
    }, {
      question: 'Which soccer team has the No. 1 FIFA ranking?',
      answers: [ 'Brazil', 'Japan', 'France', 'Belgium'],
      correct: 'Brazil'
    }, {
      question: 'Which country has the most world heritage sites in the world?',
      answers: [ 'Spain', 'Germany', 'China', 'Italy'],
      correct: 'Italy'
    }
  ];
  
  //変数を定義
  const $window = window;
  const $doc = document;
  const $question = $doc.getElementById('js-question');
  const $buttons = $doc.querySelectorAll('.btn');
  
  const quizLen = quiz.length;
  let quizCount = 0;
  let score = 0;    //正解したら増える
  
  //クイズの問題文、選択肢を定義
  const init = () => {
    $question.textContent = quiz[quizCount].question;
    
    const buttonLen = $buttons.length;
    let btnIndex = 0;
    
    while(btnIndex < buttonLen){
      $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
      btnIndex++;
    }
  };
  
  //次の問題へと移動
  const goToNext = () => {
    quizCount++;
    if(quizCount < quizLen){
      init(quizCount);
    } else {
      // $window.alert('クイズ終了！');
      showEnd();
    }
  };
  
 //正解か不正解かを判断
  const judge = (elm) => {
    if(elm.textContent === quiz[quizCount].correct){
      $window.alert('Correct!');
      score++;
    } else {
      $window.alert('Incorrect!');
    }
    goToNext();
  };
  
  //最後のスコアの画面を表示
  const showEnd = () => {
    $question.textContent = 'Finish！ Your score is ' + score + '/' + quizLen;
    
    const $items = $doc.getElementById('js-items');
    $items.style.visibility = 'hidden';
  };
  
  init();
  
  let answersIndex = 0;
  let answersLen = quiz[quizCount].answers.length;
  
  while(answersIndex < answersLen){
    $buttons[answersIndex].addEventListener('click', (e) => {
      judge(e.target);
    });
    answersIndex++;
  }


// $button[0].addEventListener('click', (e) => {
//     clickHandler();
// });

// $button[1].addEventListener('click', (e) => {
//     clickHandler();
// });

// $button[2].addEventListener('click', (e) => {
//     clickHandler();
// });

// $button[3].addEventListener('click', (e) => {
//     clickHandler();
// });



// $button[0].addEventListener('click', (e)=>{
//     console.log(e);

//     if(correct === e.target.textContent){
//         window.alert('正解!');
//     } else{
//         window.alert('不正解!');
//     }
// });

// $button[1].addEventListener('click', (e)=>{
//     if(correct === e.target.textContent){
//         window.alert('正解!');
//     } else{
//         window.alert('不正解!');
//     }
// });

// $button[2].addEventListener('click', (e)=>{
//     if(correct === e.target.textContent){
//         window.alert('正解!');
//     } else{
//         window.alert('不正解!');
//     }
// });

// $button[3].addEventListener('click', (e)=>{
//     if(correct === e.target.textContent){
//         window.alert('正解!');
//     } else{
//         window.alert('不正解!');
//     }
// });

// $button[0].addEventListener('click', ()=>{
//     if(correct === $button[0].textContent){
//         window.alert('正解!');
//     } else{
//         window.alert('不正解!');
//     }
// });

// $button[1].addEventListener('click', ()=>{
//     if(correct === $button[1].textContent){
//         window.alert('正解!');
//     } else{
//         window.alert('不正解!');
//     }
// });

// $button[2].addEventListener('click', ()=>{
//     if(correct === $button[2].textContent){
//         window.alert('正解!');
//     } else{
//         window.alert('不正解!');
//     }
// });

// $button[3].addEventListener('click', ()=>{
//     if(correct === $button[3].textContent){
//         window.alert('正解!');
//     } else{
//         window.alert('不正解!');
//     }
// });







