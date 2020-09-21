document.getElementById("SubscribeButton").onclick = function () {

    console.log('mishu');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://5.12.105.234:8080/subscribe?mail=" + document.getElementById("Email").value +"&difficulty=medium", false);
    
    xhr.send(null);
    console.log('Done');
};