function createBullet() {
    let bulletGraphic = game.add.graphics(0, 0);
    bulletGraphic.beginFill(0xffffff);
    bulletGraphic.drawCircle(0, 0, 20);
    bulletGraphic.endFill();

    let bulletTexture = bulletGraphic.generateTexture();
    bulletGraphic.destroy();

    bullet = game.add.sprite(0, 0, bulletTexture);
    bullet.anchor.setTo(0.5);
    bullet.exists = false;
    game.physics.arcade.enable(bullet);
}

function updateBullet() {
    if (spaceKey.justDown && !bulletActive) {
        bullet.reset(mainBoat.x + 180, mainBoat.y - 60);
        bullet.exists = true;
        bulletActive = true;
    }

    if (bulletActive) {
        bullet.x += 10;
        if (bullet.x > 1717) {
            bullet.exists = false;
            bulletActive = false;
        }
    }
}