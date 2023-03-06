function printHeader() {
    console.log("---- My Custom Header");
}

function printContent() {
    console.log("---- Page Content");
}

function printFooter() {
    console.log("---- Page Footer");
}


function printBody() {
    printHeader();
    printContent();
    printFooter();
}

printBody();