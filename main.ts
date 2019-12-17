namespace SpriteKind {
    export const object = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.object, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    General.vy += -250
    Trampoline.setKind(SpriteKind.object)
    Trampoline.x += Math.randomRange(-70, 70)
    Trampoline.y += Math.randomRange(-40, 40)
})
let Trampoline: Sprite = null
let General: Sprite = null
scene.setBackgroundColor(9)
General = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 4 4 3 3 . . . . . 
. 5 5 5 5 . 4 4 1 3 3 3 . . . . 
. 5 2 2 3 3 4 9 3 7 1 . . . . . 
. 5 a 2 6 6 6 2 9 9 9 9 . . . . 
. a 5 5 5 c 4 6 d d 1 9 . . . . 
. 6 a 9 c 5 5 4 6 3 d 1 8 8 8 . 
. 6 f 9 c d 5 4 4 6 d d d . . . 
. 4 4 5 5 5 4 4 5 8 6 d d . . . 
. f 4 4 6 6 6 6 6 6 6 f d . . . 
. f 2 4 6 d 4 4 4 4 4 . . . . . 
. . f f 6 d 4 4 4 4 4 . . . . . 
. . . c 6 d . 2 . . . . . . . . 
. . . d d . . . 2 2 2 2 . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(General)
General.ay = 100
Trampoline = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 1 1 1 1 1 1 1 1 1 . . . . 
. . 1 1 f f f f f f f 1 1 1 . . 
. 1 f f f f f f f f f f f 1 1 1 
1 1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 1 
1 1 f f f f f f f f f f f 1 1 . 
. 1 1 1 1 1 f f f f f f 1 1 1 . 
. 1 . . 1 1 1 1 1 1 1 1 . . 1 . 
. 1 . . 1 . . . . . . 1 . . 1 . 
. 1 . . 1 . . . . . . 1 . . 1 . 
. 1 . . 1 . . . . . . 1 . . . . 
. 1 . . . . . . . . . 1 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.object)
General.setPosition(300, 400)
Trampoline.setPosition(300, 520)
game.onUpdate(function () {
    General.x += controller.dx()
})
