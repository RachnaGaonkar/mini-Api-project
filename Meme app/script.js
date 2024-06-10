let meme =document.getElementById("meme")
let title=document.getElementById("title")
let getMemeBtn=document.getElementById("get-meme-btn")
//api url
let url="https://meme-api.com/gimme/"
//array of subreddits of ur choice
let subreddits=["catmemes","wholesomemes","dogmemes","me_irl"]

//function to get random meme
let getMeme=()=>{
    //Choose a random subreddit from the subreddits array
    let randomSubreddit=subreddits[Math.floor(Math.random()*subreddits.length)]
    //fetch data from the api
    fetch(url+randomSubreddit)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        //display meme image and title only after imaeg loads
        let memeImg=new Image();
        memeImg.onload=()=>{
            meme.src=data.url
            title.innerHTML=data.title
        }
        memeImg.src=data.url
    })
}

//call the getMeme() on get meme button clicked and on window load

getMemeBtn.addEventListener("click",getMeme);
window.addEventListener("load",getMeme)
