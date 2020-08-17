export const transformData = data => {
  // city, temp, humidity, pressure, wind speed
  const { name, main, wind } = data;

  const city = name;
  const temp = main.temp;
  const humidity = main.humidity;
  const pressure = main.pressure;
  const windSpeed = wind.speed;

  return {
    city,
    temp,
    humidity,
    pressure,
    windSpeed
  };
};
