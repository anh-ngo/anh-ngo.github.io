let closed = 0

document.getElementById("expand-on-click").addEventListener("click", function() {
    document.getElementById("expand-on-click").classList = "hidden";
    document.getElementById("collapse-on-click").classList = "no-highlight visible-inline";

    let hiddenElements = document.querySelectorAll(".hidden");
    for (let i = 0; i < hiddenElements.length; i++) {
        if (hiddenElements[i].tagName == "P") {
            hiddenElements[i].classList = "visible-block";
        } else if (hiddenElements[i].tagName == "DIV") {
            hiddenElements[i].classList = "text-wrapper visible-block";
        }
    }
});

document.getElementById("intro-text").addEventListener("click", function() {
    if (closed == 0) {
        document.getElementById("expand-on-click").classList = "hidden";
        document.getElementById("collapse-on-click").classList = "no-highlight visible-inline";

        let hiddenElements = document.querySelectorAll(".hidden");
        for (let i = 0; i < hiddenElements.length; i++) {
            if (hiddenElements[i].tagName == "P") {
                hiddenElements[i].classList = "visible-block";
            } else if (hiddenElements[i].tagName == "DIV") {
                hiddenElements[i].classList = "text-wrapper visible-block";
            }
        }
        closed = 1;
    }
    else {
        document.getElementById("collapse-on-click").classList = "hidden";
        document.getElementById("expand-on-click").classList = "no-highlight visible-inline";

        let visibleElements = document.querySelectorAll(".visible-block");
        for (let i = 0; i < visibleElements.length; i++) {
            if (visibleElements[i].tagName == "P") {
                visibleElements[i].classList = "hidden";
            } else if (visibleElements[i].tagName == "DIV") {
                visibleElements[i].classList = "text-wrapper hidden";
            }
        }
        closed = 0;
    }
});

document.getElementById("collapse-on-click").addEventListener("click", function() {
    document.getElementById("collapse-on-click").classList = "hidden";
    document.getElementById("expand-on-click").classList = "no-highlight visible-inline";

    let visibleElements = document.querySelectorAll(".visible-block");
    for (let i = 0; i < visibleElements.length; i++) {
        if (visibleElements[i].tagName == "P") {
            visibleElements[i].classList = "hidden";
        } else if (visibleElements[i].tagName == "DIV") {
            visibleElements[i].classList = "text-wrapper hidden";
        }
    }
});



