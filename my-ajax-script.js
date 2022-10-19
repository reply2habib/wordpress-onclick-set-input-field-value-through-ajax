// <a href="javascript:void(0)" name="get_suburbs" data-suburbs="Akatarawas">Book Now</a>


// Onclick call function via ajax
jQuery(document).ready(function () {
    jQuery("a[name=get_suburbs]").on("click", function () {
      var suburb_name = $(this).data("suburbs");
      alert(suburb_name);
  
      jQuery.ajax({
        type: "post",
        url: my_ajax_object.ajax_url,
        data: {
          "action": "cf_suburb", // function name
          "suburb_name": suburb_name // pass some data with above function
        },
        cache: false,
        success: function (res) {
          console.log("success-q" + res);
          jQuery("#input_3_6").val(res);
        }
      });
    });
  });
  
