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

  //Step 1: Find midpoint of sides AB, AC, BC
  var midpointAB = midpoint(pointA, pointB);
  var midpointAC = midpoint(pointA, pointC);
  var midpointBC = midpoint(pointB, pointC);

  board.create('point', midpointAB, {
    name: 'Midpoint AB',
    strokecolor: 'red',
  });

  board.create('point', midpointAC, {
    name: 'Midpoint AC',
    strokecolor: 'red',
  });

  board.create('point', midpointBC, {
    name: 'Midpoint BC',
    strokecolor: 'red',
  });

  //Step 2: Find the slope of sides AB, AC, BC
  var slopeAB = slope(pointA, pointB);
  var slopeAC = slope(pointA, pointC);
  var slopeBC = slope(pointB, pointC);

  //Formula for bisector line: -x + y = slope

  //Display bisector lines from midpoints of AB, AC, BC
  //AB:
  var slopeBiAB = (-1/slopeAB);
  var biABPoint = [midpointAB[0]+1, midpointAB[1]+slopeBiAB];
  var biLineAB = board.create('line', [midpointAB, biABPoint], {
    straightFirst: true,
    straightLast: true,
    strokeWidth: 2,
    strokecolor: 'orange',
  });

  //AC:
  var slopeBiAC = (-1/slopeAC);
  var biACPoint = [midpointAC[0]+1, midpointAC[1]+slopeBiAC];
  var biLineAC = board.create('line', [midpointAC, biACPoint], {
    straightFirst: true,
    straightLast: true,
    strokeWidth: 2,
    strokecolor: 'orange',
  });


 //BC:
 var slopeBiBC = (-1/slopeBC);
 var biBCPoint = [midpointBC[0]+1, midpointBC[0]+slopeBiBC];
 var biLineBC = board.create('line', [midpointBC, biBCPoint], {
  straightFirst: true,
  straightLast: true,
  strokeWidth: 2,
  strokecolor: 'orange',
});

 var yInterBiAB = -((slopeBiAB * midpointAB[0])-midpointAB[1]);
 var yInterBiAC = -((slopeBiAC * midpointAC[0])-midpointAC[1]);
 var yInterBiBC = -((slopeBiBC * midpointBC[0])-midpointBC[1]);
 console.log(slopeBiAB, slopeBiAC, slopeBiBC);
 console.log(yInterBiAB, yInterBiAC, yInterBiBC);

 var circumcircleX = (yInterBiBC-yInterBiAB)/(slopeBiAB - slopeBiBC);
 var circumcircleY = (slopeBiAB * circumcircleX)+yInterBiAB;
 console.log('circumcircle:', circumcircleX, circumcircleY);
 board.create('point', [circumcircleX, circumcircleY], {
  name: '',
  strokecolor: 'red',
});

})();

function midpoint(pointA, pointB) {
  return [(pointA[0] + pointB[0])/2, (pointA[1]+pointB[1])/2];
}

function slope (pointA, pointB) {
  return ((pointB[1]-pointA[1])/(pointB[0]-pointA[0]));
}