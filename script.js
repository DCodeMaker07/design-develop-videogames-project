let game = new Phaser.Game(1717, 916, Phaser.CANVAS, 'bloque_juego');

let imgRoute = "img/";

let initialState = {
    preload: () => {
        game.load.image('background', `${imgRoute}ocean-background.png`);
    },
    create: () => {
        game.add.tileSprite(0, 0, 1717, 916, 'background');
    },
    update: () => {

    }
}

game.state.add('main', initialState);
game.state.start('main');