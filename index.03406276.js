!function(){var e={formFinds:document.querySelector(".form_item"),findsList:document.querySelector(".finds_list"),btnAdd:document.querySelector(".btn_add"),closeBtn:document.querySelector(".close"),modal:document.getElementById("modal"),openModal:document.getElementById("openModal"),searchInput:document.querySelector(".search_input"),openModalInformatoin:document.getElementById("modalInformation"),closeModalInformation:document.querySelector(".closeModalInformation"),modalInformationTitle:document.querySelector(".modalInformationTitle"),modalInformationText:document.querySelector(".modalInformationText"),modalInformationNumber:document.querySelector(".modalInformationNumber"),deleteButton:document.querySelector(".delete")};var n=JSON.parse(localStorage.getItem("finds"))||[];function t(n){var t=n.map((function(e){var n=e.id,t=e.findName,o=e.findInfo,d=e.findPhone;return'<li class="findCardItem" data-id="'.concat(n,'" data-name="').concat(t,'" data-info="').concat(o,'" data-phone="').concat(d,'">\n                <h3 class="findNameTitle"> Назва: ').concat(t,'</h3>\n                <p class="findInfoText"> Опис: ').concat(o,"</p>\n              </li>")})).join("");e.findsList.innerHTML=0===n.length?'<h4 class="notFound"> Нічого не знайдено</h4>':t,document.querySelectorAll(".findCardItem").forEach((function(n){n.addEventListener("click",(function(){var t=n.dataset.id,o=n.dataset.name,d=n.dataset.info,a=n.dataset.phone;e.modalInformationTitle.textContent="Назва: ".concat(o),e.modalInformationText.textContent="Опис: ".concat(d),e.modalInformationNumber.textContent="Номер: ".concat(a),e.deleteButton?e.deleteButton.setAttribute("data-id",t):console.error("Delete button not found in DOM"),e.openModalInformatoin.style.display="block"}))})),window.addEventListener("click",(function(n){n.target===e.openModalInformatoin&&(e.openModalInformatoin.style.display="none")})),e.closeModalInformation.addEventListener("click",(function(){e.openModalInformatoin.style.display="none"})),e.deleteButton?e.deleteButton.addEventListener("click",o):console.error("Delete button not found in DOM")}function o(){var o=e.deleteButton.getAttribute("data-id"),d=n.findIndex((function(e){return e.id===Number(o)}));-1!==d&&(n.splice(d,1),localStorage.setItem("finds",JSON.stringify(n)),t(n),e.openModalInformatoin.style.display="none")}e.openModal.addEventListener("click",(function(){e.modal.style.display="block",e.btnAdd.style.display="none"})),e.closeBtn.addEventListener("click",(function(){e.modal.style.display="none",e.btnAdd.style.display="block"})),window.addEventListener("click",(function(n){n.target===e.modal&&(e.modal.style.display="none",e.btnAdd.style.display="block")})),e.formFinds.addEventListener("submit",(function(o){o.preventDefault();var d=o.target,a=d.elements.find_name.value,i=d.elements.find_info.value,l=d.elements.find_phone.value,r={id:Date.now(),findName:a,findInfo:i,findPhone:l};n.push(r),localStorage.setItem("finds",JSON.stringify(n)),d.reset(),t(n),e.modal.style.display="none",e.btnAdd.style.display="block",Notiflix.Notify.success("Знахідку додано")})),(e.searchInput=document.querySelector(".search_input")).addEventListener("input",(function(e){var o=e.target.value.toLowerCase();t(n.filter((function(e){var n=e.findName,t=e.findInfo;return n.toLowerCase().includes(o)||t.toLowerCase().includes(o)})))})),document.addEventListener("DOMContentLoaded",(function(){t(n)}))}();
//# sourceMappingURL=index.03406276.js.map
