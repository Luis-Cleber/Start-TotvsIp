$(document).ready(function () {
	//chamada da função para calcular valor total
	$(".table").on("change keyup keydown paste propertychange bind mouseover", function(){
	    calcular();
	});
    var i = 5;
    
    //adiciona nova linha
    $("#add").on("click", function () {
        i++;
        
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td><button type="button" name="remove" id="'+i+'" class="btn btn-danger deleteLinha"><i class="fa fa-trash fa-lg"></i></button></td>';
        
		cols += '<td><select name="categoria">';		 
		cols += '<option value="pedagio" name="pedagio">Pedagio</option>';
		cols += '<option value="hospedagem" name="hospeagem">Hospedagem</option>';
		cols += ' <option value="combustivel" name="combustivel">Combustível</option>';
		cols += ' <option value="alimentacao" name="alimentacao">Alimentação</option>';
		cols += ' <option value="outra" name="outra">Outra</option>';
		cols += '</select></td>';

        cols += '<td><input type="text" class="form-control" id="desc" name="desc[]"></td>';
        cols += '<td><input type="text" class="form-control" id="qnd' + i + '" name="qnd[]"></td>';
        cols += '<td><input type="text" class="form-control" id="vlund' + i + '" name="vlund[]"></td>';
        cols += '<td><input style="display: none;" type="text" class="form-control soma" id="vltotal' + i + '" name="vltotal[]" onblur="calcular()">';
        cols += '<input type="text" class="form-control somaS" id="vltotalS' + i + '"></td>';
       
        newRow.append(cols);
        
        $("#products-table").append(newRow);
        
	    	$(".soma").each(function() {
	        	$(this).blur(function(){
	            	calcular();
	        	});
	    	});
	    
    });
    
    //chamada da função para calcular o total de cada linha
    $("#products-table").on("blur keyup", 'input[id^="vlund"], input[id^="qnd"]', function (event) {
        calculateRow($(this).closest("tr"));
    });
    
    //remove linha
    $("#products-table").on("click", "button.deleteLinha", function (event) {
        $(this).closest("tr").remove();
    });
});

 
	//função para calcular o total de cada linha   
        function calculateRow(row) {
	    var vlund = row.find('input[id^="vlund"]').val();
	    //retira separadores de milhar ponto
	    vlund = vlund.split(".").join("");
	    //substitui separador decimal virgula por ponto
	    vlund=vlund.replace(",", ".");
	    vlund = +vlund;
	    var qnd = +row.find('input[id^="qnd"]').val();
	    //total para uso nos calculos
	    //2 casas decimais 
	    var total = (vlund * qnd).toFixed(2);   
	    row.find('input[id^="vltotal"]').val(total); 
	    //totalS para uso na apresentação substitui separador decimal ponto por virgula
	    totalS=total.replace(".", ",");
	    //a regex abaixo coloca um ponto a esquerda de cada grupo de 3 digitos desde que não seja no inicio do numero
	    row.find('input[id^="vltotalS"]').val((totalS).replace(/\B(?=(\d{3})+(?!\d))/g, "."));  
	
	}

	//função para calcular o total da nota 
	function calcular() {
    	var soma = 0;
    	$(".soma").each(function(indice, item){
        	var valor = parseFloat($(item).val());
        	//console.log(valor);
        	if ( !isNaN( valor ) ) {
            	soma += valor;
        	}
    	});
    
    	//pega o valor das outras despesas e caso haja substitue a virgula por ponto
    	var vltotalS = (document.getElementById("vltotalS").value).replace(",", ".");
    
    	vltotalS=Number(vltotalS);
        soma=(soma+0).toFixed(2);
    	//substitui separador decimal ponto por virgula
    	soma=soma.replace(".", ",");
    	//a regex abaixo coloca um ponto a esquerda de cada grupo de 3 digitos desde que não seja no inicio do numero
    	$("#totalnfe").val((soma).replace(/\B(?=(\d{3})+(?!\d))/g, "."))
		
	}