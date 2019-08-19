/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
  const sen = senate.split('')
  let idx = 0

  while (true) {
    if (!sen.includes('R')) return 'Dire'
    if (!sen.includes('D')) return 'Radiant'

    const senator = sen[idx]

    if (senator === 'R') {
      if (sen.slice(idx + 1).includes('D')) {
        sen.splice(sen.slice(idx + 1).indexOf('D') + idx + 1, 1)
      } else {
        sen.splice(sen.indexOf('D'), 1)
      }
    } else if (senator === 'D') {
      if (sen.slice(idx + 1).includes('R')) {
        sen.splice(sen.slice(idx + 1).indexOf('R') + idx + 1, 1)
      } else {
        sen.splice(sen.indexOf('R'), 1)
      }
    }

    idx = idx === sen.length ? 0 : idx + 1
  }
};


console.log(predictPartyVictory('RD'))
console.log(predictPartyVictory('RDD'))
console.log(predictPartyVictory('DDRRR'))
console.log(predictPartyVictory('RRDDD'))
console.log(predictPartyVictory('DDRRRR'))
