// CMPM 121 Smelly Code Activity

// Constants
const IDS = {
  increment: "increment",
  decrement: "dec",
  reset: "reset",
  counter: "counter",
};

const TITLE = "CMPM 121 Project";
const COLORS = { even: "lightblue", odd: "pink" };

class CounterApp {
  private count: number = 0;
  private counterElement: HTMLElement | null = null;

  start() {
    this.createUI();
    this.cacheElements();
    this.addEventListeners();
    this.updateUI();
  }

  private createUI() {
    document.body.innerHTML = `
      <h1>${TITLE}</h1>
      <p>Counter: <span id="${IDS.counter}">0</span></p>
      <button id="${IDS.increment}">Increment</button>
      <button id="${IDS.decrement}">Decrement</button>
      <button id="${IDS.reset}">Reset</button>
    `;
  }

  private cacheElements() {
    this.counterElement = document.getElementById(IDS.counter);
  }

  private addEventListeners() {
    document.getElementById(IDS.increment)?.addEventListener(
      "click",
      () => this.increment(),
    );
    document.getElementById(IDS.decrement)?.addEventListener(
      "click",
      () => this.decrement(),
    );
    document.getElementById(IDS.reset)?.addEventListener(
      "click",
      () => this.reset(),
    );
  }

  private increment() {
    this.count++;
    this.updateUI();
  }

  private decrement() {
    this.count--;
    this.updateUI();
  }

  private reset() {
    this.count = 0;
    this.updateUI();
  }

  private updateUI() {
    if (this.counterElement) {
      this.counterElement.textContent = `${this.count}`;
    }
    document.title = `Clicked ${this.count}`;
    document.body.style.backgroundColor = this.count % 2 === 0
      ? COLORS.even
      : COLORS.odd;
  }
}

new CounterApp().start();
