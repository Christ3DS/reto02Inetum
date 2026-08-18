Feature: Carrito

  Scenario: Agregar producto al carrito

    Given el usuario inició sesión
    When agrega un producto al carrito
    Then el carrito debe contener 1 producto
