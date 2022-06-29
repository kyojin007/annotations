import { writable } from 'svelte/store';

export const annotations = writable([
  {
    'author': 'Simon',
    'email': 'simon.gilhooly@atom14.co.uk',
    'date': '2 days ago',
    'annotation': 'Look here!',
    'annotations': [
      { 'author': 'Fred Bloggs', 'email': 'fred@bloggs.com', 'date': '1 day ago', 'annotation': 'Wow, I am doing Svelte stuff', 'annotations': [] }
    ]
  }
]);
