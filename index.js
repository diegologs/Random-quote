function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function getQuote() {
    $.ajax({
        headers: {
            "X-Mashape-Key": "dITqRwBOt6mshm55nVGnfBU8bAVLp1MqSdRjsn3G3wFvdesZxZ"
            , Accept: "application/json"
            , "Content-Type": "application/x-www-form-urlencoded"
        }
        , url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat='
        , success: function (response) {
            var r = JSON.parse(response);
            currentQuote = r.quote;
            currentAuthor = r.author;


            if (inIframe()) {
                $('#twitterlink').attr('href', 'https://twitter.com/intent/tweet?&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor + "   /   " + "http://codepen.io/Frostq/pen/VjEZqm" + " @DiegoLopGr"));


            }
            $("#text").html(r.quote);
            $("#author").html(" - " + r.author + " - ");



        }
    });
}


$("document").ready(function () {
    getQuote();
    $('.boton').on('click', getQuote);

});