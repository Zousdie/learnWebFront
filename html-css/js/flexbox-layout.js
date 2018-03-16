document.getElementById('headerNavBtn').headerNavBtnKey = false
document.getElementById('headerNavBtn').addEventListener('click', function(e) {
    let el = e.target.parentNode.getElementsByTagName('ul')[0]
    if (!this.headerNavBtnKey) {
        el.style.display = 'flex'
        this.headerNavBtnKey = true
    } else {
        el.style.display = 'none'
        this.headerNavBtnKey = false
    }
    console.log(el.offsetHeight)
})
