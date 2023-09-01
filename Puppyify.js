(async function changeImagesToDogs() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        images[i].src = data.message;
    }
})()
