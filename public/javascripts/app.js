$(document).ready(function(){

  $('#submit').on('click', function(e){
    e.preventDefault();
    var make = $('#target').val();
    var result = $('#apiDiv');
    var t;
    $.ajax ({
      url: "https://api.edmunds.com/api/vehicle/v2/" + make + "?fmt=json&api_key=jwtgsqpzabba9kgm96ch9pxz",
      type: 'GET',
      dataType: 'JSON',
      success: function(data){

        var cars = data.models;
        cars.forEach(function(car) {
          // if(sendData === car.models[0].niceName) {
          //   debugger;
            t += "<li>" + car.name + "</li>";
          // }
        });
        result.append(t);
      },
      error: function(data){
        result.append("Could't find a matching car..!");
      }

    });
  });
});
