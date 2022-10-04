<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\MessagesController;

Route::group(["prefix"=> "v0.1"], function(){
      
    Route::controller(AuthController::class)->group(function () {
        Route::get("/sign/signin", 'redirect')->name('login');
        Route::post("/sign/signin", 'login');
        Route::post("/sign/signup", 'register');
    });
    
    Route::group(['middleware'=> 'auth:api'], function(){
        Route::controller(UsersController::class)->group(function () {
            Route::post("/users/update_user/{id?}", 'updateUser');
            Route::get("/users/all", 'getInterested');
            Route::get("/users/contact/all/{id?}", 'getContact');
            Route::post("/users/block/{id?}", 'switchBlock');
            Route::post("/users/like/{id?}", 'switchLike');
        });

        Route::controller(MessagesController::class)->group(function () {
            Route::post("/messages/send", 'sendMessage');
            Route::get("/messages/all/{id?}/{reciever_id?}", 'getMessages');
        });
    });

});
