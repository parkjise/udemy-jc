const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
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
  if(mode === "ATTACK"){
    maxDamage = ATTACK_VALUE;
  }else if(mode === "STRONG_ATTACK"){
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}

function attackHandler(){
  attackMonster("ATTACK");
}

function strongAttackHandler(){
  attackMonster("STRONG_ATTACK");
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