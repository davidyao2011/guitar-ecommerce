import uuid from "uuid/v4"

let inventory = [
  {
    categories: ["new gears"],
    name: "Taylor GS Mini-e",
    price: "2000",
    image: "../src/images/products/couch66.png",
    description:
      "The Taylor GS Mini-e Koa Natural 2016 not only impresses with a unique look featuring Hawaiian Koa, but also with a surprising tonal range and powerful sound, both acoustically and when amplified.",
    brand: "Taylor",
    currentInventory: 14,
  },
  {
    categories: ["guitars", "acoustic"],
    name: "Taylor GS Koa",
    price: "1000",
    image: "../images/products/taylor2.png",
    description:
      "With the GD11M NS 2 Mahogany Natural Satin presents Takamine an exceptionally open and warm sounding western guitar at a good price-performance ratio. Accordingly, it Dreadnought comes with a body of laminated mahogany and, in combination with a matt finish, provides warm and powerful bass, rich in nuances but striking mid-range and shimmering treble. This makes it Takamine GD11M NS 2 ideal for powerful vocal accompaniment with flatpicking and strumming.",
    brand: "Jason Bourne",
    currentInventory: 2,
  },
  {
    categories: ["guitars", "acoustic"],
    name: "Gibson Craving Bird",
    price: "1600",
    image: "../images/products/couch66.png",
    description:
      "With the GD11M NS 2 Mahogany Natural Satin presents Takamine an exceptionally open and warm sounding western guitar at a good price-performance ratio. Accordingly, it Dreadnought comes with a body of laminated mahogany and, in combination with a matt finish, provides warm and powerful bass, rich in nuances but striking mid-range and shimmering treble. This makes it Takamine GD11M NS 2 ideal for powerful vocal accompaniment with flatpicking and strumming.",
    brand: "Takamine",
    currentInventory: 8,
  },
  {
    categories: ["new gears", "guitars"],
    name: "Taylor Natural LH",
    price: "1900",
    image: "../images/products/taylor3.png",
    description:
      "With the GD11M NS 2 Mahogany Natural Satin presents Takamine an exceptionally open and warm sounding western guitar at a good price-performance ratio. Accordingly, it Dreadnought comes with a body of laminated mahogany and, in combination with a matt finish, provides warm and powerful bass, rich in nuances but striking mid-range and shimmering treble. This makes it Takamine GD11M NS 2 ideal for powerful vocal accompaniment with flatpicking and strumming.",
    brand: "Jason Bourne",
    currentInventory: 10,
  },
  {
    categories: ["on sale", "guitars"],
    name: "Sven Tan Matte",
    price: "1200",
    image: "../images/products/takamine1.png",
    description:
      "With the GD11M NS 2 Mahogany Natural Satin presents Takamine an exceptionally open and warm sounding western guitar at a good price-performance ratio. Accordingly, it Dreadnought comes with a body of laminated mahogany and, in combination with a matt finish, provides warm and powerful bass, rich in nuances but striking mid-range and shimmering treble. This makes it Takamine GD11M NS 2 ideal for powerful vocal accompaniment with flatpicking and strumming.",
    brand: "Jason Bourne",
    currentInventory: 7,
  },
  {
    categories: ["on sale", "guitars"],
    name: "Otis Malt Sofa",
    price: "500",
    image: "../images/products/takamine2.png",
    description:
      "With the GD11M NS 2 Mahogany Natural Satin presents Takamine an exceptionally open and warm sounding western guitar at a good price-performance ratio. Accordingly, it Dreadnought comes with a body of laminated mahogany and, in combination with a matt finish, provides warm and powerful bass, rich in nuances but striking mid-range and shimmering treble. This makes it Takamine GD11M NS 2 ideal for powerful vocal accompaniment with flatpicking and strumming.",
    brand: "Jason Bourne",
    currentInventory: 13,
  },
  {
    categories: ["on sale", "guitars"],
    name: "Ceni Brown 3 Seater",
    price: "650",
    image: "../images/products/takamine3.png",
    description:
      "Aria Delta Player range were developed on 100 series. Dedicated to the delta blues era, The Aria Delta Player range brings you genuine vintage feel at an affordable price. Uncompromised craftsmanship generates pure solid tone and outstanding playability.The new Muddy Brown finish completes the Vintage Vibe.",
    brand: "Jason Bourne",
    currentInventory: 9,
  },
  {
    categories: ["guitars", "acoustic"],
    name: "Aria 101 Stain Natural",
    price: "300",
    image: "../images/products/aria1.png",
    description:
      "Aria Delta Player range were developed on 100 series. Dedicated to the delta blues era, The Aria Delta Player range brings you genuine vintage feel at an affordable price. Uncompromised craftsmanship generates pure solid tone and outstanding playability.The new Muddy Brown finish completes the Vintage Vibe.",
    brand: "Jason Bourne",
    currentInventory: 24,
  },

  {
    categories: ["guitars"],
    name: "Taylor PRS SE",
    price: "1900",
    image: "../images/products/taylor4.jpg",
    description:
      "Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.",
    brand: "Jason Bourne",
    currentInventory: 43,
  },
  {
    categories: ["new gears", "guitars"],
    name: "Fame A-20",
    price: "900",
    image: "../images/products/fame1.jpg",
    description:
      "You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskin throw, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-in look, like your favorite leather jacket.",
    brand: "Jason Bourne",
    currentInventory: 2,
  },
  {
    categories: ["on sale", "guitars"],
    name: "Fame J-20 Dark",
    price: "800",
    image: "../images/products/fame2.jpg",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    currentInventory: 19,
  },

  {
    categories: ["on sale", "electric"],
    name: "Fender Mustang",
    price: "1300",
    image: "../images/products/ele1.jpg",
    description:
      "Since 1964 the Mustang model has been bringing Fender sound and style to the stage and the studio in the hands of trend-setting players ranging from Nirvana to The 1975. Upgraded with performance-oriented features, this new Mustang sports classic style with modern electronics in an ultra-comfortable short-scale form that’s easy to play all night long.",
    brand: "Fender",
    currentInventory: 15,
  },
  {
    categories: ["on sale", "electric"],
    name: "Fender Victory",
    price: "1825",
    image: "../images/products/ele2.jpg",
    description:
      "Since 1964 the Mustang model has been bringing Fender sound and style to the stage and the studio in the hands of trend-setting players ranging from Nirvana to The 1975. Upgraded with performance-oriented features, this new Mustang sports classic style with modern electronics in an ultra-comfortable short-scale form that’s easy to play all night long.",
    brand: "Fender",
    currentInventory: 20,
  },
  {
    categories: ["on sale", "electric"],
    name: "Fender stage classic",
    price: "1720",
    image: "../images/products/ele3.jpg",
    description:
      "Since 1964 the Mustang model has been bringing Fender sound and style to the stage and the studio in the hands of trend-setting players ranging from Nirvana to The 1975. Upgraded with performance-oriented features, this new Mustang sports classic style with modern electronics in an ultra-comfortable short-scale form that’s easy to play all night long.",
    brand: "Fender",
    currentInventory: 3,
  },
  {
    categories: ["on sale", "electric"],
    name: "Fender Affinity",
    price: "2000",
    image: "../images/products/ele4.jpg",
    description:
      "Since 1964 the Mustang model has been bringing Fender sound and style to the stage and the studio in the hands of trend-setting players ranging from Nirvana to The 1975. Upgraded with performance-oriented features, this new Mustang sports classic style with modern electronics in an ultra-comfortable short-scale form that’s easy to play all night long.",
    brand: "Fender",
    currentInventory: 23,
  },
  {
    categories: ["on sale", "electric"],
    name: "Fender Start HSS",
    price: "1150",
    image: "../images/products/ele5.jpg",
    description:
      "Since 1964 the Mustang model has been bringing Fender sound and style to the stage and the studio in the hands of trend-setting players ranging from Nirvana to The 1975. Upgraded with performance-oriented features, this new Mustang sports classic style with modern electronics in an ultra-comfortable short-scale form that’s easy to play all night long.",
    brand: "Fender",
    currentInventory: 13,
  },
  {
    categories: ["on sale", "electric"],
    name: "Start caci Hover",
    price: "1600",
    image: "../images/products/ele6.jpg",
    description:
      "The Sterling by Music Man John Petrucci MAJ100 Majesty RW Ice Crimson Red is the signature model of the Dream Theater guitarist and offers an innovative design that convinces with unlimited playing comfort and versatile sounds of the harder gait. The ergonomic Linde body and free-standing mahogany neck provide unimpeded access to all positions of the fingerboard, while hot humbuckers and the 12dB boost that can be switched on at the amplifier provide plenty of pressure. The Sterling Majesty is completed by an SBMM Modern Tremolo and SBMM Locking tuners.",
    brand: "Sterling",
    currentInventory: 10,
  },

  {
    categories: ["on sale", "electric"],
    name: "Sterling MAX Tone",
    price: "1775",
    image: "../images/products/ele7.jpg",
    description:
      "The Sterling by Music Man John Petrucci MAJ100 Majesty RW Ice Crimson Red is the signature model of the Dream Theater guitarist and offers an innovative design that convinces with unlimited playing comfort and versatile sounds of the harder gait. The ergonomic Linde body and free-standing mahogany neck provide unimpeded access to all positions of the fingerboard, while hot humbuckers and the 12dB boost that can be switched on at the amplifier provide plenty of pressure. The Sterling Majesty is completed by an SBMM Modern Tremolo and SBMM Locking tuners.",
    brand: "Sterling",
    currentInventory: 3,
  },
  {
    categories: ["on sale", "electric"],
    name: "Sterling Livehouse Edition",
    price: "1200",
    image: "../images/products/ele8.jpg",
    description:
      "The Sterling by Music Man John Petrucci MAJ100 Majesty RW Ice Crimson Red is the signature model of the Dream Theater guitarist and offers an innovative design that convinces with unlimited playing comfort and versatile sounds of the harder gait. The ergonomic Linde body and free-standing mahogany neck provide unimpeded access to all positions of the fingerboard, while hot humbuckers and the 12dB boost that can be switched on at the amplifier provide plenty of pressure. The Sterling Majesty is completed by an SBMM Modern Tremolo and SBMM Locking tuners.",
    brand: "Sterling",
    currentInventory: 12,
  },
  {
    categories: ["on sale", "electric"],
    name: "Sterling HOB",
    price: "1600",
    image: "../images/products/ele1.jpg",
    description:
      "The Sterling by Music Man John Petrucci MAJ100 Majesty RW Ice Crimson Red is the signature model of the Dream Theater guitarist and offers an innovative design that convinces with unlimited playing comfort and versatile sounds of the harder gait. The ergonomic Linde body and free-standing mahogany neck provide unimpeded access to all positions of the fingerboard, while hot humbuckers and the 12dB boost that can be switched on at the amplifier provide plenty of pressure. The Sterling Majesty is completed by an SBMM Modern Tremolo and SBMM Locking tuners.",
    brand: "Sterling",
    currentInventory: 18,
  },
  {
    categories: ["on sale", "electric"],
    name: "Sterling by Music Man",
    price: "1550",
    image: "../images/products/ele2.jpg",
    description:
      "The Sterling by Music Man John Petrucci MAJ100 Majesty RW Ice Crimson Red is the signature model of the Dream Theater guitarist and offers an innovative design that convinces with unlimited playing comfort and versatile sounds of the harder gait. The ergonomic Linde body and free-standing mahogany neck provide unimpeded access to all positions of the fingerboard, while hot humbuckers and the 12dB boost that can be switched on at the amplifier provide plenty of pressure. The Sterling Majesty is completed by an SBMM Modern Tremolo and SBMM Locking tuners.",
    brand: "Sterling",
    currentInventory: 11,
  }, // {
]

inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory
