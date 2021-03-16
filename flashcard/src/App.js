import logo from './logo.svg';
import './App.css';
import Card from './Card';

const wordsList = [
  {
    word: 'overwhelm',
    definition: {
      verb: ['To defeat completely.', 'To inundate.', 'To overpower.'],
      noun: ['overwhelming'],
      usage: [],
      translation: { portuguese: [] },
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
