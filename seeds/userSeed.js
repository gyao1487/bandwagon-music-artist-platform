const { User } = require("../models")

const userData = [
    {
        "id": 1,
        "username": "Koifsh",
        "email": "koifsh@gmail.com",
        "password": "koifsh",
        "name": "Koifsh",
        "bio": "CHICAGO SSS Find me everywhere @ koifshhh ( ˘ ³˘)❤",
        "socials": "Instagram: @koifshhh",
        "genre_id": 3,
        "user_image": "https://i.scdn.co/image/ab67616d00001e02405c4faca55dd18abaee8ad4"
    },
    {
        "id": 2,
        "username": "ryxn",
        "email": "ryxn@gmail.com",
        "password": "ryxn",
        "name": "ryxn",
        "bio": "Up-and-coming artist based in Chicago, IL. Currently growing with 200+ listeners per month.",
        "socials": "Everwhere: @ryanwithax",
        "genre_id": 3,
        "user_image": "https://i.scdn.co/image/ab6761610000e5eb534b8c4bb911b6b17a51df23"
      },
      {
        "id": 3,
        "username": "birdbennett",
        "email": "birdbennett@gmail.com",
        "password": "birdbennett",
        "name": "Bird Bennett",
        "bio": "ayo what's up it's bird bennett. im a hiphop artist based outta portland oregon. my music is my absolute everything & my pen is my go to lover. my style is mad unique always inspired by stories of my life. my sound palette is full of many genres, i can get down with anything with the right 808. music is my goto therapy & the only way i feel comfortable expressing myself. i wish 4 the youth to feel inspired by my music & stamp my city on the map. fwm.",
        "socials": "Instagram: @birdbennett",
        "genre_id": 3,
        "user_image": "https://i1.sndcdn.com/avatars-UNJuY52bsJfwXrsf-O9gkwA-t500x500.jpg"
      },
      {
        "id": 4,
        "username": "jaywop",
        "email": "jaywop@gmail.com",
        "password": "jaywop",
        "name": "Jaywop",
        "bio": "Jaywop is a hip-hop artist from Tacoma, Washington and raised in Phoenix, Arizona. In 2020, Wop packed up all of his belongings and moved to Long Beach, CA to pursue his music career full time. Since then he has released 2 projects, Suede serving as his debut and Corduroy his most recent body of work.  Jaywop is a member of his own collective of artists called Junior Varsity.  And as always: Half ass rapper; wholesome ass n--" ,
        "socials": "Everything: @jaywop",
        "genre_id": 1,
        "user_image": "https://images.genius.com/5e3a5f8ae9147b163d47e7e63996b1eb.300x300x1.png"
      },
      {
        "id": 5,
        "username": "fridaynightplans",
        "email": "fridaynightplans@gmail.com",
        "password": "fridaynightplans",
        "name": "Friday Night Plans",
        "bio": "Friday Night Plans is a musical act led by Japanese vocalist Masumi (born January 1996), who is the group's sole member. Debuting in 2017 as a featured vocalist in a collaboration between StarRo and AmPm, Friday Night Plans solo debuted in 2018, primarily collaborating with drummer and producer Tepppei. Friday Night Plans is best known for covering Mariya Takeuchi's 'Plastic Love' in 2018, and her song 'Honda', which was used in commercials for Honda Vezel cars in Japan in 2019.",
        "socials": "Everywhere: @fridaynightplans",
        "genre_id": 2,
        "user_image":"https://yt3.googleusercontent.com/ytc/AL5GRJV2e6MNEMIX6qS5NPvZ6kt-jHSGBV7fNNBhmf7MTg=s900-c-k-c0x00ffffff-no-rj"
      },
      {
        "id": 6,
        "username": "fivenewold",
        "email": "fivenewold@gmail.com",
        "password": "fivenewold",
        "name": "Five New Old",
        "bio": "Their sound is colored deeply by R&B, black music, gospel and elements from the 80's. With a wide range of expressive performance, the lead vocal HIROSHI sings in fluent English with the breezing melody which shows style of great pop rock attracting their wide fan base. They have built their solid career as a live band by performing with artists from the local scene and from abroad, going across various genres." ,
        "socials": "Everywhere: @fivenewold",
        "genre_id": 2,
        "user_image":"https://i.discogs.com/eekRKNEglIbqC3yQhFFXhkGwp9XknhTYltemrCNhhNo/rs:fit/g:sm/q:90/h:543/w:543/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTQ5ODkw/OTYtMTU1NzgyNDc4/My0zODkxLnBuZw.jpeg"
      },
      {
        "id": 7,
        "username": "Noa Mal",
        "email": "noamal@gmail.com",
        "password": "noamal",
        "name": "Noa Mal",
        "bio": "Exclusively For Deranged People.",
        "genre_id": 2,
        "user_image":"https://f4.bcbits.com/img/a2254238296_65"
      },
      {
        "id": 8,
        "username": "Galantis",
        "email": "galantis@gmail.com",
        "password": "galantis",
        "name": "Galantis",
        "bio": "Setting a new standard for songwriting in dance music, Galantis is a collaborative project led by Christian Karlsson (aka Bloodshy, one-third of Miike Snow). Galantis has received over 4 billion cumulative worldwide streams, and over 1 billion video views to date, and is one of dance music's most dynamic and in-demand live performers.",
        "genre_id": 5,
        "user_image":"https://i1.sndcdn.com/avatars-cTMSNSgElQAqWs9z-k37hRA-t500x500.jpg"
      }
  ]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers
