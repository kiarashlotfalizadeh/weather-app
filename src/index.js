import './styles.css';
import { receiveData, currentWeather } from './misc';

let testObject;
let input = document.querySelector('#location-search');

receiveData('london').then((response) => {
  testObject = response;
  currentWeather(testObject);
});

input.addEventListener('keypress', function (event) {
  if (event.key == 'Enter') {
    event.preventDefault();
    receiveData(input.value).then((response) => {
      testObject = response;
      currentWeather(testObject);
    });
    input.value = '';
  }
});
