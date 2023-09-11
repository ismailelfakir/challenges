const fs = require('fs');
const csv = require('csv-parser');
const fetch = require('node-fetch');

// const cities = [
//   { name: 'New York', lat: 40.7128, lng: -74.0060 },
//   { name: 'London', lat: 51.5074, lng: -0.1278 },
//   { name: 'Paris', lat: 48.8566, lng: 2.3522 },
//   { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
//   { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
//   { name: 'Rome', lat: 41.9028, lng: 12.4964 },
//   { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
//   { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
//   { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
//   { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
// ];

// async function readCityNameFromFile() {
//   try {
//     const cityName = await fs.readFile('input.txt', 'utf-8');
//     return cityName.trim(); // Remove any leading/trailing whitespace
//   } catch (error) {
//     throw new Error('Error reading city name from input.txt');
//   }
// }

// async function getTemperatureOfCity() {
//   try {
//     const cityName = await readCityNameFromFile();
//     const selectedCity = cities.find(city => city.name === cityName);

//     if (!selectedCity) {
//       throw new Error(`City '${cityName}' not found in the list.`);
//     }

//     const response = await fetch(
//       `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.lat}&longitude=${selectedCity.lng}&current_weather=true`
//     );
//     const data = await response.json();
//     const temperature = data.current_weather.temperature;

//     // Delete existing file if it exists
//     try {
//       await fs.unlink(`${cityName}.txt`);
//     } catch (error) {
//       // Ignore error if file doesn't exist
//     }

//     // Write temperature result to a new file
//     await fs.writeFile(`${cityName}.txt`, `City: ${cityName}\nTemperature: ${temperature}°C`);
//     console.log(`City: ${cityName}`);
//     console.log(`Temperature: ${temperature}°C`);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// getTemperatureOfCity();

const inputFile = 'worldcities.csv';
const outputFile = 'worldcities.json';

const countries = {}; 

fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => 
  {
    const country = row.country;
    const cityData = {
      name: row.city,
      lat: parseFloat(row.lat),
      lng: parseFloat(row.lng),
    };

    if (!countries[country]) {
      countries[country] = []; 
    }

    countries[country].push(cityData); 
  })
  .on('end', () => {
    fs.writeFile(outputFile, JSON.stringify(countries, null, 2), (err) => {
      if (err) {
        console.error('Error writing JSON file:', err);
      } else {
        console.log('CSV file successfully converted to JSON.');
      }
    });
  });