document.addEventListener("DOMContentLoaded", function() {
  M.AutoInit();
});

var vm = new Vue({
  el: "#app",
  data: {
    error: false,
    errorMsg: "",
    seen: false,
    range: null,
    num: false,
    lowerchar: false,
    upperchar: false,
    spchar: false,
    isgenerated: false,
    characters: "",
    password: "Your Secure Password"
  },
  methods: {
    toClipBoard: function() {
      try {
        // Copy text... found in console lol very helpful to then look up methods
        navigator.clipboard.writeText(this.password);
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    },
    isComplete: function() {
      if (
        this.range == null &&
        this.spchar == false &&
        this.num == false &&
        this.lowerchar == false &&
        this.upperchar == false
      ) {
        this.error = true;
        this.errorMsg = "Enter Valid length and choose an option please!";
        return false;
      } else if (this.range == null) {
        this.error = true;
        this.errorMsg = "Enter a length please!";
        return false;
      } else if (this.range < 8 || this.range > 128) {
        this.error = true;
        this.errorMsg = "Enter Valid range between 8-128";
        return false;
      } else if (
        this.spchar == false &&
        this.num == false &&
        this.lowerchar == false &&
        this.upperchar == false
      ) {
        this.error = true;
        this.errorMsg = "select at least one option!";
        return false;
      } else {
        this.error = false;
        this.checkIfTrue();
        return true;
      }
    },
    checkIfTrue: function() {
      let lowerCase = "abcdefghijklmnopqrstuvwxyz";
      let upperCase = lowerCase.toUpperCase();
      //for some reason doesn't give uppercase any values lowerCase.toUpperCase();
      let number = "0123456789";
      let sp = "!@#-_.,:|~?+*=";
      if (this.characters.length > 0) {
        this.characters = "";
      }

      if (this.num) {
        this.characters += number;
      }
      if (this.spchar) {
        this.characters += sp;
      }
      if (this.lowerchar) {
        this.characters += lowerCase;
      }
      if (this.upperchar) {
        this.characters += upperCase;
      }

      /*
        switch (true) {
          case this.num:
            this.characters += number;
            console.log(this.characters);
          case this.spchar:
            this.characters += sp;
            console.log(this.characters);
          case this.upperchar:
            this.character += upperCase;
            console.log(this.characters);
          case this.lowerchar:
            this.characters += lowerCase;
            console.log(this.characters);
        } */
    },
    createPassword: function(str) {
      //call randomize which return
      //where what to randomly through in
      let pass = "";
      for (i = 0; i < this.range; i++) {
        pass += str.charAt(Math.floor(Math.random() * str.length));
      }
      return pass;
    },

    generate: function() {
      /* alert(
          `${this.spchar} ${this.num} ${this.lowerchar} ${this.upperchar} `
        );*/
      if (this.isComplete() === true) {
        this.password = this.createPassword(this.characters);
        this.isgenerated = true;
        console.log(this.password);
      }
    }
  }
});
