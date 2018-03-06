new Clipboard('.btn');
let contador = 1;

function loja() {

	if(document.getElementById("loja").value.length > 1){

		let loja = document.getElementById("loja").value;
		let nome    = ['Caribe','Floral','Estampa', 'Daniela','Mixed','Tyra','Sweetie','Chic','Stripes','Betina','Lorena','Emilie','Mila','Bella','Tina','WIFI','Paris','Santorini','Tropical','Bloom','Aruba','Laguna','Doll','Velvet','Polly','Authentic','Mademoiselle','Saint-Troppez','Babi','Eclipse','Dream Big','Mikonos','Ibiza','Haley','Lucy','Alexis','Happier','Gorgeous','Chelsea','Roma','Iggy','Astrid','Meggie','Oxford','Katarina','Pop','Dolce','Vitta','Freedom','Inspiratto','Free Spirit','Hilo','Lost','Liberty','Comfy','Fairy','Ethnic','Stacy','Grace','Hana'];
		let rand = nome[Math.floor(Math.random() * nome.length)];

		let nomeFinal = loja + " " + rand;

		let div = document.getElementById("nomeFinal");
		let conteudo = document.createTextNode(nomeFinal);
		let elemento = document.createElement("div");
		elemento.appendChild(conteudo);
		elemento.setAttribute("id", "roupa"+contador);
		elemento.setAttribute("class", "bg-success");
		div.appendChild(elemento);
		
		let copiar = document.createElement("input");
	    copiar.setAttribute("type", "button");
	    copiar.setAttribute("class", "btn");
	    copiar.setAttribute("data-clipboard-target", "#roupa"+contador);
	    copiar.setAttribute("value", "Copiar para área de transferência");
	    div.appendChild(copiar);

		contador++; 
	}else {
		alert("Insira a sugestão de nome");
	}
}