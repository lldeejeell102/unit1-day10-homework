// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

$(() => {
	// put jQuery in here
    //--------------------------------------------------------------//
    // Year1
    const $container = $("#container")
    // console.log($container)
    const $h1 = $("<h1>")
    // console.log($h1)
    $h1.text("Hogwarts")
    $container.append($h1)

    //--------------------------------------------------------------//
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

    //--------------------------------------------------------------//
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
    

    //--------------------------------------------------------------//
    // Year4
    
    const $tableTitle = $("<h5>").text("Spring 2017")
    $li5.append($tableTitle)
    const $table = $("<table>").addClass("table")
    $tableTitle.append($table)
    const $thead = $("<thead>")
    $table.append($thead)
    
    const $day = $("<th>").text("Day")
    const $classes = $("<th>").text("Classes")
    $thead.append($day).append($classes)

    const $tr1 = $("<tr>")
    $thead.append($tr1)
    const $td1 = $("<td>").text("Monday")
    const $td2 = $("<td>").text("Herbology")
    $tr1.append($td1).append($td2)

    const $tr2 = $("<tr>")
    $thead.append($tr2)
    const $td3 = $("<td>").text("Tuesday")
    const $td4 = $("<td>").text("Defense Against the Dark Arts")
    $tr2.append($td3).append($td4)
    
    const $tr3 = $("<tr>")
    $thead.append($tr3)
    const $td5 = $("<td>").text("Wendesday")
    const $td6 = $("<td>").text("Quidditch Practice")
    $tr3.append($td5).append($td6)
    
    const $tr4 = $("<tr>")
    $thead.append($tr4)
    const $td7 = $("<td>").text("Thursday")
    const $td8 = $("<td>").text("Herbology")
    $tr4.append($td7).append($td8)
    
    const $tr5 = $("<tr>")
    $thead.append($tr5)
    const $td9 = $("<td>").text("Friday")
    const $td10 = $("<td>").text("History of Magic")
    $tr5.append($td9).append($td10)
   
    
    //--------------------------------------------------------------//
    // Year5
    $h4Wand.remove()
    $li1.remove()

    const $h4WandNew = $("<h4>")
    $h4WandNew.text("Silver Lime with Veela Hair Core")
    $h4.append($h4WandNew)
    $h4WandNew.css('color', 'indigo')
    
    
    $h4.remove()
    $li5.append($h4)
    $h4.remove()
    $h3.append($h4) 


    //--------------------------------------------------------------//
    // Year6
    $(".secret").hide("slow").delay(200)
    $(".secret").show("slow")
    
    $li4.addClass="cabbage"
    $li4.removeClass="cabbage"

});