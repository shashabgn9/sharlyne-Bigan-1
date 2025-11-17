// SCRIPT DU SITE DE SHARLYNE

console.log("✨ Site personnel chargé !");

// Effet au clic sur les nuages
document.querySelectorAll('.nuage').forEach(n => {
  n.addEventListener('mousedown', () => n.style.transform = "scale(0.95)");
  n.addEventListener('mouseup', () => n.style.transform = "scale(1)");
});
