const questions = [
  {
    q: "2+2",
    a: 4,
    options: [5, 4, 3, 2],
  },
  {
    q: "2*2*0",
    a: 0,
    options: [22, 4, 0, 2],
  },
  {
    q: "3+3-3",
    a: 3,
    options: [9, 3, 33, 333],
  },
  {
    q: "4*4/2",
    a: 8,
    options: [8, 16, 4, 44],
  },
];



let pera = document.querySelector(".ques");
let x = 0;
let z = () => {

  z = setInterval(musku, 3000)

}
z();

let y = 0;
function musku() {
  pera.innerHTML = questions[y].q

  y = y + 1;

  if (y == 4) {
    clearInterval(x)
  }


}






