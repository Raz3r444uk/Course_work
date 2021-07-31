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
  $("#accordion").accordion({
    heightStyle: "content",
    collapsible: "true"
  })
});
