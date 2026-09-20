
const input = document.querySelector('[data-search]');
if (input) {
  const rows = [...document.querySelectorAll('[data-searchable]')];
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    rows.forEach(el => {
      el.style.display = !q || el.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}
