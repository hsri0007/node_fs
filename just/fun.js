class Players {
  constructor(name, player) {
    (this.name = name), (this.player = player);
  }

  introduce() {
    console.log(this.name, this.player);
  }
}

class App extends Players {
  constructor(name, player, age) {
    super(name, player, age);
    this.age = age;
  }
  mySelf() {
    console.log(this.name, this.age, this.player);
  }
}

const some = new App("hari", "hero", "24");
