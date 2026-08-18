Feature: Login SauceDemo

  Scenario: Login exitoso
    Given el usuario está en login
    When ingresa credenciales válidas
    Then visualiza el inventario

  Scenario: Usuario bloqueado
    Given el usuario está en login
    When ingresa usuario bloqueado
    Then visualiza mensaje de usuario bloqueado