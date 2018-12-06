var houses = [
  {
    name: 'Moraleja',
    owner: 'Pepito',
    squareMeters: 100,
    location: 'Madrid',
  },
  {
    name: 'Pacifico',
    owner: 'Manolo',
    squareMeters: 32,
    location: 'Madrid',
  },
  {
    name: 'Las Ramblas',
    owner: 'María',
    squareMeters: 44,
    location: 'Barcelona',
  },
  {
    name: 'Gracia',
    owner: 'Juani',
    squareMeters: 35,
    location: 'Barcelona',
  },
  {
    namer: 'Gracia',
    owner: 'Juani',
    squareMeters: 35,
    locationo: 'Barcelona',
  }
];

// 1. Quedarse solo con el nombre y la localizacion

function mapHouses(housesArr) {
  return housesArr
    .filter(function(house) {
      return house.name && house.location;
    })
    .map(function(house) {
      return {
        name: house.name,
        location: house.location
      }
    });
}
// 2. Filtrar solo para los que sean de Madrid

function filterLocation(housesArr) {
  return housesArr.filter(function(house) {
    return house.location === 'Madrid';
  });
}

function filterAndMap(housesArr) {
  return mapHouses(filterLocation(housesArr))
}

// 3. Sumar los metros cuadrados de todas las casas

function sumMeters(housesArr) {
  return housesArr.reduce(function(acc, house) {
    return acc += house.squareMeters;
  }, 0);
}

// 4. Ordenar las casas de mayor a menor metros cuadrados

function sortHouses(housesArr) {
  return housesArr.sort(function(a, b) {
    return b.squareMeters - a.squareMeters;
  });
}

console.log(sortHouses(houses));

// 5. Encontrar la casa qud tiene como Owner a Juani

// 6. Comprobar si todos tienen más de 30m cuadrados

// 7. Comprobar si alguno tiene como owner a Pepito



var books = [
  'Harry Potter y las Reliquias de la Muerte Mortal',
  'El señor de los anillos',
  'El nombre del viento',
  'El médico'
];

// 8. Comprobar si el array books contiene 'El médico'

// 9. Sacar el último elemento que tenga longitud par

var bullets = [
  {
    x: 20,
  },
  {
    x: 25,
  },
  {
    x: 30,
  },
  {
    x: 35,
  },
  {
    x: 40,
  },
  {
    x: 45,
  }
];

var player = {
  x: 45,
}

// 10. Devolver el array sin la nueva bala colisionada


// EXTRA: Haz una paginación a raíz de un array:
// ItemsNumber -> Número de elementos por página

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function setPagination(arr, itemsNumber) {

}