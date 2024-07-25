function Loadproducts(){
    fetch("http://fakestoreapi.com/products")
    .then(response=>response.json())
    .then(data=>{
        for(var item of data){
            console.log(item.title);
        }
    })
}
Loadproducts();