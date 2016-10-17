$('#imgURL').change(function () {

 var imgURL = document.getElementById("imgURL").value;
    $.ajax({
     
        url: "https://api.projectoxford.ai/vision/v1.0/tag",        
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Content-Type", "application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "1509752abed946fe8d21cc1d998286d5");
            },
            type: "POST",
            data: "{'url':'" + imgURL+ "'}",
      
            })
            
            .done(function (data) {
                var dataString = JSON.stringify(data);
                var msgs = JSON.parse(dataString);
                var msgTag = msgs.tags;
                var msgLen = msgTag.length;

                for(var i = 0, l = msgLen; i < l; i++) {
                    var msg = msgTag[i];
              
                    $("#response").append("#" + msg.name + " ");
      
                }
          
            })

            .fail(function (error) {
                $("#response").text(error);
                alert(error.getAllResponseHeaders());

            })
        });    


        

