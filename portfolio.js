function sendmail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
        
        
    };
    const serviceId="service_wxbyaw7"
    const templateId="template_ljnunmm"

    emailjs.send(serviceId,templateId,params)
    .then(
        res=>{
            document.getElementById("name").value=""
            document.getElementById("email").value=""
            document.getElementById("message").value=""
            console.log(res);
            alert("you message send successfully")

        })
    .catch((err)=>log(err))
}



