/* 设置根字体大小 */
window.onload = window.onresize = function () {
    // 获取屏幕宽度
    let windowW = document.body.clientWidth
    // 以Iphone5为参考  1rem = 10px
    let htmlPx = windowW / 320 * 10

    document.getElementsByTagName('html')[0].style.fontSize = htmlPx + 'px'
}
