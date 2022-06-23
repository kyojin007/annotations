<script>
	import Annotation from './Annotation.svelte';
	import md5 from 'blueimp-md5';

	export let author;
	export let email;
	export let date;
  export let annotation;
  export let annotations;

	let comment = '';

	let hash = md5(email);
	// see https://ui-avatars.com/
	// const a = author.replace(' ', '+');
	// let fallback = encodeURI(`https://ui-avatars.com/api/${a}/80/random/ffffff/2/0.5/true`);
	// let fallback = `https://ui-avatars.com/api/${a}/80/random/ffffff/2/0.5/true`;

	//$: avatar = `https://ui-avatars.com/api/?name=${author.replace(/ /g, '+')}&rounded=true&background=ff3e00&color=fff&bold=true`;
	// $: avatar = `https://www.gravatar.com/avatar/${hash}?d=${fallback}`;
	$: avatar = `https://www.gravatar.com/avatar/${hash}?d=identicon`;

	/* alternative approach
	let img = document.createElement('img');
	img.src = `https://www.gravatar.com/avatar/${hash}?d=404`;

	img.onload = function() {
		console.log(`Image loaded, size ${img.width}x${img.height}`);
	};

	img.onerror = function() {
		console.error("No Gravatar for this email address");
		img.src = fallback;
	};
	*/

	/**
	 *
	 */
	function reply () {
		// just need to get the current user and their email address
		let author = 'Fred Bloggs';
		let email = 'fred@bloggs.com';
		let posted = 'just now'; // when drawing the page we can get the human friendly versions from PHP
		let reply = {'author': author, 'email': email, 'date': posted, 'annotation': comment, 'annotations': []};

		annotations.push({'author': author, 'email': email, 'date': posted, 'annotation': comment, 'annotations': []});
    annotations = annotations;

		// reset this to clear the textarea
		comment = '';
  }
</script>

<article class="annotation">
	<div class="annotation-header mb-3">
		<img src={avatar} alt="" height="32" width="32">
		<div class="details">
			<h5>{author}</h5>
      <div class="meta">
				<span>{date}</span> | <span>{annotations.length} {annotations.length === 1 ? 'reply' : 'replies'}</span>
			</div>
		</div>
	</div>
	<div class="body">
    {annotation}
	</div>

	<div class="row row-cols-lg-auto g-3 align-items-center">
		<div class="col-12">
			<textarea bind:value={comment} class="form-control mb-3"></textarea>
		</div>

		<div class="col-12">
  		<button on:click={reply} class="btn btn-primary">Reply</button>
		</div>
	</div>

	<div class="annotations">
    {#each annotations as annotation}
      <Annotation {...annotation} />
    {/each}
  </div>

</article>

<style>
	article {
		background-color: #fff;
		border-left: 4px #ccc solid;
		/* border-radius: 4px; */
		padding: 1rem;
		margin: 1em 0;
	}

	.annotation-header {
		align-items: center;
		display: flex;
	}

	.details {
		flex: 1 1 auto;
		margin-left: 0.5rem
	}

	.meta {
		font-size: 0.8em;
	}
	.body {
		margin: 2em;
	}

	h5 {
		margin: 0;
	}
</style>