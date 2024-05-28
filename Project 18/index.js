// Function to animate counting up
function animateCounter(counterEl, increment, duration, dataCeil) {
  let currentNum = 0;
  const interval = duration / Math.ceil(dataCeil / increment);

  const updateCounter = () => {
    currentNum += increment;
    if (currentNum >= dataCeil) {
      counterEl.innerText = dataCeil;
    } else {
      counterEl.innerText = Math.ceil(currentNum);
      setTimeout(updateCounter, interval);
    }
  };

  updateCounter();
}

// Function to initialize counters
function initCounters() {
  const countersEl = document.querySelectorAll(".counter");

  countersEl.forEach((counterEl) => {
    const dataCeil = parseInt(counterEl.getAttribute("data-ceil"));
    const increment = dataCeil / 15;
    counterEl.innerText = "0";
    animateCounter(counterEl, increment, 1000, dataCeil);
  });
}

// Initialize counters
initCounters();
