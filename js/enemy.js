function createEnemy() {
    enemy = game.add.sprite(1400, game.height / 2, 'enemyBoat');
    enemy.anchor.setTo(0.5);
    enemy.frame = 1;
    enemy.scale.x = 1;
    game.physics.arcade.enable(enemy);
}

function checkCollision() {
    game.physics.arcade.overlap(bullet, enemy, () => {
        bullet.exists = false;
        bulletActive = false;
        currentHP -= 20;
        updateGrauFace();
        alert('¡Colisión! El Huáscar alcanzó al barco enemigo.');
    });
}