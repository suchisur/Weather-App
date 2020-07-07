const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')


const address=process.argv[2]


if(!address)
        {
            console.log('Please provide an address')
        }
else{

 geocode(address,(error,{loc,lat,long}) =>
    {
    
        if(error)
            return console.log(error)


        forecast(lat,long,(error,foredata)=>{
            if(error)
                return console.log(error)
            console.log(loc)
            console.log(foredata)
            
        })
    })

} 