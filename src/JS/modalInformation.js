import { refs } from './refs';
import { handleDelete } from './main';

export function modalInformation() {
  const cards = document.querySelectorAll('.findCardItem');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      const name = card.dataset.name;
      const info = card.dataset.info;
      const phone = card.dataset.phone;

      refs.modalInformationTitle.textContent = `Назва: ${name}`;
      refs.modalInformationText.textContent = `Опис: ${info}`;
      refs.modalInformationNumber.textContent = `Номер: ${phone}`;

      if (refs.deleteButton) {
        refs.deleteButton.setAttribute('data-id', id);
      } else {
        console.error('Delete button not found in DOM');
      }

      refs.openModalInformatoin.style.display = 'block';
    });
  });

  window.addEventListener('click', e => {
    if (e.target === refs.openModalInformatoin) {
      refs.openModalInformatoin.style.display = 'none';
    }
  });

  refs.closeModalInformation.addEventListener('click', () => {
    refs.openModalInformatoin.style.display = 'none';
  });

  if (refs.deleteButton) {
    refs.deleteButton.addEventListener('click', handleDelete);
  } else {
    console.error('Delete button not found in DOM');
  }
}
