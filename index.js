let count_home = document.getElementById("count-home")
let count_guest = document.getElementById("count-guest")

function plus(where, points) {
    let total = Number(where.textContent) + points
    where.textContent = total
    if (Number(count_home.textContent) > Number(count_guest.textContent)) {
        count_home.style.boxShadow = "0px 0px 15px white"
        count_guest.style.boxShadow = "0px 0px 0px white"
    }else if (Number(count_home.textContent) < Number(count_guest.textContent)) {
        count_home.style.boxShadow = "0px 0px 0px white"
        count_guest.style.boxShadow = "0px 0px 15px white"
    }else {
        count_home.style.boxShadow = "0px 0px 0px white"
        count_guest.style.boxShadow = "0px 0px 0px white"
    }}

function reset() {
   count_home.textContent = 0
   count_guest.textContent = 0
}
