const{getPointsByLocation} = require('../src/getPointsByLocation');
const{addPoint} = require('../src/addPoint')
const{removePoint} = require('../src/removePoint')
const{calculateDistance} = require('../src/calculateDistance')

describe('Teste do Mapa Interativo', () => {
  const testPoints = [
    {
        id: 1,
        name: "Centro de Saúde Dr. Luiz Wilson",
        address: "Rua Chão de Alegria, S/N, Bomba do Hemetério, Recife - PE, 52211-130",
        location: "Bomba do Hemetério"
    },
    {
        id: 2,
        name: "Clínica SiM Shopping Tacaruna",
        address: "Avenida Governador Agamenon Magalhães, 153, Santo Amaro, Recife - PE, 50110-000",
        location: "Santo Amaro"
    },
    {
        id: 3,
        name: "Hospital Oswaldo Cruz",
        address: "Rua Arnóbio Marques, 310, Santo Amaro, Recife - PE, 50110-130",
        location: "Santo Amaro"
    },
    {
        id: 4,
        name: "AHF Brasil-Clínica do Homem",
        address: "Rua Osvaldo Cruz, 342, Soledade, Recife - PE, 50050-225",
        location: "Soledade"
    }
];
  test('Deve buscar pontos pela localização', () => {
      const result = getPointsByLocation(testPoints, "Santo Amaro");
      expect(result.length).toBe(2);
      expect(result[0].location).toBe("Santo Amaro");
      expect(result[1].location).toBe("Santo Amaro");
  });
  test('Deve adicionar um novo ponto de testagem', () => {
      const newPoint = {
          id: 5,
          name: "Posto de Saúde Modelo",
          address: "Rua Teste, 123, Centro, Recife - PE, 50000-000",
          location: "Centro"
      };
      const result = addPoint([...testPoints], newPoint);
      expect(result.length).toBe(5);
      expect(result[4]).toEqual(newPoint);
  });
  test('Deve remover um ponto de testagem pelo ID', () => {
      const result = removePoint(testPoints, 3);
      expect(result.length).toBe(3);
      expect(result.find(point => point.id === 3)).toBeUndefined();
  });
  test('Deve calcular a distância corretamente entre dois pontos', () => {
      const userLocation = { x: 0, y: 0 };
      const pointLocation = { x: 3, y: 4 };
      const result = calculateDistance(userLocation, pointLocation);
      expect(result).toBe("5.00");
  });
});


