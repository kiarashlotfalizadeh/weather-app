async function receiveData(city) {
  let rawData = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&include=current%2Cdays&key=G2UWX8NH4XHWRUY3HK5823J7M&contentType=json`,
    { mode: 'cors' },
  );
  let dataObject = await rawData.json();
  return dataObject;
}

function currentWeather(dataObject) {
  document.querySelector('.location').textContent = dataObject.resolvedAddress;

  document.querySelector('.current-temp').textContent = `${Math.round(
    ((dataObject.currentConditions.temp - 32) * 5) / 9,
  )}°C`;

  document.querySelector('.wind-text').textContent =
    `${Math.round(dataObject.currentConditions.windspeed * 1.6)} km/h`;

  document.querySelector('.rain-text').textContent =
    `${Math.round(dataObject.days[0].precip * 100)}%`;

  document.querySelector('.tomorrow-text').textContent = `${Math.round(
    ((dataObject.days[1].temp - 32) * 5) / 9,
  )}°C`;
}

export { receiveData, currentWeather };
