function switchLights(a: number[]): number[] {

    let mutatedLights = [...a];

    for (let i = 0; i < a.length; i++) {
        if(a[i]) {
            mutatedLights = swap(mutatedLights, i)
        }
    }

    return mutatedLights;
}

function swap(lights: number[], curIdx: number): number[] {

    for (let i = 0; i < curIdx + 1; i++) {
        lights[i] = lights[i] ? 0 : 1;
    }

    return lights;
}


console.log(switchLights([1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));
