document.addEventListener('DOMContentLoaded', function () {


  const customTranslateButton = document.getElementById('custom-translate-button');
  const translationPopup = document.getElementById('translation-popup');

  if (customTranslateButton && translationPopup) {
    const closePopupButton = document.getElementById('close-popup-button');
    const languageList = document.getElementById('language-list');
    const searchInput = document.getElementById('language-search-input');

    const languages = {
      'Acèh': 'ace',
      'Acholi': 'ach',
      'Afaraf': 'aa',
      'Afrikaans': 'af',
      'Alur': 'alz',
      'Aymar aru': 'ay',
      'Azərbaycanca': 'az',
      'Deutsch': 'de',
      'isiNdebele': 'nr',
      'Shqip': 'sq',
      'Авар мацӀ': 'av',
      'Аԥсшәа': 'ab',
      'العربية': 'ar',
      'अवधी': 'awa',
      'অসমীয়া': 'as',
      'አማርኛ': 'am',
      'Հայերեն': 'hy',
      'Bamanankan': 'bm',
      'Basa Bali': 'ban',
      'Bashkort': 'ba',
      'Batak Karo': 'btx',
      'Batak Simalungun': 'bts',
      'Batak Toba': 'bbc',
      'Baoulé': 'bci',
      'Bemba': 'bem',
      'Betawi': 'bew',
      'Bikol Central': 'bcl',
      'Bosanski': 'bs',
      'Brezhoneg': 'br',
      'Euskara': 'eu',
      'Беларуская': 'be',
      'Български': 'bg',
      'буряад хэлэн': 'bua',
      'بلوچی': 'bal',
      'भोजपुरी': 'bho',
      'বাংলা': 'bn',
      'မြန်မာဘာသာ': 'my',
      'Català': 'ca',
      'Cebuano': 'ceb',
      'Chamoru': 'ch',
      'Chi-Chewa': 'ny',
      'Corsu': 'co',
      'Hrvatski': 'hr',
      'Komi': 'kv',
      'Kreyòl ayisyen': 'ht',
      'Kreol morisien': 'mfe',
      'Kreol Seselwa': 'crs',
      'Kurdî (Kurmanji)': 'kmr',
      'Shona': 'sn',
      'Trukese': 'chk',
      'Нохчийн': 'ce',
      'Чӑвашла': 'cv',
      'Қазақ тілі': 'kk',
      'कोंकणी': 'kok',
      'کوردی': 'ckb',
      'සිංහල': 'si',
      'ಕನ್ನಡ': 'kn',
      '한국어': 'ko',
      '中文 (简体)': 'zh-CN',
      '中文 (繁體)': 'zh-TW',
      '粵語': 'yue',
      'Dansk': 'da',
      'Dinka': 'din',
      'Dioula': 'dyu',
      'Dombe': 'dov',
      'دری': 'prs',
      'ދިވެހިބަސް': 'dv',
      'डोगरी': 'doi',
      'Ձόνખા': 'dz',
      'Eesti': 'et',
      'Español': 'es',
      'Esperanto': 'eo',
      'Slovenčina': 'sk',
      'Slovenščina': 'sl',
      'Filipino': 'fil',
      'Fon': 'fon',
      'Føroyskt': 'fo',
      'Français': 'fr',
      'Français (Canada)': 'fr-CA',
      'Frysk': 'fy',
      'Fulfulde': 'ff',
      'Furlan': 'fur',
      'Na Vosa Vakaviti': 'fj',
      'Suomi': 'fi',
      'Cymraeg': 'cy',
      'Galego': 'gl',
      'Gàidhlig': 'gd',
      'Gã': 'gaa',
      'Guaraní': 'gn',
      'Kalaallisut': 'kl',
      'Ελληνικά': 'el',
      'ქართული': 'ka',
      'ગુજરાતી': 'gu',
      'Hakha Chin': 'cnh',
      'Hausa': 'ha',
      'Hawaiʻi': 'haw',
      'Hiligaynon': 'hil',
      'Hmong': 'hmn',
      'Hunsrik': 'hrx',
      'Magyar': 'hu',
      'Nederlands': 'nl',
      'עברית': 'he',
      'हिन्दी': 'hi',
      'Bahasa Indonesia': 'id',
      'English': 'en',
      'Gaeilge': 'ga',
      'Iban': 'iba',
      'Igbo': 'ig',
      'Ilokano': 'ilo',
      'Inuktitut (Latin)': 'iu-Latn',
      'Italiano': 'it',
      'Íslenska': 'is',
      'Yorùbá': 'yo',
      'Yúukatek': 'yua',
      'ᐃᓄᒃᑎᑐᑦ': 'iu',
      'ייִדיש': 'yi',
      'Саха тыла': 'sah',
      'Basa Jawa': 'jv',
      'Eʋegbe': 'ee',
      'Jingpho': 'kac',
      '日本語': 'ja',
      'Kanuri': 'kr',
      'Khasi': 'kha',
      'Kituba': 'ktu',
      'Kokborok': 'trp',
      'Krio': 'kri',
      'ភាសាខ្មែរ': 'km',
      'Dholuo': 'luo',
      'Latgalīšu volūda': 'ltg',
      'Latina': 'la',
      'Latviešu': 'lv',
      'Lëtzebuergesch': 'lb',
      'Lietuvių': 'lt',
      'Ligure': 'lij',
      'Limburgs': 'li',
      'Lingála': 'ln',
      'Lombard': 'lmo',
      'Luganda': 'lg',
      'ລາວ': 'lo',
      'Bahasa Melayu': 'ms',
      'Basa Mangkasara': 'mak',
      'Gaelg': 'gv',
      'Jawi': 'ms-Arab',
      'Kajin M̧ajeļ': 'mh',
      'Madhurâ': 'mad',
      'Malagasy': 'mg',
      'Malti': 'mt',
      'Māori': 'mi',
      'Minangkabau': 'min',
      'Mizo ţawng': 'lus',
      'Qyol Mam': 'mam',
      'Македонски': 'mk',
      'Марий': 'chm',
      'Монгол': 'mn',
      'मराठी': 'mr',
      'मारवाड़ी': 'mwr',
      'मैथिली': 'mai',
      'മലയാളം': 'ml',
      'ꯃꯤꯇꯩꯂꯣꯟ': 'mni',
      "N'Ko": 'nqo',
      'Nāhuatl': 'nah',
      'Newar / Nepal Bhasa': 'new',
      'Norsk': 'no',
      'Thok Naath': 'nus',
      'नेपाली': 'ne',
      'Afaan Oromoo': 'om',
      'Occitan': 'oc',
      'Ирон ӕвзаг': 'os',
      'ଓଡ଼ିଆ': 'or',
      'Kapampangan': 'pam',
      'Pangasinan': 'pag',
      'Papiamentu': 'pap',
      'Patois': 'jam',
      'Polski': 'pl',
      'Português': 'pt',
      'فارسی': 'fa',
      'پښتو': 'ps',
      'ਪੰਜਾਬੀ': 'pa',
      'Kichwa': 'qu',
      'Kikongo': 'kg',
      'Kinyarwanda': 'rw',
      'Qʼeqchiʼ': 'kek',
      'Кыргызча': 'ky',
      'Kirundi': 'rn',
      'Romani': 'rom',
      'Română': 'ro',
      'Rukiga': 'cgg',
      'Русский': 'ru',
      'Basa Sunda': 'su',
      'Gagana Samoa': 'sm',
      'Kiswahili': 'sw',
      'Santali (Latin)': 'sat-Latn',
      'Sámi (Davvisámegiella)': 'se',
      'Sängö': 'sg',
      'Sepedi': 'nso',
      'Sesotho': 'st',
      'Sicilianu': 'scn',
      'Silesian': 'szl',
      'SiSwati': 'ss',
      'Soomaaliga': 'so',
      'Srpski': 'sr',
      'Susu': 'sus',
      'Svenska': 'sv',
      'संस्कृतम्': 'sa',
      'سنڌي': 'sd',
      'ᱥᱟᱱᱛᱟᱲᱤ (Ol Chiki)': 'sat',
      'Čeština': 'cs',
      'ChiTumbuka': 'tum',
      'Lea faka-Tonga': 'to',
      'Qırımtatarca (Latin)': 'crh-Latn',
      'Reo Tahiti': 'ty',
      'Setswana': 'tn',
      'Tamazight': 'zgh',
      'Tamazight (Tifinagh)': 'zgh-Tfng',
      'Tetun': 'tet',
      'Tiv': 'tiv',
      'Tok Pisin': 'tpi',
      'Tshiluba': 'lua',
      'Twi': 'ak',
      'Türkçe': 'tr',
      'Türkmençe': 'tk',
      'Xitsonga': 'ts',
      'Татарча': 'tt',
      'Татарча (Qırımtatarca)': 'crh-Cyrl',
      'Тоҷикӣ': 'tg',
      'Тыва дыл': 'tyv',
      'ትግርኛ': 'ti',
      'ไทย': 'th',
      'தமிழ்': 'ta',
      'తెలుగు': 'te',
      'ತುಳು': 'tcy',
      'བོད་ཡིག': 'bo',
      'Oʻzbekcha': 'uz',
      'Uyghurche': 'ug',
      'Українська': 'uk',
      'Удмурт': 'udm',
      'اردو': 'ur',
      'Tiếng Việt': 'vi',
      'Tshivenḓa': 've',
      'Vèneto': 'vec',
      'Waray': 'war',
      'Wolof': 'wo',
      'chiNdau': 'ndc',
      'isiXhosa': 'xh',
      'Хакас': 'kjh',
      'isiZulu': 'zu',
      'Zapotec': 'zap'
    };

    function populateLanguageList(filter = '') {
      languageList.innerHTML = '';
      const lowerCaseFilter = filter.toLowerCase();


      const sortedLanguageNames = Object.keys(languages).sort((a, b) => a.localeCompare(b));

      sortedLanguageNames.forEach(name => {
        if (name.toLowerCase().includes(lowerCaseFilter)) {
          const code = languages[name];
          let link = document.createElement('a');
          link.href = '#';
          link.className = 'block text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-md transition-colors';
          link.textContent = name;

          link.addEventListener('click', (e) => {
            e.preventDefault();

            const currentPageUrl = window.location.href;
            const googleTranslateUrl = `https://translate.google.com/translate?sl=pt&tl=${code}&u=${encodeURIComponent(currentPageUrl)}`;
            window.location.href = googleTranslateUrl;
          });
          languageList.appendChild(link);
        }
      });
    }

    searchInput.addEventListener('input',
      () => {
        populateLanguageList(searchInput.value);
      });


    customTranslateButton.addEventListener('click',
      () => {
        populateLanguageList();
        searchInput.value = '';
        translationPopup.classList.remove('hidden');
        searchInput.focus();
      });

    closePopupButton.addEventListener('click',
      () => {
        translationPopup.classList.add('hidden');
      });

    translationPopup.addEventListener('click',
      (e) => {
        if (e.target.id === 'translation-popup') {
          translationPopup.classList.add('hidden');
        }
      });
  }

  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const themeToggleButton = document.getElementById('theme-toggle');
  const darkIcon = document.getElementById('theme-toggle-dark-icon');
  const lightIcon = document.getElementById('theme-toggle-light-icon');
  if (themeToggleButton) {
    const applyTheme = (theme) => {
      document.documentElement.setAttribute('data-theme', theme);
      if (darkIcon && lightIcon) {
        darkIcon.classList.toggle('hidden', theme !== 'dark');
        lightIcon.classList.toggle('hidden', theme === 'dark');
      }
    };

    const currentTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(currentTheme);

    themeToggleButton.addEventListener('click', () => {
      const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light': 'dark';
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
    });
  }

  const postsContainer = document.getElementById('posts-container');
  const categoryFilters = document.getElementById('category-filters');
  const paginationContainer = document.getElementById('pagination-container');

  if (postsContainer && categoryFilters && paginationContainer) {
    const allPosts = Array.from(postsContainer.children);
    const postsPerPage = 10;
    let currentPage = 1;
    let currentCategory = 'all';

    function updateView() {

      const filteredPosts = allPosts.filter(post =>
        currentCategory === 'all' || post.dataset.category === currentCategory
      );

      const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
      if (currentPage > totalPages) {
        currentPage = totalPages || 1;
      }

      allPosts.forEach(post => post.style.display = 'none');

      const startIndex = (currentPage - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      filteredPosts.slice(startIndex, endIndex).forEach(post => {
        post.style.display = 'block';
      });

      renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
      paginationContainer.innerHTML = '';
      if (totalPages <= 1) return;

      paginationContainer.appendChild(createNavButton('&laquo; Anterior', currentPage > 1, () => {
        currentPage--;
        updateView();
      }));

      for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
          paginationContainer.appendChild(createPageButton(i));
        } else if (i === currentPage - 2 || i === currentPage + 2) {
          const ellipsis = document.createElement('span');
          ellipsis.className = 'px-2 py-2 text-gray-500';
          ellipsis.textContent = '...';
          paginationContainer.appendChild(ellipsis);
        }
      }

      paginationContainer.appendChild(createNavButton('Próximo &raquo;', currentPage < totalPages, () => {
        currentPage++;
        updateView();
      }));
    }

    function createPageButton(page) {
      const button = document.createElement('button');
      button.textContent = page;
      button.className = 'px-4 py-2 rounded-md transition-colors duration-300 ';
      if (page === currentPage) {
        button.classList.add('bg-fuchsia-500', 'text-white', 'font-bold');
      } else {
        button.classList.add('bg-gray-800', 'text-gray-300', 'hover:bg-fuchsia-400');
      }
      button.addEventListener('click', () => {
        currentPage = page;
        updateView();
      });
      return button;
    }

    function createNavButton(text, enabled, action) {
      const button = document.createElement('button');
      button.innerHTML = text;
      button.className = 'px-4 py-2 rounded-md transition-colors duration-300 bg-gray-800 text-gray-300 hover:bg-fuchsia-400';
      if (!enabled) {
        button.disabled = true;
        button.classList.add('opacity-50', 'cursor-not-allowed');
      }
      button.addEventListener('click', action);
      return button;
    }

    categoryFilters.querySelectorAll('.category-btn').forEach(button => {
      button.addEventListener('click', () => {
        categoryFilters.querySelector('.category-btn.active').classList.remove('active');
        button.classList.add('active');

        currentCategory = button.dataset.category;
        currentPage = 1;
        updateView();
      });
    });
    updateView();
  }
});