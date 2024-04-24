let list = document.querySelectorAll('li');


for(let i =0; i < list.length; i++){
    list[i].addEventListener('click', function(e){

        e.defaultPrevented;
        
        if(e.target.classList.contains('active')){
            e.target.classList.remove('active');
        }else{
            e.target.classList.add('active');
        }

        let Paragraph = e.target.parentElement.nextElementSibling;
        if(Paragraph.classList.contains('info')){
            Paragraph.classList.remove('info')
        }else{
            Paragraph.classList.add('info');
        }
    })
}
