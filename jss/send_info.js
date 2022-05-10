
   
    
    $('#create_customer').click(function(){
        alert('teste');
         var fullname=$('#fullname').val();
         var telefone= $('#telefone').val();
        var email= $('#email').val();
        $('#entrega').removeClass("display-none");
        $('#dados-pessoais-form').addClass("display-none");
        $('.cliente-form').addClass("display-none");
        $('.cliente-form').removeClass("display-block");
        $('.cliente-salvo').removeClass("display-none");
        $('#customer-fullname').text(fullname);
        $('#customer-telefone').text(telefone);
        $('#customer-email').text(email);
        $('#editarCliente').removeClass("display-none");
       // $('#box-checkout').addClass("entrega-display-block");
   });
    
 $('#editarCliente').click(function(){
      $('#entrega').addClass("display-none");
     $('#dados-pessoais-form').removeClass("display-none");
     $('#editarCliente').addClass("display-none");
      $('.cliente-form').removeClass("display-none");
        $('.cliente-salvo').addClass("display-none");
 });

$('#cep').change(function(){
    $('#endereco-form').removeClass("display-none");
     var cep=$(this).val();

});
    

    