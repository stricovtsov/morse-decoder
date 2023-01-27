const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};;


   function decode(expr) {
      const arrMorse = Object.keys(MORSE_TABLE);
      for (i=0; i < arrMorse.length; i++) {
          let a = arrMorse[i];
          let arrA = a.split('');
          for (b=0; b < arrA.length; b++) {
              arrA[b] === '.'? arrA[b] = '10': arrA[b] = '11';
          }
          const stringArrA = arrA.join('');
          arrMorse[i] = stringArrA;
      } 
  
      for (i=0; i < arrMorse.length; i++) {
           const c = arrMorse[i]
           const arrC = c.split('');
          if (arrC.length === 2) {
              arrC.unshift(0, 0, 0, 0, 0, 0, 0, 0);
          } else if (arrC.length === 4) {
              arrC.unshift(0, 0, 0, 0, 0, 0);
          } else if (arrC.length === 6) {
              arrC.unshift(0, 0, 0, 0);
          } else if (arrC.length === 8) {
              arrC.unshift(0, 0);
          } 
          const stringArrC = arrC.join('');
          arrMorse[i] = stringArrC;
      }
  
      const arrAlph = Object.values(MORSE_TABLE);
  
      const makeNewMorse = function(list, value) {
          let res = {}
          for (i=0; i<list.length; i++) {
              res[list[i]] = value[i];
          }
          return res
      }
      const newMorse = makeNewMorse(arrMorse, arrAlph);
      const sep =(xs, s) => xs.length ? [xs.slice(0, s), ...sep(xs.slice(s), s)] : []
  
      const arrExpr = sep(expr, 10);
  
      for (i=0; i<arrExpr.length; i++) {
      if (arrExpr[i] === '**********') {
          arrExpr[i] = ' ';
      }  for (let key in newMorse) {
          if (arrExpr[i] === key) {
              arrExpr[i] = newMorse[key]
          }
      }
      }
      return arrExpr.join('')
  }

module.exports  = {
    decode  
}