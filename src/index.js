document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const keyedValue=document.querySelector("#new-task-description");
  const createNewTask=document.getElementById("newTask");
  const ul=document.createElement("ul");
  const div=document.getElementById("list");
  div.append(ul);
  createNewTask.addEventListener("click", function(e){
    e.preventDefault();
    const gettingKeyedValue=keyedValue.value;
    if (gettingKeyedValue===""){
      const li=document.createElement("li");
      li.textContent="";
      const button=document.createElement("button");
      button.textContent="x";
      button.classList.add("removeButton");
      button.addEventListener("click", function(){
        li.remove();
      })
      ul.append(li);
      li.append(button);
    } else {
      const li=document.createElement("li");
      li.textContent=gettingKeyedValue;
      const button=document.createElement("button");
      button.textContent="x";
      button.classList.add("removeButton");
      button.addEventListener("click", function(){
        li.remove();
      });
      ul.appendChild(li);
      li.appendChild(button);
      keyedValue.value="";
    }
  });

  })
  
