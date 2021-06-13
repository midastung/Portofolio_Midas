const triggers = document.querySelectorAll('#h_link');
const highlight = document.createElement('span');
document.body.append(highlight)
highlight.classList.add('highlight');

function highlightlink() {
    //抓各triggers在網頁中的位置
    const linkCoords = this.getBoundingClientRect()
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + scrollY,
        left: linkCoords.left + scrollX,
    }
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}


triggers.forEach((el) => {
    el.addEventListener('mouseenter', highlightlink)
})



