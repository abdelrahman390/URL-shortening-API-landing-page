const base_url = "https://api.shrtco.de/v2/";

const btn = document.getElementById('btn');
const urlInput = document.getElementById('url');
const resultDiv = document.querySelector('result')
const  shortedLink = document.querySelector(".messageTwo")


// const fetchData = async(endpoint) =>{
//     const webAdd = `${base_url}${endpoint}`;
//     let response =  await fetch(webAdd);
//     response = await response.json()
//     return response.result; 
// }

const submitListener = async(e) => {
    let res = (await fetch(`https://api.shrtco.de/v2/shorten?url=${urlInput.value}`))

    let myData = await res.text()

    let finalResult =  JSON.parse(myData).result.short_link
    let finalResultShort =  JSON.parse(myData).result.full_short_link2
    let div = document.createElement("div")
    div.classList = 'content'
    shortedLink.appendChild(div)

    div.innerHTML = `
        <h4>${urlInput.value}</h4>
        <div>
            <a target="_blank" href="${finalResultShort}">${finalResult}</a>
            <button id="copyButton" class="copyBtn">copy it</button>
        </div>
    `
    let copyButton =  document.querySelectorAll(".copyBtn")
    copyButton.forEach(element => {
        element.addEventListener('click', function (e)  {
            element.classList.add("copied")
            element.textContent = 'copied'
            navigator.clipboard.writeText(element.previousElementSibling.textContent)   
        })
    });

    urlInput.value = ''
}

window.onscroll = function () {
    if(this.scrollY === 320){
    urlInput.focus()
    }
}
let derectButton = document.querySelectorAll(".direct")
derectButton.forEach(element => {
    element.onclick = () => {
        window.scrollTo({
            top: 320,
            behavior: "smooth"
        })
    }
});
