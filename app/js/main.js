/**
 * Created by sun on 2017/6/28.
 */
define(function (require) {
    var $ = require("jquery");

    function bindClick() {
        $("#btn_submit").on("click", function (e) {
            /*$.getJSON("http://localhost:3000/wang",function(data){
                console.info(data);
            });
            $.getJSON("http://localhost:3000/sun",function(data){
                console.info(data);
            });*/
            $.ajax({
                url: "http://localhost:3000/sun",
                method: "post",
                dataType: "json",
                success: function (data) {
                    console.info(data);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.info(arguments);
                }
            });
            $.ajax({
                url: "http://localhost:3000/wang",
                method: "post",
                dataType: "json",
                success: function (data) {
                    console.info(data);
                    // $("#results").append(html);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.info(arguments);
                }
            });
        });
    }

    (function () {
        bindClick();
    })();
});
