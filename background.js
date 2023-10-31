chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "selectRandomOptionsInIonSelect") {
      selectRandomOptionsInIonSelect();
    }
  });
  
  function selectRandomOption(selectElement) {
  
    const options = selectElement.querySelectorAll("ion-select-option");
  
    if (options.length > 0) {
  
      const randomIndex = Math.floor(Math.random() * options.length);
      selectElement.value = options[0]; // Set the value of selectElement to the first option
      console.log(options[0].getAttribute("value"));
      // options[randomIndex].click();
      // options[randomIndex].click()
      selectElement.value = options[0].getAttribute("value");
      const injector = angular.element(document).injector();
      const $rootScope = injector.get("$rootScope");
      const $timeout = injector.get("$timeout");
      const ngModelController = selectElement.controller("ngModel");
  
      // Apply the change and trigger the view update
      ngModelController.$setViewValue(valueAttribute);
      $rootScope.$digest();
  
      // Simulate user interaction by triggering an Angular input event
      const inputEvent = new Event("input", { bubbles: true });
      selectElement[0].dispatchEvent(inputEvent);
      // selectElement.setValue()
    }
  }
  
  function selectRandomOptionsInIonSelect() {
    // console.log("ebing callled");
  
    setTimeout(() => {
      const selectElements = document.querySelectorAll("ion-select");
      selectElements.forEach((selectElement) => {
        selectRandomOption(selectElement);
      });
    }, 2000);
  }
  
  selectRandomOptionsInIonSelect();