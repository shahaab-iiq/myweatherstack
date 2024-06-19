const MyWeatherStack = require('./index');

const apiKey = 'your_api_key';
const weatherSdk = new MyWeatherStack(apiKey);

async function testSdk() {
    try {
        // Current Weather
        const currentWeather = await weatherSdk.current.getWeather('New Delhi');
        console.log('Current Weather in New Delhi:', currentWeather);

        // Multiple Current Weather
        const multipleCurrentWeather = await weatherSdk.current.getMultipleWeather(['London', 'Singapore', 'Shanghai']);
        console.log('Current Weather in London, Singapore, and Shanghai:', multipleCurrentWeather);

        // Historic Weather
        const historicWeather = await weatherSdk.historic.getWeather('New York', '2015-01-21');
        console.log('Historic Weather in New York:', historicWeather);

        // Forecast Weather
        const forecastWeather = await weatherSdk.forecast.getWeather('New York', 7);
        console.log('7-day Forecast for New York:', forecastWeather);
    } catch (error) {
        console.error(error);
    }
}

testSdk();
