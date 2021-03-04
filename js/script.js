/* Create Account html */
const showFormCustomer = document.getElementById("formCustomer");
const showFormFarmer = document.getElementById("formFarmer");

function customerForm() {
  showFormCustomer.style.display = "block";
  showFormFarmer.style.display = "none";
}

function farmerForm() {
  showFormFarmer.style.display = "block";
  showFormCustomer.style.display = "none";
}
