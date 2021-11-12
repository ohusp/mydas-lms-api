<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use App\Managers;
use App\Support_depts;
use App\Support_tickets;
use App\Support_tickets_reply;

// namespace App\Http\Controllers;
// use Illuminate\Http\Request;
// use App\User;
use JWTAuth;
use JWTAuthException;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;

class SupportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getSupportDept()
    {
        $support_depts = Support_depts::all();
        // return $result;
        if($support_depts){
            $response = ['success'=>true, 'data'=>$support_depts];
        }else {
            $response = ['success'=>false, 'data'=>"no department"];
        }
        return response()->json($response, 200);
    }

    public function submitTicket(Request $request, $username, $role)
    {   
        // return $request;
        $support = $request->support_data;
        $request->replace($support);

        $validator  = Validator::make($request->all(), [ 
            'support_dept'      => 'required|string|max:255', 
            'support_subject'   => 'required|string|max:255', 
            'support_message'   => 'required|string|max:65000',
            // $username              => 'required|string|max:255',
            // $role               => 'required|string|max:255', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 200);
        }
        
        $support_dept    = Sanitizes::my_sanitize_string( $request->support_dept );
        $support_subject = Sanitizes::my_sanitize_string( $request->support_subject );
        $support_message = Sanitizes::my_sanitize_string( $request->support_message );
        $username        = Sanitizes::my_sanitize_string( $username );
        $role            = Sanitizes::my_sanitize_string( $role );

        $payload = [
            'username'          =>$username,
            'role'              =>$role,
            'support_dept'      =>$support_dept,
            'support_subject'   =>$support_subject,
            'support_message'   =>$support_message,
        ];
                
        $ticket = new \App\Support_tickets($payload);
        if ($ticket->save())
        {
            $response = ['success'=>true, 'data'=>"Added successfully"];
            return response()->json($response, 201);
        }else{
            $response = ['success'=>false, 'data'=>"Failed"];
            return response()->json($response, 200);
        }
    }

    public function getTicket($username, $role)
    {   
        if($role == "student" || $role == "user"){
            //
            // $support_tickets = Support_tickets::all();
            $support_tickets = Support_tickets::where([['username', $username], ['role', $role]])->paginate(10);

            if($support_tickets != "") {
                $response = ['success'=>true, 'data'=> $support_tickets ];
            }else {
                $response = ['success'=>false, 'data'=> "no ticket" ];
            }
            return response()->json($response, 200);
        }else if($role == "manager" || $role == "superadministrator"){

            // check the managers table and fetch the persons department.
            // compare the department with the ticket deprtment

            $support_tickets = Support_tickets::paginate(10);
            
            if($support_tickets != "") {
                $response = ['success'=>true, 'data'=> $support_tickets ];
            }else {
                $response = ['success'=>false, 'data'=> "no ticket" ];
            }
            return response()->json($response, 200);
        }
    }

    public function getTicketReply($username, $role)
    {   
        if($role == "student" || $role == "user"){
            $support_data = DB::table('support_tickets_replies')
                ->join('support_tickets', 'support_tickets_replies.ticket_id', '=', 'support_tickets.id')
                ->select('support_tickets_replies.support_reply', 'support_tickets_replies.created_at AS reply_date', 'support_tickets.*')
                ->where([['support_tickets.username', $username], ['support_tickets.role', $role]])
                ->paginate(10);
            if($support_data != "") {
                $response = ['success'=>true, 'data'=> $support_data ];
            }else {
                $response = ['success'=>false, 'data'=> "no ticket" ];
            }
        }else if($role == "manager" || $role == "superadministrator"){
            $support_data = DB::table('support_tickets_replies')
                ->join('support_tickets', 'support_tickets_replies.ticket_id', '=', 'support_tickets.id')
                ->select('support_tickets_replies.support_reply', 'support_tickets_replies.created_at AS reply_date', 'support_tickets.*')
                // ->where([['support_tickets.username', $username], ['support_tickets.role', $role]])
                ->paginate(10);
            if($support_data) {
                $response = ['success'=>true, 'data'=> $support_data ];
            }else {
                $response = ['success'=>false, 'data'=> "no ticket" ];
            }
        }

        
        return response()->json($response, 200);
    }

    public function getTicketReplyById(Request $request, $username, $role)
    {   
        $ticket_id = $request->ticket_id;

        $ticket_data = Support_tickets::where([['id', $ticket_id]])->get()->all();
        // $product_data = Product::where('id', '=', $product_id)->first();
        $reply_data = DB::table('support_tickets_replies')
            ->join('support_tickets', 'support_tickets_replies.ticket_id', '=', 'support_tickets.id')
            ->select('support_tickets_replies.support_reply', 'support_tickets_replies.created_at AS reply_date', 'support_tickets.support_dept', 'support_tickets.support_subject', 'support_tickets.support_message')
            ->where([['support_tickets_replies.ticket_id', $ticket_id]])
            ->get()->all();
        
        if($ticket_data != "" && $reply_data != "") {
            $response = ['success'=>true, 'data'=> [ "ticket_data"=> $ticket_data, "reply_data"=> $reply_data ]];
        }else if($ticket_data != "" && $reply_data == "") {
            $response = ['success'=>true, 'data'=> [ "ticket_data"=> $ticket_data, "reply_data"=> "no reply" ]];
        }else if($ticket_data == "" && $reply_data == "") {
            $response = ['success'=>false, 'data'=> [ "ticket_data"=> "no ticket", "reply_data"=> "no reply" ]];
        }
        return response()->json($response, 200);
    }

    public function submitTicketReply(Request $request, $username, $role)
    {   
        // return $request;
        $support = $request->reply_data;
        $request->replace($support);

        $validator  = Validator::make($request->all(), [ 
            'ticketId'      => 'required|integer|max:255', 
            'ticket_reply'   => 'required|string|max:3500', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 200);
        }
        
        $ticketId       = Sanitizes::my_sanitize_number( $request->ticketId );
        $ticket_reply   = Sanitizes::my_sanitize_string( $request->ticket_reply );
        $username       = Sanitizes::my_sanitize_string( $username );
        $role           = Sanitizes::my_sanitize_string( $role );

        // return $support_subject;

        $payload = [
            'username'      =>$username,
            'role'          =>$role,
            'ticket_id'     =>$ticketId,
            'support_reply' =>$ticket_reply,
        ];
                
        $ticket = new \App\Support_tickets_reply($payload);
        if ($ticket->save())
        {
            $response = ['success'=>true, 'data'=>"Added successfully"];
            return response()->json($response, 201);
        }else{
            $response = ['success'=>false, 'data'=>"Failed"];
            return response()->json($response, 200);
        }
    }
}
