const t = [1, -1, 3]

const t2 = t.concat(5)

console.log(t)  // tulostuu [1, -1, 3]
console.log(t2) // tulostuu [1, -1, 3, 5]

//////////////////////////////////////////
const t7 = [1, 2, 3]

const m1 = t.map(value => value * 2)
console.log(m1)   // tulostuu [2, 4, 6]

///////////////////////////////////////////

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// tulostuu [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]

///////////////////////////////////////////

const t8 = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // tulostuu 1, 2
console.log(rest)          // tulostuu [3, 4 ,5]

////////////////////////////////////////////

const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'Filosofian tohtori',
}

const object2 = {
  name: 'Full Stack -websovelluskehitys',
  level: 'aineopinto',
  size: 5,
}

const object3 = {
  name: {
    first: 'Juha',
    last: 'Tauriainen',
  },
  grades: [2, 3, 5, 3],
  department: 'TKTL',
}

///////////////////////////////
console.log(object1.name)         // tulostuu Arto Hellas
const fieldName = 'age' 
console.log(object1[fieldName])    // tulostuu 35
//////////////////////////////////

object1.address = 'Tapiola'
object1['secret number'] = 12341


////////Function/////////

const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}
const result = sum(1, 5)
console.log(result)
/////////////////////////////

const square = p => {
  console.log(p)
  return p * p
}

//////////////////////////
const square1 = p => p * p

/////////////////////////
const t4 = [1, 2, 3]
const tSquared = t4.map(p => p * p)
// tSquared on nyt [1, 4, 9]
/////////////////////////////////

function product(a, b) {
  return a * b
}

const vastaus = product(2, 6)

////////////////////////////////

const average = function(a, b) {
  return (a + b) / 2
}

const vastaus2 = average(2, 5)

export default App;
