class LaDimoraRules extends HTMLElement {

  connectedCallback() {
    this.render();
    this.initAccordion();
  }

  render() {
    this.innerHTML = `
      <div class="accordion">
        ${this.getRulesHtml()}
      </div>
    `;
  }

  initAccordion() {
    this.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => this.toggleAccordion(header));
    });
  }

  toggleAccordion(header) {
    const isActive = header.classList.contains('active');
    this.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));
    this.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);

    if (!isActive) {
      header.classList.add('active');
      const content = header.nextElementSibling;
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  }

  getRulesHtml() {
    const rules = [
      {
        icon: "🕒",
        title: "Check-in e Accoglienza",
        content: [
          "La nostra Guest House non dispone di reception attiva 24 ore su 24. Il check-in è garantito dalle ore 14:00 alle ore 18:00.",
          "Per arrivi al di fuori di questa fascia oraria, è necessario concordare preventivamente l’orario entro le 24 ore precedenti all’arrivo. I check-in dopo le 18:00 possono comportare un supplemento di 15€.",
          "In assenza di comunicazione anticipata sull’orario di arrivo, potremmo non essere in grado di garantire l'accoglienza, senza che ciò dia diritto a rimborsi.",
          "Al momento del check-in è richiesto un documento d’identità valido per ciascun ospite.",
          "A garanzia della prenotazione, sarà inoltre richiesta una carta di credito appartenente ai circuiti Visa, Mastercard o Diners. Tale carta potrà essere utilizzata per il pagamento di eventuali danni arrecati alla struttura o agli arredi, qualora necessario."
        ]
      },
      {
        icon: "❌",
        title: "Politica di Cancellazione",
        content: [
          "Il rimborso dell’acconto è previsto solo per cancellazioni comunicate con almeno 7 giorni di preavviso rispetto alla data di arrivo.",
          "Nel raro caso in cui la nostra struttura fosse costretta a cancellare la prenotazione, il cliente verrà avvisato tempestivamente e riceverà il rimborso integrale dell’acconto versato."
        ]
      },
      {
        icon: "💳",
        title: "Pagamento del Soggiorno",
        content: [
          "Il saldo del soggiorno dovrà essere effettuato al momento del check-in.",
          "Il pagamento può essere effettuato tramite carta di credito (anche diversa da quella utilizzata come garanzia), PayPal, bonifico bancario, oppure in contanti per importi inferiori a 950€.",
          "Il periodo prenotato deve essere saldato per intero, anche in caso di ritardato arrivo o partenza anticipata."
        ]
      },
      {
        icon: "🔇",
        title: "Rispetto della quiete condominiale",
        content: [
          "Invitiamo i nostri ospiti a mantenere un comportamento rispettoso nei confronti degli altri condomini, evitando rumori molesti in particolare durante le fasce orarie di riposo: dalle 14:00 alle 16:00 e dalle 22:30 alle 8:30.",
          "La serenità di tutti è una priorità: grazie per la collaborazione!"
        ]
      },
      {
        icon: "🧺",
        title: "Biancheria e Kit di Cortesia",
        content: [
          "Tutte le camere sono fornite di biancheria da letto, asciugamani e un kit di cortesia con shampoo-doccia, sapone e cuffiette.",
          "La nostra biancheria viene igienizzata accuratamente a ogni lavaggio, per garantirvi la massima pulizia e comfort. Vi chiediamo gentilmente di non lasciare asciugamani bagnati sul letto o sui mobili, per preservare la qualità degli arredi e degli ambienti."
        ]
      },
      {
        icon: "🚭",
        title: "Divieto di Fumo",
        content: [
          "È severamente vietato fumare all’interno dell’appartamento, comprese le camere da letto e i bagni.",
          "Il fumo è consentito esclusivamente negli spazi esterni, nel rispetto degli altri ospiti e degli ambienti della struttura."
        ]
      },
      {
        icon: "⏰",
        title: "Orario di Check-out",
        content: [
          "L’appartamento deve essere liberato entro le ore 11:00 del mattino, comprensivo di tutti gli effetti personali.",
          "Orari diversi possono essere concordati in anticipo, in base alla disponibilità. In caso di check-out oltre l’orario previsto, potrà essere applicata una penale di 25€ per ogni ora successiva alle 11:00."
        ]
      },
      {
        icon: "🔑",
        title: "Consegna e Restituzione delle Chiavi",
        content: [
          "Al momento del check-in verrà consegnata una chiave personale per l’accesso alla struttura e all’appartamento, che dovrà essere restituita al check-out.",
          "In caso di smarrimento, sarà applicata una penale di 50,00 € per ciascuna chiave da sostituire."
        ]
      },
      {
        icon: "🚫",
        title: "Accesso alla Struttura",
        content: [
          "L’accesso alla Residenza è riservato esclusivamente agli ospiti regolarmente registrati. Non è consentito l’ingresso a persone estranee alla prenotazione, salvo preventiva autorizzazione da parte della struttura."
        ]
      },
      {
        icon: "🐾",
        title: "Animali Ammessi",
        content: [
          "I vostri amici a quattro zampe di piccola e media taglia sono i benvenuti nella nostra struttura! Vi chiediamo gentilmente di comunicarne la presenza al momento della prenotazione, così da poterli accogliere al meglio.",
          "È previsto un supplemento di 25€ per le operazioni di sanificazione finale dell’appartamento."
        ]
      }
    ];

    return rules.map(rule => `
      <section class="accordion-item">
        <div class="accordion-header">${rule.icon} ${rule.title}</div>
        <div class="accordion-content">
          ${rule.content.map(p => `<p>${p}</p>`).join("")}
        </div>
      </section>
    `).join("");
  }
}

customElements.define('ladimora-rules', LaDimoraRules);
