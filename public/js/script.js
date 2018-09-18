var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
console.log(baseUrl);

if(getUrl.pathname == "/admins/viewcamps"){
  getcamps();
}

function getcamps(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      for(i = 0; i < data.length; i++){
        document.getElementById('cont').innerHTML += "<p>"+data[i].name+"</p> <p>"+data[i].address+"</p> <p>"+data[i].sponsor.name+"</p> <p>"+data[i].sponsor.number+"</p> <p>"+data[i].date+"</p> <p>"+data[i].time+"</p>" + "<br><hr><br>";
      }
    }
  }
  xhttp.open("GET", baseUrl+"/getallcamps", true);
  xhttp.send();
}
