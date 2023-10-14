searchFormBtn.addEventListener('click', () => {
    location.hash = '#search=' + searchFormInput.value;
})
trendingBtn.addEventListener('click', () => {
    location.hash = '#trends'
})
arrowBtn.addEventListener('click', () => {
    history.back()
    location.hash = '#home'
})


window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

function navigator(){

    if (location.hash.startsWith('#trends')){
        trendsPage()
    } else if(location.hash.startsWith('#search=')){
        searchPage()
    } else if(location.hash.startsWith('#movie=')){
        movieDetailsPage()
    } else if(location.hash.startsWith('#category=')){
        categoriesPage()
    } else {
        homePage()
    }

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}


// Pages
function homePage(){
    console.log('Home!!')

    // Modified inactives
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.remove('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.remove('inactive')

    //Sections
    trendingPreviewSection.classList.remove('inactive')
    categoriesPreviewSection.classList.remove('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.add('inactive')

    getTrendingMoviesPreview()
    getCategoriesMoviesPreview()
}
function categoriesPage(){
    console.log('Categories!!')

     // Modified inactives
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

    //Sections
    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

    // category, id-name
    const [_, categoryData] = location.hash.split('=');
    const [categoryId, categoryName] = categoryData.split('-');
    const [porcen, nameREAL] = categoryName.split('20');
    const [idreal, porcentaje] = categoryId.split('%');

    headerCategoryTitle.innerHTML = nameREAL;

    getMoviesByCategory(idreal)

}
function movieDetailsPage(){
    console.log('Movies!!')

    // Inactive
    headerSection.classList.add('header-container--long');
    // headerSection.style.background = '';
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.add('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.add('inactive')

    //Sections
    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.remove('inactive')

    // movie, id
    const [_, movieId] = location.hash.split('=');
    console.log(movieId)
    getMovieById(movieId);

}
function searchPage(){
    console.log('Search!!')

     // Modified inactives
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.remove('inactive')

    //Sections
    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

    // search, busqueda
    const [_, query] = location.hash.split('=');
    getMoviesBySearch(query);

}
function trendsPage(){
    console.log('Trends!!')

    // Modified inactives
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

    //Sections
    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

    headerCategoryTitle.innerHTML = "Tendencias";
    getTrendingMovies()
}