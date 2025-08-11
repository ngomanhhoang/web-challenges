console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
    const currentPosition = window.scrollY
    const visibleHeight = window.innerHeight
    const totalHeight = document.body.clientHeight
    let percentage = currentPosition / (totalHeight - visibleHeight) * 100
    return percentage
}

window.addEventListener("scroll", () => {
    const percentage = calculateScrollPercentage()
    progressBar.style.width = percentage + '%'
})
