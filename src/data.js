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
}

export default data
