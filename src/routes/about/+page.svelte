<svelte:head>
  <title>Tsakishii's place — About</title>
</svelte:head>

<main>
  <div class="container">
    <h1>About me 🖥️</h1>
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
    position: relative;
    left: auto;
    right: auto;
    top: 10%;
    margin: 0 auto;
    width: 600px;
    text-align: center;
    user-select: none;
	}

  .description {
    background-color: var(--fgColor);
    width: auto;
    height: 128px;
    padding: 20px 20px 20px 20px;
    color: var(--bgColor);
    border-radius: 40px;
    border: 10px solid var(--fgColor);
  }

  h1 {
    font-size: 37px;
    font-weight: 700;
    color: var(--fgColor);
  }

  p {
    font-size:22px;
  }

  @media screen and (max-width: 768px) {
    main {
      width: 90%;
      top:5%
    }
    .description {
      width: auto;
      height: 160px;
    }
    p {
      font-size: 18px;
    }
  }

</style>
