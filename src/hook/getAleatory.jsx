export async function getClimasRandom(quantity = 10) {

  // constante para las ciudades aleatorias
  const cities = [
    'Buenos Aires', 'La plata', 'Bariloche', 'Cordobá', 'Mar de Ajo', 'Puerto Madryn',
    'New York', 'Londres', 'Tokio', 'Paris', 'Los Angeles',
    'Roma', 'Moscú', 'Berlin', 'Merlin', 'Toronto', 'Lima',
    'Madrid', 'Cairo', 'Beijing', 'Seoul', 'Bogotá'
  ];

  const random = cities.sort(() => 0.5 - Math.random()).slice(0, quantity);

  // llamamos a la API
  const responses = await Promise.all(
    random.map(city =>
      fetch(`https://api.weatherapi.com/v1/current.json?key=53850bb6d8b14f84bd3152559250607&q=${encodeURIComponent(city)}&lang=es`)
        .then(res => res.json())
        .catch(() => null)
    )
  );

  return responses.filter(res => res && res.location);
}