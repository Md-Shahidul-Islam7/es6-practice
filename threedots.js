const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 26, 22];

const allAges = ages
  .concat(ages2)
  .concat([2])
  .concat(ages3);
//console.log(allAges);
//const allAges2 = [ages, ages2, 2, ages3];
const allAges2 = [...ages, ...ages2, 2, ...ages3];
//console.log(allAges2);
const business = 650;
const minister = 450;
const sochib = 350;
//const maximum = Math.max(business, minister, sochib);
const takaPoisa = [650, 450, 350, 850];
const maximum = Math.max(...takaPoisa);
console.log(maximum);
