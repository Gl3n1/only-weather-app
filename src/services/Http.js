export const getWeatherData = async city => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  const response = await fetch(url).then(res => {
    httpErrorHandler(res);

    return res;
  });

  return await response.json();
};

const httpErrorHandler = res => {
  if (res.status !== 200) {
    switch (res.status) {
      case 404:
        alert("could not find city!");
        break;
      default:
        alert("something went wrong!");
        break;
    }
  }
};

export const getMockData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(mock);
    }, 1000);
  });
};

const mock = {
  coord: { lon: 139.69, lat: 35.69 },
  weather: [
    { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
  ],
  base: "stations",
  main: {
    temp: 303.84,
    feels_like: 307.83,
    temp_min: 302.59,
    temp_max: 304.26,
    pressure: 1008,
    humidity: 70
  },
  visibility: 10000,
  wind: { speed: 3.1, deg: 180 },
  clouds: { all: 75 },
  dt: 1597316236,
  sys: {
    type: 1,
    id: 8074,
    country: "JP",
    sunrise: 1597262317,
    sunset: 1597311228
  },
  timezone: 32400,
  id: 1850144,
  name: "Tokyo",
  cod: 200
};
