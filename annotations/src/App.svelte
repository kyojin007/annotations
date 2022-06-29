<script>
  // import { annotations } from './lib/annotationStore.js';
  import logo from './assets/svelte.png'
  import Annotation from './lib/Annotation.svelte';

  export let annotations;

  // linked to textarea
  let comment = '';

  /**
   *
   */
  function addComment () {
    let author = 'Fred Bloggs'; // will need these properties in JS world
		let email = 'fred@bloggs.com';
		let posted = 'just now'; // when drawing the page we can get the human friendly versions from PHP
    let reply = {'author': author, 'email': email, 'date': posted, 'annotation': comment, 'annotations': []};

    annotations.unshift(reply);
    annotations = annotations;

    console.log('addComment %o', annotations);

    comment = '';
  }
</script>

<main>
  <img src={logo} alt="Svelte Logo" style="float:right; width: 30px; height: 30px;" />
  <h1>Annotations Demo</h1>

  <div class="row">
    <div class="col-4">
      <h5>Comments: {annotations.length}</h5>

      <div class="d-grid">
        <textarea bind:value={comment} class="form-control" rows="2"></textarea>
        <button on:click={addComment} class="btn btn-primary my-2">Add Comment</button>
      </div>

      <div class="annotations">
        {#each annotations as annotation}
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
    margin: 1rem auto;
    max-width: 14rem;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>
