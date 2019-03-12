var fetchResults = {};
var menu1 = {};
var menu2 = {};
var menu3 = {};
var menu4 = {};

document.onreadystatechange = function () {
    init();
}

async function init() {
  

    apps();
    dinner();
    dessert();
    brunch();
}

async function getMenu(id) {
    // Format a url
    let url = 'https://entree-f18.herokuapp.com/v1/menu/' + id;

    var d = await fetch(url)
        .then(status)
        .then(json)
        .then(function (data) {
            console.log('Request succeeded with JSON response', data);
            fetchResults = data;
        }).catch(function (error) {
            console.log('Request failed', error);
        });

    return fetchResults;
}

function updateMenu(menu_holder, menu) {
    var output = document.getElementById(menu_holder);
    output.style.display = 'block';
    var str = "<ul>";
    for (var i = 0; i < menu.menu_items.length; i++) {
        var menu_item = menu.menu_items[0];
        str += "<li>" + menu_item.description + "</li>";
    }
    str += "</ul>";
    output.innerHTML = str;
}

// once
function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

function json(response) {
    return response.json()
}



async function apps() {
    var menu1 = await getMenu(8);
    console.log(menu1);
    //document.getElementById("app_section").innerHTML=menu1.menu_items[0].description;

    var appstr = "";



    appstr += "<div class='col' id='app_row'>";
    appstr += "<center><h1>APPETIZERS </h1></center>";
    appstr += "<center><p><strong> $7.99 Each </strong></p></center>";
    appstr += "<p><center><ion-icon name='nutrition'></ion-icon> = Vegan <ion-icon name='flame'></ion-icon>  = Spicy </center><br>"



    for (var i = 0; i < 8; i++) {

        appstr += "<p align='center'>" + menu1.menu_items[i].description;
        appstr += " <span class='badge badge-pill badge-light'>";
        var icon = "<ion-icon name='nutrition'></ion-icon>";
        if ((Math.random() <= .20)) {
            appstr += icon;

        }
        appstr += "</span>";
        appstr += "</p>";
    }

    appstr += "</div>";

    document.getElementById("app_section").innerHTML = appstr;



}
async function dinner() {
    var menu2 = await getMenu(8);

    var dinnerstr = "";


    dinnerstr += "<div class='col' id='dinner_row'>";
    dinnerstr += "<center><h1>MAIN </h1></center>";
    dinnerstr += "<center><p><strong>1 for $16.99 or 2 for $29.99</strong></p></strong>";


    for (var i = 0; i < 8; i++) {
        dinnerstr += "<p align='center'>" + menu2.menu_items[i].description;
        dinnerstr += " <span class='badge badge-pill badge-light'>";
        var flame_icon = "<ion-icon name='flame'></ion-icon>";

        if ((Math.random() <= .30)) {
            dinnerstr += flame_icon;

        }
        dinnerstr += "</span>";
        dinnerstr += "</p>";
    }



    dinnerstr += "</div>";


    document.getElementById("dinn_section").innerHTML = dinnerstr;

}

async function dessert() {
    var menu3 = await getMenu(4);

    var dessert_str = "";


    dessert_str += "<div class='col' id='dessert_row'>";
    dessert_str += "<center><h1>SWEETS </h1></center>";
    dessert_str += "<center><p><strong> $5.99 Each</strong></p></center>";

    for (var i = 0; i < 4; i++) {
        dessert_str += "<p align='center'>" + menu3.menu_items[i].description + "</p>";
    }

    dessert_str += "</div>";

    document.getElementById("dessert_section").innerHTML = dessert_str;

}



async function brunch() {
    var menu4 = await getMenu(8);

    var brunch_str = "";


    brunch_str += "<div class='col' id='dessert_row'>";
    brunch_str += "<center><h1>BRUNCH</h1></center>";
    brunch_str += "<center><p><strong>Pick 3 $9.99</strong></p></center>";

   


    for (var i = 0; i < 8; i++) {
        brunch_str += "<p align='center'>" + menu4.menu_items[i].description;
        brunch_str += " <span class='badge badge-pill badge-light'>";
        var fire_icon = "<ion-icon name='flame'></ion-icon>";
        var carrot_icon = "<ion-icon name='nutrition'></ion-icon>";

        if ((Math.random() <= .30)) {
            brunch_str += fire_icon;

        }
        if ((Math.random() <= .30)) {
            brunch_str += carrot_icon;

        }
        

        brunch_str += "</span>";
        brunch_str += "</p>";
    }


    brunch_str += "</div>";

    document.getElementById("brunch_section").innerHTML = brunch_str;




}

