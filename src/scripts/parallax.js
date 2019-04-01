const parallax = document.querySelector('.parallax');
const layers = parallax.children;

function moveLayersDependsOnScroll(wScroll) {

  Array.from(layers).forEach(layer => {
    var divider = layer.dataset.speed;
    var strafe = wScroll*divider;

    layer.style.transform = `translateY(-${strafe}%)`;
});
}

  window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll);
  });
