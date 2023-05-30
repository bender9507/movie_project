

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

            // class="movie-card"
            const temp = document.createElement('div');
            temp.className = 'movie-card';

            temp.innerHTML = `<div class="img">
                                <img src="https://image.tmdb.org/t/p/w500${image}">
                            </div>
                            <div class="card-text">
                                <h3>${title}</h3>
                                <p>${overview}</p>
                                <h2>${vote}</h2>
                            </div>`;
            document.querySelector('.card-list').append(temp);
        });
    };
    cardlist(rows);

}

fetchMovieData();

// const handleSearch = (event) => {
//     //새고고침 현상을 막아주나?
//     event.preventDefault();

//     const searchInput = document.querySelector("#search-input");
//     //검색창에 입력된 값을 모두 소문자로 바꿔라?
//     const searchKeyword = searchInput.value.toLowerCase();

//     const movieCards = document.querySelectorAll(".movie-card");
//     
//영화 카드들 하나하나 돌면서 카드의 제목을 소문자로 

//     movieCards.forEach((card) => {
//         const title = card.querySelector("h3").textContent.toLowerCase();

//         //indexOf() 함수 : 문자열에서 특정 문자를 찾아 그 문자가 첫번째로 나타나는 위치 index로 리턴
//         //찾는 문자열이 없으면 -1을 리턴, 문자열을 찾을 때 대소문자를 구분
//         //영화 제목에서 searchKeyword에 입력한 값을 찾았는데 있으면 "block" (검색 결과 나옴)
//         //입력한 값이 없으면 "none" (검색 결과 없음)
//         if (title.indexOf(searchKeyword) !== -1) {
//             card.style.display = "block";

//         } else {
//             card.style.display = "none";
//             // alert(" 검색결과가 없습니다.");
//             // window.location.reload()
//         }

//     });

// };
const inputfun = document.querySelector("#search-button");
inputfun.addEventListener("click", function (event) {


    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const movieCards = document.querySelectorAll(".movie-card");


    // console.log(movieCards);
    // console.log(searchInput);

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