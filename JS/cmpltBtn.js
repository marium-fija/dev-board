
let taskCount = getTextFieldValueById("task-count");
let navCount = getTextFieldValueById("nav-count");

const taskCountBtn = document.getElementById("task-count");
const navCountBtn = document.getElementById("nav-count");
const activeLog = document.getElementById("active-log");
const clearBtn = document.getElementById("clear-btn");


const completeBtns = document.querySelectorAll(".complt-btn");


completeBtns.forEach(function(btn){
    btn.addEventListener("click", function(){

        alert("Board Updated Successfully");

        btn.disabled = true;
        

        if(taskCount > 0){
            taskCount--;
           taskCountBtn.innerText = taskCount; 
        }

        navCount++;
        navCountBtn.innerText = navCount;

        const title = btn.closest(".card").querySelector(".card-title").innerText;

        const time = new Date().toLocaleTimeString();


        const log = document.createElement("p");
        log.innerText =`
        You have Complete The Task ${title} at ${time}
        `;

        activeLog.appendChild(log);

        
        
    })
})

clearBtn.addEventListener("click", function(){
    activeLog.innerText ="";
})
