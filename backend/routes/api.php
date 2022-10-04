<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\MessagesController;

Route::group(["prefix"=> "v0.1"], function(){
      
    Route::controller(AuthController::class)->group(function () {
        Route::post("/sign/signin", 'login');
        Route::post("/sign/signup", 'register');
    });

    Route::post("/users/update_user/{id?}", [UsersController::class, 'updateUser']);
    Route::get("/users/all/{id?}", [UsersController::class, 'getInterested']);
    Route::get("/users/contact/all/{id?}", [UsersController::class, 'getContact']);
    Route::post("/users/block/{id?}", [UsersController::class, 'switchBlock']);
    Route::post("/users/like/{id?}", [UsersController::class, 'switchLike']);
    Route::post("/messages/send", [MessagesController::class, 'sendMessage']);
    Route::get("/messages/all/{id?}/{reciever_id?}", [MessagesController::class, 'getMessages']);
    // Route::group(['middleware'=> 'auth:api'], function(){
    // });


});
