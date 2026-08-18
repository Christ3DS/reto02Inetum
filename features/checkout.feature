Feature: Checkout

  Scenario: Completar compra

    Given el usuario tiene productos en el carrito
    When completa el checkout
    Then debe visualizar la confirmación de compra