$(() => {
    var $box = $('.box')

    var pointA = { x: 0, y: 0 },
        pointB = { x: 0, y: 0 },
        juliA = 0,
        juliB = 0
    $box.on('touchstart', e => {
        console.log(e);

        pointA.x = e.touches[0].pageX
        pointA.y = e.touches[0].pageY
        if (e.touches.length > 1) {
            pointB.x = e.touches[1].pageX
            pointB.y = e.touches[1].pageY
        }
        juliA = Math.pow((Math.pow(Math.abs(pointA.x - pointB.x), 2) + Math.pow(Math.abs(pointA.y - pointB.y), 2)), .5)
    })

    $box.on('touchmove', e => {
        pointA.x = e.touches[0].pageX
        pointA.y = e.touches[0].pageY
        if (e.touches.length > 1) {
            pointB.x = e.touches[1].pageX
            pointB.y = e.touches[1].pageY
        }
        juliB = Math.pow((Math.pow(Math.abs(pointA.x - pointB.x), 2) + Math.pow(Math.abs(pointA.y - pointB.y), 2)), .5)
    })

    $box.on('touchend', e => {
        alert('a:' + juliA + 'b:' + juliB);
        alert(e.touches.length)
        if (juliB > juliA) {
            alert('放大')
        } else {
            alert('缩小')
        }

    })
})


