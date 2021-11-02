// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "the void":
            case "level2":return tiles.createTilemap(hex`0c000c00010101010101010102020202010505050505050502020202010505050505050502020202010505050505050506060606010505050505050506060606010505050505050506060606010505050505050506060606010505050505050506060606040505050202020206060606040505050202020206060606040505050202020206060606040404040303030306060606`, img`
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . 2 2 2 . 
. . . . . . . . 2 . . . 
. . . . . . . . 2 . . . 
. . . . . . 2 2 2 . . . 
. . . . . . 2 . . . . . 
. . . 2 2 2 2 . . . . . 
. . 2 2 . . . . . . . . 
. 2 . . . . . . . . . . 
. . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles25,sprites.builtin.forestTiles21,sprites.builtin.forestTiles0,sprites.builtin.forestTiles28,sprites.dungeon.floorDark4,sprites.builtin.oceanDepths9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
