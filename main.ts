radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        ping.change(LedSpriteProperty.X, 1)
    } else if (receivedNumber == -1) {
        ping.change(LedSpriteProperty.X, -1)
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    pong.change(LedSpriteProperty.X, -1)
    radio.sendNumber(1)
})
function map (num: number) {
    if (num == 0) {
        return 4
    } else if (num == 1) {
        return 3
    } else if (num == 2) {
        return 2
    } else if (num == 3) {
        return 1
    } else if (num == 4) {
        return 0
    } else {
    	
    }
    return -1
}
input.onButtonPressed(Button.B, function () {
    pong.change(LedSpriteProperty.X, 1)
    radio.sendNumber(-1)
})
radio.onReceivedValue(function (name, value) {
    if (name.includes("ballx")) {
        ball.set(LedSpriteProperty.X, map(value))
    } else if (name.includes("bally")) {
        ball.set(LedSpriteProperty.Y, map(value))
    } else {
    	
    }
})
let ball: game.LedSprite = null
let ping: game.LedSprite = null
let pong: game.LedSprite = null
radio.setGroup(1)
pong = game.createSprite(2, 5)
ping = game.createSprite(2, 0)
ball = game.createSprite(2, 2)
ball.turn(Direction.Right, 45)
game.setLife(3)
basic.forever(function () {
    if (ball.isTouching(pong)) {
        game.addScore(1)
    } else if (ball.get(LedSpriteProperty.Y) == 4) {
        game.removeLife(1)
    } else {
    	
    }
})
