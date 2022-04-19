
class CountdownTimer {   
    constructor ({selector, targetDate}){
      this.selector=selector;
      this.targetDate = targetDate;
      this.refs = {
        days: document.querySelector(`${selector} span[data-value="days"]`),
        hours: document.querySelector(`${selector} span[data-value="hours"]`),
        minutes: document.querySelector(`${selector} span[data-value="mins"]`),
        seconds: document.querySelector(`${selector} span[data-value="secs"]`),
      };
      this.start();
    };
     start() {
     setInterval(() => {
        const startTime = Date.now();
        const time = this.targetDate-startTime;
        this.updateclokeface(this.getTimeComponents(time));
          },1000)};
          
   
    pad(value) {
      return String(value).padStart(2, '0');
    }

    padDay(value) {
      return String(value).padStart(3, '0');
    }

    getTimeComponents(time) {
      const days = this.padDay(Math.floor(time / (1000 * 60 * 60 * 24))) ;
      const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
      return { days, hours, mins, secs};
    };

  updateclokeface({ days, hours, mins, secs}) {
    this.refs.days.innerHTML= days;
    this.refs.hours.innerHTML= hours;
    this.refs.minutes.innerHTML= mins;
    this.refs.seconds.innerHTML= secs;
};
};

new CountdownTimer({
      selector: '#timer-1',
      targetDate: new Date('Jul 17, 2022')});


















  // refs = {
  //   days: document.querySelector(`span[data-value="days"]`),
  //   hours: document.querySelector(`span[data-value="hours"]`),
  //   minutes: document.querySelector(`span[data-value="mins"]`),
  //   seconds: document.querySelector(`span[data-value="secs"]`),};
  
  // let intervalId = null;
  // const finishTime = new Date('April 19, 2022');
  
  //   function pad(value) {
  //     return String(value).padStart(2, '0');
  //   }
  //   start();
  //   function start(){
  //     intervalId = setInterval(() => {
  //       const startTime = Date.now();
  //       const deltaTime = finishTime-startTime;
  //       getTimeComponents(deltaTime);
  
  //       updateclokeface(getTimeComponents(deltaTime))
  
  //     },1000);
  
  //   }
  //   function updateclokeface({ days, hours, mins, secs}) {
  //     refs.days.innerHTML= days;
  //     refs.hours.innerHTML= hours;
  //     refs.minutes.innerHTML= mins;
  //     refs.seconds.innerHTML= secs;
  // }
  //   function getTimeComponents(time) {
  //     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24))) ;
  //     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  //     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  //     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  //     return { days, hours, mins, secs};
      
  //   };
  
