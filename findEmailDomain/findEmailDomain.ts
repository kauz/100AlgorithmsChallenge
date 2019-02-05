function findEmailDomain(address: string): string {
    let arr = address.split('@');
    return arr[arr.length - 1];
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
