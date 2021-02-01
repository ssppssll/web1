







$(document).ready(function(){

	var selectMenuSeq = $("#choiceTopMenuSeq").val();
	var menuTitle = "";
	if(selectMenuSeq != null){
		menuTitle = $("#menuTitle_"+selectMenuSeq).val();
		if(menuTitle != null && menuTitle != ''){
			$(document).attr("title",menuTitle);
		}
	}

	//////// Top ///////////////////////////////////////////////////////////////////////////
	
	
	var lastEvent = null;
	var slide  = "#menuTopUI ul#top_k2wiz_GNB > li > div";
	var alink  = "#menuTopUI ul#top_k2wiz_GNB > li > a";
	var alink2  = "#menuTopUI ul#top_k2wiz_GNB > li > div > ul > li >a";
	var slide2  = "#menuTopUI ul#top_k2wiz_GNB > li > div > ul > li > div";

	function k2menu(){
		if (this == lastEvent) return false;
		lastEvent = this;
		setTimeout(function() {lastEvent = null}, 200);
		

		if ($(this).attr('class') != 'active') {
			
			
			
			$(slide).hide();
			$(this).next(slide).show();
			
			
			$(alink).removeClass('active');
			$(this).addClass('active');
		} else if ($(this).next(slide).is(':hidden')) {
			
			
			
			$(slide).hide();
			$(this).next(slide).show();
			
			
		} else {
			
			
			
			$(this).next(slide).hide();
			
			
		}
	}
	
	function k2menu2(){
		if (this == lastEvent) return false;
		lastEvent = this;
		setTimeout(function() {lastEvent = null}, 200);

		if ($(this).attr('class') != 'active') {
			
			
			
			$(slide2).hide();
			$(this).next(slide2).show();
			
			
			
			$(alink2).removeClass('active');
			$(this).addClass('active');
		} else if ($(this).next(slide2).is(':hidden')) {
			
			
			
			$(slide2).hide();
			$(this).next(slide2).show();
			
			
			
		} else {
			
			
			
			$(this).next(slide2).hide();
			
			
			
		}
	}
	
	
	
	
	$(alink).mouseenter(k2menu).focus(k2menu);
	$(alink2).mouseenter(k2menu2).focus(k2menu2);
	
	
	
	
	
	
	//////// Sub ///////////////////////////////////////////////////////////////////////////
	/* 요청에 의해 서브 메뉴는 펼침을 사용하지 않음.
	var s_lastEvent = null;
	var s_slide  = "#menuSubUI ul#sub_k2wiz_GNB > li > div";
	var s_alink  = "#menuSubUI ul#sub_k2wiz_GNB > li > a";
	var s_alink2  = "#menuSubUI ul#sub_k2wiz_GNB > li > div > ul > li >a";
	var s_slide2  = "#menuSubUI ul#sub_k2wiz_GNB > li > div > ul > li > div";

	function s_k2menu(){
		if (this == s_lastEvent) return false;
		s_lastEvent = this;
		setTimeout(function() {s_lastEvent = null}, 200);
		
		
		if ($(this).attr('class') != 'active') {
			
			
			
			$(s_slide).hide();
			$(this).next(s_slide).show();
			
			
			//펼침시 서브메뉴 리사이즈
			jf_subMenuResize();
			
			$(s_alink).removeClass('active');
			$(this).addClass('active');
		} else if ($(this).next(s_slide).is(':hidden')) {
			
			
			
			$(s_slide).hide();
			$(this).next(s_slide).show();
			
			
			//펼침시 서브메뉴 리사이즈
			jf_subMenuResize();
		} else {
			
			
			
			$(this).next(s_slide).hide();
			
			
		}
	}
	
	function s_k2menu2(){
		if (this == s_lastEvent) return false;
		s_lastEvent = this;
		setTimeout(function() {s_lastEvent = null}, 200);

		if ($(this).attr('class') != 'active') {
			
			
			
			$(s_slide2).hide();
			$(this).next(s_slide2).show();
			
			
			//펼침시 서브메뉴 리사이즈
			jf_subMenuResize();
			
			$(s_alink2).removeClass('active');
			$(this).addClass('active');
		} else if ($(this).next(s_slide2).is(':hidden')) {
			
			
			
			$(s_slide2).hide();
			$(this).next(s_slide2).show();
			
			
			//펼침시 서브메뉴 리사이즈
			jf_subMenuResize();
		} else {
			
			
			
			$(this).next(s_slide2).hide();
			
			
		}
	}
	
	
	
	
	$(s_alink).mouseenter(s_k2menu).focus(s_k2menu);
	$(s_alink2).mouseenter(s_k2menu2).focus(s_k2menu2);
	
	
	*/
	
	
	//////// Tab ///////////////////////////////////////////////////////////////////////////
	var t_lastEvent = null;
	var t_slide  = "#menuTabUI ul#tab_k2wiz_GNB > li > div";
	var t_alink  = "#menuTabUI ul#tab_k2wiz_GNB > li > a";
	var t_alink2  = "#menuTabUI ul#tab_k2wiz_GNB > li > div > ul > li >a";
	var t_slide2  = "#menuTabUI ul#tab_k2wiz_GNB > li > div > ul > li > div";

	function t_k2menu(){
		if (this == t_lastEvent) return false;
		t_lastEvent = this;
		setTimeout(function() {t_lastEvent = null}, 200);
		

		if ($(this).attr('class') != 'active') {
			
			
			
			$(t_slide).hide();
			$(this).next(t_slide).show();
			
			
			
			$(t_alink).removeClass('active');
			$(this).addClass('active');
		} else if ($(this).next(t_slide).is(':hidden')) {
			
			
			
			$(t_slide).hide();
			$(this).next(t_slide).show();
			
			
		
		} else {
			
			
			
			$(this).next(t_slide).hide();
			
			
			
		}
	}
	
	function t_k2menu2(){
		if (this == t_lastEvent) return false;
		t_lastEvent = this;
		setTimeout(function() {t_lastEvent = null}, 200);

		if ($(this).attr('class') != 'active') {
			
			
			
			$(t_slide2).hide();
			$(this).next(t_slide2).show();
			
			
		
			
			$(t_alink2).removeClass('active');
			$(this).addClass('active');
		} else if ($(this).next(t_slide2).is(':hidden')) {
			
			
			
			$(t_slide2).hide();
			$(this).next(t_slide2).show();
			
			
		} else {
			
			
			
			$(this).next(t_slide2).hide();
			
			
		}
	}

	
	
	
	
	
});	



/*신규 메뉴 오픈 스크립트 div3_1.jsp...  에서 스크립트 실행!*/
function jf_menuUIOpenInit(){


	//*** 선택 메뉴 영역 열기(신규 통합) ***********//
	//*** 메뉴 오픈시 하위 메뉴가 있으면 무조건 오픈 **//
	if($("#menuDepth").val() != null && $("#menuDepth").val() != ""){
		var menuDepth = $("#menuDepth").val();
		var depth = menuDepth.split("_");
		var d1 = 0;
		var d2 = 0;
		var d3 = 0;
		var d4 = 0;
		var d5 = 0;
		var d6 = 0;
		if(depth != null && depth.length > 0){
			for(var i=0;i<depth.length;i++){
				if(i==0){d1=depth[i];}
				if(i==1){d2=depth[i];}
				if(i==2){d3=depth[i];}
				if(i==3){d4=depth[i];}
				if(i==4){d5=depth[i];}
				if(i==5){d6=depth[i];}
			}
			
			var temp = "";
			if(d1 != 0){
				temp = d1+"_0_0_0_0_0";
				jf_menuUIOpen(temp);
				//jf_menuUIOpenDiv(d1+"_1_0_0_0_0");
			}
			if(d2 != 0){
				temp = d1+"_"+d2+"_0_0_0_0";
				jf_menuUIOpen(temp);
				//jf_menuUIOpenDiv(d1+"_"+d2+"_1_0_0_0");
			}
			if(d3 != 0){
				temp = d1+"_"+d2+"_"+d3+"_0_0_0";
				jf_menuUIOpen(temp);
				//jf_menuUIOpenDiv(d1+"_"+d2+"_"+d3+"_1_0_0");
			}
			if(d4 != 0){
				temp = d1+"_"+d2+"_"+d3+"_"+d4+"_0_0";
				jf_menuUIOpen(temp);
				//jf_menuUIOpenDiv(d1+"_"+d2+"_"+d3+"_"+d4+"_1_0");
			}
			if(d5 != 0){
				temp = d1+"_"+d2+"_"+d3+"_"+d4+"_"+d5+"_0";
				jf_menuUIOpen(temp);
				//jf_menuUIOpenDiv(d1+"_"+d2+"_"+d3+"_"+d4+"_"+d5+"_1");
			}
			if(d6 != 0){
				temp = d1+"_"+d2+"_"+d3+"_"+d4+"_"+d5+"_"+d6;
				jf_menuUIOpen(temp);
			}
		}
	}
		
	try{ jf_menuHide(); }catch(e){}//코더 요청값
}
function jf_menuUIOpen(temp){
	$(".menu_"+temp).addClass("active");
	var openDiv = $(".menu_"+temp).closest("li").closest("ul").closest("div");
	$(openDiv).show(); 
	
	
	//내 밑에 메뉴가 있으면 오픈함..
	$(".menu_"+temp).closest("li").find(" > div").show();
}	

//사용안함....
function jf_menuUIOpenDiv(temp){
	//$(".menu_"+temp).closest("li").closest("ul").closest("div").show();
}	

function jf_menuuiPopUp(url,width,height,top,left){
	 window.open(url,"menuUIPopup","width="+width+",height="+height+",toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,left="+left+",top="+top);
	 return false;
}

