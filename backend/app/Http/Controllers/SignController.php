<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SignController extends Controller{

    function signIn(Request $request){
        $name =  $request->name;
        return 'hi '.$name;
    }


}