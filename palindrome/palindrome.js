function pal(){
	var rem, temp, final = 0;
				var number = Number(document.getElementById("palindrome").value);

				temp = number;
				while(number>0)
				{
					rem = number%10;
					number = parseInt(number/10);
					final = final*10+rem;
				}
				if(final==temp)
				{
					alert(final +  " is a Palindrome Number");
				}
				else
				{
					alert( final + " is not a Palindrome Number");
				}
			}