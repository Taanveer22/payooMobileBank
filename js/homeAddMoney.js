console.log("home js connected");

// step-1 : add an eventListener to the btn-add-money inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    console.log(event);
    console.log("btn-add-money clicked");

    // prevent page reload after form submit(subStep)
    event.preventDefault();

    // step-2: get the amount of money to add
    const addMoneyAmountInput = document.getElementById("add-money-amount-input").value;
    console.log(addMoneyAmountInput);
    console.log(typeof addMoneyAmountInput);

    // get the pin number user provided(subStep)
    const addMoneyPinInput = document.getElementById("add-money-pin-input").value;
    console.log(addMoneyPinInput);
    console.log(typeof addMoneyPinInput);

    // step-3: verify the pin number(wrong way but for juniors)
    if (addMoneyPinInput === "1234") {
      console.log("add money to account has completed");

      // step-4 : get the available balance
      const availableBalance = document.getElementById("available-balance").innerText;
      console.log(availableBalance);
      console.log(typeof availableBalance);

      // step-5 : add amount with available balance after converting to numbers
      const convertAddMoneyAmount = parseFloat(addMoneyAmountInput);
      console.log(convertAddMoneyAmount);
      console.log(typeof convertAddMoneyAmount);

      const convertAvailableBalance = parseFloat(availableBalance);
      console.log(convertAvailableBalance);
      console.log(typeof convertAvailableBalance);

      const addMoneyBalance = convertAddMoneyAmount + convertAvailableBalance;
      console.log(addMoneyBalance);
      console.log(typeof addMoneyBalance);

      // step-6 : update addMoneyBalance in the dom/UI
      document.getElementById("available-balance").innerText = addMoneyBalance;

    } else {
      console.log("failed to add money . try again later");
    }
  });
