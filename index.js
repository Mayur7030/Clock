//  // Retrieve the DOM elements that'll be updated every second
//  const secondsElement = document.querySelector('.seconds');
//  const minutesElement = document.querySelector('.minutes');
//  const hoursElement = document.querySelector('.hours');

//  function setRotation(element, degrees) {
//      // Set the rotation and add 90 to default from 12am
//      element.style.transform = `rotate(${degrees+90}deg)`;
//  }

//  function updateClockHandsToCurrentTime() {
//      // get the current time
//      const now = new Date();

//      // break it down to hours, minutes and seconds
//      const seconds = now.getSeconds();
//      const minutes = now.getMinutes();
//      const hours = now.getHours();

//      // calc the rotation of each clock hand in degrees
//      const secondsRotationDegrees = (seconds / 60) * 360;
//      const minutesRotationDegrees = (minutes / 60) * 360 + (seconds/60)*6;
//      const hoursRotationDegrees = (hours / 12) * 360 + (minutes/60)*30;

//      setRotation(secondsElement, secondsRotationDegrees);
//      setRotation(minutesElement, minutesRotationDegrees);
//      setRotation(hoursElement, hoursRotationDegrees);
//  }

//  // Set the initial clock state, and update it every second
//  setInterval(updateClockHandsToCurrentTime, 1000);
//  updateClockHandsToCurrentTime();

const hourhand = document.getElementById("hour");

const minutehand = document.getElementById("minute");

const secondhand = document.getElementById("second");

function setRotation(ele, degree) {
  ele.style.transform = `rotate(${degree + 90}deg)`;
}

function updateClockHandsToCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const hoursRotationDegrees = (hours / 12) * 360 + (minutes / 60) * 30;
  const minutesRotationDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
  const secondsRotationDegrees = (seconds / 60) * 360;

  setRotation(hourhand, hoursRotationDegrees);
  setRotation(minutehand, minutesRotationDegrees);
  setRotation(secondhand, secondsRotationDegrees);

 
}
setInterval(
    updateClockHandsToCurrentTime, 1000);
updateClockHandsToCurrentTime();
