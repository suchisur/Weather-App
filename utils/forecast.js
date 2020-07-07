const got=require('got')



const forecast = (lat,long,callback)=>{
   const url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+encodeURIComponent(lat)+ '&lon='+encodeURIComponent(long)+ '&%20exclude=hourly,daily&appid=9e26a5163f8e75c83c453288b839fa6d'
got(url,{responseType: 'json', resolveBodyOnly: true}).then(response => {

   
    callback(undefined,'The temperature currently is '+response.current.temp+ ' and what can be seen is '+response.current.weather[0].main
    +'. The description would be '+response.current.weather[0].description)
    
       
        
    })
    .catch(error => {
    
            callback('The service is not available right now',undefined)
       
    })
}


module.exports=forecast