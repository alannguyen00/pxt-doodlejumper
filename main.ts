namespace SpriteKind {
    export const object = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 3 3 . . . . . . . . . . . . 
. 3 3 . . . . . . . . . . . . . 
. 3 3 . . . . . . . . . . . . . 
. . . 3 3 3 3 3 3 3 3 . . . . . 
. . . . . 3 3 . . . . . . . . . 
. . . . 3 . . . . . . . . . . . 
. . . . . 3 . . . . . . . . . . 
. . . . . . 3 3 3 3 . . . . . . 
. . . . . . . . . 3 3 . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . . . 3 . . . . . . . . 
. . . . . . . . 3 3 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onHitTile(SpriteKind.Player, 11, function (sprite) {
    game.over(true, effects.confetti)
    // Transforms first sprite image into different image.
    animation.runImageAnimation(
    General,
    [img`
. . . f f f f f f f f . . . . . 
. . f f d d d d d d f f . . . . 
. . f d d 1 1 d 1 1 d f f . . . 
. . f d d 1 f d f 1 d d f . . . 
. . d d f d d d d d f d d . . . 
. . d d f f f f f f f d d . . . 
. . . d d d d d d d d d . . . . 
. . . . . d d d d . . . . . . . 
. . . . . d d d d . . . . . . . 
. . . . 1 d 1 1 1 1 . . . . . . 
. . . 1 1 1 2 d 1 1 1 . . . . . 
. . . d 1 d 1 1 d 1 d . . . . . 
. . . d 1 1 1 1 d 1 d . . . . . 
. . . . 8 8 8 8 d 8 . . . . . . 
. . . . d . . . . 8 . . . . . . 
. . . d d . . . . 1 d . . . . . 
`],
    100,
    true
    )
})
scene.onHitTile(SpriteKind.Player, 15, function (sprite) {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.object, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    General.vy += -300
    Trampoline.setKind(SpriteKind.object)
    Trampoline.x += Math.randomRange(-70, 70)
    Trampoline.y += Math.randomRange(-40, 40)
    // Transforms first sprite image into different image.
    animation.runImageAnimation(
    General,
    [img`
. . . . f f f f f . . . . . . . 
. . . f f f f f f f . . . . . . 
. . d d d d d f f f f . . . . . 
. . f 1 d d f 1 f f f f . . . . 
. . 1 1 d d 1 1 f f f f f . . . 
. d e e d d d d e e f f f . . . 
. d d d d d d d e e f d f . f f 
. f f f f f d d e e f f . f d f 
. f d d d f d 1 1 f f . . f d f 
. . f f f f f 1 1 1 1 f . f d f 
. . . . f 1 1 2 2 1 1 1 f f d f 
. . . f 1 f f 1 f 1 1 1 1 f f . 
. . . f 1 f f 1 f 1 1 1 1 f . . 
. . . f 8 8 8 8 8 f f e f . . . 
. . . 8 d d d d d d d d f . . . 
. . 8 . f f f f f f f f f . . . 
`],
    100,
    false
    )
})
let Trampoline: Sprite = null
let General: Sprite = null
scene.setTileMap(img`
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 5 b b b b b b b b b b b b b b b b b b 5 b b b b b 
b b b b b b b b 5 b b b b b b b b b b b b b b 5 b b b b b b b b b b b b b b 5 b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b 5 b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b 5 b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b 
b b b b b b b b c c c b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c 5 c c c c c c c c c 5 5 c c c c c c c c c 5 5 c c c c c c 5 c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c 5 c c c c c c c c c c c c c c c c c 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c 8 8 8 8 8 c c 5 c c c c c c c c c c c c c c c c c c 5 c c c c c c c c c c c c c c c c c c c c c c c c 5 c c c 5 c c c c c 
c c 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c 
c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d d d d 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 d d d d d d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d d d d 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 d d d d d d d d d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d d d d d d d d d 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 d d d d d d d d d 8 8 8 8 8 8 8 8 8 8 8 8 8 d d d d d 8 8 8 8 8 8 8 8 8 8 8 8 d d d d d d d d d d 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 d d d d d d d d d 8 8 8 8 8 8 8 8 8 8 d d d d d d d d d 8 8 8 8 8 8 8 8 8 8 8 d d d d d d d d d d 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 d d d d d d d d d 8 8 8 8 8 8 8 8 8 8 d d d d d d d d d 8 8 8 8 8 8 8 8 8 8 8 d d d d d d d d d d 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 d d d d d d d d d 8 8 8 8 8 8 8 8 8 8 d d d d d d d d d 8 8 8 8 8 8 8 8 8 8 8 d d d d d d d d d d 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 8 8 d d d d d d d d d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d d d d 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 d d d d d d d d d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 6 6 8 8 8 8 8 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 6 
6 6 6 6 6 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 6 
6 6 6 6 6 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 5 5 5 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 9 9 9 9 9 5 5 5 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 5 5 5 5 5 5 9 9 9 5 5 5 5 5 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 9 9 9 5 5 5 5 5 5 9 5 5 5 5 5 5 5 5 5 9 9 9 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 5 5 5 5 5 5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
5 5 5 5 5 5 5 5 5 5 5 4 4 4 5 5 5 5 5 5 5 5 4 4 5 5 5 5 4 4 4 4 5 5 5 5 5 5 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 5 5 4 
5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 4 4 4 4 5 5 5 5 5 4 4 4 4 5 5 5 5 5 5 5 4 4 4 4 4 4 4 
5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 5 5 5 5 4 4 4 4 4 4 2 2 2 2 2 4 4 4 4 4 4 2 2 2 2 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 4 4 4 4 4 4 4 
5 5 5 5 5 4 4 4 4 4 4 2 2 2 2 4 4 4 4 2 2 2 2 4 4 4 2 2 2 2 2 2 4 4 4 4 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 4 4 
5 5 5 4 4 4 4 4 4 4 4 2 2 2 2 2 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 4 4 4 4 2 2 2 2 4 4 4 4 4 4 4 4 4 2 2 2 2 
4 4 4 4 4 2 2 2 2 4 2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 2 2 2 2 
4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
// Add extra detail and texturing to tiles
//
//
// Add extra detail
//
// Add extra Adds detail to tiles
scene.setTile(15, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 4 4 4 4 4 4 4 4 4 4 4 4 5 5 
5 5 4 4 4 4 4 4 4 4 4 4 4 4 5 5 
5 5 4 4 2 2 2 2 2 2 2 2 4 4 5 5 
5 5 4 4 2 2 5 5 5 2 2 2 4 4 5 5 
5 5 4 4 2 2 5 4 5 2 2 2 4 4 5 5 
5 5 4 4 2 2 5 5 5 2 2 2 4 4 5 5 
5 5 4 4 2 2 2 2 2 2 2 2 4 4 5 5 
5 5 4 4 2 2 2 2 2 2 2 2 4 4 5 5 
5 5 4 4 2 2 2 2 2 2 2 2 4 4 5 5 
5 5 4 4 4 4 4 4 4 4 4 4 4 4 5 5 
5 5 4 4 4 4 4 4 4 4 4 4 4 4 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTile(11, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b 5 5 5 5 5 b b b b b 
b b b b b b 5 5 5 5 5 b b b b b 
b b b b b b 5 5 5 5 5 b b b b b 
b b b b b b 5 5 5 5 5 b b b b b 
b b b b b b 5 5 5 5 5 b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`, true)
General = sprites.create(img`
. . . . . . f f f f f f f f f f f f f . . . . . . . . . . . . . 
. . . . . . . f f f f f f f f f f f f f . . . . . . . . . . . . 
. . . . . . . f f d d d d d d d d f f f f . . . . . . . . . . . 
. . . . . . f f d d d d d d d d d d d f f . . . . . . . . . . . 
. . . . . . f d d 1 1 d d d d d 1 1 d f f f . . . . . . . . . . 
. . . . . . f d d 1 f d d d d d f 1 d d . f . . . . . . . . . . 
. . . . . . . d d d d d d d d d d d d d . . . . . . . . . . . . 
. . . . . . . . d d d d d d d d d d d d . . . . . . . . . . . . 
. . . . . . . . d d f d d d d d f d d d . . . . . . . . . . . . 
. . . . . . . . d d f f f f f f f d d d . . . . . . . . . . . . 
. . . . . . . . . d d d d d d d d d d d . . . . . . . . . . . . 
. . . . . . . . . d d d d d d d d d d . . . . . . . . . . . . . 
. . . . . . . . . . d d d d d d d d . . . . . . . . . . . . . . 
. . . . . . . . . . . . d d d d . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . d d d d . . . . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 d d d d 1 1 . . . . . . . . . . . . . . 
. . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 . . . . . . . . . . . . 
. . . . . . d 1 1 1 2 1 1 1 1 1 2 1 1 d . . . . . . . . . . . . 
. . . . . . d 1 1 1 2 2 2 2 2 2 2 1 1 d . . . . . . . . . . . . 
. . . . . . d 1 1 1 1 1 1 1 1 1 1 1 1 d . . . . . . . . . . . . 
. . . . . . d 1 1 1 1 1 1 1 1 1 1 1 1 d . . . . . . . . . . . . 
. . . . . . d 1 1 1 1 1 1 1 1 1 1 1 1 d . . . . . . . . . . . . 
. . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . . d 8 8 8 8 8 d 8 . . . . . . . . . . . . . . . 
. . . . . . . . . 8 d 8 . . 8 d 8 . . . . . . . . . . . . . . . 
. . . . . . . . . 8 8 8 . . 8 8 8 . . . . . . . . . . . . . . . 
. . . . . . . . 1 1 1 1 . . 1 1 1 1 . . . . . . . . . . . . . . 
`, SpriteKind.Player)
General.setPosition(300, 400)
scene.cameraFollowSprite(General)
General.ay = 100
Trampoline = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . 1 1 f f f f f f 1 1 . . . 
. . 1 1 f f f f f f f f 1 1 . . 
. . 1 1 f f f f f f f f f 1 1 . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
. . 1 . . 1 . . . . . 1 . . 1 . 
. . 1 . . 1 . . . . . 1 . . 1 . 
. . 1 . . . . . . . . 1 . . 1 . 
. . 1 . . . . . . . . . . . 1 . 
. . . . . . . . . . . . . . 1 . 
`, SpriteKind.object)
Trampoline.setPosition(300, 550)
game.onUpdate(function () {
    // Makes it so that charcter can
    General.x += controller.dx()
})
