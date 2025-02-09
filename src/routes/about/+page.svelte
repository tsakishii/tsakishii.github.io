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
    position: absolute;
    left: 0;
    right: 0;
    top: 5%;
    margin: 0 auto;
    width: 600px;
    text-align: center;
    user-select: none;
	}

  .description {
    background-color: var(--fgColor);
    width: 100%;
    height: 105px;
    justify-content: center;
    text-align: center;
    padding: 1.5rem 1.5rem 1.5rem 1.5rem;
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
    font-size: 20px;
    text-align: center;
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
      width: 70%;
      top: 5%
    }

    h1 {
      font-size: 24px; /* Adjust as needed */
      font-weight: 600;
      user-select: none;
    }

    .description{
      width: 100%;
      height: 145px;
      padding: 1.5rem 1.5rem 1.5rem 1.5rem;
    }

    p {
      font-size: 18px;
      text-align: center;
      vertical-align: middle;
    }
  }

</style>
