window.addEventListener("DOMContentLoaded", function (event) {
    const name = document.getElementById("name");
    const textError = document.querySelector(".text-error");
    name.addEventListener("input", function () {
      if (name.value.length == 0) {
        textError.textContent = "";
        return;
      }
      try {
        new AddressBookData().name = name.value;
        textError.textContent = "";
      } catch (e) {
        textError.textContent = e;
      }
    });
    const phone = document.getElementById("phone");
    const phoneError = document.querySelector(".phone-error");
    phone.addEventListener("input", function(){
        if (phone.value.length == 0) {
            textError.textContent = "";
            return;
          }
        try{
            new AddressBookData().phone = phone;
            phoneError.textContent ="";
        }catch(e){
            phoneError.textContent = e;
        }
    });
  });