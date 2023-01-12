const listOfBands = JSON.parse(`["The Beatles","The Rolling Stones","Bob Dylan","David Bowie","Led Zeppelin","Bruce Springsteen","Prince","The Who","Elvis Presley","Jimi Hendrix","The Beach Boys","R.E.M.","The Velvet Underground","Marvin Gaye","U2","The Clash","Nirvana","Radiohead","Neil Young","Stevie Wonder","Pink Floyd","Elvis Costello","Bob Marley and The Wailers","Van Morrison","Aretha Franklin","Talking Heads","The Smiths","The Byrds","Public Enemy","The Doors","Miles Davis","James Brown","The Kinks","Beastie Boys","Creedence Clearwater Revival","Otis Redding","Michael Jackson","Beck","Sex Pistols","Sly and the Family Stone","Roxy Music","Johnny Cash","John Lennon","Pixies","Joni Mitchell","Blur","Ramones","Madonna","Lou Reed","Sonic Youth","Simon and Garfunkel","Joy Division","Oasis","OutKast","The Band","New Order","Ray Charles","The Police","Kraftwerk","Al Green","Steely Dan","John Coltrane","P J Harvey","Björk","Massive Attack","The Jam","Chuck Berry","The Stooges","Tom Waits","The White Stripes","Eminem","Frank Sinatra","The Cure","Parliament/Funkadelic","AC/DC","Metallica","Brian Eno","Buddy Holly & The Crickets","Captain Beefheart and His Magic Band","Frank Zappa/The Mothers of Invention","Black Sabbath","Fleetwood Mac","Guns 'n' Roses","Nick Cave","Primal Scream","Pavement","Missy Misdemeanor Elliott","Patti Smith","Little Richard","Pulp","The Eagles","Paul Simon","Elton John","Run-D.M.C.","Blondie","Leonard Cohen","Grateful Dead","Nick Drake","The Temptations","Pet Shop Boys","Franz Ferdinand","T. Rex","Hüsker Dü","Thelonious Monk","Wilco","The Smashing Pumpkins","Charles Mingus","Rod Stewart","Pearl Jam","Sam Cooke","Aerosmith","Duke Ellington","Queen","The Everly Brothers","Randy Newman","Muddy Waters","Cream","The Jesus and Mary Chain","The Strokes","The Chemical Brothers","The Specials","The Stone Roses","Smokey Robinson and The Miracles","Kate Bush","Kanye West","Pretenders","My Bloody Valentine","Jefferson Airplane","Crosby, Stills, Nash (& Young)","Big Star","Grandmaster Flash","Roy Orbison","Television","Deep Purple","Jay-Z","Janis Joplin/Big Brother and The Holding Company","The Replacements","Coldplay","The Flaming Lips","Peter Gabriel","Sonny Rollins","De La Soul","Ornette Coleman","The Streets","The Verve","Curtis Mayfield","Red Hot Chili Peppers","Santana","Morrissey","Derek and The Dominos","The Supremes","Dr. Dre","Manic Street Preachers","Yo La Tengo","XTC","Lynyrd Skynyrd","Jackson Browne","Depeche Mode","Carole King","Hank Williams","Weezer","Ella Fitzgerald","Love","Chic","Jerry Lee Lewis","Nine Inch Nails","Portishead","A Tribe Called Quest","King Crimson","The Prodigy","Herbie Hancock","Queens of the Stone Age","Van Halen","Suede","The Four Tops","LL Cool J","Eric B. & Rakim","Dusty Springfield","Echo and the Bunnymen","Underworld","The Bee Gees","The Allman Brothers Band","Public Image Ltd.","Wire","Tom Petty","Happy Mondays","Iggy Pop","N.W.A.","Elliott Smith","Motörhead","The Isley Brothers","Daft Punk","Bo Diddley","Gram Parsons","Soundgarden","Notorious B.I.G.","Belle and Sebastian","Jimmy Cliff","Howlin' Wolf"]`);

console.log('testing')
//document.addEventListener('DOMContentLoaded', function() {    
const nodeList = document.querySelectorAll('li, a, p, div, h1, h2, h3, h4, h5, h6, div, span')
let bandsOnPage = new Set();
    for (const item in nodeList){
    if(nodeList[item].innerText){
        //console.log(typeof nodeList[item].innerText)
        for (const band in listOfBands){
            if (nodeList[item].innerText.includes(listOfBands[band])){
                bandsOnPage.add(listOfBands[band]);
                //console.log("band "+ listOfBands[band] +" // node "+ nodeList[item].innerText);
                //chrome.tabs.create({url: "http://youtube.com", active: false }) 
                }
            }
            
        };
    }
// randomly choose a band match from the page
bandsOnPage = Array.from(bandsOnPage);
console.log(bandsOnPage);
const bandToPlay = bandsOnPage[Math.floor(Math.random() * bandsOnPage.length)];
console.log('Playing : '+ bandToPlay);
setTimeout(function(){
    const iframe = document.createElement('iframe');
    iframe.src = "https://www.youtube.com/embed/umF4uIHsVhM?autoplay=1"
    //newDiv.innerHTML = '<iframe width="560" height=“315” src= title=“YouTube video player” allow="autoplay" frameborder=“0"; autoplay;</iframe>';
    document.body.appendChild(iframe);
    }, 7500);
//});
 
//console.log(nodeList)

// Create a new DOMParser object
// var html = document.documentElement;
// var nodes = html.childNodes;

// for (var i = 0; i < nodes.length; i++) {
//     console.log("IIIII "+i)
//     var node = nodes[i];
//     console.log(node);
// }

// let parser = new DOMParser();
// let parsedHtml = parser.parseFromString(document.documentElement, 'text/html');

// // The src of the first image:
// let firstImg = parsedHtml.images[0].src;

// The li elements of the second ul element:
// let liElements = parsedHtml.getElementsByTagName("ul")[1].children;