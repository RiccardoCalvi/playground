class LaDimoraNearby extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
			<section class="nearby">
				<div class="nearby__grid">
					${this.getNearbyHtml()}
				</div>
			</section>
		`;
	}

    getNearbyHtml() {
        const items = [
          { name: "FCO", distance: "25km", icon: this.getPlaneIcon() },
          { name: "CIA", distance: "26km", icon: this.getPlaneIcon() },
          { name: "Supermercati", distance: "50m", icon: this.getShopIcon() },
          { name: "Stazione", distance: "200m", icon: this.getTrainIcon() },
          { name: "Bambino Gesù", distance: "1km", icon: this.getHospitalIcon() },
          { name: "Basilica San Pietro", distance: "500m", icon: this.getChurchIcon() }
        ];
      
        return items.map(item => `
          <article class="nearby__card">
            <div class="icon" aria-hidden="true">${item.icon}</div>
            <div class="info">
              <h4>${item.name}</h4>
              <p>${item.distance}</p>
            </div>
          </article>
        `).join('');
      }
      

	getPlaneIcon() {
		return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path class="fa-secondary" opacity=".4" fill="#ffffff" d="M165.2 16c0 1.5 .2 2.9 .6 4.4l49 171.6 150.9 0L265.2 16.1C259.5 6.2 248.9 0 237.4 0L181.2 0c-9.1 0-16 7.4-16 16zm0 480.1c0 8.5 6.9 16 16 16l56.2 0c11.5 0 22.1-6.2 27.8-16.1L365.7 320l-150.9 0-49 171.6c-.4 1.5-.6 3-.6 4.4z"/><path class="fa-primary" fill="#ffffff" d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l370.3 0z"/></svg> `;
	}

	getShopIcon() {
		return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path class="fa-secondary" opacity=".4" fill="#ffffff" d="M64 219.1c2.5 1 5.2 1.8 7.9 2.5s5.5 1.2 8.4 1.6c4 .5 8.1 .8 12.1 .8c12.8 0 24.8-2.7 35.6-7.5L128 384l320 0 0-167.5c5.4 2.4 11.1 4.3 17 5.5c3 .6 6 1.1 9 1.4s6.2 .5 9.4 .5c4.1 0 8.1-.3 12.1-.8c5.8-.8 11.3-2.2 16.5-4.1L512 384l0 64c0 35.3-28.7 64-64 64l-320 0c-35.3 0-64-28.7-64-64l0-64 0-164.9z"/><path class="fa-primary" fill="#ffffff" d="M490.3 13.1l57.3 90.7c29.7 46.9 3.4 112-52.1 119.4c-4 .5-7.9 .8-12.1 .8c-26.1 0-49.2-11.4-65.2-29c-15.9 17.6-39 29-65.2 29c-26.1 0-49.3-11.4-65.2-29c-15.9 17.6-39 29-65.2 29c-26.1 0-49.3-11.4-65.2-29c-15.9 17.6-39.1 29-65.2 29c-4.1 0-8.2-.3-12.1-.8c-55.3-7.4-81.5-72.6-51.9-119.4L85.7 13.1C90.8 5 99.9 0 109.6 0H466.4c9.7 0 18.8 5 23.9 13.1z"/></svg> `;
	}

	getTrainIcon() {
		return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path class="fa-secondary" opacity=".4" fill="#ffffff" d="M35.1 492.9C28.1 499.9 33.1 512 43 512l39.7 0c8.5 0 16.6-3.4 22.6-9.4L160 448c-21.3 0-42.7 0-64 0c-2.6 0-5.1-.1-7.5-.3s-4.9-.5-7.3-.9l-46 46zm29-368.2c-.1 .5-.1 1.1-.1 1.6c0 .5 0 1 0 1.4C64 160 64 192 64 224c0 .7 0 1.2 0 1.6c0 .5 .1 1.1 .1 1.6c.1 1.1 .3 2.1 .5 3.2c.4 2.1 1.1 4.1 1.9 6c1.6 3.8 4 7.3 6.9 10.2c5.8 5.8 13.8 9.4 22.6 9.4l80 0c17.6 0 31.9-14.2 32-32c0-32 0-64 0-96c0-17.7-14.3-32-32-32L96 96c-8.8 0-16.8 3.6-22.6 9.4c-2.9 2.9-5.2 6.3-6.9 10.2c-.8 1.9-1.4 3.9-1.9 6c-.2 1-.4 2.1-.5 3.2zm176 0c-.1 .5-.1 1.1-.1 1.6c0 .5 0 1 0 1.4c0 32.2 0 64.2 0 96.2c0 .7 0 1.2 0 1.6c0 .5 .1 1.1 .1 1.6c.1 1.1 .3 2.1 .5 3.2c.4 2.1 1.1 4.1 1.9 6c1.6 3.8 4 7.3 6.9 10.2c5.8 5.8 13.8 9.4 22.6 9.4l80 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-80 0c-8.8 0-16.8 3.6-22.6 9.4c-2.9 2.9-5.2 6.3-6.9 10.2c-.8 1.9-1.4 3.9-1.9 6c-.2 1-.4 2.1-.5 3.2zM288 448l54.6 54.6c6 6 14.1 9.4 22.6 9.4l39.7 0c10 0 15-12.1 7.9-19.1l-46-46c-4.8 .8-9.8 1.1-14.9 1.1c-21.3 0-42.7 0-64 0z"/><path class="fa-primary" fill="#ffffff" d="M0 96C0 43 43 0 96 0L352 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96L96 448c-53 0-96-43-96-96L0 96zm64 32l0 96c0 17.7 14.3 32 32 32l80 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32L96 96c-17.7 0-32 14.3-32 32zM272 96c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l80 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-80 0zM128 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm224 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>`;
	}

	getHospitalIcon() {
		return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path class="fa-secondary" opacity=".4" fill="#ffffff" d="M0 144l0 48 80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L0 224l0 64 80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L0 320 0 464c0 26.5 21.5 48 48 48l112 0 0-416L48 96C21.5 96 0 117.5 0 144zM480 96l0 416 112 0c26.5 0 48-21.5 48-48l0-144-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-48c0-26.5-21.5-48-48-48L480 96z"/><path class="fa-primary" fill="#ffffff" d="M208 0c-26.5 0-48 21.5-48 48l0 464 112 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 112 0 0-464c0-26.5-21.5-48-48-48L208 0zM640 224l0-32-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0zm0 96l0-32-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0zM80 224c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 192l0 32 80 0zm0 96c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 288l0 32 80 0zM312 64l16 0c8.8 0 16 7.2 16 16l0 24 24 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-24 0 0 24c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-24-24 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16l24 0 0-24c0-8.8 7.2-16 16-16z"/></svg> `;
	}

	getChurchIcon() {
		return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path class="fa-secondary" opacity=".4" fill="#ffffff" d="M0 372.4c0-17.5 9.5-33.6 24.9-42.1L160 256l0 256L48 512c-26.5 0-48-21.5-48-48l0-91.6zM480 256l135.1 74.3c15.3 8.4 24.9 24.6 24.9 42.1l0 91.6c0 26.5-21.5 48-48 48l-112 0 0-256z"/><path class="fa-primary" fill="#ffffff" d="M320 0c13.3 0 24 10.7 24 24l0 24 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 46.4L456.7 210c14.5 8.7 23.3 24.3 23.3 41.2L480 512l-96 0 0-96c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 96-96 0 0-260.8c0-16.9 8.8-32.5 23.3-41.2L296 142.4 296 96l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-24c0-13.3 10.7-24 24-24z"/></svg> `;
	}
	}

	customElements.define('ladimora-nearby', LaDimoraNearby);

