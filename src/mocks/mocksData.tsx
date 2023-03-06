import DropMiniaturePNG from '../assets/images/drop-miniature.png';
import WindMiniaturePNG from '../assets/images/wind-miniature.png';
import RainingCloudPNG from '../assets/images/raining-cloud-miniature.png';
import RainingSmallPNG from '../assets/images/rainingsmall.png';
import CloudSmallPNG from '../assets/images/cloud.png';
import SunSmallPNG from '../assets/images/sun.png';
import CloudSuningRainingPNG from '../assets/images/cloudsunraining.png'

const dataWeatherDescription = [
    {
      id: 1,
      icon: DropMiniaturePNG,
      value: "24%",
      text: "Umidade",
    },
  
    {
      id: 2,
      icon: WindMiniaturePNG,
      value: "30km/h",
      text: "Veloc. Vento",
    },
  
    {
      id: 3,
      icon: RainingCloudPNG,
      value: "76%",
      text: "Chuva",
    },
  ];
  
  const dataCardHourTemperature = [
    {
      id: 1,
      icon: RainingSmallPNG,
      temperatureValue: 23,
      hour: "09:00",
    },
  
    {
      id: 2,
      icon: CloudSmallPNG,
      temperatureValue: 18,
      hour: "13:00",
    },
  
    {
      id: 3,
      icon: SunSmallPNG,
      temperatureValue: 8,
      hour: "17:00",
    },
  
    {
      id: 4,
      icon: CloudSuningRainingPNG,
      temperatureValue: 8,
      hour: "23:00",
    },
  ];

  export { dataCardHourTemperature, dataWeatherDescription}