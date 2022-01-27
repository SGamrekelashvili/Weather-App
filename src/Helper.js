import {createNavigationContainerRef} from '@react-navigation/native';
import {Images} from './assets';

let Apikey = '51c28eff36de7d8577b7f95dc29037db'; /// or 662b8d07c45cb61a0aad2ac79819c2ae
export const getApi = ({lat, lon}) => {
  const Api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily&appid=${Apikey}&units=metric`;
  return fetch(Api)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    });
};
export const getForecast = ({lat, lon}) => {
  const Api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&appid=${Apikey}&units=metric`;
  return fetch(Api)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    });
};

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
export function currentRoute() {
  if (navigationRef?.current) {
    return navigationRef.current.getCurrentRoute();
  } else {
    throw new Error('Navigation is not Referenced');
  }
}
export function getImages(imageName) {
  const Image = imageName.toLowerCase();
  if (Image === 'kutaisi') {
    return Images.kutaisi;
  } else if (Image === 'batumi') {
    return Images.batumi;
  } else {
    return Images.tbilisi;
  }
}
