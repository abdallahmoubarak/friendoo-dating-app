<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Block;


class UsersController extends Controller{

function updateUser(Request $request, $id){

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

function getInterested($id){
    
    $user = User::find($id);
    $users= User::where('gender', $user->interested_in)->get();
    return response()->json([
        "status" => "Success",
        "data" => $users
    ]);
    return response()->json(["status" => "Error"]);

}

function getContact($id){

    // return response()->json([
    //     "status" => "Success",
    //     "data" => $users
    // ]);
    // return response()->json(["status" => "Error"]);

}

function switchBlock(Request $request, $id){

    $blocked = Block::where('user_id',$id)
                ->where('blocked_id',$request->blocked_id)
                ->first();
    if($blocked){
        $blocked->state = !$blocked->state;
    }else{
        $blocked = new Block;
        $blocked->user_id = $id;
        $blocked->blocked_id = $request->blocked_id;
        $blocked->state = 1;
    }
    $blocked->save();
    return response()->json(["status" => "Success"]);

}

function switchLike($id){
}
}