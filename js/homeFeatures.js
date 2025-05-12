console.log("homefeauters js file connected");

// cash out button features
document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    console.log("show cash out button clicked");

    // show cash out form
    document.getElementById("cash-out-form").classList.remove("hidden");

    // hide add money form
    document.getElementById("add-money-form").classList.add("hidden");
  });

// add money button features
document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    console.log("show add money button clicked");

    // show add money form
    document.getElementById("add-money-form").classList.remove("hidden");

    // hide cash out form
    document.getElementById("cash-out-form").classList.add("hidden");
  });
