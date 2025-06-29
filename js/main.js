document.addEventListener('DOMContentLoaded', function() {
    // === 1. 語言偏好檢查與初始化 (等待 i18next 初始化完成) ===
    const savedLanguage = localStorage.getItem('preferredLanguage');

    // i18next 的初始化已移至 i18n.js，並在完成後觸發事件
    // 我們在 i18nextInitialized 事件觸發後才處理語言偏好和更新內容
    document.addEventListener('i18nextInitialized', function() {
        console.log('i18nextInitialized event received in main.js');
        if (savedLanguage) {
            document.documentElement.lang = savedLanguage;
            // 由於 i18next 已初始化，直接切換語言並更新內容
            i18next.changeLanguage(savedLanguage, function() {
                if (typeof updateContent === 'function') {
                    updateContent();
                }
                console.log('Language set based on preference:', savedLanguage);
            });
        } else {
            document.documentElement.lang = 'en'; // 預設語言
            if (typeof updateContent === 'function') {
                updateContent(); // 初始載入時更新內容為英文
            }
            console.log('No language preference found, default to English.');
        }
    });

    // === 將 updateContent 函式移到 main.js，以便 main.js 可以直接呼叫它 ===
    // Function to update content based on selected language
    function updateContent() {
        console.log('Updating content for language:', i18next.language);
        
        // 更新語言選擇按鈕的文字
        const selectedLanguageButton = document.getElementById('selected-language');
        if (selectedLanguageButton) {
            selectedLanguageButton.innerHTML = `<i class="fas fa-globe"></i> ${i18next.t('select_language_button')}`;
        }

        // Update search placeholder
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.placeholder = i18next.t('search_placeholder');
        }
        
        // Update navigation items
        document.querySelectorAll('.nav-list .nav-item a').forEach(function(el, index) {
            // 僅更新前三個主導航連結
            if (index === 0) el.textContent = i18next.t('products');
            else if (index === 1) el.textContent = i18next.t('design_support');
            else if (index === 2) el.textContent = i18next.t('about_globalstar');
        });
        
        // Update notification link
        const notificationLink = document.querySelector('.notification-link');
        if (notificationLink) {
            const icon = notificationLink.querySelector('i');
            const iconHTML = icon ? icon.outerHTML : '<i class="fas fa-bell"></i>'; // 保留預設圖標
            notificationLink.innerHTML = iconHTML + ' ' + i18next.t('latest_news');
        }
        
        // Update hero section (假設 Swiper 或相關元素已存在)
        const slides = document.querySelectorAll('.swiper-slide');
        if (slides.length >= 3) {
            const getHeroText = (titleKey, descKey) => ({
                title: i18next.t(titleKey),
                desc: i18next.t(descKey)
            });

            const heroData = [
                getHeroText('hero_title_1', 'hero_desc_1'),
                getHeroText('hero_title_2', 'hero_desc_2'),
                getHeroText('hero_title_3', 'hero_desc_3')
            ];

            slides.forEach((slide, index) => {
                if (heroData[index]) {
                    const h2 = slide.querySelector('h2');
                    const p = slide.querySelector('p');
                    if (h2) h2.textContent = heroData[index].title;
                    if (p) p.textContent = heroData[index].desc;
                }
            });
        }
        
        // Update learn more button
        const learnMoreBtn = document.querySelector('.learn-more-btn .btn');
        if (learnMoreBtn) {
            learnMoreBtn.textContent = i18next.t('learn_more');
        }
        
        // Update section titles
        const sectionTitles = document.querySelectorAll('.section-title');
        if (sectionTitles.length >= 3) {
            if (sectionTitles[0]) sectionTitles[0].textContent = i18next.t('product_categories');
            if (sectionTitles[1]) sectionTitles[1].textContent = i18next.t('product_types');
            if (sectionTitles[2]) sectionTitles[2].textContent = i18next.t('latest_news_section');
        }
        
        // Update category columns
        const categoryColumnsH3 = document.querySelectorAll('.category-column h3');
        if (categoryColumnsH3.length >= 2) {
            if (categoryColumnsH3[0]) categoryColumnsH3[0].textContent = i18next.t('application_areas');
            if (categoryColumnsH3[1]) categoryColumnsH3[1].textContent = i18next.t('focus_areas');
        }
        
        // Update application areas
        const appItems = document.querySelectorAll('.category-column:first-child .category-item');
        if (appItems.length >= 3) {
            if (appItems[0]) { appItems[0].querySelector('h4').textContent = i18next.t('automotive'); appItems[0].querySelector('p').textContent = i18next.t('automotive_desc'); }
            if (appItems[1]) { appItems[1].querySelector('h4').textContent = i18next.t('industrial'); appItems[1].querySelector('p').textContent = i18next.t('industrial_desc'); }
            if (appItems[2]) { appItems[2].querySelector('h4').textContent = i18next.t('consumer'); appItems[2].querySelector('p').textContent = i18next.t('consumer_desc'); }
        }
        
        // Update focus areas
        const focusItems = document.querySelectorAll('.category-column:last-child .category-item');
        if (focusItems.length >= 3) {
            if (focusItems[0]) { focusItems[0].querySelector('h4').textContent = i18next.t('energy'); focusItems[0].querySelector('p').textContent = i18next.t('energy_desc'); }
            if (focusItems[1]) { focusItems[1].querySelector('h4').textContent = i18next.t('miniaturization'); focusItems[1].querySelector('p').textContent = i18next.t('miniaturization_desc'); }
            if (focusItems[2]) { focusItems[2].querySelector('h4').textContent = i18next.t('reliability'); focusItems[2].querySelector('p').textContent = i18next.t('reliability_desc'); }
        }
        
        // Update product types
        const productCards = document.querySelectorAll('.product-card');
        if (productCards.length >= 3) {
            if (productCards[0]) { productCards[0].querySelector('h3').textContent = i18next.t('power_ics'); productCards[0].querySelector('p').textContent = i18next.t('power_ics_desc'); productCards[0].querySelector('.btn-small').textContent = i18next.t('view_products'); }
            if (productCards[1]) { productCards[1].querySelector('h3').textContent = i18next.t('mosfets'); productCards[1].querySelector('p').textContent = i18next.t('mosfets_desc'); productCards[1].querySelector('.btn-small').textContent = i18next.t('view_products'); }
            if (productCards[2]) { productCards[2].querySelector('h3').textContent = i18next.t('igbts'); productCards[2].querySelector('p').textContent = i18next.t('igbts_desc'); productCards[2].querySelector('.btn-small').textContent = i18next.t('view_products'); }
        }
        
        // Update news cards
        const newsCards = document.querySelectorAll('.news-card');
        if (newsCards.length >= 3) {
            if (newsCards[0]) { newsCards[0].querySelector('h3').textContent = i18next.t('news_title_1'); newsCards[0].querySelector('p:not(.news-date)').textContent = i18next.t('news_desc_1'); newsCards[0].querySelector('.read-more').textContent = i18next.t('read_more'); }
            if (newsCards[1]) { newsCards[1].querySelector('h3').textContent = i18next.t('news_title_2'); newsCards[1].querySelector('p:not(.news-date)').textContent = i18next.t('news_desc_2'); newsCards[1].querySelector('.read-more').textContent = i18next.t('read_more'); }
            if (newsCards[2]) { newsCards[2].querySelector('h3').textContent = i18next.t('news_title_3'); newsCards[2].querySelector('p:not(.news-date)').textContent = i18next.t('news_desc_3'); newsCards[2].querySelector('.read-more').textContent = i18next.t('read_more'); }
        }
        
        // Update footer
        const footerLinksTitle = document.querySelector('.footer-links h4');
        if (footerLinksTitle) {
            footerLinksTitle.textContent = i18next.t('quick_links');
        }
        const footerLinks = document.querySelectorAll('.footer-links li a');
        if (footerLinks.length >= 4) {
            if (footerLinks[0]) footerLinks[0].textContent = i18next.t('products');
            if (footerLinks[1]) footerLinks[1].textContent = i18next.t('design_support');
            if (footerLinks[2]) footerLinks[2].textContent = i18next.t('about_us');
            if (footerLinks[3]) footerLinks[3].textContent = i18next.t('contact');
        }
        
        const footerContactTitle = document.querySelector('.footer-contact h4');
        if (footerContactTitle) {
            footerContactTitle.textContent = i18next.t('contact_us');
        }
        const copyrightText = document.querySelector('.footer-bottom p');
        if (copyrightText) {
            copyrightText.textContent = i18next.t('copyright');
        }
    }


    // === 2. 初始化核心組件 ===
    // initSwiper(); // <--- 此處被註釋，因為之前報錯 'initSwiper is not defined'
                      //      如果你需要 Swiper，請確保在其庫載入後定義此函式。
    initLanguageSelector(); // 初始化語言選擇器
    initNavSubmenu();       // 初始化導航子菜單
    initMobileMenu();       // 初始化移動菜單
    initAnimations();       // 初始化動畫 (請確保此函式已定義)
    initBackToTop();        // 初始化回到頂部按鈕
    initHeaderScroll();     // 初始化滾動時的頭部處理
    
    // === 3. 動態添加移動端樣式 (確保只執行一次) ===
    addMobileStyles();

    // === 4. 滾動動畫處理 (Intersection Observer) ===
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.category-column, .product-card, .news-card, .section-title');
        
        const observerOptions = {
            root: null, 
            rootMargin: '0px',
            threshold: 0.1 
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.classList.add('animate__animated');
                    
                    if (element.classList.contains('category-column') || 
                        element.classList.contains('product-card')) {
                        element.classList.add('animate__fadeInUp');
                    } else if (element.classList.contains('news-card')) {
                        element.classList.add('animate__fadeInRight');
                    } else if (element.classList.contains('section-title')) {
                        element.classList.add('animate__fadeIn');
                    }
                    
                    observer.unobserve(element);
                }
            });
        }, observerOptions);
        
        elements.forEach(element => {
            observer.observe(element);
        });
    };
    animateOnScroll();

    // === 5. 搜尋功能 ===
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    console.log('searchInput element:', searchInput);
    console.log('searchButton element:', searchButton);
    
    const searchableContent = [
        // English content
        { title: 'Power ICs', category: 'product', description: 'Integrated power management solutions for various applications', url: '#power-ics', lang: 'en' },
        { title: 'MOSFETs', category: 'product', description: 'High-performance power MOSFETs with low on-resistance', url: '#mosfets', lang: 'en' },
        { title: 'IGBTs', category: 'product', description: 'Insulated Gate Bipolar Transistors for high-voltage applications', url: '#igbts', lang: 'en' },
        { title: 'Automotive', category: 'application', description: 'High reliability solutions for automotive applications', url: '#automotive', lang: 'en' },
        { title: 'Industrial', category: 'application', description: 'Robust components for industrial control systems', url: '#industrial', lang: 'en' },
        { title: 'Consumer Electronics', category: 'application', description: 'Efficient solutions for everyday devices', url: '#consumer', lang: 'en' },
        { title: 'Energy Efficiency', category: 'focus', description: 'Low power consumption solutions', url: '#energy', lang: 'en' },
        { title: 'Miniaturization', category: 'focus', description: 'Compact designs for space-constrained applications', url: '#miniaturization', lang: 'en' },
        { title: 'Reliability', category: 'focus', description: 'Long-lasting components for critical systems', url: '#reliability', lang: 'en' },
        { title: 'New Product Launch', category: 'news', description: 'GlobalStar announces new series of high-efficiency MOSFETs for automotive applications', url: '#news', lang: 'en' },
        { title: 'Industry Recognition', category: 'news', description: 'GlobalStar receives industry award for innovation in power semiconductor technology', url: '#news', lang: 'en' },
        { title: 'Facility Expansion', category: 'news', description: 'GlobalStar announces expansion of manufacturing capacity to meet growing demand', url: '#news', lang: 'en' },
        { title: 'About GlobalStar', category: 'company', description: 'Learn about our company, mission and values', url: '#about', lang: 'en' },
        { title: 'Design Support', category: 'support', description: 'Resources and tools for your design projects', url: '#design-support', lang: 'en' },
        
        // Chinese content
        { title: '电源IC', category: '产品', description: '为各种应用提供集成电源管理解决方案', url: '#power-ics', lang: 'zh' },
        { title: 'MOSFET', category: '产品', description: '具有低导通电阻的高性能功率MOSFET', url: '#mosfets', lang: 'zh' },
        { title: 'IGBT', category: '产品', description: '用于高压应用的绝缘栅双极晶体管', url: '#igbts', lang: 'zh' },
        { title: '汽车', category: '应用领域', description: '为汽车应用提供高可靠性解决方案', url: '#automotive', lang: 'zh' },
        { title: '工业', category: '应用领域', description: '为工业控制系统提供坚固的组件', url: '#industrial', lang: 'zh' },
        { title: '消费电子', category: '应用领域', description: '为日常设备提供高效解决方案', url: '#consumer', lang: 'zh' },
        { title: '能源效率', category: '重点领域', description: '低功耗解决方案', url: '#energy', lang: 'zh' },
        { title: '微型化', category: '重点领域', description: '为空间受限的应用提供紧凑设计', url: '#miniaturization', lang: 'zh' },
        { title: '可靠性', category: '重点领域', description: '为关键系统提供长寿命组件', url: '#reliability', lang: 'zh' },
        { title: '新产品发布', category: '最新消息', description: 'GlobalStar宣布推出新系列高效MOSFET，用于汽车应用', url: '#news', lang: 'zh' },
        { title: '行业认可', category: '最新消息', description: 'GlobalStar因在功率半导体技术创新方面获得行业奖项', url: '#news', lang: 'zh' },
        { title: '设施扩展', category: '最新消息', description: 'GlobalStar宣布扩大生产能力，以满足不断增长的需求', url: '#news', lang: 'zh' },
        { title: '关于GlobalStar', category: '公司', description: '了解我们的公司、使命和价值观', url: '#about', lang: 'zh' },
        { title: '设计支持', category: '支持', description: '为您的设计项目提供资源和工具', url: '#design-support', lang: 'zh' }
    ];
    
    const createSearchResultsContainer = function() {
        let container = document.getElementById('search-results-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'search-results-container';
            const searchContainer = document.querySelector('.search-container');
            if (searchContainer) {
                searchContainer.appendChild(container);
            } else {
                console.error('Search container (.search-container) not found. Search results may not display.');
                return null;
            }
            
            const style = document.createElement('style');
            style.textContent = `
                #search-results-container {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    background-color: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border-radius: 12px;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                    max-height: 400px;
                    overflow-y: auto;
                    z-index: 1000;
                    display: none;
                    margin-top: 10px;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }
                .search-result-item {
                    padding: 14px 18px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }
                .search-result-item:hover {
                    background-color: rgba(255, 255, 255, 0.2);
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                }
                .search-result-item:last-child {
                    border-bottom: none;
                }
                .search-result-title {
                    font-weight: 600;
                    color: var(--primary-color);
                    margin-bottom: 6px;
                    letter-spacing: 0.3px;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
                }
                .search-result-category {
                    display: inline-block;
                    font-size: 0.8rem;
                    background-color: rgba(var(--primary-color-rgb), 0.15);
                    padding: 3px 10px;
                    border-radius: 12px;
                    margin-left: 8px;
                    color: var(--primary-color);
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                .search-result-description {
                    font-size: 0.9rem;
                    color: var(--dark-gray);
                    line-height: 1.4;
                    letter-spacing: 0.2px;
                }
                .no-results {
                    padding: 20px;
                    text-align: center;
                    color: var(--dark-gray);
                    font-weight: 500;
                    letter-spacing: 0.5px;
                }
            `;
            document.head.appendChild(style);
        }
        return container;
    };
    
    const performSearch = function() {
        console.log('performSearch function called.');
        const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
        console.log('Search query:', query);
        const resultsContainer = createSearchResultsContainer();
        
        const currentLang = document.documentElement.lang || 'en';
        
        if (query && resultsContainer) {
            const results = searchableContent.filter(item => 
                (item.lang === currentLang || !item.lang) && (
                    item.title.toLowerCase().includes(query) || 
                    item.description.toLowerCase().includes(query) ||
                    item.category.toLowerCase().includes(query)
                )
            );
            console.log('Filtered results:', results);
            
            resultsContainer.innerHTML = '';
            resultsContainer.style.display = 'block';
            console.log('Search results container displayed.');
            
            if (results.length > 0) {
                results.forEach(result => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'search-result-item';
                    resultItem.innerHTML = `
                        <div class="search-result-title">
                            ${result.title}
                            <span class="search-result-category">${result.category}</span>
                        </div>
                        <div class="search-result-description">${result.description}</div>
                    `;
                    
                    resultItem.addEventListener('click', function() {
                        window.location.href = result.url;
                        resultsContainer.style.display = 'none';
                        if (searchInput) searchInput.value = '';
                    });
                    
                    resultsContainer.appendChild(resultItem);
                });
            } else {
                const noResultsText = currentLang === 'zh' ? '未找到结果' : 'No results found';
                resultsContainer.innerHTML = `<div class="no-results">${noResultsText}</div>`;
                console.log('No results found for query:', query);
            }
        } else if (resultsContainer) {
            resultsContainer.style.display = 'none';
        }
    };
    
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            console.log('Search button clicked.');
            performSearch();
        });
    }
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            console.log('Search input keyup event.');
            performSearch();
        });
        searchInput.addEventListener('focus', function() {
            console.log('Search input focused.');
            if (this.value.trim()) {
                performSearch();
            }
        });
    }
    
    document.addEventListener('click', function(e) {
        const resultsContainer = document.getElementById('search-results-container');
        const searchContainer = document.querySelector('.search-container');
        
        if (resultsContainer && searchContainer && !searchContainer.contains(e.target)) {
            resultsContainer.style.display = 'none';
        }
    });
    
    // === 6. 平滑滾動 ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // === 7. 移動導航開關 ===
    const createMobileNav = function() {
        const header = document.querySelector('header');
        const nav = document.querySelector('.main-nav');
        
        if (!header || !nav) {
            console.error('Header or main navigation not found for mobile menu setup.');
            return;
        }

        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.classList.add('mobile-menu-btn');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        
        const headerContainer = header.querySelector('.container');
        if (headerContainer) {
            headerContainer.appendChild(mobileMenuBtn);
        } else {
            console.warn('Header container not found, mobile menu button might not be appended correctly.');
        }
        
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.innerHTML = nav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : 
                '<i class="fas fa-bars"></i>';
        });
        
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const handleMediaChange = function(e) {
            if (e.matches) {
                nav.classList.add('mobile');
                mobileMenuBtn.style.display = 'block';
            } else {
                nav.classList.remove('mobile', 'active');
                mobileMenuBtn.style.display = 'none';
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        };
        
        handleMediaChange(mediaQuery);
        mediaQuery.addEventListener('change', handleMediaChange);
    };
    createMobileNav();

    // === 8. 動態添加移動端 CSS 樣式 ===
    const addMobileStyles = function() {
        // 檢查是否已添加，避免重複
        if (document.getElementById('mobile-styles')) {
            return;
        }
        const style = document.createElement('style');
        style.id = 'mobile-styles'; // 添加ID以便檢查
        style.textContent = `
            .mobile-menu-btn {
                display: none;
                background: none;
                border: none;
                color: var(--primary-color);
                font-size: 1.5rem;
                cursor: pointer;
                padding: 5px;
            }
            
            .main-nav.mobile {
                position: fixed;
                top: 80px;
                left: 0;
                width: 100%;
                background-color: rgba(65, 105, 225, 0.9);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                transform: translateY(-100%);
                transition: transform 0.3s ease;
                z-index: 999;
                max-height: calc(100vh - 80px); /* Limit height to viewport */
                overflow-y: auto; /* Enable scrolling for long menus */
            }
            
            .main-nav.mobile.active {
                transform: translateY(0);
            }
            
            .main-nav.mobile .nav-list {
                flex-direction: column;
                padding: 20px 0;
                align-items: center;
            }
            
            .main-nav.mobile .nav-item {
                margin: 10px 0;
                position: relative;
            }
            
            .main-nav.mobile .nav-submenu {
                position: static;
                width: 100%;
                box-shadow: none;
                margin-top: 10px;
                padding-left: 20px;
                background-color: rgba(65, 105, 225, 0.05);
                border-radius: 4px;
            }
            
            .main-nav.mobile .nav-submenu-item {
                padding: 8px 15px;
            }
            
            @media (max-width: 768px) {
                .mobile-menu-btn {
                    display: block;
                }
                /* Ensure desktop nav is hidden on mobile if not active */
                .main-nav:not(.mobile),
                .main-nav:not(.active).mobile { /* 修正：桌面版在移動視圖下隱藏 */
                    display: none !important; 
                }
                .main-nav.mobile.active { /* 確保激活時顯示 */
                    display: flex !important; /* 或 block/grid */
                }
            }
        `;
        document.head.appendChild(style);
    };
    
    // === 9. 回到頂部按鈕功能 ===
    function initBackToTop() {
        const backToTopButton = document.getElementById('back-to-top');
        if (!backToTopButton) return;
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // === 10. 頭部捲動處理 ===
    function initHeaderScroll() {
        const header = document.querySelector('header');
        if (!header) return;
        
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
            lastScrollTop = scrollTop;
        });
    }
    
    // === 11. 語言選擇器邏輯 (已修正重複監聽器和增強檢查) ===
    function initLanguageSelector() {
        const selectedLanguage = document.getElementById('selected-language');
        const languageDropdown = document.querySelector('.language-dropdown');
        const languageOptions = document.querySelectorAll('.language-option');

        console.log('Initializing language selector...');
        console.log('selectedLanguage element:', selectedLanguage);
        console.log('languageDropdown element:', languageDropdown);
        console.log('Number of language options:', languageOptions.length);

        if (!selectedLanguage || !languageDropdown) {
            console.error('Language selector elements not found. Please check HTML IDs/classes.');
            return; // 如果元素不存在，直接返回，避免後續錯誤
        }

        // 單次綁定點擊事件來切換下拉選單顯示/隱藏
        selectedLanguage.addEventListener('click', function(e) {
            e.stopPropagation(); // 阻止事件冒泡到 document，避免立即關閉
            languageDropdown.classList.toggle('active');
            console.log('Language dropdown toggled:', languageDropdown.classList.contains('active'));
        });
        
        // 點擊其他地方關閉下拉選單
        document.addEventListener('click', function(e) {
            const languageSelectWrapper = document.querySelector('.language-select-wrapper');
            // 如果下拉選單是開啟的，並且點擊的目標不在語言選擇器內部
            if (languageDropdown.classList.contains('active') && 
                languageSelectWrapper && 
                !languageSelectWrapper.contains(e.target)) {
                languageDropdown.classList.remove('active');
                console.log('Clicked outside, closing language dropdown.');
            }
        });
        
        // 為每個語言選項添加點擊事件
        languageOptions.forEach(option => {
            option.addEventListener('click', function() {
                const langValue = this.getAttribute('data-value');
                const langText = this.textContent;
                
                // 更新選定語言的顯示文本
                selectedLanguage.innerHTML = `<i class="fas fa-globe"></i> ${langText}`;
                
                // 關閉下拉選單
                languageDropdown.classList.remove('active');
                
                // 執行語言切換邏輯
                if (typeof i18next !== 'undefined') {
                    i18next.changeLanguage(langValue, function() {
                        document.documentElement.lang = langValue;
                        if (typeof updateContent === 'function') {
                            updateContent(); // 這裡呼叫 updateContent
                        }
                        localStorage.setItem('preferredLanguage', langValue);
                        // 移除了 location.reload();
                    });
                } else {
                    console.warn('i18next is not loaded. Cannot change language dynamically, attempting fallback.');
                    document.documentElement.lang = langValue;
                    localStorage.setItem('preferredLanguage', langValue);
                    // 移除了 location.reload();
                }
            });
        });
    }
    
    // === 12. 導航子菜單互動邏輯 ===
    function initNavSubmenu() {
        const navItems = document.querySelectorAll('.nav-item.has-submenu');
        if (navItems.length === 0) {
            console.log('No navigation submenu items found.');
            return;
        }

        const mediaQuery = window.matchMedia('(max-width: 768px)');
        
        if (mediaQuery.matches) {
            // Mobile specific logic
            navItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const submenu = this.querySelector('.nav-submenu');
                    if (submenu) {
                        if (submenu.style.opacity === '1') {
                            submenu.style.opacity = '0';
                            submenu.style.visibility = 'hidden';
                        } else {
                            document.querySelectorAll('.nav-submenu').forEach(menu => {
                                menu.style.opacity = '0';
                                menu.style.visibility = 'hidden';
                            });
                            submenu.style.opacity = '1';
                            submenu.style.visibility = 'visible';
                        }
                    }
                });
                
                const submenuItems = item.querySelectorAll('.nav-submenu-item');
                submenuItems.forEach(subItem => {
                    subItem.addEventListener('click', function(e) {
                        e.stopPropagation(); // 阻止子菜單項點擊事件冒泡到父級
                    });
                });
            });
            
            document.addEventListener('click', function() {
                document.querySelectorAll('.nav-submenu').forEach(menu => {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                });
            });
        } else {
            // Desktop specific logic
            navItems.forEach(item => {
                const navLink = item.querySelector('a');
                const submenu = item.querySelector('.nav-submenu');

                if (navLink && submenu) {
                    item.addEventListener('mouseenter', function() {
                        // Get the actual width of the submenu
                        const submenuWidth = submenu.offsetWidth;
                        // Set a CSS variable on the nav-item to control the background width
                        item.style.setProperty('--submenu-width', `${submenuWidth}px`);
                        item.classList.add('submenu-active');
                    });

                    item.addEventListener('mouseleave', function() {
                        item.classList.remove('submenu-active');
                        // Optionally reset the width or let CSS handle the transition back
                        item.style.removeProperty('--submenu-width');
                    });
                }
            });
        }
    }

    // === 13. (如果存在) Swiper 初始化函式的 placeholder ===
    // 如果你的頁面使用了 Swiper.js，請將其初始化程式碼放在這裡。
    // function initSwiper() {
    //     console.log('Swiper initialization goes here.');
    //     // 例如: new Swiper('.swiper-container', { ... });
    // }

    // === 14. (如果存在) 動畫初始化函式的 placeholder ===
    // 如果你的頁面有其他需要初始化才能運作的動畫，請將其程式碼放在這裡。
    function initAnimations() {
        console.log('Animations initialized (placeholder).');
        // 例如: new AOS.init();
    }
});