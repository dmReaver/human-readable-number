module.exports = function toReadable (number) {
  let num_string = String(number).split('');
//   num_string = num_string.split('');
  let result = String();
  let digits = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine'
    //   0: 'zero'
  }

  let teen = {
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen'
  }

  let teens ={
      2: 'twenty',
      3: 'thirty',
      4: 'forty',
      5: 'fifty',
      6: 'sixty',
      7: 'seventy',
      8: 'eighty',
      9: 'ninety'
  }
  let elem = '';
  if(number == 0){
      return 'zero';
  }
  
  while (num_string.length > 0) {
    elem = '';
      if (num_string.length == 3) {
          elem = num_string.shift();
          result += digits[elem] + ' hundred '
          continue;
      }
      if (num_string.length == 2){
          elem = num_string.shift();
          if(elem == 0){
            continue;
        }
          if(Number(elem) == 1){
            let elem_2 = num_string.shift();
            result += teen[elem+elem_2]
          }else{
            result += teens[elem] + ' '
          }
          continue
      }

      if(num_string.length == 1){
        elem = num_string.shift();
        if(elem == 0){
            continue;
        }
        result += digits[elem];
        continue;
      }
    
  }
  return result.trim()
}