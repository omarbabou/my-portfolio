const body = document.querySelector('body');
const navigation = document.querySelector('.icons');
const portfolio = document.querySelector('#portfolio');

// --------------------MOBILE-MENU--------------------------

navigation.addEventListener('click', () => {
  body.classList.toggle('open-menu');
});

const menuLink = document.querySelectorAll('.ul-link');

menuLink.forEach((e) => e.addEventListener('click', () => {
  body.classList.remove('open-menu');
}));

//  -----------------POPUP-WINDOW-------------

const works = [
  {
    id: 1,
    title: 'BookStore',
    image: '/img/bkstore.png',
    imageAlt: 'Awesome book',
    canopy: ['CANOPY', 'Front-End Dev', '2022'],
    descript: 'The Bookstore-app is web applicaton build with react/redux that helps users to keep track to their local biblio(books). User can add books to the store and the API updating as well as he is progressing; User can aslo delete book form the API and the store.',
    languages: ['react', 'redux', 'Api'],
    sourcebtn: 'https://github.com/omarbabou/bookstore-app',
    liveBtn: 'https://idriss-omar-bookstore-app.netlify.app/',
  },
  {
    id: 2,
    title: 'Tasty Food',
    image: '/img/food.png',
    imageAlt: 'my second work',
    canopy: ['CANOPY', 'Back End Dev', '2022'],
    descript: 'Capstone project done in Microverse for ending Module1. In this capstone, different functionalities are implemented by using HTML and CSS. Page routing using different links, project management and local storage, and DOM manipulation to display and keep items.',
    languages: ['html', 'css', 'javaScript'],
    sourcebtn: 'https://github.com/omarbabou/taste-food-capstone',
    liveBtn: 'https://idriss-omar-tasty-food-capstone.netlify.app/',
  },
  {
    id: 3,
    title: 'TVMaze-APP',
    image: '/img/tvmaze.png',
    imageAlt: 'my third work',
    canopy: ['CANOPY', 'Back End Dev', '2022'],
    descript: 'This project is a web app about Movies, we fetched all data from TV MAZE API, Users can like movies and also give a comment. All data are recorded in the involvement API and also displayed on the screen.',
    languages: ['javaScript', 'css', 'Api'],
    sourcebtn: 'https://github.com/omarbabou/JS-Capstone-Webapp',
    liveBtn: 'https://idriss-omar-js-capstone.netlify.app/',
  },
  {
    id: 4,
    title: 'Leaderboard',
    image: '/img/leader.png',
    imageAlt: 'my fourth work',
    canopy: ['CANOPY', 'Back End Dev', '2022'],
    descript: 'The leaderboard is a javascript web app that display scores from players. Teh players enter his name and his score the data will be displayed to the screen and thanks to leaderboard API it will be save the way that others can see the classification.',
    languages: ['javaScript', 'html/css', 'Api'],
    sourcebtn: 'https://github.com/omarbabou/Leaderboard',
    liveBtn: 'https://idriss-omar-leaderboard.netlify.app/',
  },
];

for (let i = 0; i < works.length; i += 1) {
  const work = works[i];

  portfolio.innerHTML += `
      <div class="card card-1" id="btn-${work.id}">
        <img src="${work.image}" alt="${work.imageAlt}">
        <div class="details">
            <h2>${work.title}</h2>
            <div class="canopy">
                <h4>${work.canopy[0]}</h4>
                <ul>
                    <li>${work.canopy[1]}</li>
                    <li>${work.canopy[2]}</li>
                </ul>
            </div>
            <p class="card-descript">${work.descript}</p>
             <ul class="languages">
                <li>${work.languages[0]}</li>
                <li>${work.languages[1]}</li>
                <li>${work.languages[2]}</li>
            </ul> 
            <button data-popup-ref="myPopup">See project</button>
      </div>

      <section class="popup" data-popup-id="myPopup">
      <div class="popup-content">
      <div class="title popup-title">
        <h2 class="popup-h2">Tonic</h2>
        <i class="fas fa-times close-popup" data-dismiss-popup></i>
        <div class="canopy popup-canopy">
          <h4>Canopy</h4>
          <ul>
            <li>Back End Dev</li>
            <li>2015</li>
          </ul>
        </div>

         <img src="${work.image}" alt="${work.imageAlt}" />
       
      </div>
      <div class="window-details">
        <p class="window-descript">
         ${work.descript}
        </p>
        <div class="aside-clm">
          <ul class="window-languages">
            <li>${work.languages[0]}</li>
            <li>${work.languages[1]}</li>
            <li>${work.languages[2]}</li>
            <li>${work.languages[3]}</li>
            <li>${work.languages[4]}</li>
            <li>${work.languages[5]}</li>
          </ul>
          <div class="window-btn-links">
            <a class="btn-live link" target="_blank" href="#"
              >See live  &nbsp; <i class="fas fa-rss"></i></a>
            <a class="btn-code link" target="_blank" href="#"
              >See source &nbsp; 
              <i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </div> 
    </section>
  `;
}

const popupsBtn = document.querySelectorAll('[data-popup-ref]');
const popupTitle = document.querySelector('.popup-h2');
const popImage = document.querySelector('.popup-title img');
const projectDetails = document.querySelector('.window-descript');
const language = document.querySelector('.window-languages');
const liveLink = document.querySelector('.btn-live');
const ghLink = document.querySelector('.btn-code');

popupsBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const popupId = btn.getAttribute('data-popup-ref');
    const id = Number(btn.parentNode.parentNode.id.split('-')[1]);
    const popup = document.querySelector(`[data-popup-id='${popupId}']`);
    const {
      title, image, imageAlt, descript, languages, sourcebtn, liveBtn,
    } = works.find((work) => work.id === id);

    if (popup !== undefined && popup !== null) {
      const popupContent = popup.querySelector('.popup-content');
      const closeBtns = popup.querySelectorAll('[data-dismiss-popup]');

      closeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          setTimeout(() => {
            popup.classList.remove('active');
          }, 250);
          popupContent.classList.remove('active');
        });
      });

      popupContent.addEventListener('click', (event) => {
        event.stopPropagation();
      });

      popup.classList.add('active');
      setTimeout(() => {
        popupTitle.innerText = title;
        popImage.setAttribute('src', image);
        popImage.setAttribute('alt', imageAlt);
        projectDetails.innerText = descript;
        language.innerHTML = languages
          .map((lang) => `<li>${lang}</li>`)
          .join('');
        liveLink.setAttribute('href', liveBtn);
        ghLink.setAttribute('href', sourcebtn);

        popupContent.classList.add('active');
      }, 1);
    }
  });
});

function isLower(str) {
  return /[a-z]/.test(str) && !/[A-Z]/.test(str);
}

const form = document.querySelector('form');
const email = document.querySelector('#mail');
const errorMessageField = document.querySelector('small');

form.addEventListener('submit', (e) => {
  if (!isLower(email.value)) {
    e.preventDefault();
    errorMessageField.textContent = 'Please, make your email lowercase.';
    email.style.border = '2px solid green';
  } else {
    errorMessageField.textContent = '';
    email.style.border = '2px solid black';
    email.submit();
  }
});

const Fname = document.querySelector('#name');
const message = document.querySelector('textarea');

function populateStorage() {
  const nameField = document.querySelector('#name').value;
  const emailField = document.querySelector('#mail').value;
  const messageField = document.querySelector('textarea').value;

  const formInputs = {
    name: nameField,
    email: emailField,
    msg: messageField,
  };
  localStorage.setItem('formInputsObj', JSON.stringify(formInputs));
}

const parsedFormInputs = JSON.parse(localStorage.getItem('formInputsObj'));

if (parsedFormInputs) {
  Fname.value = parsedFormInputs.name;
  email.value = parsedFormInputs.email;
  message.value = parsedFormInputs.msg;
}

form.addEventListener('input', () => {
  populateStorage();
});
