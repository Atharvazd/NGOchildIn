/*global requirejs:true*/
'use strict';

requirejs.config({
    paths: {}
});


require([/* Dependencies */], function () {

    var app = {
        initialize: function () {
          $(document).ready(function(){
            $("#myBtn").click(function(){
              $("#myModal").modal();
            });
          });
        }
    };

    app.initialize();

});
