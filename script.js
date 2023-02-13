$(document).ready(function(){
                 $('.container .card-wrapper').each(function(){
                            $(this).css({'transform' : 'rotate('+(Math.random()*10)+'15deg)'});
                         });
               
                $('.card').on('click', function(){
                    var rNum = (Math.random()*4)-2;

                     if($(this).hasClass('click')){
                         $(this).removeClass('click');
                         $('.container .card-wrapper').each(function(){
                            $(this).css({'z-index': parseInt(Math.random()*100) + 1,
                                        });
                         });
                     }
                    else{
                        $(this).addClass('click'); 
                    }
                });
   });