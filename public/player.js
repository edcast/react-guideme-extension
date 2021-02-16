chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    main();
  });

  function main() {
    // eslint-disable-next-line no-undef
    const extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
    // eslint-disable-next-line no-restricted-globals
    if (!location.ancestorOrigins.contains(extensionOrigin)) {
      // Fetch the local React index.html page
      // eslint-disable-next-line no-undef
        if(document.getElementById('gss-main')){
            togglePanelDisplay();
        } else {
            fetch(chrome.runtime.getURL('index.html') /*, options */)
            .then((response) => response.text())
            .then((html) => {
            const styleStashHTML = html.replace(/\/static\//g, `${extensionOrigin}/static/`);
            // eslint-disable-next-line no-undef
            console.log("append html");
            $(styleStashHTML).appendTo("body");
            })
            .catch((error) => {
            console.warn(error);
            });
        }
    }
  }
  function togglePanelDisplay() {
    var p = document.getElementById("gss-main");
    if (p.style.display === "none") {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  }