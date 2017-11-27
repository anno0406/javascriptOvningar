

function renderMovie(movie) {
    document.getElementById("title").innerText = movie.title;
    document.getElementById("image").src = movie.image;
    document.getElementById("brodtxt").innerText = movie.brodtext;

    var fetstrang = "";
    
    for (let i = 0; i < movie.listActors.length; i++) {
        fetstrang = fetstrang + "<li>" + movie.listActors[i] + "</li>";
    }
    document.getElementById("namelist").innerHTML = fetstrang;
}



function changeStarRating(grade){
    console.log("whuafhke", grade)
    for(let i = 1; i<= 5; i++) {
        let star = document.getElementById(i);
        if (i<= grade) {
            star.classList.add("filled")
        }
        else {
            star.classList.remove("filled")
        }
    }
}

for (let i = 1; i<= 5; i++){
    let star = document.getElementById(i);
    star.addEventListener("click", function(){
        changeStarRating(i); });
}


renderMovie(movieData);