$('#btn').click(function () {
    $.ajax({
        url: "https://api.projectoxford.ai/vision/v1.0/tag",        
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Content-Type", "application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "1509752abed946fe8d21cc1d998286d5");
            },
            type: "POST",
            data: '{"url": "https://oxfordportal.blob.core.windows.net/emotion/recognition1.jpg"}'
           
            })
            
            .done(function (data) {
                var dataString = JSON.stringify(data);
                var msgs = JSON.parse(dataString);
                var msgTag = msgs.tags;
                var msgLen = msgTag.length;

                for(var i = 0, l = msgLen; i < l; i++) {
                    var msg = msgTag[i];
                   // var div = document.createElement('div');
                    $("#response").append("#" + msg.name + " ");
                 //   document.body.appendChild($("#response"));
                }
               // $("#response").text(JSON.stringify(data));
            })

            .fail(function (error) {
                $("#response").text(error);
            })
        });      


