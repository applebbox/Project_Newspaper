var IntelIigence = [
    {
        imgSrc: 'images/astra1.gif',
        url: 'https://warhammer40k.fandom.com/',
        title: 'Warhammer 40K'
    },
    {
        imgSrc: 'images/astra2.gif',
        url: 'https://warhammer40k.fandom.com/',
        title: 'spacemarine2'
    },
    {   
        imgSrc: 'images/astra3.gif',
        url: 'https://warhammer40k.fandom.com/',
        title: 'spacemarine3'
    },
];

var num = 0 ;
$('.siteLink').attr('href',IntelIigence[0].url) ;

function changeSiteInfo(num) {

$('#sidebar > figure img').attr('src',IntelIigence[num].imgSrc);

$('#sidebar > figure .url').text(IntelIigence[num].url);

$('#sidebar > figure .home_title').text(IntelIigence[num].title);

$('siteLink').attr('href',IntelIigence[num].url);

}

function nextSiteInfo(){
    num = num + 1;

    if(num >2){
        num = 0;
    }
    console.log(num);
    changeSiteInfo(num);
}

 function prevSiteInfo(){
     num = num -1;
     if (num < 0 ){
         num = 2;
     }
     console.log(num);
     changeSiteInfo(num);
 }