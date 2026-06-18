# Flavio Agresta - Personal 3D & CGI Animation Portfolio

Questo è il codice sorgente per il sito portfolio personale di **Flavio Agresta**, 3D Artist e diplomato in CGI Animation presso lo IED Roma. 
Il sito è progettato per essere estremamente elegante, moderno, responsivo e ottimizzato per la pubblicazione su **Netlify**.

---

## 📂 Struttura dei File

Il progetto è strutturato in modo statico e pulito per garantire caricamenti fulminei e modifiche facilissime:

- `index.html` - Struttura HTML5 semantica del sito con ottimizzazione SEO di base.
- `style.css` - Foglio di stile CSS con variabili per la palette colori, layout responsive e micro-animazioni.
- `main.js` - Logica JavaScript per il menu mobile, animazioni allo scorrimento, copia dell'email negli appunti e player showreel.
- `netlify.toml` - File di configurazione Netlify per header di sicurezza e ottimizzazione della cache.
- `assets/` - *(Da creare)* Cartella destinata a contenere immagini, loghi e screenshot dei progetti.

---

## 🚀 Come Avviare il Progetto in Locale

Trattandosi di un sito statico basato su puro HTML, CSS e JS, non hai bisogno di installare pacchetti o compilare codice. 

### Opzione 1 (Consigliata): Live Server su VS Code
Se usi **Visual Studio Code**:
1. Installa l'estensione **Live Server**.
2. Fai clic destro sul file `index.html` e seleziona **"Open with Live Server"**.
3. Il sito si aprirà automaticamente nel browser all'indirizzo `http://127.0.0.1:5500/` e si aggiornerà in tempo reale ad ogni modifica del codice.

### Opzione 2: Server Locale Rapido (Terminale)
Se hai **Python** installato, apri il terminale nella cartella del progetto e digita:
```bash
python -m http.server 8000
```
Quindi apri il browser all'indirizzo `http://localhost:8000`.

### Opzione 3: Apertura Diretta
Puoi semplicemente fare doppio clic sul file `index.html` per aprirlo nel browser, anche se alcune funzionalità avanzate (come il caricamento dinamico di iframe esterni in JS o le chiamate di sicurezza) funzionano meglio all'interno di un server locale.

---

## 🎨 Come Personalizzare i Tuoi Lavori

Tutti i testi e i placeholder sono facili da modificare direttamente in `index.html`.

### 1. Inserire le tue immagini dei progetti
1. Crea una cartella chiamata `assets` all'interno della directory del progetto, e al suo interno crea una sottocartella `images` (es. `assets/images/`).
2. Copia i tuoi render ed esportazioni in formato JPG o PNG all'interno di questa cartella.
3. Nel file `index.html`, trova le card dei progetti (ad esempio sotto `<section class="projects-section" id="progetti">`) e sostituisci il blocco dell'immagine placeholder:
   
   *Da così:*
   ```html
   <div class="image-placeholder bg-purple">
       <svg>...</svg>
       <span>Hikibou - Anteprima</span>
   </div>
   ```

   *A così (inserendo il tuo file di render reale):*
   ```html
   <img src="assets/images/hikibou-render.jpg" alt="Hikibou 3D Short Film" class="project-img">
   ```
   *Nota: Se usi tag `<img>`, assicurati che le immagini abbiano un rapporto di forma uniforme (es. 16:10 o 16:9).*

### 2. Configurare lo Showreel Video reale
Nel file `main.js`, trova la sezione **`6. INTERACTION PLACEHOLDER SHOWREEL`** e sostituisci l'URL di YouTube dimostrativo (`https://www.youtube.com/embed/5F_UXyV4uY4?autoplay=1`) con l'URL del tuo video su YouTube o Vimeo (es. `https://www.youtube.com/embed/IL_TUO_VIDEO_ID?autoplay=1`).

---

## 🌐 Pubblicazione su Netlify

Il sito è già configurato e pronto per Netlify. Puoi pubblicarlo in due modi:

### Metodo 1: Caricamento Manuale (Drag & Drop)
1. Fai il login su [Netlify](https://www.netlify.com/).
2. Vai su **"Sites"** e scorri in basso fino all'area di caricamento manuale (*"Want to deploy a new site without connecting to Git? Drag and drop your site folder here"*).
3. Trascina l'intera cartella di questo progetto nell'area indicata. Il sito sarà online in pochi secondi!

### Metodo 2: Collegamento GitHub (Consigliato per aggiornamenti automatici)
1. Carica il codice del portfolio su un tuo repository privato o pubblico su **GitHub**.
2. Su Netlify, seleziona **"Add new site"** -> **"Import an existing project"**.
3. Collega il tuo account GitHub e seleziona il repository del portfolio.
4. Lascia vuoti i campi "Build command" e impostazioni di build (poiché il sito è statico puro).
5. Clicca su **"Deploy"**. Ogni volta che farai un `git push` su GitHub, Netlify aggiornerà automaticamente il sito online!
