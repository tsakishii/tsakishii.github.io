<script>
  import Greeting from '$lib/components/Greeting.svelte';
  import Card from '$lib/components/Card.svelte';
  import Social from '$lib/components/Social.svelte';
  let greet = "Welcome Stranger!"
</script>

<svelte:head>
	<title>Tsakishii's place - Home</title>
</svelte:head>

<main>
  <div>
    <Greeting greeting={greet} />
  </div>
  <div>
    <Card />
  </div>
  <h1>Hi! 👋 I am Tsvyatko aka tsakishii</h1>
  <div>
    <Social />
  </div>
</main>

<style>
  main {
    position: absolute;
    left: 0;
    right: 0;
    top: 12%;
    margin: 0 auto;
    width: 600px;
    text-align: center;
  }

  h1 {
    font-size: 37px;
	font-weight: 700;
    color: var(--fgColor);
    user-select: none;
  }

  @media screen and (max-width: 768px) {
    main {
      width: 80%;
      top:5%;
    }
  }

  @media screen and (max-width: 480px) {
    main {
      width: 60%;
      top: 5%;
    }

    h1 {
      font-size: 24px; /* Adjust as needed */
      font-weight: 600;
      user-select: none;
    }
  }
</style>
