(function(window, undefined) {
  var dictionary = {
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "1416a496-696a-4ecc-b16c-727ef78ac6c1": "editor",
    "46f1dfa7-73d8-45d1-98d1-98ea34413237": "pagging"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);