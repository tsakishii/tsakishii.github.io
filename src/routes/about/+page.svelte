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
    top: 5%;
    margin: 0 auto;
    width: 600px;
    text-align: center;
    user-select: none;
	}

  .description {
    background-color: var(--fgColor);
    width: auto;
    height: 138px;
    justify-content: center;
    text-align: center;
    padding: 20px 20px 20px 20px;
    top: 50%;
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
    text-align: center;
    vertical-align: middle;
  }

  @media screen and (max-width: 768px) {
    main {
      width: 90%;
      top: 10%;
    }
    .description {
      width: auto;
      height: 155px;
    }
    p {
      font-size: 18px;
      text-align: center;
      vertical-align: middle;
    }
  }

</style>
