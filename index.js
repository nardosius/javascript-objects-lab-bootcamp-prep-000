const recipe = {};

function updateObjectWithKeyAndValue(object, key, value){
  var ingr = Object.assign(object, {[key] : value});
  return ingr;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object = {[key]: value};
  console.log(object);
  return object;
}

function deleteFromObjectByKey(object, key){
  var ingr = Object.assign({}, object);
  delete ingr[key];
  console.log(ingr);
  return ingr;
}

function destructivelyDeleteFromObjectByKey(object, key){
   delete object[key];
  console.log(object);
  return object;
}