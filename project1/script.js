//Pseudocode
// start game
// select the disc to be moved


$('.post').on('click', function() {
  if($(this).children(':first').hasClass('active')) {
    $(this).children(':first').removeClass('active')
  }
  else {
    // $('.disc').removeClass('active');
    $(this).children(':first').addClass('active');
    $('#post1').on('click', moveDisc)
    $('#post2').on('click', moveDisc)
    $('#post3').on('click', moveDisc)
}
});

// compare discs
if ($('.active').val() > $('#post2').children(':first').val()) {
  console.log('Not a Valid Move!');
}
else {
  $('.active').prependTo("#post2");
}

if ($('.active').val() > $('#post3').children(':first').val()) {
  console.log('Not a Valid Move!');
}
else {
  $('.active').prependTo("#post3");
}

if ($('.active').val() > $('#post1').children(':first').val()) {
  console.log('Not a Valid Move!');
}
else {
  $('.active').prependTo("#post1");
}


// post1
  //   if ($('#post1').hasClass('disc')) {
  //     var value1 = $('.active').val();
  //     var value2 = $('#post1').children(':first').val();
  //     if (value1 > value2) {
  //         console.log('This is not a valid move.');
  //     }
  //     else {
  //       $('#post1').on('click', moveDisc)
  //       $('#post2').on('click', moveDisc)
  //       $('#post3').on('click', moveDisc)
  //     };
  //   }
  //   else if ($('#post2').hasClass('disc')) {
  //     var value1 = $('.active').val();
  //     var value2 = $('#post2').children(':first').val();
  //     if (value1 > value2) {
  //         console.log('This is not a valid move.');
  //     }
  //     else {
  //       $('#post1').on('click', moveDisc)
  //       $('#post2').on('click', moveDisc)
  //       $('#post3').on('click', moveDisc)
  //     };
  //   }
  //   else if ($('#post3').hasClass('disc')) {
  //     var value1 = $('.active').val();
  //     var value2 = $('#post3').children(':first').val();
  //     if (value1 > value2) {
  //         console.log('This is not a valid move.');
  //     }
  //     else {
  //       $('#post1').on('click', moveDisc)
  //       $('#post2').on('click', moveDisc)
  //       $('#post3').on('click', moveDisc)
  //     };
  //   }
  // };
// });

//
//
// $('.post').on('click', gameInit)
//
// function selectDisc(){
//   $(this).children(':first-child').addClass('active');
// };
// function deselectDisc(){
//   $(this).children(':first-child').removeClass('active');
// };
// function anotherDisc() {
//   if ($(this).hasClass('disc')) {
//     var width1 = $('.active').css('width');
//     var width2 = this.children(':first-child').css('width');
//     if (+width > +width2) {
//         console.log('This is not a valid move.');
//     }
//     else {
//       $('#post1').on('click', moveDisc)
//       $('#post2').on('click', moveDisc)
//       $('#post3').on('click', moveDisc)
//     };
//   }
//   else {
//     $('#post1').on('click', moveDisc)
//     $('#post2').on('click', moveDisc)
//     $('#post3').on('click', moveDisc)
//   }
// };
// function gameInit() {
//   selectDisc();
//   anotherDisc();
//   deselectDisc();
// }


// how to connect post div to post div
//   appendTo and prependTo to add discs to columns
// $('#post1').on('click', moveDisc)
// $('#post2').on('click', moveDisc)
//
// $('#post3').on('click', moveDisc)

//set event listener to listen for a click on anywhere in the .post
// function isThereContent() {
//     if ($(this).hasClass('disc')) {
//     $('.active').prependTo($(this));
//     }
//     else {
//       moveDisc();
//   };
// };
function moveDisc() {
  $('.active').prependTo($(this));
  // $('.active').removeClass('active');
}

// function moveDisc(width1, width) {
//   var width1 = $('.active');
//   var width2 = $(this).children(':first-child');
//   // to check if disc is larger, then it won't move.
//   if ($(this).hasClass('disc')) {
//     if (+width1.html() > +width2.html()) {
//     console.log('This is not a valid move.');
//     }
//   else {
//     $('.active').prependTo($(this));
//     };
//   };
// };
// if # value of disc > # of first-child disc, alert - cannot move item.
  // else continue with append/prepend
