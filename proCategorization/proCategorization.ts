interface pro {
  id: number,
  name: string,
  specialties: string[]
}

function proCategorization(pros: string[], preferences: string[][]): string[][][] {
  const professionals: pro[] = [];
  let specialties: string[] = [];

  for (let i = 0; i < pros.length; i++) {
    professionals.push({id: i + 1, name: pros[i], specialties: preferences[i]});
    specialties.push(...preferences[i].filter(v => !specialties.includes(v)));
  }

  let res: string[][][] = [];

  specialties.forEach(val => {
    res.push([[val], getPref(professionals, val)])
  });

  return res;
}

function getPref(objs: pro[], name: string): string[] {
  let names: string[] = [];

  objs.forEach(pro => {
    if (pro.specialties.includes(name)) {
      names.push(pro.name);
    }

  });

  return names;
}

console.log(proCategorization(["Jack", "Leon", "Maria"], [["Computer repair", "Handyman", "House cleaning"],
["Computer lessons", "Computer repair", "Data recovery service"],
["Computer lessons", "House cleaning"]]));
