	function formcheck() {
		var email = document.forms["registerForm"]["email"].value
		var amount = document.forms["registerForm"]["amount"].value
		if((!email) || (!amount)) {
			alert("Still hesitating eh? fill in all the fields NOW!");
			return false;
		}
		else {
			alert("You will have your t-shirt soon muahaha")
		}
	}