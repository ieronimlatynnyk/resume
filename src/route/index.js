// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: { 
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '500$ в місяц',
  address: 'Ukraine, kyiv'
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: "mailto:ivanov@mail.com",
    },
    phone: {
      text: "+380670000123",
      href: "tel:+380670000123",
    },
    linkedin: {
      href: "https://www.linkedin.com/in/dmytro-test",
      text: "LinkedIn",
    }
  }
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('', function (req, res) {
  
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },
    
    header,

    main: {
      summary: {
        title: 'summary',
        text: `Open-minded for new tehnologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },

      experience: { 
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer, 
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },
    
    header,

    main: {
      skills: [ 
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 9,
          isTop: true,
        },
        {
          name: 'Git & Terminal',
          point: 8,
          isTop: false,
        },
        {
          name: 'VS Code & NPM',
          point: 7,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        { name: 'bike', isMain: true },
        { name: 'Volleyball', isMain: false },
        { name: 'batut', isMain: true },
      ]
    },

    footer, 
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },
    
    header,

    main: {
      educations: [
        { name:'Школа', isEnd: true},
        { name:'H3', isEnd: false },
        { name:'навчальний заклад', isEnd: true }
      ],

      certificates: [
        { name:'student', id: 828432 },
        { name:'student', id: 82827472 },
        { name:'student', id: 82824882 }
      ]
    },

    footer, 
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },
    
    header,

    main: {
      works: [{
        position: 'Junior Fullstack Developer',
        company: {
          name: 'IT Brains',
          url: 'https://it-brains.com.ua/',
        },
        duration: {
          from: '10.10.2022',
          to: null,
        },

        projectAmount: 3,

        projects: [
          {
          name: 'Resume',
          url: 'https://resume.com.ua/',
          about: 'Airbnb competitor. High-load application for searching apartments',
          stacks: [
          {
            name: 'React.js',
          },
          {
            name: 'HTML / CSS',
          },
          {
            name: 'Nodesjs',
          },
        ],
        awards: [
          {
            name: 'Background verification - is a feature that provides users to prove that they are real persons.',
          },
          {
            name: 'Preparing SEO optimized pages. The automated process of getting data for the app from documents.',
          },
        ],
        stackAmount: 7,
        stackAmount: 4,
        },
      ],
      }],
    },

    footer, 
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
