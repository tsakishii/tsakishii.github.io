<script>
	import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />

<slot />

<Footer />

<style>
  :global(:root) {
    --fgColor: #bedeef;
    --bgColor: #282a39;
    --hoverColor: #bd93f9;
    --svelteColor: #ff3e00;
  }

	:global(body) {
    display: grid;
    flex-direction: column;
    width: 100%;
    margin: 0;
    text-align: center;
    background-color: var(--bgColor);
    font-family: 'Inconsolata', monospace;
  }
</style>
