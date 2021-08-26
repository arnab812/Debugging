let input_var = document.getElementById("input");

let enterKey = function (){
  let e;
  e = window.event;
  if (e.keyCode == 13)
  {
    document.getElementById("search").click();
    return false;
  }
  return true;
}

// Sending "Search Detail" to background.js
let searchButton = function(){
  chrome.runtime.sendMessage({ 
    searching: true,
    weby : input_var.value
  });
}

// Sending "Printing Message" to background.js
let printButton = function(){
  chrome.runtime.sendMessage({printing:true});
}

// Triggering Buttons
document.getElementById("search").addEventListener("click",searchButton);
document.getElementById("print").addEventListener("click",printButton);
input_var.addEventListener("keypress",enterKey);