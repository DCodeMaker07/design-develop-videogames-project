const ENEMY_ESCORT_OFFSET_Y = 220;
const ENEMY_ESCORT_OFFSET_X = 80;

function createEnemy() {
    enemy = game.add.sprite(BATTLE_POSITIONS.enemyX, BATTLE_POSITIONS.enemyY, 'enemyBoat');
    enemy.anchor.setTo(0.5);
    enemy.frame = 1;
    enemy.scale.x = 1;
    game.physics.arcade.enable(enemy);

    // Botes refuerzo
    enemyTop = game.add.sprite(BATTLE_POSITIONS.enemyX + ENEMY_ESCORT_OFFSET_X, BATTLE_POSITIONS.enemyY - ENEMY_ESCORT_OFFSET_Y, 'enemyBoat');
    enemyTop.anchor.setTo(0.5);
    enemyTop.frame = 1;
    enemyTop.scale.x = 1;
    game.physics.arcade.enable(enemyTop);

    enemyBottom = game.add.sprite(BATTLE_POSITIONS.enemyX + ENEMY_ESCORT_OFFSET_X, BATTLE_POSITIONS.enemyY + ENEMY_ESCORT_OFFSET_Y, 'enemyBoat');
    enemyBottom.anchor.setTo(0.5);
    enemyBottom.frame = 1;
    enemyBottom.scale.x = 1;
    game.physics.arcade.enable(enemyBottom);
}

function checkCollision() {
    [enemy, enemyTop, enemyBottom].forEach((target) => {
        game.physics.arcade.overlap(bullet, target, () => {
            bullet.exists = false;
            bulletActive = false;
            currentHP -= 20;
            updateGrauFace();
            alert('¡Colisión! El Huáscar alcanzó al barco enemigo.');
        });
    });
}