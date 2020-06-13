radio.onReceivedNumber(function (receivedNumber) {
    毫 += receivedNumber
    while (毫 >= 10) {
        毫 = 毫 - 10
        元 += 1
    }
    if (元 > 玩家元 && 毫 > 玩家毫) {
        提示()
        掉出硬币()
    }
})
function 用家輸入 () {
	
}
function 提示 () {
	
}
function 掉出硬币 () {
	
}
let 毫 = 0
let 元 = 0
let 玩家毫 = 0
let 玩家元 = 0
用家輸入()
radio.setGroup(1)
玩家元 = 30
玩家毫 = 0
while (true) {
    basic.showString("" + 元 + "." + 毫)
}
