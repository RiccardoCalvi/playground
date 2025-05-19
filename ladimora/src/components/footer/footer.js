class LaDimoraHeader extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {

		const origin = document.location.origin
		const html =`
			<header>

				<div id="logo">
					<a href="${origin}">
						<ladimora-logo reversed="false"></ladimora-logo>
					</a>
				</div>
				<div id="menu">

					<ul>
						<li><a href="${origin}/regolamento">Regolamento</a></li>
						<li><a href="${origin}/servizi">Servizi</a></li>
						<li><a href="${origin}/come-raggiungerci">Come Raggiungerci</a></li>
						<li><a href="${origin}/scopri-roma">Scopri Roma</a></li>
					</ul>

					<div>
						<a id="menu__button" href="https://book.ladimoragh.it">
							Prenota
						</a>
					</div>

				</div>

				</header>
		`

		this.innerHTML = `${html}`;
	}

}

	customElements.define('ladimora-footer', LaDimoraHeader);
