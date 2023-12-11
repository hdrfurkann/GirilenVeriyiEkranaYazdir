const searchBox = document.querySelector(".arama-kutusu");
const araBtn = document.querySelector(".arama-icon");
const cikisBtn = document.querySelector(".cikis-icon");
const araGiris = document.querySelector("input");
const searchData = document.querySelector(".arama-yazdir");
araBtn.onclick = () => {
    searchBox.classList.add("active");
    araBtn.classList.add("active");
    araGiris.classList.add("active");
    cikisBtn.classList.add("active");
    araGiris.focus();
    if (araGiris.value != "") {
        var values = araGiris.value;
        searchData.classList.remove("active");
        searchData.innerHTML = "Merhaba, " + "<span style='font-weight: 500;'>" + values + "</span>";
    } else {
        searchData.textContent = "";
    }
}
cikisBtn.onclick = () => {
    searchBox.classList.remove("active");
    araBtn.classList.remove("active");
    araGiris.classList.remove("active");
    cikisBtn.classList.remove("active");
    searchData.classList.toggle("active");
    araGiris.value = "";
}