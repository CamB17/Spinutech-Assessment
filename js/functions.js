$(document).ready(function(){

    circlesEffects();

    // Conditional statement, that clones the clicked on shapes color and makes the new shape have the same background and color classes
    function currentColor(e){
        if ($(e).hasClass("bg_red")){
            return ["bg_red", "fc_red", "Red"];
        }else if ($(e).hasClass("bg_green")){
            return ["bg_green", "fc_green", "Green"];
        }else if ($(e).hasClass("bg_blue")){
            return ["bg_blue", "fc_blue", "Blue"];
        }else if ($(e).hasClass("bg_orange")){
            return ["bg_orange", "fc_orange", "Orange"];
        }else if ($(e).hasClass("bg_yellow")){
            return ["bg_yellow", "fc_yellow", "Yellow"];
        }
    }
    

    // Circle on click function for the creation of a square
    $('.circles').on('click', '.circle', function(){
        // Add a new square with the clicked on circle classes, add it as the first column
        $('.squares').append("<div class='col'><div class='square " + currentColor(this)[0] + "'></div><p class='" + currentColor(this)[1] + " d-none'>" + currentColor(this)[2] + "</p></div>");
        // When a circle is clicked, this will remove the circle from the DOM
        $(this).parent("div").remove();

        circlesEffects();
        squaresEffects();
    });

     // Square on click function for the creation a circle
    $('.squares').on('click', '.square', function(){    
        // Add a new circle with the clicked on squares classes, add it as the first column
        $('.circles').prepend("<div class='col'><div class='circle " + currentColor(this)[0] + "'></div><p class='" + currentColor(this)[1] + " d-none'>" + currentColor(this)[2] + "</p></div>");

        // When a square is clicked, this will remove the square from the DOM
        $(this).parent("div").remove();

        circlesEffects();
        squaresEffects();

    });


    // Remove display:hidden class that is on the shapes label
    function circlesEffects() {
        $(".circle").mouseover(function() {
            $(this).siblings("p").removeClass("d-none");
            $(".circle").not(this).css("opacity","0.5");
        });

        // Add back the css class display:hidden that was previously hidden
        $(".circle").mouseleave(function() {
            $(this).siblings("p").addClass("d-none", 1000);
            $(".circle").not(this).css("opacity","1");
        });

    }

    // Remove display:hidden class that is on the shapes label
    function squaresEffects() {
        $(".square").mouseover(function() {
            $(this).siblings("p").removeClass("d-none");
            $(".square").not(this).css("opacity","0.5");
        });

        // Add back the css class display:hidden that was previously hidden
        $(".square").mouseleave(function() {
            $(this).siblings("p").addClass("d-none", 1000);
            $(".square").not(this).css("opacity","1");
        });

    }

});

