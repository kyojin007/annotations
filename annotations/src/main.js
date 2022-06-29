import App from './App.svelte';

const annotations = [
  {
    'author': 'Simon',
    'email': 'simon.gilhooly@atom14.co.uk',
    'date': '2 days ago',
    'annotation': 'Look here!',
    'annotations': [
      { 'author': 'Fred Bloggs', 'email': 'fred@bloggs.com', 'date': '1 day ago', 'annotation': 'Wow, I am doing Svelte stuff', 'annotations': [] }
    ]
  },
  {
    'author': 'Fred',
    'email': 'fred@bloggs.com',
    'date': '2 days ago',
    'annotation': 'Look here!',
    'annotations': []
  }

];

const app = new App({
  'target': document.getElementById('app'),
  'props': { annotations }
});

export default app;
