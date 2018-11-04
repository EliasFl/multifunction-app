export function getRandomColor() {
  const colors = [
    '#16a085', '#27ae60', '#2c3e50', '#f39c12', 
    '#e74c3c', '#9b59b6', '#FB6964', '#342224', 
    "#472E32", "#BDBB99", "#77B1A9", "#73A857"
  ];
  const randomColor = colors[Math.round(Math.random() * (colors.length - 1))];
  return randomColor;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
}

export function getNextPrimeNumber(num) {
  let nextNum = num + 1;
  if (isPrime(nextNum)) {
    return nextNum;
  } 
  return getNextPrimeNumber(nextNum);
}

export function alternateLetters(string) {
  let stringSplitted = string.split('');
  stringSplitted.push(stringSplitted.shift());
  return stringSplitted.join('');
}

export function repeatAccion(accion, interval) {
  setInterval(accion, interval);
}