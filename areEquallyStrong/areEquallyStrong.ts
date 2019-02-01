function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {

    if (Math.min(yourLeft, yourRight) === Math.min(friendsLeft, friendsRight)) {
        if (Math.max(yourLeft, yourRight) === Math.max(friendsLeft, friendsRight)) {
            return true;
        }
    }

    return false;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
