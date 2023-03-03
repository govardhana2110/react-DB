import { validationMessages } from './ValidationMessages';

const Validation = {
	checkAllMandatoryField(type, fields) {
		let formIsValid = true;
		const respError = [];
		console.log('Input Fields' + JSON.stringify(fields));

		for (var key in fields) {
			if (fields.hasOwnProperty(key)) {
				if (!Array.isArray(fields[key])) {
					if (fields[key].length === 0) {
						formIsValid = false;
						respError[key] = validationMessages[type][key];
					} else {
						respError[key] = '';
					}
				} else {
					var arr = []
					fields[key].map((item, idx) => {
						if (item.length === 0) {
							formIsValid = false;
							arr[idx] = validationMessages[type][key];
						} else {
							arr[idx] = '';
						}
					})
					respError[key] = arr;
				}
			}
		}
		// if (fields['description'].length < 5) {
		// 	respError['description'] = '*Minimum Length of characters Allowed is 5';
		// 	formIsValid = false;
		// } else if (fields['description'].length > 100) {
		// 	respError['description'] = '*Maximum Length of characters Allowed is 100';
		// 	formIsValid = false;
		// }
		console.log('output Arr' + JSON.stringify(respError));
		return { formIsValid, respError };
	},
	 checkErrors(errors) {
		var state = true;
		  for (var key in errors) {
			if ( Array.isArray(errors[key]))  {
			   for(var a=0 ; a < errors[key].length ; a ++) {
				if(errors[key][a].length !== 0) {
					state = false;
					break;
				}
			   }
			} else {
				if(errors[key].length !== 0) {
					state = false;
					break;
				}
			}
		  }
		  return state;
		},

	checkMandatoryField(type,fieldName, fieldValue) {
		var error = '';
		if (fieldValue.length === 0) {
			error = validationMessages[type][fieldName];
		} else {
			error = '';
		}
		return error;
	},

	checkAlphaticField(field, value) {
		var error = '';
		if (!value.match(/^[a-zA-Z ]*$/)) {
			error = '*Please enter alphabet characters only.';
		} else {
			error = '';
		}
		console.log('error' + error);
		return error;
	},

	checkNumericfield(value) {
		var error = '';
		if (!value.match(/^[0-9 ]*$/)) {
			error = '*Please enter Numbers only.';
		} else {
			error = '';
		}
		return error;
	},

	checkAlphaNumericField(field, value) {
		var error = '';
		if (!value.match(/^[0-9a-zA-Z]+$/)) {
			error = '*Please enter alphabet and numbers only.';
		} else {
			error = '';
		}
		// if(field==="description"&&(value.length<25||value.length>100)){
		//   error = "*Length shouldn't be < 25 and > 100";
		// }
		console.log('error' + error);
		return error;
	},
	checkRegExpressionField(field, value) {
		var error = '';
		if (
			!value.match(
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
			)
		) {
			error = '*Please enter in correct format.';
		} else {
			error = '';
		}
		return error;
	},

	checkIpAddressField(field, value) {
		var error = '';
		if (
			!value.match(
				/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
			)
		) {
			error = '*Please enter in correct format.';
		}
		return error;
	},

	checkPasswordField(field, value) {
		var error = '';
		var regex =
			'^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$';
		if (!value.match(regex)) {
			error = '*Please enter in correct format.';
		}
		return error;
	},

	checkMinLengthOfField(field, value, min) {
		var error = '';
		if (!(value.length < min)) {
			error = '*Minimum characters allowed ' + min;
		} else {
			error = '';
		}
		console.log('error' + error);
		return error;
	},
	checkMinLengthOfField1(field, value, min) {
		var error = '';
		if (value.length < min) {
			error = '*Minimum characters allowed ' + min;
		} else {
			error = '';
		}
		console.log('error' + error);
		return error;
	},
	checkMinAndMaxLengthOfField(field, value, min, max) {
		var error = '';
		if (value.length < min) {
			error = '*Minimum characters Allowed ' + min;
		} else if (value.length > max) {
			error = '*Maximum Characters Allowed ' + max;
		}
		console.log('error' + error);
		return error;
	},
	checkAlphaNumericWithSpacesField(field, value) {
		var error = '';
		if (value.match(/^[A-Za-z _]*[A-Za-z][A-Za-z _]*$/)) {
			error = '';
		} else {
			error = '*Please enter alphabet characters only.';
		}
		console.log('error' + error);
		return error;
	},
	checkAlphaNumericWithSpacesAndSlashesField(field, value) {
		var error = '';
		if (value.match(/^[a-zA-Z0-9\-_\/]*[a-zA-Z0-9\-_\/][a-zA-Z0-9\-_\/]*$/)) {
			//if (value.match(/^[a-zA-Z0-9\-\/]*$/)) {
			error = '';
		} else {
			error = '*Please enter alphabet and numbers only.';
		}
		console.log('error' + error);
		return error;
	},
	checkMandatoryFieldName(field, value) {
		var error = '';
		if (value.match(/^[A-Za-z0-9,]*$/)) {
			error = '';
		} else {
			error = '*Please enter comma separated strings.';
		}
		console.log('error' + error);
		return error;
	},
	checkTittle(field, value) {
		var error = '';
		if (value.match(/^[A-Za-z0-9-_ ]*[A-Za-z0-9-_][A-Za-z-_ ]*$/)) {
			// if (value.match(/^[a-zA-Z0-9-_ ]*$/)) {
			error = '';
		} else {
			error = '*Please enter alphanumeric characters only.';
		}
		console.log('error' + error);
		return error;
	},

	checkPasswordFieldAcceptingOnlyAlphabetsWithoutSpaces(field, value) {
		var error = '';
		if (!value.match(/^[a-zA-Z]*$/)) {
			error = '*Please enter alphabet characters only.';
		} else {
			error = '';
		}
		console.log('error' + error);
		return error;
	},
};
export { Validation as default };
