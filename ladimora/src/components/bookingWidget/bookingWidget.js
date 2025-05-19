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
							<div class="adult-picker">
								<button type="button" onclick="document.getElementById('adultNumber').stepDown()" aria-label="Riduci"> &minus;</button>
								<input id="adultNumber" type="number" value="1" min="1" max="4" required aria-live="polite">
								<button type="button" onclick="document.getElementById('adultNumber').stepUp()" aria-label="Aumenta"> &#43;</button>
							</div>
						</div>

						<button type="submit">Controlla Disponibilità</button>
						</form>
	</div>
	`;
	}

	_initBookingForm() {
		const form = this.querySelector('#booking-form');
		const inStart = form.querySelector('#dateStart');
		const inEnd = form.querySelector('#dateEnd');
		const inAdults = form.querySelector('#adultNumber');
		const containers = form.querySelectorAll('.custom-date-container');

		// parse date string as local date
		const parseLocalDate = v => {
			const [y, m, d] = v.split('-').map(Number);
			return new Date(y, m - 1, d);
		};

		// format Date object to YYYY-MM-DD
		const fmt = d => {
			const year = d.getFullYear();
			const month = String(d.getMonth() + 1).padStart(2, '0');
			const day = String(d.getDate()).padStart(2, '0');
			return `${year}-${month}-${day}`;
		};

		// add days preserving local date
		const addDays = (d, n) => {
			const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
			x.setDate(x.getDate() + n);
			return x;
		};

		// initialize today and tomorrow
		const today = new Date();
		const tomorrow = addDays(today, 1);
		inStart.min = fmt(today);
		inStart.value = fmt(today);
		inEnd.min = fmt(tomorrow);
		inEnd.value = fmt(tomorrow);

		// refresh displayed date info
		const refreshDisplay = (input, container) => {
			const v = input.value;
			if (!v) return;
			const d = parseLocalDate(v);
			container.querySelector('.custom-date-day')
				.textContent = String(d.getDate()).padStart(2, '0');
			container.querySelector('.custom-date-month')
				.textContent = d.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' });
			container.querySelector('.custom-date-weekday')
				.textContent = d.toLocaleDateString('it-IT', { weekday: 'long' });
		};

		// initial display
		refreshDisplay(inStart, containers[0]);
		refreshDisplay(inEnd, containers[1]);

		// when arrival changes
		inStart.addEventListener('input', () => {
			const startDate = parseLocalDate(inStart.value);
			const nextDay = addDays(startDate, 1);
			const nextFmt = fmt(nextDay);
			inEnd.min = nextFmt;
			if (inEnd.value < nextFmt) inEnd.value = nextFmt;
			refreshDisplay(inStart, containers[0]);
			refreshDisplay(inEnd, containers[1]);
		});

		// when departure changes
		inEnd.addEventListener('input', () => {
			refreshDisplay(inEnd, containers[1]);
		});

		// submit
		form.addEventListener('submit', e => {
			e.preventDefault();
			const sd = inStart.value;
			const ed = inEnd.value;
			const ad = inAdults.value;
			if (!sd || !ed || parseLocalDate(ed) <= parseLocalDate(sd)) {
				alert('Per favore, controlla le date.');
				return;
			}
			const url = `https://ladimora.bookpage.io/it/properties/138602?sd=${sd}&ed=${ed}&ad=${ad}`;
			window.open(url, '_blank');
		});
	}
}

customElements.define('ladimora-booking', LaDimoraBooking);
