// Esta função está pegando a posição do usuário e do ponto de testagem e calculando distância para ser exibido.
function calculateDistance(userLocation, pointLocation) {
  const distance = Math.sqrt(
      Math.pow(userLocation.x - pointLocation.x, 2) +
      Math.pow(userLocation.y - pointLocation.y, 2)
  );
  return distance.toFixed(2); 
}

module.exports={calculateDistance}