document.addEventListener("DOMContentLoaded", function () {
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

  //header search//

  const searchOpen = document.querySelector(".js-search-open");
  const form = document.querySelector(".js-search-form");
  const searchClose = form.querySelector(".js-search-close");

  searchOpen.addEventListener("click", () => {
    form.classList.add("header__container-bottom-form__active");
  });

  searchClose.addEventListener("click", () => {
    form.classList.remove("header__container-bottom-form__active");
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

      974: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 34,
      },

      1700: {
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

  const countryBtns = document.querySelectorAll(".tabs__btn");

  countryBtns.forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll(".tab-content").forEach(function (tabContent) {
        tabContent.classList.remove("tab-content-active");
      });
      document.querySelector(`[data-target="${path}"]`).classList.add("tab-content-active");
      countryBtns.forEach(function (el) {
        el.classList.remove("is-active");
      });

      this.classList.add(".is-active");
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
      1024: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 49,
      },

      1700: {
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
      1024: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 50,
      },

      1700: {
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
    var myMap = new ymaps.Map(
      "map",
      {
        center: [55.75883323, 37.63738968],
        zoom: 14,
        controls: ["geolocationControl", "zoomControl"],
      },
      {
        suppressMapOpenBlock: true,
        geolocationControlSize: "large",
        geolocationControlPosition: { top: "100px", right: "20px" },
        geolocationControlFloat: "none",
        zoomControlSize: "small",
        zoomControlFloat: "none",
        zoomControlPosition: { top: "150px", right: "20px" },
      }
    );
    myMap.controls.add("geolocationControl", {
      size: "large",
      float: "none",
      position: {
        bottom: "360px",
        right: "20px",
      },
    });

    myMap.controls.add("zoomControl", {
      size: "small",
      float: "none",
      position: {
        bottom: "400px",
        right: "20px",
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

  new JustValidate(".content-left__form", {
    rules: {
      name: {
        required: true,
        minLength: 3,
        maxLenght: 20,
      },

      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        },
      },
    },

    messages: {
      tel: {
        required: "Укажите ваш телефон",
        function: "Телефон должен состоять из 10 цифр",
      },

      name: {
        minLength: "Имя должно состоять минимум из 3 символов",
        maxLenght: "Имя должно состоять не более 20 символов",
        required: "Как вас зовут?",
      },
    },
  });

  // burger//

  function setBurger(params) {
    const burger = document.querySelector(`.${params.btnClass}`);
    const menuBurger = document.querySelector(`.${params.menuClass}`);
    const connectButton = document.querySelector(`.${params.menuClass}`);

    connectButton.addEventListener("animationend", function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
      }
    });

    menuBurger.addEventListener("animationend", function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
      }
    });

    burger.addEventListener("click", function () {
      this.classList.toggle(params.activeClass);

      if (
        !menuBurger.classList.contains(params.activeClass) &&
        !menuBurger.classList.contains(params.hiddenClass)
      ) {
        menuBurger.classList.add(params.activeClass);
      } else {
        menuBurger.classList.add(params.hiddenClass);
      }
    });
  }

  // здесь мы вызываем функцию и передаем в нее классы наших элементов

  setBurger({
    btnClass: "burger-menu", // класс бургера
    menuClass: "header__navigation-list", // класс меню
    connectButton: "header__link",
    activeClass: "is-opened", // класс открытого состояния
    hiddenClass: "is-closed", // класс закрывающегося состояния (удаляется сразу после закрытия)
  });
});
