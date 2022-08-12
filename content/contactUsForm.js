function formValidation() {
    var subject = document.forms["contactUs"]["subject"].value;
    var name = document.forms["contactUs"]["name"].value;
    var lastName = document.forms["contactUs"]["lastName"].value;
    var phoneNumber = document.forms["contactUs"]["phoneNumber"].value;
    var contactEmail = document.forms["contactUs"]["contactEmail"].value;
    var contactEmailValidation = document.forms["contactUs"]["contactEmailValidation"].value;
    var textArea = document.forms["contactUs"]["textArea"].value;
    var emptyStr = "";
    var phoneNumberLength = phoneNumber.length;
    errorCleanUp();

    if (subject == 1 || name == emptyStr || lastName == emptyStr || isNaN(phoneNumber) || phoneNumber.length < 10 || contactEmail == emptyStr || contactEmail != contactEmailValidation || textArea == emptyStr) {
        if (subject == 1) {
            document.getElementById("subjectError").innerHTML = "יש לבחור נושא פניה";
            document.forms["contactUs"]["subject"].focus();
            document.getElementById("subjectError").style.display = "block";
        }
        if (name == emptyStr && lastName == emptyStr || name == emptyStr || lastName == emptyStr) {
            if (name == emptyStr && lastName == emptyStr) {
                document.getElementById("nameLastnameError").innerHTML = "יש לציין שם פרטי ושם משפחה";
                document.forms["contactUs"]["name"].focus();
                document.forms["contactUs"]["lastName"].focus();
                document.getElementById("nameLastnameError").style.display = "block";
            }
            else {
                if (name == emptyStr) {
                    document.getElementById("nameLastnameError").innerHTML = "יש לציין שם פרטי";
                    document.forms["contactUs"]["name"].focus();
                    document.getElementById("nameLastnameError").style.display = "block";
                }
                else {
                    if (lastName == emptyStr) {
                        document.getElementById("nameLastnameError").innerHTML = "יש לציין שם משפחה";
                        document.forms["contactUs"]["lastName"].focus();
                        document.getElementById("nameLastnameError").style.display = "block";
                    }
                }
            }
        }
        if (phoneNumberLength < 10 || phoneNumberLength > 10) {
            if (phoneNumberLength < 10) {
                document.getElementById("numberError").innerHTML = "מספר הטלפון קצר מידי! יש לקליד מספר טלפון בעל 10 ספרות וללא מקפים";
                document.forms["contactUs"]["phoneNumber"].focus();
                document.getElementById("numberError").style.display = "block";
            }
            else {
                if (phoneNumberLength > 10) {
                    document.getElementById("numberError").innerHTML = "מספר הטלפון ארוך מידי! יש לקליד מספר טלפון בעל 10 ספרות וללא מקפים";
                    document.forms["contactUs"]["phoneNumber"].focus();
                    document.getElementById("numberError").style.display = "block";
                }
            }
        }
        if (contactEmail == emptyStr) {
            document.getElementById("emailError").innerHTML = "יש להקליד כתובת דואר אלקטרוני";
            document.forms["contactUs"]["contactEmail"].focus();
            document.getElementById("emailError").style.display = "block";
        }
        if (contactEmail != contactEmailValidation) {
            document.getElementById("emailError").innerHTML = "כתובות הדואר האלקטרוני לא זהות";
            document.forms["contactUs"]["contactEmailValidation"].focus();
            document.getElementById("emailError").style.display = "block";
        }
        if (textArea == emptyStr) {
            document.getElementById("textAreaError").innerHTML = "יש לציין את תוכן הפניה";
            document.forms["contactUs"]["textArea"].focus();
            document.getElementById("textAreaError").style.display = "block";
        }
        document.getElementById("error").innerHTML = "נמצאו שגיאות בטופס, פירוט השגיאה מופיע מתחת לכל שדה";
        return false;
    }
    else {
        alert("הפניה נשלחה אלינו בהצלחה");
        return true;
    }
}

function formCleanUp() {
    subject = document.forms["contactUs"]["subject"].value = "";
    name = document.forms["contactUs"]["name"].value="";
    lastName = document.forms["contactUs"]["lastName"].value = "";
    phoneNumber = document.forms["contactUs"]["phoneNumber"].value = "";
    contactEmail = document.forms["contactUs"]["contactEmail"].value = "";
    contactEmailValidation = document.forms["contactUs"]["contactEmailValidation"].value = "";
    textArea = document.forms["contactUs"]["textArea"].value = "";
}

function errorCleanUp() {
        document.getElementById("subjectError").innerHTML = "";
        document.getElementById("nameLastnameError").innerHTML = "";
        document.getElementById("numberError").innerHTML = "";
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("textAreaError").innerHTML = "";
        document.getElementById("textAreaError").innerHTML = "";
        document.getElementById("error").innerHTML = "";
}