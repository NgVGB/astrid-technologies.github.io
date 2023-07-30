let modal = document.querySelector('.modal-wrapper');
     let btn = document.querySelector('.btnBanner');
     let close_btn = document.querySelector('.modal-close');
     let close_btn2 = document.querySelector('.closebtn');

     btn.addEventListener('click',display);

     function display(){
         modal.style.display = 'block';
     }

    // Click X close modal
    close_btn.addEventListener('click',hide);

    // Click button close
    close_btn2.addEventListener('click',hide);

    // Click anywhere to close modal
    window.addEventListener('click',(event)=>{
        if(event.target == modal){
            modal.style.display = 'none';
        }
    });

    function hide(){
        modal.style.display = 'none';

    }