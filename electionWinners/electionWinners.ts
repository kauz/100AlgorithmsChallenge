function electionsWinners(votes: number[], k: number): number {
    let possibleCandidates = 0;

    votes.sort((a, b) => a - b).forEach((candidate: number, idx: number, candidates: number[])  => {
        if (candidate) {
            if (candidate + k > Math.max(...candidates) || (candidate === Math.max(...candidates) && candidate !== Math.min(...candidates))) {
                possibleCandidates++;
            }
        }
    });

    return possibleCandidates;
}


// function electionsWinners(votes: number[], k: number): number {
//     let inTheRunning = 0;
//     let mostVotes = Math.max(...votes);
//     let sortedVotes = votes.sort((a, b) => b - a);
//
//     if (sortedVotes[0] !== sortedVotes[1] && k === 0) {
//         return 1;
//     }
//
//     votes.forEach((voteCount: number)  => {
//         if (mostVotes - voteCount < k) {
//             inTheRunning++;
//         }
//     });
//
//     return inTheRunning;
// }

console.log(electionsWinners([2, 3, 5, 2], 3));
console.log(electionsWinners([1, 4, 5, 10], 20));
console.log(electionsWinners([1, 4, 5, 10], 0));
console.log(electionsWinners([1, 1, 1, 1], 0));
