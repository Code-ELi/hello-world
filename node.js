function getUsuario() {
var usuario = document.getElementById('user').value;
var senha = document.getElementById('pass').value;


	if((usuario == null || usuario == "") || (senha == null || senha == "")) {
		window.alert("O usuario ou a senha nao podem estar vazios, preencha-os!");
	} else {

	if ((usuario != null) || (usuario != "")) {
		if((senha != null) || (senha != null)) {
			if((usuario == "administrador") && (senha == "Password123")) {
				window.alert("Login efectuado com sucesso!");
			} else {
				window.alert("Usuario ou senha incorrectos!");
			}

		}
	} 
	
	}
}




function loadFileAsText(){    // fun��o que busca e l� arquivo txt
	var fileToLoad = document.getElementById("fileToLoad").files[0];  //a inten��o � n�o precisar de bot�es pra escolher arquivo e nem para
	var fileReader = new FileReader();                                //executar o script, tudo deve acontecer quando cricar para abrir a aplica��o
	fileReader.onload = function(fileLoadedEvent) {
		var textFromFileLoaded = fileLoadedEvent.target.result;
		var texto = textFromFileLoaded;
		listar(texto);
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
	
}
function listar(texto){
	var quantidade = document.getElementById("lista").rows.length;// est� pr� definido que ser� usado o tamanho total do arquivo
	if (quantidade>1){ // quantidade representa o n�mero indefinido de linhas que pode haver
		for(var cont=1;cont<=quantidade;cont++){
			document.getElementById("lista").deleteRow(cont);// lista � o nome atribu�do ao conte�do do arquivo txt
		}
	}
	
	var itens = texto.split("LOG_"); // define que linhas devem ser consultadas
			for(var i=1;i<itens.length;i++){
		
			var valores = itens[i].split("\t");// espa�os TAB definem colunas que ser�o consultadas
			document.getElementById("lista").innerHTML +='<tr><td>'+valores[1]+'</td><td>'+valores[6&1]+'</td><td>'+valores[2]+'</td></tr>';