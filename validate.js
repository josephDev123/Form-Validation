
//selected DOM
const form = document.getElementById('form1');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm_password');



//show input error message
function showError(inputField, message){
	const formControl = inputField.parentElement;
	formControl.className = 'form-control error';

	const getMessageTag = formControl.querySelector('small');
	 getMessageTag.innerHTML = message;
}


//show input success message
function showSuccess(inputField){
	const formControl = inputField.parentElement;
	formControl.className = 'form-control success';

}

//check form empty

function checkInputEmpty(inputArr){
	inputArr.forEach((input)=>{
		if (input.value.trim() === "") {
			showError(input, input.id + " "+'field is empty');
		}else{
			showSuccess(input);
		}
	})
}


//check input length

function checkInputlength(input_field, min, max){
	if (input_field.value.length < min) {
		showError(input_field, ' minimum character needed is '+ min );
	}
	else if (input_field.value.length > max) {
		showError(input_field,' maximum character needed is '+ max);
	}else{
		showSuccess(input_field);
	}
}


//email validation

function emailValidation(email_input){
 	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   // return re.test(String(email_input).toLowerCase());
     const email_val = re.test(String(email_input.value).toLowerCase());
    if (!email_val) {
    	showError(email_input,  "Valid email is required");
    }else{
    	  showSuccess(email_input);
    }
 	
}


//check password match
function passwordCheck(password_field, password2_field){
	if (password_field.value.trim() !== password2_field.value.trim()) {
		showError(password_field, password_field.id + " does not match");
	}else{
		showSuccess(password2_field);
	}
}


//check password length

function passwordLength(password_length, min, max){

	if (password_length.value.length < min) {
		showError(password_length, 'The minimum length required is ' + min);
	}else if (password_length.value.length > max) {
		showError(password_length, 'The maximum length required is ' + max)
	}  else{
		showSuccess(password_length);
	}

}


function passwordLength(password_length2, min, max){

	if (password_length2.value.length < min) {
		showError(password_length2, 'The minimum length required is ' + min);
	}else if (password_length2.value.length > max) {
		showError(password_length2, 'The maximum length required is ' + max)
	}  else{
		showSuccess(password_length2);
	}

}




//add eventlistener

form.addEventListener('submit', (e)=>{
e.preventDefault();

checkInputEmpty([username, email, password, password2]);

checkInputlength(username, 5, 7);

emailValidation(email);

passwordCheck(password, password2);

passwordLength(password, 5, 7);

passwordLength(password2, 5, 7);


})
