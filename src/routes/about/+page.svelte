<svelte:head>
  <title>Tsakishii's place — About</title>
</svelte:head>

<script>
  import Greeting from '$lib/components/Greeting.svelte';
  let about = "About me 🖥️"
</script>

<main>
  <div>
    <Greeting greeting={about} />
  </div>
  <div class="container">
    <p class="description">
      I'm a DevOps Engineer who's all about that cool software engineering.
      Got a soft spot for GNU Emacs, and I'm totally into Lisp languages
      and functional programming.
    </p>
    <p class="description">
      Over the years, I've worked on a bunch of projects, ranging
      from low-level memory management to crafting web applications.
    </p>
    <p class="description">
      Currently, I'm deep into the realm of implementing a
      production-ready build pipeline at my current company.
    </p>
  </div>
</main>

<style>


  main {
    position: absolute;
    left: 0;
    right: 0;
    top: 12%;
    margin: 0 auto;
    width: 580px;
    user-select: none;
  }

  .description {
    background-color: var(--fgColor);
    width: 100%;
    height: 105px;
    justify-content: center;
    text-align: center;
    margin: 1.2rem auto;
    padding: 1.2rem 1rem 0.6rem 1rem;
    color: var(--bgColor);
    border-radius: 40px;
    border: 10px solid var(--fgColor);
  }

  p {
    font-size: 20px;
    vertical-align: middle;
  }

  @media screen and (max-width: 768px) {
    main {
      width: 100%;
      top:5%
    }
    
    p {
      font-size: 18px;
      text-align: center;
      vertical-align: middle;
    }
  }

  @media screen and (max-width: 480px) {
    main {
      width: 80%;
      top: 5%
    }

    .description{
      width: 80%;
      height: 175px;
      padding: -0.5rem 0.5rem 2.5rem 1.5rem;
    }

    h1 {
      font-size: 24px; /* Adjust as needed */
      font-weight: 600;
      user-select: none;
    }

    p {
      font-size: 18px;
      text-align: center;
      vertical-align: middle;
    }
  }

</style>
