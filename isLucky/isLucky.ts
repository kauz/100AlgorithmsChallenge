function isLucky(n: number): boolean | null {
    let numStr = n.toString();
    let lucky: boolean;

    if (numStr.length % 2 !== 0) {
        return null;
    }

    let res = halfStrSums(numStr, numStr.length);
    lucky = res[0] === res[1];
    return lucky;
}


function halfStrSums(str: string, width: number): string[] {
    let leftPart: string = str.slice(0, width / 2);
    let rightPart: string = str.slice(width / 2);
    let response: string[] | number[] = [leftPart, rightPart];

    response.forEach((s, i, arr: string[] | number[]) => {
        arr[i] = s.split('').reduce((sum, char) => sum + parseInt(char), 0)
    });


    return response;
}

console.log(isLucky(1230));
console.log(isLucky(239017));
