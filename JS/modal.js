import { refs } from "./refs";

refs.openModal.addEventListener("click", () => {
    refs.modal.style.display = "block";
    refs.btnAdd.style.display = "none";
    
  });
  
  refs.closeBtn.addEventListener("click", () => {
    refs.modal.style.display = "none";
    refs.btnAdd.style.display = "block";
  });
  
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      refs.modal.style.display = "none";
    }
  });