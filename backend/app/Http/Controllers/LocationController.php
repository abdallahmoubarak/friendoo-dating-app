<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class LocationController extends Controller{

    function updateLocation(Request $request){

        $user = User::find(Auth::id());

        $user->long = $request->long ? $request->long : $user->long;
        $user->lat = $request->lat ? $request->lat : $user->lat;

        if($user->save()){
            return response()->json([
                "status" => "success",
                "data" => $user
            ]);
        }
        return response()->json(["status" => "error"]);
    }


}