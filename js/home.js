console.log("home page connected");

// step-1 : add an eventListener to the btn-add-money inside the form 
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    console.log("btn-add-money clicked");
    
    // prevent page reload after form submit
    event.preventDefault();

    // step-2: get the amount of money to add
    const amountInput = document.getElementById("amount-input").value;
    console.log(amountInput);

    // step-3: verify the pin number user provided
    const pinInput = document.getElementById('pin-input').value;
    console.log(pinInput);
  });
