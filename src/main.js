import App from './App.svelte';
import md5 from 'blueimp-md5';

const users = [
  { 'id': 0, 'author': 'Simon', 'email': 'simon.gilhooly@atom14.co.uk' },
  { 'id': 1, 'author': 'Fred Bloggs', 'email': 'fred@bloggs.com' },
  { 'id': 2, 'author': 'Contrary Mary', 'email': 'mary@email.com' }
];

users.forEach(u => {
  u.hash = md5(u.email);
  u.avatar = `https://www.gravatar.com/avatar/${u.hash}?d=identicon`;
});

const annotations = [
  {
    'author': users[0].author,
    'email': users[0].email,
    'avatar': users[0].avatar,
    'date': '2 days ago',
    'annotation': 'Look here!',
    'annotations': [
      {
        'author': users[1].author,
        'email': users[1].email,
        'avatar': users[1].avatar,
        'date': '1 day ago',
        'annotation': 'Wow, I am doing Svelte stuff',
        'annotations': []
      }
    ]
  },
  {
    'author': users[2].author,
    'email': users[2].email,
    'avatar': users[2].avatar,
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
