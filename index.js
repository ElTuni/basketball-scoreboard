function plus(where, points) {
    let total = Number(where.textContent) + points
    where.textContent = total
    
    let count_home = document.getElementById("count-home")
    let count_guest = document.getElementById("count-guest")
    
    if (Number(count_home.textContent) > Number(count_guest.textContent)) {
        count_home.style.boxShadow = "0px 0px 15px white"
        count_guest.style.boxShadow = "0px 0px 0px white"
    } else if (Number(count_home.textContent) < Number(count_guest.textContent)) {
        count_home.style.boxShadow = "0px 0px 0px white"
        count_guest.style.boxShadow = "0px 0px 15px white"
    } else {
        count_home.style.boxShadow = "0px 0px 0px white"
        count_guest.style.boxShadow = "0px 0px 0px white"
    }
}

function reset() {
    document.getElementById("count-home").textContent = 0
    document.getElementById("count-guest").textContent = 0
    document.getElementById("count-home").style.boxShadow = "0px 0px 0px white"
    document.getElementById("count-guest").style.boxShadow = "0px 0px 0px white"
}

// Expose functions globally
window.plus = plus;
window.reset = reset;
