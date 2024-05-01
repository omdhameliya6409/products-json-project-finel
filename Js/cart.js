import navbar from "../Components/nav.js";
import postData from "../api/post.js";
import createtag from "../Js/createtag.js";

document.getElementById("navbar").innerHTML = navbar()
const handleqty = (opr, data) => {
    if (opr == "+") {
        data.qty += 1
        Update(data)
    }
}
const Update = (data) => {
    fetch(`http://localhost:3000/cart/${data.id}`, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((updatedData) => {
        console.log('Data updated successfully:', updatedData);
    })
};

const uimaker = (data) => {
    data.map((ele) => {
        let title = createtag("h3")
        title.innerHTML = ele.title
        let img = createtag("img")
        img.src = ele.img
        let td1 = createtag("td1")
        td1.append(img, title)

        let btn1 = createtag("button")
        btn1.innerHTML = "-"
        let qty1 = createtag("span")
        qty1.innerHTML = ele.qty
        let btn2 = createtag("button")
        btn2.innerHTML = "+"
        btn2.addEventListener("click", () => handleqty("+", ele))
        btn2.addEventListener("click", () => handleqty("-", ele))
        let td2 = createtag("td2")
        td2.append(btn1, qty1, btn2)


        let price = createtag("h3")
        price.innerHTML = ele.price * ele.qty
        let td3 = createtag("td3")
        td2.append(price)
        let tr = createtag("tr")
        tr.append(td1, td2, td3)
        document.getElementById("tbody").append(tr)


    })
}
const getdata = () => {
    fetch("http://localhost:3000/cart")
        .then((response) => response.json())
        .then((data) => uimaker(data))
}

getdata()