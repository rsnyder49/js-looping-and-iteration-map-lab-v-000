// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const names = drivers.map(function(driver) { return driver.toLowerCase(); });
   return names;
}

function nameToAttributes(drivers) {
  const names = drivers.map(function(driver) { return Object.assign({}, {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}); });
   return names;
}