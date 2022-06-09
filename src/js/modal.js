(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-modal-locations]'),
    closeModalBtn: document.querySelector('[data-close-modal-locations]'),
    modal: document.querySelector('[data-modal-locations]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('noscroll');
    refs.modal.classList.toggle('backdrop--is-hidden');
  }
})();
