'use strict';

const filters = document.querySelector('.filters');
const buttons = [...document.querySelectorAll('[data-filter]')];
const projects = [...document.querySelectorAll('[data-category]')];
const status = document.querySelector('#filter-status');

if (filters && buttons.length && projects.length && status) {
  filters.hidden = false;
  for (const button of buttons) {
    button.addEventListener('click', () => {
      const selected = button.dataset.filter;
      let visible = 0;
      for (const project of projects) {
        project.hidden = selected !== 'all' && project.dataset.category !== selected;
        if (!project.hidden) visible += 1;
      }
      for (const option of buttons) {
        const active = option === button;
        option.classList.toggle('is-active', active);
        option.setAttribute('aria-pressed', String(active));
      }
      status.textContent = `Showing ${visible} ${visible === 1 ? 'project' : 'projects'}.`;
    });
  }
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
