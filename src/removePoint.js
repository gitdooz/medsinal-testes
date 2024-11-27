function removePoint(points, id) {
  return points.filter(point => point.id !== id);
}

module.exports={removePoint}