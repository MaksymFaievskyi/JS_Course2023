//1 task
    document.getElementById("test").innerHTML = "Last";
    document.getElementsByTagName("div")[0].innerHTML = "Last";
    document.querySelector("#test").innerHTML = "Last";
    document.querySelectorAll("#test")[0].innerHTML = "Last";
    document.body.children[0].innerHTML = "Last";
//2 task
    let imgElem = document.getElementsByClassName("image")[0];
    imgElem.setAttribute("src", "cat.jpg")
    alert(imgElem.outerHTML);
//3 task 
    const arrTagsP = document.querySelectorAll("#text > p");
    for (let i = 0; i < arrTagsP.length; i++) {
        console.log(`Selector text ${i}: ${arrTagsP[i].innerText}`);
    } 

//4 task
    //1 method
    alert(document.getElementById("list").firstElementChild.innerText);
    alert(document.getElementById("list").lastElementChild.innerText);
    alert(document.getElementById("list").firstElementChild.nextElementSibling.innerText);
    alert(document.getElementById("list").lastElementChild.previousElementSibling.innerText);
    alert(document.getElementById("list").firstElementChild.nextElementSibling.nextElementSibling.innerText);
    //2 method
    alert(document.getElementById("list").children[0].innerText);
    alert(document.getElementById("list").children[4].innerText);
    alert(document.getElementById("list").children[1].innerText);
    alert(document.getElementById("list").children[3].innerText);
    alert(document.getElementById("list").children[2].innerText);
    //3 method
    alert(document.querySelector("li:nth-child(1)").innerText);
    alert(document.querySelector("li:nth-child(5)").innerText);
    alert(document.querySelector("li:nth-child(2)").innerText);
    alert(document.querySelector("li:nth-child(4)").innerText);
    alert(document.querySelector("li:nth-child(3)").innerText);

//5 task
    document.getElementsByTagName("h1")[0].style.background = "#35e653";
    document.getElementById("myDiv").children[0].style.fontWeight = "bold";
    document.getElementById("myDiv").children[1].style.color = "red" ;
    document.getElementById("myDiv").children[2].style.textDecoration = "underline" ;
    document.getElementById("myDiv").children[3].style.fontStyle = "italic" ;

    let mainLi = document.getElementById("myList").firstElementChild;
    mainLi.innerText = mainLi.innerText + mainLi.nextElementSibling.innerText + mainLi.nextElementSibling.nextElementSibling.innerText;
    mainLi.nextElementSibling.remove();
    mainLi.nextElementSibling.remove();
    mainLi.style.listStyleType = "none";
    document.getElementsByTagName("span")[0].style.visibility = "hidden";

//6 task
    //1 subtask
    const firstMsg = prompt("Enter first message");
    document.getElementById("input1").setAttribute("value", firstMsg);
    const secondMsg = prompt("Enter second message");
    document.getElementById("input2").setAttribute("value", secondMsg);
    //2 subtask
    let tempStr = document.getElementById("input1").value;
    document.getElementById("input1").setAttribute("value", document.getElementById("input2").value);
    document.getElementById("input2").setAttribute("value", tempStr);

//7 task 
    let mainElem = document.createElement("main");
    mainElem.className = "mainClass check item";
    let divElem = document.createElement("div");
    divElem.id = "myDiv";
    let pElem = document.createElement("p");
    const textElem = document.createTextNode("First paragraph");
    pElem.appendChild(textElem);
    divElem.appendChild(pElem);
    mainElem.appendChild(divElem);
    const bodyElem = document.getElementsByTagName("body")[0];
    bodyElem.appendChild(mainElem);














