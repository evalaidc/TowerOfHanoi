//Pseudocode

// appendTo() and prependTo() post#

//function moveDisc()

// start game
// select the disc to be moved
$('.disc').on('click', selectDisc)

function selectDisc(){
  $(this).toggleClass('active');
};
// how to connect post div to post div
  // appendTo and prependTo to add discs to columns
$('#post1').on('click', moveDisc)
$('#post2').on('click', moveDisc)
$('#post3').on('click', moveDisc)

//set event listener to listen for a click on anywhere in the .post
function moveDisc() {
  // // to check if disc is larger, then it won't move.
  // if ($(this).first() == $('active').first()) {
  //     $('.active').prependTo($(this));
  // }
  // else if($('.active').val() > $(this).first().val()) {
  //   console.log('This is not a valid move.');
  // }
  // else {
    $('.active').prependTo($(this));
  // 
  // }
};

// if # value of disc > # of first-child disc, alert - cannot move item.
  // else continue with append/prepend
