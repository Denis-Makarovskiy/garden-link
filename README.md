# Garden Recovery — link.gardenrecovery.me

Мультиязычная линк-страница (клон оригинала) + лендинги материалов с кнопкой «Скачать» + партнёрский раздел. Статический сайт, деплой — GitHub Pages.

## Структура

```
site/
  index.html              # линк-страница (точная копия + языки + Instagram + капсула «Партнёрам»)
  presentation.html       # лендинг: Презентация       → assets/pdf/<lang>/presentation.pdf
  programs.html           # лендинг: Программы          → assets/pdf/<lang>/programs.pdf
  services.html           # лендинг: Доп. услуги        → assets/pdf/<lang>/services.pdf
  partners.html           # мини-страница: воззвание + 3 кнопки
  partner-commercial.html # лендинг: Коммерческие партнёры → partner-commercial.pdf
  partner-medical.html    # лендинг: Медицинские специалисты → partner-medical.pdf
  partner-bigtech.html    # лендинг: Big Tech / корпорации   → partner-bigtech.pdf
  assets/
    js/i18n.js            # все строки интерфейса RU/EN/ME/DE/AL + логика переключения
    css/base.css          # стили лендингов и партнёрских кнопок (по брендбуку)
    logo.svg
    img/                  # cover-<doc>-<lang>.jpg (превью-обложки)
    pdf/{ru,en,me,de,sq}/ # документы по языкам
  brand/                  # брендбук «на запчасти»: BRAND.md, brand-tokens.css/.json
  docs/                   # печатные HTML-исходники переведённых PDF (для пересборки)
  CNAME                   # link.gardenrecovery.me
```

## Языки
RU / EN / **ME** (Montenegrin) / DE / **AL** (Albanian). Внутренние ключи: `ru, en, me, de, sq`.
Выбор: `?lang=xx` → localStorage → `ru`. Переключатель — в шапке каждой страницы.

## PDF-материалы
- `ru/*` — оригиналы из рабочей папки (основные материалы) + партнёрские оригиналы.
- `en|me|de|sq/{presentation,programs,services}.pdf` — черновые переводы (собираются из `docs/`).
- Партнёрские `en|me|de|sq/partner-*.pdf` — пока **плейсхолдеры (= RU)**, переводы — следующий шаг.

### Как пересобрать переведённый PDF
1. Отредактировать/перевести `docs/<doc>.<lang>.html` (общий стиль — `docs/print.css`).
2. Поднять локальный сервер и прогнать рендер:
```
node .claude/preview-server.js              # из корня репо (порт 8766)
echo "presentation en" | zsh .claude/render.sh   # пары "doc lang" в stdin
```

## Деплой (GitHub Pages)
Содержимое папки `site/` = корень сайта. Запушить в репозиторий, в настройках Pages указать ветку/папку, домен `link.gardenrecovery.me` (CNAME и .nojekyll уже в репо).

## Открытые вопросы
- **Instagram**: ссылки нет — стоит плейсхолдер `instagram.com/gardenrecovery` (атрибут `data-instagram-placeholder` в `index.html`). Заменить на реальный.
- **Переводы партнёрских PDF** (en/me/de/sq) — пока RU. Собрать драфты по той же схеме.
- **Терминология переводов** — драфты помечены «draft/Radni prevod/Entwurf/Përkthim pune», требуют выверки носителем (особ. медицинские термины).
