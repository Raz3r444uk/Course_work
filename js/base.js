// Header swiper//
const swiper = new Swiper(".slider", {
  allowTouchMove: false,
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  speed: 5000,
  autoplay: {
    delay: 5000,
  },
});

// Galary select //

const element = document.querySelector("select");
const choices = new Choices(element, {
  searchEnabled: false,
  position: "",
  placeholder: true,
  itemSelectText: "",
});

// Header container bottom dropdown//

const params = {
  btnClassName: "container-bottom-content__button",
  activeClassName: "is-active",
  disabledClassName: "is-disabled",
};

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`[data-target="${path}"]`);

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();

// Galary swiper//

let gallerySlider = new Swiper(".galary-swiper", {
  slidesPerColumnFill: "row",
  slidesPerView: 1,
  slidesPerColumn: 1,
  spaceBetween: 20,
  pagination: {
    el: ".galary .galary-swiper__navigation-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".galary .arrow-right",
    prevEl: ".galary .arrow-left",
  },

  breakpoints: {
    581: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
    },
  },

  a11y: false,

  on: {
    beforeResize: function () {
      this.slides.forEach((el) => {
        el.style.marginTop = "";
      });
    },
  },
});

// Catalog tabs //

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tabs__btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll(".tab-content").forEach(function (tabContent) {
        tabContent.classList.remove("tab-content-active");
      });
      document.querySelector(`[data-target="${path}"]`).classList.add("tab-content-active");
    });
  });
});

// Catalog accordeon//

$(function () {
  $("#accordion-belgium").accordion({
    heightStyle: "content",
    collapsible: "true",
  });
  $("#accordion-germany").accordion({
    heightStyle: "content",
    collapsible: "true",
  });
  $("#accordion-france").accordion({
    heightStyle: "content",
    collapsible: "true",
  });
  $("#accordion-rus").accordion({
    heightStyle: "content",
    collapsible: "true",
  });
  $("#accordion-italy").accordion({
    heightStyle: "content",
    collapsible: "true",
  });
});

// Tabs accordeon //

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".js-tab-paiters").forEach(function (tabsBtnAccordion) {
    tabsBtnAccordion.addEventListener("click", function (event) {
      event.preventDefault();
      const path = event.currentTarget.dataset.path;
      const activeTab = document.querySelector(".tab-content-active");
      activeTab.querySelectorAll(".tab-content__country").forEach(function (tabContentAccordion) {
        tabContentAccordion.classList.remove("tab-content__active-accordion");
      });
      activeTab
        .querySelector(`[data-target="${path}"]`)
        .classList.add("tab-content__active-accordion");
    });
  });
});

// Hidden cards//

document.querySelectorAll(".events__button").forEach(function (eventsBtn) {
  eventsBtn.addEventListener("click", function (event) {
    const path = event.currentTarget.dataset.path;
    document.querySelectorAll(".events__item-not-active").forEach(function (eventsContent) {
      eventsContent.classList.remove("events__item-not-active");
    });
  });
});

document.querySelectorAll(".events__button").forEach(function (eventsBtnOff) {
  eventsBtnOff.addEventListener("click", function (event) {
    const path = event.currentTarget.dataset.path;
    document.querySelectorAll(".events__button").forEach(function (eventsBtnNone) {
      eventsBtnNone.classList.remove("events__button");
    });
  });
});

// Editions swiper//

let editionsSlider = new Swiper(".editions-swiper", {
  slidesPerColumnFill: "row",
  icons: false,
  slidesPerView: 1,
  slidesPerColumn: 1,
  spaceBetween: 20,
  pagination: {
    el: ".editions .editions-swiper__navigation-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".editions .arrow-right",
    prevEl: ".editions .arrow-left",
  },

  breakpoints: {
    581: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 3,
      slidesPerColumn: 1,
      spaceBetween: 50,
    },
  },

  a11y: false,

  on: {
    beforeResize: function () {
      this.slides.forEach((el) => {
        el.style.marginTop = "";
      });
    },
  },
});

// Hidden cards //

// Projects swiper

let projectsSlider = new Swiper(".projects-swiper", {
  slidesPerColumnFill: "row",
  icons: false,
  slidesPerView: 3,
  slidesPerColumn: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".projects .arrow-projects-right",
    prevEl: ".projects .arrow-projects-left",
  },

  breakpoints: {
    581: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 3,
      slidesPerColumn: 1,
      spaceBetween: 50,
    },
  },

  a11y: false,

  on: {
    beforeResize: function () {
      this.slides.forEach((el) => {
        el.style.marginTop = "";
      });
    },
  },
});

// Maps //

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.75883323, 37.63738968],
    zoom: 14,
  });

  myMap.controls.remove("trafficControl");
  myMap.controls.remove("rulerControl");
  myMap.controls.remove("searchControl");
  myMap.controls.remove("typeSelector");
  myMap.controls.remove("fullscreenControl");
  myMap.controls.remove("geolocationControl");
  myMap.controls.remove("zoomControl");

  myMap.controls.add("geolocationControl", {
    float: "right",
    position: {
      bottom: "360px",
      right: "15px",
    },
  });

  myMap.controls.add("zoomControl", {
    size: "small",
    float: "right",
    position: {
      bottom: "400px",
      right: "15px",
    },
  });

  var myPlacemark = new ymaps.Placemark(
    [55.758468, 37.601088],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "/img/Ellipse.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [0, 0],
    }
  );

  myMap.geoObjects.add(myPlacemark);
}

// Validate //
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);


new JustValidate('.content-left__form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLenght: 20,
    },

    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
    }
  },

  messages: {
 
    tel: {
      required: 'Укажите ваш телефон',
      function: 'Телефон должен состоять из 10 цифр'
    },

    name: {
      minLength: 'Имя должно состоять минимум из 3 символов',
      maxLenght: 'Имя должно состоять не более 20 символов',
      required: 'Как вас зовут?'
    },
  },

});
