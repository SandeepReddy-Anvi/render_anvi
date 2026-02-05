import { pagesLinksList } from "./PagesLinkList";

export const IndustriesCardsList = {
    robotics: {
        imgUrl: '/images/industries/robotics.jpg',
        title: 'Robotics',
        desc: "Blending intelligence with engineering, our robotics division is built to transform how humans interact with challenging environments on Earth.",
        link: pagesLinksList.Robotics,
        activeCard: true,
    },space: {
        imgUrl: '/images/home/galactica.webp', 
        title: 'Space',
        desc: 'Our mission make space safer, smarter, and sustainable through innovation.',
        link: pagesLinksList.Space,
        activeCard: false,
    },energy: {
        imgUrl: '/images/industries/energy.webp',
        title: 'Energy',
        desc: 'At ANVI, hydrogen fuel powers efficient, scalable, zero-emission systems',
        link: pagesLinksList.Energy,
        activeCard: false,
    },entertainment: {
        imgUrl: '/images/industries/entertainment.jpg',
        title: 'Entertainment',
        desc: 'Explore imagination, unleash creativity, and bring ideas vividly to life.',
        link: pagesLinksList.Entertainment,
        activeCard: false,
    },textiles: {
        imgUrl: '/images/industries/textiles.webp',
        title: 'Textiles',
        desc: 'Anvi merges AI and tradition to craft personalized clothing experiences.',
        link: pagesLinksList.Textiles,
        activeCard: false,
    },SemiConductors: {
        imgUrl: '/images/industries/semiconductors.jpg',
        title: 'Semiconductors',
        desc: 'At Anvi, we create advanced semiconductors powering next-gen innovation.',
        link: pagesLinksList.SemiConductors,
        activeCard: false,
    },lifesciences: {
        imgUrl: '/images/industries/lifesciences.jpg',
        title: 'Life Sciences',
        desc: 'Pioneering innovation to improve health, empower communities, and protect Earth.',
        link: pagesLinksList.LifeSciences,
        activeCard: false,
    },foundations: {
        imgUrl: '/images/industries/foundation.jpg',
        title: 'Social Impact',
        desc: 'Empowering people, driving innovation, transforming communities, shaping futures.',
        link: pagesLinksList.Foundations,
        activeCard: false,
    },
};