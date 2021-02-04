module.exports = function reverse (n) {
  n = String(n)
  n = n.replace('-','')
    return +[...n].reverse().join('')  
   }
