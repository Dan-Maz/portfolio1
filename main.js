const aColor = ["red","orange","yellow","blue","indigo","violet"];
const aAction = ["barked","snarled","whimpered","whined","howled","talked"];
const aVolume = ["extremely loudly","very loudly","loudly","quietly","very quietly","extremely quietly"];

function getRandomInt() {
  return Math.floor(Math.random() * 6);
}

let rand1 = getRandomInt();
let rand2 = getRandomInt();
let rand3 = getRandomInt();

//console.log(rand1,rand2,rand3);

let color = aColor[rand1];
let action = aAction[rand2];
let volume = aVolume[rand3];

let sentence = `The ${color} dog ${action} ${volume}.`

console.log(sentence)