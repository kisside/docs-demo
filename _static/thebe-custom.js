/**
 * Customize Thebe/CodeMirror cells after they are activated.
 *
 * Thebe replaces static <pre> blocks with CodeMirror editors.  We watch for
 * that to happen and then patch each editor instance.
 */
(function () {
  "use strict";

  var CM_OPTIONS = {
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    indentUnit: 4,
    tabSize: 4,
    indentWithTabs: false,
    // Shows matching tags / brackets when cursor is next to one
    styleActiveLine: true,
  };

  /**
   * Apply our options to every CodeMirror instance on the page.
   */
  function patchEditors() {
    if (typeof document.querySelectorAll === "undefined") return;
    var cells = document.querySelectorAll(".CodeMirror");
    cells.forEach(function (el) {
      var cm = el.CodeMirror;
      if (!cm) return;
      if (cm._customPatched) return;          // don't patch twice
      Object.keys(CM_OPTIONS).forEach(function (key) {
        cm.setOption(key, CM_OPTIONS[key]);
      });
      cm.refresh();
      cm._customPatched = true;
    });
  }

  // Thebe creates CodeMirror instances asynchronously after the user clicks
  // "Live Code".  We poll for new instances for a while after page load.
  var observer = new MutationObserver(function () {
    patchEditors();
  });

  // Start observing once the DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    observer.observe(document.body, { childList: true, subtree: true });
    // Also run on a short interval as a safety net
    var interval = setInterval(patchEditors, 1000);
    // Stop polling after 5 minutes (kernel should be up well before that)
    setTimeout(function () { clearInterval(interval); }, 300000);
  });
})();
