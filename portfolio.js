function sendMail(){
    var params={
        name:document.getElementById("name").value ,
        number:document.getElementById("number").value ,
        email:document.getElementById("email").value ,
        message:document.getElementById("message").value
    };
    const serviceID="service_qdn8ufd";
const templateID="template_yhwxr5a";

emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("name").value="";  
        document.getElementById("number").value="";      
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("Your message send successfully");
    })
    .catch(err=console.log(err));
}
//     emailjs.send("service_kee3oeq","template_8h5y7lb",params).then(alert("email send!!"))





