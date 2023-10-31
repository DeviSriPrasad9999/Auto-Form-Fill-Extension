let selectElements =[]
let inProgress = false;
let url = window.location.href
// console.log("Content script is running!");

chrome.runtime.sendMessage({ action: "selectRandomOptionsInIonSelect" });
function selectRandomOption(selectElement) {
  // console.log("24323423");
  const options = selectElement.querySelectorAll("ion-select-option");
  if (options.length > 0) {
    const randomIndex = Math.floor(Math.random() * options.length);
    options[randomIndex].selected = true;
  }
}
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   if (message.action === "selectRandomOptionsInIonSelect") {
//     selectRandomOptionsInIonSelect();
//   }
// });

async function selectRandomOption(selectElement) {
  inProgress = true;
  const options = selectElement.querySelectorAll("ion-select-option");
  selectElement.click()
  if (options.length > 0) {
    
    const randomIndex = Math.floor(Math.random() * options.length);
    await new Promise((resolve) => setTimeout(resolve, 200));
    const wholeElement = document.querySelector('.ion-overlay-wrapper')
    const btnSet = wholeElement.querySelector('.alert-radio-group');
    const button = wholeElement.querySelectorAll('button')[randomIndex];
    
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const click = (x, y) => {
      const ev = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true,
        'screenX': x,
        'screenY': y
      });
      const el = document.elementFromPoint(x, y);
      el.dispatchEvent(ev);
    }
    
    await new Promise((resolve) => setTimeout(resolve, 100));
    click(x,y)
    const closeBtn = wholeElement.querySelector('.alert-button-group')
    await new Promise((resolve) => setTimeout(resolve, 100));
    const rectOk = closeBtn.querySelectorAll('button')[1].getBoundingClientRect();
    const a = rectOk.left + rectOk.width / 2;
    const b = rectOk.top + rectOk.height / 2;
    await new Promise((resolve) => setTimeout(resolve, 300));
    click(a,b)
    
  }
  inProgress=false
  selectElement.classList.add("selected-dsp"); // Mark as processed
  await new Promise((resolve) => setTimeout(resolve, 400));
    selectElements = document.querySelectorAll("ion-select:not(.selected-dsp)");
    if(selectElements.length)
    selectRandomOptionsInIonSelect();
}


setTimeout(() =>{
  createButton();
},2000)



let j = 0
// aria-activedescendant="alert-input-2-0"
function selectRandomOptionsInIonSelect() {

  while(!inProgress){
    console.log(j,selectElements[j])
    selectRandomOption(selectElements[j])
    }
}

// selectRandomOptionsInIonSelect();

function createButton() {
  const button = document.createElement("button");

  // Set the button's inner text
  button.innerText = "Auto Select";

  // Apply the specified styles
  button.style.position = "fixed";
  button.style.bottom = "5%";
  button.style.right = "5%";
  button.style.zIndex = "999999999";
  button.style.backgroundColor = "#c2fbd7";
  button.style.borderRadius = "100px";
  button.style.boxShadow = "rgba(44, 187, 99, .2) 0 -25px 18px -14px inset, rgba(44, 187, 99, .15) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px";
  button.style.color = "green";
  button.style.cursor = "pointer";
  button.style.display = "inline-block";
  button.style.fontFamily = "CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif";
  button.style.padding = "7px 20px";
  button.style.textAlign = "center";
  button.style.textDecoration = "none";
  button.style.transition = "all 250ms";
  button.style.border = "0";
  button.style.fontSize = "16px";
  button.style.userSelect = "none";
  button.style.touchAction = "manipulation";

  // Append the button to the document body
  document.body.appendChild(button);
  button.addEventListener("click", function() {
    startProcess();
  });
}

function startProcess() {
  clearFunction()
  selectElements = document.querySelectorAll("ion-select");
  // inProgress=false
  selectRandomOptionsInIonSelect()
}


function clearFunction(){
  selectElements = []
  return selectElements
}