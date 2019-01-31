// trims or grows the string size to the first string size in the array
// border symbol is passed as a second param
function addBorder(picture: string[], border: string): string[] {
    let pattern = picture[0].length;
    let borderLine = border.repeat(pattern + 2);

    picture.forEach((str, idx) => {
       if (str.length > pattern) {
           picture[idx] = border + str.substr(0, pattern) + border;
       } else if (str.length < pattern) {
           picture[idx] = border + str + '0'.repeat(pattern - str.length) + border;
       } else {
           picture[idx] = border + str + border;
       }
    });

    // less readable as for me
    // picture.push(borderLine);
    // return ([borderLine].concat(picture));

    picture.push(borderLine);
    picture.unshift(borderLine);
    return picture;
}


let arr1 = ["abc", "ded"];
let arr2 = ["abc", "d"];
let arr3 = ["000000", "", "adf", "sdfasdf"];
let arr4 = ["abc", "whatthefuck"];

let picture = addBorder(arr3, "*");
picture.forEach(value => {
   console.log(value + "\n");
});
