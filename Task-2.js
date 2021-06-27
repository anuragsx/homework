class Provider {
  static LONDON = 'London';

  /**
   * Gets the weather for a given city
   */
  static async getWeather(city) {
    return Promise.resolve(`The weather of ${city} is Cloudy`);
  }

  /**
   * Gets the weather for a given city
   */
  static async getLocalCurrency(city) {
    return Promise.resolve(`The local currency of ${city} is GBP`);
  }

  /**
   * Given Longtitude and latitude, this function returns a city
   */
  static async findCity(long, lat) {
    if (long === 51.5074 && lat === 0.1278) {
      return Promise.resolve('London');
    }

    return Promise.reject('Unknown city');
  }

  /**
   * Given Longtitude and latitude, this function print these to the stdout
   */
  static async logCity(long, lat) {
    const city = await Provider.findCity(long, lat);
    if ( city === Provider.LONDON) {
      console.log(`The city for long: ${long} and lat: ${lat} is London`);
    }
  }

  /**
   * Given Longtitude and latitude, print city weather
   */
  static async logWeather(long, lat) {
    if (await Provider.findCity(long, lat) === Provider.LONDON) {
      console.log(await Provider.getWeather(this.LONDON));
    }
  }

  /**
   * Given city, print city weather and currency
   */
  static async logWeatherAndCurrency(city) {
    if (city === Provider.LONDON) {
      console.log(await Provider.getWeather(city), 'and', await Provider.getLocalCurrency(city));
    }
  }
}

Provider.logCity(51.5074, 0.1278);
Provider.logWeather(51.5074, 0.1278);
Provider.logWeatherAndCurrency('London');