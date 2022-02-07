const auth_key = 'fa833309-9c6b-04b4-ad94-8513069b56a7:fx'
const target_lang = 'JA'



function translate(text) { $.ajax({
    url: 'https://api-free.deepl.com/v2/translate?' + 'auth_key=' + auth_key + '&text=' + text + '&target_lang=' + target_lang,
    dataType: 'json',
    type: 'GET'
})
.done(function (data) {
    console.log(data)
    console.log(data['translations']['0']['text']);
    console.log(data[0]);
    document.getElementById('result').innerText = data['translations']['0']['text']


})
.fail(function (data) {
    console.log('失敗しました')
});
}

function clickButton(){
    const text = document.getElementById('text-holder').value;
    translate(text);
}