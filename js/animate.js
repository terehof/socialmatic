$(document).ready(function(){
   $('button.buy-now').click(function(){
       $('.popup').show();
       $('#TB_overlay').show();
   });
    $('p.close').click(function(){
        $('.popup').hide();
        $('#TB_overlay').hide();
    })
    $('#TB_overlay').click(function(){
        $('.popup').hide();
        $('#TB_overlay').hide();
    })
});