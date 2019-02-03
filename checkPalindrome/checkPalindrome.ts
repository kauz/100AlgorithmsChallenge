function checkPalindrome(inputString: string): boolean {
    let palindrome = inputString.toLowerCase().split('');
    return palindrome.join('') === palindrome.reverse().join('');
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
