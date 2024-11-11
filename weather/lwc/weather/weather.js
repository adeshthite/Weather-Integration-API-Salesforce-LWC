import { LightningElement } from 'lwc';
import getWeatherData from '@salesforce/apex/weatherApex.getWeatherData';
import weatherIMG from '@salesforce/resourceUrl/Weather';


export default class Weather extends LightningElement {
    

    Name;
    weatherIcon;
    weathertext;
    weatherCity;
    weatherRegion;
    weatherCountry;
    weatherTime;

    weatherTempC;

    WeatherImage = weatherIMG;


    Handlecity(event){
        event.target.label='Search City';
        this.Name = event.target.value;
       // alert(event.target.value);

    }


    handlegetWeather(){
        getWeatherData({city:this.Name})
            .then(Response=>{
                let weatherParseData = JSON.parse(Response);
                this.weatherIcon = weatherParseData.current.condition.icon;
                this.weathertext = weatherParseData.current.condition.text;
                this.weatherCity = weatherParseData.location.name;
                this.weatherRegion = weatherParseData.location.region;
                this.weatherCountry = weatherParseData.location.country;
                this.weatherTime = weatherParseData.location.localtime;
                this.weatherTempC = weatherParseData.current.temp_c;
            })
            .catch(error=>{
                this.weathertext = 'No Matching location or city found';
                console.error('---error--->',JSON.stringify(error));
            })
        }

    












}