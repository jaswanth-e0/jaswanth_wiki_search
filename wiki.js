let input1 = document.getElementById("searchInput")
input1.classList.add("search-input")
let div0 = document.getElementById("searchResults")
input1.addEventListener("keydown", function(event) {
    let value1 = input1.value
    if (value1 !== "" && event.key === 'Enter') {
        let url = "https://apis.ccbp.in/wiki-search?search=" + value1
        let options = {
            methods: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                let {
                    search_results
                } = data
                console.log(data)
                for (let i of search_results) {
                    let div1 = document.createElement("div")
                    let h1 = document.createElement("h1")
                    h1.textContent = i.title
                    div1.appendChild(h1)
                    div1.classList.add("result-item")
                    div0.appendChild(div1)
                    let a1 = document.createElement("a")
                    a1.href = i.link
                    a1.textContent = i.link
                    let des = document.createElement("para")
                    des.textContent = i.description
                    div1.appendChild(a1)
                    let break1 = document.createElement("br")
                    div1.appendChild(break1)
                    div1.appendChild(des)
                }
            })
    }
});