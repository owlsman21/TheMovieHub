const movies = [
    { title: "Movie 1", image: "https://picsum.photos/200/300", link: "https://example.com/movie1" },
    { title: "Movie 2", image: "https://picsum.photos/200/301", link: "https://example.com/movie2" },
    { title: "Movie 3", image: "https://picsum.photos/200/302", link: "https://example.com/movie3" },
    { title: "Movie 4", image: "https://picsum.photos/200/303", link: "https://example.com/movie4" },
    { title: "Movie 5", image: "https://picsum.photos/200/304", link: "https://example.com/movie5" },
    { title: "Movie 6", image: "https://picsum.photos/200/305", link: "https://example.com/movie6" },
    { title: "Movie 7", image: "https://picsum.photos/200/306", link: "https://example.com/movie7" },
    { title: "Movie 8", image: "https://picsum.photos/200/307", link: "https://example.com/movie8" },
    { title: "Movie 9", image: "https://picsum.photos/200/308", link: "https://example.com/movie9" },
    { title: "Movie 10", image: "https://picsum.photos/200/309", link: "https://example.com/movie10" },
    { title: "Movie 11", image: "https://picsum.photos/200/310", link: "https://example.com/movie11" },
    { title: "Movie 12", image: "https://picsum.photos/200/311", link: "https://example.com/movie12" },
    { title: "Movie 13", image: "https://picsum.photos/200/312", link: "https://example.com/movie13" },
    { title: "Movie 14", image: "https://picsum.photos/200/313", link: "https://example.com/movie14" },
    { title: "Movie 15", image: "https://picsum.photos/200/314", link: "https://example.com/movie15" },
    { title: "Movie 16", image: "https://picsum.photos/200/315", link: "https://example.com/movie16" },
    { title: "Movie 17", image: "https://picsum.photos/200/316", link: "https://example.com/movie17" },
    { title: "Movie 18", image: "https://picsum.photos/200/317", link: "https://example.com/movie18" },
    { title: "Movie 19", image: "https://picsum.photos/200/318", link: "https://example.com/movie19" },
    { title: "Movie 20", image: "https://picsum.photos/200/319", link: "https://example.com/movie20" },
    { title: "Movie 21", image: "https://picsum.photos/200/320", link: "https://example.com/movie21" },
    { title: "Movie 22", image: "https://picsum.photos/200/321", link: "https://example.com/movie22" },
    { title: "Movie 23", image: "https://picsum.photos/200/322", link: "https://example.com/movie23" },
    { title: "Movie 24", image: "https://picsum.photos/200/323", link: "https://example.com/movie24" },
    { title: "Movie 25", image: "https://picsum.photos/200/324", link: "https://example.com/movie25" },
    { title: "Movie 26", image: "https://picsum.photos/200/325", link: "https://example.com/movie26" },
    { title: "Movie 27", image: "https://picsum.photos/200/326", link: "https://example.com/movie27" },
    { title: "Movie 28", image: "https://picsum.photos/200/327", link: "https://example.com/movie28" },
    { title: "Movie 29", image: "https://picsum.photos/200/328", link: "https://example.com/movie29" },
    { title: "Movie 30", image: "https://picsum.photos/200/329", link: "https://example.com/movie30" },
    { title: "Movie 31", image: "https://picsum.photos/200/330", link: "https://example.com/movie31" },
    { title: "Movie 32", image: "https://picsum.photos/200/331", link: "https://example.com/movie32" },
    { title: "Movie 33", image: "https://picsum.photos/200/332", link: "https://example.com/movie33" },
    { title: "Movie 34", image: "https://picsum.photos/200/333", link: "https://example.com/movie34" },
    { title: "Movie 35", image: "https://picsum.photos/200/334", link: "https://example.com/movie35" },
    { title: "Movie 36", image: "https://picsum.photos/200/335", link: "https://example.com/movie36" },
    { title: "Movie 37", image: "https://picsum.photos/200/336", link: "https://example.com/movie37" },
    { title: "Movie 38", image: "https://picsum.photos/200/337", link: "https://example.com/movie38" },
    { title: "Movie 39", image: "https://picsum.photos/200/338", link: "https://example.com/movie39" },
    { title: "Movie 40", image: "https://picsum.photos/200/339", link: "https://example.com/movie40" },
  ];
  
  let currentPage = 1;
  const moviesPerPage = 20;
  
  function generateMovieGrid(movies, page) {
    const movieGrid = document.querySelector(".movie-grid");
    movieGrid.innerHTML = "";
  
    const start = (page - 1) * moviesPerPage;
    const end = start + moviesPerPage;
  
    movies.slice(start, end).forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");
  
      const image = document.createElement("img");
      image.src = movie.image;
      image.alt = movie.title;
  
      const link = document.createElement("a");
      link.href = movie.link;
      link.target = "_blank";
      link.appendChild(image);
  
      movieElement.appendChild(link);
      movieGrid.appendChild(movieElement);
    });
  }
  
  function generatePaginationLinks(movies) {
    const pagination = document.querySelector(".pagination");
    pagination.innerHTML = "";
  
    const totalPages = Math.ceil(movies.length / moviesPerPage);
  
    for (let i = 1; i <= totalPages; i++) {
      const link = document.createElement("a");
      link.href = "#";
      link.textContent = i;
      link.addEventListener("click", () => {
        currentPage = i;
        generateMovieGrid(movies, currentPage);
        updateActiveLink(currentPage);
      });
  
      pagination.appendChild(link);
    }
  
    updateActiveLink(1);
  }
  
  function updateActiveLink(page) {
    const links = document.querySelectorAll(".pagination a");
    links.forEach((link) => link.classList.remove("active"));
    links[page - 1].classList.add("active");
  }
  
  generateMovieGrid(movies, currentPage);
  generatePaginationLinks(movies);