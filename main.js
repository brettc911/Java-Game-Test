
///// ===============CHARACTERS=========//////

let character =
[bear     = {name: 'Bear', hp: 30, ability: [swipe = -2, bite = -7, stomp = -4]},
 mage     = {name: 'Mage', hp: 60, ability: [fireball = -3, icebolt = -2, heal = +10]},
 warrior  = {name: 'Warrior', hp: 80, abilities: ['slash', 'block', 'charge']},
 paladin  = {name: 'Paladin', hp: 70, abilities: ['light']}
];



///============ CHARACTER ABILITIES ===========/////

//=====   BEAR
//=====   MAGE
//=====   WARRIOR


////====== CHARACTER SELECTION =======/////

let player1 = character[1]; //--- add click function to pick character
let player2 = character[0];


//=========== Player ability buttons? === could add more...===/////

let ability1 = player1.ability[0] ///====== add click function to select different abilities?
let ability2 = player1.ability[1]
let ability3 = player1.ability[2]

let ability8 = player2.ability[0]
let ability9 = player2.ability[1]
let ability0 = player2.ability[2]

////========= player GUI =========/////

document.getElementById('player1_name').innerHTML = player1.name;
document.getElementById('player1_health').innerHTML = player1.hp;


document.getElementById('player2_name').innerHTML = player2.name;
document.getElementById('player2_health').innerHTML = player2.hp;


//// =========== PLAYER 1 ABILITIES ===========////


function p1_ability1() {
if (ability1 < 0) {
  player2.hp = player2.hp + ability1;
  document.getElementById('player2_health').innerHTML = player2.hp;
} else {
  player1.hp = player1.hp + ability1;
  document.getElementById('player1_health').innerHTML = player1.hp;
}}

function p1_ability2() {
if (ability2 < 0) {
  player2.hp = player2.hp + ability2;
  document.getElementById('player2_health').innerHTML = player2.hp;
} else {
  player1.hp = player1.hp + ability2;
  document.getElementById('player1_health').innerHTML = player1.hp;
}}

function p1_ability3() {
if (ability3 < 0) {
  player2.hp = player2.hp + ability3;
  document.getElementById('player2_health').innerHTML = player2.hp;
} else {
  player1.hp = player1.hp + ability3;
  document.getElementById('player1_health').innerHTML = player1.hp;
}}


//// =========== PLAYER 2 ABILITIES ===========////


function p2_ability1() {
if (ability8 < 0) {
  player1.hp = player1.hp + ability8;
  document.getElementById('player1_health').innerHTML = player1.hp;
} else {
  player2.hp = player2.hp + ability8;
  document.getElementById('player2_health').innerHTML = player2.hp;
}}

function p2_ability2() {
if (ability9 < 0) {
  player1.hp = player1.hp + ability9;
  document.getElementById('player1_health').innerHTML = player1.hp;
} else {
  player2.hp = player2.hp + ability9;
  document.getElementById('player2_health').innerHTML = player2.hp;
}}

function p2_ability3() {
if (ability0 < 0) {
  player1.hp = player1.hp + ability0;
  document.getElementById('player1_health').innerHTML = player1.hp;
} else {
  player2.hp = player2.hp + ability0;
  document.getElementById('player2_health').innerHTML = player2.hp;
}}





















//   player2.hp = player2.hp + ability1;
//   document.getElementById('player2_health').innerHTML = player2.hp;
// }
// function p1_ability2() {
//   player2.hp = player2.hp  + ability2;
//   document.getElementById('player2_health').innerHTML = player2.hp;
// }
// function p1_ability3() {
//   player2.hp = player2.hp  + ability3;
//   document.getElementById('player2_health').innerHTML = player2.hp;
// }
//
// //// =========== PLAYER 2 ABILITIES ===========////
//
//
// function p2_ability1() {
//   player1.hp = player1.hp + ability1;
//   document.getElementById('player2_health').innerHTML = player1.hp;
// }
// function p2_ability2() {
//   player1.hp = player1.hp  + ability2;
//   document.getElementById('player2_health').innerHTML = player1.hp;
// }
// function p2_ability3() {
//   player1.hp = player1.hp  + ability3;
//   document.getElementById('player2_health').innerHTML = player1.hp;
// }
