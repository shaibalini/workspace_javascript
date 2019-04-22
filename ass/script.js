function showAll(input) {
    var header = document.querySelector("header");
    var section = document.querySelector("section");
    var requestURL = "https://api.github.com/search/repositories?q="+input;
    var request = new XMLHttpRequest();
  
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
  
    request.onload = function() {
      var objArray = request.response;
        // console.log(request.response);
      populateHeader(objArray);
      showCountries(objArray);
    };
  
    function populateHeader(jsonObj) {
     console.log(jsonObj.items);
    }
  
    function showCountries(arrayData) {
      console.log('triigggee')
      var jsArray = arrayData.items;
      console.log(jsArray);
      for (var i = 0; i < jsArray.length; i++) {
        var myArticle = document.createElement("article");
        var div = document.createElement("div");
        var myH2 = document.createElement("h2");
        var myPara1 = document.createElement("p");
        var myPara2 = document.createElement("p");
        
        
        var myList = document.createElement("ul");
        
        
      
        
  
        // div.setAttribute('align','right');
        myH2.textContent = "Id:" + jsArray[i].id;
        myPara1.textContent = "Full Name:" + jsArray[i].full_name;
        myPara2.textContent = "Private:" + jsArray[i].private;
        
        
        div.appendChild(myH2);
        div.appendChild(myPara1);
        div.appendChild(myPara2);
        
        myArticle.appendChild(div);
        
  
        myArticle.appendChild(myList);
  
        section.appendChild(myArticle);
  
        
      }
      
      
    }
    
  }
  