export {CountDown}


class CountDown {
    constructor (expiredDate, onRender, onComplete) {
        
        this.setExpiredDate(expiredDate);
        this.onRender = onRender;
        this.onComplete = onComplete;
    }
    // To find the difference btwn 1st jan 2025 - current Time 
    setExpiredDate (expiredDate) {
        const currentTime = new Date().getTime();

        this.timeRemaining = expiredDate.getTime() - currentTime;

        // Will use condition if difference is 0 or not
        this.timeRemaining <= 0 ? this.complete() : this.start();
     
     }


     complete(){
        if( typeof this.onComplete === 'function'){
            onComplete();
        };
     };

    //getTime() returns milsecound so we used a formate for better visibility
     getTime() {
        return{
            days: Math.floor(this.timeRemaining/1000/60/60/24),
            hours: Math.floor(this.timeRemaining/1000/60/60) % 24,
            minutes: Math.floor(this.timeRemaining/1000/60) % 60,
            seconds: Math.floor(this.timeRemaining/1000) % 60
        };
     };

     update () {
        if (typeof this.onRender === 'function') {
            this.onRender(this.getTime());
        }
     }

     start () {
        this.update(); //This will get what is current difference in getTime() formate

        const intervalID = this.setInterval(() => {
            this.timeRemaining -= 1000;

            if (this.timeRemaining < 0) {
                complete();

                clearInterval(intervalID);
            } else {
                this.update();
            }

        }, 1000);   // this.setInterval will run after every second untill the difference is 0.

     }
    


}