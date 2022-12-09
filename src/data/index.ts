
import { Map, Chapter, Character, Installment, Series, MediaType, DataBundle } from 'character-journey-map/models';
import map from '../assets/MAP.png';

const mapData: Map = {
  image: map,
  dimensions: [2048 , 1615 ],
  source: 'https://fma.fandom.com/wiki/Amestris?file=MAP.png'
};

// <> denotes an appearance, not destination
// ! denotes destination, not an appearance
// * denotes unconfirmed path destination
const season1: Chapter[] = [
  // Edward | Alphonse: !Liore - East City, <Central City>
  { chapter: 1, altName: `To You, in 2000 Years` },
  { chapter: 2, altName: `That Day` },
  { chapter: 3, altName: `A Dim Light Amid Despair` },
  { chapter: 4, altName: `The Night of the Closing Ceremony` },
  { chapter: 6, altName: `The World the Girl Saw` },
  { chapter: 7, altName: `Small Blade` },
  { chapter: 8, altName: `I Can Hear His Heartbeat` },
  { chapter: 9, altName: `Whereabouts of His Left Arm` },
  { chapter: 10, altName: `Response` },
  { chapter: 11, altName: `Idol` },
  { chapter: 12, altName: `Wound` },
  { chapter: 13, altName: `Primal Desire` },
  { chapter: 14, altName: `Can't Look into His Eyes Yet` },
  { chapter: 15, altName: `Special Operations Squad` },
  { chapter: 16, altName: `What Needs to be Done Now` },
  { chapter: 17, altName: `Female Titan` },
  { chapter: 18, altName: `Forest of Giant Trees` },
  { chapter: 19, altName: `Bite` },
  { chapter: 20, altName: `Erwin Smith` },
  { chapter: 21, altName: `Crushing Blow` },
  { chapter: 22, altName: `The Defeated` },
  { chapter: 23, altName: `Smile` },
  { chapter: 24, altName: `Mercy` },
  { chapter: 25, altName: `Wall` },
];

const season2: Chapter[] = [
  { chapter: 1, altName: `Beast Titan` },
  { chapter: 2, altName: `I'm Home` },
  { chapter: 3, altName: `Southwestward` },
  { chapter: 4, altName: `Soldier` },
  { chapter: 5, altName: `Historia` },
  { chapter: 6, altName: `Warrior` },
  { chapter: 7, altName: `Close Combat` },
  { chapter: 8, altName: `The Hunters` },
  { chapter: 9, altName: `Opening` },
  { chapter: 10, altName: `Children` },
  { chapter: 11, altName: `Charge` },
  { chapter: 12, altName: `Scream` }
];

const season3: Chapter[] = [
  { chapter: 1, altName: `Smoke Signal` },
  { chapter: 2, altName: `Pain` },
  { chapter: 3, altName: `Old Story` },
  { chapter: 4, altName: `Trust` },
  { chapter: 5, altName: `Reply` },
  { chapter: 6, altName: `Sin` },
  { chapter: 7, altName: `Wish` },
  { chapter: 8, altName: `Outside the Walls of Orvud District` },
  { chapter: 9, altName: `Ruler of the Walls` },
  { chapter: 10, altName: `Friends` },
  { chapter: 11, altName: `Bystander` },
  { chapter: 12, altName: `Night of the Battle to Retake the Wall` },
  { chapter: 13, altName: `The Town Where Everything Began` },
  { chapter: 14, altName: `Thunder Spears` },
  { chapter: 15, altName: `Descent` },
  { chapter: 16, altName: `Perfect Game` },
  { chapter: 17, altName: `Hero` },
  { chapter: 18, altName: `Midnight Sun` },
  { chapter: 19, altName: `The Basement` },
  { chapter: 20, altName: `That Day` },
  { chapter: 21, altName: `Attack Titan` },
  { chapter: 22, altName: `The Other Side of the Wall` },
];

const season4: Chapter[] = [
  { chapter: 1, altName: `The Other Side of the Sea` },
  { chapter: 2, altName: `Midnight Train` },
  { chapter: 3, altName: `The Door of Hope` },
  { chapter: 4, altName: `From One Hand to Another` },
  { chapter: 5, altName: `Declaration of War` },
  { chapter: 6, altName: `The War Hammer Titan` },
  { chapter: 7, altName: `Assault` },
  { chapter: 8, altName: `Assassin's Bullet` },
  { chapter: 9, altName: `Brave Volunteers` },
  { chapter: 10, altName: `A Sound Argument` },
  { chapter: 11, altName: `Deceiver` },
  { chapter: 12, altName: `Guides` },
  { chapter: 13, altName: `Children of the Forest` },
  { chapter: 14, altName: `Savagery` },
  { chapter: 15, altName: `Sole Salvation` },
  { chapter: 16, altName: `Above and Below` },
  { chapter: 17, altName: `Judgment` },
  { chapter: 18, altName: `Sneak Attack` },
  { chapter: 19, altName: `Two Brothers` },
  { chapter: 20, altName: `Memories of the Future` },
  { chapter: 21, altName: `From You, 2000 Years Ago` },
  { chapter: 22, altName: `Thaw` },
  { chapter: 23, altName: `Sunset` },
  { chapter: 24, altName: `Pride` },
  { chapter: 25, altName: `Night of the End` },
  { chapter: 26, altName: `Traitor` },
  { chapter: 27, altName: `Retrospective` },
  { chapter: 28, altName: `The Dawn of Humanity` }
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
  '' = 5
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
    image: 'https://static.wikia.nocookie.net/fma/images/4/42/Brotherhood_Part_1.jpg',
    chapters: season1
  },
];

export const seriesData: Series = {
  title: 'Attack on Titan',
  stub: 'attackOnTitan',
  image: '',
  timeframe: '1913 - 1915',
  description: `The Galactic Civil War, also referred to as the revolution or the rebellion, was a galactic power struggle in which the Alliance to Restore the Republic waged a rebellion against the ruling Galactic Empire in an attempt to restore democratic rule to the galaxy.`,
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
