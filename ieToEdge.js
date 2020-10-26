// Simple Navigator check to see if we're using IE
function msieversion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    // Only take the time to run everything if we're actually in IE! Otherwise waste of time

    // Collect the dom elements we need
    const ieModal = document.getElementById("modal");
    const redirectButton = document.getElementById("redirect-to-edge");

    // Get window location so the redirect button can be dynamic
    const currentLocation = window.location.href;

    // Simple modal - you can't exit it once it triggers
    // Could change this since that's bad UX but also the point is to kick them off the site if they're in IE
    function triggerModal() {
      ieModal.classList.remove("display-none");
      redirectButton.setAttribute("href", "microsoft-edge:" + currentLocation);
    }

    // If Internet Explorer, trigger alert
    triggerModal();
  }
  return false;
}

msieversion();
