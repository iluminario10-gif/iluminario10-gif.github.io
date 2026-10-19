// Meus apps — versões e histórico de atualizações.
// Ao publicar uma versão nova de um app: troque "atual" e coloque o novo item no topo do histórico.
// O menu e a tela Novidades leem este arquivo. Cada app mostra o próprio número (rodapé ou Ajustes),
// e os testes conferem que os números batem.
window.MEUS_APPS_VERSOES = {
  hub: {
    nome: 'Meus apps',
    icone: 'hub-icon-192.png',
    atual: '1.6',
    historico: [
      { versao: '1.6', itens: [
        'Notas em Dia entra no menu: controle de notas fiscais dos pacientes, com o prazo de cada plano.',
      ] },
      { versao: '1.5', itens: [
        'Ícone do Meus apps volta a ser o gatinho na tela inicial. O nome continua Meus apps.',
      ] },
      { versao: '1.4', itens: [
        'Cópia de segurança geral: um botão guarda os dados dos quatro apps num arquivo, e outro restaura.',
      ] },
      { versao: '1.3', itens: [
        'Tela Novidades: histórico de cada app, com a versão atual e o que mudou. Arraste para o lado para trocar de app.',
        'A versão de cada app aparece ao lado do nome, e a versão do Meus apps aparece no rodapé.',
        'Ícone novo, juntando os três apps.',
      ] },
      { versao: '1.2', itens: [
        'Tela Hoje: reúne as pendências dos três apps. Toque em um item e ele abre no lugar certo.',
        'Faixa de pendências no menu, com o que está atrasado ou para comprar.',
      ] },
      { versao: '1.1', itens: [
        'Listas entra no menu como o terceiro app.',
        'Resumos ao vivo em cada app: gatos, vendas do mês e itens para comprar.',
        'Logo novo, com os apps reunidos.',
      ] },
      { versao: '1.0', itens: [
        'Menu com Patinhas em Dia e Maison de Lavande, com botão para instalar.',
      ] },
    ],
  },
  patinhas: {
    nome: 'Patinhas em Dia',
    icone: 'icon-192.png',
    atual: '1.10',
    historico: [
      { versao: '1.10', itens: [
        'Comprar para o pet: manda ração, areia, petiscos, antipulgas e shampoo para a lista do pet shop, no app Listas.',
        'Tratamentos que terminam em até 7 dias aparecem no cartão, com botão para mandar para a lista.',
        'Tocar em um lembrete do Hoje (menu) abre a ficha do gato direto.',
      ] },
      { versao: '1.9', itens: [
        'Alerta de peso: avisa quando o peso mudou 5% ou mais em relação à pesagem anterior (até 90 dias).',
      ] },
      { versao: '1.8', itens: [
        'Calendário com o botão Ver tudo.',
        'Aviso de atualização: o app avisa quando existe versão nova.',
      ] },
    ],
  },
  maison: {
    nome: 'Maison de Lavande',
    icone: 'maison-icon-192.png',
    atual: '1.4',
    historico: [
      { versao: '1.4', itens: [
        'Relatório de vendas do mês, do trimestre ou do ano, com gráfico e tabelas. Sai em PDF, PNG ou JPEG.',
        'No começo do mês, o Painel lembra de gerar o relatório do mês que acabou.',
        'Escolha da letra em Configurações: Mais legível, Lexend, Nunito ou a do celular. Vale para o app e para o relatório.',
      ] },
      { versao: '1.3', itens: [
        'Tocar em um item do Hoje (menu) abre direto a tela certa: estoque, vendas ou compras.',
      ] },
      { versao: '1.2', itens: [
        'Meta mensal de faturamento, com barra de progresso no Painel. Defina em Configurações.',
        'Projeção do mês: no ritmo atual, quanto o mês deve fechar.',
      ] },
      { versao: '1.0', itens: [
        'Produtos, vendas, compras, estoque, painel com gráficos e backup.',
        'Lucro, margem e reposição calculados sozinhos.',
      ] },
    ],
  },
  listas: {
    nome: 'Listas',
    icone: 'listas-icon-192.png',
    atual: '1.2',
    historico: [
      { versao: '1.2', itens: [
        'Cópia de segurança nos Ajustes: salvar e restaurar as listas num arquivo.',
      ] },
      { versao: '1.1', itens: [
        'Comprados antes: atalhos com os produtos que você mais compra, para adicionar com um toque.',
        'Desfazer: ao remover um item ou esvaziar a lista, dá para voltar atrás por alguns segundos.',
        'Tocar em um item do Hoje (menu) abre a lista certa. A lista do pet shop recebe itens da Patinhas.',
      ] },
      { versao: '1.0', itens: [
        'Listas de mercado, farmácia, pet shop e casa, com pastas por loja, ordem por corredor e marcação de encarte.',
      ] },
    ],
  },
  notas: {
    nome: 'Notas em Dia',
    icone: 'notas-icon-192.png',
    atual: '1.1',
    historico: [
      { versao: '1.1', itens: [
        'Importar planilha (CSV) em Ajustes: pacientes e notas de uma vez. Quem já está cadastrado recebe só as notas novas.',
        'Pacientes sem plano ou tipo de atendimento ficam em “Cadastro incompleto”, sem atrapalhar os outros.',
        'Notas canceladas aparecem no histórico, mas não contam para o prazo.',
      ] },
      { versao: '1.0', itens: [
        'Quem pode receber nota agora e quem aguarda, com a data de cada um e os dias que faltam.',
        'Cadastro com nome, CPF, valor, plano e tipo de atendimento. Busca por nome ou CPF, e o CPF pode ser copiado.',
        'Registrar emissão grava a data e calcula a próxima sozinho. Histórico de notas por paciente.',
        'Descrições padronizadas das consultas e da acupuntura, com botão para copiar.',
        'Planilha das emissões do mês para o contador.',
        'Dados criptografados no aparelho com senha. Bloqueio automático e cópia de segurança criptografada.',
      ] },
    ],
  },
};
