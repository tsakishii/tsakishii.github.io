<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
  import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte'
</script>

<div class="icons">
	<a 
		href="https://github.com/tsakishii"
    aria-label="GitHub"
		target="_blank"
	  rel="noopener noreferrer"
	>
		<div class="icon">
			<FaGithubSquare />
		</div>
	</a>
  <a 
		href="https://twitter.com/tsakishii"
    aria-label="GitHub"
		target="_blank"
	  rel="noopener noreferrer"
	>
		<div class="icon">
			<FaTwitterSquare />
		</div>
	</a>
	<a
    href="https://www.linkedin.com/in/tshri100v/"
		aria-label="Linkedin"
		target="_blank"
		rel="noopener noreferrer"
	>
		<div class="icon">
			<FaLinkedin />
		</div>
	</a>
</div>

<style>
  .icon {
    display: inline-block;
    align-items: center;
		width: 40px;
    margin: 0;
    list-style: none;
    padding: 0.5em;
	  transition: color 0.5s ease-in-out;
    transition: transform 0.2s ease-in-out;
  }

	.icon:hover {
		color: var(--hoverColor);
    transform: scale(1.4);
	}

  a {
		color: var(--fgColor);
	}
</style>
