$(document).ready(function(){$('#childnext').on('click',getNext);$('#childprev').on('click',getPrev);$('#header ul.other li:gt(6)').hide();function getNext(){var $curr=$('.ChildSider img:visible'),$next=($curr.next().length)?$curr.next():$('.ChildSider img').first();transition($curr,$next);}
function getPrev(){var $curr=$('.ChildSider img:visible'),$next=($curr.prev().length)?$curr.prev():$('.ChildSider img').last();transition($curr,$next);}
function transition($curr,$next){$next.css('z-index',2).fadeIn('slow',function(){$curr.hide().css('z-index',0);$next.css('z-index',1);});}
/*$('.pie_progress').asPieProgress({'namespace':'pie_progress'});$('.pie_progress2').asPieProgress({'namespace':'pie_progress2',size:290,barcolor:'#000',});*/$('.CheckDistance').click(function(e){$('.DistanceBody').animate({height:'toggle'},1000);});$('.btn-success').click(function(e){$('.Distance').animate({height:'toggle'},1000);});$(window).stellar();var offset=$("#bannerScroll").offset();var links=$('.navigation').find('li');slide=$('.slide');button=$('.button');mywindow=$(window);htmlbody=$('html,body');slide.waypoint(function(event,direction){dataslide=$(this).attr('data-slide');if(direction==='down'){$('.navigation li[data-slide="'+dataslide+'"]').addClass('active').prev().removeClass('active');if(dataslide==1){$("#bannerScroll").stop().animate({marginTop:250},1000);$("#activeNumbr").stop().animate({marginTop:200},1000);}
else if(dataslide==2){$("#bannerScroll").stop().animate({marginTop:920},1500);}}
else{$('.navigation li[data-slide="'+dataslide+'"]').addClass('active').next().removeClass('active');}
if(direction==='up'){if(dataslide==2){$("#bannerScroll").stop().animate({marginTop:260},1000);}
else if(dataslide==1){$("#bannerScroll").stop().animate({marginTop:0},1000);}}});mywindow.scroll(function(){if(mywindow.scrollTop()==0){$('.navigation li[data-slide="1"]').addClass('active');$('.navigation li[data-slide="2"]').removeClass('active');$("#bannerScroll").stop().animate({marginTop:0},1000);$("#activeNumbr").stop().animate({marginTop:0},1000);}});function goToByScroll(dataslide){htmlbody.animate({scrollTop:$('.slide[data-slide="'+dataslide+'"]').offset().top},1500,'easeInOutQuint');}
links.click(function(e){e.preventDefault();dataslide=$(this).attr('data-slide');goToByScroll(dataslide);});button.click(function(e){e.preventDefault();dataslide=$(this).attr('data-slide');goToByScroll(dataslide);});});jQuery(document).ready(function($){var options={$AutoPlay:false,$PlayOrientation:2,$DragOrientation:2,$ArrowNavigatorOptions:{$Class:$JssorArrowNavigator$,$ChanceToShow:2,$AutoCenter:1,$Steps:1}};var options3={$AutoPlay:false,$PlayOrientation:1,$DragOrientation:1,$ArrowNavigatorOptions:{$Class:$JssorArrowNavigator$,$ChanceToShow:2,$AutoCenter:1,$Steps:1}};var jssor_slider1=new $JssorSlider$("slider1_container",options);var jssor_slider2=new $JssorSlider$("slider2_container",options);if($(window).width()<980){$('#EbolaCrisisChildren').addClass('SliderChildren');var jssor_slider3=new $JssorSlider$("slider3_container",options3);$('#slider3_container').children('div').css({'z-index':'2'});$('#FastFacts').addClass('FastFacts');var jssor_slider4=new $JssorSlider$("slider4_container",options3);}});if($(window).width()>=1024){$(window).scroll(function(){var height=$(window).height();var scrollTop=parseInt($(window).scrollTop());$('.children').removeClass('fixed');});$(window).on("load",function(){function fade(pageLoad){var min=0.3;var max=1.0;var threshold=0.01;$('.element').each(function(){var objectBottom=$(this).offset().top+$(this).outerHeight();var windowBottom=$(window).scrollTop()+$(window).innerHeight()+130;if(objectBottom<windowBottom){if($(this).css('opacity')<=min+threshold||pageLoad){$(this).fadeTo(500,max);}}else{if($(this).css('opacity')>=max-threshold||pageLoad){$(this).fadeTo(500,min);}}});}
fade(true);$(window).scroll(function(){fade(false);});});}
$(window).scroll(function(){var iconScrollHT=$('#slide1').height()+$('#slide8').height()+$('#slide9').height()+$('#slide10').height()+$('#slide11').height()+$('#slide3').height()+$('#slide2').height()+$('#slide4').height()+400;var iconScrollHT2=parseInt(iconScrollHT)+100;var scrollTop2=parseInt($(window).scrollTop());if($(window).width()>800){if(scrollTop2<iconScrollHT){$(".iconScroll").stop().show();function iconScroll(){$(".iconScroll").animate({bottom:'+=90px'},700);$(".iconScroll").animate({bottom:'10px'},700,iconScroll);};$(".iconScroll").mouseenter(function(){$(".iconScroll").stop(true,false);});$(".iconScroll").mouseleave(function(){iconScroll();});$(iconScroll);}
if(scrollTop2>iconScrollHT){$(".iconScroll").hide();}}});$(document).ready(function(e){$('.mpopup-close, .close').click(function(e){$(".modal-box").fadeOut();$(".modal-overlay").fadeOut(500,function(e){$(".modal-overlay").remove();});});$('.LogModal').each(function(index,element){$(this).click(function(e){$("body").append("<div class='modal-overlay'></div>");$(".modal-overlay").fadeTo(800,0.8);$('#'+$(this).attr('data-target')).fadeIn(900);$(".modal-body").css({height:$(window).height()-100,'overflow':'auto'});$(".modal-box").css({top:($(window).height()-$(".modal-box").outerHeight())/2,left:($(window).width()-$(".modal-box").outerWidth())/2});});});});$(document).ready(function(){$(".search").click(function(){$(".input-search").stop().show().animate({width:'780px',},500);});$(".close-btn, .search-btn").click(function(){$(".input-search ").hide().animate({width:'0px'},500);});if($(window).width()<=980){$(".search").click(function(){$(".input-search").stop().show().animate({width:($(window).width()-20)+'px',marginRight:(-$(window).width()/6)+'px'},500);});$(".close-btn").click(function(){$(".input-search ").hide().animate({width:'0px'},500);});}});
