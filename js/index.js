
function correct() {
  var palavra = (input_palavra.value.toUpperCase());
  var inputElement = document.getElementById('input_palavra');

  // Colocar cada palavra em um vetor e acessá-las e preencher o innerHTML utilizar switch case

  if (palavra == "SCOTT") {
    scott_s.classList.add('verde'); scott_s.innerHTML = `S`
    scott_c.classList.add('verde'); scott_c.innerHTML = `C`
    scott_o.classList.add('verde'); scott_o.innerHTML = `O`
    scott_t.classList.add('verde'); scott_t.innerHTML = `T`
    scott_T.classList.add('verde'); scott_T.innerHTML = `T`

    inputElement.classList.remove('vermelho');
    inputElement.classList.add('verde');
    
  }
  else if (palavra == "PITER") {
    piter_p.classList.add('verde'); piter_p.innerHTML = `P`
    piter_i.classList.add('verde'); piter_i.innerHTML = `I`
    piter_t.classList.add('verde'); piter_t.innerHTML = `T`
    piter_e.classList.add('verde'); piter_e.innerHTML = `E`
    piter_r.classList.add('verde'); piter_r.innerHTML = `R`

    inputElement.classList.remove('vermelho');
    inputElement.classList.add('verde');

  } else if (palavra == "BANSHEE") {
    banshee_b.classList.add('verde'); banshee_b.innerHTML = `B`
    banshee_a.classList.add('verde'); banshee_a.innerHTML = `A`
    banshee_n.classList.add('verde'); banshee_n.innerHTML = `N`
    banshee_s.classList.add('verde'); banshee_s.innerHTML = `S`
    banshee_h.classList.add('verde'); banshee_h.innerHTML = `H`
    banshee_e.classList.add('verde'); banshee_e.innerHTML = `E`
    banshee_E.classList.add('verde'); banshee_E.innerHTML = `E`

    inputElement.classList.remove('vermelho');
    inputElement.classList.add('verde');

  }
  else if (palavra == "SARCASMO") {
    sarcasmo_s.classList.add('verde'); sarcasmo_s.innerHTML = `S`
    sarcasmo_a.classList.add('verde'); sarcasmo_a.innerHTML = `A`
    sarcasmo_r.classList.add('verde'); sarcasmo_r.innerHTML = `R`
    sarcasmo_c.classList.add('verde'); sarcasmo_c.innerHTML = `C`
    sarcasmo_A.classList.add('verde'); sarcasmo_A.innerHTML = `A`
    sarcasmo_S.classList.add('verde'); sarcasmo_S.innerHTML = `S`
    sarcasmo_m.classList.add('verde'); sarcasmo_m.innerHTML = `M`
    sarcasmo_o.classList.add('verde'); sarcasmo_o.innerHTML = `O`

    inputElement.classList.remove('vermelho');
    inputElement.classList.add('verde');
  }
  else if (palavra == "ALISSON") {
    alisson_a.classList.add('verde'); alisson_a.innerHTML = `A`
    alisson_l.classList.add('verde'); alisson_l.innerHTML = `L`
    alisson_i.classList.add('verde'); alisson_i.innerHTML = `I`
    alisson_s.classList.add('verde'); alisson_s.innerHTML = `S`
    alisson_S.classList.add('verde'); alisson_S.innerHTML = `S`
    alisson_o.classList.add('verde'); alisson_o.innerHTML = `O`
    alisson_n.classList.add('verde'); alisson_n.innerHTML = `N`

    inputElement.classList.remove('vermelho');
    inputElement.classList.add('verde');
  }
  else if (palavra == "OMEGA") {
    omega_o.classList.add('verde'); omega_o.innerHTML = `O`;
    omega_m.classList.add('verde'); omega_m.innerHTML = `M`;
    omega_e.classList.add('verde'); omega_e.innerHTML = `E`;
    omega_g.classList.add('verde'); omega_g.innerHTML = `G`;
    omega_a.classList.add('verde'); omega_a.innerHTML = `A`;

    inputElement.classList.remove('vermelho');
    inputElement.classList.add('verde');
  }
  else if (palavra == "MATT") {
    matt_m.classList.add('verde'); matt_m.innerHTML = `M`
    matt_a.classList.add('verde'); matt_a.innerHTML = `A`
    matt_t.classList.add('verde'); matt_t.innerHTML = `T`
    scott_t.classList.add('verde'); scott_t.innerHTML = `T`

    inputElement.classList.remove('vermelho');
    inputElement.classList.add('verde');
  }
  else if (palavra == "LUA DOS LOBOS") {
    lua_l.classList.add('verde'); lua_l.innerHTML = `L`;
    lua_u.classList.add('verde'); lua_u.innerHTML = `U`;
    lua_a.classList.add('verde'); lua_a.innerHTML = `A`;

    dos_d.classList.add('verde'); dos_d.innerHTML = `D`;
    dos_o.classList.add('verde'); dos_o.innerHTML = `O`;
    dos_s.classList.add('verde'); dos_s.innerHTML = `S`;

    lobos_l.classList.add('verde'); lobos_l.innerHTML = `L`;
    lobos_o.classList.add('verde'); lobos_o.innerHTML = `O`;
    lobos_b.classList.add('verde'); lobos_b.innerHTML = `B`;
    sarcasmo_o.classList.add('verde'); sarcasmo_o.innerHTML = `O`;
    alisson_S.classList.add('verde'); alisson_S.innerHTML = `S`;

    inputElement.classList.remove('vermelho');
    inputElement.classList.add('verde');
  }
  else if (palavra == "STILES") {
    scott_s.classList.add('verde'); scott_s.innerHTML = `S`;
    stiles_t.classList.add('verde'); stiles_t.innerHTML = `T`;
    piter_i.classList.add('verde'); piter_i.innerHTML = `I`;
    stiles_l.classList.add('verde'); stiles_l.innerHTML = `L`;
    banshee_e.classList.add('verde'); banshee_e.innerHTML = `E`;
    sarcasmo_s.classList.add('verde'); sarcasmo_s.innerHTML = `S`;

    inputElement.classList.remove('vermelho');
    inputElement.classList.add('verde');

  }
  else if (palavra == "ALFA") {
    sarcasmo_A.classList.add('verde'); sarcasmo_A.innerHTML = `A`
    alisson_l.classList.add('verde'); alisson_l.innerHTML = `L`
    alfa_f.classList.add('verde'); alfa_f.innerHTML = `F`;
    omega_a.classList.add('verde'); omega_a.innerHTML = `A`;

    inputElement.classList.remove('vermelho');
    inputElement.classList.add('verde');
  }
  else if (palavra == ``) {
    alert("Não aceitamos valor nulo, preencha o campo em branco");
    inputElement.classList.add('vermelho');

  } else {
    // colocar um alert bonitinho no meio da tela 
    alert("Verifique se está palavra está coerente com as dicas e/ou está escrita corretamente conforme os padrões esperado na língua portuguesa");
    inputElement.classList.remove('verde');
    inputElement.classList.add('vermelho');
  }

}

function mostradica() {
  var selectDicas = document.getElementById('dicas');
  var divDica = document.getElementById('styleDicas');  /*passa a estilização de none (oculta as dicas não exibidas) e block (redeniza um bloco)*/
  var dica_atual = document.getElementById('Lista_dicas');

  var lista_dicas = [
    "1- Quem foi o primeiro chefe do kanima.",
    "2- Quem ajudou scott a controlar seus poderes.",
    "3- Ao ser mordido ele teve que aprender a lidar com as mudanças <br> hormonais e usar seus poderes para salvar a sua cidade natal",
    "4- Quem mordeu o scott.",
    "5- Qual é o nome do primeiro episódio da primeira temporada.",
    "6- Esse poder tem a capacidade <br> de matar apenas com um grito.",
    "7- Scott se torna o único e verdadeiro...",
    "8- Stiles é conhecido pelo seu... ",
    "9- Quem foi o primeiro amor de scott",
    "10- Uma caracteristica desse poder é o seus olhos azuis"];

  var valor_atual = parseInt(selectDicas.value);

  if (valor_atual >= 1 && valor_atual <= lista_dicas.length) {
    // Exibe a dica correspondente
    exibir.innerHTML = lista_dicas[valor_atual - 1];
    divDica.style.display = 'block';

  } else {
    exibir.innerHTML = '';
    divDica.style.display = 'none';
  }

  lista_dicas.slice[valor_atual -1];

}

function enviar() {

  // criar uma lógica para se caso a quantidade de palavra digitada for menor que o vetor com os nomes ele vai continuar exacutando se não exibir um alert parabenizando 

  // alert bonitinho
  alert(`Parabens você concluiu toda a cruzadinha`);
}
