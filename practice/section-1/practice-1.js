'use strict';

// function collectSameElements(collectionA, collectionB) {
//   return '实现练习要求，并改写该行代码。';
// }
function collectSameElements(collectionA, collectionB) {
  var result = new Array();
  var sameCount = 0;
  for(var i=0;i<collectionA.length;i++) {
    var tempA = collectionA[i];
    for (var j = 0; j < collectionB.length; j++) {
      var tempB = collectionB[j];
      if (tempA == tempB) {
        result[sameCount] = tempB;
        sameCount++;
      }
    }
  }
  return result;
}
