// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

$(() => {
	// put jQuery in here
    const $container = $("#container")
    // console.log($container)
    const $h1 = $("<h1>")
    // console.log($h1)
    $h1.text("Hogwarts")
    $container.append($h1)

    const $h2 = $("<h2>")
    $h2.text("Daniel")
    $h1.append($h2)
    
    const $h3 = $("<h3>")
    $h3.text("Hufflepuff")
    $h2.append($h3)
    
    const $h4 = $("<h4>")
    $h4.text("Gigi").addClass("owl")
    $h3.append($h4)

    const $h4Wand = $("<h4>")
    $h4Wand.text("Holly Wand with Unicorn Hair Core")
    $h4.append($h4Wand)
});
