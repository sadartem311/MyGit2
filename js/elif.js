"use strict"
const numberOfFilms=+prompt("Сколько фильмов вы уже посмотрели","");

const personalMovieBD = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

for(let i=0;i<2;i++){
    const endFilm=prompt("Один из последнх просмотренных фильмов: ",""),
          star=prompt("На сколько оцените его?","");

    if (endFilm != null && star != null && endFilm != "" && star != "" && endFilm.length<50){
        
        personalMovieBD.movies[endFilm]=star;
        console.log("done");
    } else{
        console.log("no syntaxis");
        i--;
    }
}

if (personalMovieBD.count<10){
    console.log("Просмотренно довольно мало фильмов");
} else if (personalMovieBD.count>10 && personalMovieBD.count<30){
    console.log("Вы классический зритель");
} else if (personalMovieBD.count>30){
    console.log("Вы киноман, кино-ваша страсть");
} else {
    console.log("Произошла ошибка");
}
console.log(personalMovieBD);