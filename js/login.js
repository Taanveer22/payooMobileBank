console.log("login page connected");

document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    console.log("login btn clicked");

    // Get values INSIDE the click handler
    const mobNumber = document.getElementById("mob-number").value;
    console.log(mobNumber);

    const pinNumber = document.getElementById("pin-number").value;
    console.log(pinNumber);

    // validate user input
    if (mobNumber === "01761248294" && pinNumber === "1234") {
      console.log("congratulations! you are logged in");
      window.location.href = "../home.html";
    } else {
      alert("wrong input...");
    }
  });
