// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const driverUpdate = { ...driver };

  driverUpdate[key] = value;

  return driverUpdate;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const deletedDriver = Object.assign({}, driver);
  delete deletedDriver[key];
  return deletedDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
