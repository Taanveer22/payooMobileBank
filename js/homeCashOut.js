console.log("home 2 js connected");

// step-1: add an eventListener to the btn-cash-out inside the form
document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    console.log(event);
    console.log('btn-cash-out clicked');

    // prevent page reload after form submit(subStep)
    event.preventDefault();

    // step-2: get the amount of the money to cash out
    const cashOutAmountInput = document.getElementById("cash-out-amount-input").value;
    console.log(cashOutAmountInput);
    console.log(typeof cashOutAmountInput);

    // get the pin number user provided(subStep);
    const cashOutPinInput = document.getElementById("cash-out-pin-input").value;
    console.log(cashOutPinInput);
    console.log(typeof cashOutPinInput);

    // step-3: verify the pin number(wrong way but for juniors)
    if (cashOutPinInput === "1234") {
      console.log("cash out from account has completed");

      // step-4: get the available availableBalance
      const availableBalance = document.getElementById("available-balance").innerText;
      console.log(availableBalance);
      console.log(typeof availableBalance);

    // step-5: cash out from available availableBalance after converting to numbers
    const convertCashOutAmount = parseFloat(cashOutAmountInput);
    console.log(convertCashOutAmount);
    console.log(typeof convertCashOutAmount);

    const convertAvailableBalance = parseFloat(availableBalance);
    console.log(convertAvailableBalance);
    console.log(typeof convertAvailableBalance);

    const cashOutAvailableBalance = convertAvailableBalance - convertCashOutAmount;
    console.log(cashOutAvailableBalance);
    console.log(typeof cashOutAvailableBalance);

    // step-6: update cashOutAvailableBalance in the dom/ui
    document.getElementById('available-balance').innerText = cashOutAvailableBalance;


    } else {
      console.log("failed to cash out . try again later .");
    }
  });
