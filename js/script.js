localStorage.clear;

function Proceed() {
    $("#pg-1").css("marginLeft", "0");
}
function Proceed1() {
    $("#pg-1").css("marginLeft", "-20%");
}
function Proceed2() {
    $("#pg-1").css("marginLeft", "-40%");
}
function Proceed3() {
    $("#pg-1").css("marginLeft", "-60%");
}
function effect() {
    $(".pb-inner-border").css("border", "2px solid rgba(6, 104, 231, 0.822)");
    $(".pb-inner-border").css("color", "rgba(6, 104, 231, 0.822)");
}
function noEffect() {
    $(".pb-inner-border").css("border", "2px solid rgba(0, 0, 0, 0.555)");
    $(".pb-inner-border").css("color", "rgba(0, 0, 0, 0.555)");
}

//image-name read and display function
function showFileName(event) {
    //get file input and outputs respectively
    var fileInput = document.getElementById("file");
    var fileNameOutput = document.getElementById("file-name");

    //save file
    var file = fileInput.files[0];
    localStorage.setItem("ProfileImage", file);
    
    //get file name
    var fileInput = event.srcElement;
    var fileName = fileInput.files[0].name;

    //display file name
    fileNameOutput.innerHTML = fileName;

}

//image read and display function
function finish() {

    var file = document.getElementById("file").files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        var image = document.createElement("img");
        image.className = "profilePhoto";
        image.src = e.target.result;
        var profilePhotoBox = document.getElementById("profile-photo-box")
        profilePhotoBox.appendChild(image);

        localStorage.setItem("ProfileImage", image);
    }
    reader.readAsDataURL(file);

     //get all inputs
     var lastName = $("#last-name").val();
 
     var middleName = $("#middle-name").val();
     
     var firstName = $("#first-name").val();
 
     var nationality = $("#Nationality").val();
 
     var day = $("#day").val();
 
     var month = $("#month").val();
 
     var year = $("#year").val();
 
     var occupation = $("#occupation1").val();
 
     var tel = $("#tel").val();
 
    var email = $("#email").val();

    //clear and reset body content
    $(".form-box").css("display", "none");
    document.body.style.background = "white";
    $(".mssg-box").css("display", "block");
    $(".id-box").css("display", "block");

    //insert inputs in ID
    document.getElementById("name").textContent = lastName + " " + firstName;
    document.getElementById("occupation").textContent = occupation;
    document.getElementById("nationality").textContent = nationality;
    document.getElementById("DOB").textContent = day + "-" + month + "-" + year;
    document.getElementById("mobile").textContent = tel;
    document.getElementById("email").textContent = email;
 

}

