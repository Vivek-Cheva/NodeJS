const dv = document.getElementById('time');
function gettime(){

    const currtime = new Date();
    const time = `${currtime.getHours()}:${currtime.getMinutes()}:${currtime.getSeconds()}`;
    dv.innerText = time;
}
setInterval(gettime, 1000);