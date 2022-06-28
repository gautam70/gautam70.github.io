function validate() {
    let n = document.forms["makeappointment"]["name"].value;
    if (n == "") {
      alert("Please provide your Name!");
      return false;
    } 
    let E = document.forms["makeappointment"]["email"].value;
    if(E=="")
    {
        alert("Please provide your Email-Id!");
        return false;
    }
    let m = document.forms["makeappointment"]["number"].value;
    if(m=="")
    {
        alert("Please provide your Mobile No.!");
        return false;
    }
    let d = document.forms["makeappointment"]["date"].value;
    if(d=="")
    {
        alert("Please select the date!");
        return false;
    }
}
const mobileBtn = document.getElementById('open-menu')
      nav = document.querySelector('nav')
      mobileBtnExit = document.getElementById('exit-menu');
      
      mobileBtn.addEventListener('click', () => {
          nav.classList.add('menu-btn');
        })   
        
        mobileBtnExit.addEventListener('click', () => {
            nav.classList.remove('menu-btn');
        })   