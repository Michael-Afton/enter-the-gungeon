sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(true)
})
let mySprite: Sprite = null
let myCorg = corgio.create(SpriteKind.Player)
myCorg.updateSprite()
myCorg.horizontalMovement()
myCorg.verticalMovement()
tiles.loadMap(tiles.createMap(tilemap`the void`))
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
mySprite.setPosition(35, 68)
mySprite = sprites.create(assets.image`boney`, SpriteKind.Food)
mySprite.setPosition(140, 103)
