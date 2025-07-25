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
    const currentLangDesktop = document.querySelector('.current-lang-desktop');
    const currentLangMobile = document.querySelector('.current-lang-mobile');


    // Language translations
    const translations = {
        // English translations (default)
        en: {
            // Navigation
            'nav_home': 'Home',
            'nav_services': 'Services',
            'nav_expertise': 'Expertise',
            'nav_team': 'Partners & Clients',
            'nav_contact': 'Contacts',
            'nav_contact_footer': 'Contact',
            'footer_slogan': 'Strategic Consulting for Infrastructure & Business Development',

            // Common sections
            'section_values_vision': 'OUR VISION & VALUES',
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

            // Main texts
            'hero_title': 'OCMD Consulting AG<br><br>Strategic Consulting for Market Access and Business Expansion',
            'lead_text_index': 'Are you a Swiss company eyeing opportunities in Ukraine—or a Ukrainian business planning to establish a presence in Switzerland?<br><b>OCMD Consulting AG is your strategic partner for both markets</b>',
            'description1': 'As a Swiss-based consulting firm with deep local expertise in Ukraine, we guide Swiss businesses through market entry, expansion, and growth in one of Europe’s most dynamic economies. At the same time, we support Ukrainian companies seeking to open offices, build partnerships, and navigate Swiss regulations with confidence.',
            'description2': 'We’ve already helped a growing roster of clients on both sides:',
            'description3': 'Swiss → Ukraine: Market analysis, partner sourcing, regulatory compliance, and operational setup',
            'description4': 'Ukraine → Switzerland: Business incorporation, tax and legal guidance, local network development, and go-to-market strategies',
            'description5': 'By combining on-the-ground insights, trusted local networks, and customized solutions, we make your cross-border expansion smooth, secure, and strategically sound. Let us help you seize the unique opportunities that Switzerland and Ukraine offer—together.',
            'values_vision_subtitle': 'At OCMD Consulting AG, our aim is to foster long-term growth and partnership.',
            
            // Founders
            'meet_our_founders': 'Meet our founders',
            'founder1_name': 'Olena Chernezhenko',
            'founder1_title': 'Co-Founder & CEO',
            'founder1_bio': 'Olena Chernezhenko is an accomplished international project executive who spearheads strategic market-entry and cooperation initiatives between Switzerland and Ukraine. Building on nearly 20 years at the Swiss Embassy in Kyiv, she now oversees high-impact projects in key sectors - including infrastructure, healthcare, agriculture, construction and railway & mobility - laying the groundwork for durable, public-private partnerships and seamless, cross-border expansion.<br>Combining deep insight into Ukrainian market dynamics with a robust network of government and industry stakeholders, Olena assists Swiss and global clients in establishing or growing their operations in Ukraine. Her strategic vision, solution-oriented approach and steadfast commitment to sustainable development, make OCMD Consulting AG the partner of choice for complex, international ventures.', 
            'founder2_name': 'Marcel Hostettler',
            'founder2_title': 'Co-Founder',
            'founder2_bio': 'Marcel Hostettler is a Swiss attorney and leading expert in financial market law and international regulatory issues. He is the founder and managing partner of <a href="https://www.allegra.law/"><b><u>Allegra LAW</u></b></a>, a Swiss law firm specializing in financial market law/digital assets, corporate and M&A, and litigation.<br>Marcel and his team advise leading financial market institutions from around the world. Marcel Hostettler is particularly strong in helping foreign companies set up operations in Switzerland and he can cover all the legal needs of these companies.<br>Marcel has an excellent network and, thanks to his international presence, is very familiar with the needs of companies and individuals coming to Switzerland.', 

            // Vision & Values section
            'dedication_card_title': 'Dedication',
            'respect_card_title': 'Respect',
            'foresight_card_title': 'Foresight',
            'dedication_card_description': 'We invest fully in our clients’ ambitions—driving each project forward with unwavering energy and attention to detail, from concept through execution and beyond.',
            'respect_card_description': 'We build trust by valuing diverse perspectives, honoring commitments, and always treating clients and stakeholders with integrity and empathy.',
            'foresight_card_description': 'We look ahead to spot emerging trends and potential hurdles, crafting nimble, future-proof strategies that keep our clients a step ahead of the competition.',

            // Expertise texts
            'expertise_title': 'Our Expertise',
            'expertise_subtitle': 'Specialized knowledge that drives results',
            'lead_text_expertise': 'At OCMD Consulting AG, we combine industry knowledge with sector-specific expertise to deliver tailored solutions that address your unique challenges and opportunities',
            'industy_expertise_title': 'Industry Expertise',
            'sector_specific_expertise_title': 'Sector-Specific Expertise',
            'infrastructure_and_reconstruction_card_title': 'Infrastructure & Reconstruction',
            'railway_card_title': 'Railway & Mobility Solutions',
            'construction_card_title': 'Construction & Urban Development',
            'industrial_card_title': 'Industrial Equipment & Manufacturing',
            'energy_card_title': 'Energy & Renewables',
            'medical_card_title': 'Healthcare & Medical Consulting',
            'agricultural_card_title': 'Agriculture & Agri-Tech',
            'business_card_title': 'Business & Investment Consulting',
            'infrastructure_and_reconstruction_card_description': 'We assist governments and organizations in rebuilding and enhancing infrastructure, focusing on sustainable development and resilience. Our expertise includes project management, structural engineering, and urban planning.',
            'railway_card_description': 'We provide innovative transportation solutions, enhancing railway systems and mobility services to improve connectivity and efficiency. Our expertise includes system integration, operations optimization, and sustainable mobility planning.',
            'construction_card_description': 'We collaborate with stakeholders to design and develop urban spaces, balancing growth with environmental and social considerations. Our expertise includes urban design, sustainable construction, and community engagement.',
            'industrial_card_description': 'We support manufacturers in optimizing production processes and equipment efficiency, aiming for higher productivity and quality. Our expertise includes process engineering, equipment design, and manufacturing optimization.',
            'energy_card_description': 'We assist in transitioning to renewable energy sources, focusing on sustainable solutions that reduce environmental impact. Our expertise includes energy strategy development, renewable technology implementation, and regulatory compliance.',
            'medical_card_description': 'We offer solutions that help improve the efficiency of medical institutions, optimize treatment processes, and implement modern technologies in the healthcare sector. Our expertise includes the optimization of medical processes, integration of digital technologies, and the development of innovative models for healthcare service delivery.',
            'agricultural_card_description': 'We provide solutions that enhance agricultural productivity and sustainability through technology and innovation. Our expertise includes agricultural process optimization, technology integration, and sustainable farming practices.',
            'business_card_description': 'We guide businesses and investors in making informed decisions, offering insights into market trends and strategic opportunities. Our expertise includes market analysis, investment strategy development, and risk assessment.',

            // Partners and Clients
            'partners_and_clients_title': 'Our Partners & Clients',
            'partners_and_clients_subtitle': 'Discover the trusted organizations and valued clients we collaborate with',
            'lead_text_partners': 'Our clients and partners represent a wide range of industries—from business and finance to technology and operations. Their diverse expertise and strategic collaboration enable us to deliver comprehensive, impactful solutions tailored to real-world challenges',
            'partners_section_title': 'Partners',
            'clients_section_title': 'Clients',
            'member_bio': 'Headquartered in Zurich, Allegra Law is offering a broad range of legal services, including banking and finance, capital markets, corporate M&A, data and blockchain technology, litigation, international arbitration, and employment and immigration law. With substantial expertise in financial markets law, Allegra Law advises both domestic and international clients on capital markets issues. Allegra Law’s corporate practice is particularly strong in cross-border M&A transactions, while its dispute resolution team handles commercial and financial litigation, arbitration, mediation, and negotiation, advocating for clients before Swiss authorities, national and international courts, and arbitral tribunals.',

            // Contacts
            'contacts_title': 'Contacts',
            'contacts_subtitle': 'Contact us to get more information',
            'questions_title': 'Do you have a question about our services or about your organization?<br>Get in touch with us - we look forward to hearing from you and will be happy to meet you for an initial free consultation'

        },

        // German translations
        de: {
            // Navigation
            'nav_home': 'Startseite',
            'nav_services': 'Dienstleistungen',
            'nav_expertise': 'Fachgebiete',
            'nav_team': 'Partner und Kunden',
            'nav_contact': 'Kontakte',
            'nav_contact_footer': 'Kontakte',
            'footer_slogan': 'Strategische Beratung für Markteintritt und Geschäftsausbau',

            // Common sections
            'section_values_vision': 'UNSERE VISION & WERTE',
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

            // Main texts
            'hero_title': 'OCMD Consulting AG<br><br>Strategische Beratung für Markteintritt und Geschäftsausbau',
            'lead_text_index': 'Sind Sie ein Schweizer Unternehmen mit Interesse am ukrainischen Markt – oder ein Ukrainisches Unternehmen, das in der Schweiz Fuss fassen möchte?<br><b>OCMD Consulting AG ist Ihr strategischer Partner für beide Märkte.</b>',
            'description1': 'Als Schweizer Beratungsunternehmen mit umfassender lokaler Expertise in der Ukraine begleiten wir Schweizer Firmen beim Markteintritt, beim Ausbau und beim Wachstum in einer der dynamischsten Volkswirtschaften Europas. Gleichzeitig unterstützen wir ukrainische Unternehmen, die Niederlassungen in der Schweiz gründen, Partnerschaften aufbauen und sich sicher im schweizerischen Rechts- und Regulierungssystem bewegen möchten.',
            'description2': '<b>Wir haben bereits zahlreiche Kunden auf beiden Seiten erfolgreich begleitet:</b>',
            'description3': '<b>Schweiz → Ukraine:</b><br>Marktanalyse, Partnersuche, Einhaltung regulatorischer Anforderungen und Aufbau der operativen Strukturen',
            'description4': '<b>Ukraine → Schweiz:</b><br>Firmengründung, steuerliche und rechtliche Beratung, Netzwerkaufbau sowie Markteintrittsstrategien',
            'description5': 'Dank unserer fundierten Marktkenntnisse, vertrauensvollen lokalen Netzwerke und massgeschneiderten Lösungen gestalten wir Ihre grenzüberschreitende Expansion sicher, effizient und zukunftsorientiert.<br><br><b>Lassen Sie uns gemeinsam die einzigartigen Chancen nutzen, die Schweiz und die Ukraine bieten.</b>',
            'values_vision_subtitle': 'Bei OCMD Consulting AG ist es unser Ziel, langfristiges Wachstum und Partnerschaften zu fördern.',
            
            // Founders
            'meet_our_founders': 'Unsere Gründer stellen sich vor',
            'founder1_name': 'Olena Chernezhenko',
            'founder1_title': 'Mitgründerin & CEO',
            'founder1_bio': 'Olena Chernezhenko ist eine erfahrene internationale Projektmanagerin und leitet strategische Markteintritts- und Kooperationsinitiativen zwischen der Schweiz und der Ukraine. Nach fast 20 Jahren an der Schweizer Botschaft in Kyiw betreut sie heute hochwirksame Projekte in Schlüsselsektoren – darunter Infrastruktur, Gesundheitswesen, Landwirtschaft, Bauwesen sowie Eisenbahn & Mobilität – und legt damit den Grundstein für dauerhafte öffentlich-private Partnerschaften und eine reibungslose, grenzüberschreitende Expansion.<br>Olena kombiniert tiefe Einblicke in die Dynamik des ukrainischen Marktes mit einem starken Netzwerk aus Regierungs- und Industrievertretern und unterstützt Schweizer und internationale Kunden beim Aufbau oder Ausbau ihrer Geschäftstätigkeit in der Ukraine. Ihre strategische Vision, ihr lösungsorientierter Ansatz und ihr unermüdliches Engagement für nachhaltige Entwicklung machen die OCMD Consulting AG zum bevorzugten Partner für komplexe, internationale Projekte.', 
            'founder2_name': 'Marcel Hostettler',
            'founder2_title': 'Mitgründer',
            'founder2_bio': 'Marcel Hostettler ist Schweizer Rechtsanwalt und führender Experte für Finanzmarktrecht und internationale Regulierung. Er ist Gründer und Managing Partner von <a href="https://www.allegra.law/"><b><u>Allegra LAW</u></b></a>, einer Schweizer Anwaltskanzlei mit Spezialisierung auf Finanzmarktrecht/Digitale Vermögenswerte, Gesellschaftsrecht, M&A und Prozessführung.<br>Marcel und sein Team beraten führende Finanzinstitute weltweit. Marcel Hostettler ist besonders stark in der Unterstützung ausländischer Unternehmen bei der Niederlassung in der Schweiz und kann alle rechtlichen Belange dieser Unternehmen abdecken.<br>Marcel verfügt über ein exzellentes Netzwerk und ist dank seiner internationalen Präsenz bestens mit den Bedürfnissen von Unternehmen und Privatpersonen vertraut, die in die Schweiz kommen.', 
        
            // Vision & Values section
            'dedication_card_title': 'Engagement',
            'respect_card_title': 'Respekt',
            'foresight_card_title': 'Weitblick',
            'dedication_card_description': 'Wir investieren uns voll und ganz in die Ziele unserer Kunden – und treiben jedes Projekt mit unermüdlicher Energie und höchster Sorgfalt vom Konzept bis zur Umsetzung und darüber hinaus voran.',
            'respect_card_description': 'Wir schaffen Vertrauen, indem wir unterschiedliche Perspektiven wertschätzen, Verpflichtungen einhalten und Kunden und Stakeholder stets mit Integrität und Einfühlungsvermögen begegnen.',
            'foresight_card_description': 'Wir blicken voraus, um neue Trends und potenzielle Hürden zu erkennen und entwickeln flexible, zukunftssichere Strategien, die unseren Kunden einen Vorsprung vor der Konkurrenz verschaffen.',

            // Expertise texts
            'expertise_title': 'Unsere Expertise',
            'expertise_subtitle': 'Spezialwissen, das Ergebnisse bringt',
            'lead_text_expertise': 'Bei der OCMD Consulting AG kombinieren wir Branchenwissen mit branchenspezifischer Expertise, um maßgeschneiderte Lösungen für Ihre individuellen Herausforderungen und Chancen zu entwickeln',
            'industy_expertise_title': 'Industrieexpertise',
            'sector_specific_expertise_title': 'Branchenspezifische Expertise',
            'infrastructure_and_reconstruction_card_title': 'Infrastruktur & Wiederaufbau',
            'railway_card_title': 'Bahn- & Mobilitätslösungen',
            'construction_card_title': 'Bauwesen & Stadtentwicklung',
            'industrial_card_title': 'Industrieausrüstung & Fertigung',
            'energy_card_title': 'Energie & erneuerbare Ressourcen',
            'medical_card_title': 'Gesundheitswesen und Medizinische Beratung',
            'agricultural_card_title': 'Landwirtschaft & Agrartechnologie',
            'business_card_title': 'Geschäfts- & Investitionsberatung',
            'infrastructure_and_reconstruction_card_description': 'Wir unterstützen Regierungen und Organisationen beim Wiederaufbau und der Verbesserung der Infrastruktur mit Fokus auf nachhaltige Entwicklung und Resilienz. Unsere Expertise umfasst Projektmanagement, Bauingenieurwesen und Stadtplanung.',
            'railway_card_description': 'Wir bieten innovative Verkehrslösungen, die Eisenbahnsysteme und Mobilitätsdienste verbessern, um Konnektivität und Effizienz zu steigern. Unsere Expertise umfasst Systemintegration, Betriebsoptimierung und Planung nachhaltiger Mobilität.',
            'construction_card_description': 'Wir arbeiten mit Interessengruppen zusammen, um städtische Räume zu gestalten und zu entwickeln, wobei wir Wachstum mit ökologischen und sozialen Aspekten in Einklang bringen. Unsere Expertise umfasst Stadtgestaltung, nachhaltiges Bauen und Bürgerbeteiligung.',
            'industrial_card_description': 'Wir unterstützen Hersteller dabei, Produktionsprozesse und Geräteeffizienz zu optimieren, um höhere Produktivität und Qualität zu erreichen. Unsere Expertise umfasst Prozessengineering, Geräteplanung und Fertigungsoptimierung.',
            'energy_card_description': 'Wir unterstützen den Übergang zu erneuerbaren Energiequellen mit Fokus auf nachhaltige Lösungen zur Reduzierung der Umweltbelastung. Unsere Expertise umfasst die Entwicklung von Energiestrategien, Implementierung erneuerbarer Technologien und Einhaltung gesetzlicher Vorschriften.',
            'medical_card_description': 'Wir bieten Lösungen, die zur Steigerung der Effizienz medizinischer Einrichtungen, zur Optimierung von Behandlungsprozessen und zur Einführung moderner Technologien im Gesundheitswesen beitragen. Unsere Expertise umfasst die Optimierung medizinischer Abläufe, die Integration digitaler Technologien sowie die Entwicklung innovativer Modelle für die Erbringung medizinischer Leistungen.',
            'agricultural_card_description': 'Wir bieten Lösungen zur Steigerung der landwirtschaftlichen Produktivität und Nachhaltigkeit durch Technologie und Innovation. Unsere Expertise umfasst die Optimierung landwirtschaftlicher Prozesse, Technologieintegration und nachhaltige Anbaumethoden.',
            'business_card_description': 'Wir beraten Unternehmen und Investoren bei fundierten Entscheidungen und bieten Einblicke in Markttrends und strategische Möglichkeiten. Unsere Expertise umfasst Marktanalysen, Entwicklung von Investitionsstrategien und Risikobewertungen.',

            // Partners and Clients
            'partners_and_clients_title': 'Unsere Partner & Kunden',
            'partners_and_clients_subtitle': 'Entdecken Sie die vertrauenswürdigen Organisationen und geschätzten Kunden, mit denen wir zusammenarbeiten',
            'lead_text_partners': 'Unsere Kunden und Partner stammen aus unterschiedlichsten Branchen – von Wirtschaft und Finanzen bis hin zu Technologie und Betrieb. Ihre vielfältige Expertise und strategische Zusammenarbeit ermöglichen es uns, umfassende und wirkungsvolle Lösungen für reale Herausforderungen bereitzustellen',
            'partners_section_title': 'Partner',
            'clients_section_title': 'Kunden',
            'member_bio': 'Allegra Law mit Hauptsitz in Zürich bietet ein breites Spektrum an Rechtsdienstleistungen an, darunter Bank- und Finanzrecht, Kapitalmärkte, Unternehmensfusionen und -übernahmen, Daten- und Blockchain-Technologie, Prozessführung, internationale Schiedsgerichtsbarkeit sowie Arbeits- und Einwanderungsrecht. Dank umfassender Expertise im Finanzmarktrecht berät Allegra Law sowohl inländische als auch internationale Mandanten in Kapitalmarktfragen. Die gesellschaftsrechtliche Praxis von Allegra Law ist besonders stark in grenzüberschreitenden Fusionen und Übernahmen, während das Streitbeilegungsteam Handels- und Finanzstreitigkeiten, Schiedsverfahren, Mediationen und Verhandlungen bearbeitet und Mandanten vor Schweizer Behörden, nationalen und internationalen Gerichten sowie Schiedsgerichten vertritt.',

            // Contacts
            'contacts_title': 'Kontakte',
            'contacts_subtitle': 'Kontaktieren Sie uns für weitere Informationen',
            'questions_title': 'Sie haben eine Frage zu unseren Leistungen oder zu Ihrer Organisation?<br>Nehmen Sie Kontakt mit uns auf – wir freuen uns auf Ihre Nachricht und treffen uns gerne zu einem ersten kostenlosen Beratungsgespräch mit Ihnen'

        },

        // Ukrainian translations
        uk: {
            // Navigation
            'nav_home': 'Головна',
            'nav_services': 'Послуги',
            'nav_expertise': 'Експертиза',
            'nav_team': 'Партнери і клієнти',
            'nav_contact': 'Контакти',
            'nav_contact_footer': 'Контакти',
            'footer_slogan': 'Стратегічний консалтинг для розвитку інфраструктури та бізнесу',

            // Common sections
            'section_values_vision': 'НАШЕ БАЧЕННЯ ТА ЦІННОСТІ',
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

            // Main texts
            'hero_title': 'OCMD Consulting AG<br><br>Стратегічний консалтинг для доступу до ринку та розширення бізнесу',
            'lead_text_index': 'Ви — швейцарська компанія, яка шукає нові можливості на українському ринку? Або український бізнес, який прагне вийти на ринок Швейцарії?<br><b>OCMD Consulting AG — ваш стратегічний партнер для обох ринків</b>',
            'description1': 'Ми знаємо обидва ринки зсередини. Завдяки глибокій експертизі, місцевим контактам та багаторічному досвіду ми супроводжуємо ваш бізнес на всіх етапах міжнародного розвитку — від першої ідеї до успішної реалізації.',
            'description2': 'Ми вже допомогли зростаючій кількості клієнтів з обох сторін:',
            'description3': '<b>Наші послуги для швейцарських компаній в Україні:</b><ul><li style="margin-left: 30px; list-style: circle;">Аналіз ринку та пошук надійних партнерів</li><li style="margin-left: 30px; list-style: circle;">Консультації з юридичних і регуляторних питань</li><li style="margin-left: 30px; list-style: circle;">Організація операційної діяльності та запуск проєктів</li></ul>',
            'description4': '<b>Наші послуги для українських компаній у Швейцарії:</b><ul><li style="margin-left: 30px; list-style: circle;">Реєстрація компаній та відкриття офісів</li><li style="margin-left: 30px; list-style: circle;">Податкові та правові консультації</li><li style="margin-left: 30px; list-style: circle;">Побудова локальних бізнес-мереж</li><li style="margin-left: 30px; list-style: circle;">Стратегії виходу на ринок та розвитку</li></ul>',
            'description5': '<b>Чому варто обрати OCMD Consulting AG?</b><br>Ми не пропонуємо стандартних рішень — ми створюємо індивідуальні стратегії, які відповідають саме вашим цілям і потребам. Наш досвід, мережа контактів та глибоке розуміння обох ринків допоможуть вам уникнути ризиків і досягти результату швидше.<br><br><b>Відкрийте нові можливості разом з нами — у Швейцарії та Україні.</b>',
            'values_vision_subtitle': 'У OCMD Consulting AG наша мета — сприяти довгостроковому зростанню та партнерству.',

            // Vision & Values section
            'dedication_card_title': 'Відданість',
            'respect_card_title': 'Повага',
            'foresight_card_title': 'Передбачення',
            'dedication_card_description': 'Ми повністю інвестуємо в амбіції наших клієнтів, просуваючи кожен проект з непохитною енергією та увагою до деталей, від концепції до виконання і далі.',
            'respect_card_description': 'Ми будуємо довіру, цінуючи різноманітні точки зору, дотримуючись зобов\'язань і завжди ставлячись до клієнтів і зацікавлених сторін з чесністю та емпатією.',
            'foresight_card_description': 'Ми дивимося вперед, щоб виявляти нові тенденції та потенційні перешкоди, розробляючи гнучкі, перспективні стратегії, які дозволяють нашим клієнтам бути на крок попереду конкурентів.',
            
            // Founders
            'meet_our_founders': 'Знайомтеся з нашими засновниками',
            'founder1_name': 'Олена Чернеженко',
            'founder1_title': 'Співзасновниця та генеральний директор',
            'founder1_bio': 'Олена Чернеженко — досвідчений міжнародний керівник проектів, яка очолює стратегічні ініціативи щодо виходу на ринок та співпраці між Швейцарією та Україною. Маючи майже 20 років досвіду роботи у Посольстві Швейцарії в Києві, вона зараз контролює високоефективні проекти у ключових секторах, включаючи інфраструктуру, охорону здоров\'я, сільське господарство, будівництво, залізничну сферу та мобільність, закладаючи основу для довгострокових державно-приватних партнерств та безперебійного транскордонного розширення.<br>Поєднуючи глибоке розуміння динаміки українського ринку з потужною мережею державних та промислових зацікавлених сторін, Олена допомагає швейцарським та міжнародним клієнтам у створенні або розширенні їхньої діяльності в Україні. Її стратегічне бачення, орієнтований на рішення підхід та непохитне прагнення до сталого розвитку роблять OCMD Consulting AG партнером вибору для складних міжнародних проектів.', 
            'founder2_name': 'Марсель Хостеттлер',
            'founder2_title': 'Співзасновник',
            'founder2_bio': 'Марсель Хостеттлер — швейцарський адвокат та провідний експерт у сфері права фінансового ринку та міжнародного регулювання. Він є засновником та керуючим партнером <a href="https://www.allegra.law/"><b><u>Allegra LAW</u></b></a>, швейцарської юридичної фірми, що спеціалізується на праві фінансового ринку/цифрових активах, корпоративному праві та злиттях та поглинаннях, а також судових процесах.<br>Марсель та його команда консультують провідні установи фінансового ринку з усього світу. Марсель Хостеттлер особливо сильний у допомозі іноземним компаніям у створенні операцій у Швейцарії та може задовольнити всі юридичні потреби цих компаній.<br>Марсель має чудову мережу контактів і, завдяки своїй міжнародній присутності, добре знайомий з потребами компаній та приватних осіб, які приїжджають до Швейцарії.', 

            // Expertise texts
            'expertise_title': 'Наша Експертиза',
            'expertise_subtitle': 'Професійна експертиза, що приносить реальні результати',
            'lead_text_expertise': 'У OCMD Consulting AG ми поєднуємо галузеві знання з досвідом, щоб надавати індивідуальні рішення, які відповідають вашим унікальним викликам і можливостям',
            'industy_expertise_title': 'Експертиза в галузі інфраструктури та промисловості',
            'sector_specific_expertise_title': 'Галузева експертиза',
            'infrastructure_and_reconstruction_card_title': 'Інфраструктура та відбудова',
            'railway_card_title': 'Залізничні та мобільні рішення',
            'construction_card_title': 'Будівництво та міський розвиток',
            'industrial_card_title': 'Промислове обладнання та виробництво',
            'energy_card_title': 'Енергетика та відновлювані джерела енергії',
            'medical_card_title': 'Охорона здоров’я та медичний консалтинг',
            'agricultural_card_title': 'Сільське господарство та агротехнології',
            'business_card_title': 'Бізнес та інвестиційний консалтинг',
            'infrastructure_and_reconstruction_card_description': 'Ми допомагаємо урядам та організаціям відновлювати та покращувати інфраструктуру, зосереджуючися на сталому розвитку та стійкості. Наша експертиза включає управління проектами, будівельне інженерство та міське планування.',
            'railway_card_description': 'Ми надаємо інноваційні транспортні рішення, покращуючи залізничні системи та мобільні послуги для підвищення з’єднаності та ефективності. Наша експертиза включає інтеграцію систем, оптимізацію операцій та планування сталого транспорту.',
            'construction_card_description': 'Ми співпрацюємо з зацікавленими сторонами для проектування та розвитку міських просторів, поєднуючи зростання з екологічними та соціальними аспектами. Наша експертиза включає міське проектування, сталу забудову та залучення громади.',
            'industrial_card_description': 'Ми допомагаємо виробникам оптимізувати виробничі процеси та ефективність обладнання з метою підвищення продуктивності та якості. Наша експертиза охоплює інженерію процесів, проєктування обладнання та оптимізацію виробництва.',
            'energy_card_description': 'Ми допомагаємо в переході до відновлюваних джерел енергії, зосереджуючись на сталих рішеннях, які зменшують вплив на навколишнє середовище. Наша експертиза включає розробку енергетичних стратегій, впровадження відновлюваних технологій та дотримання нормативно-правових актів.',
            'medical_card_description': 'Ми пропонуємо рішення, що сприяють підвищенню ефективності медичних закладів, оптимізації процесів лікування та впровадженню сучасних технологій у сфері охорони здоров’я. Наша експертиза охоплює оптимізацію медичних процесів, впровадження цифрових технологій та розвиток інноваційних моделей надання медичних послуг.',
            'agricultural_card_description': 'Ми надаємо рішення, які підвищують продуктивність та сталий розвиток сільського господарства через технології та інновації. Наша експертиза включає оптимізацію сільськогосподарських процесів, інтеграцію технологій та практики сталого землеробства.',
            'business_card_description': 'Відкривайте нові ринкові можливості з нашою експертизою. Ми допомагаємо бізнесу та інвесторам приймати стратегічно правильні рішення, аналізуючи ринкові тенденції та перспективи зростання. Наші послуги включають глибоку аналітику ринку, розробку ефективних інвестиційних стратегій та професійну оцінку ризиків для впевненого розвитку вашого бізнесу.',

            // Partners and Clients
            'partners_and_clients_title': 'Наші партнери та клієнти',
            'partners_and_clients_subtitle': 'Познайомтеся з надійними організаціями та цінними клієнтами, з якими ми співпрацюємо',
            'lead_text_partners': 'Наші клієнти та партнери представляють широкий спектр галузей — від бізнесу та фінансів до технологій та операційної діяльності. Їхня різноманітна експертиза та стратегічна співпраця дозволяють нам надавати комплексні та ефективні рішення, адаптовані до реальних викликів',
            'partners_section_title': 'Партнери',
            'clients_section_title': 'Клієнти',
            'member_bio': 'Штаб-квартира компанії Allegra Law знаходиться в Цюриху, вона пропонує широкий спектр юридичних послуг, включаючи банківську справу та фінанси, ринки капіталу, корпоративні злиття та поглинання, технології даних та блокчейн, судові процеси, міжнародний арбітраж, а також трудове та імміграційне право. Маючи значний досвід у сфері права фінансових ринків, Allegra Law консультує як вітчизняних, так і міжнародних клієнтів з питань ринків капіталу. Корпоративна практика Allegra Law особливо сильна в транскордонних операціях зі злиття та поглинання, а її команда з вирішення спорів займається комерційними та фінансовими судовими процесами, арбітражем, медіацією та переговорами, представляючи клієнтів перед швейцарськими органами влади, національними та міжнародними судами, а також арбітражними трибуналами.',

            // Contacts
            'contacts_title': 'Контакти',
            'contacts_subtitle': 'Зв\'яжіться з нами, щоб отримати більше інформації',
            'questions_title': 'У вас є питання щодо наших послуг або вашої організації?<br>Зв\'яжіться з нами — ми з нетерпінням чекаємо на вашу відповідь і будемо раді зустрітися з вами для першої безкоштовної консультації.'
        }
    };

    // Function to translate elements with data-i18n attribute
    function translatePage(lang) {
        if (!translations[lang]) return;
    
        // Save language preference in localStorage
        localStorage.setItem('preferredLanguage', lang);
    
        // Update current language display
        if (currentLangDesktop) {
            currentLangDesktop.textContent = lang.toUpperCase();
        }
    
        if (currentLangMobile) {
            currentLangMobile.textContent = lang.toUpperCase();
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
            const translation = translations[lang][key];
    
            if (translation) {
                const tagName = element.tagName.toUpperCase();
    
                if (tagName === 'INPUT' || tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation; // This allows <br> and other HTML
                }
            }
        });
    }

    // Add data-i18n attributes to translatable elements
    function initializeI18n() {
        // Navigation
        const navHomeLinks = document.querySelectorAll('.nav-home');
        const navServicesLinks = document.querySelectorAll('.nav-services');
        const navExpertiseLinks = document.querySelectorAll('.nav-expertise');
        const navTeamLinks = document.querySelectorAll('.nav-partners-clients');
        const navContactLinks = document.querySelectorAll('.nav-contacts');

        const footerHomeLinks = document.querySelectorAll('.footer-links li:nth-child(1) a');
        const footerExpertiseLinks = document.querySelectorAll('.footer-links li:nth-child(2) a');
        // const footerTeamLinks = document.querySelectorAll('.footer-links li:nth-child(2) a');
        const footerContactsLinks = document.querySelectorAll('.footer-links li:nth-child(3) a');


        navHomeLinks.forEach(link => link.setAttribute('data-i18n', 'nav_home'));
        navServicesLinks.forEach(link => link.setAttribute('data-i18n', 'nav_services'));
        navExpertiseLinks.forEach(link => link.setAttribute('data-i18n', 'nav_expertise'));
        navTeamLinks.forEach(link => link.setAttribute('data-i18n', 'nav_team'));
        navContactLinks.forEach(link => link.setAttribute('data-i18n', 'nav_contact'));

        footerHomeLinks.forEach(link => link.setAttribute('data-i18n', 'nav_home'));
        footerExpertiseLinks.forEach(link => link.setAttribute('data-i18n', 'nav_expertise'));
        // footerTeamLinks.forEach(link => link.setAttribute('data-i18n', 'nav_team'));
        footerContactsLinks.forEach(link => link.setAttribute('data-i18n', 'nav_contact_footer'));

        // Section titles
        document.querySelectorAll('.section-title').forEach(title => {
            if (title.textContent.includes('OUR VISION & VALUES')) {
                title.setAttribute('data-i18n', 'section_values_vision');
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
            } else if (title.textContent.includes('Sector-Specific Expertise')) {
                title.setAttribute('data-i18n', 'sector_specific_expertise_title');
            }else if (title.textContent.includes('Partners')) {
                title.setAttribute('data-i18n', 'partners_section_title');
            } else if (title.textContent.includes('Clients')) {
                title.setAttribute('data-i18n', 'clients_section_title');
            } else if (title.textContent.includes('Meet our founders')) {
                title.setAttribute('data-i18n', 'meet_our_founders');
            }
        });

        // Page titles
        document.querySelectorAll('.page-title').forEach(title => {
            if (title.textContent.includes('Our Expertise')) {
                title.setAttribute('data-i18n', 'expertise_title');
            } else if (title.textContent.includes('Our Partners & Clients')) {
                title.setAttribute('data-i18n', 'partners_and_clients_title');
            } else if (title.textContent.includes('Contacts')) {
                title.setAttribute('data-i18n', 'contacts_title');
            }
        });

        // Page subtitles
        document.querySelectorAll('.page-subtitle').forEach(title => {
            if (title.textContent.includes('Specialized knowledge that drives results')) {
                title.setAttribute('data-i18n', 'expertise_subtitle');
            } else if (title.textContent.includes('Discover the trusted organizations and valued clients we collaborate with.')) {
                title.setAttribute('data-i18n', 'partners_and_clients_subtitle');
            } else if (title.textContent.includes('Contact us to get more information')) {
                title.setAttribute('data-i18n', 'contacts_subtitle');
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
            } else if (title.textContent.includes('Healthcare & Medical Consulting')) {
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
            } else if (title.textContent.includes('We offer solutions that help improve the efficiency of medical institutions, optimize treatment')) {
                title.setAttribute('data-i18n', 'medical_card_description');
            } else if (title.textContent.includes('We provide solutions that enhance agricultural productivity and sustainability through technology')) {
                title.setAttribute('data-i18n', 'agricultural_card_description');
            } else if (title.textContent.includes('We guide businesses and investors in making informed decisions')) {
                title.setAttribute('data-i18n', 'business_card_description');
            }
        });

        // Vision & Values Card Titles
        document.querySelectorAll('.vision-values-card h3').forEach(title => {
            if (title.textContent.includes('Dedication')) {
                title.setAttribute('data-i18n', 'dedication_card_title');
            } else if (title.textContent.includes('Respect')) {
                title.setAttribute('data-i18n', 'respect_card_title');
            } else if (title.textContent.includes('Foresight')) {
                title.setAttribute('data-i18n', 'foresight_card_title');
            }
        });

        // Vision & Values Card Descriptions
        document.querySelectorAll('.vision-values-card p').forEach(title => {
            if (title.textContent.includes('We invest fully in our clients’ ambitions—driving each project forward with')) {
                title.setAttribute('data-i18n', 'dedication_card_description');
            } else if (title.textContent.includes('We build trust by valuing diverse perspectives, honoring commitments')) {
                title.setAttribute('data-i18n', 'respect_card_description');
            } else if (title.textContent.includes('We look ahead to spot emerging trends and potential hurdles, crafting nimble')) {
                title.setAttribute('data-i18n', 'foresight_card_description');
            }
        });

        // Founders' names
        document.querySelectorAll('.founder-name').forEach(title => {
            if (title.textContent.includes('Olena Chernezhenko')) {
                title.setAttribute('data-i18n', 'founder1_name');
            } else if (title.textContent.includes('Marcel Hostettler')) {
                title.setAttribute('data-i18n', 'founder2_name');
            }
        });

        // Founders' bios
        document.querySelectorAll('.founder-bio').forEach(title => {
            if (title.textContent.includes('Olena Chernezhenko is an accomplished international project')) {
                title.setAttribute('data-i18n', 'founder1_bio');
            } else if (title.textContent.includes('Marcel Hostettler is a Swiss attorney and leading expert in')) {
                title.setAttribute('data-i18n', 'founder2_bio');
            }
        });

        // Partners' bios
        document.querySelectorAll('.member-bio').forEach(title => {
            if (title.textContent.includes('Headquartered in Zurich, Allegra Law is offering a broad range of legal services, including banking and finance, capital markets, corporate M&A, data and blockchain technology, litigation')) {
                title.setAttribute('data-i18n', 'member_bio');
            }
        });


        document.querySelectorAll('.hero-title').forEach(link => link.setAttribute('data-i18n', 'hero_title'))
        document.querySelectorAll('.lead-text-index').forEach(link => link.setAttribute('data-i18n', 'lead_text_index'))
        document.querySelectorAll('.lead-text-expertise').forEach(link => link.setAttribute('data-i18n', 'lead_text_expertise'))
        document.querySelectorAll('.lead-text-partners').forEach(link => link.setAttribute('data-i18n', 'lead_text_partners'))
        document.querySelectorAll('.description1').forEach(link => link.setAttribute('data-i18n', 'description1'))
        document.querySelectorAll('.description2').forEach(link => link.setAttribute('data-i18n', 'description2'))
        document.querySelectorAll('.description3').forEach(link => link.setAttribute('data-i18n', 'description3'))
        document.querySelectorAll('.description4').forEach(link => link.setAttribute('data-i18n', 'description4'))
        document.querySelectorAll('.description5').forEach(link => link.setAttribute('data-i18n', 'description5'))
        document.querySelectorAll('.founder-title1').forEach(link => link.setAttribute('data-i18n', 'founder1_title'))
        document.querySelectorAll('.founder-title2').forEach(link => link.setAttribute('data-i18n', 'founder2_title'))
        document.querySelectorAll('.section-subtitle-values-vision').forEach(link => link.setAttribute('data-i18n', 'values_vision_subtitle'))
        document.querySelectorAll('.section-subtitle-contacts-questions').forEach(link => link.setAttribute('data-i18n', 'questions_title'))
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

        if (firstNameInput) firstNameInput.setAttribute('data-i18n', 'form_first_name');
        if (lastNameInput) lastNameInput.setAttribute('data-i18n', 'form_last_name');
        if (emailInput) emailInput.setAttribute('data-i18n', 'form_email');
        if (phoneInput) phoneInput.setAttribute('data-i18n', 'form_phone');
        if (messageInput) messageInput.setAttribute('data-i18n', 'form_message');
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
