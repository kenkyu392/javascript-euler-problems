// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
;(() => {
  const want = 6857
  let got = 600851475143
  for (let i = 3; i * i <= got; i = i + 2) {
    while (got % i === 0) {
      got = got / i
    }
  }
  console.log(`want(${want}) == got(${got}) = ${want === got}`)
})()
