
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

export const characters: Character[] =[
  {
    name: 'Eren',
    image: 'https://static.wikia.nocookie.net/fma/images/0/08/213254_1407532169190_full.png',
    color: 'rgb(225,175,60)',
    wikiLink: 'https://fma.fandom.com/wiki/Edward_Elric'
  },
];

enum CharacterIndex {
  'Eren' = 0,
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
          1, 2, 4, 7, 8, 9, 10,
        ].map(i => (season1[season1.findIndex(c => (c.chapter === i))]))
      },
      description: `Central City is the official capital and also the seat of government in Amestris. The National Central Library, Central Command, the 5 National Laboratories, and Amestris' Parliament are all located in Central. Aside from its symbol as a military headquarters, Central is also a bustling metropolis and arguably Amestris' largest city, complete with nearly everything Amestrian society has to offer as well as a lasting and rarely disturbed sense of peace created by its proximity to the government's imposing presence.`,
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
