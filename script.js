function changeTitle(inputId, title) {
    var inputElement = document.getElementById(inputId);
    inputElement.placeholder = title;
    inputElement.value = "";
}