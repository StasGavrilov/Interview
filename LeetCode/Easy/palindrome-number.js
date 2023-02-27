// 09. Given an integer x, return true if x is a palindrome, and false otherwise.

console.log(isPalindrome(10101))

function isPalindrome(x) {
    const reverse = x.toString().split('').reverse().join('')
    const backToNumber = parseInt(reverse)

    if (x === backToNumber) {
        return true
    } else {
        return false
    }
}