class LaDimoraCards extends HTMLElement {
	connectedCallback() {
		const attr = this.getAttribute('data');
		if (!attr) return;

		try {
			this.data = JSON.parse(attr);
		} catch (e) {
			console.error('JSON non valido in <ladimora-cards>', e);
		}
	}

	set data(value) {
		this._data = value;
		this.render();
	}

	get data() {
		return this._data;
	}


	render() {
		if (!this._data) return;

		const html = this._data.map(mezzo => `
			<div class="card">
				<div class="card__header">
					<div class="card__title">
						${this.getIcon(mezzo.type)}
						<p>${mezzo.type}</p>
					</div>
					<div class="card__price">${mezzo.price}</div>
				</div>
				<div class="card__text">${mezzo.text}</div>
				<a href="${mezzo.link}" target="_blank" class="card__button">PRENOTA</a>
			</div>
		`).join('');

		this.innerHTML = `<div class="localizzazioneCard">${html}</div>`;
	}
	
	getIcon(type) {
		switch(type) {
			case "Bus":
			return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path class="fa-secondary" opacity=".4" fill="#f8941d" d="M96 448l0 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-32-96 0zm32.2-291.3c-.1 .5-.1 1.1-.1 1.6s0 1.1 0 1.6c0 32 0 64 0 96c0 .6 0 1.1 0 1.7s.1 1.1 .1 1.6c.1 1.1 .3 2.1 .5 3.2c.4 2.1 1.1 4.1 1.9 6c1.6 3.8 4 7.3 6.9 10.2c5.8 5.8 13.8 9.4 22.6 9.4l112 0 0-160-112 0c-8.8 0-16.8 3.6-22.6 9.4c-2.9 2.9-5.2 6.3-6.9 10.2c-.8 1.9-1.4 3.9-1.9 6c-.2 1-.4 2.1-.5 3.2zM304 128l0 160 112 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-112 0zm80 320l0 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-32-96 0z"/><path class="fa-primary" fill="#f8941d" d="M288 0C422.4 0 512 35.2 512 80l0 16 0 32c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32c0 0 0 0 0 0l0-32s0 0 0 0l0-16C64 35.2 153.6 0 288 0zM128 160l0 96c0 17.7 14.3 32 32 32l112 0 0-160-112 0c-17.7 0-32 14.3-32 32zM304 288l112 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-112 0 0 160zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16L208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z"/></svg>`
			case "Treno":
				return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path class="fa-secondary" opacity=".4" fill="#f8941d" d="M35.1 492.9C28.1 499.9 33.1 512 43 512l39.7 0c8.5 0 16.6-3.4 22.6-9.4L160 448c-21.3 0-42.7 0-64 0c-2.6 0-5.1-.1-7.5-.3s-4.9-.5-7.3-.9l-46 46zm29-368.2c-.1 .5-.1 1.1-.1 1.6c0 .5 0 1 0 1.4C64 160 64 192 64 224c0 .7 0 1.2 0 1.6c0 .5 .1 1.1 .1 1.6c.1 1.1 .3 2.1 .5 3.2c.4 2.1 1.1 4.1 1.9 6c1.6 3.8 4 7.3 6.9 10.2c5.8 5.8 13.8 9.4 22.6 9.4l80 0c17.6 0 31.9-14.2 32-32c0-32 0-64 0-96c0-17.7-14.3-32-32-32L96 96c-8.8 0-16.8 3.6-22.6 9.4c-2.9 2.9-5.2 6.3-6.9 10.2c-.8 1.9-1.4 3.9-1.9 6c-.2 1-.4 2.1-.5 3.2zm176 0c-.1 .5-.1 1.1-.1 1.6c0 .5 0 1 0 1.4c0 32.2 0 64.2 0 96.2c0 .7 0 1.2 0 1.6c0 .5 .1 1.1 .1 1.6c.1 1.1 .3 2.1 .5 3.2c.4 2.1 1.1 4.1 1.9 6c1.6 3.8 4 7.3 6.9 10.2c5.8 5.8 13.8 9.4 22.6 9.4l80 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-80 0c-8.8 0-16.8 3.6-22.6 9.4c-2.9 2.9-5.2 6.3-6.9 10.2c-.8 1.9-1.4 3.9-1.9 6c-.2 1-.4 2.1-.5 3.2zM288 448l54.6 54.6c6 6 14.1 9.4 22.6 9.4l39.7 0c10 0 15-12.1 7.9-19.1l-46-46c-4.8 .8-9.8 1.1-14.9 1.1c-21.3 0-42.7 0-64 0z"/><path class="fa-primary" fill="#f8941d" d="M0 96C0 43 43 0 96 0L352 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96L96 448c-53 0-96-43-96-96L0 96zm64 32l0 96c0 17.7 14.3 32 32 32l80 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32L96 96c-17.7 0-32 14.3-32 32zM272 96c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l80 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-80 0zM128 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm224 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>`
			case "Taxi":
				return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path class="fa-secondary" opacity=".4" fill="#f8941d" d="M0 432l0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48L0 432zM109.1 224l293.8 0-26.1-74.6c-4.5-12.8-16.6-21.4-30.2-21.4l-181.2 0c-13.6 0-25.7 8.6-30.2 21.4c-8.7 24.9-17.4 49.7-26.1 74.6zM160 32l0 32 5.4 0 181.2 0c1.8 0 3.6 .1 5.4 0l0-32c0-17.7-14.3-32-32-32L192 0c-17.7 0-32 14.3-32 32zM416 432l0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48-96 0z"/><path class="fa-primary" fill="#f8941d" d="M135.2 149.4L109.1 224l293.8 0-26.1-74.6c-4.5-12.8-16.6-21.4-30.2-21.4l-181.2 0c-13.6 0-25.7 8.6-30.2 21.4zM39.6 228.8L74.8 128.3C88.3 89.8 124.6 64 165.4 64l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144L0 432 0 288c0-26.7 16.4-49.6 39.6-59.2zM128 320a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>`
			default:
				return '';
		}
	}
}

customElements.define('ladimora-cards', LaDimoraCards);
