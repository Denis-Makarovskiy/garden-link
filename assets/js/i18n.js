/* Garden Recovery — мультиязык (RU / EN / ME / DE / SQ)
   Коды интерфейса: RU · EN · ME · DE · AL. Внутренние ключи: ru, en, me, de, sq.
   Язык: ?lang= → localStorage → 'ru'. Статика (GitHub Pages). */
(function () {
  var LANGS = ['ru', 'en', 'me', 'de', 'sq'];
  var HTMLLANG = { ru: 'ru', en: 'en', me: 'sr-ME', de: 'de', sq: 'sq' };

  var I18N = {
    // --- Навигация линк-страницы ---
    'nav.site':         { ru: 'Сайт', en: 'Website', me: 'Sajt', de: 'Website', sq: 'Faqja' },
    'nav.presentation': { ru: 'Презентация', en: 'Presentation', me: 'Prezentacija', de: 'Präsentation', sq: 'Prezantimi' },
    'nav.programs':     { ru: 'Программы', en: 'Programs', me: 'Programi', de: 'Programme', sq: 'Programet' },
    'nav.services':     { ru: 'Дополнительные услуги', en: 'Additional services', me: 'Dodatne usluge', de: 'Zusätzliche Leistungen', sq: 'Shërbime shtesë' },
    'contacts.title':   { ru: 'Контакты', en: 'Contacts', me: 'Kontakt', de: 'Kontakt', sq: 'Kontakt' },

    // --- Партнёрская мини-страница ---
    'partners.title':   { ru: 'Партнёрам', en: 'For partners', me: 'Za partnere', de: 'Für Partner', sq: 'Për partnerët' },
    'partners.intro':   {
      ru: 'Приглашаем партнёров к сотрудничеству. Ниже — материалы для ключевых аудиторий.',
      en: 'We invite partners to collaborate. Below are materials for our key audiences.',
      me: 'Pozivamo partnere na saradnju. U nastavku su materijali za ključne publike.',
      de: 'Wir laden Partner zur Zusammenarbeit ein. Nachfolgend Materialien für unsere wichtigsten Zielgruppen.',
      sq: 'Ftojmë partnerët për bashkëpunim. Më poshtë janë materiale për audiencat tona kryesore.'
    },
    'partners.commercial': { ru: 'Коммерческие партнёры', en: 'Commercial partners', me: 'Komercijalni partneri', de: 'Kommerzielle Partner', sq: 'Partnerë komercialë' },
    'partners.medical':    { ru: 'Медицинские специалисты', en: 'Medical specialists', me: 'Medicinski specijalisti', de: 'Medizinische Fachkräfte', sq: 'Specialistë mjekësorë' },
    'partners.bigtech':    { ru: 'Big Tech / корпорации', en: 'Big Tech / corporate', me: 'Big Tech / korporacije', de: 'Big Tech / Unternehmen', sq: 'Big Tech / korporata' },

    // --- Общие элементы лендингов ---
    'common.download':  { ru: 'Скачать PDF', en: 'Download PDF', me: 'Preuzmi PDF', de: 'PDF herunterladen', sq: 'Shkarko PDF' },
    'common.back':      { ru: 'На главную', en: 'Back to home', me: 'Na početnu', de: 'Zur Startseite', sq: 'Në faqen kryesore' },
    'common.preview':   { ru: 'Предпросмотр документа', en: 'Document preview', me: 'Pregled dokumenta', de: 'Dokumentvorschau', sq: 'Pamje paraprake e dokumentit' },
    'common.tagline':   { ru: 'Персонально. Системно. Конфиденциально.', en: 'Personally. Systemically. Confidentially.', me: 'Lično. Sistemski. Poverljivo.', de: 'Persönlich. Systematisch. Vertraulich.', sq: 'Personalisht. Sistematikisht. Konfidencialisht.' },

    // --- Лендинг: Презентация ---
    'pres.title':    { ru: 'Презентация', en: 'Presentation', me: 'Prezentacija', de: 'Präsentation', sq: 'Prezantimi' },
    'pres.subtitle': {
      ru: 'Частная медицинская резиденция на побережье Адриатического моря. О подходе, программах и пути восстановления.',
      en: 'Private medical residence on the Adriatic coast. About our approach, programs and the path of recovery.',
      me: 'Privatna medicinska rezidencija na obali Jadranskog mora. O pristupu, programima i putu oporavka.',
      de: 'Private medizinische Residenz an der Adriaküste. Über unseren Ansatz, die Programme und den Weg der Erholung.',
      sq: 'Rezidencë private mjekësore në bregdetin e Adriatikut. Mbi qasjen, programet dhe rrugën e rikuperimit.'
    },

    // --- Лендинг: Программы ---
    'prog.title':    { ru: 'Программы восстановления', en: 'Recovery programs', me: 'Programi oporavka', de: 'Erholungsprogramme', sq: 'Programet e rikuperimit' },
    'prog.subtitle': {
      ru: 'Четыре направления восстановления. Форматы 3 / 7 / 30 дней и индивидуальный план.',
      en: 'Four directions of recovery. Formats of 3 / 7 / 30 days and an individual plan.',
      me: 'Četiri pravca oporavka. Formati od 3 / 7 / 30 dana i individualni plan.',
      de: 'Vier Richtungen der Erholung. Formate von 3 / 7 / 30 Tagen und ein individueller Plan.',
      sq: 'Katër drejtime rikuperimi. Formate 3 / 7 / 30 ditë dhe plan individual.'
    },

    // --- Лендинг: Доп. услуги ---
    'serv.title':    { ru: 'Дополнительные услуги', en: 'Additional services', me: 'Dodatne usluge', de: 'Zusätzliche Leistungen', sq: 'Shërbime shtesë' },
    'serv.subtitle': {
      ru: 'Консультации специалистов, диагностика, массаж, физиотерапия и инфузионная терапия — по запросу.',
      en: 'Specialist consultations, diagnostics, massage, physiotherapy and infusion therapy — on request.',
      me: 'Konsultacije specijalista, dijagnostika, masaža, fizioterapija i infuziona terapija — na zahtev.',
      de: 'Facharztkonsultationen, Diagnostik, Massage, Physiotherapie und Infusionstherapie — auf Anfrage.',
      sq: 'Konsultime me specialistë, diagnostikë, masazh, fizioterapi dhe terapi me infuzion — sipas kërkesës.'
    },

    // --- Партнёрские лендинги (подзаголовки) ---
    'pc.subtitle': {
      ru: 'Когда клиенту нужен не сервис, а восстановление. Точка входа для премиум-аудитории.',
      en: 'When the client needs recovery, not just service. An entry point for a premium audience.',
      me: 'Kada klijentu treba oporavak, a ne samo usluga. Ulazna tačka za premium publiku.',
      de: 'Wenn der Kunde Erholung braucht, nicht nur Service. Ein Einstieg für ein Premium-Publikum.',
      sq: 'Kur klienti ka nevojë për rikuperim, jo vetëm shërbim. Pikë hyrjeje për një audiencë premium.'
    },
    'pm.subtitle': {
      ru: 'Когда пациенту нужно больше, чем приём. Резиденция, дополняющая работу врача.',
      en: 'When the patient needs more than an appointment. A residence that complements the doctor’s work.',
      me: 'Kada pacijentu treba više od pregleda. Rezidencija koja dopunjuje rad lekara.',
      de: 'Wenn der Patient mehr als einen Termin braucht. Eine Residenz, die die Arbeit des Arztes ergänzt.',
      sq: 'Kur pacienti ka nevojë për më shumë se një vizitë. Një rezidencë që plotëson punën e mjekut.'
    },
    'pb.subtitle': {
      ru: 'Высокая производительность требует системного восстановления. Для команд и руководителей.',
      en: 'High performance requires systemic recovery. For teams and leaders.',
      me: 'Visok učinak zahteva sistemski oporavak. Za timove i rukovodioce.',
      de: 'Hohe Leistung erfordert systematische Erholung. Für Teams und Führungskräfte.',
      sq: 'Performanca e lartë kërkon rikuperim sistematik. Për ekipe dhe drejtues.'
    }
  };

  function getLang() {
    var u = new URLSearchParams(location.search).get('lang');
    if (u && LANGS.indexOf(u) !== -1) return u;
    try { var s = localStorage.getItem('gr_lang'); if (s && LANGS.indexOf(s) !== -1) return s; } catch (e) {}
    return 'ru';
  }

  function t(lang, key) { var e = I18N[key]; if (!e) return ''; return e[lang] || e.ru || ''; }

  function apply(lang) {
    document.documentElement.lang = HTMLLANG[lang] || lang;
    try { localStorage.setItem('gr_lang', lang); } catch (e) {}

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(lang, el.getAttribute('data-i18n'));
      if (v) el.textContent = v;
    });

    var tk = document.body.getAttribute('data-title-key');
    if (tk) document.title = t(lang, tk) + ' — Garden Recovery';

    document.querySelectorAll('[data-langlink]').forEach(function (a) {
      var base = a.getAttribute('data-langlink');
      a.setAttribute('href', base + (base.indexOf('?') !== -1 ? '&' : '?') + 'lang=' + lang);
    });

    document.querySelectorAll('[data-pdf]').forEach(function (a) {
      var doc = a.getAttribute('data-pdf');
      a.setAttribute('href', 'assets/pdf/' + lang + '/' + doc + '.pdf');
      a.setAttribute('download', 'garden-recovery-' + doc + '-' + lang + '.pdf');
    });
    document.querySelectorAll('[data-pdfview]').forEach(function (a) {
      var doc = a.getAttribute('data-pdfview');
      a.setAttribute('href', 'assets/pdf/' + lang + '/' + doc + '.pdf');
    });
    document.querySelectorAll('[data-preview]').forEach(function (img) {
      var doc = img.getAttribute('data-preview');
      img.setAttribute('src', 'assets/img/cover-' + doc + '-' + lang + '.jpg');
    });

    document.querySelectorAll('[data-setlang]').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-setlang') === lang);
    });
  }

  function init() {
    apply(getLang());
    document.querySelectorAll('[data-setlang]').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.preventDefault();
        var l = b.getAttribute('data-setlang');
        apply(l);
        var url = new URL(location.href);
        url.searchParams.set('lang', l);
        history.replaceState(null, '', url);
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
