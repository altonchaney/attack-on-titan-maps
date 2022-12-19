
import { Map, Chapter, Character, Installment, Series, MediaType, DataBundle } from 'character-journey-map/models';
import map from '../assets/MAP.jpg';

const mapData: Map = {
  image: map,
  dimensions: [2048 , 1615 ],
  source: 'https://fma.fandom.com/wiki/Amestris?file=MAP.png'
};

// <> denotes an appearance, not destination
// ! denotes destination, not an appearance
// * denotes unconfirmed path destination
const season1: Chapter[] = [
  { chapter: 1, altName: `To You, in 2000 Years` },
  // Eren | Mikasa | Armin | Reiner: Shiganshina District
  { chapter: 2, altName: `That Day` },
  // Eren | Mikasa | Armin: Shiganshina District - Trost*
  { chapter: 3, altName: `A Dim Light Amid Despair` },
  // Eren | Mikasa | Armin: Trost* - Cadet Academy*, Reiner: Shiganshina District* - Cadet Academy*, Annie: Cadet Academy*
  { chapter: 4, altName: `The Night of the Closing Ceremony` },
  // Eren | Mikasa | Armin | Reiner | Annie: Cadet Academy* - Trost District, Levi: Trost District, Annie: Cadet Academy* - Mitras!
  { chapter: 5, altName: `First Battle` },
  // Eren | Mikasa | Armin | Reiner | Annie: Trost District
  { chapter: 6, altName: `The World the Girl Saw` },
  // Eren | Mikasa | Armin | Reiner | Annie: Trost District
  { chapter: 7, altName: `Small Blade` },
  // Eren | Mikasa | Armin | Reiner | Annie: Trost District
  { chapter: 8, altName: `I Can Hear His Heartbeat` },
  // Eren | Mikasa | Armin | Reiner | Annie: Trost District
  { chapter: 9, altName: `Whereabouts of His Left Arm` },
  // Eren | Mikasa | Armin | Reiner | Annie: Trost District, Levi: Trost District - (South of Trost)
  { chapter: 10, altName: `Response` },
  // Eren | Mikasa | Armin | Reiner | Annie: Trost District
  { chapter: 11, altName: `Idol` },
  // Eren | Mikasa | Armin | Reiner | Annie: Trost District
  { chapter: 12, altName: `Wound` },
  // Eren | Mikasa | Armin | Reiner | Annie: Trost District
  { chapter: 13, altName: `Primal Desire` },
  // Eren | Mikasa | Armin | Reiner | Annie: Trost District - Mitras, Levi: (South of Trost) - Trost District - Mitras
  { chapter: 14, altName: `Can't Look into His Eyes Yet` },
  // Eren | Mikasa | Armin | Reiner | Annie | Levi: Mitras
  { chapter: 15, altName: `Special Operations Squad` },
  // Eren | Mikasa | Armin | Reiner | Annie | Levi: Mitras! - Former Scout HQ*
  { chapter: 16, altName: `What Needs to be Done Now` },
  // Eren | Mikasa | Armin | Reiner | Levi: Former Scout HQ* - Stohess District - Calaneth District, Annie: Former Scout HQ* - Stohess District
  { chapter: 17, altName: `Female Titan` },
  // Eren | Mikasa | Armin | Reiner | Levi: Calaneth District - (57th Scout Expedition), Annie: Stohess District - Calaneth District - (57th Scout Expedition)
  { chapter: 18, altName: `Forest of Giant Trees` },
  // Eren | Mikasa | Armin | Levi | Reiner | Annie: (57th Scout Expedition) - Forest of Giant Trees
  { chapter: 19, altName: `Bite` },
  // Eren | Mikasa | Armin | Levi | Reiner | Annie: (57th Scout Expedition) - Forest of Giant Trees
  { chapter: 20, altName: `Erwin Smith` },
  // Eren | Mikasa | Armin | Levi | Reiner | Annie: Forest of Giant Trees
  { chapter: 21, altName: `Crushing Blow` },
  // Eren | Mikasa | Armin | Levi | Reiner | Annie: Forest of Giant Trees
  { chapter: 22, altName: `The Defeated` },
  // Eren | Mikasa | Armin | Reiner | Levi: Forest of Giant Trees - Calaneth District, Annie: Forest of Giant Trees
  { chapter: 23, altName: `Smile` },
  // Eren | Mikasa | Armin | Levi: Calaneth District - Former Scout HQ* - Stohess District, Reiner: Calaneth District - Former Scout HQ*, Annie: Forest of Giant Trees -* Stohess District
  { chapter: 24, altName: `Mercy` },
  // Eren | Mikasa | Armin | Levi | Annie: Stohess District
  { chapter: 25, altName: `Wall` },
  // Eren | Mikasa | Armin | Levi | Annie: Stohess District
];

const season2: Chapter[] = [
  { chapter: 1, altName: `Beast Titan` },
  // Eren | Mikasa | Armin | Levi: Stohess District, Zeke: Ragako! - Ragako nearby SE!, Reiner: Former Scout HQ* - Ragako!
  { chapter: 2, altName: `I'm Home` },
  // Eren | Mikasa | Armin | Levi: Stohess District, Reiner: Ragako, Levi: Trost District, <Dauper>
  { chapter: 3, altName: `Southwestward` },
  // Eren | Mikasa | Armin: Stohess District - Ehrmich District, Reiner: Ragako - Utgard Castle, Zeke: Ragako nearby SE! - Utgard Castle - Wall, <Trost District>, <Dauper>
  { chapter: 4, altName: `Soldier` },
  // Reiner: Utgard Castle
  { chapter: 5, altName: `Historia` },
  // Eren | Mikasa | Armin: Ehrmich District - Utgard Castle, Reiner: Utgard Castle
  { chapter: 6, altName: `Warrior` },
  // Eren | Mikasa | Armin | Reiner: Utgard Castle - Wall Rose, <Ehrmich District>
  { chapter: 7, altName: `Close Combat` },
  // Eren | Mikasa | Armin | Reiner: Wall Rose
  { chapter: 8, altName: `The Hunters` },
  // Mikasa | Armin: Wall Rose, Eren | Reiner: Wall Rose - Forest of Giant Trees, Levi: Stohess District -* Trost District
  { chapter: 9, altName: `Opening` },
  // Mikasa | Armin | Levi: Wall Rose - Forest of Giant Trees, Eren | Reiner: Forest of Giant Trees
  { chapter: 10, altName: `Children` },
  // Mikasa | Armin | Eren | Reiner: Forest of Giant Trees, <Ragako>
  { chapter: 11, altName: `Charge` },
  // Mikasa | Armin | Eren | Reiner: Forest of Giant Trees - (towards Shingashina)
  { chapter: 12, altName: `Scream` }
  // Mikasa | Armin | Eren: (towards Shingashina) - Trost District, Reiner: (towards Shingashina) - Shiganshina District, Zeke: Wall Rose -* Shiganshina District, Levi: Trost District
];

const season3: Chapter[] = [
  { chapter: 1, altName: `Smoke Signal` },
  // Mikasa | Armin | Eren | Levi: Trost District! - (Trost Scout HQ) - Trost District
  { chapter: 2, altName: `Pain` },
  // Eren: Trost District, Mikasa | Armin | Levi: Trost District - (Forest outside Stohess), <Stohess District>
  { chapter: 3, altName: `Old Story` },
  // Mikasa | Armin | Levi: (Forest outside Stohess), <Stohess District>, <Trost District>, <Mitras>
  { chapter: 4, altName: `Trust` },
  // Mikasa | Armin | Levi: (Forest outside Stohess), <Stohess District>, <Trost District>, <Mitras>
  { chapter: 5, altName: `Reply` },
  // Mikasa | Armin | Levi: (Forest outside Stohess) - Trost District, Eren: <Trost District> -* Reiss Chapel
  { chapter: 6, altName: `Sin` },
  // Mikasa | Armin | Levi: Trost District - Reiss Chapel, Eren: Reiss Chapel, <Mitras>
  { chapter: 7, altName: `Wish` },
  // Mikasa | Armin | Levi | Eren: Reiss Chapel
  { chapter: 8, altName: `Outside the Walls of Orvud District` },
  // Mikasa | Armin | Levi | Eren: Reiss Chapel - Orvud District
  { chapter: 9, altName: `Ruler of the Walls` },
  // Mikasa | Armin | Levi | Eren: Orvud District, <Reiss Chapel>
  { chapter: 10, altName: `Friends` },
  // Levi: Orvud District - Reiss Chapel - Orvud District, Mikasa | Armin | Eren: Orvud District- Mitras, Reiner | Zeke: Shingashina, <Mitras>
  { chapter: 11, altName: `Bystander` },
  // Mikasa | Armin | Eren: <Mitras> - Reiss Farm - Trost, Levi: Orvud District! -* Trost
  { chapter: 12, altName: `Night of the Battle to Retake the Wall` },
  // Mikasa | Armin | Eren | Levi: Trost
  { chapter: 13, altName: `The Town Where Everything Began` },
  // Mikasa | Armin | Eren | Levi: Trost! - Shingashina, Reiner | Zeke: Shingashina
  { chapter: 14, altName: `Thunder Spears` },
  // Mikasa | Armin | Eren | Levi | Reiner | Zeke: Shingashina
  { chapter: 15, altName: `Descent` },
  // Mikasa | Armin | Eren | Levi | Reiner | Zeke: Shingashina
  { chapter: 16, altName: `Perfect Game` },
  // Mikasa | Armin | Eren | Levi | Reiner | Zeke: Shingashina
  { chapter: 17, altName: `Hero` },
  // Mikasa | Armin | Eren | Levi | Reiner | Zeke: Shingashina
  { chapter: 18, altName: `Midnight Sun` },
  // Mikasa | Armin | Eren | Levi | Reiner | Zeke: Shingashina
  { chapter: 19, altName: `The Basement` },
  // Mikasa | Armin | Eren | Levi: Shingashina, <Trost>
  { chapter: 20, altName: `That Day` },
  // Mikasa | Armin | Eren | Levi: <Shingashina> - Trost
  { chapter: 21, altName: `Attack Titan` },
  // Mikasa | Armin | Eren | Levi: Trost
  { chapter: 22, altName: `The Other Side of the Wall` },
  // Mikasa | Armin | Eren: Trost - Mitras -* Krugar's Wall, Levi: Trost - Mitras
];

const season4: Chapter[] = [
  { chapter: 1, altName: `The Other Side of the Sea` },
  // Reiner | Zeke: Shingashina -* Marley
  { chapter: 2, altName: `Midnight Train` },
  // Reiner | Zeke: Marley, Eren: Krugar's Wall -* Marley
  { chapter: 3, altName: `The Door of Hope` },
  // Reiner | Zeke | Eren: Marley
  { chapter: 4, altName: `From One Hand to Another` },
  // Reiner | Zeke | Eren: Marley
  { chapter: 5, altName: `Declaration of War` },
  // Reiner | Zeke | Eren: Marley
  { chapter: 6, altName: `The War Hammer Titan` },
  // Reiner | Zeke | Eren: Marley, Mikasa | Armin | Levi: Krugar's Wall -* Marley
  { chapter: 7, altName: `Assault` },
  // Reiner | Zeke | Eren | Mikasa | Armin | Levi: Marley
  { chapter: 8, altName: `Assassin's Bullet` },
  // Reiner | Zeke | Eren | Mikasa | Armin | Levi: Marley
  { chapter: 9, altName: `Brave Volunteers` },
  // Eren | Mikasa | Armin: Marley! - Krugar's Wall! - Trost, Zeke | Levi: Marley! - Krugar's Wall! - Forest of Giant Trees
  { chapter: 10, altName: `A Sound Argument` },
  // Eren | Mikasa | Armin: Trost, Zeke | Levi: Forest of Giant Trees
  { chapter: 11, altName: `Deceiver` },
  // Reiner: Marley, <Trost>, <Dauper>
  { chapter: 12, altName: `Guides` },
  // Eren | Mikasa | Armin: Trost, <Dauper>
  { chapter: 13, altName: `Children of the Forest` },
  // Zeke | Levi: Forest of Giant Trees, Eren | Mikasa | Armin: Trost
  { chapter: 14, altName: `Savagery` },
  // Zeke | Levi: Forest of Giant Trees, Eren | Mikasa | Armin: Shingashina
  { chapter: 15, altName: `Sole Salvation` },
  // Zeke | Levi: Forest of Giant Trees
  { chapter: 16, altName: `Above and Below` },
  // Zeke | Levi: Forest of Giant Trees, Eren | Mikasa | Armin: Trost! - Shingashina, Reiner: Marley! - Shingashina
  { chapter: 17, altName: `Judgment` },
  // Zeke | Levi: Forest of Giant Trees, Eren | Mikasa | Armin | Reiner: Shingashina
  { chapter: 18, altName: `Sneak Attack` },
  // Zeke: Forest of Giant Trees! - Shingashina, Eren | Mikasa | Armin | Reiner: Shingashina
  { chapter: 19, altName: `Two Brothers` },
  // Zeke | Eren | Mikasa | Armin | Reiner: Shingashina
  { chapter: 20, altName: `Memories of the Future` },
  // <Shingashina>, <Reiss Chapel>
  { chapter: 21, altName: `From You, 2000 Years Ago` },
  // Eren | Mikasa | Armin | Reiner: Shingashina
  { chapter: 22, altName: `Thaw` },
  // Eren: Shingashina - (S of Shingashina), Mikasa | Armin | Reiner: Shingashina, Annie: Trost
  { chapter: 23, altName: `Sunset` },
  // Eren: (S of Shingashina), Mikasa | Armin | Reiner: Shingashina, Annie: Trost, <Marley>
  { chapter: 24, altName: `Pride` },
  // Eren: (S of Shingashina), Armin: Shingashina! - Ragako - Shingashina, Mikasa | Reiner: Shingashina, Levi: Forest of Giant Trees! - Shingashina, Annie: Trost! - Shingashina
  { chapter: 25, altName: `Night of the End` },
  // Eren: (S of Shingashina) - Kruger's Wall!, Armin | Mikasa | Reiner | Levi | Annie: Shingashina - (S of Shingashina)
  { chapter: 26, altName: `Traitor` },
  // Eren: Kruger's Wall! - (towards Marley), Armin | Mikasa | Reiner | Levi | Annie: (S of Shingashina) - Kruger's Port
  { chapter: 27, altName: `Retrospective` },
  // Eren: (towards Marley), Armin | Mikasa | Reiner | Levi | Annie: Kruger's Port
  { chapter: 28, altName: `The Dawn of Humanity` }
  // Eren: (towards Marley) - Marley, Armin | Mikasa | Reiner | Levi | Annie: Kruger's Port! - (towards Marley)
];

export const characters: Character[] =[
  {
    name: 'Eren',
    image: 'https://static.wikia.nocookie.net/shingekinokyojin/images/3/3c/Eren_Jaeger_%28Anime%29_character_image_%28850%29.png',
    color: 'rgb(225,175,60)',
    wikiLink: 'https://attackontitan.fandom.com/wiki/Eren_Jaeger_(Anime)'
  },
  {
    name: 'Armin',
    image: 'https://static.wikia.nocookie.net/shingekinokyojin/images/f/ff/Armin_Arlelt_%28Anime%29_character_image_%28850%29.png',
    color: 'rgb(225,175,60)',
    wikiLink: 'https://attackontitan.fandom.com/wiki/Armin_Arlelt_(Anime)'
  },
  {
    name: 'Mikasa',
    image: 'https://static.wikia.nocookie.net/shingekinokyojin/images/3/36/Mikasa_Ackermann_%28Anime%29_character_image_%28850%29.png',
    color: 'rgb(225,175,60)',
    wikiLink: 'https://attackontitan.fandom.com/wiki/Mikasa_Ackermann_(Anime)'
  },
  {
    name: 'Levi',
    image: 'https://static.wikia.nocookie.net/shingekinokyojin/images/f/f0/Levi_Ackermann_%28Anime%29_character_image_%28850%29.png',
    color: 'rgb(225,175,60)',
    wikiLink: 'https://attackontitan.fandom.com/wiki/Levi_Ackermann_(Anime)'
  },
  {
    name: 'Annie',
    image: 'https://static.wikia.nocookie.net/shingekinokyojin/images/8/80/Annie_Leonhart_%28Anime%29_character_image_%28850%29.png',
    color: 'rgb(225,175,60)',
    wikiLink: 'https://attackontitan.fandom.com/wiki/Annie_Leonhart_(Anime)'
  },
  {
    name: 'Reiner',
    image: 'https://static.wikia.nocookie.net/shingekinokyojin/images/7/7e/Reiner_Braun_%28Anime%29_character_image_%28850%29.png',
    color: 'rgb(225,175,60)',
    wikiLink: 'https://attackontitan.fandom.com/wiki/Reiner_Braun_(Anime)'
  },
  {
    name: 'Zeke',
    image: 'https://static.wikia.nocookie.net/shingekinokyojin/images/1/1a/Zeke_Jaeger_%28Anime%29_character_image_%28850%29.png',
    color: 'rgb(225,175,60)',
    wikiLink: 'https://attackontitan.fandom.com/wiki/Zeke_Jaeger_(Anime)'
  },
];

enum CharacterIndex {
  'Eren' = 0,
  'Mikasa' = 1,
  'Armin' = 2,
  'Levi' = 3,
  'Annie' = 4,
  'Reiner' = 5,
  'Zeke' = 6,
}

enum InstallmentIndex {
  'season1' = 0,
  'part2' = 1,
  'part3' = 2,
  'part4' = 3,
  'part5' = 4,
}

export const installments: Installment[] = [
  {
    title: 'Season 1',
    type: MediaType.Television,
    image: 'https://static.wikia.nocookie.net/shingekinokyojin/images/d/d8/Attack_on_Titan_Season_1.jpg',
    chapters: season1
  },
];

export const seriesData: Series = {
  title: 'Attack on Titan',
  stub: 'attackOnTitan',
  image: '',
  timeframe: '845 - 854',
  description: `Attack on Titan is set in a world where humanity lives inside cities surrounded by enormous Walls that protect them from Titans, gigantic humanoid creatures who devour humans seemingly without reason.`,
  color: 'rgb(139,53,29)',
  backgroundColor: 'rgb(216,192,155)',
  installments: installments,
  characters: characters
};

export const DATA: DataBundle = {
  ...seriesData,
  map: mapData,
  markers: [
    {
      title: 'Central City',
      coordinates: [976, 1742.5],
      type: 'city',
      image: 'https://static.wikia.nocookie.net/fma/images/d/d1/Centralcommand.png',
      appearances: {
        [InstallmentIndex.season1 + 1]: [
          
        ].map(i => (season1[season1.findIndex(c => (c.chapter === i))]))
      },
      description: ``,
      wikiLink: 'https://fma.fandom.com/wiki/Central_City',
      confirmed: true
    },
  ],
  paths: [
    {
      character: characters[CharacterIndex.Eren],
      installment: installments[InstallmentIndex.season1],
      chapter: season1[season1.findIndex(c => (c.chapter === 2))],
      confirmed: true,
      coordinates: [
        [976, 1742.5],
        [903, 1833],
      ],
    },
  ]
};
