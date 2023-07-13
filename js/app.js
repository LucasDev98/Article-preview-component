let buttonShare = document.querySelectorAll('.btn-share');
let articleFooter = document.querySelector('.article__footer');
let message = document.querySelector('.info-social');



buttonShare.forEach( button => {
    button.addEventListener('click', () => {
        console.log('gola')
        articleFooter.classList.toggle('hidden');
        message.classList.toggle('show');
        
    })
})