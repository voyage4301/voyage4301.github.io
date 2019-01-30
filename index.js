$(() => {
    var $box = $('.box')

    var pointA = { x: 0, y: 0 },
        pointB = { x: 0, y: 0 },
        juliA = 0,
        juliB = 0,
        slock = false,
        bgSzie = 100
    $box.on('touchstart', e => {
        pointA.x = e.touches[0].pageX
        pointA.y = e.touches[0].pageY
        if (e.touches.length > 1) {
            pointB.x = e.touches[1].pageX
            pointB.y = e.touches[1].pageY
        }
        juliA = Math.pow((Math.pow(Math.abs(pointA.x - pointB.x), 2) + Math.pow(Math.abs(pointA.y - pointB.y), 2)), .5)
        if (e.touches.length > 1) {
            slock = true
        } else {
            slock = false
        }
    })

    $box.on('touchmove', e => {
        pointA.x = e.touches[0].pageX
        pointA.y = e.touches[0].pageY
        if (e.touches.length > 1) {
            pointB.x = e.touches[1].pageX
            pointB.y = e.touches[1].pageY
        }
        juliB = Math.pow((Math.pow(Math.abs(pointA.x - pointB.x), 2) + Math.pow(Math.abs(pointA.y - pointB.y), 2)), .5)

        if (slock) {
            if (juliB > juliA) {
                alert('放大')
                bgSzie += 20
                $box.css('background-size', bgSzie + '%')
            } else {
                alert('缩小')
                bgSzie -= 20
                if (bgSzie < 100) {
                    bgSzie = 100
                }
                $box.css('background-size', bgSzie + '%')
            }
        }
    })

    $box.on('touchend', e => {

    })
})


