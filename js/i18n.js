document.addEventListener('DOMContentLoaded', function() {
    // Initialize i18next
    i18next
        .use(i18nextBrowserLanguageDetector)
        .init({
            fallbackLng: 'en',
            debug: false, // 建議在生產環境設置為 false
            resources: {
                en: {
                    translation: {
                        // Header
                        'search_placeholder': 'Search...',
                        'latest_news': 'News',
                        
                        // Navigation
                        'products': 'Products',
                        'design_support': 'Design Support',
                        'about_globalstar': 'About GlobalStar',
                        
                        // Hero Section
                        'hero_title_1': 'Advanced Semiconductor Solutions',
                        'hero_desc_1': 'Leading the industry with innovative power management technologies',
                        'hero_title_2': 'High Performance MOSFETs',
                        'hero_desc_2': 'Efficient power solutions for your electronic designs',
                        'hero_title_3': 'IGBT Technology',
                        'hero_desc_3': 'Reliable power switching for industrial applications',
                        'learn_more': 'Learn More',
                        
                        // Product Categories
                        'product_categories': 'Product Categories',
                        'application_areas': 'Application Areas',
                        'focus_areas': 'Focus Areas',
                        
                        // Application Areas
                        'automotive': 'Automotive',
                        'automotive_desc': 'High reliability solutions for automotive applications',
                        'industrial': 'Industrial',
                        'industrial_desc': 'Robust components for industrial control systems',
                        'consumer': 'Consumer Electronics',
                        'consumer_desc': 'Efficient solutions for everyday devices',
                        
                        // Focus Areas
                        'energy': 'Energy Efficiency',
                        'energy_desc': 'Low power consumption solutions',
                        'miniaturization': 'Miniaturization',
                        'miniaturization_desc': 'Compact designs for space-constrained applications',
                        'reliability': 'Reliability',
                        'reliability_desc': 'Long-lasting components for critical systems',
                        
                        // Product Types
                        'product_types': 'Product Types',
                        'power_ics': 'Power ICs',
                        'power_ics_desc': 'Integrated power management solutions for various applications',
                        'mosfets': 'MOSFETs',
                        'mosfets_desc': 'High-performance power MOSFETs with low on-resistance',
                        'igbts': 'IGBTs',
                        'igbts_desc': 'Insulated Gate Bipolar Transistors for high-voltage applications',
                        'view_products': 'View Products',
                        
                        // News Section
                        'latest_news_section': 'News',
                        'news_title_1': 'New Product Launch',
                        'news_desc_1': 'GlobalStar announces new series of high-efficiency MOSFETs for automotive applications.',
                        'news_title_2': 'Industry Recognition',
                        'news_desc_2': 'GlobalStar receives industry award for innovation in power semiconductor technology.',
                        'news_title_3': 'Facility Expansion',
                        'news_desc_3': 'GlobalStar announces expansion of manufacturing capacity to meet growing demand.',
                        'read_more': 'Read More',
                        
                        // Footer
                        'quick_links': 'Quick Links',
                        'about_us': 'About Us',
                        'contact': 'Contact',
                        'contact_us': 'Contact Us',
                        'copyright': '© 2023 GlobalStar Semiconductor Co. Ltd. All Rights Reserved.',
                        'select_language_button': 'Language',
                        'design_tools': 'Design Tools',
                        'documentation': 'Documentation',
                        'technical_support': 'Technical Support',
                        'company': 'Company',
                        'careers': 'Careers'
                    }
                },
                zh: {
                    translation: {
                        // Header
                        'search_placeholder': '搜索...',
                        'latest_news': '最新消息',
                        
                        // Navigation
                        'products': '产品',
                        'design_support': '设计支持',
                        'about_globalstar': '关于GlobalStar',
                        
                        // Hero Section
                        'hero_title_1': '先进半导体解决方案',
                        'hero_desc_1': '以创新电源管理技术引领行业',
                        'hero_title_2': '高性能MOSFET',
                        'hero_desc_2': '为您的电子设计提供高效电源解决方案',
                        'hero_title_3': 'IGBT技术',
                        'hero_desc_3': '为工业应用提供可靠的电源开关',
                        'learn_more': '了解更多',
                        
                        // Product Categories
                        'product_categories': '产品类别',
                        'application_areas': '应用领域',
                        'focus_areas': '重点领域',
                        
                        // Application Areas
                        'automotive': '汽车',
                        'automotive_desc': '为汽车应用提供高可靠性解决方案',
                        'industrial': '工业',
                        'industrial_desc': '为工业控制系统提供坚固的组件',
                        'consumer': '消费电子',
                        'consumer_desc': '为日常设备提供高效解决方案',
                        
                        // Focus Areas
                        'energy': '能源效率',
                        'energy_desc': '低功耗解决方案',
                        'miniaturization': '微型化',
                        'miniaturization_desc': '为空间受限的应用提供紧凑设计',
                        'reliability': '可靠性',
                        'reliability_desc': '为关键系统提供长寿命组件',
                        
                        // Product Types
                        'product_types': '产品类型',
                        'power_ics': '电源IC',
                        'power_ics_desc': '为各种应用提供集成电源管理解决方案',
                        'mosfets': 'MOSFET',
                        'mosfets_desc': '具有低导通电阻的高性能功率MOSFET',
                        'igbts': 'IGBT',
                        'igbts_desc': '用于高压应用的绝缘栅双极晶体管',
                        'view_products': '查看产品',
                        
                        // News Section
                        'latest_news_section': '最新消息',
                        'news_title_1': '新产品发布',
                        'news_desc_1': 'GlobalStar宣布推出新系列高效MOSFET，用于汽车应用。',
                        'news_title_2': '行业认可',
                        'news_desc_2': 'GlobalStar因在功率半导体技术创新方面获得行业奖项。',
                        'news_title_3': '设施扩展',
                        'news_desc_3': 'GlobalStar宣布扩大生产能力，以满足不断增长的需求。',
                        'read_more': '阅读更多',
                        
                        // Footer
                        'quick_links': '快速链接',
                        'about_us': '关于我们',
                        'contact': '联系我们',
                        'contact_us': '联系我们',
                        'copyright': '© 2023 GlobalStar半导体有限公司。保留所有权利。',
                        'select_language_button': '选择语言',
                        'design_tools': '设计工具',
                        'documentation': '文档',
                        'technical_support': '技术支持',
                        'company': '公司',
                        'careers': '职业'
                    }
                }
            }
        }, function(err, t) {
            // i18next 初始化完成後，發送一個自定義事件
            console.log('i18next initialized.');
            document.dispatchEvent(new Event('i18nextInitialized'));
            // 确保在i18next初始化后立即更新内容
            updateContent();
        });

    // Function to update content based on selected language
    function updateContent() {
        // Translate elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(function(element) {
            const key = element.getAttribute('data-i18n');
            element.textContent = i18next.t(key);
        });

        // Translate placeholders with data-i18n-placeholder attribute
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function(element) {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = i18next.t(key);
        });

        // Translate titles with data-i18n-key attribute (for document title)
        document.querySelectorAll('[data-i18n-key]').forEach(function(element) {
            const key = element.getAttribute('data-i18n-key');
            element.setAttribute('title', i18next.t(key));
        });

        // Special handling for the notification link to preserve icon
        const notificationLink = document.querySelector('.notification-link[data-i18n="latest_news"]');
        if (notificationLink) {
            const icon = notificationLink.querySelector('i');
            const iconHTML = icon ? icon.outerHTML : '<i class="fas fa-bell"></i>';
            notificationLink.innerHTML = iconHTML + ' ' + i18next.t('latest_news');
        }

        // Special handling for selected language button to preserve icon
        const selectedLanguageButton = document.getElementById('selected-language');
        if (selectedLanguageButton) {
            const icon = selectedLanguageButton.querySelector('i');
            const iconHTML = icon ? icon.outerHTML : '<i class="fas fa-globe"></i>';
            selectedLanguageButton.innerHTML = iconHTML + ' ' + i18next.t('select_language_button');
        }

        // Update document title (if title tag has data-i18n attribute)
        const docTitle = document.querySelector('head title[data-i18n]');
        if (docTitle) {
            docTitle.textContent = i18next.t(docTitle.getAttribute('data-i18n'));
        }

        // Specific updates for product cards (paragraphs and buttons)
        // Since the descriptions and view product buttons are unique per card,
        // we can still use specific selectors or data attributes for them.
        // For simplicity, I'm adapting your existing logic with direct data-i18n for 'p' and 'a'.
        // This assumes 'p' directly after 'h3' in product-card, and 'btn-small' for the link.

        // Product Types Descriptions and Buttons
        const productCards = document.querySelectorAll('.product-card');
        if (productCards.length >= 3) {
            productCards[0].querySelector('p').textContent = i18next.t('power_ics_desc');
            productCards[0].querySelector('.btn-small').textContent = i18next.t('view_products');

            productCards[1].querySelector('p').textContent = i18next.t('mosfets_desc');
            productCards[1].querySelector('.btn-small').textContent = i18next.t('view_products');

            productCards[2].querySelector('p').textContent = i18next.t('igbts_desc');
            productCards[2].querySelector('.btn-small').textContent = i18next.t('view_products');
        }

        // News Descriptions and Read More Buttons
        const newsCards = document.querySelectorAll('.news-card');
        if (newsCards.length >= 3) {
            newsCards[0].querySelector('p:nth-of-type(2)').textContent = i18next.t('news_desc_1');
            newsCards[0].querySelector('.read-more').textContent = i18next.t('read_more');

            newsCards[1].querySelector('p:nth-of-type(2)').textContent = i18next.t('news_desc_2');
            newsCards[1].querySelector('.read-more').textContent = i18next.t('read_more');

            newsCards[2].querySelector('p:nth-of-type(2)').textContent = i18next.t('news_desc_3');
            newsCards[2].querySelector('.read-more').textContent = i18next.t('read_more');
        }
    }

    // Language selector dropdown event listener
    document.querySelector('.language-select-wrapper').addEventListener('click', function() {
        document.querySelector('.language-dropdown').classList.toggle('active');
    });

    document.querySelectorAll('.language-option').forEach(function(option) {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-value');
            i18next.changeLanguage(lang, function() {
                updateContent();
            });
            document.querySelector('.language-dropdown').classList.remove('active');
            // Update the selected language display text, but use the translated 'select_language_button'
            // The text itself is handled by updateContent(), but we need to ensure the icon is there
            const selectedLanguageDiv = document.getElementById('selected-language');
            if (selectedLanguageDiv) {
                const currentIcon = selectedLanguageDiv.querySelector('i');
                if (!currentIcon) { // If for some reason the icon is missing, add it
                    selectedLanguageDiv.innerHTML = '<i class="fas fa-globe"></i> ' + i18next.t('select_language_button');
                }
            }
        });
    });

    // Close language dropdown if clicked outside
    document.addEventListener('click', function(event) {
        const languageSelector = document.querySelector('.language-selector');
        if (languageSelector && !languageSelector.contains(event.target)) {
            document.querySelector('.language-dropdown').classList.remove('active');
        }
    });

    // Back to top button functionality
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Swiper initialization (from your main.js or separate)
    const swiper = new Swiper('.hero-swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Submenu handling (from your main.js or separate)
    document.querySelectorAll('.nav-item.has-submenu').forEach(item => {
        item.addEventListener('mouseenter', function() {
            const submenu = this.querySelector('.nav-submenu');
            if (submenu) {
                const submenuWidth = submenu.offsetWidth;
                this.style.setProperty('--submenu-width', `${submenuWidth}px`);
                this.classList.add('submenu-active');
            }
        });

        item.addEventListener('mouseleave', function() {
            this.classList.remove('submenu-active');
        });
    });
});