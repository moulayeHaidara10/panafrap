$(document).ready(function() {
    $(document).on('click','.myarticle', function (event) {
        event.preventDefault();
        let $this = $(this);
        let article = $this.attr("data-hide");

        console.log(article);
        let myRedirect = function(redirectUrl,postdata) {
            let form = $('<form action="' + redirectUrl + '" method="post">' +
                '<input type="hidden" name="postdata" value="'+postdata+'" />' +
                '</form>');
            $('body').append(form);
            $(form).submit();
        };

        myRedirect("page/ArticleDetail.php",article);
    });

    $(document).on('click','#yarticle', function (event) {
        event.preventDefault();
        let $this = $(this);
        let article = $this.attr("data-hide");

        console.log(article);
        let myRedirect = function(redirectUrl,postdata) {
            let form = $('<form action="' + redirectUrl + '" method="post">' +
                '<input type="hidden" name="postdata" value="'+postdata+'" />' +
                '</form>');
            $('body').append(form);
            $(form).submit();
        };

        myRedirect("page/ArticleDetail.php",article);
    });

    $(document).on('click','#article', function (event) {
        event.preventDefault();
        let $this = $(this);
        let article = $this.attr("data-hide");

        console.log(article);
        let myRedirect = function(redirectUrl,postdata) {
            let form = $('<form action="' + redirectUrl + '" method="post">' +
                '<input type="hidden" name="postdata" value="'+postdata+'" />' +
                '</form>');
            $('body').append(form);
            $(form).submit();
        };

        myRedirect("page/ArticleDetail.php",article);
    });

    $(document).on('click','.article', function (event) {
        event.preventDefault();
        let $this = $(this);
        let article = $this.attr("data-hide");

        console.log(article);
        let myRedirect = function(redirectUrl,postdata) {
            let form = $('<form action="' + redirectUrl + '" method="post">' +
                '<input type="hidden" name="postdata" value="'+postdata+'" />' +
                '</form>');
            $('body').append(form);
            $(form).submit();
        };

        myRedirect("page/ArticleDetail.php",article);
    });



    $('#submit').click(function (event) {
        event.preventDefault();
        var name = $('#cName').val();
        var email = $('#cEmail').val();
        var message = $('#cMessage').val();
        $.ajax({
            url: 'page/contact.php',
            type: 'POST',
            data: {name:name,email:email,message:message},
            dataType: 'text',
            Success: function(data) {
                $("#resultat").html(data);
                alert('email envoyer');
            }
        });
    });
/*
    $('#souscrire').click(function (event) {
        event.preventDefault();
        var email = $("#email").val();
        $.ajax({
            url: 'newsletter.php',
            type: 'POST',
            data: {email: email},
            dataType: 'text',
            Success: function(data) {
                $("#resultat").text("Email envoyer avec succès !");
            }
        });
});
*/

    $('#search').keyup(function () {

        var search = $(this).val();

        search = $.trim(search);

        $('#resultat').text(search);

        if (search !== "") {

            $.ajax({
                url: 'page/search.php',
                type: 'post',
                data: {search: search},
                function (data) {

                $('#resultat').html(data);

                // clique sur le lien

                $('a').click(function(){

                    var lien = $(this).text();
                    $.ajax({
                        url: 'affiche.php',
                        type: 'GET',
                        data: {lien: lien},
                        Success: function (data) {
                            $('#feedback').html(data);

                        }
                    });
                });
            }
        });


        }

    });


});
