//Andelabs function findMinMax to return the array format for  the minimum and maximum values of an argument in an array//

var findMinMax = function(arr){
  var min = arr[0];
  var max = arr[0];
  for (var i=1; i <arr.length;i++){
    if(min > arr[i]){
       min = arr[i];
  }
    if(max < arr[i]){
       max = arr[i];
 }
  }
 if(min === max){
   return [min];
 }
 else {
   return [min,max];
 }
 }