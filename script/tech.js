async function gunjan(){

  try{

    const url  = 'https://newsapi.org/v2/everything?q=tech&from=2022-06-13&sortBy=popularity&apiKey=1f8b0cc728a74a3b8d9de4ec024c618f'
   

    let res = await fetch(url)
    let data = await res.json()
    append(data.articles)
  

  }catch(err){
    console.log(err)
  }



}

gunjan()




function append(data){
   data.forEach(function(el){
       let div = document.createElement("div")

       let img  = document.createElement("img")
       img.setAttribute("class","jsimg")

       let h3 =  document.createElement("h3")

       let p2 = document.createElement("p")

       p2.innerText = el.description

       img.src = el.urlToImage
       h3.innerText = el.content

       div.append(img,h3,p2)
       document.querySelector(".container").append(div)
   })
}


document.querySelector(".firstpost").addEventListener("click",myg)

function myg(){
  window.location.href = "index.html"
}
