const fetchMovieData = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzc2NmI4MWI3ZTdkOTdjNWM0NjI3ZjJkMTE0YTMwZCIsInN1YiI6IjY0NzBiMTg3MTNhMzIwMDBhNmM5ZjRmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hft_Db59UvKjF2XnR9jRMicc00uSfJ63EOWYWL7OTlQ'
        },
    };
    const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=ec766b81b7e7d97c5c4627f2d114a30d&language=en-US&page=1",
        options
    );

    const data = await response.json();
    let rows = data['results'];
    // console.log(rows);
    let cardlist = function (rows) {
        rows.forEach((a) => {
            let title = a['title'];
            let overview = a['overview'];
            let vote = a['vote_average'];
            let image = a['poster_path'];
            let id = a['id']

            // class="movie-card"
            const temp = document.createElement('div');
            temp.className = 'movie-card';

            temp.innerHTML = `<div class="img">
                                <img src="https://image.tmdb.org/t/p/w500${image}">
                            </div>
                            <div class="card-text">
                                <h3>${title}</h3>
                                <p>${overview}</p>
                                </br>
                                <h2>${vote}</h2>
                            </div>`;
            document.querySelector('.card-list').append(temp);
            
            temp.addEventListener("click", function (event) {
                // ``변수나 특정한 값을 문자열 안에 
                alert(`영화 id: ${id}`);
            });
        });
    };
    cardlist(rows);

    //querySelector로 받은 element배열에 addEventListener 기능 바로 붙일 수 없음, 각각의 element에 붙여줘야 함
    // document.querySelector(".movie-card").addEventListener("click", function (event) {
    //     alert("안녕");
    // });

};


fetchMovieData();


const inputfun = document.querySelector("#search-button");
inputfun.addEventListener("click", function (event) {


    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const movieCards = document.querySelectorAll(".movie-card");

    movieCards.forEach((card) => {
        const title = card.querySelector("h3").textContent.toLowerCase();

        console.log(title);

        if (title.indexOf(searchInput) !== -1) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    })
});