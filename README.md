# Banco de Alimentos

## Objetivo

Este trabajo tiene como objetivo diseñar una solución de información para el Banco Alimentario de La Plata. El foco será el traslado de donaciones y envíos a beneficiarios. El sistema incorpora algunas ideas de aplicaciones como Glovo o Uber para distribuir y optimizar la
logística de traslado de envíos.

Se utilizará Angular para el frontend y Loopback en backend con MongoDB como base.

## Instalación

Clonar el repositorio
```
git clone https://github.com/emanuelbas/Banco-de-Alimentos
```
Instalar las dependencias, tanto para el frontend como el backend
```
npm i
```

## Uso

Para iniciar la aplicación en desarrollo deberá realizar los siguientes pasos:
1. Levantar la API, posicionandose en la carpeta backend
```
node .
```
2. Levantar la aplicación posicionándose en la carpeta frontend
```
ng serve
```
3. Navegar a http://localhost:4200/

## Lista de funcionalidades desarrolladas

* Manejo de cuentas para voluntarios, donantes, beneficiarios y administradores
* Creación y visualización de donaciones con descripcion general o detallada
* Creación y visualización de envios para beneficiarios a partir de una donación o de stock
* Manejo de traslados incluyendo busqueda y asignación de voluntarios y tracking de los mismos
* Gamificación de la app con sistema de puntos e insignias para donantes y voluntarios

## Ejemplo de registrar una nueva donación

![](https://trello-attachments.s3.amazonaws.com/5d723a0414aba735d2d95000/5d7fd60ba16feb2df59dafae/c18b9029283ddc2d3edc16bdb093ba0d/RegistrarGeneral.gif)