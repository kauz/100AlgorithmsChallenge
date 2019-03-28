interface ILabels {
  today: number;
  upcoming: number;
  later: number;
}

function tasksTypes(deadlines: number[], day: number): number[] {
  const labels: ILabels = {
    today: 0,
    upcoming: 0,
    later: 0
  };
  const itr: number = deadlines.length;

  for (let i = 0; i < itr; i++) {
    if (deadlines[i] <= day) {
      labels.today++;
    } else if (deadlines[i] > day && deadlines[i] < day + 7) {
      labels.upcoming++;
    } else {
      labels.later++;
    }
  }


  const {today, upcoming, later} = labels;
  return [today, upcoming, later];
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
