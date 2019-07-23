'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(()=>{
  Route.get('users', 'UserController.index').middleware(['auth:jwt'])
  Route.get('user/:id', 'UserController.show').middleware(['auth:jwt'])
  Route.post('user','UserController.store')
  Route.put('user/:id', 'UserController.update').middleware(['auth:jwt'])
  Route.delete('user/:id', 'UserController.delete').middleware(['auth:jwt'])
}).prefix('api/v1')


Route.group(()=>{
  Route.get('feeds', 'FeedController.index')
  Route.get('feed/:id', 'FeedController.show')
  Route.post('feed','FeedController.store')
  Route.put('feed/:id','FeedController.update')
  Route.delete('feed/:id','FeedController.delete')
}).prefix('api/v1').middleware(['auth:jwt'])
  

Route.group(() => {
  Route.post('login', 'AuthController.postLoginJwt').as('loginJwt')
  Route.post('refresh', 'AuthController.postRefreshTokenJwt').as('refreshTokenJwt').middleware(['auth:jwt'])
  Route.post('logout', 'AuthController.postLogoutJwt').as('loginJwt').middleware(['auth:jwt'])
  Route.get('profile', 'AuthController.getProfileJwt').as('profileJwt').middleware(['auth:jwt'])
  
  }).prefix('api/v1')