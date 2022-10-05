<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Block;
use App\Models\Favorite;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UsersController extends Controller{
    
public function getJWTIdentifier(){
    return $this->getKey();
}

public function getJWTCustomClaims(){
    return [];
}

function updateUser(Request $request){

    $user = User::find(Auth::id());
    $user->name = $request->name ? $request->name : $user->name;
    $user->bio = $request->bio ? $request->bio : $user->bio;
    $user->birthdate = $request->birthdate ? $request->birthdate : $user->birthdate;
    $user->interested_in = $request->interested_in ? $request->interested_in : $user->interested_in;
    $user->status = $request->status ? $request->status : $user->status;
    $user->password = $request->password ? $request->password : $user->password;
    $user->picture_url = $request->picture_url ? $request->picture_url : $user->picture_url;
    $user->long = $request->long ? $request->long : $user->long;
    $user->lat = $request->lat ? $request->lat : $user->lat;
    $user->gender = $request->gender ? $request->gender : $user->gender;

    if($user->save()) {
        return response()->json([
            "status" => "success",
            "data" => $user
        ]);
    }
    return response()->json(["status" => "error"]);
}

/* The logic behind the get interested function is:
    1. finding the user by id
    2. finding blocked and liked users
    3. including those users id in none interested list
    4. returning list of interested without none interested_in
*/

function getInterested(){

    $user = User::find(Auth::id());
    $blocked = Block::where('user_id', Auth::id())
                ->where('state',1)
                ->get();
    $liked = Favorite::where('user_id', Auth::id())
            ->where('state',1)
            ->get();
    
    $excepted_ids = array();
    $excepted_ids[] = Auth::id();

    foreach ($blocked as $block) {
        $excepted_ids[] = $block['blocked_id'];
    }
    foreach ($liked as $like) {
        $excepted_ids[] = $like['liked_id'];
    }
    
    $users=User::where('gender', $user->interested_in)
            ->whereNotIn('id', $excepted_ids )
            ->get();
    
    return response()->json([
        "status" => "success",
        "data" => $users
    ]);

    return response()->json(["status" => "Error"]);

}

function getFavorites(){

    $users = DB::table('users')
        ->join('favorites', function ($join) {
            $join->on('users.id', '=', 'favorites.liked_id')
                ->where('favorites.user_id', '=', Auth::id());
        })
        ->select('users.*', 'favorites.state as favorite')
        ->get();

    return response()->json([
        "status" => "success",
        "data" => $users
    ]);

    return response()->json(["status" => "Error"]);
}

/* contacts are those users who have messages between current user */

function getContacts(){

    $user = User::find(Auth::id());
    $blocked = Block::where('user_id', Auth::id())
                ->where('state',1)
                ->get();
    
    $excepted_ids = array();
    $excepted_ids[] = Auth::id();

    foreach ($blocked as $block) {
        $excepted_ids[] = $block['blocked_id'];
    }

    $users=User::where('gender', $user->interested_in)
            ->whereNotIn('id', $excepted_ids )
            ->get();

    return response()->json([
        "status" => "success",
        "data" => $users
    ]);

    return response()->json(["status" => "error"]);

}

function switchBlock(Request $request){

    $blocked = Block::where('user_id', Auth::id())
                ->where('blocked_id',$request->blocked_id)
                ->first();
    if($blocked){
        $blocked->state = !$blocked->state;
    }
    else{
        $blocked = new Block;
        $blocked->user_id =  Auth::id();
        $blocked->blocked_id = $request->blocked_id;
        $blocked->state = 1;
    }
    $blocked->save();
    return response()->json(["status" => "success"]);

}

function switchLike(Request $request){

    $liked = Favorite::where('user_id', Auth::id())
                ->where('liked_id',$request->liked_id)
                ->first();
    if($liked){
        $liked->state = !$liked->state;
    }
    else{
        $liked = new Favorite;
        $liked->user_id =  Auth::id();
        $liked->liked_id = $request->liked_id;
        $liked->state = 1;
    }
    $liked->save();
    return response()->json(["status" => "success"]);

}
}