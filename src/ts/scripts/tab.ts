const hideTarget = (id: string) => {
  const targetElement = document.querySelector(`#${id}`);
  targetElement?.classList.add("hidden");
};

const showTarget = (id: string) => {
  const targetElement = document.querySelector(`#${id}`);
  targetElement?.classList.remove("hidden");
};

document.addEventListener("DOMContentLoaded", () => {
  let tabs: NodeListOf<HTMLDivElement> = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    if (tab.getAttribute("data-default") === "true") {
      tab.classList.add("active");
      const targetId = tab.getAttribute("data-target");
      if(targetId) showTarget(targetId)
    }
    tab.addEventListener("click", () => {
      const id = tab.id;
      tabs.forEach((dis) => {
        dis.classList.remove("active");
        const tId = dis.getAttribute("data-target");
        if(tId) hideTarget(tId)
      });
      const targetId = tab.getAttribute("data-target");
      tab.classList.add("active");
      if(targetId) showTarget(targetId)
    });
  });
});
