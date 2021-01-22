'use strict';
//selected DOM
const form = document.getElementById('form1');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm_password');
const controlforms = document.querySelectorAll('.form-control');
// const smallDom = document.querySelectorAll('small');



//check empty field
function checkInputEmpty(inputItems){
	inputItems.forEach(item => {
		if(item.value === ''){
			showError(item);
		}else{
			showSuccess(item);
		}
	});	
}

// check for username input length
function usernameLength(userName, usernameRequiredLength){
	if (userName.value.length < usernameRequiredLength) {
		userName.parentElement.className ='form-control error';
		userName.parentElement.querySelector('small').textContent = 'username must not be too short';
	}else{
		userName.parentElement.classList.add('success');
			userName.parentElement.querySelector('small').textContent = '';
	}
}


//validate email field
function emailValidation(email){
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const emailvalid = re.test(String(email.value).toLowerCase());
	if (!emailvalid) {
		email.parentElement.className ='form-control error';
		email.parentElement.querySelector('small').textContent = 'Email field must be  valid';
	}else{
		email.parentElement.classList.add('success');
		email.parentElement.querySelector('small').textContent = '';
	}	

}


//min password input allow
function passwordLength(password1, password2){
	if(password1.value.length < 4 || password2.value.length < 4){
		password1.parentElement.className ='form-control error';
		password2.parentElement.className ='form-control error';
		password1.nextElementSibling.textContent = 'password must not be too short';
		password2.nextElementSibling.textContent = 'password must not be too short';
	}else{
		password1.parentElement.className ='form-control success';
		password2.parentElement.className ='form-control success';
	}
}


//check whether password is equal
function equalPassword(password1, password2){
	if(password1.value !== password2.value){
		password1.parentElement.className ='form-control error';
		password2.parentElement.className ='form-control error';
		password1.nextElementSibling.textContent = 'password must be equal';
		password2.nextElementSibling.textContent = 'password must be equal';
	}
}
















// add Event
form.addEventListener('submit', (e)=>{
	e.preventDefault();

	const inputvalues = [username, email, password, password2];

	//check input field whether is empty
	checkInputEmpty(inputvalues);

	// check username length
	usernameLength(inputvalues[0], 5);

	// valid email value
	emailValidation(inputvalues[1]);

		//chech passwords length
	passwordLength(inputvalues[2], inputvalues[3]);

	//password equality
	equalPassword(inputvalues[2], inputvalues[3]);

})



//show error message for empty field
function showError(item){
	item.parentElement.className ='form-control error';
		item.parentElement.querySelector('small').textContent = 'Field is empty';
}

//show sucess message for empty field
function showSuccess(item){
	item.parentElement.classList.add('success');
			item.parentElement.querySelector('small').textContent = '';
}











































































			// outdated codes
				// '
				// |
				// |
				// |

// show input error message
// function showError(inputField, message){
// 	const formControl = inputField.parentElement;
// 	formControl.className = 'form-control error';

// 	const getMessageTag = formControl.querySelector('small');
// 	 getMessageTag.innerHTML = message;
// }


// //show input success message
// function showSuccess(inputField){
// 	const formControl = inputField.parentElement;
// 	formControl.className = 'form-control success';

// }

// //check form empty

// function checkInputEmpty(inputArr){
// 	inputArr.forEach((input)=>{
// 		if (input.value.trim() === "") {
// 			showError(input, input.id + " "+'field is empty');
// 		}else{
// 			showSuccess(input);
// 		}
// 	})
// }


// //check input length

// function checkInputlength(input_field, min, max){
// 	if (input_field.value.length < min) {
// 		showError(input_field, ' minimum character needed is '+ min );
// 	}
// 	else if (input_field.value.length > max) {
// 		showError(input_field,' maximum character needed is '+ max);
// 	}else{
// 		showSuccess(input_field);
// 	}
// }


// //email validation

// function emailValidation(email_input){
//  	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//    // return re.test(String(email_input).toLowerCase());
//      const email_val = re.test(String(email_input.value).toLowerCase());
//     if (!email_val) {
//     	showError(email_input,  "Valid email is required");
//     }else{
//     	  showSuccess(email_input);
//     }
 	
// }


// //check password match
// function passwordCheck(password_field, password2_field){
// 	if (password_field.value.trim() !== password2_field.value.trim()) {
// 		showError(password_field, password_field.id + " does not match");
// 	}else{
// 		showSuccess(password2_field);
// 	}
// }


// //check password length

// function passwordLength(password_length, min, max){

// 	if (password_length.value.length < min) {
// 		showError(password_length, 'The minimum length required is ' + min);
// 	}else if (password_length.value.length > max) {
// 		showError(password_length, 'The maximum length required is ' + max)
// 	}  else{
// 		showSuccess(password_length);
// 	}

// }


// function passwordLength(password_length2, min, max){

// 	if (password_length2.value.length < min) {
// 		showError(password_length2, 'The minimum length required is ' + min);
// 	}else if (password_length2.value.length > max) {
// 		showError(password_length2, 'The maximum length required is ' + max)
// 	}  else{
// 		showSuccess(password_length2);
// 	}

// }




// //add eventlistener

// form.addEventListener('submit', (e)=>{
// e.preventDefault();

// checkInputEmpty([username, email, password, password2]);

// checkInputlength(username, 5, 7);

// emailValidation(email);

// passwordCheck(password, password2);

// passwordLength(password, 5, 7);

// passwordLength(password2, 5, 7);


// })
