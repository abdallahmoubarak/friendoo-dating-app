<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Block;
use App\Models\Favorite;
use Tymon\JWTAuth\Contracts\JWTSubject;

class UsersController extends Controller{
    
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

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

/* The logic behind the get interested function is:
    1. finding the user by id
    2. looking for blocked users
    3. including the user id in none interested list
    4. returning list of interested without none interested_in
*/

function getInterested($id){
    
    $user = User::find($id);
    $blocked = Block::where('user_id',$id)
                ->where('state',1)
                ->get();
    
    $blocked_ids = array();
    $blocked_ids[] = $id;

    foreach ($blocked as $block) {
        $blocked_ids[] = $block['blocked_id'];
    }
    
    $users= User::where('gender', $user->interested_in)
            ->whereNotIn('id', $blocked_ids )
            ->get();

    return response()->json([
        "status" => "Success",
        "data" => $users
    ]);

    return response()->json(["status" => "Error"]);

}

// contacts are those users who have messages between current user

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
    }
    else{
        $blocked = new Block;
        $blocked->user_id = $id;
        $blocked->blocked_id = $request->blocked_id;
        $blocked->state = 1;
    }
    $blocked->save();
    return response()->json(["status" => "Success"]);

}

function switchLike(Request $request, $id){

    $liked = Favorite::where('user_id',$id)
                ->where('liked_id',$request->liked_id)
                ->first();
    if($liked){
        $liked->state = !$liked->state;
    }
    else{
        $liked = new Favorite;
        $liked->user_id = $id;
        $liked->liked_id = $request->liked_id;
        $liked->state = 1;
    }
    $liked->save();
    return response()->json(["status" => "Success"]);

}
}