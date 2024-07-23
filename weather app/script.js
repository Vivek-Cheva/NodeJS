window.addEventListener('load', ()=>{    
cname.innerText = `Location: ${localStorage.getItem('lname')}, ${localStorage.getItem('lreg')} - ${localStorage.getItem('lcon')}`;
time.innerText = `Time: ${localStorage.getItem('ltime')}`;
temp.innerText = `Temparature: ${localStorage.getItem('tc')}C - ${localStorage.getItem('tf')}F`

})

const btn = document.getElementById('search-btn');
const cname = document.getElementById('cname');
const time = document.getElementById('time');
const temp = document.getElementById('temp');
const gloc = document.getElementById('get-loc');
async function locgot(position){
    // let pos = await position.json()
    console.log(position);
    await getdatabyloc(position.coords.latitude,position.coords.longitude);
}
function locnotgot(){
    console.log('an error occured0');
}
gloc.addEventListener('click', async ()=>{
    navigator.geolocation.getCurrentPosition(locgot,locnotgot);
})

async function getdata(cityname) {
    // let url = `http://api.weatherapi.com/v1/current.json?key=a393a584fdaa4787a8d164307240107&q=${cityname}&aqi=no`;
    // console.log(url)
    const promis = await fetch(`http://api.weatherapi.com/v1/current.json?key=a393a584fdaa4787a8d164307240107&q=${cityname}&aqi=yes`)

   let res  = await promis.json();
   localStorage.setItem('lname',res.location.name);
    localStorage.setItem('lreg',res.location.region);
    localStorage.setItem('lcon',res.location.country);
     localStorage.setItem('ltime',res.location.name);
     localStorage.setItem('tc',res.current.temp_c);
     localStorage.setItem('tf',res.current.temp_f);
     location.reload();
     return res;
}
async function getdatabyloc(lat,long) {
    // let url = `http://api.weatherapi.com/v1/current.json?key=a393a584fdaa4787a8d164307240107&q=${cityname}&aqi=no`;
    // console.log(url)
    const promis = await fetch(`http://api.weatherapi.com/v1/current.json?key=a393a584fdaa4787a8d164307240107&q=${lat},${long}&aqi=yes`)

   let res  = await promis.json();
   localStorage.setItem('lname',res.location.name);
    localStorage.setItem('lreg',res.location.region);
    localStorage.setItem('lcon',res.location.country);
     localStorage.setItem('ltime',res.location.name);
     localStorage.setItem('tc',res.current.temp_c);
     localStorage.setItem('tf',res.current.temp_f);
     location.reload();
     return res;
}

btn.addEventListener('click', async () => {
    const inp = document.getElementById('city-input');
    const res = await getdata(inp.value);
     
     console.log(res);
    })
