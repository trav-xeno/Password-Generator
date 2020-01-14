document.addEventListener("DOMContentLoaded", function() {
  M.AutoInit();

  var vm = new Vue({
    el: "#app",
    data: {
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
          // 1) Copy text
          navigator.clipboard.writeText(this.password);

          // 2) Catch errors
        } catch (err) {
          console.error("Failed to copy: ", err);
        }
      },
      isComplete: function() {
        console.log(this.range);
        if (this.range === null) {
          alert("enter data range please!");
          return false;
        } else if (this.range < 8 || this.range > 128) {
          alert("Enter Valid range between 9-128");
          return false;
        } else if (
          this.spchar == false &&
          this.num == false &&
          this.lowerchar == false &&
          this.upperchar == false
        ) {
          alert("select at least one option!");
          return false;
        } else {
          this.checkIfTrue();
          return true;
        }
      },
      checkIfTrue: function() {
        let lowerCase = "abcdefghijklmnopqrstuvwxyz";
        let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        //for some reason doesn't give uppercase any values lowerCase.toUpperCase();
        let number = "0123456789";
        let sp = "!@#-_.,:|~?+*=";
        if (this.characters.length > 0) {
          this.characters = "";
        }

        if (this.num) {
          this.characters += number;
          console.log(this.characters);
        }
        if (this.spchar) {
          this.characters += sp;
          console.log(this.characters);
        }
        if (this.lowerchar) {
          this.characters += lowerCase;
          console.log(this.characters);
        }
        if (this.upperchar) {
          this.characters += upperCase;
          console.log(this.characters);
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
        console.log(this.characters.length);
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
});
/*
var app = new Vue({
  el: "#app",
  data: {
    test: "test",
    complete: false,
    seen: false,
    range: 8,
    spChar: "",
    num: "",
    lowchar: "",
    upperchar: "",
    password: ""
  },
  computed: {
    isComplete() {
      return (
        this.range >= 8 &&
        this.range <= 128 &&
        this.spChar.length > 0 &&
        this.num.length > 0 &&
        this.lowchar.length > 0 &&
        this.upperchar.length > 0
      );
    }
  }
}); */
