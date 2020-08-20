# Create Enemies

## Introduction @unplugged

Create enemies and spawn them at random locations!

## Step One

Add an ``||game:on game update every||`` block to the workspace.

```blocks
game.onUpdateInterval(500, function () {
})
```

## Step Two

Use a ``||custom:makeEnemySprite||`` block to make some enemies.

```blocks
game.onUpdateInterval(500, function () {
    // @highlight
    custom.makeEnemySprite(5)
})
```
