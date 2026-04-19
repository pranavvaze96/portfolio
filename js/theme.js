function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'light';
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    const light = btn.querySelector('.theme-seg--light');
    const dark  = btn.querySelector('.theme-seg--dark');
    if (!light || !dark) return;
    light.classList.toggle('theme-seg--active', theme === 'light');
    dark.classList.toggle('theme-seg--active',  theme === 'dark');
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  });
}

// Sync with theme already applied before paint
setTheme(getTheme());

document.getElementById('theme-toggle').addEventListener('click', () => {
  setTheme(getTheme() === 'dark' ? 'light' : 'dark');
});

document.getElementById('theme-toggle-mobile').addEventListener('click', () => {
  setTheme(getTheme() === 'dark' ? 'light' : 'dark');
});
