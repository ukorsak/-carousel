$(document).ready(function(){
    var carouselList = $("#carousel ul");
    setInterval(changeSlide, 3000);
    
    function changeSlide() {
        carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
    }

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var idElement = firstItem.attr('id');
        idElement++;
        var lastItem = carouselList.find("li:last");
        if (idElement==$( "li" ).length) {
            $("#img0").addClass('active');
            $("#img"+(idElement-1)).removeClass('active');
        }
        else {
            $("#img"+idElement).addClass('active');
            $("#img"+firstItem.attr('id')).removeClass('active'); 
        }
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});

    }

    function moveLastSlide() {
        var firstItem = carouselList.find("li:first");
        var idElement = firstItem.attr('id');
        idElement--;
        var lastItem = carouselList.find("li:last");
        
        if (idElement==-(1)) {
            $("#img0").removeClass('active');
            $("#img"+($( "li" ).length-1)).addClass('active');
        }
        else {
            $("#img"+idElement).addClass('active');
            $("#img"+firstItem.attr('id')).removeClass('active'); 
        }
        firstItem.before(lastItem);
        carouselList.css({marginLeft:0});
    }

    $('#left').click(function(){
        carouselList.animate({'marginLeft':400}, 500, moveLastSlide);
    });

    $('#right').click(function(){
        carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
    });

    $( "li" ).each(function( index ) {
        if (index==0){
            $("#pagination").append( "<span id=img"+index+" class=active>"+(index+1)+"</span>");
        }
        else {
            $("#pagination").append( "<span id=img"+index+">"+(index+1)+"</span>");
        }
    });

    $("span").click(function(){
        var firstItem = carouselList.find("li:first");
        var idElement = firstItem.attr('id');
        idElement++;
        if($(this).text() > idElement){
            while ($(this).text() != idElement) {
                carouselList.animate({'marginLeft':-400}, 100, moveFirstSlide);
                idElement++;
            }
        }
        else{
            while ($(this).text() != idElement) {
                carouselList.animate({'marginLeft':400}, 100, moveLastSlide);
                idElement--;
            }
        }
    });
});