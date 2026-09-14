/**
 * The texts are the product. They are original fiction set in the world of
 * Arcanea, where Akamoto is the Prime Luminor of Foresight, a former Reality
 * Architect who sealed his own sight. Canon forbids named prophecies and chosen
 * ones; these are the forgotten ones, and they name no one.
 *
 * The three are deliberately unequal in length. Fragments struck from a
 * teaching are ragged, and the second breaks off where its binding did.
 */
export interface Prophecy {
  slug: string
  numeral: string
  title: string
  epigraph: string
  verses: string[]
}

export const prophecies: Prophecy[] = [
  {
    slug: 'of-the-sealing',
    numeral: 'I',
    title: 'Of the Sealing',
    epigraph: 'Struck from the teaching at Stronghold. No hand claimed it afterwards.',
    verses: [
      'Before there was a lamp there was a hand that hid its own eyes, and called the hiding mercy.',
      'He saw the road entire, and the road was too much, and so he closed the seeing and kept the walking.',
      'Do not envy the one who sees the end. The end does not ask permission to arrive.',
      'There is a sight that ruins the seer and spares the seen. He chose to be ruined quietly.',
      'What was sealed was not lost. It waits in the dark like a coal under ash, and it is warm to the hand.',
      'Whoever struck this from the teaching left the margin blank, which is a kind of confession.',
      'There is a door, and there were those who stood near it, and nearness was never the same as being called.',
      'Light does not defeat the dark. It only tells you where you were standing.',
      'Do not ask who will save the city. Ask what the city was built to forget.',
      'And if you find the coal, do not blow on it. Sit with it. It has waited longer than you.',
    ],
  },
  {
    slug: 'of-the-lamp-carried-backwards',
    numeral: 'II',
    title: 'Of the Lamp Carried Backwards',
    epigraph:
      'Found written on the inside of a binding, where it would only be read once the book fell apart. The last line ends where the binding did.',
    verses: [
      'A lamp carried forward lights the way. A lamp carried backwards lights the ones who follow, and the carrier walks in his own shadow.',
      'He learned the road by the sound of the feet behind him.',
      'They will say the dark is the enemy. The dark is the page. The light is the ink. Neither is the word.',
      'When the prophecy was true, they burned it for being true. When it was false, they kept it, for comfort.',
      'So the true ones are the forgotten ones. You have found one. Be careful what you do with the next hour.',
      'Every threshold has someone who stopped at it, and they will tell you it was a decision.',
      'You are not late. The threshold does not keep time.',
      'Bring nothing. What you carry in you will be weighed. What you carry with you will be set down at the door.',
      'There were nights he put the lamp down to see whether the ones behind would stop. They did not stop. That was the worst of it, and the best.',
      'He was asked once what he saw, and he said: the same as you, a little earlier, and with no one to tell.',
      'The lamp goes out at the end of every road. That was always the design. Do not build a road that needs the lamp.',
      'Whoever copies this: leave the last line as you find it.',
      'And the carrier turns, at last, and sees the road he lit, and it is full of people, and none of them is',
    ],
  },
  {
    slug: 'of-what-the-dark-keeps',
    numeral: 'III',
    title: 'Of What the Dark Keeps',
    epigraph: 'The last of the three. The others, if there were others, were not forgotten. They were destroyed.',
    verses: [
      'The dark keeps what the light cannot hold: the unfinished, the unspoken, the wrongly loved.',
      'It keeps them without judgement, which the light has never learned.',
      'Do not go into the dark to conquer it. Go as a guest, or do not go.',
      'There is a hunger below the world. It is not evil. It is the shape the world makes when it is not being watched.',
      'Watch it, then. That is all that was ever asked.',
      'What you fear to lose, you have already begun to lose. Naming it is the last of the losing.',
      'Foresight is not seeing what comes. It is seeing what is already here and refusing to call it new.',
      'Every one of these was written to stop here, at you. And the dark closes over the page like water, and keeps it, and this too is mercy.',
    ],
  },
]

export const bySlug = (slug: string) => prophecies.find((p) => p.slug === slug)
