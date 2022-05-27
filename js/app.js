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
    title: 'Tonic',
    image: '/img/Snapshoot_Portfolio.png',
    popupTitleImage: '/img/Snapshoot_Portfolio.png',
    liveIconImage: '/img/popup1.png',
    sourceIconImage: '/img/github1.png',
    imageAlt: 'Awesome book',
    canopy: ['CANOPY', 'Front-End Dev', '2022'],
    descript:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'JavaScript', 'github', 'ruby', 'Bootstraps'],
    sourcebtn: '#',
    liveBtn: '#',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    image: '/img/Snapshoot_Portfolio.png',
    popupTitleImage: '/img/Snapshoot_Portfolio.png',
    liveIconImage: '/img/popup1.png',
    sourceIconImage: '/img/github1.png',
    imageAlt: 'my second work project',
    canopy: ['FACEBOOK', 'Back End Dev', '2015'],
    descript:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    languages: ['html', 'css', 'JavaScript', 'github', 'ruby', 'Bootstraps'],
    sourcebtn: '#',
    liveBtn: '#',
  },
  {
    id: 3,
    title: 'Facebook 360',
    image: '/img/Snapshoot_Portfolio.png',
    popupTitleImage: '/img/Snapshoot_Portfolio.png',
    liveIconImage: '/img/popup1.png',
    sourceIconImage: '/img/github1.png',
    imageAlt: 'my third work',
    canopy: ['FACEBOOK', 'Back End Dev', '2015'],
    descript:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    languages: ['html', 'css', 'JavaScript', 'github', 'ruby', 'Bootstraps'],
    sourcebtn: '#',
    liveBtn: '#',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    image: '/img/Snapshoot_Portfolio.png',
    popupTitleImage: '/img/snapshootportfolio(3).svg',
    liveIconImage: '/img/popup1.png',
    sourceIconImage: '/img/github1.png',
    imageAlt: 'my fourth work',
    canopy: ['FACEBOOK ', 'Lead Developer ', '2022'],
    descript:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    languages: ['html', 'css', 'JavaScript', 'github', 'ruby', 'Bootstraps'],
    sourcebtn: '#',
    liveBtn: '#',
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
        <div class="img-1">
         <img src="${work.image}" alt="${work.imageAlt}" />
        </div>
       
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
              >See live  <i class="fas fa-rss"></i></a>
            <a class="btn-code link" target="_blank" href="#"
              >See source
              <i class="fab fa-github"></a>
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
