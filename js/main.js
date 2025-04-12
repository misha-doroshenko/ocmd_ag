/**
 * OCMD AG Website - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event from bubbling up
            navLinks.classList.toggle('active');
            this.classList.toggle('active'); // Toggle active class on button itself

            // No need for span animation as we're using CSS transforms now
        });
    }

    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');

                // Reset hamburger icon
                if (navToggle) {
                    navToggle.classList.remove('active');
                }
            }
        });
    });

    // Language Selector Toggle
    const langToggle = document.querySelector('.language-toggle');
    const langDropdown = document.querySelector('.language-dropdown');

    if (langToggle) {
        langToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent this click from affecting other elements
            this.classList.toggle('active');
        });

        // Close language dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.language-selector')) {
                if (langToggle) langToggle.classList.remove('active');
            }
        });
    }

    // Add event listener to body for closing dropdowns on tap/click outside
    document.body.addEventListener('click', function(e) {
        // Only close dropdowns if click is outside nav area
        if (!e.target.closest('.nav-menu') && !e.target.closest('.language-selector')) {
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (navToggle) {
                    navToggle.classList.remove('active');
                }
            }

            if (langToggle) langToggle.classList.remove('active');
        }
    });

    // Language Switching Functionality
    const langLinks = document.querySelectorAll('.language-dropdown a');
    const currentLang = document.querySelector('.current-lang');

    // Language translations
    const translations = {
        // English translations (default)
        en: {
            // Navigation
            'nav_home': 'Home',
            'nav_services': 'Services',
            'nav_expertise': 'Expertise',
            'nav_team': 'Partners & Clients',
            'nav_contact': 'Get In Touch',
            'footer_slogan': 'Strategic Consulting for Infrastructure & Business Development.',

            // Common sections
            'section_services': 'OUR SERVICES',
            'section_expertise': 'OUR EXPERTISE',
            'section_team': 'OUR TEAM',
            'section_contact': 'CONTACT US',
            'section_clients': 'SELECTED CLIENTS',
            'who_we_are': 'WHO WE ARE',

            // Buttons & CTAs
            'btn_learn_more': 'Learn More',
            'btn_contact': 'Get In Touch',
            'btn_submit': 'Submit',

            // Form labels
            'form_first_name': 'First name',
            'form_last_name': 'Last name',
            'form_email': 'E-mail',
            'form_phone': 'Phone number',
            'form_message': 'Enter your message here...',
            'form_newsletter': 'Yes, I would like to subscribe to the newsletter',

            // Main texts
            'hero_title': 'Strategic Consulting for Infrastructure & Business Development.',
            'lead_text_index': 'Looking to explore new opportunities in Ukraine? We’re here to guide you every step of the way.',
            'description1': 'As a dedicated Swiss consulting firm with a strong focus on Ukraine, we help Swiss businesses confidently enter and grow in one of the most dynamic and rapidly evolving markets in Europe. Even in challenging times, Ukraine offers unique opportunities — and with our local expertise, you can seize them successfully.',
            'description2': 'Though young, our company already supports a growing number of Swiss clients across key sectors. With on-the-ground insights, trusted local partners, and tailor-made solutions, we make your expansion to Ukraine smooth, safe, and strategic.',
            'services_subtitle': 'From initial market analysis to establishing your local presence, we provide the support you need to turn opportunities into success stories.',


            // Expertise texts
            'expertise_title': 'Our Expertise',
            'expertise_subtitle': 'Specialized knowledge that drives results',
            'lead_text_expertise': 'At OCMD AG, we combine industry knowledge with sector-specific and advisory expertise to deliver tailored solutions that address your unique challenges and opportunities. Our consultants bring hands-on experience across multiple sectors, ensuring practical advice that creates real value.',
            'industy_expertise_title': 'Industry Expertise',
            'sector_specific_expertise_title': 'Sector-Specific & Advisory Expertise',
            'infrastructure_and_reconstruction_card_title': 'Infrastructure & Reconstruction',
            'railway_card_title': 'Railway & Mobility Solutions',
            'construction_card_title': 'Construction & Urban Development',
            'industrial_card_title': 'Industrial Equipment & Manufacturing',
            'energy_card_title': 'Energy & Renewables',
            'medical_card_title': 'Medical & Rehabilitation Technologies',
            'agricultural_card_title': 'Agriculture & Agri-Tech',
            'business_card_title': 'Business & Investment Consulting',
            'infrastructure_and_reconstruction_card_description': 'We assist governments and organizations in rebuilding and enhancing infrastructure, focusing on sustainable development and resilience. Our expertise includes project management, structural engineering, and urban planning.',
            'railway_card_description': 'We provide innovative transportation solutions, enhancing railway systems and mobility services to improve connectivity and efficiency. Our expertise includes system integration, operations optimization, and sustainable mobility planning.',
            'construction_card_description': 'We collaborate with stakeholders to design and develop urban spaces, balancing growth with environmental and social considerations. Our expertise includes urban design, sustainable construction, and community engagement.',
            'industrial_card_description': 'We support manufacturers in optimizing production processes and equipment efficiency, aiming for higher productivity and quality. Our expertise includes process engineering, equipment design, and manufacturing optimization.',
            'energy_card_description': 'We assist in transitioning to renewable energy sources, focusing on sustainable solutions that reduce environmental impact. Our expertise includes energy strategy development, renewable technology implementation, and regulatory compliance.',
            'medical_card_description': 'We develop and implement medical technologies that enhance patient care and rehabilitation outcomes. Our expertise includes medical device design, rehabilitation program development, and healthcare technology integration.',
            'agricultural_card_description': 'We provide solutions that enhance agricultural productivity and sustainability through technology and innovation. Our expertise includes agricultural process optimization, technology integration, and sustainable farming practices.',
            'business_card_description': 'We guide businesses and investors in making informed decisions, offering insights into market trends and strategic opportunities. Our expertise includes market analysis, investment strategy development, and risk assessment.',

            // Partners and Clients
            'partners_and_clients_title': 'Our Partners & Clients',
            'partners_and_clients_subtitle': 'Discover the trusted organizations and valued clients we collaborate with.',
            'lead_text_partners': 'Our clients and partners represent a wide range of industries—from business and finance to technology and operations. Their diverse expertise and strategic collaboration enable us to deliver comprehensive, impactful solutions tailored to real-world challenges.',
            'partners_section_title': 'Partners',
            'clients_section_title': 'Clients',

        },

        // German translations
        de: {
            // Navigation
            'nav_home': 'Startseite',
            'nav_services': 'Dienstleistungen',
            'nav_expertise': 'Fachgebiete',
            'nav_team': 'Partner und Kunden',
            'nav_contact': 'Kontakt',
            'footer_slogan': 'Strategische Beratung für Infrastruktur und Geschäftsentwicklung.',

            // Common sections
            'section_services': 'UNSERE DIENSTLEISTUNGEN',
            'section_expertise': 'UNSERE FACHGEBIETE',
            'section_team': 'UNSER TEAM',
            'section_contact': 'KONTAKTIEREN SIE UNS',
            'section_clients': 'AUSGEWÄHLTE KUNDEN',
            'who_we_are': 'WER WIR SIND',

            // Buttons & CTAs
            'btn_learn_more': 'Mehr erfahren',
            'btn_contact': 'Kontakt aufnehmen',
            'btn_submit': 'Absenden',

            // Form labels
            'form_first_name': 'Vorname',
            'form_last_name': 'Nachname',
            'form_email': 'E-Mail',
            'form_phone': 'Telefonnummer',
            'form_message': 'Geben Sie hier Ihre Nachricht ein...',
            'form_newsletter': 'Ja, ich möchte den Newsletter abonnieren',

            // Main texts
            'hero_title': 'Strategische Beratung für Infrastruktur und Geschäftsentwicklung.',
            'lead_text_index': 'Möchten Sie neue Möglichkeiten in der Ukraine erkunden? Wir sind hier, um Sie bei jedem Schritt zu begleiten.',
            'description1': 'Als engagiertes Schweizer Beratungsunternehmen mit starkem Fokus auf die Ukraine unterstützen wir Schweizer Unternehmen dabei, in einem der dynamischsten und sich am schnellsten entwickelnden Märkte Europas erfolgreich Fuß zu fassen und zu wachsen. Auch in herausfordernden Zeiten bietet die Ukraine einzigartige Chancen – und mit unserer lokalen Expertise können Sie diese erfolgreich nutzen.',
            'description2': 'Obwohl noch jung, unterstützt unser Unternehmen bereits eine wachsende Zahl Schweizer Kunden in wichtigen Branchen. Mit praxisnahen Kenntnissen, vertrauenswürdigen lokalen Partnern und maßgeschneiderten Lösungen gestalten wir Ihre Expansion in die Ukraine reibungslos, sicher und strategisch.',
            'services_subtitle': 'Von der ersten Marktanalyse bis zum Aufbau Ihrer lokalen Präsenz bieten wir Ihnen die Unterstützung, die Sie brauchen, um aus Chancen Erfolgsgeschichten zu machen.',

            // Expertise texts
            'expertise_title': 'Unsere Expertise',
            'expertise_subtitle': 'Spezialwissen, das Ergebnisse bringt',
            'lead_text_expertise': 'Bei der OCMD AG kombinieren wir Branchenwissen mit branchenspezifischer Beratungskompetenz, um maßgeschneiderte Lösungen für Ihre individuellen Herausforderungen und Chancen zu entwickeln. Unsere Berater verfügen über praktische Erfahrung in verschiedenen Branchen und gewährleisten so praxisnahe Beratung, die echten Mehrwert schafft.',
            'industy_expertise_title': 'Industrieexpertise',
            'sector_specific_expertise_title': 'Branchenspezifische & Beratungs­expertise',
            'infrastructure_and_reconstruction_card_title': 'Infrastruktur & Wiederaufbau',
            'railway_card_title': 'Bahn- & Mobilitätslösungen',
            'construction_card_title': 'Bauwesen & Stadtentwicklung',
            'industrial_card_title': 'Industrieausrüstung & Fertigung',
            'energy_card_title': 'Energie & erneuerbare Ressourcen',
            'medical_card_title': 'Medizinische & Rehabilitations­technologien',
            'agricultural_card_title': 'Landwirtschaft & Agrartechnologie',
            'business_card_title': 'Geschäfts- & Investitionsberatung',
            'infrastructure_and_reconstruction_card_description': 'Wir unterstützen Regierungen und Organisationen beim Wiederaufbau und der Verbesserung der Infrastruktur mit Fokus auf nachhaltige Entwicklung und Resilienz. Unsere Expertise umfasst Projektmanagement, Bauingenieurwesen und Stadtplanung.',
            'railway_card_description': 'Wir bieten innovative Verkehrslösungen, die Eisenbahnsysteme und Mobilitätsdienste verbessern, um Konnektivität und Effizienz zu steigern. Unsere Expertise umfasst Systemintegration, Betriebsoptimierung und Planung nachhaltiger Mobilität.',
            'construction_card_description': 'Wir arbeiten mit Interessengruppen zusammen, um städtische Räume zu gestalten und zu entwickeln, wobei wir Wachstum mit ökologischen und sozialen Aspekten in Einklang bringen. Unsere Expertise umfasst Stadtgestaltung, nachhaltiges Bauen und Bürgerbeteiligung.',
            'industrial_card_description': 'Wir unterstützen Hersteller dabei, Produktionsprozesse und Geräteeffizienz zu optimieren, um höhere Produktivität und Qualität zu erreichen. Unsere Expertise umfasst Prozessengineering, Geräteplanung und Fertigungsoptimierung.',
            'energy_card_description': 'Wir unterstützen den Übergang zu erneuerbaren Energiequellen mit Fokus auf nachhaltige Lösungen zur Reduzierung der Umweltbelastung. Unsere Expertise umfasst die Entwicklung von Energiestrategien, Implementierung erneuerbarer Technologien und Einhaltung gesetzlicher Vorschriften.',
            'medical_card_description': 'Wir entwickeln und implementieren Medizintechnologien, die die Patientenversorgung und Rehabilitationsergebnisse verbessern. Unsere Expertise umfasst das Design von medizinischen Geräten, Entwicklung von Rehabilitationsprogrammen und Integration von Gesundheitstechnologien.',
            'agricultural_card_description': 'Wir bieten Lösungen zur Steigerung der landwirtschaftlichen Produktivität und Nachhaltigkeit durch Technologie und Innovation. Unsere Expertise umfasst die Optimierung landwirtschaftlicher Prozesse, Technologieintegration und nachhaltige Anbaumethoden.',
            'business_card_description': 'Wir beraten Unternehmen und Investoren bei fundierten Entscheidungen und bieten Einblicke in Markttrends und strategische Möglichkeiten. Unsere Expertise umfasst Marktanalysen, Entwicklung von Investitionsstrategien und Risikobewertungen.',

            // Partners and Clients
            'partners_and_clients_title': 'Unsere Partner & Kunden',
            'partners_and_clients_subtitle': 'Entdecken Sie die vertrauenswürdigen Organisationen und geschätzten Kunden, mit denen wir zusammenarbeiten.',
            'lead_text_partners': 'Unsere Kunden und Partner stammen aus unterschiedlichsten Branchen – von Wirtschaft und Finanzen bis hin zu Technologie und Betrieb. Ihre vielfältige Expertise und strategische Zusammenarbeit ermöglichen es uns, umfassende und wirkungsvolle Lösungen für reale Herausforderungen bereitzustellen.',
            'partners_section_title': 'Partner',
            'clients_section_title': 'Kunden',

        },

        // Ukrainian translations
        uk: {
            // Navigation
            'nav_home': 'Головна',
            'nav_services': 'Послуги',
            'nav_expertise': 'Експертиза',
            'nav_team': 'Партнери і клієнти',
            'nav_contact': 'Зв\'язатися',
            'footer_slogan': 'Стратегічний консалтинг для розвитку інфраструктури та бізнесу.',

            // Common sections
            'section_services': 'НАШІ ПОСЛУГИ',
            'section_expertise': 'НАША ЕКСПЕРТИЗА',
            'section_team': 'НАША КОМАНДА',
            'section_contact': 'ЗВ\'ЯЖІТЬСЯ З НАМИ',
            'section_clients': 'ВИБРАНІ КЛІЄНТИ',
            'who_we_are': 'ХТО МИ',

            // Buttons & CTAs
            'btn_learn_more': 'Дізнатися більше',
            'btn_contact': 'Зв\'язатися',
            'btn_submit': 'Надіслати',

            // Form labels
            'form_first_name': 'Ім\'я',
            'form_last_name': 'Прізвище',
            'form_email': 'Електронна пошта',
            'form_phone': 'Номер телефону',
            'form_message': 'Введіть ваше повідомлення тут...',
            'form_newsletter': 'Так, я хочу підписатися на розсилку',

            // Main texts
            'hero_title': 'Стратегічний консалтинг для розвитку інфраструктури та бізнесу.',
            'lead_text_index': 'Хочете дослідити нові можливості в Україні? Ми тут, щоб допомогти вам на кожному кроці.',
            'description1': 'Як спеціалізована швейцарська консалтингова фірма, яка зосереджена на Україні, ми допомагаємо швейцарським підприємствам впевнено входити та розвиватися на одному з найдинамічніших ринків Європи, що швидко розвиваються. Навіть у складні часи Україна пропонує унікальні можливості — і з нашим місцевим досвідом ви можете ними успішно скористатися.',
            'description2': 'Незважаючи на те, що наша компанія є молодою, вона вже підтримує все більше швейцарських клієнтів у ключових секторах. Завдяки досвіду на місцях, надійним місцевим партнерам і індивідуальним рішенням ми зробимо вашу експансію в Україну плавною, безпечною та стратегічною.',
            'services_subtitle': 'Від початкового аналізу ринку до встановлення вашої місцевої присутності ми надаємо підтримку, необхідну для перетворення можливостей на історії успіху.',

            // Expertise texts
            'expertise_title': 'Наша Експертиза',
            'expertise_subtitle': 'Спеціалізовані знання, які забезпечують результати',
            'lead_text_expertise': 'У OCMD AG ми поєднуємо галузеві знання з галузевими та консультаційними досвідом, щоб надавати індивідуальні рішення, які відповідають вашим унікальним викликам і можливостям. Наші консультанти мають практичний досвід у різних секторах, забезпечуючи практичні поради, які створюють реальну цінність.',
            'industy_expertise_title': 'Експертиза в галузі інфраструктури та промисловості',
            'sector_specific_expertise_title': 'Секторальна та консультаційна експертиза',
            'infrastructure_and_reconstruction_card_title': 'Інфраструктура та відбудова',
            'railway_card_title': 'Залізничні та мобільні рішення',
            'construction_card_title': 'Будівництво та міський розвиток',
            'industrial_card_title': 'Промислове обладнання та виробництво',
            'energy_card_title': 'Енергетика та відновлювані джерела енергії',
            'medical_card_title': 'Медичні та реабілітаційні технології',
            'agricultural_card_title': 'Сільське господарство та агротехнології',
            'business_card_title': 'Бізнес- та інвестиційне консультування',
            'infrastructure_and_reconstruction_card_description': 'Ми допомагаємо урядам та організаціям відновлювати та покращувати інфраструктуру, зосереджуючися на сталому розвитку та стійкості. Наша експертиза включає управління проектами, будівельне інженерство та міське планування.',
            'railway_card_description': 'Ми надаємо інноваційні транспортні рішення, покращуючи залізничні системи та мобільні послуги для підвищення з’єднаності та ефективності. Наша експертиза включає інтеграцію систем, оптимізацію операцій та планування сталого транспорту.',
            'construction_card_description': 'Ми співпрацюємо з зацікавленими сторонами для проектування та розвитку міських просторів, поєднуючи зростання з екологічними та соціальними аспектами. Наша експертиза включає міське проектування, сталу забудову та залучення громади.',
            'industrial_card_description': 'Ми підтримуємо виробників у оптимізації виробничих процесів та ефективності обладнання, прагнучи до більшої продуктивності та якості. Наша експертиза включає процесне інженерство, проектування обладнання та оптимізацію виробництва.',
            'energy_card_description': 'Ми допомагаємо в переході до відновлюваних джерел енергії, зосереджуючись на сталих рішеннях, які зменшують вплив на навколишнє середовище. Наша експертиза включає розробку енергетичних стратегій, впровадження відновлюваних технологій та дотримання нормативно-правових актів.',
            'medical_card_description': 'Ми розробляємо та впроваджуємо медичні технології, які покращують догляд за пацієнтами та результати реабілітації. Наша експертиза включає проектування медичних пристроїв, розробку програм реабілітації та інтеграцію медичних технологій.',
            'agricultural_card_description': 'Ми надаємо рішення, які підвищують продуктивність та сталий розвиток сільського господарства через технології та інновації. Наша експертиза включає оптимізацію сільськогосподарських процесів, інтеграцію технологій та практики сталого землеробства.',
            'business_card_description': 'Ми консультуємо бізнеси та інвесторів щодо обґрунтованих рішень, надаючи інформацію про ринкові тенденції та стратегічні можливості. Наша експертиза включає аналіз ринку, розробку інвестиційних стратегій та оцінку ризиків.',

            // Partners and Clients
            'partners_and_clients_title': 'Наші партнери та клієнти',
            'partners_and_clients_subtitle': 'Познайомтеся з надійними організаціями та цінними клієнтами, з якими ми співпрацюємо.',
            'lead_text_partners': 'Наші клієнти та партнери представляють широкий спектр галузей — від бізнесу та фінансів до технологій та операційної діяльності. Їхня різноманітна експертиза та стратегічна співпраця дозволяють нам надавати комплексні та ефективні рішення, адаптовані до реальних викликів.',
            'partners_section_title': 'Партнери',
            'clients_section_title': 'Клієнти',
        }
    };

    // Function to translate elements with data-i18n attribute
    function translatePage(lang) {
        if (!translations[lang]) return;

        // Save language preference in localStorage
        localStorage.setItem('preferredLanguage', lang);

        // Update current language display
        if (currentLang) {
            currentLang.textContent = lang.toUpperCase();
        }

        // Mark active language in dropdown
        langLinks.forEach(link => {
            if (link.getAttribute('data-lang') === lang) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Translate elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }

    // Add data-i18n attributes to translatable elements
    function initializeI18n() {
        // Navigation
        const navHomeLinks = document.querySelectorAll('.nav-links li:nth-child(1) a');
        const navServicesLinks = document.querySelectorAll('.nav-links li:nth-child(2) a');
        const navExpertiseLinks = document.querySelectorAll('.nav-links li:nth-child(3) a');
        const navTeamLinks = document.querySelectorAll('.nav-links li:nth-child(4) a');
        const navContactLinks = document.querySelectorAll('.nav-links li:nth-child(5) a');

        const footerServicesLinks = document.querySelectorAll('.footer-links li:nth-child(1) a');
        const footerExpertiseLinks = document.querySelectorAll('.footer-links li:nth-child(2) a');
        const footerTeamLinks = document.querySelectorAll('.footer-links li:nth-child(3) a');

        navHomeLinks.forEach(link => link.setAttribute('data-i18n', 'nav_home'));
        navServicesLinks.forEach(link => link.setAttribute('data-i18n', 'nav_services'));
        navExpertiseLinks.forEach(link => link.setAttribute('data-i18n', 'nav_expertise'));
        navTeamLinks.forEach(link => link.setAttribute('data-i18n', 'nav_team'));
        navContactLinks.forEach(link => link.setAttribute('data-i18n', 'nav_contact'));

        footerServicesLinks.forEach(link => link.setAttribute('data-i18n', 'nav_services'));
        footerExpertiseLinks.forEach(link => link.setAttribute('data-i18n', 'nav_expertise'));
        footerTeamLinks.forEach(link => link.setAttribute('data-i18n', 'nav_team'));

        // Section titles
        document.querySelectorAll('.section-title').forEach(title => {
            if (title.textContent.includes('SERVICES')) {
                title.setAttribute('data-i18n', 'section_services');
            } else if (title.textContent.includes('EXPERTISE')) {
                title.setAttribute('data-i18n', 'section_expertise');
            } else if (title.textContent.includes('TEAM')) {
                title.setAttribute('data-i18n', 'section_team');
            } else if (title.textContent.includes('CONTACT')) {
                title.setAttribute('data-i18n', 'section_contact');
            } else if (title.textContent.includes('CLIENTS')) {
                title.setAttribute('data-i18n', 'section_clients');
            } else if (title.textContent.includes('WHO WE ARE')) {
                title.setAttribute('data-i18n', 'who_we_are');
            } else if (title.textContent.includes('Industry Expertise')) {
                title.setAttribute('data-i18n', 'industy_expertise_title');
            } else if (title.textContent.includes('Sector-Specific & Advisory Expertise')) {
                title.setAttribute('data-i18n', 'sector_specific_expertise_title');
            }else if (title.textContent.includes('Partners')) {
                title.setAttribute('data-i18n', 'partners_section_title');
            } else if (title.textContent.includes('Clients')) {
                title.setAttribute('data-i18n', 'clients_section_title');
            }
        });

        // Page titles
        document.querySelectorAll('.page-title').forEach(title => {
            if (title.textContent.includes('Our Expertise')) {
                title.setAttribute('data-i18n', 'expertise_title');
            } else if (title.textContent.includes('Our Partners & Clients')) {
                title.setAttribute('data-i18n', 'partners_and_clients_title');
            }
        });

        // Page subtitles
        document.querySelectorAll('.page-subtitle').forEach(title => {
            if (title.textContent.includes('Specialized knowledge that drives results')) {
                title.setAttribute('data-i18n', 'expertise_subtitle');
            } else if (title.textContent.includes('Discover the trusted organizations and valued clients we collaborate with.')) {
                title.setAttribute('data-i18n', 'partners_and_clients_subtitle');
            }
        });
        
        // Card titles
        document.querySelectorAll('.expertise-card h3').forEach(title => {
            if (title.textContent.includes('Infrastructure & Reconstruction')) {
                title.setAttribute('data-i18n', 'infrastructure_and_reconstruction_card_title');
            } else if (title.textContent.includes('Railway & Mobility Solutions')) {
                title.setAttribute('data-i18n', 'railway_card_title');
            } else if (title.textContent.includes('Construction & Urban Development')) {
                title.setAttribute('data-i18n', 'construction_card_title');
            } else if (title.textContent.includes('Industrial Equipment & Manufacturing')) {
                title.setAttribute('data-i18n', 'industrial_card_title');
            } else if (title.textContent.includes('Energy & Renewables')) {
                title.setAttribute('data-i18n', 'energy_card_title');
            } else if (title.textContent.includes('Medical & Rehabilitation Technologies')) {
                title.setAttribute('data-i18n', 'medical_card_title');
            } else if (title.textContent.includes('Agriculture & Agri-Tech')) {
                title.setAttribute('data-i18n', 'agricultural_card_title');
            } else if (title.textContent.includes('Business & Investment Consulting')) {
                title.setAttribute('data-i18n', 'business_card_title');
            }
        });

        // Card descriptions
        document.querySelectorAll('.expertise-card p').forEach(title => {
            if (title.textContent.includes('We assist governments and organizations in rebuilding and enhancing infrastructure')) {
                title.setAttribute('data-i18n', 'infrastructure_and_reconstruction_card_description');
            } else if (title.textContent.includes('We provide innovative transportation solutions, enhancing railway')) {
                title.setAttribute('data-i18n', 'railway_card_description');
            } else if (title.textContent.includes('We collaborate with stakeholders to design and develop urban spaces')) {
                title.setAttribute('data-i18n', 'construction_card_description');
            } else if (title.textContent.includes('We support manufacturers in optimizing production processes')) {
                title.setAttribute('data-i18n', 'industrial_card_description');
            } else if (title.textContent.includes('We assist in transitioning to renewable energy sources, focusing on sustainable')) {
                title.setAttribute('data-i18n', 'energy_card_description');
            } else if (title.textContent.includes('We develop and implement medical technologies that enhance patient care')) {
                title.setAttribute('data-i18n', 'medical_card_description');
            } else if (title.textContent.includes('We provide solutions that enhance agricultural productivity and sustainability through')) {
                title.setAttribute('data-i18n', 'agricultural_card_description');
            } else if (title.textContent.includes('We guide businesses and investors in making informed decisions')) {
                title.setAttribute('data-i18n', 'business_card_description');
            }
        });

        document.querySelectorAll('.hero-title').forEach(link => link.setAttribute('data-i18n', 'hero_title'))
        document.querySelectorAll('.lead-text-index').forEach(link => link.setAttribute('data-i18n', 'lead_text_index'))
        document.querySelectorAll('.lead-text-expertise').forEach(link => link.setAttribute('data-i18n', 'lead_text_expertise'))
        document.querySelectorAll('.lead-text-partners').forEach(link => link.setAttribute('data-i18n', 'lead_text_partners'))
        document.querySelectorAll('.description1').forEach(link => link.setAttribute('data-i18n', 'description1'))
        document.querySelectorAll('.description2').forEach(link => link.setAttribute('data-i18n', 'description2'))
        document.querySelectorAll('.section-subtitle').forEach(link => link.setAttribute('data-i18n', 'services_subtitle'))
        document.querySelectorAll('.tagline').forEach(link => link.setAttribute('data-i18n', 'footer_slogan'))




        // Buttons
        document.querySelectorAll('.btn').forEach(btn => {
            if (btn.textContent.includes('Learn More')) {
                btn.setAttribute('data-i18n', 'btn_learn_more');
            } else if (btn.textContent.includes('Get In Touch')) {
                btn.setAttribute('data-i18n', 'btn_contact');
            } else if (btn.textContent.includes('Submit')) {
                btn.setAttribute('data-i18n', 'btn_submit');
            }
        });

        // Form elements
        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');
        const newsletterLabel = document.querySelector('label[for="newsletter"]');

        if (firstNameInput) firstNameInput.setAttribute('data-i18n', 'form_first_name');
        if (lastNameInput) lastNameInput.setAttribute('data-i18n', 'form_last_name');
        if (emailInput) emailInput.setAttribute('data-i18n', 'form_email');
        if (phoneInput) phoneInput.setAttribute('data-i18n', 'form_phone');
        if (messageInput) messageInput.setAttribute('data-i18n', 'form_message');
        if (newsletterLabel) newsletterLabel.setAttribute('data-i18n', 'form_newsletter');
    }

    // Initialize i18n
    initializeI18n();

    // Set default language or load from localStorage
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    translatePage(savedLang);

    // Language switching on click
    langLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            translatePage(lang);
            langToggle.classList.remove('active');
        });
    });

    // Handle Contact Form Submission
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            const newsletter = document.getElementById('newsletter').checked;

            // Simple form validation
            if (!firstName || !lastName || !email || !message) {
                alert('Please fill out all required fields');
                return;
            }

            // Normally would send this data to a server
            console.log({
                firstName,
                lastName,
                email,
                phone,
                message,
                newsletter
            });

            // Show success message
            alert('Thank you for your message! We will contact you shortly.');

            // Reset form
            contactForm.reset();
        });
    }

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Skip if it's just "#"
            if (this.getAttribute('href') === '#') return;

            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate header height for proper scrolling position
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollPosition = 0;

    window.addEventListener('scroll', function() {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }

        lastScrollPosition = currentScrollPosition;
    });

    // Add additional styling to header when scrolled
    if (!document.querySelector('.header-scrolled-style')) {
        const style = document.createElement('style');
        style.className = 'header-scrolled-style';
        style.textContent = `
            .header-scrolled {
                padding: 0.5rem 0;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease;
            }
        `;
        document.head.appendChild(style);
    }
});
