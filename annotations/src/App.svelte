<script>
  import { annotations } from './lib/annotationStore.js';
  import logo from './assets/svelte.png'
  import Annotation from './lib/Annotation.svelte';

  // linked to textarea
  let comment = '';

  $annotations = [
    {
      'author': 'Simon',
      'email': 'simon.gilhooly@atom14.co.uk',
      'date': '2 days ago',
      'annotation': 'Look here!',
      'annotations': [
        { 'author': 'Fred Bloggs', 'email': 'fred@bloggs.com', 'date': '1 day ago', 'annotation': 'Wow, I am doing Svelte stuff', 'annotations': [] }
      ]
    }
  ];

  /**
   *
   */
  function addComment () {
    let author = 'Fred Bloggs';
		let email = 'fred@bloggs.com';
		let posted = 'just now'; // when drawing the page we can get the human friendly versions from PHP
    let reply = {'author': author, 'email': email, 'date': posted, 'annotation': comment, 'annotations': []};

    // annotations = annotations;
    annotations.update(annotations => [reply, ...annotations]);

    comment = '';
  }
</script>

<main>
  <img src={logo} alt="Svelte Logo" style="float:right; width: 30px; height: 30px;" />
  <h1>Annotations Demo</h1>

  <div class="row">
    <div class="col-4">
      <h5>Comments: {$annotations.length}</h5>

      <textarea bind:value={comment} class="form-control" rows="3"></textarea>
      <button on:click={addComment} class="btn btn-primary my-2">Add Comment</button>

      <div class="annotations">
        {#each $annotations as annotation}
          <Annotation {...annotation} />
        {/each}
      </div>
    </div>
  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>
