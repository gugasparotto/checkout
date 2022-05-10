document.addEventListener('DOMContentLoaded', function () {
    
    	var sendLink = document.getElementById('send') ;
	   send.addEventListener('click', function() {
          // var firstName = document.getElementById("firstName").value;
          // var lastName = document.getElementById("lastName").value;
           var email = document.getElementById("email").value;
           var telefone = document.getElementById("telefone").value;
           var cep = document.getElementById("cep").value;
           var rua = document.getElementById("rua").value;
           var numero = document.getElementById("numero").value;
           var complemento = document.getElementById("complemento").value;
           var bairro = document.getElementById("bairro").value;
         //  var cidade = document.getElementById("cidade").value;
        //   var estado = document.getElementById("estado").value;
    var jsonText =
		{
      
      //"firstname":""+firstName+"",
      //"lastname":""+lastName+"",
      "email":""+email+"",
      "telephone":""+telefone+"",
      "postcode":""+cep+"",
      "address_street":""+rua+"",
      "address_street_number":""+numero+"",
      "address_street_complement":""+complemento+"",
      "address_street_district":""+bairro+"",
    //  "address_city":""+cidade+"",
    //  "address_state":""+estado+"",
      "ip":"127.0.0.1",
      "custom_txt":"Tênis de Corrida 39", 
      "products":[ 
        {
            "product_sku":"123456", 
            "product_qty":2
        }
      ],
      "tracking":
      { 
            "utm_source":"google",
            "utm_campaign":"black-friday",
            "utm_medium":"cpc",
            "utm_content":"tenis-corrida",
            "utm_term":"logo-link"
      }
}
            
          
var myJSON = JSON.stringify(jsonText);
		var myHEADER = "https://admin.appmax.com.br/api/v3/customer?access-token=A976CA7F-F11E96AC-147FBE78-C0C1A3D4";
		var xmlhttp = new XMLHttpRequest(); /// new HttpRequest instance
           //pega a response no sucesso
          xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           var res= JSON.parse(this.response);
            //filtra a key 'id' da response
            var customerId =res.data.id;
            console.log(customerId);
       }
    }
    
		xmlhttp.open("POST", myHEADER);
		xmlhttp.setRequestHeader ("Content-Type", "application/x-www-form-urlencoded");
		xmlhttp.send(myJSON);
        console.log('acabou');

    });
});
