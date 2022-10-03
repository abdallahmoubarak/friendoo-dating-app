<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\MessagesController;


Route::group(["prefix"=> "v0.1"], function(){

    Route::get("/sign/signin", [AuthController::class, 'signIn'])->name('login');
    Route::post("/sign/signin", [AuthController::class, 'signIn'])->name('login');
    Route::post("/sign/signup", [AuthController::class, 'signUp']);
    
    Route::get("/users/all/{id?}", [UsersController::class, 'fetchAllUsers']);
    Route::post("/users/update_user/{id?}", [UsersController::class, 'updateUser']);
    Route::post("/users/block/{id?}", [UsersController::class, 'switchBlock']);
    Route::get("/users/contact/all/{id?}", [UsersController::class, 'fetchAllContact']);
    Route::post("/users/like/{id?}", [UsersController::class, 'switchLike']);
    Route::post("/messages/send", [MessagesController::class, 'sendMessage']);
    Route::get("/messages/all/{sender_id?}/{reciever_id?}", [MessagesController::class, 'getMessages']);
    // Route::group(['middleware'=> 'auth:api'], function(){
    // });

    Route::get("/not_found", [LandingController::class, "notFound"])->name("not-found");

});
