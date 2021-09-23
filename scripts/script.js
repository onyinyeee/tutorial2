document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
    displayMeme();
}

async function displayMeme() {
    try {
        const response =  await 
        fetch("https://api.imgflip.com/get_memes");
        const jsonResponse = await response.json();

        console.log(jsonResponse);
        const meme = jsonResponse.data.memes[3];
        
        const image = document.createElement("img");
        image.src = meme.url;
        image.alt = meme.name;
        image.width = 200;

        //just adding YOLO

        const memeContainer = 
            document.querySelector("#meme");
        memeContainer.appendChild(image);
    }

    catch (error) { 
        console.log("promise failed", error);
}
}