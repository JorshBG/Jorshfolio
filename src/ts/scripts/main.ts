const handleTheme = () => {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "dark");
  }

  document
    .querySelector("html")
    ?.setAttribute("data-mode", localStorage.getItem("theme") ?? "dark");

  

  const themeOptions = document.querySelectorAll(".toggle-theme");
  themeOptions?.forEach((option) => {
    option.addEventListener("click", () => {
      document
        .querySelector("html")
        ?.setAttribute(
          "data-mode",
          option.getAttribute("data-change-theme") ?? "light"
        );
      localStorage.setItem(
        "theme",
        option.getAttribute("data-change-theme") ?? "light"
      );
    });
  });
};

const toggleMenus = () => {
  const menus: NodeListOf<HTMLDivElement> =
    document.querySelectorAll("[data-menu]");
  menus?.forEach((menu) => {
    menu.addEventListener("click", () => {
      const theme = document.querySelector("#options-theme");
      const lang = document.querySelector("#options-lang");
      if (!theme?.classList.contains("hidden")) {
        theme?.classList.add("hidden");
      }
      if (!lang?.classList.contains("hidden")) {
        lang?.classList.add("hidden");
      }
      const options = document.querySelector("#options");
      const selections = document.querySelector("#selections");
      // options?.classList.toggle('hidden')
      selections?.classList.toggle("hidden");
      const set = document.querySelector(
        `#${menu.getAttribute("data-target")}`
      );
      set?.classList.remove("hidden");
      set?.classList.add("flex");
    });
  });
};

const toggleOptions = () => {
  const toggleOptions = document.querySelector(
    '[data-toggle="toggle-options"]'
  );
  toggleOptions?.addEventListener("click", () => {
    const target = document.querySelector(
      `${toggleOptions.getAttribute("data-target")}`
    );
    target?.classList.toggle("hidden");
  });
};

const handleLang = () => {
  const togglersLang = document.querySelectorAll(".toggle-lang");
  togglersLang?.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      document.querySelector("#options")?.classList.add("hidden");
      document.querySelector("#options-theme")?.classList.add("hidden");
      document.querySelector("#options-lang")?.classList.add("hidden");
      document.querySelector("#selections")?.classList.add("hidden");
      if (
        toggle.getAttribute("data-change-language") === "en" &&
        window.location.pathname !== "/en"
      ) {
        window.location.href = "/en";
      } else if (
        toggle.getAttribute("data-change-language") === "es" &&
        window.location.pathname !== "/"
      ) {
        window.location.href = "/";
      }
      localStorage.setItem(
        "language",
        toggle.getAttribute("data-change-language") ?? "en"
      );
    });
  });
};

const rotateToMouse = (e: MouseEvent, card: HTMLDivElement) => {
  const element = card;
  let bounds = element.getBoundingClientRect();
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2,
  };
  const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

  element.style.transform = `
    scale3d(1.015, 1.015, 1.015)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;
};

const init3dCards = () => {
  const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll(".card");

  cards?.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.addEventListener("mousemove", (e) => rotateToMouse(e, card));
    });

    card.addEventListener("mouseleave", () => {
      card.removeEventListener("mousemove", (e) => rotateToMouse(e, card));
      card.style.transform = "";
    });
  });
};

const loadLanguagues = () => {
  if (localStorage.getItem("language")) {
    if (
      window.location.pathname !== "/" &&
      localStorage.getItem("language") === "es"
    ) {
      window.location.pathname = "/";
    } else if (
      localStorage.getItem("language") === "en" &&
      !(window.location.pathname === "/en" || window.location.pathname === "/en/")
    ) {
      window.location.pathname = "/en";
    }
  } else {
    if (navigator.language.includes("en")) {
      window.location.pathname = "/en";
      localStorage.setItem("language", "en");
    } else if (navigator.language.includes("es")) {
      window.location.pathname = "/";
      localStorage.setItem("language", "es");
    } else {
      window.location.pathname = "/en";
      localStorage.setItem("language", "en");
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  handleTheme();
  toggleMenus();
  toggleOptions();
  handleLang();
  init3dCards();
  loadLanguagues();
});
