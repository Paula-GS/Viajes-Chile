$(document).ready(function(){


    $("a").click(function (){
        var gato = this.hash
        

        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top -55
            },
            2000
        )

    })


})

//botón Enviar
$ ("#enviar").click(function() {
    alert("Su mensaje ha sido enviado")
  })