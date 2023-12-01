// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

$(() => {
	// put jQuery in here
    // Year1
    const $container = $("#container")
    // console.log($container)
    const $h1 = $("<h1>")
    // console.log($h1)
    $h1.text("Hogwarts")
    $container.append($h1)

    // Year2
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

    // Year3
    const $ul = $("<ul>")
    $ul.attr("storage","trunk")
    $container.append($ul)

    const $li1 = $("<li>").text("butter beer")
    $ul.append($li1)

    const $li2 = $("<li>").text("invisibility cloak").addClass("secret")
    $ul.append($li2)

    const $li3 = $("<li>").text("time turner").addClass("secret")
    $ul.append($li3)

    const $li4 = $("<li>").text("leash").addClass("owl")
    $ul.append($li4)

    const $li5 = $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans")
    $ul.append($li5)
});
