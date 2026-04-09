const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const searchInput = document.getElementById('search-input');

const categoriesContainer = document.querySelector('.categories-grid');
const freeContainer = document.querySelector('.free-tools .tools-grid');
const paidContainer = document.querySelector('.paid-tools .tools-grid');

const yearSpan = document.getElementById('current-year');


const categories = [
  { title:'Coding', desc:'Tools for writing and fixing code', icon:'fas fa-code', cat:'coding' },
  { title:'Images', desc:'Create and edit images', icon:'fas fa-image', cat:'photo' },
  { title:'Math', desc:'Solve math problems', icon:'fas fa-calculator', cat:'math' },
  { title:'Video', desc:'Edit and create videos', icon:'fas fa-video', cat:'video' },
  { title:'Writing', desc:'Help with writing content', icon:'fas fa-pen-nib', cat:'writing' },
  { title:'Business', desc:'Tools for marketing and work', icon:'fas fa-chart-line', cat:'business' },
  { title:'Audio', desc:'Voice and sound tools', icon:'fas fa-microphone', cat:'audio' },
  { title:'Education', desc:'Study helpers', icon:'fas fa-graduation-cap', cat:'education' }
];

const freeTools = [
  { name:'ChatGPT', cat:'writing', desc:'Writing assistant', url:'https://chat.openai.com' },
  { name:'Codeium', cat:'coding', desc:'Code autocomplete', url:'https://codeium.com' },
  { name:'Photopea', cat:'photo', desc:'Online image editor', url:'https://www.photopea.com' },
  { name:'Wolfram Alpha', cat:'math', desc:'Math solver', url:'https://www.wolframalpha.com' },
  { name:'CapCut', cat:'video', desc:'Video editor', url:'https://www.capcut.com' },
  { name:'Grammarly', cat:'writing', desc:'Grammar checker', url:'https://www.grammarly.com' }
];

const paidTools = [
  { name:'Midjourney', cat:'photo', desc:'Image generator', url:'https://www.midjourney.com' },
  { name:'Claude', cat:'writing', desc:'Writing assistant', url:'https://www.anthropic.com' },
  { name:'Jasper', cat:'business', desc:'Marketing tool', url:'https://www.jasper.ai' }
];


document.addEventListener('DOMContentLoaded', function() {
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  showCategories();
  showTools(freeTools, freeContainer);
  showTools(paidTools, paidContainer);
});


function showCategories() {
  categories.forEach(item => {
    const div = document.createElement('div');
    div.className = 'category-card';
    div.dataset.cat = item.cat;

    div.innerHTML = `
      <div class="category-icon"><i class="${item.icon}"></i></div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    `;

    div.addEventListener('click', function() {
      filterTools(item.cat);
    });

    categoriesContainer.appendChild(div);
  });
}


function showTools(list, container) {
  list.forEach(tool => {
    const div = document.createElement('div');
    div.className = 'tool-card';
    div.dataset.cat = tool.cat;
    div.dataset.name = tool.name.toLowerCase();

    div.innerHTML = `
      <h3>${tool.name}</h3>
      <p>${tool.desc}</p>
      <a href="${tool.url}" target="_blank" class="btn">Open</a>
    `;

    container.appendChild(div);
  });
}


function filterTools(category) {
  const cards = document.querySelectorAll('.tool-card');

  cards.forEach(card => {
    if (card.dataset.cat === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}


if (searchInput) {
  searchInput.addEventListener('input', function() {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll('.tool-card');

    cards.forEach(card => {
      if (card.dataset.name.includes(value)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}


if (menuBtn) {
  menuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
}