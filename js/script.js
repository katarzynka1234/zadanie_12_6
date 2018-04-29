$(document).ready(function(){

    var url = 'https://restcountries.eu/rest/v2/name/';
    var countriesList = $('#countries');
    var countryNameinp = $('#country-name');

    $('#search').click(searchCountries);
    $('#country-name').focus(clearImput);

    function searchCountries() {
        var countryName = $('#country-name').val();
        if(!countryName.length) countryName = 'Poland';
        $.ajax({
            url: url + countryName,
            method: 'GET',
            success: showCountriesList
        });
    };

    function showCountriesList(resp) {
        countriesList.empty();

        resp.forEach(function(item) {
            $(countriesList).append(
                "<li>" +
                "<h1>" + item.name + "</h1>" +
                "<img src=' " + item.flag + " '>" +
                "<p class='alt_spelings'><span>All spellings:</span> " + item.altSpellings + "</p>" +
                "<p class='capital'><span>Capital: </span> " + item.capital + "</p>" +
                "<p class='code'><span>Code ISO:</span> " + item.alpha2Code + "</p>" +
                "<p class='region'><span>Region: </span> " + item.region + "</p>" +
                "<p class='subregion'><span>Subregion: </span> " + item.subregion + "</p>" +              
                "<p class='area'><span>Area: </span> " + item.area + "km2</p>" +
                //"<p class='language'>Languages: " + item.languages.name + "</p>" +
                "<p class='population'><span>Population: </span> " + item.population + "</p>" +
                "</li>");                
     });
    };
function clearImput() {
    countryNameinp.val("");
}


});



// function showCountriesList(resp) {
//     countriesList.empty();

//     resp.forEach(function (item) {
//         $(countriesList).append(
//             "<li>" +
//             "<h1>" + item.name + "</h1>" +
//             "<img src=' " + item.flag + "  '>" +
//             "<h2> <span>Capital:</span>" + item.capital + "</h2>" +
//             "<p class='alt_spelings'> <span> Alt spellings: </span>" + item.altSpellings + "</p>" + 
//             "<p class='region'> <span>Region:</span> " + item.region + "</p>" +
//             "<p class='population'> <span>Population:</span> " + item.population + "</p>" +
//             "<p class='area'><span>Area: </span>"  + item.area + " km</p>" +
//             "<p class='languages'> <span>Language:</span> " + item.languages + "</p>" +
//             "<p class='borders'> <span> Boreders:</span>" + item.borders + "</p>" +
//             "</li>");
//     });
// }

// function clearImput() {
//     countryNameinp.val("");
// }

// });

