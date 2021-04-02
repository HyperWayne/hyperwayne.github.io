


function computeCupOfCoffee (startDate, nbOfCoffeePerDay, elementId) {

    var DAY, START, TODAY, cupOfCoffeePerDay, timeBetweenInDays, timeBetweenInMillis;
    DAY = 1000 * 60 * 60 * 24;
    TODAY = new Date();
    START = new Date(startDate);
    timeBetweenInMillis = Math.abs(TODAY - START);
    timeBetweenInDays = Math.floor(timeBetweenInMillis / DAY);
    cupOfCoffeePerDay = timeBetweenInDays * nbOfCoffeePerDay;

    return document.getElementById(elementId).innerText = cupOfCoffeePerDay;

  }