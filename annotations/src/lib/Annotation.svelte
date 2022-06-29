<script>
	import Annotation from './Annotation.svelte';
	import User from './User.svelte';

	export let annotator;
	export let date;
  export let annotation;
  export let annotations;

	let comment = '';

	/* alternative approach
	let img = document.createElement('img');
	img.src = `https://www.gravatar.com/avatar/${hash}?d=404`;

	img.onload = function() {
		console.log(`Image loaded, size ${img.width}x${img.height}`);
	};

	img.onerror = function() {
		console.error("No Gravatar for this email address");
		// see https://ui-avatars.com/
		const a = author.replace(' ', '+');
		// let fallback = encodeURI(`https://ui-avatars.com/api/${a}/80/random/ffffff/2/0.5/true`);
		let fallback = `https://ui-avatars.com/api/${a}/80/random/ffffff/2/0.5/true`;
		img.src = fallback;
	};
	*/

	/**
	 *
	 */
	function reply () {
		// just need to get the current user and their email address - possibly from a store?
		const posted = 'just now'; // when drawing the page we can get the human friendly versions from PHP
		let reply = {'annotator': annotator, 'date': posted, 'annotation': comment, 'annotations': []};

		// annotations.push({'author': author, 'email': email, 'date': posted, 'annotation': comment, 'annotations': []});
    annotations = [...annotations, reply];

		console.log('addReply', annotations);

		// reset this to clear the textarea
		comment = '';
  }
</script>

<article class="annotation">
	<div class="annotation-header mb-3">
		<User author={annotator.author} email={annotator.email} avatar={annotator.avatar} />
		<div class="meta">
			<span>{date}</span> | <span>{annotations.length} {annotations.length === 1 ? 'reply' : 'replies'}</span>
		</div>
	</div>
	<div class="body">
    {annotation}
	</div>

	<div class="reply d-grid mb-3">
		<textarea bind:value={comment} class="form-control mb-1" placeholder="type your reply here ..."	rows="1"></textarea>
		<button on:click={reply} class="btn btn-sm btn-primary">Reply</button>
	</div>

	<!-- iterate thru replies, replies to replies, etc -->
	<div class="annotations">
    {#each annotations as anno}
			<Annotation date={anno.date}, annotation={anno.annotation}, annotations={anno.annotations}, annotator={anno.annotator} />
    {/each}
  </div>

</article>

<style>
	article {
		background-color: #fff;
		border-left: 4px #ccc solid;
		/* border-radius: 4px; */
		padding: 0 0 0 1rem;
		margin: 1em 0em 1em 1.5em;
	}

	.annotation-header {
		align-items: center;
		display: flex;
	}

	.meta {
		font-size: 0.8em;
	}
	.body {
		margin: 1em 0 1em 2.5em;
	}
</style>