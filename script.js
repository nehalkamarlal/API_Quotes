const quotesCardtemplate=document.getElementById('quotes-card-template');
const quotesCard=document.getElementById('quotes-card');
const container=document.getElementById('container');


async function FetchApi(){
    const response=await fetch('https://dummyjson.com/quotes');
    const quotesData=await response.json();
    const dataquotes=quotesData.quotes;
//    console.log(dataquotes
    BindData(dataquotes);
}



 function BindData(quotes)
 {
    quotes.forEach((quotes) => {
        const quotesclonecard=quotesCardtemplate.content.cloneNode(true);
        console.log(quotesclonecard);
        const quotesId=quotesclonecard.querySelector('#quotes-id');
        const quotes_=quotesclonecard.querySelector('#quotes');
        const quotesAuthor=quotesclonecard.querySelector('#quotes-author');
        quotesId.innerHTML=`${quotes.id}.`;
        quotes_.innerHTML=`<q>${quotes.quote}</q>`;
        quotesAuthor.innerHTML=`Author:${quotes.author}`;
        container.appendChild(quotesclonecard);
    });
    quotesCard.style.display="none";
 }
FetchApi();