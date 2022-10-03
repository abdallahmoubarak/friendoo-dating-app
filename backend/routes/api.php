<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(["prefix"=> "v0.1"], function(){

    Route::post("/sign/signin", [SignController::class, 'signIn']);
    // Route::post("/sign/signup", [SignController::class, 'signUp']);
    // Route::post("/users/update_user/{id}", [UsersController::class, 'updateUser']);
    // Route::post("/users/block/{id}", [UsersController::class, 'switchBlock']);
    // Route::get("/users/all/{id}", [UsersController::class, 'fetchAllUsers']);
    // Route::get("/users/contact/all/{id}", [UsersController::class, 'fetchAllContact']);
    // Route::post("/users/like/{id}", [UsersController::class, 'switchLike']);
    // Route::post("/messages/send", [MessagesController::class, 'addingMessage']);
    // Route::get("/messages/all/{id}", [MessagesController::class, 'addingMessage']);


    Route::get("/not_found", [LandingController::class, "notFound"])->name("not-found");

});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
