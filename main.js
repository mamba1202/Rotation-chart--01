var allButtons = $('#buttons > span')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {//on接受两个参数 一个事件一个函数
        //allButtons[i]是一个DOM对象，onlick属性
        //$(allButtons[i]).on('click', function(x){} on接受一个
        console.log('hi')
        var index = $(x.currentTarget).index()//index找到是第几个按钮
        //currentTarget是监听的那个按钮，Target是点击的那个按钮
        var p = index * -300
        $('#images').css({
            transform: 'translate(' + p + 'px)'
        })
        n = index
        allButtons.eq(n)
            .addClass('red')
            .siblings('.red').removeClass('red')//找到n的兄弟有red属性的将其移除 sibling接受选择器用(.)而remove是类不用
    })
}




var n = 0;
var size = allButtons.length
allButtons.eq(n % size).trigger('click')
//allButtons[n%3]获取为DOM对象且要封装为jQuery  $(allButtons[n%3])
//trigger后面接任何事件名 触发点击事件 click('click')也可以
var timerId = setInterval(() => {//给一个id
    n += 1
    allButtons.eq(n % size).trigger('click')
        .addClass('red')
        .siblings('.red').removeClass('red')

    console.log(n % 3)
}, 1000)
$('.window').on('mouseenter', function () {
    window.clearInterval(timerId)//砸掉这个
})
$('.window').on('mouseleave', function () {
    timerId = setInterval(() => {
        n += 1
        allButtons.eq(n % size).trigger('click')
        console.log(n % 3)
    }, 1000)//重新运行
})