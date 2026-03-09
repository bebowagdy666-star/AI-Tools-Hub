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

// Data
const categoriesData = [
    {
        id: 1,
        title: 'AI for Coding',
        description: 'Tools that help with code generation, debugging, and optimization.',
        icon: 'fas fa-code',
        category: 'coding'
    },
    {
        id: 2,
        title: 'AI for Photo Generation',
        description: 'Create stunning images from text prompts with advanced AI models.',
        icon: 'fas fa-image',
        category: 'photo'
    },
    {
        id: 3,
        title: 'AI for Solving Math Equations',
        description: 'Solve complex mathematical problems with step-by-step explanations.',
        icon: 'fas fa-calculator',
        category: 'math'
    },
    {
        id: 4,
        title: 'AI for Video Creation',
        description: 'Generate and edit videos with AI-powered tools and effects.',
        icon: 'fas fa-video',
        category: 'video'
    },
    {
        id: 5,
        title: 'AI for Writing',
        description: 'Enhance your writing with AI assistants for content creation.',
        icon: 'fas fa-pen-nib',
        category: 'writing'
    },
    {
        id: 6,
        title: 'AI for Business & Marketing',
        description: 'AI tools for analytics, customer service, and marketing automation.',
        icon: 'fas fa-chart-line',
        category: 'business'
    },
    {
        id: 7,
        title: 'AI for Voice & Audio',
        description: 'Generate realistic voices, transcribe audio, and create music.',
        icon: 'fas fa-microphone',
        category: 'audio'
    },
    {
        id: 8,
        title: 'AI for Studying',
        description: 'Personalized learning assistants and study tools powered by AI.',
        icon: 'fas fa-graduation-cap',
        category: 'education'
    }
];

const freeToolsData = [
    {
        id: 1,
        name: 'ChatGPT',
        category: 'Writing',
        description: 'Advanced conversational AI that can assist with writing, coding, and problem-solving.',
        logo: 'C',
        price: 'free',
        url: 'https://chat.openai.com'
    },
    {
        id: 2,
        name: 'Google Gemini',
        category: 'General',
        description: 'Google\'s multimodal AI model for text, image, and code generation.',
        logo: 'G',
        price: 'free',
        url: 'https://gemini.google.com'
    },
    {
        id: 3,
        name: 'Leonardo AI',
        category: 'Photo',
        description: 'AI image generation platform with fine-tuned models for various styles.',
        logo: 'L',
        price: 'free',
        url: 'https://leonardo.ai'
    },
    {
        id: 4,
        name: 'DeepSeek',
        category: 'Coding',
        description: 'AI coding assistant that helps with code generation and debugging.',
        logo: 'D',
        price: 'free',
        url: 'https://www.deepseek.com'
    },
    {
        id: 5,
        name: 'Photopea AI',
        category: 'Photo',
        description: 'Online photo editor with AI-powered tools for image enhancement.',
        logo: 'P',
        price: 'free',
        url: 'https://www.photopea.com'
    },
    {
        id: 6,
        name: 'CapCut AI',
        category: 'Video',
        description: 'Video editing tool with AI features for automatic editing and effects.',
        logo: 'C',
        price: 'free',
        url: 'https://www.capcut.com'
    }
];

const paidToolsData = [
    {
        id: 1,
        name: 'Midjourney',
        category: 'Photo',
        description: 'Premium AI image generation with exceptional artistic quality and control.',
        logo: 'M',
        price: 'paid',
        url: 'https://www.midjourney.com'
    },
    {
        id: 2,
        name: 'Claude',
        category: 'Writing',
        description: 'Anthropic\'s AI assistant with advanced reasoning and safety features.',
        logo: 'C',
        price: 'paid',
        url: 'https://www.anthropic.com'
    },
    {
        id: 3,
        name: 'Adobe Firefly',
        category: 'Photo',
        description: 'Adobe\'s creative generative AI integrated into Creative Cloud apps.',
        logo: 'A',
        price: 'paid',
        url: 'https://www.adobe.com/sensei/generative-ai.html'
    },
    {
        id: 4,
        name: 'Runway ML',
        category: 'Video',
        description: 'Professional AI video editing and generation platform for creators.',
        logo: 'R',
        price: 'paid',
        url: 'https://runwayml.com'
    },
    {
        id: 5,
        name: 'Jasper AI',
        category: 'Business',
        description: 'AI content creation platform for marketing copy and business content.',
        logo: 'J',
        price: 'paid',
        url: 'https://www.jasper.ai'
    },
    {
        id: 6,
        name: 'GitHub Copilot',
        category: 'Coding',
        description: 'AI pair programmer that suggests code and entire functions in real-time.',
        logo: 'G',
        price: 'paid',
        url: 'https://github.com/features/copilot'
    }
];

// Initialize
function init() {
    console.log('Initializing AI Tools Hub...');
    
    // Set current year in footer
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
    
    // Render categories
    if (categoriesGrid) {
        renderCategories(categoriesData);
    }
    
    // Render free tools
    if (freeToolsGrid) {
        renderTools(freeToolsData, freeToolsGrid);
    }
    
    // Render paid tools
    if (paidToolsGrid) {
        renderTools(paidToolsData, paidToolsGrid);
    }
    
    // Initialize event listeners
    initEventListeners();
    
    // Initialize scroll animations
    initScrollAnimations();
}

// Render Categories
function renderCategories(categories) {
    console.log('Rendering categories...');
    categoriesGrid.innerHTML = '';
    
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card fade-in';
        categoryCard.setAttribute('data-category', category.category);
        
        categoryCard.innerHTML = `
            <div class="category-icon">
                <i class="${category.icon}"></i>
            </div>
            <h3 class="category-title">${category.title}</h3>
            <p class="category-desc">${category.description}</p>
        `;
        
        categoriesGrid.appendChild(categoryCard);
    });
    
    // Trigger animation
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
}

// Render Tools
function renderTools(tools, container) {
    console.log('Rendering tools...');
    container.innerHTML = '';
    
    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card fade-in';
        toolCard.setAttribute('data-category', tool.category.toLowerCase());
        toolCard.setAttribute('data-name', tool.name.toLowerCase());
        
        toolCard.innerHTML = `
            <div class="tool-header">
                <div class="tool-logo">${tool.logo}</div>
                <h3 class="tool-name">${tool.name}</h3>
            </div>
            <span class="tool-category">${tool.category}</span>
            <p class="tool-desc">${tool.description}</p>
            <div class="tool-footer">
                <span class="tool-price ${tool.price}">${tool.price === 'free' ? 'Free' : 'Paid'}</span>
                <a href="${tool.url}" target="_blank" class="btn btn-secondary">Visit Website</a>
            </div>
        `;
        
        container.appendChild(toolCard);
    });
    
    // Trigger animation
    setTimeout(() => {
        container.querySelectorAll('.fade-in').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
}

// Initialize Event Listeners
function initEventListeners() {
    console.log('Initializing event listeners...');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const icon = this.querySelector('i');
            if (icon) {
                icon.className = navLinks.classList.contains('active') 
                    ? 'fas fa-times' 
                    : 'fas fa-bars';
            }
        });
    }
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (navLinks) {
                    navLinks.classList.remove('active');
                    const menuIcon = mobileMenuToggle?.querySelector('i');
                    if (menuIcon) {
                        menuIcon.className = 'fas fa-bars';
                    }
                }
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                
                // Smooth scroll
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterTools(filter);
        });
    });
    
    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            filterTools('all', searchTerm);
        });
    }
    
    // Button click animations
    document.addEventListener('click', function(e) {
        const btn = e.target.closest('.btn');
        if (btn) {
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-container') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = mobileMenuToggle?.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-bars';
            }
        }
    });
}

// Filter Tools
function filterTools(category, searchTerm = '') {
    console.log(`Filtering: category=${category}, search=${searchTerm}`);
    
    const allCards = document.querySelectorAll('.category-card, .tool-card');
    
    allCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category') || '';
        const cardName = card.getAttribute('data-name') || '';
        const cardTitle = card.querySelector('.category-title, .tool-name')?.textContent.toLowerCase() || '';
        
        let shouldShow = true;
        
        // Filter by category
        if (category !== 'all' && !cardCategory.includes(category)) {
            shouldShow = false;
        }
        
        // Filter by search term
        if (searchTerm && !cardName.includes(searchTerm) && !cardTitle.includes(searchTerm)) {
            shouldShow = false;
        }
        
        if (shouldShow) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Initialize Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Start the application
document.addEventListener('DOMContentLoaded', init);

// Fallback in case DOMContentLoaded already fired
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM already loaded, initialize immediately
    init();
}
