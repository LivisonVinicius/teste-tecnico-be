"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

const AuthController = use("App/Controllers/Http/AuthController");
const ClientControllerController = use("App/Controllers/Http/ClientController");
const ProductController = use("App/Controllers/Http/ProductController");

Route.post("signup", "AuthController.signup");
Route.post("login", "AuthController.login");

Route.post("client", "ClientController.store");
Route.put("client/:id", "ClientController.update");
Route.get("client", "ClientController.index");

Route.post("product", "ProductController.store");
