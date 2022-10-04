<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class UsersController extends Controller{

function updateUser(Request $request, $id){

    $user = new User;

    $user = User::find($id);
    $user->name = $request->name ? $request->name : $user->name;
    $user->bio = $request->bio ? $request->bio : $user->bio;
    $user->birthdate = $request->birthdate ? $request->birthdate : $user->birthdate;
    $user->interested_in = $request->interested_in ? $request->interested_in : $user->interested_in;
    $user->password = $request->password ? $request->password : $user->password;
    $user->picture_url = $request->picture_url ? $request->picture_url : $user->picture_url;
    $user->long = $request->long ? $request->long : $user->long;
    $user->lat = $request->lat ? $request->lat : $user->lat;
    $user->gender = $request->gender ? $request->gender : $user->gender;


    if($user->save()) {
        return response()->json([
            "status" => "Success",
            "data" => $user
        ]);
    }
    return response()->json(["status" => "Error"]);
}

function getUsers(){
}

function getContact(){
}

function switchBlock(){
}

function switchLike(){
}
}