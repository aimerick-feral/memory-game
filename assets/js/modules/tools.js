const tools = {
  init: function () {
    console.log("Hello world, I'm tools.js 🧰");
  },
  /**
   * Method that add a CSS class to one or many elements.
   * @param {String} className
   * @param  {...Element} elements
   * @return {void}
   */
  addClassToElements: function (className, ...elements) {
    // For each element of elements.
    for (let element of elements) {
      // We use the classList API in order to add the className to element.
      element.classList.add(className);
    }
  },
  /**
   * Method that remove a CSS class from one or many elements.
   * @param {String} className
   * @param  {...Element} elements
   * @return {void}
   */
  removeClassFromElements: function (className, ...elements) {
    // For each element of elements.
    for (let element of elements) {
      // We use the classList API in order to remove the className from element.
      element.classList.remove(className);
    }
  },
};
