const getSleepHours = (day) => {
    day = day.toLowerCase();
    if ( day === 'monday') {
      return 7;
    } else if ( day === 'tuesday') {
      return 6;
    } else if ( day === 'wednesday') {
      return 7;
    } else if ( day === 'thursday') {
      return 7;
    } else if ( day === 'friday') {
      return 10;
    } else if ( day === 'saturday') {
      return 9;
    } else  {
      return 7;
    } 
  }
  
  const getActualSleepHours = () => {
    let day1 = getSleepHours('monday');
    let day2 = getSleepHours('tuesday');
    let day3 = getSleepHours('wednesday');
    let day4 = getSleepHours('thursday');
    let day5 = getSleepHours('friday');
    let day6 = getSleepHours('saturday');
    let day7 = getSleepHours('sunday');
    const sumOfHours = day1 + day2 + day3 + day4 + day5 + day6 + day7;
    return sumOfHours;
  }
  
  const getIdealSleepHours = () => {
    idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      return "You have got a perfect amount of sleep";
    } else if (actualSleepHours < idealSleepHours) {
      return "You have not got enough sleep, you had to sleep " + (idealSleepHours - actualSleepHours) + " hours more.";
    } else if (actualSleepHours > idealSleepHours) {
      return "You have slept more than enough, you did not have to sleep " + (actualSleepHours - idealSleepHours) + ' hours.';
    }
  }
  
  console.log(calculateSleepDebt());