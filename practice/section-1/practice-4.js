'use strict';
function collectSameElements(collectionA, objectB){
  var result = new Array();
  var sameCount = 0;
  var collectionB=objectB.value;
  for(var i=0;i<collectionA.length;i++) {
    var tempA = collectionA[i].key;
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
