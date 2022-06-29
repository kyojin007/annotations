import { writable } from 'svelte/store';

export const users = writable([
  {
    'author': 'Simon',
    'email': 'simon.gilhooly@atom14.co.uk'
  }
]);
