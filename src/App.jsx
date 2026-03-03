import React, { useEffect, useState, useRef } from 'react';
import anime from 'animejs';
import './index.css';

const AnimeGridBackground = () => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        let columns = 0;
        let rows = 0;
        let toggled = false;

        const handleResize = () => {
            columns = Math.floor(window.innerWidth / 50);
            rows = Math.floor(window.innerHeight / 50);

            wrapper.style.setProperty('--columns', columns);
            wrapper.style.setProperty('--rows', rows);

            createGrid();
        };

        const createGrid = () => {
            wrapper.innerHTML = '';
            const quantity = columns * rows;
            for (let i = 0; i < quantity; i++) {
                const block = document.createElement('div');
                block.classList.add('dot');
                block.addEventListener('click', () => handleRipple(i));
                wrapper.appendChild(block);
            }
        };

        const handleRipple = (index) => {
            toggled = !toggled;
            anime({
                targets: '.dot',
                scale: [
                    { value: 1.5, easing: 'easeOutSine', duration: 400 },
                    { value: 1, easing: 'easeInOutQuad', duration: 900 }
                ],
                backgroundColor: [
                    { value: toggled ? 'rgba(124, 58, 237, 0.6)' : 'rgba(6, 182, 212, 0.6)', easing: 'easeOutSine', duration: 400 },
                    { value: 'rgba(255, 255, 255, 0.02)', easing: 'easeInOutQuad', duration: 900 }
                ],
                delay: anime.stagger(50, { grid: [columns, rows], from: index })
            });
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        // trigger initial pulse
        setTimeout(() => handleRipple(Math.floor((columns * rows) / 2)), 1200);

        // Infinite random ripple every 5 seconds
        const autoRipple = setInterval(() => {
            handleRipple(Math.floor(Math.random() * (columns * rows)));
        }, 5000);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(autoRipple);
        };
    }, []);

    return <div ref={wrapperRef} className="anime-grid-background"></div>;
};

const App = () => {
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Navbar scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Calculate scroll progress for top progress bar
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Initial load animations
    useEffect(() => {
        const timeline = anime.timeline({
            easing: 'easeOutExpo',
        });

        timeline
            .add({
                targets: '.navbar',
                translateY: [-50, 0],
                opacity: [0, 1],
                duration: 1000,
            })
            .add({
                targets: '.shape',
                scale: [0, 1],
                opacity: [0, 0.4],
                duration: 1500,
                delay: anime.stagger(200),
            }, '-=800')
            .add({
                targets: '.hero-anim',
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 1200,
                delay: anime.stagger(150)
            }, '-=1200')
            .add({
                targets: '.letter',
                translateY: [-20, 0],
                opacity: [0, 1],
                rotateZ: [-10, 0],
                scale: [0.5, 1],
                duration: 800,
                delay: anime.stagger(100),
                easing: 'easeOutBack'
            }, '-=1000')
            .add({
                targets: '.hero-svg-line path',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 1500,
                delay: function (el, i) { return i * 250 },
                direction: 'alternate',
                loop: false
            }, '-=1000');

        // 1. Replicate: animate('.square', { rotate: 90, loop: true, ease: 'inOutExpo' })
        anime({
            targets: '.bg-square',
            rotate: '+=90',
            loop: true,
            duration: 2000,
            easing: 'easeInOutExpo',
            delay: anime.stagger(200)
        });

        // 2. Replicate: animate('.shape', { x: random(-100, 100), y: random(-100, 100), rotate: random(-180, 180), duration: random(500, 1000) })
        const animateShapes = () => {
            anime({
                targets: '.shape',
                translateX: () => anime.random(-150, 150),
                translateY: () => anime.random(-150, 150),
                rotate: () => anime.random(-180, 180),
                scale: () => anime.random(80, 120) / 100,
                duration: () => anime.random(2000, 4000),
                easing: 'easeInOutQuad',
                complete: animateShapes
            });
        };
        animateShapes();

        // 3. Replicate: animate('.car', { ...createMotionPath('.circuit') })
        const path = anime.path('.circuit-path');
        anime({
            targets: '.motion-car',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: 'linear',
            duration: 8000,
            loop: true
        });

        // 4. Replicate: animate(createDrawable('.circuit'), { draw: '0 1' })
        anime({
            targets: '.circuit-path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 8000,
            loop: true,
            direction: 'alternate'
        });

        // 5. Replicate: ticker logic
        anime({
            targets: '.ticker',
            rotate: 360,
            duration: 8000,
            loop: true,
            easing: 'linear'
        });

        // 6. SVG Morphing
        anime({
            targets: '.morph-path',
            d: [
                { value: 'M 400 150 C 600 100 850 200 900 400 C 950 600 800 850 600 900 C 300 950 150 750 150 500 C 150 250 250 150 400 150 Z' },
                { value: 'M 250 250 C 500 150 750 150 850 350 C 950 550 750 850 500 850 C 250 850 150 650 150 450 C 150 300 200 250 250 250 Z' },
                { value: 'M 300 200 C 500 100 700 150 850 300 C 1000 500 800 800 500 900 C 200 1000 100 700 150 400 C 200 200 250 250 300 200 Z' }
            ],
            easing: 'easeInOutSine',
            duration: 8000,
            loop: true,
            direction: 'alternate'
        });

        // 7. Media query animations
        const isPortrait = window.matchMedia('(orientation: portrait)').matches;
        anime({
            targets: '.media-circle',
            translateY: isPortrait ? 0 : [-50, 50, -50],
            translateX: isPortrait ? [-50, 50, -50] : 0,
            duration: 4000,
            delay: anime.stagger(100),
            loop: true,
            easing: 'easeInOutQuad'
        });

        // 8. Infinite Color Morphing for Hero Text letters
        anime({
            targets: '.letter',
            color: [
                { value: 'var(--accent-secondary)' },
                { value: 'var(--accent-primary)' },
                { value: '#10b981' }, // Accent green
                { value: 'var(--accent-secondary)' }
            ],
            duration: 5000,
            easing: 'linear',
            loop: true,
            delay: anime.stagger(200, { start: 2000 })
        });

        // 9. Floating ambient shapes continuous pulse
        anime({
            targets: '.shape',
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
            duration: 4000,
            loop: true,
            easing: 'easeInOutSine',
            delay: anime.stagger(1500)
        });

        // 10. Endless floating for project icons
        anime({
            targets: '.project-icon',
            translateY: [-5, 5],
            duration: 2000,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine',
            delay: anime.stagger(200)
        });

        // 11. Section Dividers Wave Animation
        anime({
            targets: '.wave-path',
            d: [
                { value: 'M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,0 L0,0 Z' },
                { value: 'M0,100 C150,0 350,200 500,100 C650,0 850,200 1000,100 L1000,0 L0,0 Z' }
            ],
            duration: 5000,
            easing: 'easeInOutSine',
            loop: true,
            direction: 'alternate'
        });

        // 12. Infinite Between-Section Marquees
        anime({
            targets: '.marquee-inner',
            translateX: ['0%', '-50%'],
            duration: 25000,
            easing: 'linear',
            loop: true
        });
        anime({
            targets: '.marquee-reverse',
            translateX: ['-50%', '0%'],
            duration: 25000,
            easing: 'linear',
            loop: true
        });

    }, []);

    // Scroll reveal observer
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('section-anim')) {
                        anime({
                            targets: entry.target.querySelectorAll('.animate-item'),
                            translateY: [40, 0],
                            opacity: [0, 1],
                            duration: 1000,
                            delay: anime.stagger(100, { start: 300 }),
                            easing: 'easeOutQuart'
                        });

                        // Specifically target skill badges for a grid-like bursting stagger if they exist in this section
                        const skillBadges = entry.target.querySelectorAll('.skill-badge');
                        if (skillBadges.length > 0) {
                            anime({
                                targets: skillBadges,
                                scale: [0, 1],
                                opacity: [0, 1],
                                delay: anime.stagger(100, { grid: [5, 5], from: 'center' }),
                                easing: 'easeOutElastic(1, .6)',
                                duration: 1500
                            });
                        }

                        // Animate Number Counters Counting Up
                        const counters = entry.target.querySelectorAll('.count-up');
                        if (counters.length > 0) {
                            counters.forEach(counter => {
                                const max = parseInt(counter.getAttribute('data-max'));
                                anime({
                                    targets: counter,
                                    innerHTML: [0, max],
                                    easing: 'easeOutExpo',
                                    round: 1,
                                    duration: 2500,
                                    delay: 800
                                });
                            });
                        }

                        // Section specific deep entrance animations
                        if (entry.target.id === 'about') {
                            anime({
                                targets: '.timeline',
                                '--line-height': '100%',
                                duration: 4000,
                                easing: 'easeInOutQuad'
                            });
                            anime({
                                targets: '.about-text p',
                                translateX: [-50, 0],
                                opacity: [0, 1],
                                delay: anime.stagger(200, { start: 500 }),
                                easing: 'easeOutExpo'
                            });
                            anime({
                                targets: '.timeline-item',
                                translateX: [50, 0],
                                opacity: [0, 1],
                                delay: anime.stagger(300, { start: 800 }),
                                easing: 'easeOutElastic(1, .8)'
                            });
                        }

                        if (entry.target.id === 'skills') {
                            anime({
                                targets: '.skill-category-title',
                                scale: [0, 1],
                                rotateX: [90, 0],
                                opacity: [0, 1],
                                delay: anime.stagger(200, { start: 400 }),
                                easing: 'easeOutBack'
                            });
                        }

                        if (entry.target.id === 'projects') {
                            anime({
                                targets: '.project-card',
                                rotateY: [90, 0],
                                rotateX: [-45, 0],
                                translateZ: [-500, 0],
                                opacity: [0, 1],
                                delay: anime.stagger(150, { start: 500 }),
                                easing: 'easeOutElastic(1, .6)',
                                duration: 1500
                            });
                        }

                        if (entry.target.id === 'contact') {
                            anime({
                                targets: '.contact-container .form-group',
                                translateX: (el, i) => i % 2 === 0 ? [-50, 0] : [50, 0],
                                opacity: [0, 1],
                                delay: anime.stagger(200, { start: 600 }),
                                easing: 'easeOutCirc'
                            });
                            anime({
                                targets: '.btn-submit',
                                scale: [0, 1],
                                opacity: [0, 1],
                                delay: 1200,
                                easing: 'spring(1, 80, 10, 0)'
                            });
                        }

                        observer.unobserve(entry.target);
                    }
                }
            });
        }, { threshold: 0.15 });

        document.querySelectorAll('.section-anim').forEach(el => observer.observe(el));

        // Add magnetic cursor logic globally, tracking mouse movements outside of React state for performance
        const cursor = document.querySelector('.neon-cursor');
        const handleMouseMove = (e) => {
            if (cursor) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        const attachCursorHover = () => {
            document.querySelectorAll('a, button, .dot, .timeline-dot, .project-card, .btn').forEach(el => {
                el.addEventListener('mouseenter', () => cursor && cursor.classList.add('hovering'));
                el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('hovering'));
            });
        };
        attachCursorHover();

        return () => {
            observer.disconnect();
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const skillsData = [
        {
            category: 'Languages',
            items: ['Java', 'Python', 'SQL']
        },
        {
            category: 'Frameworks',
            items: ['Flask', 'FastAPI', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-Learn', 'TensorFlow']
        },
        {
            category: 'Tools & Platforms',
            items: ['MySQL', 'MongoDB', 'Git & GitHub', 'VS Code', 'Docker', 'Kubernetes', 'Azure', 'Power BI']
        },
        {
            category: 'AI / GenAI',
            items: ['Hugging Face', 'LLMs', 'Agentic AI', 'APIs']
        },
        {
            category: 'Soft Skills',
            items: ['Quick Learner', 'Team Player', 'Leadership', 'Adaptability']
        }
    ];

    const projectsData = [
        {
            title: 'Scalable HRMS Backend',
            desc: 'Architected a secure, asynchronous backend using FastAPI to handle concurrent employee data operations with RBAC via Supabase.',
            tech: ['Python', 'FastAPI', 'SQL', 'Supabase', 'Docker'],
            link: 'https://github.com/Har-dik25',
            icon: '🏢'
        },
        {
            title: 'AI Traffic Congestion System',
            desc: 'Developed ML models predicting traffic congestion (89% R²) by cleaning and merging 80K+ data records. Real-time forecasting via AWS.',
            tech: ['Python', 'Flask', 'TensorFlow', 'Power BI', 'AWS'],
            link: 'https://github.com/Har-dik25',
            icon: '🚦'
        },
        {
            title: 'Backpack Price Prediction',
            desc: 'Ranked top 10% among 500+ participants by applying XGBoost regression to preprocess 10K+ e-commerce records.',
            tech: ['Python', 'Scikit-Learn', 'XGBoost'],
            link: 'https://github.com/Har-dik25',
            icon: '🎒'
        }
    ];

    const handleProjectMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation limits (-10 to 10 degrees)
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        // Dynamic glare effect calculation 
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;

        card.style.setProperty('--glare-x', `${glareX}%`);
        card.style.setProperty('--glare-y', `${glareY}%`);

        anime({
            targets: card,
            rotateX: rotateX,
            rotateY: rotateY,
            scale: 1.05,
            duration: 100,
            easing: 'linear'
        });
    };

    const handleProjectEnter = (e) => {
        anime({
            targets: e.currentTarget,
            scale: 1.05,
            boxShadow: '0 20px 40px -15px rgba(6, 182, 212, 0.5)',
            duration: 400,
            easing: 'easeOutExpo'
        });
    };

    const handleProjectLeave = (e) => {
        anime({
            targets: e.currentTarget,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            boxShadow: '0 0px 0px 0px rgba(6, 182, 212, 0)',
            duration: 600,
            easing: 'easeOutElastic(1, .8)'
        });
    };

    const handleInputFocus = (e) => {
        anime({
            targets: e.target,
            scale: 1.02,
            boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)',
            borderColor: 'var(--accent-primary)',
            duration: 300,
            easing: 'easeOutCubic'
        });
    };

    const handleInputBlur = (e) => {
        anime({
            targets: e.target,
            scale: 1,
            boxShadow: '0 0 0px rgba(124, 58, 237, 0)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            duration: 200,
            easing: 'easeInCubic'
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        anime({
            targets: btn,
            scale: [1, 0.9, 1.1, 1],
            backgroundColor: ['#7c3aed', '#06b6d4', '#10b981'],
            duration: 1000,
            easing: 'easeInOutQuad',
            complete: () => {
                btn.innerHTML = 'Message Sent! ✓';
                setTimeout(() => {
                    btn.innerHTML = 'Send Message';
                    btn.style.backgroundColor = '';
                }, 3000);
            }
        });
    };

    const handleButtonEnter = (e) => {
        anime({ targets: e.target, scale: 1.05, duration: 300, easing: 'easeOutExpo' });
    };

    const handleButtonLeave = (e) => {
        anime({ targets: e.target, scale: 1, duration: 600, easing: 'easeOutElastic(1, .8)' });
    };

    const handleLogoEnter = (e) => {
        anime({ targets: e.currentTarget, rotateZ: [-2, 2, 0], scale: 1.1, duration: 600, easing: 'easeInOutSine' });
    };

    const handleLogoLeave = (e) => {
        anime({ targets: e.currentTarget, rotateZ: 0, scale: 1, duration: 400, easing: 'easeOutCubic' });
    };

    const handleStatEnter = (e) => {
        anime({ targets: e.currentTarget, scale: 1.05, translateY: -5, boxShadow: '0 10px 20px rgba(124, 58, 237, 0.2)', duration: 400, easing: 'easeOutExpo' });
    };

    const handleStatLeave = (e) => {
        anime({ targets: e.currentTarget, scale: 1, translateY: 0, boxShadow: '0 0px 0px rgba(124, 58, 237, 0)', duration: 600, easing: 'easeOutElastic(1, .8)' });
    };

    const handleNavLinkEnter = (e) => {
        anime({ targets: e.target, translateY: -3, color: '#fff', duration: 200, easing: 'easeOutQuad' });
    };

    const handleNavLinkLeave = (e) => {
        anime({ targets: e.target, translateY: 0, color: 'var(--text-secondary)', duration: 300, easing: 'easeOutQuad' });
    };

    const handleSkillEnter = (e) => {
        anime({ targets: e.currentTarget, scale: 1.1, translateY: -5, rotateZ: () => anime.random(-3, 3), boxShadow: '0 10px 20px rgba(6, 182, 212, 0.4)', borderColor: 'var(--accent-secondary)', color: '#fff', duration: 400, easing: 'easeOutExpo' });
    };

    const handleSkillLeave = (e) => {
        anime({ targets: e.currentTarget, scale: 1, translateY: 0, rotateZ: 0, boxShadow: '0 0px 0px rgba(6, 182, 212, 0)', borderColor: 'rgba(255, 255, 255, 0.1)', color: 'var(--text-secondary)', duration: 600, easing: 'easeOutElastic(1, .8)' });
    };

    const scrambleText = (e) => {
        const el = e.target;
        if (el.dataset.scrambling === 'true') return;
        el.dataset.scrambling = 'true';
        const originalText = el.dataset.text || el.innerText;
        el.dataset.text = originalText;
        const chars = '!<>-_\\/[]{}—=+*^?#________';
        const length = originalText.length;

        anime({
            targets: { step: 0 },
            step: length,
            round: 1,
            easing: 'linear',
            duration: 800,
            update: function (anim) {
                let scrambled = '';
                for (let i = 0; i < length; i++) {
                    if (i < anim.animations[0].currentValue) {
                        scrambled += originalText[i];
                    } else {
                        scrambled += chars[Math.floor(Math.random() * chars.length)];
                    }
                }
                el.innerText = scrambled;
            },
            complete: () => { el.dataset.scrambling = 'false'; el.innerText = originalText; }
        });
    };

    useEffect(() => {
        const explosionChars = ['✦', '★', '✺', '✶', '✷', '✸', '✹', '❀'];
        const handleClick = (e) => {
            // Do not explode on input fields to avoid annoyance typing
            if (e.target.tagName.toLowerCase() === 'input' || e.target.tagName.toLowerCase() === 'textarea') return;

            for (let i = 0; i < 12; i++) {
                const p = document.createElement('div');
                document.body.appendChild(p);
                p.innerText = explosionChars[Math.floor(Math.random() * explosionChars.length)];
                p.style.position = 'fixed';
                p.style.left = e.clientX + 'px';
                p.style.top = e.clientY + 'px';
                p.style.color = Math.random() > 0.5 ? 'var(--accent-secondary)' : 'var(--accent-primary)';
                p.style.pointerEvents = 'none';
                p.style.zIndex = 99999;

                anime({
                    targets: p,
                    translateX: () => anime.random(-150, 150),
                    translateY: () => anime.random(-150, 150),
                    scale: [1, 0],
                    opacity: [1, 0],
                    rotateZ: () => anime.random(-360, 360),
                    duration: () => anime.random(800, 1500),
                    easing: 'easeOutExpo',
                    complete: () => p.remove()
                });
            }
        };
        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    const handleDotEnter = (e) => {
        anime({ targets: e.target, scale: 1.5, duration: 300, easing: 'easeOutExpo' });
    };

    const handleDotLeave = (e) => {
        anime({ targets: e.target, scale: 1, duration: 1000, easing: 'spring(1, 120, 6, 0)' });
    };

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            {/* Scroll Progress Bar Top */}
            <div className="scroll-progress-bar" style={{ position: 'fixed', top: 0, left: 0, height: '3px', background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))', width: `${scrollProgress}%`, zIndex: 10000, transition: 'width 0.1s ease-out', boxShadow: '0 0 10px var(--accent-secondary)' }}></div>

            <div className="neon-cursor"></div>
            {/* Ambient Background Shapes and Active Ripple Grid */}
            <AnimeGridBackground />
            <div className="media-circle" style={{ position: 'fixed', bottom: '10%', left: '5%', width: 20, height: 20, background: 'var(--accent-primary)', borderRadius: '50%', opacity: 0.6, zIndex: 0 }}></div>
            <div className="media-circle" style={{ position: 'fixed', bottom: '15%', left: '8%', width: 15, height: 15, background: 'var(--accent-secondary)', borderRadius: '50%', opacity: 0.6, zIndex: 0 }}></div>

            {/* Morphing SVG Blob */}
            <svg
                className="morph-svg"
                style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vmin', height: '100vmin', pointerEvents: 'none', zIndex: -1, opacity: 0.05 }}
                viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice"
            >
                <path className="morph-path" d="M 300 200 C 500 100 700 150 850 300 C 1000 500 800 800 500 900 C 200 1000 100 700 150 400 C 200 200 250 250 300 200 Z" fill="var(--accent-primary)" />
            </svg>

            {/* Circuit Motion Path Element */}
            <svg
                style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
                viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice"
            >
                <path className="circuit-path" d="M -100 200 L 200 200 L 300 400 L 700 400 L 800 600 L 1100 600" fill="none" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="3" />
            </svg>
            <div className="motion-car" style={{ position: 'fixed', top: -10, left: -10, width: 20, height: 20, background: 'var(--accent-secondary)', borderRadius: '50%', boxShadow: '0 0 15px var(--accent-secondary)', zIndex: 1, pointerEvents: 'none' }}></div>

            <div className="bg-square square-1" style={{ position: 'fixed', top: '20%', left: '10%', width: 50, height: 50, border: '2px solid rgba(124, 58, 237, 0.2)', zIndex: 0 }}></div>
            <div className="bg-square square-2" style={{ position: 'fixed', top: '70%', right: '15%', width: 70, height: 70, border: '2px solid rgba(6, 182, 212, 0.2)', zIndex: 0 }}></div>

            <div className="ticker" style={{ position: 'fixed', top: '10%', right: '10%', width: 40, height: 40, borderTop: '4px solid var(--accent-primary)', borderRight: '4px solid var(--accent-secondary)', borderRadius: '50%', zIndex: 0, opacity: 0.5 }}></div>

            <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
            </div>

            {/* Navigation */}
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container nav-content">
                    <a href="#home" className="logo" onClick={(e) => handleNavClick(e, 'home')} onMouseEnter={handleLogoEnter} onMouseLeave={handleLogoLeave}>
                        hardik<span className="text-accent-gradient">.dev</span>
                    </a>
                    <div className="nav-links">
                        <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')} onMouseEnter={handleNavLinkEnter} onMouseLeave={handleNavLinkLeave}>About</a>
                        <a href="#skills" className="nav-link" onClick={(e) => handleNavClick(e, 'skills')} onMouseEnter={handleNavLinkEnter} onMouseLeave={handleNavLinkLeave}>Skills</a>
                        <a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, 'projects')} onMouseEnter={handleNavLinkEnter} onMouseLeave={handleNavLinkLeave}>Projects</a>
                        <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')} onMouseEnter={handleNavLinkEnter} onMouseLeave={handleNavLinkLeave}>Contact</a>
                    </div>
                </div>
            </nav>

            <main>
                {/* Hero Section */}
                <section id="home" className="hero">
                    <div className="container">
                        <div className="hero-content">
                            <span className="hero-subtitle hero-anim">Welcome</span>
                            <h1 className="heading-display hero-anim" style={{ position: 'relative' }}>
                                Hi, I'm <span style={{ display: 'inline-block', paddingLeft: '8px' }}>
                                    {'Hardik'.split('').map((char, i) => (
                                        <span key={i} className="letter" style={{ display: 'inline-block', color: 'var(--accent-secondary)', minWidth: char === ' ' ? '1rem' : 'auto' }}>{char}</span>
                                    ))}
                                </span>.
                                <svg className="hero-svg-line" width="300" height="80" viewBox="0 0 300 80" style={{ position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', overflow: 'visible', pointerEvents: 'none' }}>
                                    <path className="neon-stroke" d="M 0 40 Q 75 60 150 40 T 300 40" fill="transparent" stroke="var(--accent-secondary)" strokeWidth="4" strokeLinecap="round" strokeDasharray="350" strokeDashoffset="350" />
                                </svg>
                            </h1>
                            <p className="hero-desc hero-anim mt-4">
                                I'm a software engineer specializing in scalable backend architectures and processing complex data into actionable insights using Machine Learning. Let's build something exceptional.
                            </p>
                            <div className="hero-cta hero-anim">
                                <a href="#projects" className="btn btn-primary" onClick={(e) => handleNavClick(e, 'projects')} onMouseEnter={handleButtonEnter} onMouseLeave={handleButtonLeave}>View My Work</a>
                                <a href="#contact" className="btn btn-secondary" onClick={(e) => handleNavClick(e, 'contact')} onMouseEnter={handleButtonEnter} onMouseLeave={handleButtonLeave}>Get In Touch</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About & Experience Section */}
                <section id="about" className="section-anim" style={{ position: 'relative', marginTop: '150px' }}>
                    <div style={{ position: 'absolute', top: '-130px', width: '100%', overflow: 'hidden', whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: -1 }}>
                        <div className="marquee-inner text-accent-gradient" style={{ display: 'inline-block', width: '200%', fontSize: '5rem', fontWeight: 800, opacity: 0.15 }}>
                            IDEATE · INNOVATE · EXECUTE · IDEATE · INNOVATE · EXECUTE · IDEATE · INNOVATE · EXECUTE · IDEATE · INNOVATE · EXECUTE ·
                        </div>
                    </div>
                    <svg style={{ position: 'absolute', top: '-100px', left: 0, width: '100%', height: '100px', pointerEvents: 'none' }} viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="wave-path" d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,0 L0,0 Z" fill="rgba(124, 58, 237, 0.15)" stroke="var(--accent-primary)" strokeWidth="2" />
                    </svg>
                    <div className="container">
                        <h2 className="heading-section animate-item" onMouseEnter={scrambleText} style={{ cursor: 'crosshair' }}>
                            Journey & Insights
                        </h2>

                        <div className="about-grid">
                            <div className="about-text animate-item">
                                <h3 className="timeline-title mb-4">Who I Am</h3>
                                <p>
                                    I am driven by creating innovative solutions that sit at the intersection of robust backend engineering and advanced machine learning models.
                                </p>
                                <p>
                                    My goal is to abstract the complexity out of data architecture, giving users seamless, intelligent digital experiences.
                                </p>

                                <div className="about-stats mt-4">
                                    <div className="stat-box" onMouseEnter={handleStatEnter} onMouseLeave={handleStatLeave}>
                                        <div className="stat-num text-accent-gradient"><span className="count-up" data-max="80">0</span>+</div>
                                        <div className="stat-label">LeetCode Solved</div>
                                    </div>
                                    <div className="stat-box" onMouseEnter={handleStatEnter} onMouseLeave={handleStatLeave}>
                                        <div className="stat-num text-accent-gradient"><span className="count-up" data-max="5">0</span>★</div>
                                        <div className="stat-label">HackerRank Py/SQL</div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline animate-item">
                                <div className="timeline-item">
                                    <div className="timeline-dot" onMouseEnter={handleDotEnter} onMouseLeave={handleDotLeave}></div>
                                    <div className="timeline-content">
                                        <span className="timeline-date">Jun 2025 - Aug 2025</span>
                                        <h3 className="timeline-title">Data Analyst Intern</h3>
                                        <div className="timeline-company">Futurense Technologies</div>
                                        <p className="timeline-desc">Cleaned 30K+ records improving accuracy by 15%, performed EDA accelerating decisions by 20%, and built automated Power BI tracking dashboards.</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-dot" onMouseEnter={handleDotEnter} onMouseLeave={handleDotLeave}></div>
                                    <div className="timeline-content">
                                        <span className="timeline-date">Since Aug 2023</span>
                                        <h3 className="timeline-title">B.Tech - Computer Science</h3>
                                        <div className="timeline-company">Lovely Professional University</div>
                                        <p className="timeline-desc">CGPA: 6.9. Focusing on advanced computing constructs, AI methodologies, and intelligent systems design.</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-dot" onMouseEnter={handleDotEnter} onMouseLeave={handleDotLeave}></div>
                                    <div className="timeline-content">
                                        <span className="timeline-date">Sep 2025</span>
                                        <h3 className="timeline-title">OCI AI & Data Science</h3>
                                        <div className="timeline-company">Oracle Certifications</div>
                                        <p className="timeline-desc">Certified Generative AI Professional & Certified Data Science Professional.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="section-anim" style={{ position: 'relative', marginTop: '150px' }}>
                    <div style={{ position: 'absolute', top: '-130px', width: '100%', overflow: 'hidden', whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: -1 }}>
                        <div className="marquee-reverse" style={{ display: 'inline-block', width: '200%', fontSize: '5rem', fontWeight: 800, color: 'transparent', WebkitTextStroke: '2px var(--accent-secondary)', opacity: 0.25 }}>
                            SOFTWARE ENGINEERING · MACHINE LEARNING · DATA SCIENCE · SOFTWARE ENGINEERING · MACHINE LEARNING · DATA SCIENCE ·
                        </div>
                    </div>
                    <svg style={{ position: 'absolute', top: '-100px', left: 0, width: '100%', height: '100px', pointerEvents: 'none', transform: 'scaleX(-1)' }} viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="wave-path" d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,0 L0,0 Z" fill="rgba(6, 182, 212, 0.15)" stroke="var(--accent-secondary)" strokeWidth="2" />
                    </svg>
                    <div className="container">
                        <h2 className="heading-section animate-item" onMouseEnter={scrambleText} style={{ cursor: 'crosshair' }}>
                            Technical Arsenal
                        </h2>
                        <div className="skills-container">
                            {skillsData.map((category, idx) => (
                                <div key={idx} className="skill-category animate-item">
                                    <h3 className="skill-category-title">{category.category}</h3>
                                    <div className="skill-items">
                                        {category.items.map((item, i) => (
                                            <div key={i} className="skill-badge" onMouseEnter={handleSkillEnter} onMouseLeave={handleSkillLeave}>
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="section-anim" style={{ position: 'relative', marginTop: '150px' }}>
                    <div style={{ position: 'absolute', top: '-130px', width: '100%', overflow: 'hidden', whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: -1 }}>
                        <div className="marquee-inner text-accent-gradient" style={{ display: 'inline-block', width: '200%', fontSize: '5rem', fontWeight: 800, opacity: 0.15 }}>
                            BUILDING THE FUTURE · BUILDING THE FUTURE · BUILDING THE FUTURE · BUILDING THE FUTURE · BUILDING THE FUTURE ·
                        </div>
                    </div>
                    <svg style={{ position: 'absolute', top: '-100px', left: 0, width: '100%', height: '100px', pointerEvents: 'none' }} viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="wave-path" d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,0 L0,0 Z" fill="rgba(124, 58, 237, 0.15)" stroke="var(--accent-primary)" strokeWidth="2" />
                    </svg>
                    <div className="container">
                        <h2 className="heading-section animate-item" onMouseEnter={scrambleText} style={{ cursor: 'crosshair' }}>
                            Selected Works
                        </h2>
                        <div className="projects-grid">
                            {projectsData.map((proj, idx) => (
                                <a
                                    key={idx}
                                    href={proj.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-card animate-item"
                                    style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                                    onMouseEnter={handleProjectEnter}
                                    onMouseMove={handleProjectMouseMove}
                                    onMouseLeave={handleProjectLeave}
                                >
                                    <div className="project-icon" style={{ transform: 'translateZ(30px)' }}>{proj.icon}</div>
                                    <h3 className="project-title" style={{ transform: 'translateZ(20px)' }}>{proj.title}</h3>
                                    <p className="project-desc" style={{ transform: 'translateZ(10px)' }}>{proj.desc}</p>
                                    <div className="project-tech" style={{ transform: 'translateZ(15px)' }}>
                                        {proj.tech.map((t, i) => (
                                            <span key={i} className="tech-tag" onMouseEnter={(e) => anime({ targets: e.target, scale: 1.1, duration: 200, easing: 'easeOutSine' })} onMouseLeave={(e) => anime({ targets: e.target, scale: 1, duration: 200, easing: 'easeOutSine' })}>{t}</span>
                                        ))}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="section-anim" style={{ position: 'relative', marginTop: '150px' }}>
                    <div style={{ position: 'absolute', top: '-130px', width: '100%', overflow: 'hidden', whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: -1 }}>
                        <div className="marquee-reverse" style={{ display: 'inline-block', width: '200%', fontSize: '5rem', fontWeight: 800, color: 'transparent', WebkitTextStroke: '2px var(--accent-secondary)', opacity: 0.25 }}>
                            LET'S WORK TOGETHER · LET'S WORK TOGETHER · LET'S WORK TOGETHER · LET'S WORK TOGETHER · LET'S WORK TOGETHER ·
                        </div>
                    </div>
                    <svg style={{ position: 'absolute', top: '-100px', left: 0, width: '100%', height: '100px', pointerEvents: 'none', transform: 'scaleX(-1)' }} viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="wave-path" d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,0 L0,0 Z" fill="rgba(6, 182, 212, 0.15)" stroke="var(--accent-secondary)" strokeWidth="2" />
                    </svg>
                    <div className="container">
                        <h2 className="heading-section animate-item" onMouseEnter={scrambleText} style={{ cursor: 'crosshair' }}>
                            Let's Connect
                        </h2>
                        <div className="contact-container animate-item">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" placeholder="John Doe" required onFocus={handleInputFocus} onBlur={handleInputBlur} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="john@example.com" required onFocus={handleInputFocus} onBlur={handleInputBlur} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Message</label>
                                    <textarea className="form-control" placeholder="How can I help you?" required onFocus={handleInputFocus} onBlur={handleInputBlur}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-submit" onMouseEnter={handleButtonEnter} onMouseLeave={handleButtonLeave}>Send Message</button>
                            </form>

                            <div className="contact-links mt-4" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '2rem' }}>
                                <a href="https://www.linkedin.com/in/hardik8/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-secondary)', textDecoration: 'none', fontWeight: 600 }}>LinkedIn</a>
                                <a href="https://github.com/Har-dik25" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>GitHub</a>
                                <a href="mailto:hardikkumar2583@gmail.com" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 600 }}>hardikkumar2583@gmail.com</a>
                                <a href="tel:+917878600960" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>+91-7878600960</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Hardik. All rights reserved.</p>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>hardikkumar2583@gmail.com | +91-7878600960</p>
                </div>
            </footer>
        </>
    );
};

export default App;
