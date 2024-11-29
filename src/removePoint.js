// Esta função está realizando a remoção de pontos caso não seja um ponto de testagem dado os parâmetros.
function removePoint(points, id) {
  return points.filter(point => point.id !== id);
}

module.exports={removePoint}