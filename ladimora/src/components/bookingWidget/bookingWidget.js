class LaDimoraBooking extends HTMLElement {
  connectedCallback() {
    this.render();
    this._initBookingForm();
  }

  render() {
    this.innerHTML = `
      <div class="booking-form-container">
        <form id="booking-form" class="booking-form">
          <!-- Arrivo -->
          <div class="custom-date-container">
            <label class="custom-date-label" for="dateStart">Arrivo</label>
            <div class="custom-date-display">
              <span class="custom-date-day"></span>
              <span class="custom-date-month"></span>
              <span class="custom-date-weekday"></span>
            </div>
            <input type="date" id="dateStart" name="dateStart" required>
          </div>

          <!-- Partenza -->
          <div class="custom-date-container">
            <label class="custom-date-label" for="dateEnd">Partenza</label>
            <div class="custom-date-display">
              <span class="custom-date-day"></span>
              <span class="custom-date-month"></span>
              <span class="custom-date-weekday"></span>
            </div>
            <input type="date" id="dateEnd" name="dateEnd" required>
          </div>

          <!-- Adulti -->
          <div class="adult-container">
            <label for="adultNumber">Adulti</label>
            <input type="number" id="adultNumber" name="adultNumber" min="1" max="4" value="1" required>
          </div>

          <button type="submit">Controlla Disponibilità</button>
        </form>
      </div>
    `;
  }

  _initBookingForm() {
    const form       = this.querySelector('#booking-form');
    const inStart    = form.querySelector('#dateStart');
    const inEnd      = form.querySelector('#dateEnd');
    const inAdults   = form.querySelector('#adultNumber');
    const containers = form.querySelectorAll('.custom-date-container');

    const fmt     = d => d.toISOString().split('T')[0];
    const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };

    const today    = new Date();
    const tomorrow = addDays(today, 1);
    inStart.min = fmt(today);
    inStart.value = fmt(today);
    inEnd.min = fmt(tomorrow);
    inEnd.value = fmt(tomorrow);

    const refreshDisplay = (input, container) => {
      const v = input.value;
      const d = new Date(v);
      if (!v || isNaN(d)) return;
      container.querySelector('.custom-date-day')
        .textContent = String(d.getDate()).padStart(2, '0');
      container.querySelector('.custom-date-month')
        .textContent = d.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' });
      container.querySelector('.custom-date-weekday')
        .textContent = d.toLocaleDateString('it-IT', { weekday: 'long' });
    };

    refreshDisplay(inStart, containers[0]);
    refreshDisplay(inEnd,   containers[1]);

    inStart.addEventListener('input', () => {
      const newStart = new Date(inStart.value);
      const nextDay  = addDays(newStart, 1);
      const nextFmt  = fmt(nextDay);
      inEnd.min = nextFmt;
      if (inEnd.value < nextFmt) inEnd.value = nextFmt;
      refreshDisplay(inStart, containers[0]);
      refreshDisplay(inEnd,   containers[1]);
    });

    inEnd.addEventListener('input', () => {
      refreshDisplay(inEnd, containers[1]);
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      const sd = inStart.value;
      const ed = inEnd.value;
      const ad = inAdults.value;
      if (!sd || !ed || new Date(ed) <= new Date(sd)) {
        alert('Per favore, controlla le date.');
        return;
      }
      const url = `https://ladimora.bookpage.io/it/properties/138602?sd=${sd}&ed=${ed}&ad=${ad}`;
      window.open(url, '_blank');
    });
  }
}

customElements.define('ladimora-booking', LaDimoraBooking);
