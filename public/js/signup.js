const BASE_API_URL = "http://localhost:3000";

function gatherFormData() {
    let formData = {
        email: `${$(".emailInput").val()}`,
        firstName: `${$(".firstNameInput").val()}`,
        lastName: `${$(".lastNameInput").val()}`,
    };
    return formData;
}

async function postNewUser(formData) {
    return await $.ajax(`${BASE_API_URL}/users/`, {
        type: "POST",
        async: true,
        dataType: "json",
        data: formData
    });
}

$(function() {
    console.log("DOM content loaded\n");
    $(".submitBtn").on("click", function(evt) {
        evt.preventDefault();
        postNewUser(gatherFormData());
        $(".registrationForm").trigger("reset");
        alert("User registered");
    });
});