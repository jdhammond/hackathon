// const listOfBands = JSON.parse(`["The Beatles","The Rolling Stones","Bob Dylan","David Bowie","Led Zeppelin","Bruce Springsteen","Prince","The Who","Elvis Presley","Jimi Hendrix","The Beach Boys","R.E.M.","The Velvet Underground","Marvin Gaye","U2","The Clash","Nirvana","Radiohead","Neil Young","Stevie Wonder","Pink Floyd","Elvis Costello","Bob Marley and The Wailers","Van Morrison","Aretha Franklin","Talking Heads","The Smiths","The Byrds","Public Enemy","The Doors","Miles Davis","James Brown","The Kinks","Beastie Boys","Creedence Clearwater Revival","Otis Redding","Michael Jackson","Beck","Sex Pistols","Sly and the Family Stone","Roxy Music","Johnny Cash","John Lennon","Pixies","Joni Mitchell","Blur","Ramones","Madonna","Lou Reed","Sonic Youth","Simon and Garfunkel","Joy Division","Oasis","OutKast","The Band","New Order","Ray Charles","The Police","Kraftwerk","Al Green","Steely Dan","John Coltrane","P J Harvey","Björk","Massive Attack","The Jam","Chuck Berry","The Stooges","Tom Waits","The White Stripes","Eminem","Frank Sinatra","The Cure","Parliament/Funkadelic","AC/DC","Metallica","Brian Eno","Buddy Holly & The Crickets","Captain Beefheart and His Magic Band","Frank Zappa/The Mothers of Invention","Black Sabbath","Fleetwood Mac","Guns 'n' Roses","Nick Cave","Primal Scream","Pavement","Missy Misdemeanor Elliott","Patti Smith","Little Richard","Pulp","The Eagles","Paul Simon","Elton John","Run-D.M.C.","Blondie","Leonard Cohen","Grateful Dead","Nick Drake","The Temptations","Pet Shop Boys","Franz Ferdinand","T. Rex","Hüsker Dü","Thelonious Monk","Wilco","The Smashing Pumpkins","Charles Mingus","Rod Stewart","Pearl Jam","Sam Cooke","Aerosmith","Duke Ellington","Queen","The Everly Brothers","Randy Newman","Muddy Waters","Cream","The Jesus and Mary Chain","The Strokes","The Chemical Brothers","The Specials","The Stone Roses","Smokey Robinson and The Miracles","Kate Bush","Kanye West","Pretenders","My Bloody Valentine","Jefferson Airplane","Crosby, Stills, Nash (& Young)","Big Star","Grandmaster Flash","Roy Orbison","Television","Deep Purple","Jay-Z","Janis Joplin/Big Brother and The Holding Company","The Replacements","Coldplay","The Flaming Lips","Peter Gabriel","Sonny Rollins","De La Soul","Ornette Coleman","The Streets","The Verve","Curtis Mayfield","Red Hot Chili Peppers","Santana","Morrissey","Derek and The Dominos","The Supremes","Dr. Dre","Manic Street Preachers","Yo La Tengo","XTC","Lynyrd Skynyrd","Jackson Browne","Depeche Mode","Carole King","Hank Williams","Weezer","Ella Fitzgerald","Love","Chic","Jerry Lee Lewis","Nine Inch Nails","Portishead","A Tribe Called Quest","King Crimson","The Prodigy","Herbie Hancock","Queens of the Stone Age","Van Halen","Suede","The Four Tops","LL Cool J","Eric B. & Rakim","Dusty Springfield","Echo and the Bunnymen","Underworld","The Bee Gees","The Allman Brothers Band","Public Image Ltd.","Wire","Tom Petty","Happy Mondays","Iggy Pop","N.W.A.","Elliott Smith","Motörhead","The Isley Brothers","Daft Punk","Bo Diddley","Gram Parsons","Soundgarden","Notorious B.I.G.","Belle and Sebastian","Jimmy Cliff","Howlin' Wolf"]`);

const listOfBands = {'Beatles': 'https://www.youtube.com/watch?v=NCtzkaL2t_Y', 'Rolling Stones': 'https://www.youtube.com/watch?v=SGyOaCXr8Lw', 'Prince': 'https://www.youtube.com/watch?v=UG3VcCAlUgE', 'Dylan': 'https://www.youtube.com/watch?v=yLIXTf_5lLU', 'David Bowie': 'https://www.youtube.com/watch?v=iYYRH4apXDo', 'Led Zeppelin': 'https://www.youtube.com/watch?v=yCqjCIZ4kFU', 'Beck': 'https://www.youtube.com/watch?v=YgSPaXgAdzE', 'Springsteen': 'https://www.youtube.com/watch?v=l2gGXlW6wSY', 'Nirvana': 'https://www.youtube.com/watch?v=hTWKbfoikeg', 'Pulp': 'https://www.youtube.com/watch?v=FeW3lIvXLTw', 'Who': 'https://www.youtube.com/watch?v=U2SNwtE-0Us', 'Elvis': 'https://www.youtube.com/watch?v=84pqAlp2mLI', 'Hendrix': 'https://www.youtube.com/watch?v=qFfnlYbFEiE', 'Beach Boys': 'https://www.youtube.com/watch?v=w2VvkoV8I54', 'R.E.M.': 'https://www.youtube.com/watch?v=0VAAS9xnS5U', 'U2': 'https://www.youtube.com/watch?v=thmcVMobt0s', 'Clash': 'https://www.youtube.com/watch?v=EfK-WX2pa8c', 'Radiohead': 'https://www.youtube.com/watch?v=0VAAS9xnS5U', 'Smiths': 'https://www.youtube.com/watch?v=29wGIR7bVwI', 'Talking Heads': 'https://www.youtube.com/watch?v=0VAAS9xnS5U', 'Blur': 'https://www.youtube.com/watch?v=SSbBvKaM6sk', 'Oasis': 'https://www.youtube.com/watch?v=bx1Bh8ZvH84', 'Police': 'https://www.youtube.com/watch?v=loNNSCXGL8E', 'Waits': 'https://www.youtube.com/watch?v=EtLVXBqfqBY', 'Sabbath': 'https://www.youtube.com/watch?v=0qanF-91aJo', 'Madonna': 'https://www.youtube.com/watch?v=GTxPUFWjOlQ', 'Outcast': 'https://www.youtube.com/watch?v=PWgvGjAhvIw', 'New Order': 'https://www.youtube.com/watch?v=mfI1S0PKJR8', 'Replacements': 'https://www.youtube.com/watch?v=nw3P1mMWIYM', 'The both': 'https://www.youtube.com/watch?v=nivz7x_TMK4', 'Simon and Garfunkel': 'https://www.youtube.com/watch?v=s3Wp_C0AHKk', 'Bowie': 'https://www.youtube.com/watch?v=TAJ99zaOYfM', 'Primal Scream': 'https://www.youtube.com/watch?v=neq4QhMtNFY', 'T. Rex': 'https://www.youtube.com/watch?v=vmJo6p5j9EY', 'Supremes': 'https://www.youtube.com/watch?v=bh4aFTe0bOo', 'Strokes': 'https://www.youtube.com/watch?v=b8-tXG8KrWs&list=RDEMnEXP45f9-1leBVapyLbirQ&start_radio=1', 'Specials': 'https://www.youtube.com/watch?v=lgCZN1rU5co&list=RDEMpSq2YwLbBI2EUox-3IV2ug&start_radio=1', 'Eagles': 'https://www.youtube.com/watch?v=Li2mX1D-UF8', 'Metallica': 'https://www.youtube.com/watch?v=tAGnKpE4NCI', 'Kiss': 'https://www.youtube.com/watch?v=ZhIsAZO5gl0', 'Heart': 'https://www.youtube.com/watch?v=Mum1LggB-hQ', 'Ramones': 'https://www.youtube.com/watch?v=bm51ihfi1p4', 'Radiohead': 'https://www.youtube.com/watch?v=0VAAS9xnS5U', 'Genesis': 'https://www.youtube.com/watch?v=Mez5SyB8zio', 'Muse': 'https://www.youtube.com/watch?v=FlCcoWRbnqE', 'Pixies': 'https://www.youtube.com/watch?v=N3oCS85HvpY', 'ABBA': 'https://www.youtube.com/watch?v=xFrGuyw1V8s', 'Coldplay': 'https://www.youtube.com/watch?v=0VAAS9xnS5U', 'Journey': 'https://www.youtube.com/watch?v=OMD8hBsA-RI', 'Queen': 'https://www.youtube.com/watch?v=9c7ajbJXRIo', 'Cream': 'https://www.youtube.com/watch?v=t_YLPcTOXpQ', 'Toto': 'https://www.youtube.com/watch?v=4b_rPoTnHog', 'Scorpions': 'https://www.youtube.com/watch?v=n4RjJKxsamQ', 'Foreigner': 'https://www.youtube.com/watch?v=r3Pr1_v7hsw', 'Chic': 'https://www.youtube.com/watch?v=XN66S55bqFw', 'Kansas': 'https://www.youtube.com/watch?v=P5ZJui3aPoQ', 'Styx': 'https://www.youtube.com/watch?v=e5MAg_yWsq8', 'Sublime': 'https://www.youtube.com/watch?v=AEYN5w4T_aM', 'Poison': 'https://www.youtube.com/watch?v=hgnhVcyLy1I', 'Train': 'https://www.youtube.com/watch?v=TRvoaUdx9FQ', 'Wham': 'https://www.youtube.com/watch?v=pIgZ7gMze7A', 'Sweet': 'https://www.youtube.com/watch?v=tqketmsRz1E', 'Pavement': 'https://www.youtube.com/watch?v=Gp97SAltkJk', 'Madness': 'https://www.youtube.com/watch?v=Ek0SgwWmF9w', 'Misfits': 'https://www.youtube.com/watch?v=5PZ2o3ekY9o', 'Cake': 'https://www.youtube.com/watch?v=8-svtP-8NH8', 'Rainbow': 'https://www.youtube.com/watch?v=6OFv566mj7s', 'Interpol': 'https://www.youtube.com/watch?v=Bp65oO8o_XA', 'Dr. John': 'https://www.youtube.com/watch?v=B3_bqcvDxvI', 'White Stripes': 'https://www.youtube.com/watch?v=0VAAS9xnS5U', 'Shins': 'https://www.youtube.com/watch?v=zYwCmcB0XMw', 'Animals': 'https://www.youtube.com/watch?v=tKmKr0iCsto', 'Cars': 'https://www.youtube.com/watch?v=MbeyvUM4ApY', 'Darkness': 'https://www.youtube.com/watch?v=RHQC4fAhcbU', 'Kinks': 'https://www.youtube.com/watch?v=4gmKaIU500I', 'Roots': 'https://www.youtube.com/watch?v=tqSZv2s-YuM', 'fugees': 'https://www.youtube.com/watch?v=qIYG5tczSD8','spoon': 'https://www.youtube.com/watch?v=IpT5SBg1Mmk', 'childish': 'https://www.youtube.com/watch?v=Kp7eSUU9oy8', 'America': 'https://www.youtube.com/watch?v=VYOjWnS4cMY', 'the band': 'https://www.youtube.com/watch?v=GhbClCDsrgA', 'Pearl Jam': 'https://www.youtube.com/watch?v=CxKWTzr-k6s', 'Smashing Pumpkins': 'https://www.youtube.com/watch?v=4aeETEoNfOg', 'Common': 'https://www.youtube.com/watch?v=OjHX7jf-znA'};

//const newWindow = window.open('background.html').blur()
// console.log(newWindow)
// window.focus();
console.log('testing')
//document.addEventListener('DOMContentLoaded', function() {    
const nodeList = document.querySelectorAll('li, a, p, div, h1, h2, h3, h4, h5, h6, div, span')
let bandsOnPage = new Set();
    for (const item in nodeList){
    if(nodeList[item].innerText){
        //console.log(typeof nodeList[item].innerText)
        for (const band in listOfBands){
            if (nodeList[item].innerText.includes(band) || nodeList[item].innerText.includes(band.toLowerCase())){
                bandsOnPage.add(band);
                
                nodeList[item].append('')
                //nodeList[item].style.backgroundColor = 'lightblue';
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
const iframe = document.createElement('iframe');
let url = listOfBands[bandToPlay] //+ '?enablejsapi=1';
//url = url.replace('watch?v=', 'embed');
// iframe.src = url;
// //newDiv.innerHTML = '<iframe width="560" height=“315” src= title=“YouTube video player” allow="autoplay" frameborder=“0"; autoplay;</iframe>';
// document.body.appendChild(iframe);
window.open(url);

// make youtube link and attach it somewhere on the page
// const url = listOfBands[bandToPlay] + '?autoplay=1';
// const linkDiv = document.createElement('a');
// const buttonDiv = document.createElement('button');
// linkDiv.href = url;
// linkDiv.setAttribute('id','yt-link');
// linkDiv.setAttribute("style","width:250px");
// linkDiv.setAttribute("style","height:250px");
//linkDiv.style.backgroundColor = 'lightblue'

// const randomTarget = document.body;

// console.log(randomTarget)
// randomTarget.appendChild(linkDiv);
// randomTarget.addEventListener('dblclick', function(){
//     this.window.open(url)
// }, once = true)


 
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