// ==UserScript==
// @name           Ape
// @namespace      http://darkcoder.xyz
// @match        https://www.torn.com/competition.php
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant          GM_xmlhttpRequest
// ==/UserScript==
setInterval (function () {
    var teamNames = ['lumberjacks', 'field-mice', 'trolls', 'millennials', 'dream-team', 'breakfast-club', 'band-of-mothers', 'hillbillies',
                     'revengers', 'punchbags', 'cowboys', 'keyboard-warriors'];
    var data = [
        {
           'name': 'lumberjacks',
           'score': "Waiting for data"
        },
        {
           'name': 'field-mice',
           'score': "Waiting for data"
        },
        {
           'name': 'trolls',
           'score': "Waiting for data"
        },
        {
           'name': 'millennials',
           'score': "Waiting for data"
        },
        {
           'name': 'dream-team',
           'score': "Waiting for data"
        },
        {
           'name': 'breakfast-club',
           'score': "Waiting for data"
        },
        {
           'name': 'band-of-mothers',
           'score': "Waiting for data"
        },
        {
           'name': 'hillbillies',
           'score': "Waiting for data"
        },
         {
           'name': 'revengers',
           'score': "Waiting for data"
        },
        {
           'name': 'punchbags',
           'score': "Waiting for data"
        },
        {
           'name': 'cowboys',
           'score': "Waiting for data"
        },
        {
           'name': 'keyboard-warriors',
           'score': "Waiting for data"
        },
    ]
    for(var i = 0; i < teamNames.length; i++){
        teamName = teamNames[i];
        score = document.querySelector("#" + teamNames[i] + " > ul > li.score > span");
        if(score){
            for (var k in data){
                if(data[k]['name'] == teamName){
                    data[k]['score'] = parseInt(score.innerText.replace(',', ""));
                }
            }
        }
    }
        GM_xmlhttpRequest ( {
        method:     "POST",
        url:        "http://darkcoder.pythonanywhere.com/api/",
        data:       JSON.stringify ( data ),
        headers:    {
            "Content-Type": "application/json"
        },
        onload:     function (response) {
            console.log ("POSTED");
            console.log(data);
        }
    }
  );


}, 10000);
