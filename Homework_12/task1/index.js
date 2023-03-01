$("button").click(function(){
    $.get("some1.txt", function(data, status){
      console.log("Data: " + data + "\nStatus: " + status);
      let btn = document.querySelector('button');
      btn.textContent = data;
    });
  });