

function renderMovie(movie) {
    $("#title").text(movie.title);
    $("#image").attr("src", movie.image);
    $("#brodtxt").text(movie.brodtext);


    var fetstrang = "";
    
    for (let i = 0; i < movie.listActors.length; i++) {
        fetstrang += "<li>" + movie.listActors[i] + "</li>";
    }
    $("#namelist").html(fetstrang);
}



function changeStarRating(grade){

    for(let i = 1; i<= 5; i++) {
        if (i<= grade) {
            $("#" + i).addClass("filled")
        }
        else {
           $("#"+ i).removeClass("filled")
        }
    }
}

for (let i = 1; i<= 5; i++){
    $("#"+i).click(function(){changeStarRating(i)});
}


renderMovie(movieData);