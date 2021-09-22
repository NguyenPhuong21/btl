let count = 0;
const value =document.getElementById("value");
const btns =document.querySelectorAll(".btn");
btns.forEach(function (btn){
    btn.addEventListener("click",function(e){
        const style =e.currentTarget.classList;
        if(style.contains("decrease")){
            if(count>0){
                count--;
            }
        }
        else if (style.contains("increase")){
            count++;
        }
        else if(style.contains("reset")){
            count =0;
        }
        
        value.textContent =count;
    });
});
document.getElementById('btnScrollTop')
    .addEventListener('click', ()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
