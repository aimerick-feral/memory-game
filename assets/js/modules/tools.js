const tools = {
  init: function () {
    console.log("Hello world, I'm tools.js 🧰");
  },
  /**
   * Method that add a CSS class to one or several elements.
   * @param {String} className
   * @param {Array} elements
   * @return {void}
   */
  addClassToElements: function (className, ...elements) {
    // console.log("tools.addClassToElements()");

    // For each element of elements.
    for (let element of elements) {
      // We use the classList API in order to add className to element.
      element.classList.add(className);
    }
  },
  /**
   * Method that remove a CSS class from one or several elements.
   * @param {String} className
   * @param {Array} elements
   * @return {void}
   */
  removeClassFromElements: function (className, ...elements) {
    // console.log("tools.removeClassFromElements()");

    // For each element of elements.
    for (let element of elements) {
      // We use the classList API in order to remove className from element.
      element.classList.remove(className);
    }
  },
  /**
   * Method that add one or several CSS classes to one element.
   * @param {Array} element
   * @param {String} classNames
   * @return {void}
   */
  addClassesToElement: function (element, ...classNames) {
    // console.log("tools.addClassesToElement()");

    // For each className of classNames.
    for (let className of classNames) {
      // We use the classList API in order to add className to element.
      element.classList.add(className);
    }
  },
  /**
   * Method that remove one or several CSS classes from one element.
   * @param {Array} element
   * @param {String} classNames
   * @return {void}
   */
  removeClassesFromElement: function (element, ...classNames) {
    // console.log("tools.removeClassesFromElement()");

    // For each className of classNames.
    for (let className of classNames) {
      // We use the classList API in order to remove className from element.
      element.classList.remove(className);
    }
  },
};
