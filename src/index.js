import $ from 'jquery'

$(document).ready(() => {
  $('.word-count').html('');

  fetch(`https://wordwatch-api.herokuapp.com/api/v1/top_word`)
    .then(response => response.json())
    .then(data => {
      $('.word-count').append(`
        <p>${Object.keys(data.word)}: ${Object.values(data.word)}</p>`)
    })
  .catch(error => console.log({ error }))

})

$('.breakDownButton').click( () => {
})
