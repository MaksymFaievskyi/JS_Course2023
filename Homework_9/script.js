//1 task
if (/^https:/.test($("#myA").attr("href"))) {
    $("#myA").attr("target","_blank")
}

//2 task
$("h2.head").css("background", "green");
$("h2.head").find( ".inner" ).css("fontSize", "35px");

//3 task
let $elems = $("h3");
$elems.each(function(){
    //console.log($( this ).text())
    let $nextElem = $( this ).next("div");
    $nextElem.insertBefore($( this ));
})

//4 task
$checkItems = $(".checkbox");
$checkItems.on("change", function(){
    let checkedItems = 0;
    $checkItems.each(function(){
        if ($(this).prop( "checked" )) {
            checkedItems++;
        }
    })
    if (checkedItems === 3) {
        $checkItems.each(function(){
            $(this).prop("disabled", true);
        })
    }
})


