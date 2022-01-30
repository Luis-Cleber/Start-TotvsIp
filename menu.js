
let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})
        /*============================================*/ 
           /* AQUI ESTÁ A ANIMAÇÃO DOS CONHECIMENTOS*/
        /*============================================*/

     $(function(){
              $('.chart').easyPieChart({
                size: 160,
                barColor: "#36e617",
                scaleLength: 0,
                lineWidth: 15,
                trackColor: "#525151",
                lineCap: "circle",
                animate: 2000,
              });
            });



            