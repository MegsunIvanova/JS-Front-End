function deleteByEmail() {
    const input = document.querySelector('input[name="email"]');
    const evenTds = Array.from(document.querySelectorAll('td:nth-child(even)'));
    const result = document.getElementById("result");
    let emailValue = input.value;
    let fountElement = evenTds.find((td) => td.textContent === emailValue);

    if (fountElement) {
        fountElement.parentElement.remove();
        result.textContent = "Deleted.";
    } else {
        result.textContent = "Not found.";
    }
}

// function deleteByEmail() {
//     let emailForDeleting = document.getElementsByName("email")[0].value;
//     let tdSecondColumn = document.querySelectorAll("#customers tr td:nth-child(2)");

//     let resultText = "Not found.";


//     for (let td of tdSecondColumn) {
//         if (td.textContent === emailForDeleting) {
//             let rowForDeleting = td.parentNode;
//             rowForDeleting.parentNode.removeChild(rowForDeleting);
//             resultText = "Deleted."
//         }
//     }

//     let resultElement = document.getElementById("result");
//     resultElement.textContent = resultText;

// }