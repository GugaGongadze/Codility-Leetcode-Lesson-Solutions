/**
* @param {number} num
* @return {string} roman numeral
*/
var intToRoman = function(num) {
  const table = new Map()
  table.set(1000, 'M',)
  table.set(900, 'CM')
  table.set(500, 'D',)
  table.set(400, 'CD',)
  table.set(100, 'C',)
  table.set(90, 'XC',)
  table.set(50, 'L',)
  table.set(40, 'XL',)
  table.set(10, 'X',)
  table.set(9, 'IX',)
  table.set(5, 'V',)
  table.set(4, 'IV',)
  table.set(1, 'I',)
  
  let converted = ''
  let currInt = num

  while (currInt > 0) {
    for (const [key, value] of table) {
      if (currInt % key < currInt) {
        converted = converted + value
        currInt = currInt - key
        break
      }
    }
  }

  console.log(converted)
  return converted
};

intToRoman(2)
intToRoman(20)
intToRoman(4)
intToRoman(9)
intToRoman(58)
intToRoman(1994)
intToRoman(1996)
