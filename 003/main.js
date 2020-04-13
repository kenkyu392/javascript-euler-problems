// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
;(() => {
  const want = 6857
  let got = 0
  let n = 600851475143
  while (n % 2 === 0) {
    n = n / 2
  }
  for (let i = 3; i * i <= n; i = i + 2) {
    while (n % i === 0) {
      got = i
      n = n / i
    }
  }
  if (n > 2) {
    got = n
  }
  console.log(`want(${want}) == got(${got}) = ${want === got}`)
})()
