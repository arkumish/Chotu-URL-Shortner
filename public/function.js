function load() {
    $('#surl').hide();
}

function submiturl() {
    console.log('i am here');
    var fullurl = $('#ifurl').val();
    console.log(fullurl);
    $.post('/shortURL', { url: fullurl }, function (data) {

        console.log(data, data.ShortURL);
        $('#myInput').val(window.location.href + data.ShortURL);
        $('#surl').show();

    })
}

function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

}
