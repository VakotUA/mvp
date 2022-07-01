import * as Icons from 'react-bootstrap-icons'

const data = {
  mainContent: [
    {
      id: 0,
      link: '/mvp',
      content: {
        header: 'Онлайн-сервис заказа услуг',
        text: 'Более 100 000 проверенных специалистов для выполнения ваших бытовых или бизнес задач',
        example: {
          text: 'ремонт крана',
          link: '/mvp/house/remont-krana',
        },
        faq: [
          {
            text: 'Все категории услуг',
            icon: <Icons.Grid />,
            link: '/mvp/all-categories',
          },
          {
            text: 'Как это работает',
            icon: <Icons.Person />,
            link: '/mvp/faq',
          },
        ],
        bgImage: require('./assets/main-bg.jpg'),
      },
    },
    {
      id: 1,
      link: '/mvp/house',
      content: {
        header: 'Онлайн-сервис заказа услуг для дома',
        text: 'Мы поможем вам найти любого специалиста по уходу за квартирой или домом',
        example: {
          text: 'убрать в квартире',
          link: '/mvp/house/cleaning',
        },
        faq: [
          {
            text: 'Все категории услуг',
            icon: <Icons.Grid />,
            link: '/mvp/all-categories',
          },
          {
            text: 'Как это работает',
            icon: <Icons.Person />,
            link: '/mvp/faq',
          },
        ],
        bgImage: require('./assets/house-bg.jpg'),
        link: '/',
      },
    },
    {
      id: 2,
      link: '/mvp/logistic',
      content: {
        header: 'Онлайн-сервис заказа услуг по доставке',
        text: 'Мы поможем вам найти курьера или любой транспорт в течение нескольких минут',
        example: {
          text: 'доставить подарок',
          link: '/mvp/logistic/deliver-a-gift',
        },
        faq: [
          {
            text: 'Все категории услуг',
            icon: <Icons.Grid />,
            link: '/mvp/all-categories',
          },
          {
            text: 'Как это работает',
            icon: <Icons.Person />,
            link: '/mvp/faq',
          },
        ],
        bgImage: require('./assets/logistic-bg.jpg'),
        link: '/',
      },
    },
    {
      id: 3,
      link: '/mvp/freelance',
      content: {
        header: 'Биржа фриланс услуг',
        text: 'Мы поможем вам найти компетентного фрилансера для выполнения любой онлайн работы',
        example: {
          text: 'написать текст',
          link: '/mvp/freelance/write-a-text',
        },
        faq: [
          {
            text: 'Все категории услуг',
            icon: <Icons.Grid />,
            link: '/mvp/all-categories',
          },
          {
            text: 'Начать зарабатывать ',
            icon: <Icons.ShieldCheck />,
            link: '/mvp/start-farming',
          },
          {
            text: 'Как это работает',
            icon: <Icons.Person />,
            link: '/mvp/faq',
          },
        ],
        bgImage: require('./assets/freelance-bg.jpg'),
        link: '/',
      },
    },
    {
      id: 4,
      link: '/mvp/teacher',
      content: {
        header: 'Онлайн-сервис поиска преподавателей и тренеров',
        text: 'Мы поможем вам найти индивидуального тренера или репетитора в течение нескольких минут',
        example: {
          text: 'преподователь английского',
          link: '/mvp/teacher/teacher-of-english',
        },
        faq: [
          {
            text: 'Все категории услуг',
            icon: <Icons.Grid />,
            link: '/mvp/all-categories',
          },
          {
            text: 'Как это работает',
            icon: <Icons.Person />,
            link: '/mvp/faq',
          },
        ],
        bgImage: require('./assets/teacher-bg.jpg'),
        link: '/',
      },
    },
    {
      id: 5,
      link: '/mvp/business',
      content: {
        header: 'Онлайн-сервис заказа деловых услуг',
        text: 'Мы поможем вам найти личного помощника для выполнения любой работы',
        example: {
          text: 'ведение бухгалтерии',
          link: '/mvp/business/bookkeeping',
        },
        faq: [
          {
            text: 'Все категории услуг',
            icon: <Icons.Grid />,
            link: '/mvp/all-categories',
          },
          {
            text: 'Как это работает',
            icon: <Icons.Person />,
            link: '/mvp/faq',
          },
        ],
        bgImage: require('./assets/business-bg.jpg'),
        link: '/',
      },
    },
  ],

  categories: [
    {
      id: 0,
      lable: 'Дом',
      link: '/mvp/house',
      img: <Icons.House />,
      list: [
        {
          title: 'Домашний мастер',
          list: [
            {
              title: 'Сантехник',
              count: 9785,
            },
            {
              title: 'Электрик',
              count: 10778,
            },
            {
              title: 'Муж на час',
              count: 21100,
            },
            {
              title: 'Столяр',
              count: 9866,
            },
            {
              title: 'Слесарь',
              count: 4049,
            },
            {
              title: 'Установка бытовой техники',
              count: 11662,
            },
            {
              title: 'Другие услуги мастера',
              count: 16778,
            },
          ],
        },
        {
          title: 'Отделочные работы',
          list: [
            {
              title: 'Ремонт квартир',
              count: 9097,
            },
            {
              title: 'Укладка плитки',
              count: 6578,
            },
            {
              title: 'Штукатурные работы',
              count: 6934,
            },
            {
              title: 'Утепление помещений',
              count: 10576,
            },
            {
              title: 'Монтаж отопления',
              count: 7742,
            },
            {
              title: 'Малярные работы',
              count: 8692,
            },
            {
              title: 'Поклейка обоев',
              count: 7563,
            },
            {
              title: 'Напольные работы',
              count: 7366,
            },
            {
              title: 'Установка и ремонт дверей',
              count: 5224,
            },
            {
              title: 'Полировка мрамора',
              count: 1343,
            },
            {
              title: 'Установка и ремонт окон',
              count: 3691,
            },
            {
              title: 'Демонтажные работы',
              count: 10766,
            },
            {
              title: 'Фасадные работы',
              count: 4287,
            },
            {
              title: 'Потолочные работы',
              count: 6543,
            },
            {
              title: 'Работа со стеклом',
              count: 2723,
            },
            {
              title: 'Звукоизоляция',
              count: 5114,
            },
            {
              title: 'Монтаж вагонки',
              count: 6815,
            },
            {
              title: 'Другие ремонтные работы',
              count: 11232,
            },
          ],
        },
      ],
    },
    {
      id: 1,
      lable: 'Доставка',
      link: '/mvp/logistic',
      img: <Icons.Truck />,
      list: [],
    },
    {
      id: 2,
      lable: 'Фриланс',
      link: '/mvp/freelance',
      img: <Icons.Mouse2 />,
      list: [
        {
          title: 'Работа в Интернете',
          list: [
            {
              title: 'Копирайтинг',
              count: 34215,
            },
            {
              title: 'Сбор, поиск информации',
              count: 39111,
            },
            {
              title: 'Наполнение сайтов',
              count: 30480,
            },
            {
              title: 'Набор текста',
              count: 52687,
            },
            {
              title: 'Рерайтинг',
              count: 30853,
            },
            {
              title: 'Ввод данных',
              count: 40713,
            },
            {
              title: 'Расшифровка интервью',
              count: 27755,
            },
            {
              title: 'Создание презентаций',
              count: 20047,
            },
            {
              title: 'Другая онлайн работа',
              count: 41000,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      lable: 'Преподователи',
      link: '/mvp/teacher',
      img: <Icons.JournalBookmark />,
      list: [],
    },
    {
      id: 4,
      lable: 'Бизнес',
      link: '/mvp/business',
      img: <Icons.Briefcase />,
      list: [],
    },
    {
      id: 5,
      lable: 'Спорт',
      link: '/mvp/sport',
      img: <Icons.Balloon />,
      list: [
        {
          title: 'Волонтерская помощь',
          list: [
            {
              title: 'Помощь пожилым людям',
              count: 54813,
            },
            {
              title: 'Транспортные перевозки',
              count: 54707,
            },
            {
              title: 'Доставка топлива',
              count: 54727,
            },
            {
              title: 'Предоставление или поиск жилья',
              count: 54695,
            },
            {
              title: 'Доставка еды',
              count: 54814,
            },
            {
              title: 'Доставка медикаментов',
              count: 54828,
            },
            {
              title: 'Психологическая помощь',
              count: 2646,
            },
            {
              title: 'Помощь животным',
              count: 54774,
            },
          ],
        },
      ],
    },
  ],

  reviews: [
    {
      id: 0,
      userName: 'Валерий',
      userPost: 'менеджер телекоммуникационной компании',
      text: 'Популярный сервис, на котором удобно и клиентам, и специалистам. Хороший подбор специалистов для ежедневных потребностей людей дополняется понятным и информативным интерфейсом, что делает "Кабанчика" отличным помощником. Проблемы решаются оперативно и, главное, без потери времени и лишних денег. Вполне доволен сотрудничеством.',
      img: require('./assets/reviewer-1.jpg'),
      bgImage: require('./assets/slide-1.jpg'),
    },
    {
      id: 1,
      userName: 'Татьяна',
      userPost: '',
      text: 'Очень довольна ресурсом. Пользовалась несколько раз: искала мастера для поклейки обоев, няню для ребенка и швею. Довольна. Даже не было боязно отправлять заказ пошива в другой город, так как тщательная проверка специалистов минимизировала риски.',
      img: require('./assets/reviewer-2.jpg'),
      bgImage: require('./assets/slide-2.jpg'),
    },
    {
      id: 2,
      userName: 'Олеся',
      userPost: 'разработчик программного обеспечения',
      text: 'Кабанчик - просто сервис-находка! В условиях большого города, беготни и вечного балансирования "сколько стоит моё время" для меня Кабанчик - палочка-выручалочка. 3 минуты на создание заказа, 1 телефонный звонок с специалистом, около часа его работы и все счастливы!',
      img: require('./assets/reviewer-3.jpg'),
      bgImage: require('./assets/slide-3.jpg'),
    },
    {
      id: 3,
      userName: 'Сергей',
      userPost: 'копирайтер',
      text: 'Кабанчик дал мне возможность быстро находить заказчиков – я просто получаю сообщения о публикации новых заказов. Он позволил зарабатывать больше, чем я получал, работая в офисе. Он открыл новых заказчиков – интереснейших предпринимателей. Выполняя их задачи, я развиваюсь как специалист.',
      img: require('./assets/reviewer-4.jpg'),
      bgImage: require('./assets/slide-4.jpg'),
    },
  ],

  cities: [
    {
      id: 0,
      link: '/mvp/cities/',
      name: 'Александрия',
    },
    {
      id: 1,
      link: '/mvp/cities/',
      name: 'Белая Церковь',
    },
    {
      id: 2,
      link: '/mvp/cities/',
      name: 'Белгород-Днестровский',
    },
    {
      id: 3,
      link: '/mvp/cities/',
      name: 'Бердичев',
    },
    {
      id: 4,
      link: '/mvp/cities/',
      name: 'Бердичев',
    },
    {
      id: 5,
      link: '/mvp/cities/',
      name: 'Березань',
    },
    {
      id: 6,
      link: '/mvp/cities/',
      name: 'Борисполь',
    },
    {
      id: 7,
      link: '/mvp/cities/',
      name: 'Боярка',
    },
    {
      id: 8,
      link: '/mvp/cities/',
      name: 'Бровары',
    },
    {
      id: 9,
      link: '/mvp/cities/',
      name: 'Буча',
    },
    {
      id: 10,
      link: '/mvp/cities/',
      name: 'Васильков',
    },
    {
      id: 11,
      link: '/mvp/cities/',
      name: 'Вишнёвое',
    },
    {
      id: 12,
      link: '/mvp/cities/',
      name: 'Вышгород',
    },
    {
      id: 13,
      link: '/mvp/cities/',
      name: 'Днепр (Днепропетровск)',
    },
    {
      id: 14,
      link: '/mvp/cities/',
      name: 'Дрогобыч',
    },
    {
      id: 15,
      link: '/mvp/cities/',
      name: 'Житомир',
    },
    {
      id: 16,
      link: '/mvp/cities/',
      name: 'Запорожье',
    },
    {
      id: 17,
      link: '/mvp/cities/',
      name: 'Ивано-Франковск',
    },
    {
      id: 18,
      link: '/mvp/cities/',
      name: 'Измаил',
    },
    {
      id: 19,
      link: '/mvp/cities/',
      name: 'Ирпень',
    },
    {
      id: 20,
      link: '/mvp/cities/',
      name: 'Каменец-Подольский',
    },
    {
      id: 21,
      link: '/mvp/cities/',
      name: 'Каменское (Днепродзержинск)',
    },
    {
      id: 22,
      link: '/mvp/cities/',
      name: 'Киев',
    },
    {
      id: 23,
      link: '/mvp/cities/',
      name: 'Ковель',
    },
    {
      id: 24,
      link: '/mvp/cities/',
      name: 'Конотоп',
    },
    {
      id: 25,
      link: '/mvp/cities/',
      name: 'Краматорск',
    },
    {
      id: 26,
      link: '/mvp/cities/',
      name: 'Кременчуг',
    },
    {
      id: 27,
      link: '/mvp/cities/',
      name: 'Кривой Рог',
    },
    {
      id: 28,
      link: '/mvp/cities/',
      name: 'Кропивницкий (Кировоград)',
    },
    {
      id: 29,
      link: '/mvp/cities/',
      name: 'Лисичанск',
    },
    {
      id: 30,
      link: '/mvp/cities/',
      name: 'Лозовая',
    },
    {
      id: 31,
      link: '/mvp/cities/',
      name: 'Луцк',
    },
    {
      id: 32,
      link: '/mvp/cities/',
      name: 'Львов',
    },
    {
      id: 33,
      link: '/mvp/cities/',
      name: 'Мариуполь',
    },
    {
      id: 34,
      link: '/mvp/cities/',
      name: 'Мелитополь',
    },
    {
      id: 35,
      link: '/mvp/cities/',
      name: 'Мукачево',
    },
    {
      id: 36,
      link: '/mvp/cities/',
      name: 'Нежин',
    },
    {
      id: 37,
      link: '/mvp/cities/',
      name: 'Николаев',
    },
    {
      id: 38,
      link: '/mvp/cities/',
      name: 'Никополь',
    },
    {
      id: 39,
      link: '/mvp/cities/',
      name: 'Новомосковск',
    },
    {
      id: 40,
      link: '/mvp/cities/',
      name: 'Обухов',
    },
    {
      id: 41,
      link: '/mvp/cities/',
      name: 'Одесса',
    },
    {
      id: 42,
      link: '/mvp/cities/',
      name: 'Павлоград',
    },
    {
      id: 43,
      link: '/mvp/cities/',
      name: 'Первомайск',
    },
    {
      id: 44,
      link: '/mvp/cities/',
      name: 'Переяслав-Хмельницкий',
    },
    {
      id: 45,
      link: '/mvp/cities/',
      name: 'Полтава',
    },
    {
      id: 46,
      link: '/mvp/cities/',
      name: 'Прилуки',
    },
    {
      id: 47,
      link: '/mvp/cities/',
      name: 'Ржищев',
    },
    {
      id: 48,
      link: '/mvp/cities/',
      name: 'Ровно',
    },
    {
      id: 49,
      link: '/mvp/cities/',
      name: 'Северодонецк',
    },
    {
      id: 50,
      link: '/mvp/cities/',
      name: 'Славутич',
    },
    {
      id: 51,
      link: '/mvp/cities/',
      name: 'Славянск',
    },
    {
      id: 52,
      link: '/mvp/cities/',
      name: 'Смела',
    },
    {
      id: 53,
      link: '/mvp/cities/',
      name: 'Сумы',
    },
    {
      id: 54,
      link: '/mvp/cities/',
      name: 'Тернополь',
    },
    {
      id: 55,
      link: '/mvp/cities/',
      name: 'Ужгород',
    },
    {
      id: 56,
      link: '/mvp/cities/',
      name: 'Украинка',
    },
    {
      id: 57,
      link: '/mvp/cities',
      name: 'Умань',
    },
    {
      id: 58,
      link: '/mvp/cities/',
      name: 'Фастов',
    },
    {
      id: 59,
      link: '/mvp/cities/',
      name: 'Харьков',
    },
    {
      id: 60,
      link: '/mvp/cities/',
      name: 'Херсон',
    },
    {
      id: 61,
      link: '/mvp/cities/',
      name: 'Хмельницкий',
    },
    {
      id: 62,
      link: '/mvp/cities/',
      name: 'Червоноград',
    },
    {
      id: 63,
      link: '/mvp/cities/',
      name: 'Черкассы',
    },
    {
      id: 64,
      link: '/mvp/cities/',
      name: 'Чернигов',
    },
    {
      id: 65,
      link: '/mvp/cities/',
      name: 'Черновцы',
    },
    {
      id: 66,
      link: '/mvp/cities/',
      name: 'Черноморск (Ильичевск)',
    },
    {
      id: 67,
      link: '/mvp/cities/',
      name: 'Шостка',
    },
    {
      id: 68,
      link: '/mvp/cities/',
      name: 'Энергодар',
    },
    {
      id: 69,
      link: '/mvp/cities/',
      name: 'Яготин',
    },
  ],
}

export default data
