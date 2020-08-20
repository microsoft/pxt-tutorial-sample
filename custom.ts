// Add your code here

namespace custom {
    //% block
    export function makeEnemySprite(count: number) {
        for (let i = 0; i < count; i++) {
            let enemySprite = sprites.createProjectileFromSide(img`
                    . . . . . . . . . . . c c . . .
                    . . . . . . . c c c c 6 3 c . .
                    . . . . . . c 6 3 3 3 3 6 c . .
                    . . c c . c 6 c c 3 3 3 3 3 c .
                    . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c
                    . f f 5 c 6 c 5 f f 3 3 3 3 3 c
                    . f f 5 c 6 c 5 f f 6 3 3 3 c c
                    . b 5 5 3 c 3 5 5 c 6 6 6 6 c c
                    . . b 5 5 3 5 5 c 3 3 3 3 3 3 c
                    . c c 5 5 5 5 5 b c c 3 3 3 3 c
                    c 5 5 4 5 5 5 4 b 5 5 c 3 3 c .
                    b 5 4 b 4 4 4 4 b b 5 c b b . .
                    c 4 5 5 b 4 b 5 5 5 4 c 4 5 b .
                    c 5 5 5 c 4 c 5 5 5 c 4 c 5 c .
                    c 5 5 5 5 c 5 5 5 5 c 4 c 5 c .
                    . c c c c c c c c c . . c c c .
                `, -70, 0)
            enemySprite.y = randint(0, scene.screenHeight())
        }
    }

    //% block
    export function makeRandomBackground() {
        scene.setBackgroundColor(randint(0, 15))
    }
}