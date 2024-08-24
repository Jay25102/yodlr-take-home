const BASE_API_URL = "http://localhost:3000";

async function retrieveUsers() {
    return await $.ajax(`${BASE_API_URL}/users/`, {
        type: "GET",
        async: true,
        dataType: "json"
    });
}

function generateUserTable(userData) {
    let $newTable = $("<table>");
    let $tableHeaders = $("<tr>").addClass("header-row");
    
    // first row of table 
    let $headerId = $("<th>").text("id");
    let $headerName = $("<th>").text("Name");
    let $headerEmail = $("<th>").text("Email");
    let $headerActive = $("<th>").text("Active");

    $tableHeaders.append($headerId).append($headerName).append($headerEmail).append($headerActive)
    $newTable.append($tableHeaders);
    
    for (let user of userData) {
        let $newTr = $("<tr>");
        $newTable.append($newTr);
        $newTr.append($("<th>").text(user.id))
            .append($("<th>").text(user.firstName + user.lastName))
            .append($("<th>").text(user.email))
            .append($("<th>").text(user.state));
    }
    $(".user-info").append($newTable);
}

// On dom load
$(async function() {
    let userData;
    console.log("DOM content loaded\n");
    userData = await retrieveUsers();
    generateUserTable(userData);
});