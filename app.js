let newTask = document.querySelector('.new-task');
let addBtn = document.querySelector(".add-btn");
let listContainer = document.querySelector('.list-container');
let clearBtn = document.querySelector('.clear-btn button');


addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (newTask.value == "") {
        alert("Pleas add task !");
    } else {
        let li = document.createElement("li");
        let label = document.createElement("label");
        label.innerHTML = newTask.value;
        li.appendChild(label);
        li.className = "list";
        let span = document.createElement("span");
        span.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        li.appendChild(span);
        listContainer.appendChild(li);
        span.addEventListener('click', function(event) {
            li.remove();
        });
        clearBtn.addEventListener('click', function() {
          li.remove();  
        });
    }
    newTask.value = " ";
});
