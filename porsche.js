document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('themeSwitch')
  const themeLabel = document.getElementById('themeLabel')

  toggleBtn.addEventListener('click', () => {
    const html = document.documentElement
    const isDark = html.getAttribute('data-theme') === 'dark'
    html.setAttribute('data-theme', isDark ? 'light' : 'dark')
    themeLabel.textContent = isDark ? 'Light Mode' : 'Dark Mode'
  })
})
