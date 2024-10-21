const digitalClock = () => {
    let datetime = new Date();
    let hour = padZero(datetime.getHours())
    let mins = padZero(datetime.getMinutes())
    let sec = padZero(datetime.getSeconds())
    let ampm = hour >= 12 ? 'PM' : 'AM';

    document.getElementById("hour").innerHTML = hour
    document.getElementById("mins").innerHTML = mins
    document.getElementById("sec").innerHTML = sec
    document.getElementById("ampm").innerHTML = ampm

}

const padZero = (num) => {
    return num < 10 ? "0" + num : num
}

setInterval(digitalClock, 1000)