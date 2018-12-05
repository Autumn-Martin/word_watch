import $ from 'jquery'

$(document).ready(() => {
  $('.word-count').html('');

  getTopWord()

  $('.breakDownButton').click( () => {

    let words = $('.inputField').val()
    let wordsArr = words.split(" ")
    $('.breakDance').html('')

    addWords(wordsArr)
  })

})

const getTopWord = () => {
  fetch(`https://wordwatch-api.herokuapp.com/api/v1/top_word`)
    .then(response => response.json())
    .then(data => {
      $('.word-count').append(`
        <p>${Object.keys(data.word)}: ${Object.values(data.word)}</p>`)
    })
  .catch(error => console.log({ error }))
}

const addWords = (wordsArr) => {
  for (let word of wordsArr) {
    const pack = {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        word: { value: word }
      }),
    }
    fetch(`https://wordwatch-api.herokuapp.com/api/v1/words`, pack)
      .then(response => response.json())
      .then(data => {

        $('.breakDance').append(`</br><p>${data["message"]}</p>`)
      })
  }
}
