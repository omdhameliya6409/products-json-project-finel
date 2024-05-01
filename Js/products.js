import navbar from "../Components/nav.js";
import postData from "../api/post.js";
import createtag from "../Js/createtag.js";

document.getElementById("navbar").innerHTML = navbar()
const getdata = () =>{
    fetch("http://localhost:3000/products")
    .then((response)=> response.json())
    .then((response) =>uimaker(response))
}

getdata()
const isexists = (ele)=>{
     fetch(`http://localhost:3000/cart/${ele.id}`)
     .then((response)=> response.json())
     .then((data)=>{
        alert("aleaready exist")
     })
    .catch ((error)=>{
        postData(ele,"http://localhost:3000/cart")
    })
   
}
const uimaker = (data)=>{
    document.getElementById("container").innerHTML="";
    data.map((ele)=>{
        let title = document.createElement("h3")
        title.innerHTML = ele.title
        let img = document.createElement("img")
        img.src = ele.img;
        let price = document.createElement("h3")
        price.innerHTML = ele.price
        let category = document.createElement("h3")
        category.innerHTML = ele.category
        let btn = document.createElement("button")
        btn.innerHTML ="buy"
        btn.addEventListener("click",()=> isexists({...ele,qty:1}))
        let div = document.createElement("div")
        div.append(img,title,price,category,btn)
        document.getElementById("container").append(div)
    })
}