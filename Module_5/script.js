const currentDay = document.getElementById("currentDay");
const date = moment().format("dddd, MMMM Do YYYY");
currentDay.textContent = date;

const timeBlocks = document.querySelectorAll(".row");

timeBlocks.forEach(function (timeBlock) {
  const hour = timeBlock.querySelector(".hour").textContent;
  const description = timeBlock.querySelector(".description");
  const saveBtn = timeBlock.querySelector(".saveBtn");

  if (moment(hour, "hA").isBefore(moment(), "hour")) {
    description.classList.add("past");
  } else if (moment(hour, "hA").isAfter(moment(), "hour")) {
    description.classList.add("future");
  } else {
    description.classList.add("present");
  }

  description.value = localStorage.getItem(hour);

  saveBtn.addEventListener("click", function () {
    localStorage.setItem(hour, description.value);
  });
});