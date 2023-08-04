@test
Feature: Tela de Desenvolvimento
  Como um usuário
  Eu quero ser informado sobre a indisponibilidade do sistema em desenvolvimento
  Para visualizar a tela de desenvolvimento quando necessário

  Scenario: Exibir mensagem de sistema em desenvolvimento
    Given que o sistema está em desenvolvimento
    When o usuário tentar acessar o sistema
    Then deve ser exibido o texto "Sistema em Desenvolvimento"
    And deve ser exibida a descrição "Nosso sistema será lançado em breve."

  Scenario: Redirecionar para tela de Login ao tentar acessar sistema em desenvolvimento
    Given que o usuário deseja acessar o sistema em desenvolvimento
    When o usuário tentar clicar no botão "Acessar"
    Then ele deve ser redirecionado para a tela de "Login"