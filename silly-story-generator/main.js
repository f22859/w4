const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '外は華氏９４度だったので、:insertx:　は買い物に行きました。　彼らが :inserty: に到着した時、　ものすごい人の多さに目を見開きました。 次の瞬間、いきなり　彼らは　:insertz:。 Bob　はその様子を見て、大爆笑しました。— :insertx: の体重は500ポンド　で、大嵐の日でした。';
const insertX = ['ミッキーマウス', 'サンタクロース', 'ハーマイオニー'];
const insertY = ['ユニバーサルスタジオ', 'エッフェル塔', '東京駅'];
const insertZ = ['あるいていた道が陥没しました', 'ドラゴンになって飛んでいきました', '雪が降ってきて埋もれました'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(500*0.0714286)} kg`;
    const temperature =  `${Math.round((94-32) * 5 / 9)}　　度`;
    newStory = newStory.replace('華氏９４度', temperature);
    newStory = newStory.replace('500ポンド', weight);
  }

  
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
