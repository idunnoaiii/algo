// function highestRank(arr) {
//     var getNum = num => arr.filter(n => n === num).length;
//     return arr.sort((a, b) => getNum(b) - getNum(a) || b - a)[0];
// }


const highestRank = arr => arr.reduce(({ counts, ...acc }, cur) => {
    const count = (acc[cur] || 0) + 1;
    counts[count] = Math.max(cur, counts[count] || 0);
    return { ...acc, [cur]: count, counts };
}, { counts: [0] }).counts.pop();



highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])