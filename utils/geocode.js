const got=require('got')


   const geocode = (address,callback)=>
    {
        const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic3VjaGlzbWl0YXN1ciIsImEiOiJja2MzYjRuOHAxMGpsMnpsZmdyODFrejd2In0.sV1mMTYTuX3Hr7pRravgPw&limit=1'
        got(url,{responseType:'json',resolveBodyOnly:true}).then(response=>{
            callback(undefined,{
                loc : response.features[0].place_name,
                lat : response.features[0].center[1],
                long : response.features[0].center[0]
            })
        }).catch(error=>{
            callback('Unable to find location or use services right now',undefined)
        })
        
    }



    module.exports=geocode