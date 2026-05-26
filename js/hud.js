function updateGrauFace() {
    const porcentaje = (currentHP / maxHP) * 100;
    const face = document.getElementById('grau-face');
    if (!face) return;

    if (porcentaje > 50) {
        face.src = "img/personaje-principal/cara/sprite-miguel-grau-normal.png";
    } else if (porcentaje > 15) {
        face.src = "img/personaje-principal/cara/sprite-miguel-grau-herido-50.png";
    } else {
        face.src = "img/personaje-principal/cara/sprite-miguel-grau-herido-80.png";
    }
}