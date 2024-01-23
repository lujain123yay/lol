input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    music.play(music.stringPlayable("E B G F D G A F ", 120), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.StickFigure)
    basic.showIcon(IconNames.Chessboard)
})
