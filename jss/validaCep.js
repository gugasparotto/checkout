$(document).ready(function(){
    $('#validaCep').click(function(){ 
           alert('teste');
    function pesquisacep(valor) {

        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {
            

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                document.getElementById('rua').value="...";
                document.getElementById('bairro').value="...";
                document.getElementById('cidade').value="...";
                document.getElementById('estado').value="...";
                
                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    }

       });
    
});
    
function limpa_formulário_cep() {
            //Limpa valores do formulário de cep.
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('estado').value=("");
            
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('estado').value=(conteudo.uf);
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }


$('#cep').change(function(){
     var cep=$(this).val();

    
    const url = `https://viacep.com.br/ws/${cep}/json`;
    const options = {
        method: "GET",
        mode: "cors",
        headers: {
            'content-type': 'application/json;charset=utf-8',
        }
    }
    if(cep) {
        fetch(url, options).then(
            response => response.json()
        ).then(
            data => {
                console.log(data)
            }
        )
    }
    
    
    /*
    
    
     var myHEADER = "https://viacep.com.br/ws/"+cep+"/json";
     var xmlhttp = new XMLHttpRequest(); /// new HttpRequest instance
           //pega a response no sucesso
          xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           var res= JSON.parse(this.response);
            //filtra a key 'id' da response
            var customerId =res.data;
            console.log(customerId);
       }
    }
    
		xmlhttp.open("GET", myHEADER);
		xmlhttp.setRequestHeader ("Content-Type", "application/x-www-form-urlencoded");
		xmlhttp.setRequestHeader ("X-Requested-With", "XMLHttpRequest");
        xmlhttp.setRequestHeader("Content-type", "application/json");
        xmlhttp.setRequestHeader("Access-Control-Max-Age", "86400");
        xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
        xmlhttp.setRequestHeader("Access-Control-Allow-Credentials", "true");
        xmlhttp.setRequestHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
        xmlhttp.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Request-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-Requested-By");
   
		xmlhttp.send(cep);
        console.log('acabou');
    */
});


