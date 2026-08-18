# Reto Inetum - Front

## Descripción

Automatización de pruebas para https://www.saucedemo.com/ usando Playwright, Cucumber y TypeScript.

Se validan los flujos de login, carrito de compras y checkout.

## Tecnologías

- Playwright
- Cucumber
- TypeScript
- Node.js

## Patrón utilizado

Page Object Model (POM)

Este patrón permite separar la lógica de las páginas de los escenarios de prueba para facilitar el mantenimiento del proyecto.

## Escenarios implementados

### Login

- Login exitoso con usuario estándar
- Validación de usuario bloqueado

### Carrito

- Agregar producto al carrito
- Verificar producto agregado

### Checkout

- Completar proceso de compra
- Validar mensaje de confirmación

## Credenciales utilizadas

### Usuario estándar

```text
standard_user
secret_sauce
```

### Usuario bloqueado

```text
locked_out_user
secret_sauce
```

## Instalación

Instalar dependencias:

```bash
npm install
```

Instalar navegadores de Playwright:

```bash
npx playwright install
```

## Ejecución

Ejecutar todo el proyecto:

```bash
npm test
```

## Estructura

```text
features/
src/pages/
src/steps/
src/hooks/
src/support/
```

## Resultado

El proyecto cubre los criterios solicitados:

- Inicio de sesión.
- Usuario bloqueado.
- Agregado de productos al carrito.
- Validación del carrito.
- Compra completa con confirmación.
