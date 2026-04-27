function api_parcial() {
    var enPoint="https://fakestoreapi.com/products"
    fetch(endPoint)
    .then(function(response){
        return response.json()
        
    })
    .then(function(data){
        var valores_x=[]
        for (let i = 0; i < valores_x.length; i++) {
            valores_x.push(data[i].rating)
        }
    })
}

