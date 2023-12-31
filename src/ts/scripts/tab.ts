document.addEventListener("DOMContentLoaded", () => {
  let tabs: NodeListOf<HTMLDivElement> = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const id = tab.id;
      tabs.forEach(dis => {
        dis.classList.remove('active')
      })
      tab.classList.add('active')
    });
  });
});
