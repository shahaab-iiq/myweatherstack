const axios = require('axios');

class CurrentWeather {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.weatherstack.com';
    }

    async makeRequest(endpoint, params) {
        try {
            params.access_key = this.apiKey;
            const response = await axios.get(`${this.baseUrl}${endpoint}`, { params });
            return response.data;
        } catch (error) {
            throw new Error(`Error making request: ${error.response ? error.response.data.error.info : error.message}`);
        }
    }

    async getWeather(query) {
        return await this.makeRequest('/current', { query });
    }

    async getMultipleWeather(locations) {
        const query = locations.join(';');
        return await this.makeRequest('/current', { query });
    }
}

module.exports = CurrentWeather;
