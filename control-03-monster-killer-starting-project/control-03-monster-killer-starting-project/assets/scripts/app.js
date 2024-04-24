const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK'; // MODE_ATTACT = 0
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';

const enteredValue =  prompt('Maximum life for you and the monster.','100');

let chosenMaxLife = parseInt(enteredValue);

if(isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBounsLife = true;
let isLoggedIn

adjustHealthBars(chosenMaxLife);
function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if(currentPlayerHealth <= 0 && hasBounsLife) {
    hasBounsLife = false;
    removeBounceLife();
    currentMonsterHealth = initialPlayerHealth;
    alert('You would be dead but the bonus life saved you !')
  }

  if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
    alert('You Won!');
  } else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
    alert('You Lost!');
  } else if(currentPlayerHealth <=0 && currentMonsterHealth <= 0){
    alert('You have a draw !');
  }

  if(currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();  
  }
}

function attackMonster(mode){
  let maxDamage;
  if(mode === MODE_ATTACK){
    maxDamage = ATTACK_VALUE;
  }else if(mode === MODE_STRONG_ATTACK){
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}

function attackHandler(){
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler(){
  attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler(){
  let healValue;
  if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
    alert("You can't");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}

attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener('click',healPlayerHandler)