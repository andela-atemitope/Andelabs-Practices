function dataTypes(x){
  if(typeof x === 'string'){
    return x.length;
  }
  
  if(x === null || x === undefined){
  return 'no value';
  }
  
  if(typeof x === 'boolean'){
    return x;
  }
  
  if(typeof x === 'number'){
    if (x < 100){
      return 'less than 100';
    }else if(x > 100){
      return 'more than 100';
    }else {
      return 'equal to 100';
      }
  }
  
  if(Array.isArray(x)){
    if (x.length > 2){
      return x[2];
    }else {
      return undefined;
      }
  }
  if(typeof x === 'function'){
    return x(true);
  }

}
