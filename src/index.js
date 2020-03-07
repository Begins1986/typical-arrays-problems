
exports.min = function min (array) {
  if (!Array.isArray(array) || array.length == 0) {
    console.log(0);
    return 0;
} else {
    var minValue = array[0];
    for (let i = 0; i < array.length; i++) {
        if (minValue > array[i]) {
            minValue = array[i];
        }
    }
    console.log(minValue);
    return minValue;
}
}

exports.max = function max (array) {
  if (!Array.isArray(array) || array.length == 0) {
    console.log(0);
    return 0;
} else {
    var maxValue = array[0];
    for (let i = 0; i < array.length; i++) {
        if (maxValue < array[i]) {
            maxValue = array[i];
        }
    }
    console.log(maxValue);
    return maxValue;
}
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || array.length == 0) {
    console.log(0);
    return 0;
} else {
    var Value = 0;
    for (let i = 0; i < array.length; i++) {
        Value += array[i];
    }
    var avgValue = Value / array.length;
    console.log(avgValue);
    return avgValue;
}
}
