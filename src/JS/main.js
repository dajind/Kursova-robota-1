import { refs } from './refs';
import { modal } from './modal';
import { modalInformation } from './modalInformation';

const arrFind = JSON.parse(localStorage.getItem('finds')) || [];

modal();

refs.formFinds.addEventListener('submit', handleSubmit);
refs.searchInput = document.querySelector('.search_input');
refs.searchInput.addEventListener('input', handleSearch);

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;

  const name = form.elements.find_name.value;
  const info = form.elements.find_info.value;
  const phone = form.elements.find_phone.value;

  const findObject = {
    id: Date.now(),
    findName: name,
    findInfo: info,
    findPhone: phone,
  };

  arrFind.push(findObject);
  localStorage.setItem('finds', JSON.stringify(arrFind));

  form.reset();

  renderFinds(arrFind);
  refs.modal.style.display = 'none';
  refs.btnAdd.style.display = 'block';

  Notiflix.Notify.success('Знахідку додано');
}

function handleSearch(e) {
  const query = e.target.value.toLowerCase();
  const filteredFinds = arrFind.filter(({ findName, findInfo }) => {
    return (
      findName.toLowerCase().includes(query) ||
      findInfo.toLowerCase().includes(query)
    );
  });
  renderFinds(filteredFinds);
}

function renderFinds(findArray) {
  const markup = findArray
    .map(({ id, findName, findInfo, findPhone }) => {
      return `<li class="findCardItem" data-id="${id}" data-name="${findName}" data-info="${findInfo}" data-phone="${findPhone}">
                <h3 class="findNameTitle"> Назва: ${findName}</h3>
                <p class="findInfoText"> Опис: ${findInfo}</p>
              </li>`;
    })
    .join('');

  refs.findsList.innerHTML =
    findArray.length === 0
      ? '<h4 class="notFound"> Нічого не знайдено</h4>'
      : markup;

  modalInformation();
}

document.addEventListener('DOMContentLoaded', () => {
  renderFinds(arrFind);
});

export function handleDelete() {
  const id = refs.deleteButton.getAttribute('data-id');
  const index = arrFind.findIndex(find => find.id === Number(id));
  if (index !== -1) {
    arrFind.splice(index, 1);
    localStorage.setItem('finds', JSON.stringify(arrFind));
    renderFinds(arrFind);
    refs.openModalInformatoin.style.display = 'none';
  }
}
