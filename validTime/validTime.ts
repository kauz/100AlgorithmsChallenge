function validTime(time: string): boolean {
    let [hours, minutes] = time.split(':').map(c => parseInt(c));

    if (!hours || !minutes) {
        return false;
    }

    return !((hours > 23 || hours < 0) || (minutes > 60 || minutes < 0));
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));
