function Subs() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://5.12.105.234:8800/subscribe?mail=" + document.getElementById("Email").value +"&difficulty=medium", false);
    xhr.send(null);
};