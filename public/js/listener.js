/*
$(document).ready(function () {
    function postData(numId) {
        console.log("listener.js: "+JSON.stringify(numId));
        //unpdating Burger in the database
        $.ajax("/test/submit", {
        type: "POST",
        //url: "/api/burgers",
        data: numId//Pass the burger object and its id and state properties to the put method
        }).then(function(data){
            console.log("POST Id = "+data);
            location.reload();
        });
    }//insertBurger

    $(function(){
        $("#text-btn").on("click", function(event){
            //event.preventDefault();
            var myId = $("#text-id").val().trim();
            console.log("MYID = "+myId);
                /**************************/
                //INSERT BURGER
                /*************************/
//                 var myId = {
//                     id: myId,
//                     test : "test"
// }
                //Get the name that was entered, upon burger creation in index.handlebars

                //console.log("Approvers SENT FROM HSBOBJECT = "+hbsObject.approvers);
                /***********************************
                 * RESET Any Appover Error Handling
                 ***********************************/
                /*$('.approverName-message').css({'color':''});
                $('#approverName').css({'border-color':''});*/
                // postData(myId);
        // });//submit-btn
//     })
// });

