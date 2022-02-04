// You should implement your task here.

module.exports = function towelSort(array) {
    if (array === undefined) {
        return [];
    }
    let newArray = [];
    let colId = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (i % 2 === 0) {
                colId = j;
            } else {
                colId = array[i].length - 1 - j;
            }
            newArray.push(array[i][colId]);
        }
    }
    return newArray;
};
