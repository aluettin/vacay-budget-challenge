const tripInfoButton = document.querySelector(".trip-info");
const dailyBudget = document.querySelector(".daily-budget");

const tripInfo = function () {
  let totalBudget = Number(prompt("What is your total budget?"));
  let accommodation = Number(prompt("What are your accommodation costs?"));
  let numDays = Number(prompt("How many days does your trip last?"));

  calculateDailyBudget(totalBudget, accommodation, numDays);
};

const calculateDailyBudget = function (totalBudget, accommodation, numDays) {
  let daily = ((totalBudget - accommodation) / numDays).toFixed(2);
  dailyBudget.innerText = `You can spend $${daily} a day on food and fun.`;
};

// Add event listener to button and fire off function

tripInfoButton.addEventListener("click", tripInfo);
