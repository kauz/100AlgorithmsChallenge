function flattenArray(arr: any[]): any[] {
    let newArr: any[] = [];

    flatten(arr);

    function flatten(arr: any[]) {
        arr.forEach((el) => {
            if (Array.isArray(el)) {
                flatten(el);
            } else {
                newArr.push(el);
            }
        });
    }

    return newArr;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
console.log(flattenArray([['a']]));
