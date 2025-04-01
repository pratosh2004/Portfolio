AOS.init({
  offset: 200,
  duration: 1000,
  disable: function () {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  }
})
window.addEventListener('load',AOS.refresh);