/* ====== Part 2: JavaScript Functions ====== */

// Global variable
let globalCounter = 0;

// Function with parameters + return value
function multiplyNumbers(a, b) {
  return a * b;
}

// Function demonstrating local vs global scope
function incrementCounter() {
  let localCounter = globalCounter + 1;
  globalCounter = localCounter; // update global
  return localCounter;
}

// Function to toggle animation
function toggleBoxAnimation() {
  const box = document.getElementById("animateBox");
  box.classList.toggle("animate");
}

/* ====== Part 3: Combining CSS + JS ====== */
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  modal.classList.add("show");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => modal.style.display = "none", 400); // matches CSS transition
});

/* Event binding for animation */
document.getElementById("animateBtn").addEventListener("click", () => {
  toggleBoxAnimation();
  console.log("Counter:", incrementCounter());
  console.log("Multiply test:", multiplyNumbers(3, 4));
});
