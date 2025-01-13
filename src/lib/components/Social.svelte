<script>
  import { Icon } from 'svelte-icons-pack';
  import { FaBrandsXTwitter } from "svelte-icons-pack/fa";
  import { FaBrandsSquareGithub } from "svelte-icons-pack/fa";
  import { FaBrandsLinkedin } from "svelte-icons-pack/fa";

  const size = 36
</script>

<div class="icons">
	<a 
		href="https://github.com/tsakishii"
    aria-label="GitHub"
		target="_blank"
	  rel="noopener noreferrer"
	>
		<div class="icon">
      <Icon src={FaBrandsSquareGithub} size={size} />
		</div>
	</a>
  <a 
		href="https://x.com/tsakishii"
    aria-label="X"
		target="_blank"
	  rel="noopener noreferrer"
	>
		<div class="icon">
      <Icon src={FaBrandsXTwitter} size={size}/>
		</div>
	</a>
	<a
    href="https://www.linkedin.com/in/tshri100v/"
		aria-label="Linkedin"
		target="_blank"
		rel="noopener noreferrer"
	>
		<div class="icon">
      <Icon src={FaBrandsLinkedin} size={size} />
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
