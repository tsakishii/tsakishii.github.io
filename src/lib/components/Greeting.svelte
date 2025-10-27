<script>
  let { greeting } = $props();
</script>

<div class="greeting">
  <h1>{greeting}</h1>
</div>

<style>
  .greeting {
    font-family: 'Inconsolata', monospace;
    font-size: 26px;
    color: var(--fgColor);
    position: center;
    user-select: none;
  }
</style>
