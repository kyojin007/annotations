<script>
  // import { annotations } from './lib/annotationStore.js';
  import logo from './assets/svelte.png'
  import Annotation from './lib/Annotation.svelte';

  import md5 from 'blueimp-md5';

  export let annotations;
  export let users;

  // linked to textarea
  let comment = '';

  let annotatorId = 0;

  $: annotator = users[annotatorId];

  users.forEach(u => {
    u.hash = md5(u.email);
    u.avatar = `https://www.gravatar.com/avatar/${u.hash}?d=identicon`;
  });

  console.log(users);
  console.log(annotations);

  /**
   *
   */
  function addComment () {
    //let author = 'Fred Bloggs'; // will need these properties in JS world
		// let email = 'fred@bloggs.com';
		let posted = 'just now'; // when drawing the page we can get the human friendly versions from PHP
    let reply = {'annotator': annotator, 'date': posted, 'annotation': comment, 'annotations': []};

    // annotations.unshift(reply);
    // annotations = annotations;
    annotations = [reply, ...annotations];

    console.log('addComment %o', annotations);

    comment = '';
  }
</script>

<main>
  <img src={logo} alt="Svelte Logo" style="float:right; width: 30px; height: 30px;" />
  <h1>Annotations Demo</h1>

  <div class="row">
    <div class="col">
      <p>Comment As:</p>

      <div class="d-flex justify-content-start my-3">
        {#each users as u}
          <div class="annotators me-5">
            <input class="form-check-input" type="radio" id="a-{u.id}"
              name="annotators" bind:group="{annotatorId}" value="{u.id}">
            <label class="form-check-label" for="a-{u.id}">
              <img src="{u.avatar}" alt="{u.author}" />{u.author}
            </label>
          </div>
        {/each}
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-4">
      <h5>Comments: {annotations.length}</h5>

      <div class="d-grid">
        <textarea bind:value={comment} class="form-control" rows="2"></textarea>
        <button on:click={addComment} class="btn btn-primary my-2" data-annotatorId="{annotator.id}">Add Comment as {annotator.email}</button>
      </div>

      <div class="annotations">
        {#each annotations as a}
          <Annotation date={a.date}, annotation={a.annotation}, annotations={a.annotations}, annotator={a.annotator} />
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

  div.annotators img {
    height: 32px;
    width: 32px;

    margin: 0 10px;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>
