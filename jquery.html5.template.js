if(typeof jQuery === 'undefined') {
   throw new Error("No jQuery detected. Please include jQuery before this script")
}

/**
 * Append a clone of the contents of a template tag to the given element this is invoked on.
 * @param string|jQuery $select a jquery object or a selector.
 * @param function callback A call back function that can modify the template before it's appended to $selector
 * @return jQuery the jquery instance this function is invoked on for daisy chaining
 */
$.fn.appendTemplate = function($selector, callback) {
      if(!($selector instanceof jQuery)) {
              $selector = $($selector);
      }
      var content = $selector.prop('content');
      var $template = $(document.importNode(content, true));
      if(typeof callback === 'function') {
           callback($template);
      }
      this.append($template);
      return this;
}
