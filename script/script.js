document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector("#openDialogBtn");
  const dialog = document?.querySelector("#dialog");
  const closeBtn = dialog.querySelector("#closeDialogBtn");

  openBtn.addEventListener("click", () => {
    dialog?.showModal();
  });

  closeBtn.addEventListener("click", () => {
    dialog.close();
  });
});
