//Esta função está pegando pontos de testagem com base na localização atual do usuário.
function getPointsByLocation(points, location) {
  return points.filter(point => point.location === location);
}

module.exports={getPointsByLocation}