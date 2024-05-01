const update=(data)=>{
    try {
        fetch(`http://localhost:3000/cart/${ele.id}` ,{
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error.message);
    }
}