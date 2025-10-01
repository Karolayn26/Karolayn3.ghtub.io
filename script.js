
function actualizarBadge() {
  const personas = Number(document.getElementById('personas').value) || 0;
  const badge = document.querySelector('.badge');
  badge.textContent = `Pedido rápido • ${personas} persona${personas !== 1 ? 's' : ''}`;
}

// Llamar la función al iniciar
actualizarBadge();

// También actualizar cada vez que cambie el input de personas
document.getElementById('personas').addEventListener('input', () => {
  actualizarBadge();
  updateUI(); // opcional: recalcular costos si quieres que se haga automáticamente
});
