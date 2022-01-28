
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



            (function($) {

              RemoveTableRow = function(handler) {
                var tr = $(handler).closest('tr');
               
            
                tr.fadeOut(400, function(){ 
                  tr.remove(); 
               
                }); 
                            
                return false;
              };
              
              AddTableRow = function() {
                  
                  var newRow = $("<tr>");
                  var cols = "";
                  
                  cols += '<td>';
                  cols += '<button class="btn btn-large btn-danger" onclick="RemoveTableRow(this)" type="button"><i class="fa fa-trash fa-lg"></i></button>';
                  cols += '</td>';

                  cols += '<td><select name="categoria">'; 
                  cols += '<option value="pedagio" name="pedagio">Pedagio</option>';
                  cols += '<option value="hospedagem" name="hospeagem">Hospedagem</option>';
                  cols += ' <option value="combustivel" name="combustivel">Combustível</option>';
                  cols += ' <option value="alimentacao" name="alimentacao">Alimentação</option>';
                  cols += ' <option value="outra" name="outra">Outra</option>';
                  cols += '</select></td>';

                  cols += '<td><input type="text" name="descricao"></td>';
            
                  cols += '<td><input type="number" name="vlr.unitario"></td>'; 
            
                  cols += '<td><input type="number" name="quantidade"></td>'; 
            
                  cols += '<td><input type="number" name="vlr.total"></td>'; 
                  
                  
                  
                  newRow.append(cols);
                  
                  $("#products-table").append(newRow);
                
                  return false;
              };
              
            
            })(jQuery);

            document.querySelector('.alert-confirm').onclick = function(){
              swal({
                          title: "Tem a certeza?",
                          text: "Se eliminar não voltará a ver este conteudo!",
                          type: "warning",
                          showCancelButton: true,
                          confirmButtonClass: "btn-danger",
                          confirmButtonText: "Sim, apagar isto!",
                          closeOnConfirm: false
                      },
                      function(){
                          swal("Apagado!", "A Informação foi apagada permanentemente.", "success");
                      });
          };