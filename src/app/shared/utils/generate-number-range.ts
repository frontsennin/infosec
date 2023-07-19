export const generateRangeData = (count: number, yrange: any) => {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = 'w' + (i + 1).toString();
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: '',
      y: y,
    });
    i++;
  }
  return series;
};
