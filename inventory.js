(() => {
  const ALL_CARDS = [
    {
      "name":"Ханс-Адам II",
      "title":"Князь",
      "country":"Лихтенштейн",
      "rarity":"Обычные",
      "image":"images/cart/hans_adam.png",
      "description":"Правящий князь Лихтенштейна с 1989 года."
    },
    {
      "name":"Даниэль Риш",
      "title":"Премьер-министр",
      "country":"Лихтенштейн",
      "rarity":"Обычные",
      "image":"images/cart/daniel_rish.png",
      "description":"Глава правительства Лихтенштейна с 2021 года."
    },
    {
      "name":"Гвюдни Йоуханнессон",
      "title":"Президент",
      "country":"Исландия",
      "rarity":"Обычные",
      "image":"images/cart/gudni_johannesson.png",
      "description":"Президент Исландии с 2016 года."
    },
    {
      "name":"Катрин Якобсдоуттир",
      "title":"Премьер-министр",
      "country":"Исландия",
      "rarity":"Обычные",
      "image":"images/cart/katrin_jakobsdottir.png",
      "description":"Премьер-министр Исландии с 2017 года."
    },
    {
      "name":"Джордж Велла",
      "title":"Президент",
      "country":"Мальта",
      "rarity":"Обычные",
      "image":"images/cart/george_vella.png",
      "description":"Президент Мальты с 2019 года."
    },
    {
      "name":"Роберт Абела",
      "title":"Премьер-министр",
      "country":"Мальта",
      "rarity":"Обычные",
      "image":"images/cart/robert_abela.png",
      "description":"Премьер-министр Мальты с 2020 года."
    },
    {
      "name":"Альбер II",
      "title":"Князь",
      "country":"Монако",
      "rarity":"Обычные",
      "image":"images/cart/albert_ii.png",
      "description":"Правящий князь Монако с 2005 года."
    },
    {
      "name":"Пьер Дарту",
      "title":"Государственный министр",
      "country":"Монако",
      "rarity":"Обычные",
      "image":"images/cart/pierre_dartout.png",
      "description":"Государственный министр Монако с 2020 года."
    },
    {
      "name":"Александр Ван дер Беллен",
      "title":"Президент",
      "country":"Австрия",
      "rarity":"Обычные",
      "image":"images/cart/alexander_van_der_bellen.png",
      "description":"Федеральный президент Австрии с 2017 года."
    },
    {
      "name":"Карл Нехаммер",
      "title":"Канцлер",
      "country":"Австрия",
      "rarity":"Обычные",
      "image":"images/cart/karl_nehammer.png",
      "description":"Федеральный канцлер Австрии с 2021 года."
    },
    {
      "name":"Байрам Бегай",
      "title":"Президент",
      "country":"Албания",
      "rarity":"Обычные",
      "image":"images/cart/bajram_begaj.png",
      "description":"Президент Албании с 2022 года."
    },
    {
      "name":"Эди Рама",
      "title":"Премьер-министр",
      "country":"Албания",
      "rarity":"Обычные",
      "image":"images/cart/edi_rama.png",
      "description":"Премьер-министр Албании с 2013 года."
    },
    {
      "name":"Румен Радев",
      "title":"Президент",
      "country":"Болгария",
      "rarity":"Обычные",
      "image":"images/cart/rumen_radev.png",
      "description":"Президент Болгарии с 2017 года."
    },
    {
      "name":"Димитр Главчев",
      "title":"Премьер-министр",
      "country":"Болгария",
      "rarity":"Обычные",
      "image":"images/cart/dimitar_glavchev.png",
      "description":"Премьер-министр Болгарии с 2024 года."
    },
    {
      "name":"Катерина Сакелларопулу",
      "title":"Президент",
      "country":"Греция",
      "rarity":"Обычные",
      "image":"images/cart/katerina_sakellaropoulou.png",
      "description":"Президент Греции с 2020 года."
    },
    {
      "name":"Кириакос Мицотакис",
      "title":"Премьер-министр",
      "country":"Греция",
      "rarity":"Обычные",
      "image":"images/cart/kyriakos_mitsotakis.png",
      "description":"Премьер-министр Греции с 2023 года."
    },
    {
      "name":"Зузана Чапутова",
      "title":"Президент",
      "country":"Словакия",
      "rarity":"Обычные",
      "image":"images/cart/zuzana_caputova.png",
      "description":"Президент Словакии с 2019 года."
    },
    {
      "name":"Роберт Фицо",
      "title":"Премьер-министр",
      "country":"Словакия",
      "rarity":"Обычные",
      "image":"images/cart/robert_fico.png",
      "description":"Премьер-министр Словакии с 2023 года."
    },
    {
      "name":"Наташа Пирц Мусар",
      "title":"Президент",
      "country":"Словения",
      "rarity":"Обычные",
      "image":"images/cart/natasa_pirc_musar.png",
      "description":"Президент Словении с 2022 года."
    },
    {
      "name":"Роберт Голоб",
      "title":"Премьер-министр",
      "country":"Словения",
      "rarity":"Обычные",
      "image":"images/cart/robert_golob.png",
      "description":"Премьер-министр Словении с 2022 года."
    },
    {
      "name":"Клаус Йоханнис",
      "title":"Президент",
      "country":"Румыния",
      "rarity":"Обычные",
      "image":"images/cart/klaus_iohannis.png",
      "description":"Президент Румынии с 2014 года."
    },
    {
      "name":"Марчел Чолаку",
      "title":"Премьер-министр",
      "country":"Румыния",
      "rarity":"Обычные",
      "image":"images/cart/marcel_ciolacu.png",
      "description":"Премьер-министр Румынии с 2023 года."
    },
    {
      "name":"Эдгарс Ринкевичс",
      "title":"Президент",
      "country":"Латвия",
      "rarity":"Обычные",
      "image":"images/cart/edgars_rinkevics.png",
      "description":"Президент Латвии с 2023 года."
    },
    {
      "name":"Эвика Силиня",
      "title":"Премьер-министр",
      "country":"Латвия",
      "rarity":"Обычные",
      "image":"images/cart/evika_silina.png",
      "description":"Премьер-министр Латвии с 2023 года."
    },
    {
      "name":"Гитанас Науседа",
      "title":"Президент",
      "country":"Литва",
      "rarity":"Обычные",
      "image":"images/cart/gitanas_nauseda.png",
      "description":"Президент Литвы с 2019 года."
    },
    {
      "name":"Ингрида Шимоните",
      "title":"Премьер-министр",
      "country":"Литва",
      "rarity":"Обычные",
      "image":"images/cart/ingrida_simonyte.png",
      "description":"Премьер-министр Литвы с 2020 года."
    },
    {
      "name":"Алар Карис",
      "title":"Президент",
      "country":"Эстония",
      "rarity":"Обычные",
      "image":"images/cart/alar_karis.png",
      "description":"Президент Эстонии с 2021 года."
    },
    {
      "name":"Кая Каллас",
      "title":"Премьер-министр",
      "country":"Эстония",
      "rarity":"Обычные",
      "image":"images/cart/kaja_kallas.png",
      "description":"Премьер-министр Эстонии с 2021 года."
    },
    {
      "name":"Майкл Д. Хиггинс",
      "title":"Президент",
      "country":"Ирландия",
      "rarity":"Обычные",
      "image":"images/cart/michael_higgins.png",
      "description":"Президент Ирландии с 2011 года."
    },
    {
      "name":"Лео Варадкар",
      "title":"Тайшич",
      "country":"Ирландия",
      "rarity":"Обычные",
      "image":"images/cart/leo_varadkar.png",
      "description":"Премьер-министр Ирландии."
    },
    {
      "name":"Саули Нийнистё",
      "title":"Президент",
      "country":"Финляндия",
      "rarity":"Редкие",
      "image":"images/cart/sauli_niinisto.png",
      "description":"Президент Финляндии с 2012 года."
    },
    {
      "name":"Петтери Орпо",
      "title":"Премьер-министр",
      "country":"Финляндия",
      "rarity":"Редкие",
      "image":"images/cart/petteri_orpo.png",
      "description":"Премьер-министр Финляндии с 2023 года."
    },
    {
      "name":"Владимир Зеленский",
      "title":"Президент",
      "country":"Украина",
      "rarity":"Редкие",
      "image":"images/cart/volodymyr_zelensky.png",
      "description":"Президент Украины с 2019 года."
    },
    {
      "name":"Денис Шмыгаль",
      "title":"Премьер-министр",
      "country":"Украина",
      "rarity":"Редкие",
      "image":"images/cart/denys_shmyhal.png",
      "description":"Премьер-министр Украины с 2020 года."
    },
    {
      "name":"Фелипе VI",
      "title":"Король",
      "country":"Испания",
      "rarity":"Редкие",
      "image":"images/cart/felipe_vi.png",
      "description":"Король Испании с 2014 года."
    },
    {
      "name":"Педро Санчес",
      "title":"Премьер-министр",
      "country":"Испания",
      "rarity":"Редкие",
      "image":"images/cart/pedro_sanchez.png",
      "description":"Премьер-министр Испании с 2018 года."
    },
    {
      "name":"Виллем-Александр",
      "title":"Король",
      "country":"Нидерланды",
      "rarity":"Редкие",
      "image":"images/cart/willem_alexander.png",
      "description":"Король Нидерландов с 2013 года."
    },
    {
      "name":"Марк Рютте",
      "title":"Премьер-министр",
      "country":"Нидерланды",
      "rarity":"Редкие",
      "image":"images/cart/mark_rutte.png",
      "description":"Премьер-министр Нидерландов с 2010 года."
    },
    {
      "name":"Маргрете II",
      "title":"Королева",
      "country":"Дания",
      "rarity":"Редкие",
      "image":"images/cart/margrethe_ii.png",
      "description":"Королева Дании с 1972 года."
    },
    {
      "name":"Метте Фредериксен",
      "title":"Премьер-министр",
      "country":"Дания",
      "rarity":"Редкие",
      "image":"images/cart/mette_frederiksen.png",
      "description":"Премьер-министр Дании с 2019 года."
    },
    {
      "name":"Карл XVI Густав",
      "title":"Король",
      "country":"Швеция",
      "rarity":"Редкие",
      "image":"images/cart/carl_xvi_gustaf.png",
      "description":"Король Швеции с 1973 года."
    },
    {
      "name":"Ульф Кристерссон",
      "title":"Премьер-министр",
      "country":"Швеция",
      "rarity":"Редкие",
      "image":"images/cart/ulf_kristersson.png",
      "description":"Премьер-министр Швеции с 2022 года."
    },
    {
      "name":"Харальд V",
      "title":"Король",
      "country":"Норвегия",
      "rarity":"Редкие",
      "image":"images/cart/harald_v.png",
      "description":"Король Норвегии с 1991 года."
    },
    {
      "name":"Йонас Гар Стёре",
      "title":"Премьер-министр",
      "country":"Норвегия",
      "rarity":"Редкие",
      "image":"images/cart/jonas_gahr_store.png",
      "description":"Премьер-министр Норвегии с 2021 года."
    },
    {
      "name":"Филипп",
      "title":"Король",
      "country":"Бельгия",
      "rarity":"Редкие",
      "image":"images/cart/philippe.png",
      "description":"Король Бельгии с 2013 года."
    },
    {
      "name":"Александр Де Кроо",
      "title":"Премьер-министр",
      "country":"Бельгия",
      "rarity":"Редкие",
      "image":"images/cart/alexander_de_croo.png",
      "description":"Премьер-министр Бельгии с 2020 года."
    },
    {
      "name":"Анри",
      "title":"Великий герцог",
      "country":"Люксембург",
      "rarity":"Редкие",
      "image":"images/cart/henri.png",
      "description":"Великий герцог Люксембурга с 2000 года."
    },
    {
      "name":"Ксавье Беттель",
      "title":"Премьер-министр",
      "country":"Люксембург",
      "rarity":"Редкие",
      "image":"images/cart/xavier_bettel.png",
      "description":"Премьер-министр Люксембурга с 2013 года."
    },
    {
      "name":"Яков Милатович",
      "title":"Президент",
      "country":"Черногория",
      "rarity":"Редкие",
      "image":"images/cart/jakov_milatovic.png",
      "description":"Президент Черногории с 2023 года."
    },
    {
      "name":"Милойко Спаич",
      "title":"Премьер-министр",
      "country":"Черногория",
      "rarity":"Редкие",
      "image":"images/cart/milojko_spajic.png",
      "description":"Премьер-министр Черногории с 2023 года."
    },
    {
      "name":"Карл III",
      "title":"Король",
      "country":"Великобритания",
      "rarity":"Эпические",
      "image":"images/cart/charles_iii.png",
      "description":"Король Великобритании с 2022 года."
    },
    {
      "name":"Кир Стармер",
      "title":"Премьер-министр",
      "country":"Великобритания",
      "rarity":"Эпические",
      "image":"images/cart/keir_starmer.png",
      "description":"Премьер-министр Великобритании с 2024 года."
    },
    {
      "name":"Тамаш Суйок",
      "title":"Президент",
      "country":"Венгрия",
      "rarity":"Эпические",
      "image":"images/cart/tamas_sulyok.png",
      "description":"Президент Венгрии с 2024 года."
    },
    {
      "name":"Виктор Орбан",
      "title":"Премьер-министр",
      "country":"Венгрия",
      "rarity":"Эпические",
      "image":"images/cart/viktor_orban.png",
      "description":"Премьер-министр Венгрии с 2010 года."
    },
    {
      "name":"Франк-Вальтер Штайнмайер",
      "title":"Президент",
      "country":"Германия",
      "rarity":"Эпические",
      "image":"images/cart/frank_walter_steinmeier.png",
      "description":"Федеральный президент Германии с 2017 года."
    },
    {
      "name":"Фридрих Мерц",
      "title":"Канцлер",
      "country":"Германия",
      "rarity":"Эпические",
      "image":"images/cart/friedrich_merz.png",
      "description":"Канцлер Германии."
    },
    {
      "name":"Серджо Маттарелла",
      "title":"Президент",
      "country":"Италия",
      "rarity":"Эпические",
      "image":"images/cart/sergio_mattarella.png",
      "description":"Президент Италии с 2015 года."
    },
    {
      "name":"Джорджа Мелони",
      "title":"Премьер-министр",
      "country":"Италия",
      "rarity":"Эпические",
      "image":"images/cart/giorgia_meloni.png",
      "description":"Премьер-министр Италии с 2022 года."
    },
    {
      "name":"Зоран Миланович",
      "title":"Президент",
      "country":"Хорватия",
      "rarity":"Эпические",
      "image":"images/cart/zoran_milanovic.png",
      "description":"Президент Хорватии с 2020 года."
    },
    {
      "name":"Андрей Пленкович",
      "title":"Премьер-министр",
      "country":"Хорватия",
      "rarity":"Эпические",
      "image":"images/cart/andrej_plenkovic.png",
      "description":"Премьер-министр Хорватии с 2016 года."
    },
    {
      "name":"Марселу Ребелу ди Соза",
      "title":"Президент",
      "country":"Португалия",
      "rarity":"Эпические",
      "image":"images/cart/marcelo_rebelo_de_sousa.png",
      "description":"Президент Португалии с 2016 года."
    },
    {
      "name":"Антониу Кошта",
      "title":"Премьер-министр",
      "country":"Португалия",
      "rarity":"Эпические",
      "image":"images/cart/antonio_costa.png",
      "description":"Премьер-министр Португалии с 2015 года."
    },
    {
      "name":"Майя Санду",
      "title":"Президент",
      "country":"Молдова",
      "rarity":"Эпические",
      "image":"images/cart/maia_sandu.png",
      "description":"Президент Молдовы с 2020 года."
    },
    {
      "name":"Дорин Речан",
      "title":"Премьер-министр",
      "country":"Молдова",
      "rarity":"Эпические",
      "image":"images/cart/dorin_recean.png",
      "description":"Премьер-министр Молдовы с 2023 года."
    },
    {
      "name":"Кароль Навроцкий",
      "title":"Президент",
      "country":"Польша",
      "rarity":"Эпические",
      "image":"images/cart/karol_nawrocki.png",
      "description":"Президент Польши."
    },
    {
      "name":"Дональд Туск",
      "title":"Премьер-министр",
      "country":"Польша",
      "rarity":"Эпические",
      "image":"images/cart/donald_tusk.png",
      "description":"Премьер-министр Польши с 2023 года."
    },
    {
      "name":"Петр Павел",
      "title":"Президент",
      "country":"Чехия",
      "rarity":"Эпические",
      "image":"images/cart/petr_pavel.png",
      "description":"Президент Чехии с 2023 года."
    },
    {
      "name":"Петр Фиала",
      "title":"Премьер-министр",
      "country":"Чехия",
      "rarity":"Эпические",
      "image":"images/cart/petr_fiala.png",
      "description":"Премьер-министр Чехии с 2021 года."
    },
    {
      "name":"Папа Франциск",
      "title":"Папа Римский",
      "country":"Ватикан",
      "rarity":"Легендарные",
      "image":"images/cart/pope_francis.png",
      "description":"266-й Папа Римский с 2013 года."
    },
    {
      "name":"Пьетро Паролин",
      "title":"Государственный секретарь",
      "country":"Ватикан",
      "rarity":"Легендарные",
      "image":"images/cart/pietro_parolin.png",
      "description":"Государственный секретарь Ватикана с 2013 года."
    },
    {
      "name":"Жоан Энрик Вивес-и-Сисилья",
      "title":"Соправитель",
      "country":"Андорра",
      "rarity":"Легендарные",
      "image":"images/cart/joan_enric_vives.png",
      "description":"Соправитель Андорры как Епископ Урхельский."
    },
    {
      "name":"Ксавье Эспот Самора",
      "title":"Премьер-министр",
      "country":"Андорра",
      "rarity":"Легендарные",
      "image":"images/cart/xavier_espot_zamora.png",
      "description":"Глава правительства Андорры с 2019 года."
    },
    {
      "name":"Алессандро Скарано",
      "title":"Капитан-регент",
      "country":"Сан-Марино",
      "rarity":"Легендарные",
      "image":"images/cart/alessandro_scarano.png",
      "description":"Капитан-регент Сан-Марино."
    },
    {
      "name":"Аделе Тоннини",
      "title":"Капитан-регент",
      "country":"Сан-Марино",
      "rarity":"Легендарные",
      "image":"images/cart/adele_tonnini.png",
      "description":"Капитан-регент Сан-Марино."
    },
    {
      "name":"Федеральный совет",
      "title":"Коллегиальное правление",
      "country":"Швейцария",
      "rarity":"Легендарные",
      "image":"images/cart/federal_council.png",
      "description":"Коллективный глава государства Швейцарии."
    },
    {
      "name":"Эмманюэль Макрон",
      "title":"Президент",
      "country":"Франция",
      "rarity":"Легендарные",
      "image":"images/cart/emmanuel_macron.png",
      "description":"Президент Франции с 2017 года. Так же соправитель Андорры"
    },
    {
      "name":"Габриэль Атталь",
      "title":"Премьер-министр",
      "country":"Франция",
      "rarity":"Легендарные",
      "image":"images/cart/gabriel_attal.png",
      "description":"Премьер-министр Франции с 2024 года."
    },
    {
      "name":"Михаил Мишустин",
      "title":"Председатель правительства",
      "country":"Россия",
      "rarity":"Мифические",
      "image":"images/cart/mikhail_mishustin.png",
      "description":"Председатель Правительства России с 2020 года."
    },
    {
      "name":"Дональд Трамп",
      "title":"Президент",
      "country":"США",
      "rarity":"Мифические",
      "image":"images/cart/donald_trump.png",
      "description":"45-й президент США (2017-2021)."
    },
    {
      "name":"Джей Ди Вэнс",
      "title":"Вице-президент",
      "country":"США",
      "rarity":"Мифические",
      "image":"images/cart/jd_vance.png",
      "description":"Вице-президент США."
    },
    {
      "name":"Александр Вучич",
      "title":"Президент",
      "country":"Сербия",
      "rarity":"Мифические",
      "image":"images/cart/aleksandar_vucic.png",
      "description":"Президент Сербии с 2017 года."
    },
    {
      "name":"Ана Брнабич",
      "title":"Премьер-министр",
      "country":"Сербия",
      "rarity":"Мифические",
      "image":"images/cart/ana_brnabic.png",
      "description":"Премьер-министр Сербии с 2017 года."
    },
    {
      "name":"Роман Головченко",
      "title":"Премьер-министр",
      "country":"Беларусь",
      "rarity":"Мифические",
      "image":"images/cart/roman_golovchenko.png",
      "description":"Премьер-министр Беларуси с 2020 года."
    },
    {
      "name":"Чарльз Джеймс Кирк",
      "title":"Секретный персонаж",
      "country":"США",
      "rarity":"Секретные",
      "image":"images/cart/charles_kirk.png",
      "description":"Основатель Turning Point USA."
    },
    {
      "name":"Евгений Пригожин",
      "title":"Секретный персонаж",
      "country":"Россия",
      "rarity":"Секретные",
      "image":"images/cart/evgeny_prigozhin.png",
      "description":"Основатель ЧВК 'Вагнер'."
    },
    {
      "name":"Владимир Жириновский",
      "title":"Секретный персонаж",
      "country":"Россия",
      "rarity":"Секретные",
      "image":"images/cart/vladimir_zhirinovsky.png",
      "description":"Основатель и лидер ЛДПР."
    },
    {
      "name":"Владимир Путин",
      "title":"Секретный персонаж",
      "country":"Россия",
      "rarity":"Секретные",
      "image":"images/cart/vladimir_putin.png",
      "description":"Президент России."
    },
    {
      "name":"Олаф Шольц",
      "title":"Секретный персонаж",
      "country":"Германия",
      "rarity":"Секретные",
      "image":"images/cart/olaf_scholz.png",
      "description":"Федеральный канцлер Германии (2021-2025)."
    },
    {
      "name":"Александр Лукашенко",
      "title":"Секретный персонаж",
      "country":"Беларусь",
      "rarity":"Секретные",
      "image":"images/cart/alexander_lukashenko.png",
      "description":"Президент Беларуси с 1994 года."
    },
    {
      "name":"Виктор Хренин",
      "title":"Секретный персонаж",
      "country":"Беларусь",
      "rarity":"Секретные",
      "image":"images/cart/viktor_khrenin.png",
      "description":"Министр обороны Беларуси."
    },
    {
      "name":"Анджей Дуда",
      "title":"Секретный персонаж",
      "country":"Польша",
      "rarity":"Секретные",
      "image":"images/cart/andzej_duda.png",
      "description":"Президент Польши с 2015 года."
    }
  ];

  function savePlayerCards() {
    localStorage.setItem('playerCards', JSON.stringify(window.CARDS));
  }

  function getCards() {
    return Array.isArray(window.CARDS) ? window.CARDS : [];
  }

  function getRandomCardByRarity(rarity) {
    if (rarity === 'Ничего') return null;
    const pool = ALL_CARDS.filter(card => card.rarity === rarity);
    return pool.length > 0 ? {...pool[Math.floor(Math.random() * pool.length)]} : null;
  }

  function addCardToCollection(card) {
    if (!card) return false;

    const existingCard = window.CARDS.find(c =>
      c.name === card.name && c.country === card.country
    );

    if (!existingCard) {
      window.CARDS.push(card);
      savePlayerCards();
      renderCards();
      return true;
    }
    return false;
  }

  function renderCards() {
    if (!window.cardsGrid) return;

    const playerCards = getCards();
    const showAll = window.showAllCards ? window.showAllCards.checked : false;
    const sortValue = window.sortBy ? window.sortBy.value : '';

    window.cardsGrid.innerHTML = '';

    let sortedCards = [...ALL_CARDS];

    switch (sortValue) {
      case 'rarity-desc':
        sortedCards.sort((a, b) => {
          const rarityOrder = ['Секретные', 'Мифические', 'Легендарные', 'Эпические', 'Редкие', 'Обычные'];
          return rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity);
        });
        break;
      case 'rarity-asc':
        sortedCards.sort((a, b) => {
          const rarityOrder = ['Секретные', 'Мифические', 'Легендарные', 'Эпические', 'Редкие', 'Обычные'];
          return rarityOrder.indexOf(b.rarity) - rarityOrder.indexOf(a.rarity);
        });
        break;
      case 'name-asc':
        sortedCards.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sortedCards.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'country-asc':
        sortedCards.sort((a, b) => a.country.localeCompare(b.country));
        break;
      case 'country-desc':
        sortedCards.sort((a, b) => b.country.localeCompare(a.country));
        break;
    }

    sortedCards.forEach(card => {
      const playerCard = playerCards.find(pc =>
        pc.name === card.name && pc.country === card.country
      );
      const isUnlocked = !!playerCard;

      if (!showAll && !isUnlocked) return;

      const cardElement = document.createElement('div');
      cardElement.className = `card ${isUnlocked ? '' : 'closed'}`;

      const img = document.createElement('img');
      if (isUnlocked) {
        img.src = card.image || 'images/foto.png';
        img.onerror = function() {
          this.src = 'images/foto.png';
          this.onerror = null;
        };
      } else {
        img.src = 'images/foto.png';
        img.style.filter = 'brightness(0.3) blur(2px)';
      }

      const name = document.createElement('div');
      name.className = 'card-name';
      name.textContent = isUnlocked ? card.name : '???';

      const meta = document.createElement('div');
      meta.className = 'card-meta';
      meta.textContent = isUnlocked ? `${card.title} — ${card.country}` : 'Неизвестно';

      const strip = document.createElement('div');
      strip.className = `rarity-strip rarity-${card.rarity}`;

      cardElement.appendChild(img);
      cardElement.appendChild(name);
      cardElement.appendChild(meta);
      cardElement.appendChild(strip);

      if (isUnlocked) {
        cardElement.addEventListener('click', () => {
          window.playSound(window.clickSound);
          showCardDetails(card);
        });
      }

      window.cardsGrid.appendChild(cardElement);
    });

    if (window.invCount) window.invCount.textContent = `Карт: ${getCards().length}/${ALL_CARDS.length}`;
  }

  function showCardDetails(card) {
    const img = document.getElementById('detailCardImg');
    const name = document.getElementById('detailCardName');
    const title = document.getElementById('detailCardTitle');
    const country = document.getElementById('detailCardCountry');
    const rarity = document.getElementById('detailCardRarity');
    const description = document.getElementById('detailCardDescription');

    if (img) {
      img.src = card.image || 'images/foto.png';
      img.onerror = function() {
        this.src = 'images/foto.png';
        this.onerror = null;
      };
    }
    if (name) name.textContent = card.name;
    if (title) title.textContent = card.title;
    if (country) country.textContent = card.country;
    if (rarity) {
      rarity.textContent = card.rarity;
      rarity.className = `rarity-badge rarity-${card.rarity}`;
    }
    if (description) description.textContent = card.description || 'Описание отсутствует';

    if (window.cardModal) window.cardModal.classList.remove('hidden');
  }

  window.ALL_CARDS = ALL_CARDS;
  window.savePlayerCards = savePlayerCards;
  window.getCards = getCards;
  window.getRandomCardByRarity = getRandomCardByRarity;
  window.addCardToCollection = addCardToCollection;
  window.renderCards = renderCards;
  window.showCardDetails = showCardDetails;
})();