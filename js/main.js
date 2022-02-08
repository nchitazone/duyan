
$(function() { 
  // open link post in new tab
   $('#articleInner #content a').each(function () {
   	 $(this).attr('target', '_blank');
  	}); 


jQuery(':button').click(function () {
    //console.log("here");
    var text = $(this).siblings()[0].innerText ;
    let $textarea = $('<textarea></textarea>');
    $textarea.text(text);
    $(this).append($textarea);
    $textarea.select();
    document.execCommand('copy');
    $textarea.remove();


    $(this).text("Copied"); 

    setTimeout(function(){
      $('.code-copy-btn').text("Copy");
    },2000)
});

   //progress bar
//let $pagetop = $('.scroll-header');
let $pagetop = $('.progress-container');

$(window).on( 'scroll', function () {
    //スクロール位置を取得
      var scroll = $(this).scrollTop();
    if ( $(this).scrollTop() < 250 ) {
      $pagetop.removeClass('isActive');
    } else {
      $pagetop.addClass('isActive');
    }
  });

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight-1000;
  var scrolled = ((winScroll -300) / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  /*if (scrolled > 100){
    //$('#sidebar').css({"position":"fixed","top":"40px","-moz-transition": "top 0.1s linear"});

  }else{
    //$('#sidebar').css({"top":"-1485px"});
    //$('#sidebar').css({"position":"sticky","position": "-webkit-sticky"});
  }
  */
}


  if (document.getElementById("sidebar_first") != null){
    //let sidebar_h = $("#sidebar_first").outerHeight() ;
    //console.log("have sidebar_first",sidebar_h)
    //$('#sidebar').css({"top":-sidebar_h  -220 }); 
 // article toc
var toc = document.getElementById('toc')

if (toc != null) {
  window.addEventListener("scroll", scrollcatelogHandler);
  var x = $("#sidebar_first").outerHeight();
  var tocPosition =x+ 420; 

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

    //delete more
    $("#more").remove();5
   } else {
   	$('#sidebar').css({"top":"-720px" }); 

   	

    let widget_athemes_tabs_h = $(".widget_athemes_tabs").outerHeight();
    let widget_wrap_h = $(".widget-wrap").outerHeight();
    let search_h = $(".gcse-search").outerHeight();
    let self_adv =0;
    if($("#self_adv").outerHeight()){
    self_adv = $("#self_adv").outerHeight();
    }

    sidebar_h=widget_athemes_tabs_h +widget_wrap_h +search_h+self_adv+600+100 + 50
    //console.log(widget_athemes_tabs_h,widget_wrap_h,search_h,-sidebar_h)
    
	
    $('#sidebar').css({"top":-sidebar_h}); 
     $('#sidebar').css({"position":"-webkit-sticky" }); 
    $('#sidebar').css({"position":"sticky" }); 

  }
});

//sw
  if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
  // Registration was successful
  //console.log('Registered!');
  }, function(err) {
  // registration failed :(
  //console.log('ServiceWorker registration failed: ', err);
  }).catch(function(err) {
  //console.log(err);
  });
  });
  } else {
  //console.log('service worker is not supported');
  }

//change main url
$('.widget .category-list .category-list-item').each(function () {
    li_href= $(this)[0].firstChild.href;
    
    if(li_href =="https://laptrinhcanban.com/c/"){
        url ="https://laptrinhcanban.com/c/lap-trinh-c-co-ban/"
        $(this)[0].firstChild.setAttribute('href', url);

    }else if(li_href =="https://laptrinhcanban.com/cpp/"){
         url ="https://laptrinhcanban.com/cpp/lap-trinh-cpp-co-ban/"
        $(this)[0].firstChild.setAttribute('href', url); 
        //$(this)[0].innerText = 'C++';       
    }else if(li_href =="https://laptrinhcanban.com/java/"){
         url ="https://laptrinhcanban.com/java/java-co-ban-cho-nguoi-moi-bat-dau/"
        $(this)[0].firstChild.setAttribute('href', url);       
    }else if(li_href =="https://laptrinhcanban.com/javascript/"){
         url ="https://laptrinhcanban.com/javascript/javascript-co-ban-den-nang-cao/"
        $(this)[0].firstChild.setAttribute('href', url);       
    }else if(li_href =="https://laptrinhcanban.com/php/"){
         url ="https://laptrinhcanban.com/php/nhap-mon-lap-trinh-php/"
        $(this)[0].firstChild.setAttribute('href', url);       
    }else if(li_href =="https://laptrinhcanban.com/python/"){
         url ="https://laptrinhcanban.com/python/nhap-mon-lap-trinh-python/"
        $(this)[0].firstChild.setAttribute('href', url);       
    }
 }); 

// Highlight current nav item
var hasCurrent = false;
$('#main-nav > li').each(function () {
	var url = window.location.href;
 

	// if(url.toUpperCase().indexOf($(this).text().trim().toUpperCase()) != -1){
  var tt= $(this).text();
  if (tt=="c++") tt="cpp";
  if(url.search( "\/"+ tt+"\/") != -1){
		$(this).addClass('current-menu-item current_page_item');
		hasCurrent = true;

  // console.log(url.indexOf("\/"+$(this).text()+"\/" ));
  //  console.log("text", "\/"+$(this).text()+"\/"  );

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
	url_arr = url.split("/")[5]
	li_href_arr=li_href.split("/")[5]


	

	if( url.split("/")[3] != li_href.split("/")[3] ){
    //console.log(url.split("/")[3]);
		$(this)[0].style.display ="none";

	}



	if(url_arr == li_href_arr && url_arr !="" & li_href_arr!=""){
		$(this).addClass('current_page_item');
	} else {
		$(this).removeClass('current_page_item');
	}
});


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


