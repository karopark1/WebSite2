const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".primary-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const dialog = document.querySelector(".image-dialog");
const dialogImage = dialog?.querySelector("img");
const dialogCaption = dialog?.querySelector("p");
const closeButton = dialog?.querySelector(".dialog-close");

document.querySelectorAll("[data-full]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    if (!dialog || !dialogImage || !dialogCaption) return;
    dialogImage.src = trigger.dataset.full;
    dialogImage.alt = trigger.dataset.caption || "Expanded image";
    dialogCaption.textContent = trigger.dataset.caption || "";
    dialog.showModal();
  });
});

closeButton?.addEventListener("click", () => dialog.close());

dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog?.open) dialog.close();
});
