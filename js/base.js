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
  document.querySelectorAll(".content-1400__link").forEach(function (tabsBtnAccordion) {
    tabsBtnAccordion.addEventListener("click", function (event) {
      event.preventDefault();
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll(".tab-content__country").forEach(function (tabContentAccordion) {
        tabContentAccordion.classList.remove("tab-content__active-accordion");
      });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("tab-content__active-accordion");
    });
  });
});

//

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
class Cards {
  isOpened = false;

  get current() {
    return this;
  }

  params = {
    MIN_DESKTOP: 1920,
    MIN_TABLET: 1024,
    DESKTOP_CARDS: 3,
    TABLET_CARDS: 3,
    MOBILE_CARDS: false,
    cardsWrapName: "js-cards-wrap",
    paginationClassName: "pagination",
    btn: "events__button",
    card: "events__item",
    hidden: "is-hidden",
    interaction: "interaction",
    openAnimation: "fade-in",
    closeAnimation: "fade-out",
    showText: "Показать",
    hideText: "Скрыть",
  };

  constructor() {
    this.setCards();
  }

  cardsWrap = document.querySelector(`.${this.params.cardsWrapName}`);
  btn = this.cardsWrap.querySelector(`.${this.params.btn}`);
  cards = Array.from(this.cardsWrap.querySelectorAll(`.${this.params.card}`));

  setHiddenCards(quantity, isResize) {
    if (quantity) {
      this.cards.forEach((el, i) => {
        el.classList.remove(
          this.params.hidden,
          this.params.interaction,
          this.params.openAnimation,
          this.params.closeAnimation
        );

        if (i >= quantity) {
          el.classList.add(this.params.hidden, this.params.interaction);
        }

        const currentCards = this;

        el.addEventListener("animationend", function (evt) {
          if (
            !currentCards.isOpened &&
            evt.target.classList.contains(currentCards.params.interaction)
          ) {
            evt.target.classList.add(currentCards.params.hidden);
            evt.target.classList.remove(
              currentCards.params.closeAnimation,
              currentCards.params.openAnimation
            );
          }
        });

        this.isOpened = false;
        this.btn.textContent = this.params.showText;

        if (isResize === "resize") {
          this.isOpened = false;
          this.btn.textContent = this.params.showText;
        }
      });

      this.btn.classList.remove(this.params.hidden);
    } else {
      this.cards.forEach((el) => {
        el.classList.remove(this.params.hidden);
      });

      this.btn.classList.add(this.params.hidden);
    }

    this.setBtnListener(quantity);
  }

  setBtnListener(quantity) {
    const currentCards = this.current;

    this.btn.outerHTML = this.btn.outerHTML;
    this.btn = this.cardsWrap.querySelector(`.${this.params.btn}`);

    this.btn.addEventListener("click", function () {
      currentCards.isOpened = !currentCards.isOpened;

      if (currentCards.isOpened) {
        currentCards.btn.textContent = currentCards.params.hideText;

        currentCards.cards.forEach((el) => {
          el.classList.remove(currentCards.params.hidden, currentCards.params.closeAnimation);
          el.classList.add(currentCards.params.openAnimation);
        });

        currentCards.cards[quantity].scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      } else {
        currentCards.btn.textContent = currentCards.params.showText;

        currentCards.cards.forEach((el, i) => {
          if (el.classList.contains(currentCards.params.interaction)) {
            el.classList.add(currentCards.params.closeAnimation);
          }
        });

        currentCards.cards[0].scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }
    });
  }

  checkDisplay(evt, currentObj) {
    let isResize;

    if (evt) {
      isResize = evt.type;
    }

    this.windowWidth = Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );

    switch (true) {
      case this.windowWidth > currentObj.params.MIN_DESKTOP:
        this.setHiddenCards(currentObj.params.DESKTOP_CARDS, isResize);
        break;
      case this.windowWidth > currentObj.params.MIN_TABLET &&
        this.windowWidth <= currentObj.params.MIN_DESKTOP:
        this.setHiddenCards(currentObj.params.TABLET_CARDS, isResize);
        break;
      default:
        this.setHiddenCards(currentObj.params.MOBILE_CARDS, isResize);
    }
  }

  setCards() {
    const cards = this.current;

    cards.checkDisplay(false, cards);
    cards.setSlider(cards);

    window.addEventListener("resize", (evt) => {
      cards.checkDisplay(evt, cards);
      cards.setSlider(cards);
    });
  }

  setSlider(cards) {
    if (
      this.windowWidth < cards.params.MIN_TABLET &&
      (!cards.cardsSlider || cards.cardsSlider.destroyed)
    ) {
      const pagination = document.createElement("div");
      pagination.classList.add(cards.params.paginationClassName);
      cards.cardsWrap.append(pagination);

      cards.cardsWrap.classList.add("swiper-container");
      cards.cardsWrap.children[0].classList.add("swiper-wrapper");

      cards.cardsSlider = new Swiper(`.${cards.params.cardsWrapName}`, {
        slidesPerColumnFill: "row",
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerView: 1,
        spaceBetween: 20,

        pagination: {
          el: `.${cards.params.cardsWrapName} .${cards.params.paginationClassName}`,
        },

        on: {
          beforeInit() {
            document.querySelectorAll(`.${cards.params.card}`).forEach((el) => {
              el.classList.add("swiper-slide");
            });
          },
          beforeDestroy() {
            this.slides.forEach((el) => {
              el.classList.remove("swiper-slide");
              el.removeAttribute("role");
              el.removeAttribute("aria-label");
            });
            this.pagination.el.remove();
          },
        },
      });
    } else if (this.windowWidth >= cards.params.MIN_TABLET && cards.cardsSlider) {
      cards.cardsSlider.destroy();
      cards.cardsWrap.classList.remove("swiper-container");
      cards.cardsWrap.children[0].classList.remove("swiper-wrapper");
      cards.cardsWrap.children[0].removeAttribute("aria-live");
      cards.cardsWrap.children[0].removeAttribute("id");
    }
  }
}

const cards = new Cards();

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
