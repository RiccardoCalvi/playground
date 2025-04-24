class LaDimoraRules extends HTMLElement {

	connectedCallback() {
	this.render()
	}

	render() {



		const html = `
		
		<div class="accordion">
    
        <div class="accordion-item">
          <div class="accordion-header">🕒 Check-in e Accoglienza</div>
          <div class="accordion-content">
            <p>La nostra Guest House non dispone di reception attiva 24 ore su 24. Il check-in è garantito dalle ore 14:00 alle ore 18:00.</p>
            <p>Per arrivi al di fuori di questa fascia oraria, è necessario concordare preventivamente l’orario entro le 24 ore precedenti all’arrivo. I check-in dopo le 18:00 possono comportare un supplemento di 15€.</p>
            <p>In assenza di comunicazione anticipata sull’orario di arrivo, potremmo non essere in grado di garantire l'accoglienza, senza che ciò dia diritto a rimborsi.</p>
            <p>Al momento del check-in è richiesto un documento d’identità valido per ciascun ospite.</p>
            <p>A garanzia della prenotazione, sarà inoltre richiesta una carta di credito appartenente ai circuiti Visa, Mastercard o Diners. Tale carta potrà essere utilizzata per il pagamento di eventuali danni arrecati alla struttura o agli arredi, qualora necessario.</p>
          </div>
        </div>
    
        <div class="accordion-item">
          <div class="accordion-header">❌ Politica di Cancellazione</div>
          <div class="accordion-content">
            <p>Il rimborso dell’acconto è previsto solo per cancellazioni comunicate con almeno 7 giorni di preavviso rispetto alla data di arrivo.</p>
            <p>Nel raro caso in cui la nostra struttura fosse costretta a cancellare la prenotazione, il cliente verrà avvisato tempestivamente e riceverà il rimborso integrale dell’acconto versato.</p>
          </div>
        </div>
    
        <div class="accordion-item">
          <div class="accordion-header">💳 Pagamento del Soggiorno</div>
          <div class="accordion-content">
            <p>Il saldo del soggiorno dovrà essere effettuato al momento del check-in.</p>
            <p>Il pagamento può essere effettuato tramite carta di credito (anche diversa da quella utilizzata come garanzia), PayPal, bonifico bancario, oppure in contanti per importi inferiori a 950€.</p>
            <p>Il periodo prenotato deve essere saldato per intero, anche in caso di ritardato arrivo o partenza anticipata.</p>
          </div>
        </div>
    
        <div class="accordion-item">
          <div class="accordion-header">🔇 Rispetto della quiete condominiale</div>
          <div class="accordion-content">
            <p>Invitiamo i nostri ospiti a mantenere un comportamento rispettoso nei confronti degli altri condomini, evitando rumori molesti in particolare durante le fasce orarie di riposo: dalle 14:00 alle 16:00 e dalle 22:30 alle 8:30.</p>
            <p>La serenità di tutti è una priorità: grazie per la collaborazione!</p>
          </div>
        </div>
    
        <div class="accordion-item">
          <div class="accordion-header">🧺 Biancheria e Kit di Cortesia</div>
          <div class="accordion-content">
            <p>Tutte le camere sono fornite di biancheria da letto, asciugamani e un kit di cortesia con shampoo-doccia, sapone e cuffiette.</p>
            <p>La nostra biancheria viene igienizzata accuratamente a ogni lavaggio, per garantirvi la massima pulizia e comfort. Vi chiediamo gentilmente di non lasciare asciugamani bagnati sul letto o sui mobili, per preservare la qualità degli arredi e degli ambienti.</p>
          </div>
        </div>
    
        <div class="accordion-item">
          <div class="accordion-header">🚭 Divieto di Fumo</div>
          <div class="accordion-content">
            <p>È severamente vietato fumare all’interno dell’appartamento, comprese le camere da letto e i bagni.</p>
            <p>Il fumo è consentito esclusivamente negli spazi esterni, nel rispetto degli altri ospiti e degli ambienti della struttura.</p>
          </div>
        </div>
    
        <div class="accordion-item">
          <div class="accordion-header">⏰ Orario di Check-out</div>
          <div class="accordion-content">
            <p>L’appartamento deve essere liberato entro le ore 11:00 del mattino, comprensivo di tutti gli effetti personali.</p>
            <p>Orari diversi possono essere concordati in anticipo, in base alla disponibilità. In caso di check-out oltre l’orario previsto, potrà essere applicata una penale di 25€ per ogni ora successiva alle 11:00.</p>
          </div>
        </div>
    
        <div class="accordion-item">
          <div class="accordion-header">🔑 Consegna e Restituzione delle Chiavi</div>
          <div class="accordion-content">
            <p>Al momento del check-in verrà consegnata una chiave personale per l’accesso alla struttura e all’appartamento, che dovrà essere restituita al check-out.</p>
            <p>In caso di smarrimento, sarà applicata una penale di 50,00 € per ciascuna chiave da sostituire.</p>
          </div>
        </div>
    
        <div class="accordion-item">
          <div class="accordion-header">🚫 Accesso alla Struttura</div>
          <div class="accordion-content">
            <p>L’accesso alla Residenza è riservato esclusivamente agli ospiti regolarmente registrati. Non è consentito l’ingresso a persone estranee alla prenotazione, salvo preventiva autorizzazione da parte della struttura.</p>
          </div>
        </div>
    
        <div class="accordion-item">
          <div class="accordion-header">🐾 Animali Ammessi</div>
          <div class="accordion-content">
            <p>I vostri amici a quattro zampe di piccola e media taglia sono i benvenuti nella nostra struttura! Vi chiediamo gentilmente di comunicarne la presenza al momento della prenotazione, così da poterli accogliere al meglio.</p>
            <p>È previsto un supplemento di 25€ per le operazioni di sanificazione finale dell’appartamento.</p>
          </div>
        </div>
    
      </div>
    
      <script>
        document.querySelectorAll('.accordion-header').forEach(header => {
          header.addEventListener('click', () => {
            const active = header.classList.contains('active');
            // chiude tutti
            document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));
            document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
            // apre solo quello cliccato se non era già aperto
            if (!active) {
              header.classList.add('active');
              const content = header.nextElementSibling;
              content.style.maxHeight = content.scrollHeight + 'px';
            }
          });
        });
      </script>
    
		`

		this.innerHTML = `${html}`;
	}


}

customElements.define('ladimora-rules', LaDimoraRules);
