<script>
  export let open = false;
</script>

<div class="button-container">
  <button
    aria-label="burger"
    class="burger"
    class:open
    on:click={() => (open = !open)}
    >
    <svg width="30" height="16">
      <line id="top" x1="0" y1="2" x2="32" y2="2" />
      <line id="middle" x1="0" y1="12" x2="32" y2="12" />
      <line id="bottom" x1="0" y1="22" x2="32" y2="22" />
    </svg>
  </button>
</div>


<style>
  svg {
    min-height: 24px;
    transition: transform 0.3s ease-in-out;
  }

  svg line {
    stroke: var(--fgColor);
    stroke-width: 3;
    transition: transform 0.3s ease-in-out;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
  }

  button {
    color: var(--fgColor);
    background: transparent;
    cursor: pointer;
    border: none;
    padding: 0.5rem;
  }

  .open svg {
    min-height: 24px;
    transform: scale(1.2);
    transition: transform 0.3s ease-in-out;
  }

  .open #top {
    transform: translate(6px, 0px) rotate(45deg);
  }

  .open #middle {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
  }

  .open #bottom {
    transform: translate(-12px, 9px) rotate(-45deg);
  }

  @keyframes fade {
    to {
      stroke-dashoffset: 1000;
      stroke-dasharray: 1000;
    }
  }
</style>
