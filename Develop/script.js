$(document).ready(function() {
    // Jquery code goes here
    var currentTime = moment();
    $("#currentDay").text(currentTime.format('LLLL'));
    
    $('.Task_Row').each(function() {
      var hour = moment().hour($(this).attr('hour'));
      console.log(localStorage);
      var task = localStorage.getItem(hour.hour());
      $(this).children('input').val(task);

      console.log(hour.hour());
      console.log(currentTime.hour());

      if (currentTime.hour() < hour.hour()) {
        // change the color of the textarea
        $(this).children('input').addClass('future');
      }
      else if (currentTime.hour() > hour.hour()) {
        $(this).children('input').addClass('past');
      }
      else {
        $(this).children('input').addClass('present');
      }
    });

    $('.btn').click(function() {
      var textarea = $(this).prev();
      var task = textarea.val();
      var hour = $(this).parent().attr('hour');
      localStorage.setItem(hour, task);
    })
  });
