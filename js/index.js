$(function () {

    ; // 轮播图
    (function () {
        var viewWidth = $('.carousel').width()
        var startX = 0
        var startT = 0

        $('.carousel').on('touchstart', function (e) {
            $('.carousel').carousel('pause')
            startX = e.originalEvent.touches[0].clientX
            // startT = new Date()
        })
        $('.carousel').on('touchmove', function (e) {

        })
        $('.carousel').on('touchend', function (e) {
            var tap = e.originalEvent.changedTouches[0].clientX - startX
            if (tap > 50) {
                $('.carousel').carousel('prev')
            } else if (tap < -50) {
                $('.carousel').carousel('next')
            }
            $('.carousel').carousel('cycle')
        })

        // -----------------------------------------
        var $imgs = $('.carousel img')
        resize()
        $(window).on('resize', resize)

        function resize() {
            $(this).width() >= 640 ? $imgs.each(function () {
                $(this).attr('src', $(this).data('psrc'))
            }) : $imgs.each(function () {
                $(this).attr('src', $(this).data('msrc'))
            })
        }
    })();

    ; //实现区域滚动
    (function () {
        var $ul = $('.wjs_product .wraper ul')
        var $lis = $ul.children()
        var totalWidth = 0
        $lis.each(function () {
            totalWidth += $(this).width()
        })
        $ul.css({
            width: totalWidth
        })
        new IScroll('.wjs_product .wraper', {
            scrollX: true,
            scrollY: false
        })
    })();

})