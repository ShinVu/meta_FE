// Task 1

var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (item of dairy) {
    console.log(item);
  }
}
// Task 2
const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  for (item of Object.keys(bird)) {
    console.log(`${item}: ${bird[item]}`);
  }
}
// Task 3
function animalCan() {
  for (item in bird) {
    console.log(`${item}: ${bird[item]}`);
  }
}
// logDairy();
// birdCan();
// animalCan();
