//views for specified rooms
var view={start:function(a,b){function g(){$("#the_game").load("room_view.html",function(){$(".close").on("click",function(){$(".close").off();game[e](c,d);e==="bathroom"&&setTimeout(function(){scene.explosion()},2576)});for(i=0;i<f;i++){$("#room_view").addClass(e).children("div").append('<div id="'+a[i][0]+'" class="object" />');view.floating(a[i][0],a[i][1],a[i][2])}if($.inArray("window",fish)===-1){var g=$.jStorage.get("fish");g.push("window");$.jStorage.set("fish",g)}b&&b()})}var c=$("#player").attr("data-x"),d=$("#player").attr("data-y"),e=$.jStorage.get("is_in"),f=a.length;$("<div/>",{id:"white"}).appendTo("body").css("opacity","0").animate({opacity:1},1e3,function(){setTimeout(function(){$("#white").animate({opacity:0},500,function(){$("#white").remove()});g()},500)})},floating:function(a,b,c){function d(){$("#"+a).transition({y:c},b).transition({y:-c},b,function(){d()})}d()}};