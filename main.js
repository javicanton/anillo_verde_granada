// Control de visibilidad de capas para cada mapa
document.addEventListener("DOMContentLoaded", () => {
  const controlForms = document.querySelectorAll(".layer-controls");

  controlForms.forEach((form) => {
    const mapId = form.dataset.map;
    const viewer = document.querySelector(`.map-viewer[data-map="${mapId}"]`);
    if (!viewer) return;

    const checkboxes = form.querySelectorAll(
      'input[type="checkbox"][data-layer]'
    );

    checkboxes.forEach((checkbox) => {
      const layerName = checkbox.dataset.layer;
      const layerImg = viewer.querySelector(
        `.map-layer[data-layer="${layerName}"]`
      );
      if (!layerImg) return;

      const updateVisibility = () => {
        if (checkbox.checked) {
          layerImg.classList.add("is-visible");
        } else {
          layerImg.classList.remove("is-visible");
        }
      };

      // Estado inicial al cargar la página
      updateVisibility();

      // Actualizar al cambiar el checkbox
      checkbox.addEventListener("change", updateVisibility);
    });
  });
});