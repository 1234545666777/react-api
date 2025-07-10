import { useEffect, useState } from 'react';

export function useDates(location) {
  
  // Manejamos las constantes
  const [datos, setData] = useState(null);
  const [error, setError] = useState(null);

  // Buscamos la ciudad llamando a la API y retornamos la info
  useEffect(() => {
    if (!location) return;

    fetch(`https://api.weatherapi.com/v1/current.json?key=53850bb6d8b14f84bd3152559250607&q=${encodeURIComponent(location)}&lang=es`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setError(err));
  }, [location]);

  return { datos, error };
  
}


