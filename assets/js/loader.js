document.onreadystatechange = function () {
    console.log(document.readyState);
    if (document.readyState == "complete") {
        $("#loading").fadeOut();
    }
};