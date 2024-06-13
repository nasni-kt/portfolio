function sendmail(){
    var params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceId = "service_wxbyaw7";
    const templateId = "template_ljnunmm";

    emailjs.send(serviceId, templateId, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message was sent successfully.");
        })
        .catch(err => console.log(err));
}

//     emailjs.send("service_kee3oeq","template_8h5y7lb",params).then(alert("email send!!"))





