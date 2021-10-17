class AddressBookData {
    get id() {
      return this._id;
    }
    set id(id) {
      this._id = id;
    }
  
    get name() {
      return this._name;
    }
    set name(name) {
      let nameRegex = RegExp("^[A-Z][a-zA-Z\\s]{2,}$");
      if (nameRegex.test(name)) {
        this._name = name;
      } else throw "Invalid name";
    }
  
    get phone() {
      return this._phone;
    }
    set phone(phone) {
      let phoneRegex = RegExp("^\\d{1,2}\\s\\d{10}$");
      if (phoneRegex.test(phone)) {
        this._phone = phone;
      } else throw "Invalid phone";
    }
  
    get city() {
      return this._city;
    }
    set city(city) {
      this._city = city;
    }
  
    get state() {
      return this._salary;
    }
    set state(state) {
      this._state = state;
    }
  
    get note() {
      return this._note;
    }
    set note(note) {
      this._note = note;
    }
  
    get zipcode() {
      return this._zipcode;
    }
    set zipcode(zipcode) {
      let zipcodeRegex = RegExp("^\\d{3}\\s?\\d{3}$");
      if (zipcodeRegex.test(zipcode)) {
        this._zipcode = zipcode;
      } else throw "Invalid zipcode";
    }
  
    toString() {
      return ( "id=" + this.id + ", name='" + this.name + ", city='" + this.city + ",state='" + this.state + ",zipcode=" +this.zipcode +
        ",notes=" + this.note);
    }
  }