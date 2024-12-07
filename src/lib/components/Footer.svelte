<footer>
  <div class="foot-note">
    This website was made by <a class="me" href="/about">tsakishii</a>
    using <span class="svelte">SvelteKit</span>
  </div>
</footer>

<style>
  .foot-note {
    left: 0;
    bottom: 0;
		width: 100%;
    position: fixed;
		font-size: 16px;
		font-weight: 400;
		padding: 50px 0;
		text-align: center;
	}

  .svelte {
    color: var(--svelteColor);
  }

	.foot-note .me {
		color: var(--fgColor);
	}

  .me:hover {
		transition: color 0.4s ease-in-out;
    color: var(--hoverColor);
	}

  @media screen and (max-width: 1080px) {
    .foot-note {
      display: none;
    }
  }
</style>
