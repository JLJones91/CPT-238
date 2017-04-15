$(document).ready(function()
{	
	var $state = $("#state"),
		$errState = $("#errState"),
		$zip = $("#zip"),
		$errZip = $("#errZip"),
		$phone = $("#phone"),
		$errPhone = $("#errPhone"),
		$email = $("#eMail"),
		$errEmail = $("#errEmail"),
		$ccNum = $("#ccNum"),
		$errCCnum = $("#errCCnum"),
		$fName = $("#fName"),
		$errFname = $("#errFname"),
		$lName = $("#lName"),
		$errLname = $("#errLname"),	
		$city = $("#city"),
		$errCity = $("#errCity"),
		$add1 = $("#add1"),
		$errAdd1 = $("#errAdd1"),
		$add2 = $("#add2"),
		$errAdd2 = $("#errAdd2"),
		$none = $("#none"),
		$expMonth = $("#expMonth"),
		$expYear = $("#expYear"),
		$errDate = $("#errDate"),
		$sForm = $("#custForm");
	
	//begin hints
	$state.focus(function()
	{
		$errState.append('Use a two letter abbreviation');
	}).blur(function()
	{
		$errState.empty();
	});
	
	$zip.focus(function()
	{
		$errZip.append('Use a 5 digit Zip Code');
	}).blur(function()
	{
		$errZip.empty();
	});
	
	$phone.focus(function()
	{
		$errPhone.append('Numbers Only - No Spaces or Dashes');
	}).blur(function()
	{
		$errPhone.empty();
	});
	
	$email.focus(function()
	{
		$errEmail.append('Example - john@doe.com');
	}).blur(function()
	{
		$errEmail.empty();
	});
	
	$ccNum.focus(function()
	{
		$errCCnum.append('Numbers Only - No Spaces or Dashes');
	}).blur(function()
	{
		$errCCnum.empty();
	});
	// end hints
	
	// begin validation	
	$sForm.submit(function(event)
	{
		var pattern = /^[a-z ]+$/i,
			addPatt = /^[a-z0-9 ]+$/i,
			statePatt = /^[a-z]+$/i
			numPatt = /^[0-9]+$/,
			emailPatt = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
			errors = 0;
			
			$(".errMsg").empty();
		//First Name Check
		if (($fName.val().length > 1) && ($fName.val().length < 21))
		{
			if(!pattern.test($fName.val()))
			{
				$errFname.append("Required: Must contain only letters and	spaces between 2 and 20 characters!");
				errors += 1;			
			}
		}
		else
		{
			$errFname.append("Required: Must contain only letters and	spaces between 2 and 20 characters!");
				errors += 1;	
		}
		
		//Last Name Check
		if (($lName.val().length > 1) && ($lName.val().length < 21))
		{
			if(!pattern.test($lName.val()))
			{
				$errLname.append("Required: Must contain only letters and	spaces between 2 and 20 characters!");
				errors += 1;			
			}
		}
		else
		{
			$errLname.append("Required: Must contain only letters and	spaces between 2 and 20 characters!");
				errors += 1;	
		}
		
		//City Check
		if (($city.val().length > 1) && ($city.val().length < 21))
		{
			if(!pattern.test($city.val()))
			{
				$errCity.append("Required: Must contain only letters and	spaces between 2 and 20 characters!");
				errors += 1;			
			}
		}
		else
		{
			$errCity.append("Required: Must contain only letters and	spaces between 2 and 20 characters!");
				errors += 1;	
		}
		
		//Address 1 Check
		if (($add1.val().length > 1) && ($add1.val().length < 21))
		{
			if(!addPatt.test($add1.val()))
			{
				$errAdd1.append("Required: Must contain only letters, numbers, and spaces between 2 and 20 characters!");
				errors += 1;			
			}
		}
		else
		{
			$errAdd1.append("Required: Must contain only letters, numbers, and spaces between 2 and 20 characters!");
				errors += 1;	
		}		
		
		//Address 2 Check
		if ($add2.val() != "")
		{	
			if (($add2.val().length > 1) && ($add2.val().length < 21))
			{
				if(!addPatt.test($add2.val()))
				{
					$errAdd2.append("Required: Must contain only letters, numbers and spaces between 2 and 20 characters!");
					errors += 1;			
				}
			}
			else
			{
				$errAdd2.append("Required: Must contain only letters and spaces between 2 and 20 characters!");
					errors += 1;
			}	
		}
		
		//State Check
		if (($state.val().length != 2) || (!statePatt.test($state.val())))
		{	
			$errState.append("Required: Must contain a two-letter State abbreviation!");
			errors += 1;
		}
		
		//Zip Check
		if (($zip.val().length != 5) || (!numPatt.test($zip.val())))
		{	
			$errZip.append("Required: Must contain a 5 number Zip Code!");
			errors += 1;
		}
		
		//Phone Check
		if (($phone.val().length != 10) || (!numPatt.test($phone.val())))
		{		
			$errPhone.append("Required: Must contain a 10 digit number with no space or dashes!");
			errors += 1;
		}
		
		//Email Check
		if (!emailPatt.test($email.val()))
		{		
			$errEmail.append("Required: Must be a valid e-mail address!");
			errors += 1;
		}
		
		//CC Check
		if($none.is(":checked"))
		{			
		}		
		else
		{
			if(($ccNum.val().length >= 13) && ($ccNum.val().length <= 16)) 
			{
				if(!numPatt.test($ccNum.val()))
				{
					$errCCnum.append("Must contain a 13-16 digit number with no space or dashes!");
					errors += 1;
				}	
			}
			else
			{	
				$errCCnum.append("Must contain a 13-16 digit number with no space or dashes!");
				errors += 1;
			}
		}
			
		//CC Month/Year Check
		if($none.is(":checked"))
		{
		}
		else
		{
			if (($expMonth.val() == "") || ($expYear.val() == ""))
			{
				$errDate.append("Must select a Month and Year!");
				errors +=1;
			}
		}
		
		//Error Count
		if (errors > 0) 
		{
			$sForm.prepend('<div class="errMsg">Please edit the marked fields below to fix errors.</div>');
			event.preventDefault();
		}
	});
});









