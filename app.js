// ===== ZeroBite AI – Shared JS =====

// Toast notification
function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.className = 'toast' + (isError ? ' error' : '');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Logout helper
function logout() {
  localStorage.removeItem('zb_role');
  localStorage.removeItem('zb_name');
  localStorage.removeItem('zb_hostel');
  window.location.href = 'index.html';
}

// Animate waste bars on load
document.addEventListener('DOMContentLoaded', () => {
  const fills = document.querySelectorAll('.waste-bar-fill');
  fills.forEach(fill => {
    const target = fill.style.width;
    fill.style.width = '0%';
    setTimeout(() => { fill.style.width = target; }, 300);
  });

  // Animate stat numbers on landing page
  document.querySelectorAll('.stat-item h2').forEach(el => {
    const text = el.textContent;
    const num = parseFloat(text.replace(/[^0-9.]/g, ''));
    if (!isNaN(num) && num > 0) {
      let current = 0;
      const step = num / 40;
      const prefix = text.match(/^[^0-9]*/)[0];
      const suffix = text.match(/[^0-9.]*$/)[0];
      const timer = setInterval(() => {
        current = Math.min(current + step, num);
        el.textContent = prefix + (Number.isInteger(num) ? Math.round(current) : current.toFixed(1)) + suffix;
        if (current >= num) clearInterval(timer);
      }, 30);
    }
  });
});
