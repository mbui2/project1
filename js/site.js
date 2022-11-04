	function formcheck() {
		var email = document.forms["registerForm"]["email"].value
		var amount = document.forms["registerForm"]["amount"].value
		if((!email) || (!amount)) {
			alert("Please fill in all the fields");
			return false;
		}
		else {
			alert("You will have your t-shirt soon muahaha")
		}
	}