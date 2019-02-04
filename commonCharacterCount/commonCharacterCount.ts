interface counter {
    [key: string]: number;
}

function commonCharacterCount(s1: string, s2: string): number {

    let s1Arr: string[] = s1.split('');
    let s2Arr: string[] = s2.split('');
    let s1Obj: counter = getCharList(s1Arr);
    let s2Obj: counter = getCharList(s2Arr);
    let total = 0;

    for (let key in s1Obj) {
        if (s2Obj.hasOwnProperty(key)) {
            if (s2Obj[key] < s1Obj[key]) {
                total += s2Obj[key];
            } else {
                total += s1Obj[key];
            }
        }
    }

    return total;
}

function getCharList(chars: string[]): counter {
    let wordCount: counter = {};

    for (let i = 0; i < chars.length; i++) {

        if (wordCount.hasOwnProperty(chars[i])) {
            wordCount[chars[i]]++;
        } else {
            wordCount[chars[i]] = 1;
        }

    }

    return wordCount;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
