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
        //
        $support_depts = Support_depts::all();
        // return $result;
        $response = ['success'=>true, 'data'=>$support_depts];
        return response()->json($response, 201);
    }

    public function submitTicket(Request $request, $email, $role)
    {   
        // return $request;
        $support = $request->support_data;
        $request->replace($support);

        $validator  = Validator::make($request->all(), [ 
            'support_dept'      => 'required|string|max:255', 
            'support_subject'   => 'required|string|max:255', 
            'support_message'   => 'required|string|max:65000',
            // $email              => 'required|string|max:255',
            // $role               => 'required|string|max:255', 
        ]);

        

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 501);
        }
        
        $support_dept    = Sanitizes::my_sanitize_string( $request->support_dept );
        $support_subject = Sanitizes::my_sanitize_string( $request->support_subject );
        $support_message = Sanitizes::my_sanitize_string( $request->support_message );
        $email           = Sanitizes::my_sanitize_string( $email );
        $role            = Sanitizes::my_sanitize_string( $role );

        // return $support_subject;

        $payload = [
            'email'             =>$email,
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
            $response = ['success'=>true, 'data'=>"Failed"];
            return response()->json($response, 201);
        }
    }

    public function getTicket($email, $role)
    {   
        if($role == "student"){
            //
            // $support_tickets = Support_tickets::all();
            $support_tickets = Support_tickets::where([['email', $email], ['role', $role]])->paginate(5);
            
            $response = ['success'=>true, 'data'=>$support_tickets];
            return response()->json($response, 201);
        }else if($role == "manager"){

            // check the managers table and fetch the persons department.
            // compare the department with the ticket deprtment
            // return result

            // $manager_data = Managers::where('email', $email)->get()->first();
            // $manager_dept = $manager_data->dept;

            $support_tickets = Support_tickets::paginate(5);
            
            $response = ['success'=>true, 'data'=>$support_tickets];
            return response()->json($response, 200);
        }else if($role == "superadministrator"){
            $support_tickets = Support_tickets::paginate(5);
            
            $response = ['success'=>true, 'data'=>$support_tickets];
            return response()->json($response, 200);
        }
    }

    public function getTicketReply($email, $role)
    {   
        if($role == "student"){
            $support_data = DB::table('support_tickets_replies')
                ->join('support_tickets', 'support_tickets_replies.ticket_id', '=', 'support_tickets.id')
                ->select('support_tickets_replies.support_reply', 'support_tickets_replies.created_at AS reply_date', 'support_tickets.*')
                ->where([['support_tickets.email', $email], ['support_tickets.role', $role]])
                ->paginate(5);
        }else if($role == "manager"){
            $support_data = DB::table('support_tickets_replies')
                ->join('support_tickets', 'support_tickets_replies.ticket_id', '=', 'support_tickets.id')
                ->select('support_tickets_replies.support_reply', 'support_tickets_replies.created_at AS reply_date', 'support_tickets.*')
                // ->where([['support_tickets.email', $email], ['support_tickets.role', $role]])
                ->paginate(5);
        }else if($role == "superadministrator"){
            $support_data = DB::table('support_tickets_replies')
                ->join('support_tickets', 'support_tickets_replies.ticket_id', '=', 'support_tickets.id')
                ->select('support_tickets_replies.support_reply', 'support_tickets_replies.created_at AS reply_date', 'support_tickets.*')
                // ->where([['support_tickets.email', $email], ['support_tickets.role', $role]])
                ->paginate(5);
        }

        $response = ['success'=>true, 'data'=> $support_data ];
        return response()->json($response, 201);
    }

    public function getTicketReplyById(Request $request, $email, $role)
    {   
        $ticket_id = $request->ticket_id;

        $ticket_data = Support_tickets::where([['id', $ticket_id]])->get()->all();
        // $product_data = Product::where('id', '=', $product_id)->first();
        $reply_data = DB::table('support_tickets_replies')
            ->join('support_tickets', 'support_tickets_replies.ticket_id', '=', 'support_tickets.id')
            ->select('support_tickets_replies.support_reply', 'support_tickets_replies.created_at AS reply_date', 'support_tickets.support_dept', 'support_tickets.support_subject', 'support_tickets.support_message')
            ->where([['support_tickets_replies.ticket_id', $ticket_id]])
            ->get()->all();

        $response = ['success'=>true, 'data'=> [ "ticket_data"=> $ticket_data, "reply_data"=> $reply_data ]];
        return response()->json($response, 201);
    }

    public function submitTicketReply(Request $request, $email, $role)
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
            return response()->json($response, 501);
        }
        
        $ticketId       = Sanitizes::my_sanitize_number( $request->ticketId );
        $ticket_reply   = Sanitizes::my_sanitize_string( $request->ticket_reply );
        $email          = Sanitizes::my_sanitize_string( $email );
        $role           = Sanitizes::my_sanitize_string( $role );

        // return $support_subject;

        $payload = [
            'email'         =>$email,
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
            $response = ['success'=>true, 'data'=>"Failed"];
            return response()->json($response, 201);
        }
    }
}
