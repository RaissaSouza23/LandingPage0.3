//Criar uma variável para manipular o XML
xmlhttp = new XMLHttpRequest();
//Efetuar a leitura do arquivo XML
xmlhttp.open("GET","xml/db_conteudo.xml",false);
//Enviar o arquivo para leitura
xmlhttp.send();
//Informar que o arquivo é um XML
xmlDoc = xmlhttp.responseXML;
//Organiza os dados em um vetor
x = xmlDoc.getElementsByTagName("postagem");



function funcBlog(){
    for(n=x.length-1;n>=0;n--){
        document.write("<div class='card' style='width: 50%;background-color:#BEE5D6;'><img src='imgs/"+ x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' class='card-img-top'><div class='card-body'><h5 style='font-size:25px;' class='card-title'>"+ x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h5><p class='card-text' style='text-align:justify;font-size:20px;'>"+ x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,250) + "...</p><a  class='btn btn-primary' href='postagem.html?noticia="+ n +"'>Saiba Mais</a></div></div><br><br>");
    }
}

function funcaoPostagem(){
    //Armazena a URL completa, ex:http://127.0.0.1/web-xml/postagem.html?noticia=0
    url = new URL(window.location.href);
    //Armazena somente o parâmetro da URL, ex: noticia=0
    parametro = url.searchParams;
    //Armazena somente o valor parâmetro da URL, ex: 0
    n = parametro.get("noticia");
   
    document.write("<div class='card' style='width: 50%;background-color:#BEE5D6;'><img src='imgs/"+ x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' class='card-img-top'><div class='card-body'><h5 style='font-size:25px;' class='card-title'>"+ x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h5><p class='card-text' style='text-align:justify;font-size:20px;'>"+ x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,250) + "...</p><a  class='btn btn-primary' href='index.html?#noticias'>Ver mais noticias  </a></div></div><br><br>");
}










// <div class="row">
// <div class="col-sm-4 bg-primary text-white">
//   <div class="card" style="width: 18rem;">
//     <img src="'+ x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue +'" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">'+ x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +'</h5>
//       <p class="card-text">+ x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,250) + </p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>
// </div>



