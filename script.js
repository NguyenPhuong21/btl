// cart
let count = 0;
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
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
// menu_tab
const tab_links = document.querySelectorAll('.menu__img')
const menus = document.querySelectorAll('.menu')
openMenu = (e, id_menu_name)=>{
    
    const menu_name = document.getElementById(id_menu_name)
    tab_links.forEach(tab_link =>{
        tab_link.classList.remove('bg')
        tab_link.style.transform = "rotate(0)";
        tab_link.style.transition = "500ms";
    })
    menus.forEach(menu =>{
        menu.classList.remove('d-flex')
    })
    e.currentTarget.classList.add('bg')
    e.currentTarget.style.transform = "rotate(15deg)";

    menu_name.classList.add('d-flex')
}
// scroll top
document.getElementById('btnScrollTop')
    .addEventListener('click', ()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
