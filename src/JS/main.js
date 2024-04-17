import { refs } from "./refs";

const arrFind = [];

refs.formFinds.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;

  const name = form.elements.find_name.value;
  const info = form.elements.find_info.value;
  const phone = form.elements.find_phone.value;

  const findObject = {
    findName: name,
    findInfo: info,
    findPhone: phone,
  };

  arrFind.push(findObject);

  form.elements.find_name.value = "";
  form.elements.find_info.value = "";
  form.elements.find_phone.value = "";

  renderFinds(arrFind);
  console.log(arrFind);
  refs.modal.style.display="none";
  refs.btnAdd.style.display="block";
}

function renderFinds(e) {

  const markup = e.map(({ findName, findInfo }) => {
      return `<li class="findCardItem">
            <h3>
                ${findName}
            </h3>
            <p>
                ${findInfo}
            </p>
        </li>`;
    })
    .join("");

  refs.findsList.insertAdjacentHTML("beforeend", markup);
}