let input=document.getElementById("input")
let searchbtn=document.getElementById("search")
let cityname=document.getElementById("city")
let temperature=document.getElementById("temp")
let humidity=document.getElementById("humidity")
let wind=document.getElementById("wind")
let err = document.getElementById("error")
let apiinfo=[]



searchbtn.addEventListener('click', ()=>{
    let cityname=input.value.toLowerCase();
    apicall(cityname)
})

let apicall = async (cityname1)=>{
    apiinfo=[]
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${cityname1}&appid=3ba0e5eedae49070b51c85ad8c30def0&units=metric`
try{
    let response = await fetch(api);
    let json = await response.json();
    await apiinfo.push(json)
    console.log(apiinfo)
        err.innerHTML=''
        cityname.innerHTML=`City Name: ${cityname1}`
        temperature.innerHTML=`Temperature: ${apiinfo[0].main.temp}°C`
        humidity.innerHTML= `Humidity:${apiinfo[0].main.humidity}g.m-3 `
        wind.innerHTML= `Wind Speed:${apiinfo[0].wind.speed} KM/H`


}
catch(error)
{
    temperature.innerHTML=`Temperature:`
    humidity.innerHTML=`Humidity:`
    wind.innerHTML=`Wind Speed:`
    console.log("error found ", error)
    err.innerHTML=`City Name Not Found`
}

}

