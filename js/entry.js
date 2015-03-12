(function(){
  var board = JXG.JSXGraph.initBoard('box', {
    boundingbox: [-10, 10, 10, -10],
    axis: true,
    showCopyright: false,
  });

  var pointA = [2,8];
  var pointB = [-5,1];
  var pointC = [5,0];

  //Add points for triangle
  board.create('point', pointA, {
    name: 'A',
    strokecolor: 'red',
  });

  board.create('point', pointB, {
    name: 'B',
    strokecolor: 'red',
  });

  board.create('point', pointC, {
    name: 'C',
    strokecolor: 'red',
  });

  var lineAB = board.create('line', [pointA, pointB], {
    straightFirst: false,
    straightLast: false, 
    strokeWidth: 2,
  });

  var lineAC = board.create('line', [pointA, pointC], {
    straightFirst: false,
    straightLast: false, 
    strokeWidth: 2,
  });

  var lineBC = board.create('line', [pointB, pointC], {
    straightFirst: false,
    straightLast: false, 
    strokeWidth: 2,
  });
})();