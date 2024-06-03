import { refs } from './refs';
export function modal() {
  refs.openModal.addEventListener('click', () => {
    refs.modal.style.display = 'block';
    refs.btnAdd.style.display = 'none';
  });

  refs.closeBtn.addEventListener('click', () => {
    refs.modal.style.display = 'none';
    refs.btnAdd.style.display = 'block';
  });

  window.addEventListener('click', e => {
    if (e.target === refs.modal) {
      refs.modal.style.display = 'none';
      refs.btnAdd.style.display = 'block';
    }
  });
}
