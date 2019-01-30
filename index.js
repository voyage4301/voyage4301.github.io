$(() => {
    var $box = $('.box')

    var pointA = { x: 0, y: 0 },
        pointB = { x: 0, y: 0 },
        juliA = 0,
        juliB = 0
    $box.on('touchstart', e => {
        pointA.x = e.targetTouches[0].pageX
        pointA.y = e.targetTouches[0].pageY
        if (e.targetTouches.length > 1) {
            alert(1111)            
            pointB.x = e.targetTouches[1].pageX
            pointB.y = e.targetTouches[1].pageY
            juliA = Math.pow((Math.pow(Math.abs(pointA.x - pointB.x)) + Math.pow(Math.abs(pointA.y - pointB.y))), .5)
        }
    })

    $box.on('touchmove', e => {
        pointA.x = e.targetTouches[0].pageX
        pointA.y = e.targetTouches[0].pageY
        if (e.targetTouches.length > 1) {
            alert(2222)            
            pointB.x = e.targetTouches[1].pageX
            pointB.y = e.targetTouches[1].pageY
            juliB = Math.pow((Math.pow(Math.abs(pointA.x - pointB.x)) + Math.pow(Math.abs(pointA.y - pointB.y))), .5)
        }
    })

    $box.on('touchend', e => {
        console.log(juliB, juliA);
        if (juliB > juliA) {
            alert('放大')
        } else {
            alert('缩小')
        }
    })
    alert('完毕1')
})


