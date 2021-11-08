// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Clark',
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'おはようございます！',
  greetingAfternoon: 'こんにちは,',
  greetingEvening: 'こんばんは,',
  greetingNight: 'おやすみ！',

  // Weather
  weatherKey: 'e30912fb0e0b77fff771b184d1fd8ab0',
  weatherIcons: 'White', // 'Nord', 'Dark', 'White'
  weatherUnit: 'F', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '36.778259',
  defaultLongitude: '-119.417931',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/mail/u/0/#inbox',
    },
    {
      id: '3',
      name: 'Todoist',
      icon: 'trello',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Odysee',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'book',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Jisho',
        link: 'https://jisho.org/',
      },
      {
        name: 'Japanese',
        link: 'www.guidetojapanese.org/',
      },
      {
        name: 'MAL',
        link: 'https://myanimelist.net/',
      },
      {
        name: 'YOASOBI',
        link: 'https://www.youtube.com/watch?v=VyvhvlYvRnc',
      },
    ],
    secondList: [
      {
        name: 'Keyboards',
        link: 'https://www.reddit.com/r/MechanicalKeyboards/',
      },
      {
        name: 'Discord',
        link: 'https://discord.com/channels/@me',
      },
      {
        name: 'Code',
        link: 'https://www.w3schools.com/',
      },
      {
        name: 'Ricing',
        link: 'https://www.reddit.com/r/unixporn/',
      },
    ],
  },
};
