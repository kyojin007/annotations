import App from './App.svelte';

const users = [
  { 'id': 0, 'author': 'Simon', 'email': 'simon.gilhooly@atom14.co.uk' },
  { 'id': 1, 'author': 'Fred Bloggs', 'email': 'fred@bloggs.com' },
  { 'id': 2, 'author': 'Contrary Mary', 'email': 'mary@email.com' }
];

const annotations = [
  {
    'annotator': users[0],
    'date': '2 days ago',
    'annotation': 'Look here!',
    'annotations': [
      {
        'annotator': users[1],
        'date': '1 day ago',
        'annotation': 'Wow, I am doing Svelte stuff',
        'annotations': []
      }
    ]
  },
  {
    'annotator': users[1],
    'date': '12 days ago',
    'annotation': 'My first comment!',
    'annotations': []
  }
];

const app = new App({
  'target': document.getElementById('app'),
  'props': {
    annotations,
    users
  }
});

export default app;
