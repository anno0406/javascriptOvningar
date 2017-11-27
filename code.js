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

renderMovie(movieData);