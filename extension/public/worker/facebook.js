/** @param {HTMLImageElement} img */
function blurImage(img) {
    img.style.filter = "blur(30px)";
}


/** @param {HTMLDivElement} el */
function checkPost(el) {
    if (window.matchesBlocklist(el.innerText)) {
      el.style.filter = "blur(4px)";
    }
}
  
/** @param {HTMLImageElement} img */
function checkImage(img) {
    if (img.alt && window.matchesBlocklist(img.alt)) {
      blurImage(img);
    }
}

window.onceReady = () => {
// quit if facebook is not enabled
    if (!window.enabled.facebook) return;
  
    // check every 1 second if a new post has been loaded
    setInterval(() => {
      // check every visible facebook post, which can be identified since it's a
      // div with an attribute called lang="en". Politicry only supports English (for now)
      document.querySelectorAll('div[lang="en"]').forEach(checkPost);
      document.querySelectorAll('img').forEach(checkImage);
    }, 1000);
};
  