//ready() para saber cuando el DOM ha cargado por completo
/*$("document").ready(function(){
    alert("El DOM ha cargado");
});*/
//escuchar el evento click y ejecutar una funcion 
/*var i = true;
$("#boton").click(function(){
    if(i){
        $("p").slideUp();
        i = false;
    }else{
        $("p").slideDown();
        i = true;
    }    
});

//insertar un elemento en el DOM before()-after()-prepend()-append()
/*
   var elemento = $('<a href=#>elemento insertado</a>');
   $(".contenedor").find("p").prepend(elemento);
*/


$("document").ready(function(){


//cargar datos con ajax desde una api 
    function cargaFotos(){
        
        $.ajax({
            url: 'https://randomuser.me/api/?results=12',
            dataType: 'json',
            success: function(resp) {
                for(var i = 0; i < resp.results.length; i++){
                    var cont = $('<div class="col-md-4"></div>');
                    var img = $('<img class="img-slider "></img>').attr('src',resp.results[i].picture.large);
                    cont.append(img).appendTo('.contenedor-img');
                }
            }
          });
        /*$.getJSON('https://randomuser.me/api/?results=5',function(resp) {
                resp.results.forEach(function(pers){
                    var li = $('<li></li>');
                    var img = $('<img class="img-slider img-fluid img-responsive"></img>').attr('src',pers.picture.large);
                    var comp = li.append(img);
                    comp.appendTo('.img-container');
                });
        });*/    
     }

    //Rotar elementos a traves de sus propiedades css
    function rotate(){
        $("#boton").click(function(){
    
            var main = $(".contenedor").children('p').css({
                'transition': 'all 0.9s' ,
                'transform':'rotate(720deg)'
            });
            
            
        });
    }
    //animar un elemento del DOM mediante propiedades css
    function anima(){
        $(".lateral").animate({'width':'25%','padding':'25px'},2000,function(){
 
        });   
    }
    //cambiar las propiedades css de un elemeto de una lista a travez de la sentencia this
    function marcarText(){
        var click = false;
        $('.contenedor').children('p').click(function (){
            if(!click){
                $(this).css('color','red');
                click = true;
            }else{
                $(this).css('color','white');
                click = false;
            }
        });
    }
// mostrar / ocultar un elemento con slideToggle
    function persiana(){
        var elements = $(".contenedor").find("p");
        var boton = $("#boton");
        
        boton.click(function () { 
            $(elements).slideToggle(1000);
            if(boton.text() == 'Ocultar'){
                boton.text('Mostrar');
            }else{
                boton.text('Ocultar');
            }
        });
    }
//salider/carousel ocultar o mostrar elementos con hide() y fadeIn()
    function slider(){
        var li = $('li');
        var items = li.length;
        var actual = 0;
        var ant = 0;
        var sig = 1;
       
        li.hide();
        li.eq(actual).fadeIn();

        $("#der").click(function(e){
            e.preventDefault();
            ant = actual;
            actual = sig;
            sig += 1;
            if(sig == items){
                sig = 0;
            }
                li.eq(ant).hide();
                li.eq(actual).fadeIn();        
        });
            
        $("#izq").click(function(e){
            e.preventDefault();
            sig = actual;
            actual -= 1;
            ant -= 1; 
            if(actual < 0){
                ant = items-1;
                actual = ant;
            }
                li.eq(sig).hide();
                li.eq(actual).fadeIn();    
            
    });
     
 }   

 

    cargaFotos();
    anima();
    marcarText();
    persiana();
    slider();
    //rotate()
});
