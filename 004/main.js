// Problem 4: Largest palindrome product
// A palindromic number reads the same both ways. The largest palindrome
// made from the product of two 2-digit numbers is 9009 = 91 Ã— 99.
// Find the largest palindrome made from the product of two 3-digit numbers.
;(() => {
  const want = 906609
  let got = 0
  for (let x = 1000; x > 100; x--) {
    for (let y = 1000; y > 100; y--) {
      let z = x * y
      if (isPalindrome(z.toString())) {
        got = z
      }
      if (z < got) {
        break
      }
    }
  }
  console.log(`want(${want}) == got(${got}) = ${want === got}`)
})()

function isPalindrome(s) {
  return (
    s.length % 2 === 0 &&
    s.slice(0, s.length / 2) === reverse(s.slice(s.length / 2))
  )
}

function reverse(s) {
  return s.split('').reverse().join('')
}
