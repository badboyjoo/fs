enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.message1)
})
radio.onReceivedString(function (receivedString) {
	
})
basic.showIcon(IconNames.Heart)
radio.setGroup(99)
radio.setTransmitPower(7)
