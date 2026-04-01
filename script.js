// Beginner-friendly JavaScript file.
// This adds one tiny interaction to show how JS connects to HTML.

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('hello-btn');
  const output = document.getElementById('hello-output');

  if (!button || !output) return;

  button.addEventListener('click', () => {
    output.textContent = 'Welcome! Thanks for visiting my portfolio.';
  });
});
