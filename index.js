// Write your solution in this file!

var driver = {}

function updateDriverWithKeyAndValue(obj, key, value){
  const newObj = { ...obj };
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(obj, key){
  newObj = delete { ...obj }.key;
  return newObj;
}

function destructivelyDeleteFromDriverByKey(obj, key){
  delete obj[key];
  return obj;
}
