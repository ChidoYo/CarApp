$(function() {

    $.ajax({
        type: 'GET',
        url: 'https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=jwtgsqpzabba9kgm96ch9pxz',
        data: { get_param: 'name' },
        success: function (data) {

            var collection;
            var carMakes;
            var carObject = {};

            collection = data.makes;

            carMakes = collection.map(function(item) {
                return item.name
            })

            for (var i = 0; i < carMakes.length; i++) {
                carObject[carMakes[i]] = null
            };

            // Autocomplete
            $('input.autocomplete').autocomplete({
                data: carObject
            });

            console.log(carObject);
        }
    });

    // Materialize labels
    Materialize.updateTextFields();

    // Initialize materialize select
    $('select').material_select();



});

//
// var jqxhr = $.ajax( "example.php" )
//   .done(function() {
//     alert( "success" );
//   })
//   .fail(function() {
//     alert( "error" );
//   })
//   .always(function() {
//     alert( "complete" );
//   });
