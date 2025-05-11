console.log("home page connected");

// step-1 : add an eventListener to the btn-add-money inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    console.log("btn-add-money clicked");

    // prevent page reload after form submit(subStep)
    event.preventDefault();

    // step-2: get the amount of money to add
    const amountInput = document.getElementById("amount-input").value;
    console.log(amountInput);
    console.log(typeof amountInput);

    // get the pin number user provided(subStep)
    const pinInput = document.getElementById("pin-input").value;
    console.log(pinInput);
    console.log(typeof pinInput);

    // step-3: verify the pin number(wrong way but for juniors)
    if (pinInput === "1234") {
      console.log("add money to account has completed");

      // step-4 : get the available balance
      const balance = document.getElementById("balance").innerText;
      console.log(balance);
      console.log(typeof balance);

      // step-5 : add amount with available balance after converting to numbers
      const convertAmount = parseFloat(amountInput);
      console.log(typeof convertAmount);
      const convertBalance = parseFloat(balance);
      console.log(typeof convertBalance);
      const newBalance = convertAmount + convertBalance;
      console.log(newBalance);
      console.log(typeof newBalance);

      // step-6 : update newBalance in the dom/UI
      document.getElementById("balance").innerText = newBalance;
    } else {
      console.log("failed to add money . try again later");
    }
  });
