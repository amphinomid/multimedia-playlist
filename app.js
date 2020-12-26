gsap.registerPlugin(ScrollTrigger);

var winter_tl = gsap.timeline( { defaults: { duration: 16 },
    scrollTrigger: {
        trigger: '.winter-animation',
        scrub: 1,
        pin: true,
        start: 'top top',
        end: '+=5000px'
    }
})
.to('.winter-songs', {
    motionPath: {
        path: [ {x: -5130 + document.documentElement.clientWidth + 150, y: 0} ]
    },
    duration: 13,
    ease: 'power3.inOut'
})
.to('.winter-sun', {
    motionPath: {
        path: [ {x: document.documentElement.clientWidth / 2, y: -0.2 * document.documentElement.clientWidth}, {x: document.documentElement.clientWidth, y: 0} ]
    },
    duration: 10,
    ease: 'power1.inOut'
}, '-=13')
.to('.winter-moon', {
    motionPath: {
        path: [ {x: document.documentElement.clientWidth / 2, y: -0.2 * document.documentElement.clientWidth}, {x: document.documentElement.clientWidth, y: 0} ]
    },
    duration: 10,
    ease: 'power1.inOut'
}, '-=9')
.to('.winter-background', { background: "linear-gradient(90deg, hsla(333, 34%, 45%, 1) 0%, hsla(0, 0%, 22%, 1) 50%, hsla(0, 0%, 17%, 1) 100%)", duration: 1.25 }, '-0.25')
.to('.winter-1', { opacity: 0, duration: 1.25 }, '2.25')
.to('.winter-background', { background: "linear-gradient(90deg, hsla(345, 37%, 45%, 1) 0%, hsla(0, 0%, 26%, 1) 50%, hsla(0, 0%, 22%, 1) 100%)", duration: 1.25 }, '2.25')
.to('.winter-2', { opacity: 0, duration: 1.25 }, '3')
.to('.winter-background', { background: "linear-gradient(90deg, hsla(353, 26%, 58%, 1) 0%, hsla(0, 0%, 40%, 1) 50%, hsla(0, 0%, 35%, 1) 100%)", duration: 1.25 }, '3')
.to('.winter-3', { opacity: 0, duration: 1.25 }, '3.75')
.to('.winter-background', { background: "linear-gradient(90deg, hsla(353, 6%, 72%, 1) 0%, hsla(0, 0%, 50%, 1) 50%, hsla(0, 0%, 50%, 1) 100%)", duration: 1.25 }, '3.75')
.to('.winter-4', { opacity: 0, duration: 2 }, '4.5')
.to('.winter-5', { opacity: 1, duration: 0.5 }, '4.5')
.to('.winter-background', { background: "linear-gradient(90deg, hsla(0, 0%, 56%, 1) 0%, hsla(0, 0%, 67%, 1) 50%, hsla(0, 0%, 56%, 1) 100%)", duration: 2 }, '4.5')
.to('.winter-5', { opacity: 0, duration: 1.25 }, '5.25')
.to('.winter-6', { opacity: 1, duration: 0.5 }, '5.25')
.to('.winter-background', { background: "linear-gradient(90deg, hsla(0, 0%, 26%, 1) 0%, hsla(0, 0%, 33%, 1) 50%, hsla(0, 48%, 38%, 1) 100%)", duration: 1.25 }, '5.25')
.to('.winter-animation', { background: "#000000", duration: 1 }, '6')
.to('.wealllie-hajin-lyrics', { color: "#FFFFFF", duration: 0.25 }, '6')
.to('.mymister-quotes', { color: "#FFFFFF", duration: 0.25 }, '6')
.to('.winter-6', { opacity: 0, duration: 1.25 }, '6')
.to('.winter-7', { opacity: 1, duration: 0.5 }, '6')
.to('.winter-background', { background: "linear-gradient(90deg, hsla(0, 0%, 21%, 1) 0%, hsla(0, 0%, 25%, 1) 50%, hsla(0, 58%, 15%, 1) 100%)", duration: 1.25 }, '6')
.to('.winter-background', { background: "linear-gradient(90deg, hsla(0, 0%, 16%, 1) 0%, hsla(0, 0%, 16%, 1) 50%, hsla(0, 74%, 9%, 1) 100%)", duration: 1.25 }, '7.25')
.to('.winter-background', { background: "linear-gradient(0deg, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 0%, 1) 50%, hsla(0, 0%, 0%, 1) 100%)", duration: 5.5 }, '8.5')
//.to('.winter-7', { opacity: 0, duration: 2 }, '14')

var spring_tl = gsap.timeline( { defaults: { duration: 16 },
    scrollTrigger: {
        trigger: '.spring-animation',
        scrub: 1,
        pin: true,
        start: 'top top',
        end: '+=5000px'
    }
})
.to('.spring-songs', {
    motionPath: {
        path: [ {x: -3915 + document.documentElement.clientWidth, y: 0} ]
    },
    duration: 13,
    ease: 'power3.inOut'
})
.to('.spring-sun', {
    motionPath: {
        path: [ {x: document.documentElement.clientWidth / 2, y: -0.2 * document.documentElement.clientWidth}, {x: document.documentElement.clientWidth, y: 0} ]
    },
    duration: 10,
    ease: 'power1.inOut'
}, '-=13')
.to('.spring-moon', {
    motionPath: {
        path: [ {x: document.documentElement.clientWidth / 2, y: -0.2 * document.documentElement.clientWidth}, {x: document.documentElement.clientWidth, y: 0} ]
    },
    duration: 10,
    ease: 'power1.inOut'
}, '-=9')
.to('.spring-background', { background: "linear-gradient(90deg, hsla(320, 45%, 16%, 1) 0%, hsla(318, 17%, 12%, 1) 50%, hsla(0, 0%, 0%, 1) 100%)", duration: 1.25 }, '-0.25')
.to('.spring-1', { opacity: 0, duration: 1.25 }, '2.25')
.to('.spring-background', { background: "linear-gradient(90deg, hsla(320, 63%, 32%, 1) 0%, hsla(319, 33%, 28%, 1) 50%, hsla(318, 17%, 12%, 1) 100%)", duration: 1.25 }, '2.25')
.to('.spring-2', { opacity: 0, duration: 1.25 }, '3')
.to('.spring-background', { background: "linear-gradient(90deg, hsla(257, 63%, 32%, 1) 0%, hsla(238, 43%, 43%, 1) 50%, hsla(238, 43%, 43%, 1) 100%)", duration: 1.25 }, '3')
.to('.spring-3', { opacity: 0, duration: 1.25 }, '3.75')
.to('.spring-background', { background: "linear-gradient(90deg, hsla(222, 60%, 53%, 1) 0%, hsla(214, 70%, 66%, 1) 50%, hsla(222, 60%, 53%, 1) 100%)", duration: 1.25 }, '3.75')
.to('.spring-4', { opacity: 0, duration: 2 }, '4.5')
.to('.spring-background', { background: "linear-gradient(90deg, hsla(222, 60%, 53%, 1) 0%, hsla(214, 70%, 66%, 1) 50%, hsla(264, 79%, 63%, 1) 100%)", duration: 2 }, '4.5')
.to('.spring-5', { opacity: 0, duration: 1.25 }, '5.25')
.to('.spring-background', { background: "linear-gradient(90deg, hsla(222, 40%, 50%, 1) 0%, hsla(214, 39%, 53%, 1) 50%, hsla(264, 36%, 43%, 1) 100%)", duration: 1.25 }, '5.25')
.to('.spring-6', { opacity: 0, duration: 1.25 }, '6')
.to('.spring-animation', { background: "#000000", duration: 1 }, '6')
.to('.palette-iu-lyrics', { color: "#FFFFFF", duration: 0.25 }, '6')
.to('.herecomesathought-stevenuniverse-lyrics1', { color: "#FFFFFF", duration: 0.25 }, '6')
.to('.spring-background', { background: "linear-gradient(90deg, hsla(222, 34%, 25%, 1) 0%, hsla(213, 30%, 28%, 1) 50%, hsla(264, 30%, 23%, 1) 100%)", duration: 1.25 }, '6')
.to('.spring-background', { background: "linear-gradient(90deg, hsla(222, 20%, 13%, 1) 0%, hsla(212, 23%, 14%, 1) 50%, hsla(265, 38%, 6%, 1) 100%)", duration: 1.25 }, '7.25')
.to('.spring-background', { background: "linear-gradient(0deg, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 0%, 1) 50%, hsla(0, 0%, 0%, 1) 100%)", duration: 5.5 }, '8.5')
//.to('.spring-7', { opacity: 0, duration: 2 }, '14')
