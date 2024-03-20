function getDate(){
    let today = new Date();
    let currentDate = today.getDate() + "/" + (today.getMonth()+1) + "/" +today.getFullYear();
    return currentDate;
}

function getTime(){
    let now = new Date();
    let at = `${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`;
    return at;

}

function getDateTime(){
    let dt = new Date();
    let dateTime = `${getDate()} / ${getTime()}`;
    return dateTime;
}

console.log(getDate());
console.log(getTime());
console.log(getDateTime());


