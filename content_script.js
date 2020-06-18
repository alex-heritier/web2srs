document.onload(function() {

    Array.from(document.getElementsByTagName("p")).forEach(function(e) {
        e.innerHTML = "CONTENT"; 
    });

    window.asdf = "HELLO WORLD";
});