const http = require('http');
const url = require('url');
const fetch = require('node-fetch'); 


const cities = [
  { name: 'New York', lat: 40.7128, lng: -74.0060 },
  { name: 'London', lat: 51.5074, lng: -0.1278 },
  { name: 'Paris', lat: 48.8566, lng: 2.3522 },
  { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
  { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
  { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
  { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
  { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  if (path === '/weather' && req.method === 'GET') {
    const cityName = parsedUrl.query.city;

    if (!cityName) {
      res.statusCode = 400; 
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'City parameter is missing' }));
      return;
    }

    getTemperatureOfCity(cityName, res);

  } else {
    res.statusCode = 404; 
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});


async function getTemperatureOfCity(cityName, res) {

  if (typeof cityName !== 'string') {
    // City name is not a valid string
    if (res) {
      res.statusCode = 400; // Bad Request
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Invalid city name' }));
    }
    return;
  }

  const city = cities.find((c) => c.name.toLowerCase() === cityName.toLowerCase());

  if (!city) {
    if (res) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'City not found' }));
    }
    return;
  }

  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&current_weather=true`);
    const data = await response.json();
    const temperature = data.current_weather.temperature;

    res.statusCode = 200; 
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ city: city.name, temperature: `${temperature}°C` }));
  } catch (error) {
    console.error(error);
    res.statusCode = 500; 
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
}


getTemperatureOfCity(cities);
