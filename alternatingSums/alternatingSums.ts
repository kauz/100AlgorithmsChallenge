function alternatingSums(a: number[]): number[] {
    let weights: number[] = [0, 0];
    let goesInFirstTeam: boolean = true;

    for (let i: number = 0; i < a.length; i++) {
        goesInFirstTeam ? weights[0] += a[i] : weights[1] += a[i];
        goesInFirstTeam = !goesInFirstTeam;
    }

    return weights;
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
