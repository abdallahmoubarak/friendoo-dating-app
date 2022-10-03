<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;

class MessagesController extends Controller{

    function sendMessage(Request $request){

        $message = new Message; 

        $message->sender_id = $request->sender_id & $request->sender_id;
        $message->reciever_id = $request->reciever_id & $request->reciever_id;
        $message->content = $request->content & $request->content;

        if($message->save()){
            return response()->json([
                "status" => "Success",
                "data" => $message
            ]);
        }
    }

    

}