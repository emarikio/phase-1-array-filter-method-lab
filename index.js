function findMatching(drivers, apple) {
  return drivers.filter
  (driver => driver.toLowerCase() === apple.toLowerCase()
  );
}

function fuzzyMatch(drivers, s) {
    return drivers.filter
    (driver => driver.startsWith(s));
}
function matchName(drivers, apple) {
    return drivers.filter
    (driver => driver.name === apple);
}