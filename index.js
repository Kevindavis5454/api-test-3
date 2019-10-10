'use strict';

function getDogImage() {
    const multipleDogImages = "https://dog.ceo/api/breed/";
    let howManyDogs = $('#dog-breed').val();
    fetch(multipleDogImages + howManyDogs + "/images/random")
        .then(response => response.json())
        .then(responseJson =>
            displayResults(responseJson))
        .catch(error => alert ('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    if(responseJson.status === 'error') {
        $('.results').append(`<p>Breed not found</p>`);}
    else {
        const eachDogImage = $(`
            <img src="${responseJson.message}" alt="random dog image" class="random-dog-image">
            `);
        $('.results').append(eachDogImage);
    }

    $('.results').removeClass('hidden');
}


function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        $('.random-dog-image').remove();
        $('.results p').remove();
        getDogImage();
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});