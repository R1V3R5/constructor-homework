let Human = function() {
  this.cool = true
  this.pet = function(dog) {
    dog.status = 'happy';
  }
  this.feed = function(dog) {
    dog.hungry = false;
  }
}

// var mason = new Human();
// var julia = new Human();
export
default Human;