let Dog = function(color, hungry) {
  this.status = "normal",
  this.color = "black"
  if (hungry !== undefined) {
    this.hungry = hungry;
  } else {
    this.hungry = false;
  }
}

// var sadie = new Dog()
// var moonshine = new Dog()
export
default Dog;