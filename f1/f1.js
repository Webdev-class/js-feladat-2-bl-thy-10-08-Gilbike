const APIAdress = "https://archive-api.open-meteo.com/v1/archive?";
async function f1(lat, long, timeStr) {
  const response = await fetch(`${APIAdress}latitude=${lat}&longitude=${long}&start_date=${timeStr}&end_date=${timeStr}&hourly=temperature_2m`);
  const data = await response.json();

  const weather = data.hourly.temperature_2m;
  let sum = 0;

  weather.forEach((element) => {
    sum += element;
  });

  return Math.floor(sum / weather.length);
}

module.exports = f1;
