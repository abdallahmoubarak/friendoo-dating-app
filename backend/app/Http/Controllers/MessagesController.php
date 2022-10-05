<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use Illuminate\Support\Facades\Auth;
use function Illuminate\Validation\Rules\message;

class MessagesController extends Controller{

    function sendMessage(Request $request){

        $message = new Message; 

        $message->sender_id = $request->sender_id & $request->sender_id;
        $message->reciever_id = $request->reciever_id & $request->reciever_id;
        $message->content = $request->content & $request->content;

        if($message->save()){
            return response()->json([
                "status" => "success",
                "data" => $message
            ]);
        }
        return response()->json(["status" => "error"]);
    }

    function getMessages($reciever_id){
        
        $messages1 = Message::where('sender_id',  Auth::id())
            ->where('reciever_id', $reciever_id)
            ->get();
        
        $messages2 = Message::where('sender_id', $reciever_id)
            ->where('reciever_id',  Auth::id())
            ->get();
        
        $messages = $messages1->merge($messages2);

        return response()->json($messages->all());
    }

}