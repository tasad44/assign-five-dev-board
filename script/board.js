document.getElementById("discover-box").addEventListener("click", function () {
  window.location.href = "./qa.html";
});

function commonTask() {
  alert("Board Updated successfully");
  const taskNumber = parseInt(document.getElementById("task-number").innerText);

  const newTaskNumber = taskNumber - 1;
  const modifiedNewTaskNumber = Math.max(0, newTaskNumber);
  document.getElementById("task-number").innerText = modifiedNewTaskNumber;

  const rightUpNumber = parseInt(
    document.getElementById("right-up-number").innerText
  );
  const newRightUpNumber = rightUpNumber - 1;
  document.getElementById("right-up-number").innerText = newRightUpNumber;
}

const blueButtons = document.querySelectorAll(".btn-blue");
for (const btn of blueButtons) {
  btn.addEventListener("click", function (event) {
    //   event.preventDefault();

    commonTask();
    btn.disabled = true;
    btn.style.backgroundColor = "gray";
    btn.style.cursor = "not-allowed";

    const selectedText =
      event.target.parentElement.parentElement.querySelector("h4").innerText;
    const time = new Date().toLocaleTimeString();

    const newTask = document.createElement("div");
    newTask.innerHTML = `
          <p class="text-base text-gray-500 rounded-md shadow-sm p-2">You have Complete The Task ${selectedText} at ${time}</p>
        `;

    document.getElementById("activity-log").appendChild(newTask);

    const numberOfDisabledButtons =
      document.querySelectorAll("button:disabled").length;
    

    if (numberOfDisabledButtons === 6) {
      alert("Congrats!!! You have completed all the current task");
    }
  });
}

document.getElementById("btn-history").addEventListener("click", function () {
  const newTask = document.getElementById("activity-log");
  newTask.innerText = "";
});



document.getElementById('btn-theme').addEventListener('click',function(){
    const red=Math.floor(Math.random()*256)
const green=Math.floor(Math.random()*256)
const blue=Math.floor(Math.random()*256)

document.getElementById('changable-bg').style.backgroundColor= `rgb(${red},${green},${blue})`
})

