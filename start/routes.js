"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

const AuthController = use("App/Controllers/Http/AuthController");

Route.post("signup", "AuthController.signup");
