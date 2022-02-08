
$(function() { 
  // open link post in new tab
   $('#articleInner #content a').each(function () {
   	 $(this).attr('target', '_blank');
  	}); 

  if (document.getElementById("sidebar_first") != null){
    let sidebar_h = $("#sidebar_first").outerHeight() ;
    console.log("have sidebar_first",sidebar_h)
    $('#sidebar').css({"top":-sidebar_h -500 -20 }); 
   } else {
   	$('#sidebar').css({"top":"-700px" }); 
   	

    let widget_athemes_tabs_h = $(".widget_athemes_tabs").outerHeight();
    let widget_wrap_h = $(".widget-wrap").outerHeight();
    let search_h = $(".search-form").outerHeight();
    let self_adv =0;
    if($("#self_adv").outerHeight()){
    self_adv = $("#self_adv").outerHeight();
    }

    sidebar_h=widget_athemes_tabs_h +widget_wrap_h +search_h+self_adv+600+100 + 10
    console.log(widget_athemes_tabs_h,widget_wrap_h,search_h)
    
	
    $('#sidebar').css({"top":-sidebar_h}); 

  }
});

// Highlight current nav item
var hasCurrent = false;
$('#main-nav > li').each(function () {
	var url = window.location.href;
	if(url.toUpperCase().indexOf($(this).text().trim().toUpperCase()) != -1){
		$(this).addClass('current-menu-item current_page_item');
		hasCurrent = true;
	} else {
		$(this).removeClass('current-menu-item current_page_item');
	}
});

if (!hasCurrent) {
	$('#main-nav > li:first').addClass('current-menu-item current_page_item');
}

$('.widget .category-list ul > li').each(function () {




	url = window.location.href;
	li_href= $(this)[0].firstElementChild.href;
	url_arr = url.split("/")[6]
	li_href_arr=li_href.split("/")[6]


	

	if( url.split("/")[4] != li_href.split("/")[4] ){
		$(this)[0].style.display ="none";

	}



	if(url_arr == li_href_arr && url_arr !="" & li_href_arr!=""){
		$(this).addClass('current_page_item');
	} else {
		$(this).removeClass('current_page_item');
	}
});

// article toc
var toc = document.getElementById('toc')

if (toc != null) {
	window.addEventListener("scroll", scrollcatelogHandler);
	var tocPosition = 194+25;

	function scrollcatelogHandler(e) {
		 var event = e || window.event,
		     target = event.target || event.srcElement;
		 var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		 if (scrollTop > tocPosition) {
		     toc.classList.add("toc-fixed");
		 } else {
		     toc.classList.remove("toc-fixed");
		 }
	}
}


$('#main-navigation').on('click', function(){
    if ($('#main-navigation').hasClass('main-navigation-open')){
      $('#main-navigation').removeClass('main-navigation-open');
    } else {
      $('#main-navigation').addClass('main-navigation-open');
    }
  });

$('#content').on('click', function(){
    if ($('#main-navigation').hasClass('main-navigation-open')){
      $('#main-navigation').removeClass('main-navigation-open');
    }
  });