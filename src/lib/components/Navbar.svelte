<script>
  import routes from '$lib/Routes.js';
  export let path;
</script>

<div class="buttons">
	{#each routes as route}
    {#if path === route.href}
      <a class="button selected" href={route.href}>
        {route.label}
      </a>
    {:else}
      <a class="button" href={route.href}>
        {route.label}
      </a>
    {/if}
  {/each}
</div>

<style>
  .buttons {
    position: relative;
    left: 1080px;
    display: flex;
    justify-content: space-between;
    align-items: center;
		max-width: 100px;
		width: 100%;
		text-align: center;
    margin-top: 20px;
	}

  .buttons :global(a) {
		color: var(--fgColor);
	}

  .buttons .button {
    padding: 0;
    display: block;
    cursor: pointer;
    text-decoration: none;
    position: block;
    margin: 10px;
    font-size: 20px;
  }
  
  .button:hover {
		transition: color 0.4s ease-in-out;
    color: var(--hoverColor);
	}
</style>
