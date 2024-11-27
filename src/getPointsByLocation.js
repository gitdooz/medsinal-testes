function getPointsByLocation(points, location) {
  return points.filter(point => point.location === location);
}

module.exports={getPointsByLocation}