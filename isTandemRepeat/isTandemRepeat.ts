function isTandemRepeat(inputString: string): boolean {
    return inputString.length % 2 === 0
            ? inputString.substr(0, inputString.length / 2) === inputString.substr(inputString.length / 2)
            : false;
}

console.log(isTandemRepeat('tandemtandem'));
console.log(isTandemRepeat('qqq'));
console.log(isTandemRepeat('2w2ww'));
