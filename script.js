let isIgnite = false

function changeCard(event) {
  const card = event.currentTarget 
  const backgroundImage = isIgnite  
  ? "explorer" : "ignite"
 
  isIgnite = !isIgnite
  card.style.backgroundImage = `url(./assets/bg-${backgroundImage}.svg)` 
}

