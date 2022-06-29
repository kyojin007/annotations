<script>
  import md5 from 'blueimp-md5';

  export let author = '';
	export let email;
  export let avatar;

</script>

<div class="user">
  <img src={avatar} alt="{email}" height="32" width="32">
  <h5 title="{email}">{author}</h5>
</div>

<style>
  h5 {
    display: inline;
    line-height: 32px;
		margin: 0;
    padding: 0 10px;
	}

  div.user img {
    float: left;
  }
</style>