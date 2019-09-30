// Grille de déplacement avec Y inversé

let grille = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

// Objet tondeuse
const tondeuse = {
  // orientation préféfinis comme dans le cas du premier robot
  orientation: "sud",

  position: null
};
// Instruction prédéfinis comme dans le cas
const parcour = "GADDAAGADAA";

let y = 3;
let x = 3;
// Placement du robot au départ
function start() {
  grille[y][x] = 1;
  //   Grille dans le bon sens avec le reverse
  grille.reverse();
  console.log(grille);
}
// Les 4 orientations possible
const orientation = ["sud", "est", "nord", "ouest"];
// Transformation des instructions en tableau puis on parcours chaque lettre
parcour.split("").forEach((element, index) => {
  console.log(grille, tondeuse.orientation);
  //   Récupère l'orientation du robot
  let indexO = orientation.indexOf(tondeuse.orientation);
  console.log(indexO);
  if (element === "G") {
    //   Cas ou l'orientation est en ouest et que l'on tourne a droite vers le sud
    if (indexO === 3) {
      tondeuse.orientation = orientation[0];
      return;
    }
    // Cas classique si on va a gauche
    tondeuse.orientation = orientation[indexO + 1];
  } else if (element === "D") {
    if (indexO === 0) {
      tondeuse.orientation = orientation[3];
      return;
    }
    tondeuse.orientation = orientation[indexO - 1];
  } else {
    avance(tondeuse.orientation);
  }
});
// Déplacement des x et y en fonction de leurs positions précédentes
function avance(orientation) {
  console.log("ceci est le", orientation);
  if (orientation === "ouest" && x > 0) {
    grille[y][x] = 0;
    x -= 1;
    grille[y][x] = 1;
    console.log(grille);
  } else if (orientation === "est" && x < 4) {
    grille[y][x] = 0;
    x += 1;
    grille[y][x] = 1;
    console.log(grille);
  } else if (orientation === "nord" && y < 4) {
    grille[y][x] = 0;
    y += 1;
    grille[y][x] = 1;
    console.log(grille);
  } else if (orientation === "sud" && y > 0) {
    grille[y][x] = 0;
    y -= 1;
    grille[y][x] = 1;
    console.log(grille);
  }
}

start();