'use strict'


    ;
(function () {

    let mainBtn = document.querySelector('.main-btn')
    let deskTop = mainBtn.parentNode
    console.log(deskTop);

    // 桌布属性
    let d_width = deskTop.offsetWidth,
        d_height = deskTop.offsetHeight,
        // 按钮属性
        b_width = mainBtn.offsetWidth,
        b_height = mainBtn.offsetHeight,
        b_top = 0,
        b_left = 0


        ;
    ['touchmove', 'touchend'].forEach(item => {
        mainBtn.addEventListener(item, function (e) {
            b_left = e.changedTouches[0].clientX - b_width / 2
            b_top = e.changedTouches[0].clientY - b_height / 2
            setPosition(this, b_left, b_top)
        })
    })

    function setPosition(el, x, y) {
        /* 上下左右+4个角防漏 */
        if (x < 0) { //左
            x = 0
            if (y < 0) { //左上
                y = 0
            } else if (y > (d_height - b_height)) { //左下
                y = d_height - b_height
            }
        } else if (y < 0) { //上
            y = 0
            if (x < 0) { //左上
                x = 0
            } else if (x > (d_width - b_width)) { //右上
                x = d_width - b_width
            }
        } else if (x > (d_width - b_width)) { //右
            x = d_width - b_width
            if (y < 0) { //右上
                y = 0
            } else if (y > (d_height - b_height)) { //右下
                y = d_height - b_height
            }
        } else if (y > (d_height - b_height)) { //下
            y = d_height - b_height
            if (x < 0) { //左下
                x = 0
            } else if (x > (d_width - b_width)) { //右下
                x = d_width - b_width
            }
        }
        /* 定位 */
        el.style.left = x + 'px'
        el.style.top = y + 'px'
    }

})()