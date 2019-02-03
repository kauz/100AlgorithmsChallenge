function isCaseInsensitivePalindrome(inputString: string): boolean {
    let palindrome = inputString.toLowerCase().split('');
    return palindrome.join() === palindrome.reverse().join();
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
