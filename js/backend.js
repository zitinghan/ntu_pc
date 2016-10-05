$(document).ready(function(){
	$("#name").text('here');
	
	$("#loginAlert").hide();
	
	var login = {
		init: function(){
			
		},
	}
	
	login.init();
	
	// submit login 
	$("#submitLogin").click(function(){
		var email = $("#loginEmail").val();
		var password = $("#loginPassword").val();
		
		// do login check here
		if(email!="" && password!=""){
			alert('login success!');
			$("#loginAlert").hide();
		}else{
			$("#loginAlert").show();
		}
		
	})
});
