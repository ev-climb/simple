const users = [
  {
    id: '001',
    nik: 'ev-ev',
    name: 'Евгений Евсеев',
    img: '/images/users/evgeny/evgeny.png',
    quote: 'Пилю соц сеть прям как Цукерберг',
    friends: [
      {
        id: '002',
        nik: 'sandra',
        name: 'Александра Евсеева',
        img: '/images/users/alexandra/avatar-test-big.jpg',
        quote: 'Систематически, старательно, сосредоточено и решительно',
      },
      {
        id: '003',
        nik: 'chendler',
        name: 'Чендлер',
        img: '/images/users/chandler/chandler.jpeg',
        quote: "I'm not great at the advice. Can I interest you in a sarcastic comment?",
      },
      {
        id: '004',
        nik: 'ross',
        name: 'Росс',
        img: '/images/users/ross/ross.jpg',
        quote:
          "Just so you know, it's not that common, it doesn't happen to every guy, and it is a big deal!",
      },
      {
        id: '005',
        nik: 'joey',
        name: 'Джо',
        img: '/images/users/joey/joey.jpeg',
        quote: 'Джо не делится едой',
      },
      {
        id: '006',
        nik: 'phoebe',
        name: 'Фиби',
        img: '/images/users/phoebe/phoebe.jpeg',
        quote: 'Драный кот, драный кот, у него пустой живот',
      },
      {
        id: '007',
        nik: 'monica',
        name: 'Моника',
        img: '/images/users/monica/monica.webp',
        quote:
          "I know! I'm a neat freak, okay? Is it possible that I'm not as upset about this as you are?",
      },
      {
        id: '008',
        nik: 'rachel',
        name: 'Рейчал',
        img: '/images/users/rachel/rachel.jpeg',
        quote: "Oh, I'm sorry. Did my back hurt your knife?",
      },
    ],
    dialogues: [
      {
        userName: 'Александра Евсеева',
        userId: '2',
        userAvatar: '/images/users/alexandra/avatar-test-big.jpg',
        dialogue: [
          {
            userId: '2',
            messageId: '1',
            time: '22:49',
            date: '6.05.2023',
            text: 'Привет! Как дела?',
          },
          {
            userId: '1',
            messageId: '2',
            time: '22:49',
            date: '6.05.2023',
            text: 'Привет! Всё супер, как твои?',
          },
          {
            userId: '2',
            messageId: '3',
            time: '22:49',
            date: '6.05.2023',
            text: 'Всё отлично! Чем занят?',
          },
          {
            userId: '1',
            messageId: '4',
            time: '22:49',
            date: '6.05.2023',
            text: 'Пишу диалог сам с собой, а ты?',
          },
          {
            userId: '2',
            messageId: '5',
            time: '22:49',
            date: '6.05.2023',
            text: 'лол',
          },
        ],
      },
      {
        userName: 'Чендлер',
        userId: '3',
        userAvatar: '/images/users/chandler/chandler.jpeg',
        dialogue: [
          {
            userId: '3',
            messageId: '1',
            time: '22:49',
            date: '6.05.2023',
            text: 'Привет! Как дела?',
          },
          {
            userId: '1',
            messageId: '2',
            time: '22:49',
            date: '6.05.2023',
            text: 'Привет! Всё супер, как твои?',
          },
          {
            userId: '3',
            messageId: '3',
            time: '22:49',
            date: '6.05.2023',
            text: 'Надо бы пересмотреть сериал',
          },
          {
            userId: '1',
            messageId: '4',
            time: '22:49',
            date: '6.05.2023',
            text: 'Какой?',
          },
          {
            userId: '3',
            messageId: '5',
            time: '22:49',
            date: '6.05.2023',
            text: 'Свой. А то не помню ни одного диалога',
          },
        ],
      },
      {
        userName: 'Росс',
        userId: '4',
        userAvatar: '/images/users/ross/ross.jpg',
        dialogue: [
          {
            userId: '4',
            messageId: '1',
            time: '22:49',
            date: '6.05.2023',
            text: 'Привет! Как дела?',
          },
          {
            userId: '1',
            messageId: '2',
            time: '22:49',
            date: '6.05.2023',
            text: 'Ты кто?',
          },
          {
            userId: '4',
            messageId: '3',
            time: '22:49',
            date: '6.05.2023',
            text: 'Я Росс',
          },
          {
            userId: '1',
            messageId: '4',
            time: '22:49',
            date: '6.05.2023',
            text: 'Где росс?',
          },
          {
            userId: '4',
            messageId: '5',
            time: '22:49',
            date: '6.05.2023',
            text: 'Очень смешно',
          },
        ],
      },
      {
        userName: 'Джо',
        userId: '5',
        userAvatar: '/images/users/joey/joey.jpeg',
        dialogue: [
          {
            userId: '5',
            messageId: '1',
            time: '22:49',
            date: '6.05.2023',
            text: 'Привет! Как дела?',
          },
          {
            userId: '1',
            messageId: '2',
            time: '22:49',
            date: '6.05.2023',
            text: 'Норм',
          },
          {
            userId: '5',
            messageId: '3',
            time: '22:49',
            date: '6.05.2023',
            text: 'Что норм?',
          },
          {
            userId: '1',
            messageId: '4',
            time: '22:49',
            date: '6.05.2023',
            text: 'Всё норм. Я норм. Ты норм?',
          },
          {
            userId: '5',
            messageId: '5',
            time: '22:49',
            date: '6.05.2023',
            text: 'норм',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    nik: 'sandra',
    name: 'Александра Евсеева',
    img: '/images/users/alexandra/avatar-test-big.jpg',
    quote: 'Систематически, старательно, сосредоточено и решительно',
  },
  {
    id: '3',
    nik: 'chendler',
    name: 'Чендлер',
    img: '/images/users/chandler/chandler.jpeg',
    quote: "I'm not great at the advice. Can I interest you in a sarcastic comment?",
  },
  {
    id: '4',
    nik: 'ross',
    name: 'Росс',
    img: '/images/users/ross/ross.jpg',
    quote:
      "Just so you know, it's not that common, it doesn't happen to every guy, and it is a big deal!",
  },
  {
    id: '5',
    nik: 'joey',
    name: 'Джо',
    img: '/images/users/joey/joey.jpeg',
    quote: 'Джо не делится едой',
  },
  {
    id: '6',
    nik: 'phoebe',
    name: 'Фиби',
    img: '/images/users/phoebe/phoebe.jpeg',
    quote: 'Драный кот, драный кот, у него пустой живот',
  },
  {
    id: '7',
    nik: 'monica',
    name: 'Моника',
    img: '/images/users/monica/monica.webp',
    quote:
      "I know! I'm a neat freak, okay? Is it possible that I'm not as upset about this as you are?",
  },
  {
    id: '8',
    nik: 'rachel',
    name: 'Рейчал',
    img: '/images/users/rachel/rachel.jpeg',
    quote: "Oh, I'm sorry. Did my back hurt your knife?",
  },
];
export default users;