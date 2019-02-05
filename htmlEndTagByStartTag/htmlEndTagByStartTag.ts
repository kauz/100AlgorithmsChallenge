function htmlEndTagByStartTag(startTag: string): string {
    let res: string = '';

    if (startTag.charAt(0) !== '<' || startTag.charAt(startTag.length - 1) !== '>') {
        return res;
    }

    for (let i = 0; i < startTag.length; i++) {

        if (startTag[i] === ' ') {
            res += '>';
            break;
        }

        res += startTag[i];

        if (startTag[i] === '<') {
            res += '/';
        }
    }

    return res;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));
