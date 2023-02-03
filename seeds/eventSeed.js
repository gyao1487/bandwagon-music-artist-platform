const { Event } = require("../models");

const eventData = [
  {
    id: 1,
    event_name: "Underground Artist Showcase",
    date: "2023-04-23",
    time: "5:30 PM",
    address: "633 Clark St, Evanston, IL 60208",
    content: "'Underground Artists' is an event showcasing the talent of emerging and independent artists who operate outside of mainstream exposure. The event provides a platform for these artists to showcase their unique and diverse works, including music, visual arts, and performance pieces. Attendees can expect to experience a refreshing and dynamic showcase of creativity, as well as the opportunity to discover new artists and perspectives. Whether you're a fan of alternative art forms or simply looking for something new, 'Underground Artists' is a must-see event.",
    artist_id: 1,
    event_image:
      "https://www.magneticmag.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTM1MjA2NzQ3MDMwNzQ1MDU4/artists-03_top20png.png",
  },
  {
    id: 2,
    event_name: "Dark at 4pm",
    date: "2023-04-23",
    time: "5:30 PM",
    address: "1901 W Madison St, Chicago, IL 60612",
    content: "'Dark at 4 PM' is a musical event that promises to deliver a captivating and immersive experience for audiences. Featuring a lineup of artists and performers that specialize in dark and alternative music genres, the event promises to be a thrilling showcase of musical talent. Expect to hear hauntingly beautiful songs, intense beats, and powerful vocals that will leave you feeling exhilarated. Whether you're a fan of darkwave, gothic, industrial, or any other genre that defies the mainstream, 'Dark at 4 PM' is the perfect event for you. So come ready to experience music that is bold, daring, and unapologetically unique.",
    artist_id: 2,
    event_image: "https://external-preview.redd.it/kmdaM1P4Qyn3yfbuPyOBvN0Pn3aanLtQWsApkU9_8qY.jpg?auto=webp&s=fa1aebd6a980c845b7e358e557eda1bff04fa351"
  },
  {
    id: 3,
    event_name: "Creepy Girls",
    date: "2023-04-23",
    time: "9:00 PM",
    address: "633 Clark St, Evanston, IL 60208",
    content: "'Creepy Girls' is a musical event that celebrates the power and diversity of women in alternative and underground music scenes. Featuring an all-female lineup of artists and performers, the event is a showcase of the incredible talent and creativity of these 'creepy girls.' Expect to hear a range of musical styles, from darkwave and gothic to experimental and industrial, all with a unique and hauntingly beautiful twist. With powerful vocals, haunting beats, and unforgettable performances, 'Creepy Girls' is a must-see event for fans of alternative and underground music. So come and experience the beauty of darkness and the strength of women in music.",
    artist_id: 7,
    event_image: "https://images.unsplash.com/photo-1598311415207-c8875c577522?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlZXB5JTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    id: 4,
    event_name: "EDM Blastoff",
    date: "2023-04-23",
    time: "7:30 PM",
    address: "1901 W Madison St, Chicago, IL 60612",
    content: "'EDM Blastoff' is an electrifying dance music event that promises to take audiences on a journey through the high-energy world of electronic dance music (EDM). With a lineup of talented DJs and producers, the event will feature an explosive mix of beats, drops, and basslines that are sure to get the crowd moving. Whether you're a fan of trance, house, techno, or any other sub-genre of EDM, you can expect to experience the full spectrum of electronic dance music. So come ready to dance, jump, and let loose as you blast off into the world of EDM. 'EDM Blastoff' is the perfect event for anyone who loves high-energy music and an unforgettable party atmosphere.",
    artist_id: 8,
    event_image: "https://edm.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_960%2Cx_912%2Cy_1166/MTkwMjkxMDIxOTYyMTU5NTA4/nosec4_068.jpg",
  },
  {
    id: 5,
    event_name: "New School Rap",
    date: "2023-04-10",
    time: "7:30 PM",
    address: "633 Clark St, Evanston, IL 60208",
    content: "'New School Rap' is a musical event that celebrates the contemporary and innovative sounds of hip-hop and rap. Featuring a lineup of the hottest and most promising new artists in the rap and hip-hop scenes, this event is the perfect opportunity to experience the future of rap and hip-hop music. With electrifying performances, catchy beats, and thought-provoking lyrics, the artists of 'New School Rap' are pushing the boundaries of the genre and delivering fresh and exciting sounds that are sure to get audiences pumped up. Whether you're a fan of old school rap or just looking to discover the newest and coolest trends in hip-hop, 'New School Rap' is the event for you. So come and experience the future of rap and hip-hop music.",
    artist_id: 3,
    event_image: "https://images.complex.com/complex/images/c_scale,f_auto,q_auto,w_1920/fl_lossy,pg_1/dm3ybmsk8cd81de2fc02/underground-rap-evolution-1?fimg-ssr-default",
  },
  {
    id: 6,
    event_name: "City Pop Tribute Night ft. Five New Old",
    date: "2023-02-24",
    time: "5:30 PM",
    address: "633 Clark St, Evanston, IL 60208",
    content: "'City Pop Night' is a nostalgic musical event that celebrates the unique and timeless sound of City Pop, a sub-genre of Japanese pop music that was popular during the 1980s. Featuring a lineup of artists and DJs who specialize in this retro style, the event promises to transport audiences back in time to the era of neon lights and vibrant cityscapes. With upbeat tempos, catchy melodies, and smooth grooves, City Pop music is the perfect soundtrack for a night of dancing and good times. Whether you're a fan of this nostalgic genre or just looking for a fun and energetic party, 'City Pop Night' is the event for you. So come ready to experience the retro sounds of City Pop and dance the night away.",
    artist_id: 6,
    event_image: "https://images.squarespace-cdn.com/content/v1/5bd7707c11f7847c45b4b9dd/6de614dc-cdf3-480f-9cb3-c94fec312bf4/R-6444412-1588694917-2613.jpg?format=750w",
  },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;

// sample input Data
// {
//   "event_name": "This might work!",
//   "date": "2023-01-07 16:00:00",
//   "address": "somewhere where this works",
//   "content": "If you see this, it's working",
//   "artist_id": 103,
//   "event_image": null
// }
//    {
//       "event_name": "If this shows up, it's not working",
//       "date": "2023-01-14 16:00:00",
//       "address": "the sunken place",
//       "content": "This is the event that should NOT show up",
//       "artist_id": 101,
//       "event_image": null
//   },
//   {
//     "event_name": "If this shows up, it IS working",
//     "date": "2023-01-15 16:00:00",
//     "address": "the sunken place",
//     "content": "This is the event that SHOULD show up",
//     "artist_id": 101,
//     "event_image": null
// },
