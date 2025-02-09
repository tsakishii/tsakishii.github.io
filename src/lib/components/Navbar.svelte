<script>
  import routes from '$lib/Routes.js';
  export let path;
  export let opened = false;
</script>

<div class={opened ? "navbar-closed" : "navbar-opened"}>
  <div class="button-container">
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
  </div>
</div>

<style>
  .navbar-opened {
    display: flex;
    justify-content: flex-end;
    margin-right: 2rem;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    margin-right: 2rem;
  }

  .buttons {
    position: absolute;
    display: flex;
    align-items: end;
    max-width: 3rem;
    width: 100%;
    text-align: center;
    margin-top: 0.5rem;
  }

  .buttons :global(a) {
    color: var(--fgColor);
  }

  .buttons .button {
    padding: 1rem 1rem;
    display: block;
    cursor: pointer;
    text-decoration: none;
    margin: auto;
    font-size: 20px;
  }

  .button:hover {
    transition: color 0.4s ease-in-out;
    color: var(--hoverColor);
  }

  @media (max-width: 900px) {

    .button:hover {
      display: none;
    }

	  .button {
		  display: none;
		  justify-content: space-between;
		  align-items: center;
		  font-weight: 500;
	  }
    
    .buttons {
      position: absolute;
      display: flex;
      align-items: end;
      max-width: 8.25rem;
      width: 100%;
      text-align: center;
      margin-top: 0.5rem;
    }

  }
</style>
