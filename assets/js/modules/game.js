const game = {
  // Proprietes availables in the object.
  grid: null,
  cards: [],
  init: function () {
    console.log("Hello world, I'm game.js 👾");

    // We create a array of cards.
    game.cards = [
      {
        name: "bacon-cheesburger",
        img: "../assets/images/bacon-cheesburger.png",
      },
      {
        name: "blank",
        img: "../assets/images/blank.png.png",
      },
      {
        name: "burritos",
        img: "../assets/images/burritos.png.png",
      },
      {
        name: "couscous",
        img: "../assets/images/couscous.png",
      },
      {
        name: "fries",
        img: "../assets/images/fries.png",
      },
      {
        name: "hotdog",
        img: "../assets/images/hotdog.png",
      },
      {
        name: "pizza",
        img: "../assets/images/pizza.png",
      },
      {
        name: "rice",
        img: "../assets/images/rice.png",
      },
      {
        name: "white",
        img: "../assets/images/white.png",
      },
    ];

    // We get the DOM elements that we need to interacte with.

    game.grid = document.querySelector(".grid");
    // console.log(game.grid);

    // If the DOM element exist.
    if (game.grid) {
      // We call the game.createBoard() to create the game board.
      game.createBoard();
    }
  },
  /**
   * Method that create HTLM elements, set some attributes to them and add them to the DOM in order to create and display the game board.
   * @return {void}
   */
  createBoard: function () {
    console.log("game.createBoard()");

    // For each each card of in game.cards
    for (let index = 0; index < game.cards.length; index++) {
      // we create a HTML element with the <img> tag name.
      let card = document.createElement("img");
      // we set a src attribute with a path to the folder where we backup the images.
      card.setAttribute("src", "../assets/images/blank.png");
      // we set a id attribute dynamically
      card.setAttribute("id", index);
      console.log(card);
      // we add a listener and a handler on the click event.
      card.addEventListener("click", game.flipCard);
      // we add it to the game.grid
      game.grid.appendChild(card);
    }
  },

  /**
   * Method that flip a card on a click event.
   * @return {void}
   */
  flipCard: function () {
    console.log("game.flipCard()");
  },
};
