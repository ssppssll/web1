if(wizard_login == 1){
	document.write('<li><a href=/logout.jsp?retUrl=/user/'+wizard_site+'/index.do target=_top >로그아웃(LOGOUT)</a></li>'); 
	//document.write("<li><a href='javascript:void(0);' target='_top' title='SiteOut' onclick='join_out();'>회원탈퇴</a></li>");
}else{  
	//document.write('<li><a href=/user/popupLoginForm.do target=_popup >로그인</a></li>');
	document.write("<li><a href='javascript:void(0);' target='_top' title='Login' onclick='popupLogin();'>로그인(LOGIN)</a></li>");
	//document.write("<li><a href='javascript:void(0);' target='_top' title='SiteJoin' onclick='join_in();'>회원가입</a></li>");
}  
   
function popupLogin(){ 
	location.href	= '/join/login.jsp?siteId=' + wizard_site ; 
}  

function join_in(){
	//if(confirm('가입하시겠습니까?')){  
		var join_in_url	= 'http://www2.chosun.ac.kr/mbs/chosun/jsp/member/chosun_joinForm1.jsp?id=chosun_090100000000';
		//alert(join_in_url);
		location.href	= join_in_url;

	//}
}

function join_out(){
	//if(confirm('탈퇴하시겠습니까?')){ 
		var join_out_url	= 'http://www2.chosun.ac.kr/mbs/chosun/jsp/member/member_withdraw.jsp?id=chosun_090600000000';
		//alert(join_out_url);
		location.href		= join_out_url;
	//}
}