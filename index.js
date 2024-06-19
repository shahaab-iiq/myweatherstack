const CurrentWeather = require('./current');
const HistoricWeather = require('./historic');
const ForecastWeather = require('./forecast');

class MyWeatherStack {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.current = new CurrentWeather(apiKey);
        this.historic = new HistoricWeather(apiKey);
        this.forecast = new ForecastWeather(apiKey);
    }
}

module.exports = MyWeatherStack;
