import logo from './logo.svg';
import './App.css';
import Card from './Card';

const wordsList = [
  {
    word: 'Overwhelm',
    definition: {
      is: ['Verb'],
      meaning: [
        'To defeat someone of something using a lot of force.',
        'To cause someone to feed sudden strong emotion.',
        'To be to much to deal with.',
      ],
      synonymous: [
        'overpower',
        'overcome',
        'inundate',
        'overload',
        'overburden',
      ],
      usage: [
        'the troops have overwhelmed the rebels, and seized control of the capital',
        'I am overwhelmed by so many birthday wishes',
        'I am overwhelmed with too much work to do.',
      ],
      translation: { portuguese: ['derrotar', 'inundar', 'sobrecarregar'] },
    },
  },
  {
    word: 'Opinionated',
    definition: {
      is: ['Adjective'],
      meaning: [
        'An opinionated person is certain about their beliefs, and expresses their ideas strongly and often',
      ],
      synonymous: ['inflexible', 'arrogant', 'assertive', 'dogmatic'],
      usage: [],
      translation: { portuguese: ['teimoso'] },
    },
  },
  {
    word: 'Esoteric',
    definition: {
      is: ['Adjective'],
      meaning: [
        'Intended for a small group of people',
        'Require special knowledge or interest',
        'Likely to be understood by a small group of people',
      ],
      synonymous: [
        'obscure',
        'abstract',
        'complex',
        'enigmatic',
        'occult',
        'secret',
        'private',
      ],
      usage: [
        'This documentary is too esoteric for my taste.',
        'I enjoy reading esoteric books',
      ],
      translation: { portuguese: ['Esoterico'] },
    },
  },
  {
    word: 'Plunge',
    definition: {
      is: ['verb', 'noun'],
      meaning: [
        'to (cause someone or something to) move or fall suddenly and often a long way forward, down, or into something.',
        'To jump or dive quickly',
        'To push or thrust quickly',
      ],
      synonymous: ['Jump', 'Dive', 'Thrust', 'Push', 'Shove'],
      usage: [
        'I ran down the beach and plunged into the sea',
        'he plunged his hands into his pockets',
      ],
      translation: {
        portuguese: ['mergulhar', 'submerger', 'mergulho', 'imersao'],
      },
    },
  },
];

function App() {
  const random = Math.random();
  return (
    <div className="app-component">
      <Card front={wordsList[0].word} back={wordsList[0].definition} />
    </div>
  );
}

export default App;
