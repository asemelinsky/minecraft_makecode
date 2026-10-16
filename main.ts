player.onChat("sword", function () {
    if (coins >= swordPrice) {
        coins += 0 - swordPrice
        mobs.give(
        mobs.target(LOCAL_PLAYER),
        DIAMOND_SWORD,
        1
        )
        swordPrice += 2
        player.say("Тримай меч! Наступний коштуватиме " + swordPrice)
    } else {
        player.say("Мало монет: " + coins + " з " + swordPrice)
    }
})
mobs.onMobKilled(CHICKEN, function () {
    if (chickenInGame) {
        score += 1
        player.say("Влучив! Бали: " + score)
    }
})
player.onChat("shoot", function () {
    score = 0
    for (let index = 0; index < 5; index++) {
        mobs.spawn(CHICKEN, pos(randint(-8, 8), 0, randint(3, 9)))
        chickenInGame = true
        loops.pause(10000)
        chickenInGame = false
        mobs.kill(
        mobs.entitiesByType(CHICKEN)
        )
        loops.pause(1000)
    }
    coins += score
    player.say("Гру закінчено! Бали: " + score + " з 5")
    player.say("У гаманці монет: " + coins)
})
player.onChat("arrows", function () {
    if (coins >= 3) {
        coins += -3
        mobs.give(
        mobs.target(LOCAL_PLAYER),
        ARROW,
        16
        )
        player.say("Тримай 16 стріл! Монет лишилось: " + coins)
    } else {
        player.say("Мало монет: " + coins + ". Треба 3 — пограй ще!")
    }
})
player.onChat("shop", function () {
    player.say("arrows — 16 стріл за 3 монети")
    player.say("sword — меч за " + swordPrice + " монет")
    player.say("У тебе монет: " + coins)
})
player.onChat("run", function () {
    blocks.fill(
    GRASS,
    pos(-10, -1, -10),
    pos(10, -1, 10),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    pos(-10, 0, -10),
    pos(10, 15, 10),
    FillOperation.Replace
    )
})
let score = 0
let chickenInGame = false
let coins = 0
let swordPrice = 0
swordPrice = 5
