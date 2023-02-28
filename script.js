const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Bem vindo ao cadastro de imóveis!\n" +
      "Total de imóveis: " +
      imoveis.length +
      "\n\n Escolha uma opção: \n1. Novo imóvel. \n2. Listar. \n3. Sair"
  );
  // Cria o imóvel e pergunta se pretende adicionar o objeto
  switch (opcao) {
    case "1":
      const imovel = {};
      imovel.proprietario = prompt("Informe o nome do proprietário:");
      imovel.quartos = prompt("Informe quantidade de quartos: ");
      imovel.banheiro = prompt("Informe quantidade de banheiros: ");
      imovel.garagem = prompt("Informe se possui garagem: Sim/Não");

      const confirmacao = confirm(
        "Salvar as informações?\n" +
          "\nProprietario: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiro: " +
          imovel.banheiro +
          "\nGaragem: " +
          imovel.garagem
      );

      if (confirmacao) {
        imoveis.push(imovel);
      }
      break;

    // Listagem dos imóveis cadastrados
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietario: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiro: " +
            imoveis[i].banheiro +
            "\nGaragem: " +
            imoveis[i].garagem
        );
      }
      break;

    // Case 3 encerra caso o usuário digite o número 3 no terminal prompt
    case "3":
      alert("Encerrando cadastramento");
      break;

    // Só aparece caso o usuário digite incorretamente alguma opção inválida no prompt
    default:
      alert("Opção inválida");
  }
  break;
} while (opcao !== "3");
