function onload() {
    console.log("abc", localStorage.getItem("github-nickname-source"));
    document.getElementById("content").innerText = localStorage.getItem("github-nickname-source");
}
function onsave() {
    console.log("save", document.getElementById("content").innerText);
    console.log("save0", document.getElementById("content"));
    localStorage.setItem("github-nickname-source", document.getElementById("content").innerText);
}
window.onload = onload;
document.getElementById("save-button").addEventListener("click", onsave);
console.log("aasassa")
