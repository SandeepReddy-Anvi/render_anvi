export const newsDataList = [
  {
    id: 1,
    date: '11 March 2025',
    title: 'SLBC tunnel rescue efforts get robotic support by Anvi robotics',
    info: 'ANVI Robotics deployed robots with cameras, infrared sensors aiding SLBC tunnel rescue to overcome challenging conditions.',
    category: 'Press Releases',
    imageUrl: '/images/news/SLBC tunnel.png', // Placeholder for the actual image path
    newsLink: "https://telanganatoday.com/slbc-tunnel-rescue-efforts-get-robotic-support",
    openInNewTab:true,
  },
  {
    id: 2,
    date: 'April 17, 2025',
    title: 'With its revolutionary robo-tech, Anvi Robotics dives into danger zones.',
    info: 'Anvi Robotics’ AI-powered robots aided SLBC rescue, proving technology’s vital role in dangerous, life-saving missions.',
    category: 'Press Releases',
    imageUrl: '/images/news/robot-tech.jpg', // Placeholder for the actual image path
    newsLink: "https://www.newindianexpress.com/cities/hyderabad/2025/Apr/17/with-its-revolutionary-robo-tech-anvi-robotics-dives-into-danger-zones",
    openInNewTab:true,
  },
  {
    id: 3,
    date: 'June 30, 2025',
    title: 'Witness the global launch of Anvi’s Surveillance Robot on 30 June 2025.',
    info: 'Step into the future of intelligent security as Anvi unveils its revolutionary Surveillance Robot to the world.',
    category: 'Next at Anvi',
    imageUrl: '/images/home/robo_img.jpg', // Placeholder for the actual image path
    newsLink: "/news",
    openInNewTab: false,
  },
  {
    id: 4,
    date: 'December 15, 2025',
    title: 'With its revolutionary robo-tech, Anvi Robotics dives into danger zones.',
    info: 'Anvi Robotics’ AI-powered robots aided SLBC rescue, proving technology’s vital role in dangerous, life-saving missions.',
    category: 'Inside Anvi',
    imageUrl: '/images/news/collective.jpeg', // Placeholder for the actual image path
    newsLink: "/collective",
    openInNewTab: false,

  },
];

export const newsTabsList = [
    { name: 'All Categories', count: newsDataList.length, active: true },
    { name: 'Next at Anvi', count: newsDataList.filter(e => e.category === 'Next at Anvi').length, active: false },
    // { name: 'Announcements', count: 0, active: false },
    { name: 'Press Releases', count: 2, active: false },
    { name: 'Inside Anvi', count: newsDataList.filter(e => e.category === 'Inside Anvi').length, active: false },
    { name: 'Announcements', count: newsDataList.filter(e => e.category === 'Announcements').length, active: false },
];