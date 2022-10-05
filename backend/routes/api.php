<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\MessagesController;
use App\Http\Controllers\LocationController;


Route::group(["prefix"=> "v0.1"], function(){
      
    Route::controller(AuthController::class)->group(function () {
        Route::get("/sign/signin", 'redirect')->name('login');
        Route::post("/sign/signin", 'login');
        Route::post("/sign/signup", 'register');
    });
    
    Route::group(['middleware'=> 'auth:api'], function(){
        Route::controller(UsersController::class)->group(function () {
            Route::post("/users/update_user", 'updateUser');
            Route::get("/users/all", 'getInterested');
            Route::get("/users/favorites/all", 'getFavorites');
            Route::get("/users/contacts/all", 'getContacts');
            Route::post("/users/block", 'switchBlock');
            Route::post("/users/like", 'switchLike');
        });

        Route::controller(MessagesController::class)->group(function () {
            Route::post("/messages/send", 'sendMessage');
            Route::get("/messages/all/{reciever_id?}", 'getMessages');
        });

        Route::controller(LocationController::class)->group(function () {
            Route::post("/location/update", 'updateLocation');
        });
    });

});
