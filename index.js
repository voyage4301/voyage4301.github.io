$(() => {
    var $box = $('.box')

    var pointA = { x: 0, y: 0 },
        pointB = { x: 0, y: 0 },
        juliA = 0,
        juliB = 0
    $box.on('touchstart', e => {
        console.log(e);
        
        pointA.x = e.changedTouches[0].pageX
        pointA.y = e.changedTouches[0].pageY
        if (e.changedTouches.length > 1) {
            pointB.x = e.changedTouches[1].pageX
            pointB.y = e.changedTouches[1].pageY
        }
        juliA = Math.pow((Math.pow(Math.abs(pointA.x - pointB.x), 2) + Math.pow(Math.abs(pointA.y - pointB.y), 2)), .5)
    })

    $box.on('touchmove', e => {
        pointA.x = e.changedTouches[0].pageX
        pointA.y = e.changedTouches[0].pageY
        if (e.changedTouches.length > 1) {
            pointB.x = e.changedTouches[1].pageX
            pointB.y = e.changedTouches[1].pageY
        }
        juliB = Math.pow((Math.pow(Math.abs(pointA.x - pointB.x), 2) + Math.pow(Math.abs(pointA.y - pointB.y), 2)), .5)
    })

    $box.on('touchend', e => {
        alert(juliA, juliB);
        if (e.changedTouches.length > 1) {
            if (juliB > juliA) {
                alert('放大')
            } else {
                alert('缩小')
            }
        }

    })
})


