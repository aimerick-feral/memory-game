const app = {
  init: function () {
    console.log("Hello world, I'm app.js 👑");

    // We load the module tools.js.
    tools.init();

    // We load the module game.js.
    game.init();
  },
};

document.addEventListener("DOMContentLoaded", app.init);
