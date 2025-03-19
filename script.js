const btnE1=document.getElementById("btn");
const birthdayE1=document.getElementById("birthday");
const resultE1=document.getElementById("result");

function calculateAge()
{
   const birthdayValue=birthdayE1.value;
   const funnyImage=document.getElementById("funnyImage");
   
   if(birthdayValue==="")
   {
    alert("Please enter your birthday");
   }
   else
   {
    const age=getAge(birthdayValue);

    if (age < 0) {
      resultE1.innerText = "Invalid date! Please enter a valid birth date.";
      resultE1.style.color="red";
      funnyImage.src="images/confused.png";
      return;
   }
  
    resultE1.innerText=`Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    resultE1.style.color="black";

    if(age<10)
    {
      funnyImage.src="images/kid.png";
    }else if(age<18)
    {
      funnyImage.src="images/teen.png";
    }else
    {
      funnyImage.src="images/adult.png";
    }
   }
}

function getAge(birthdayValue)
{
      const currentDate=new Date();
      const birthdayDate=new Date(birthdayValue);
      let age=currentDate.getFullYear()-birthdayDate.getFullYear();
      const month=currentDate.getMonth()-birthdayDate.getMonth();

      if(month<0 || (month===0 && currentDate.getDate()<birthdayDate.getDate()))
      {
        age--;
      }

      return age;
     
}


btnE1.addEventListener("click",calculateAge)

