function onload() {
    document.getElementById("content").innerText = localStorage.getItem("github-nickname-source");
}
function onsave() {
    localStorage.setItem("github-nickname-source", document.getElementById("content").innerText);
}
window.onload = onload;
// document.getElementById("body").addEventListener("load", onload);
document.getElementById("save-button").addEventListener("click", onsave)
