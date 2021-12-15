class Weather {
    constructor(city) {
        this.city = city;
        this.key = '4dab47bfdb0a5a6f6662d5b28b34796d';
    }

    async getWeather() {
        const response = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`);
        const responseData = await response.json();
        return responseData;
    }

    changeCity(city) {
        this.city = city;
    }
}