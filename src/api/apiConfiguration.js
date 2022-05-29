const apiConfiguration = {
    url: 'https://api.themoviedb.org/3/',
    apiKey: '075e2fec2cd8be49139434941af9c517',
    originalImage: (imagePath) => `https://image.tmdb.org/t/p/original/${imagePath}`,
    image: (imagePath) => `https://image.tmdb.org/t/p/w500${imagePath}`
}

export default apiConfiguration