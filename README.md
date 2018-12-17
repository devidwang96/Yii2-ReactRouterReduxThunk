<p align="center">
    <a href="https://github.com/yiisoft" target="_blank">
        <img src="https://avatars0.githubusercontent.com/u/993323" height="100px">
    </a>
    <h1 align="center">Fullstack Yii2 + React + Router + Redux + Thunk</h1>
    <br>
</p>

Yii 2 Basic Project Template is a skeleton [Yii 2](http://www.yiiframework.com/) application best for
rapidly creating small projects.

[![Latest Stable Version](https://img.shields.io/packagist/v/yiisoft/yii2-app-basic.svg)](https://packagist.org/packages/yiisoft/yii2-app-basic)
[![Total Downloads](https://img.shields.io/packagist/dt/yiisoft/yii2-app-basic.svg)](https://packagist.org/packages/yiisoft/yii2-app-basic)
[![Build Status](https://travis-ci.org/yiisoft/yii2-app-basic.svg?branch=master)](https://travis-ci.org/yiisoft/yii2-app-basic)

Установка: 
-------------------

      1) git clone git@github.com:devidwang96/Yii2-ReactRouterReduxThunk.git myapp.test
      2) npm install
      3) composer install
      4) npm run watch  /  prod
      
База данных: 
-------------------

      В файле config/db - подключение к базе
      
Роуты: 
-------------------

      Заглушить реактские роуты - config/web.php - массив urlManager
      
      Пример: 
      
      'urlManager' => [
          'enablePrettyUrl' => true,
          'showScriptName' => false,
          'rules' => [
                  '/home' => '/',
                  '/about' => '/',
          ],
      ],
      
      
Что входит в сборку: 
-------------------

      1) Redux (Store)
      2) Redux - Thunk (Для асинхронности)
      3) React - Router
      4) Sass
      5) Bootstrap 3
      6) JQuery
      7) СКОРО попытаюсь сделать либо пререндеринг либо SSR
      
Кстати, продакшн без node_modules работает
      



