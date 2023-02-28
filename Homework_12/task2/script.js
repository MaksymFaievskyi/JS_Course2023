
$("#btn").on("click", function(){
    fetch('./books.json')
    .then(response => response.json())
    .then(books => {
        $("#btn").remove();
        let ul = document.createElement("ul");
        for (const book of books) {
            let li = document.createElement("li");
            li.innerText = book["author"];
            ul.appendChild(li);
        }
        document.body.appendChild(ul);
    });
})