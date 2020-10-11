function updateContactDetails() {
    clearSelection();
    let contactsElements = document.getElementsByClassName("contactDetail");
    let selectedOption = document.getElementById("displayDetail").value;
    for(var i=0; i < contactsElements.length; i++) {
        selectedOption === "phone"?
        contactsElements[i].innerHTML = contacts[i].phone:
        contactsElements[i].innerHTML = contacts[i].email;
    }
}

function showFullDetail(e) {
    clearSelection();
    e.classList.add("selected");
    e.childNodes[3].innerHTML = "";

    let emailElement = document.createElement("a");
    emailElement.href = "";
    emailElement.innerHTML = contacts[e.rowIndex].email + "<br>";
    e.childNodes[3].appendChild(emailElement);

    let phoneElement = document.createElement("p")
    phoneElement.innerHTML = contacts[e.rowIndex].phone + "<br>";
    e.childNodes[3].appendChild(phoneElement);

    let addressElement = document.createElement("p");
    addressElement.innerHTML = contacts[e.rowIndex].street + "<br>" +
    contacts[e.rowIndex].city + " "
    + contacts[e.rowIndex].state + " "
    + contacts[e.rowIndex].zip;
    e.childNodes[3].appendChild(addressElement);
}

function clearSelection() {
    let rows = document.getElementsByTagName("tr");
    let selectedOption = document.getElementById("displayDetail").value;
    for(let i=0; i < rows.length; i++) {
        if (rows[i].classList.contains("selected")) {
            rows[i].classList.remove("selected");
            selectedOption === "phone"?
            rows[i].childNodes[3].innerHTML = contacts[i].phone:
            rows[i].childNodes[3].innerHTML = contacts[i].email;
        }
    }
}

let contacts = [
    {
        name: "Christian",
        phone: "323-555-1234",
        email: "christian@yahoo.com",
        street: "6539 Wilton Ave.",
        city: "Culver City",
        state: "CA",
        zip: "90234"
    },
    {
        name: "Rich",
        phone: "323-555-1234",
        email: "rich@tripod.com",
        street: "6539 Wilton Ave.",
        city: "Culver City",
        state: "CA",
        zip: "90234"
    },
    {
        name: "Scott",
        phone: "323-555-1234",
        email: "scott@mallinator.com",
        street: "6539 Wilton Ave.",
        city: "Culver City",
        state: "CA",
        zip: "90234"
    },
    {
        name: "Danny",
        phone: "323-555-1234",
        email: "danny@hotmail.com",
        street: "6539 Wilton Ave.",
        city: "Culver City",
        state: "CA",
        zip: "90234"
    },
    {
        name: "Taka",
        phone: "323-555-1234",
        email: "taka@myspace.com",
        street: "6539 Wilton Ave.",
        city: "Culver City",
        state: "CA",
        zip: "90234"
    },
    {
        name: "Tim",
        phone: "323-555-1234",
        email: "tim@netscape.com",
        street: "6539 Wilton Ave.",
        city: "Culver City",
        state: "CA",
        zip: "90234"
    },
    {
        name: "Patrick",
        phone: "323-555-1234",
        email: "patrick@live.com",
        street: "6539 Wilton Ave.",
        city: "Culver City",
        state: "CA",
        zip: "90234"
    },
    {
        name: "Jacques",
        phone: "323-555-1234",
        email: "jacques@aol.com",
        street: "6539 Wilton Ave.",
        city: "Culver City",
        state: "CA",
        zip: "90234"
    },
]