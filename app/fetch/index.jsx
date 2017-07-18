import 'whatwg-fetch';
var options={
    baseUrl:"https://free-api.heweather.com/v5/",
    token:'059cf0e0b3c44478bc214a2f855d38d0',
    city:"xian"
}
function getUrl(type="weather"){
    return options.baseUrl +type+"?city="+options.city+'&key='+options.token
}
var store = {
    getWeather:function(cb){
        return fetch(getUrl())
            .then(function(response) {
                return response.json()
            })
    },
    getNow:function(cb){
        fetch(getUrl("now")).then(function(response) {
            return response.json();
        })
    },
    getAqi:function(cb){
        fetch(getUrl("aqi")).then(function(response) {
            return response.json();
        })
    },
    getSuggestion:function(cb){
        fetch(getUrl("suggestion")).then(function(response) {
            return response.json();
        })
    }
};
export {store};


