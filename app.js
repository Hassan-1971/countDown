import { CountDown } from "./countdown";


const getNewYear = () => {
    const currentYear = new Date().getFullYear();
    return new Date (`January 01 ${currentYear+1} 00:00:00`) ;
}

const year = document.querySelector('.year');
year.innerHTML = getNewYear().getFullYear(); // it will show 2025 in the homepage


const app = document.querySelector('.countdown-timer');
const message = document.querySelector('.message');
const heading = document.querySelector('h1');

// This format is for adding 0 for single digits (days/ minutes/ seconds) 
const format = (t) => {
    return t < 10 ? '0'+t : t ;
}

const render = (time) => {
    app.innerHTML = `
        <div class= "count-down" >
    <div class= "timer" >
            <h2 class= "days" > ${format(time.days)}</h2>
            <small> Days</small>
    </div>

    <div class= "timer" >
            <h2 class= "hours" > ${format(time.hours)}</h2>
            <small> Hours</small>
    </div>

    <div class= "timer" >
            <h2 class= "minutes" > ${format(time.minutes)}</h2>
            <small> Minutes</small>
    </div>

    <div class= "timer" >
            <h2 class= "seconds" > ${format(time.seconds)}</h2>
            <small> Seconds</small>
    </div>

</div>
    `;
}

const showMessage = () => {
    message.innerHTML = `Happy New Year ${newYear}!`;
    app.innerHTML = '';
    heading.style.display ='none';
}

const hideMessage = () => {
    message.innerHTML = '';
    heading.style.display ='block';
}


// This function will show message for a certain time
const complete = () => {
    
    showMessage();

    setTimeout( () => {
        hideMessage();
        countdownTimer.setExpireDate(getNewYear());
    }, 1000* 60 * 24 );

};

// Finally we will use the CountDown class to create a new one using three parameters for (expiredDate, onRender, onComplete)
const countdownTimer = new CountDown (
    getNewYear(),
    render,
    complete
);
