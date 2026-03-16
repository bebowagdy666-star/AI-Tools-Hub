// DOM Elements
const navbar = document.querySelector('.navbar');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');
const categoriesGrid = document.querySelector('.categories-grid');
const freeToolsGrid = document.querySelector('.free-tools .tools-grid');
const paidToolsGrid = document.querySelector('.paid-tools .tools-grid');
const currentYear = document.getElementById('current-year');

// Categories
const categoriesData = [
  { id:1, title:'AI for Coding', description:'Tools that help with code generation, debugging, and optimization.', icon:'fas fa-code', category:'coding' },
  { id:2, title:'AI for Photo Generation', description:'Create stunning images from text prompts.', icon:'fas fa-image', category:'photo' },
  { id:3, title:'AI for Solving Math Equations', description:'Solve complex math problems.', icon:'fas fa-calculator', category:'math' },
  { id:4, title:'AI for Video Creation', description:'Generate and edit videos with AI.', icon:'fas fa-video', category:'video' },
  { id:5, title:'AI for Writing', description:'AI tools for content creation.', icon:'fas fa-pen-nib', category:'writing' },
  { id:6, title:'AI for Business & Marketing', description:'AI marketing and analytics tools.', icon:'fas fa-chart-line', category:'business' },
  { id:7, title:'AI for Voice & Audio', description:'AI voice generation and audio tools.', icon:'fas fa-microphone', category:'audio' },
  { id:8, title:'AI for Studying', description:'AI tutors and study helpers.', icon:'fas fa-graduation-cap', category:'education' }
];

// FREE TOOLS
const freeToolsData = [
  { name:'ChatGPT', category:'writing', description:'AI assistant for writing and problem solving.', logo:'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', price:'free', url:'https://chat.openai.com' },
  { name:'DeepSeek', category:'coding', description:'AI coding assistant.', logo:'https://seeklogo.com/images/D/deepseek-logo-718BE1E84C-seeklogo.com.png', price:'free', url:'https://www.deepseek.com' },
  { name:'Codeium', category:'coding', description:'AI autocomplete for developers.', logo:'https://codeium.com/favicon.ico', price:'free', url:'https://codeium.com' },
  { name:'Leonardo AI', category:'photo', description:'AI image generator.', logo:'https://leonardo.ai/favicon.ico', price:'free', url:'https://leonardo.ai' },
  { name:'Playground AI', category:'photo', description:'Create images using prompts.', logo:'https://playgroundai.com/favicon.ico', price:'free', url:'https://playgroundai.com' },
  { name:'Photopea', category:'photo', description:'Online Photoshop alternative.', logo:'https://www.photopea.com/promo/icon512.png', price:'free', url:'https://www.photopea.com' },
  { name:'Wolfram Alpha', category:'math', description:'Advanced math solver.', logo:'https://www.wolframalpha.com/favicon.ico', price:'free', url:'https://www.wolframalpha.com' },
  { name:'Symbolab', category:'math', description:'Step by step math solutions.', logo:'https://www.symbolab.com/favicon.ico', price:'free', url:'https://www.symbolab.com' },
  { name:'CapCut AI', category:'video', description:'AI video editing.', logo:'https://seeklogo.com/images/C/capcut-logo-947F6A4B0C-seeklogo.com.png', price:'free', url:'https://www.capcut.com' },
  { name:'Runway ML', category:'video', description:'AI video generation platform.', logo:'https://runwayml.com/favicon.ico', price:'free', url:'https://runwayml.com' },
  { name:'Grammarly', category:'writing', description:'AI grammar assistant.', logo:'https://upload.wikimedia.org/wikipedia/commons/8/8e/Grammarly_logo.svg', price:'free', url:'https://www.grammarly.com' },
  { name:'QuillBot', category:'writing', description:'AI paraphrasing tool.', logo:'https://quillbot.com/favicon.ico', price:'free', url:'https://quillbot.com' },
  { name:'Copy.ai', category:'business', description:'AI marketing copy generator.', logo:'https://www.copy.ai/favicon.ico', price:'free', url:'https://www.copy.ai' },
  { name:'Notion AI', category:'business', description:'AI productivity assistant.', logo:'https://www.notion.so/images/favicon.ico', price:'free', url:'https://www.notion.so' },
  { name:'ElevenLabs', category:'audio', description:'Realistic AI voices.', logo:'https://elevenlabs.io/favicon.ico', price:'free', url:'https://elevenlabs.io' },
  { name:'Murf AI', category:'audio', description:'AI voice generator.', logo:'https://murf.ai/favicon.ico', price:'free', url:'https://murf.ai' },
  { name:'Quizlet', category:'education', description:'AI flashcards and studying.', logo:'https://quizlet.com/favicon.ico', price:'free', url:'https://quizlet.com' },
  { name:'Khan Academy AI', category:'education', description:'AI tutor for students.', logo:'https://www.khanacademy.org/favicon.ico', price:'free', url:'https://www.khanacademy.org' }
];

// PAID TOOLS
const paidToolsData = [
  { name:'Midjourney', category:'photo', description:'Premium AI image generation.', logo:'https://upload.wikimedia.org/wikipedia/commons/e/e8/MidJourney_Logo.svg', price:'paid', url:'https://www.midjourney.com' },
  { name:'Claude', category:'writing', description:'Anthropic AI assistant.', logo:'https://www.anthropic.com/favicon.ico', price:'paid', url:'https://www.anthropic.com' },
  { name:'Replit Ghostwriter', category:'coding', description:'AI coding assistant for professional devs.', logo:'https://replit.com/public/images/favicon/favicon-32x32.png', price:'paid', url:'https://replit.com/site/ghostwriter' },
  { name:'Jasper AI', category:'business', description:'AI marketing content generator.', logo:'https://jasper.ai/favicon.ico', price:'paid', url:'https://www.jasper.ai' },
  { name:'AIVA', category:'audio', description:'AI music composition tool.', logo:'https://aiva.ai/assets/favicon.ico', price:'paid', url:'https://www.aiva.ai' },
  { name:'Socratic by Google', category:'education', description:'AI-powered learning app.', logo:'https://socratic.org/favicon.ico', price:'paid', url:'https://socratic.org' },
  { name:'Runway Gen-2', category:'video', description:'Premium AI video generation and editing.', logo:'https://runwayml.com/favicon.ico', price:'paid', url:'https://runwayml.com/gen-2' },
  { name:'Mathway', category:'math', description:'Step-by-step math problem solver.', logo:'https://www.mathway.com/favicon.ico', price:'paid', url:'https://www.mathway.com' }
];

// Initialize
function init() {
  if (currentYear) currentYear.textContent = new Date().getFullYear();
  renderCategories(categoriesData);
  renderTools(freeToolsData, freeToolsGrid);
  renderTools(paidToolsData, paidToolsGrid);
  initEventListeners();
}

// Render Categories
function renderCategories(categories) {
  categoriesGrid.innerHTML = '';
  categories.forEach(category => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.setAttribute('data-category', category.category);
    card.innerHTML = `
      <div class="category-icon"><i class="${category.icon}"></i></div>
      <h3 class="category-title">${category.title}</h3>
      <p class="category-desc">${category.description}</p>
    `;
    categoriesGrid.appendChild(card);
  });
}

// Render Tools
function renderTools(tools, container) {
  container.innerHTML = '';
  tools.forEach(tool => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.setAttribute('data-category', tool.category);
    card.setAttribute('data-name', tool.name.toLowerCase());
    card.innerHTML = `
      <div class="tool-header">
        <div class="tool-logo">
          <img src="${tool.logo}" alt="${tool.name}" width="40" onerror="this.onerror=null;this.src='https://via.placeholder.com/40?text=Logo';">
        </div>
        <h3 class="tool-name">${tool.name}</h3>
      </div>
      <span class="tool-category">${tool.category}</span>
      <p class="tool-desc">${tool.description}</p>
      <div class="tool-footer">
        <span class="tool-price">${tool.price}</span>
        <a href="${tool.url}" target="_blank" class="btn btn-secondary">Visit Website</a>
      </div>
    `;
    container.appendChild(card);
  });
}

// Event Listeners
function initEventListeners() {
  document.addEventListener('click', function(e) {
    const categoryCard = e.target.closest('.category-card');
    if (!categoryCard) return;
    const category = categoryCard.getAttribute('data-category');
    filterTools(category);
    const toolsSection = document.querySelector('#tools');
    if (toolsSection) window.scrollTo({ top: toolsSection.offsetTop - 80, behavior: 'smooth' });
  });

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const term = this.value.toLowerCase();
      filterTools('all', term);
    });
  }
}

// Filter Tools
function filterTools(category, search='') {
  const cards = document.querySelectorAll('.tool-card');
  cards.forEach(card => {
    const name = card.getAttribute('data-name');
    const cat = card.getAttribute('data-category');
    let show = true;
    if (category !== 'all' && cat !== category) show = false;
    if (search && !name.includes(search)) show = false;
    card.style.display = show ? 'block' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', init);