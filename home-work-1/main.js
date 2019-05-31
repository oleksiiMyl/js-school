function difference(arr, itemsToExclude) {

  return arr.filter(element1 => !itemsToExclude.some(element2 => element1 === element2));
}

// console.log(difference([2, 1, 5, 7, 4], [2, 9, 4]));


function groupBy(array, value) {
  const groupedObj = {};
  // used function uniq, that I created below
  const values = uniq(array.map(el => el.hasOwnProperty(value) ? el[value] : false));

  values.forEach(element1 => {
    groupedObj[element1] = array.filter(element2 => element2[value] === element1);
  });

  return groupedObj;
}

// console.log(groupBy([
//   { gender: 'male', name: 'Max'},
//   { gender: 'male', name: 'Fred'},
//   { gender: 'female', name: 'Jane'}
//   ], 'gender')
// );


function flatten(array) {
  let index = 0;
  let innerArr = [];

  array.forEach((el, i) => {
    if (Array.isArray(el)) {
      index = i;
      innerArr = el;
    }
  });

  return (
    innerArr.length
    ? [...array.slice(0, index),...innerArr, ...array.slice(index + 1)]
    : array
  );
}

// console.log(flatten([3, 6, [4, [3, 9]], 1, 6, 9]));


function uniq(array) {
  array.sort((a, b) => a - b);

  return array.filter((el, i) => el !== array[i - 1] ? el : false);
}

// console.log(uniq([2, 5, 1, 7, 45, 7, 3, 7, 1, 1, 2]));


function chunk(array, size) {
  const res = [];
  let step = 0;

  while(array.length > step && size > 0) {
    res.push([...array.slice(step, step + size)]);
    step += size;
  }

  return res;
}
// console.log(chunk([4, 6, 7, 3, 2, 1, 5, 8, 5, 3], 4));