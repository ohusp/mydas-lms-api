<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Patients;
use App\Doctors;
use App\Ports;
use App\Pharmacies;
use App\Labs;
use App\Messagesdoc;
use App\Messagesport;
use App\Messageslab;
use App\Messagespharm;

// namespace App\Http\Controllers;
// use Illuminate\Http\Request;
// use App\User;
use JWTAuth;
use JWTAuthException;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;

class MessageController extends Controller
{   
    // public function __construct()
    // {
    //     $this->middleware('role:superadministrator');
    // }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $patients = Patients::paginate(10);
        // return $result;
        $response = ['success'=>true, 'data'=>$patients];
        return response()->json($response, 201);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeIdentity(Request $request)
    {   
        // 
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    //  //////////////// PATIENT AND DOCTORS //////////////////////////////////////////////////
    public function patientGetDocMessages($doctor_id, $patient_id)
    {
        $messages_data = Messagesdoc::where([['patient_id', $patient_id], ['doc_id', $doctor_id]])->get()->first();
        if($messages_data){
            $messages = unserialize($messages_data->message);
            $messages_data->message = $messages;
            $response = ['success'=>true, 'messages'=> $messages_data];
        }else{
            $response = ['success'=>false, 'messages'=> "no message"];
        }
        
        return response()->json($response, 201);
    }

    public function docGetPatientMessages($patient_id, $doctor_id)
    {
        $messages_data = Messagesdoc::where([['patient_id', $patient_id], ['doc_id', $doctor_id]])->get()->first();
        if($messages_data){
            $messages = unserialize($messages_data->message);
            $messages_data->message = $messages;
            $response = ['success'=>true, 'messages'=> $messages_data];
        }else{
            $response = ['success'=>false, 'messages'=> "no message"];
        }
        
        return response()->json($response, 201);
    }

    public function patientSendDocMessage(Request $request, $doctor_id, $patient_id)
    {   
        // return $request;
        $validator  = Validator::make($request->all(), [ 
            'message' => 'required|string|max:65000', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            return "";
        }
        $message    = Sanitizes::my_sanitize_string($request->message);

        $messages = array();
        $exist = \App\Messagesdoc::where([['patient_id', $patient_id], ['doc_id', $doctor_id]])->get()->first();
        if($exist){
            // get the messages in database
            $message_data = Messagesdoc::where([['patient_id', $patient_id], ['doc_id', $doctor_id]])->get()->first();
            // unserialize it so i can push the new message in
            $db_messages = unserialize($message_data->message);
            // $message = "{"."doctor:".$doctor_id.":".$message."}";
            $message = "{"."patient|-|".$patient_id."|-|".$message."|-|notFile"."}";
            array_push($db_messages, $message);
            // serialize it so i can save to db
            $messages = serialize($db_messages);

            $payload = [
                'doc_id'        =>$doctor_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];

            $message_data->update($payload);
            return $message_data;
        }else{
            // $message = "{"."doctor:".$doctor_id.":".$message."}";
            $message = "{"."patient|-|".$patient_id."|-|".$message."|-|notFile"."}";
            // push message into messages array
            array_push($messages, $message);
            $messages = serialize($messages);
            // return $messages;
            $payload = [
                'doc_id'        =>$doctor_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];
                    
            $messages = new \App\Messagesdoc($payload);
            $messages->save();
            return $messages;
        }
    }

    public function docSendPatientMessage(Request $request, $patient_id, $doctor_id)
    {   
        $validator  = Validator::make($request->all(), [ 
            'message' => 'required|string|max:65000', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            return "";
        }
        $message    = Sanitizes::my_sanitize_string($request->message);
        // return $request;
        $messages = array();
        $exist = \App\Messagesdoc::where([['patient_id', $patient_id], ['doc_id', $doctor_id]])->get()->first();
        if($exist){
            // get the messages in database
            $message_data = Messagesdoc::where([['patient_id', $patient_id], ['doc_id', $doctor_id]])->get()->first();
            // unserialize it so i can push the new message in
            $db_messages = unserialize($message_data->message);
            $message = "{"."doctor|-|".$doctor_id."|-|".$message."|-|notFile"."}";
            // $message = "{"."patient:".$patient_id.":".$message."}";
            array_push($db_messages, $message);
            // serialize it so i can save to db
            $messages = serialize($db_messages);

            $payload = [
                'doc_id'        =>$doctor_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];

            $message_data->update($payload);
            return $message_data;
        }else{
            $message = "{"."doctor|-|".$doctor_id."|-|".$message."|-|notFile"."}";
            // $message = "{"."patient:".$patient_id.":".$message."}";
            // push message into messages array
            array_push($messages, $message);
            $messages = serialize($messages);
            // return $messages;
            $payload = [
                'doc_id'        =>$doctor_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];
                    
            $messages = new \App\Messagesdoc($payload);
            $messages->save();
            return $messages;
        }
    }

    public function patientSendDocFile(Request $request, $doctor_id, $patient_id) {
        // return $id;
        $validator = Validator::make($request->all(), [ 
            'send_file' => 'mimes:pdf,jpeg,png,jpg|max:500'
        ]);
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        $file = $request->file('send_file');
        $fileName = $doctor_id .'-'. time().'.'.$file->getClientOriginalName();
        $originalFileName = $file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'chat/files/patient/doctor/'.$doctor_id;
        $destinationPath = public_path().$path;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);
        $filePath = config('global.file_path2') . "chat/files/patient/doctor/".$doctor_id."/".$fileName;
        // ///////////////////////////////////////////////////////////////////////////////////////
        $messages = array();
        $exist = \App\Messagesdoc::where([['patient_id', $patient_id], ['doc_id', $doctor_id]])->get()->first();
        if($exist){
            // get the messages in database
            $message_data = Messagesdoc::where([['patient_id', $patient_id], ['doc_id', $doctor_id]])->get()->first();
            // unserialize it so i can push the new message in
            $db_messages = unserialize($message_data->message);
            // $message = "{"."doctor_file:".$doctor_id.":".$filePath.":".$originalFileName."}";
            $message = "{"."patient_file|-|".$patient_id."|-|".$filePath."|-|".$originalFileName."}";
            array_push($db_messages, $message);
            // serialize it so i can save to db
            $messages = serialize($db_messages);

            $payload = [
                'doc_id'        =>$doctor_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];

            $message_data->update($payload);
            return $message_data;
        }else{
            // $message = "{"."doctor_file|-|".$doctor_id."|-|".$filePath."|-|".$originalFileName."}";
            $message = "{"."patient_file|-|".$patient_id."|-|".$filePath."|-|".$originalFileName."}";
            // push message into messages array
            array_push($messages, $message);
            $messages = serialize($messages);
            // return $messages;
            $payload = [
                'doc_id'        =>$doctor_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];
                    
            $messages = new \App\Messagesdoc($payload);
            $messages->save();
            return $messages;
        }
    }

    public function docSendPatientFile(Request $request, $patient_id, $doctor_id) {
        // return $id;
        $validator = Validator::make($request->all(), [ 
            'send_file' => 'mimes:pdf,jpeg,png,jpg|max:500'
        ]);
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        $file = $request->file('send_file');
        $fileName = $doctor_id .'-'. time().'.'.$file->getClientOriginalName();
        $originalFileName = $file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'chat/files/doctor/'.$doctor_id;
        $destinationPath = public_path().$path;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);
        $filePath = config('global.file_path2') . "chat/files/doctor/".$doctor_id."/".$fileName;
        // ///////////////////////////////////////////////////////////////////////////////////////
        $messages = array();
        $exist = \App\Messagesdoc::where([['patient_id', $patient_id], ['doc_id', $doctor_id]])->get()->first();
        if($exist){
            // get the messages in database
            $message_data = Messagesdoc::where([['patient_id', $patient_id], ['doc_id', $doctor_id]])->get()->first();
            // unserialize it so i can push the new message in
            $db_messages = unserialize($message_data->message);
            $message = "{"."doctor_file|-|".$doctor_id."|-|".$filePath."|-|".$originalFileName."}";
            // $message = "{"."patient|-|".$patient_id."|-|".$request->message."}";
            array_push($db_messages, $message);
            // serialize it so i can save to db
            $messages = serialize($db_messages);

            $payload = [
                'doc_id'        =>$doctor_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];

            $message_data->update($payload);
            return $message_data;
        }else{
            $message = "{"."doctor_file|-|".$doctor_id."|-|".$filePath."|-|".$originalFileName."}";
            // $message = "{"."patient|-|".$patient_id."|-|".$request->message."}";
            // push message into messages array
            array_push($messages, $message);
            $messages = serialize($messages);
            // return $messages;
            $payload = [
                'doc_id'        =>$doctor_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];
                    
            $messages = new \App\Messagesdoc($payload);
            $messages->save();
            return $messages;
        }
    }

    //  //////////////// PATIENT AND PORTS //////////////////////////////////////////////////
    public function patientGetPortMessages($port_id, $patient_id)
    {
        $messages_data = Messagesport::where([['patient_id', $patient_id], ['port_id', $port_id]])->get()->first();
        if($messages_data){
            $messages = unserialize($messages_data->message);
            $messages_data->message = $messages;
            $response = ['success'=>true, 'messages'=> $messages_data];
        }else{
            $response = ['success'=>false, 'messages'=> "no message"];
        }
        
        return response()->json($response, 201);
    }

    public function portGetPatientMessages($patient_id, $port_id)
    {
        $messages_data = Messagesport::where([['patient_id', $patient_id], ['port_id', $port_id]])->get()->first();
        if($messages_data){
            $messages = unserialize($messages_data->message);
            $messages_data->message = $messages;
            $response = ['success'=>true, 'messages'=> $messages_data];
        }else{
            $response = ['success'=>false, 'messages'=> "no message"];
        }
        
        return response()->json($response, 201);
    }

    public function patientSendPortMessage(Request $request, $port_id, $patient_id)
    {   
        // return $request;
        $validator  = Validator::make($request->all(), [ 
            'message' => 'required|string|max:65000', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            return "";
        }
        $message    = Sanitizes::my_sanitize_string($request->message);

        $messages = array();
        $exist = \App\Messagesport::where([['patient_id', $patient_id], ['port_id', $port_id]])->get()->first();
        if($exist){
            // get the messages in database
            $message_data = Messagesport::where([['patient_id', $patient_id], ['port_id', $port_id]])->get()->first();
            // unserialize it so i can push the new message in
            $db_messages = unserialize($message_data->message);
            $message = "{"."patient|-|".$patient_id."|-|".$message."|-|notFile"."}";
            array_push($db_messages, $message);
            // serialize it so i can save to db
            $messages = serialize($db_messages);

            $payload = [
                'port_id'       =>$port_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];

            $message_data->update($payload);
            return $message_data;
        }else{
            $message = "{"."patient|-|".$patient_id."|-|".$message."|-|notFile"."}";
            // push message into messages array
            array_push($messages, $message);
            $messages = serialize($messages);
            // return $messages;
            $payload = [
                'port_id'       =>$port_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];
                    
            $messages = new \App\Messagesport($payload);
            $messages->save();
            return $messages;
        }
    }

    public function portSendPatientMessage(Request $request, $patient_id, $port_id)
    {   
        // return $request;
        $validator  = Validator::make($request->all(), [ 
            'message' => 'required|string|max:65000', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            return "";
        }
        $message    = Sanitizes::my_sanitize_string($request->message);
        
        $messages = array();
        $exist = \App\Messagesport::where([['patient_id', $patient_id], ['port_id', $port_id]])->get()->first();
        if($exist){
            // get the messages in database
            $message_data = Messagesport::where([['patient_id', $patient_id], ['port_id', $port_id]])->get()->first();
            // unserialize it so i can push the new message in
            $db_messages = unserialize($message_data->message);
            $message = "{"."port|-|".$port_id."|-|".$message."|-|notFile"."}";
            // $message = "{"."patient|-|".$patient_id."|-|".$message."}";
            array_push($db_messages, $message);
            // serialize it so i can save to db
            $messages = serialize($db_messages);

            $payload = [
                'port_id'       =>$port_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];

            $message_data->update($payload);
            return $message_data;
        }else{
            $message = "{"."port|-|".$port_id."|-|".$message."|-|notFile"."}";
            // push message into messages array
            array_push($messages, $message);
            $messages = serialize($messages);
            // return $messages;
            $payload = [
                'port_id'       =>$port_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];
                    
            $messages = new \App\Messagesport($payload);
            $messages->save();
            return $messages;
        }
    }

    public function patientSendPortFile(Request $request, $port_id, $patient_id) {
        // return $id;
        $validator = Validator::make($request->all(), [ 
            'send_file' => 'mimes:pdf,jpeg,png,jpg|max:500'
        ]);
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        $file = $request->file('send_file');
        $fileName = $port_id .'-'. time().'.'.$file->getClientOriginalName();
        $originalFileName = $file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'chat/files/patient/port/'.$port_id;
        $destinationPath = public_path().$path;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);
        $filePath = config('global.file_path2') . "chat/files/patient/port/".$port_id."/".$fileName;
        // ///////////////////////////////////////////////////////////////////////////////////////
        $messages = array();
        $exist = \App\Messagesport::where([['patient_id', $patient_id], ['port_id', $port_id]])->get()->first();
        if($exist){
            // get the messages in database
            $message_data = Messagesport::where([['patient_id', $patient_id], ['port_id', $port_id]])->get()->first();
            // unserialize it so i can push the new message in
            $db_messages = unserialize($message_data->message);
            $message = "{"."patient_file|-|".$patient_id."|-|".$filePath."|-|".$originalFileName."}";
            array_push($db_messages, $message);
            // serialize it so i can save to db
            $messages = serialize($db_messages);

            $payload = [
                'port_id'        =>$port_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];

            $message_data->update($payload);
            return $message_data;
        }else{
            $message = "{"."patient_file|-|".$patient_id."|-|".$filePath."|-|".$originalFileName."}";
            // push message into messages array
            array_push($messages, $message);
            $messages = serialize($messages);
            // return $messages;
            $payload = [
                'port_id'       =>$port_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];
                    
            $messages = new \App\Messagesport($payload);
            $messages->save();
            return $messages;
        }
    }

    public function portSendPatientFile(Request $request, $patient_id, $port_id) {
        // return $id;
        $validator = Validator::make($request->all(), [ 
            'send_file' => 'mimes:pdf,jpeg,png,jpg|max:500'
        ]);
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        $file = $request->file('send_file');
        $fileName = $port_id .'-'. time().'.'.$file->getClientOriginalName();
        $originalFileName = $file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'chat/files/port/'.$port_id;
        $destinationPath = public_path().$path;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);
        $filePath = config('global.file_path2') . "chat/files/port/".$port_id."/".$fileName;
        // ///////////////////////////////////////////////////////////////////////////////////////
        $messages = array();
        $exist = \App\Messagesport::where([['patient_id', $patient_id], ['port_id', $port_id]])->get()->first();
        if($exist){
            // get the messages in database
            $message_data = Messagesport::where([['patient_id', $patient_id], ['port_id', $port_id]])->get()->first();
            // unserialize it so i can push the new message in
            $db_messages = unserialize($message_data->message);
            $message = "{"."port_file|-|".$port_id."|-|".$filePath."|-|".$originalFileName."}";
            // $message = "{"."patient|-|".$patient_id."|-|".$request->message."}";
            array_push($db_messages, $message);
            // serialize it so i can save to db
            $messages = serialize($db_messages);

            $payload = [
                'port_id'       =>$port_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];

            $message_data->update($payload);
            return $message_data;
        }else{
            $message = "{"."port_file|-|".$port_id."|-|".$filePath."|-|".$originalFileName."}";
            // $message = "{"."patient|-|".$patient_id."|-|".$request->message."}";
            // push message into messages array
            array_push($messages, $message);
            $messages = serialize($messages);
            // return $messages;
            $payload = [
                'port_id'       =>$port_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];
                    
            $messages = new \App\Messagesport($payload);
            $messages->save();
            return $messages;
        }
    }

    //  //////////////// PATIENT AND LABS //////////////////////////////////////////////////
    public function patientGetLabMessages($lab_id, $patient_id)
    {
        $messages_data = Messageslab::where([['patient_id', $patient_id], ['lab_id', $lab_id]])->get()->first();
        if($messages_data){
            $messages = unserialize($messages_data->message);
            $messages_data->message = $messages;
            $response = ['success'=>true, 'messages'=> $messages_data];
        }else{
            $response = ['success'=>false, 'messages'=> "no message"];
        }
        
        return response()->json($response, 201);
    }

    public function labGetPatientMessages($patient_id, $lab_id)
    {
        $messages_data = Messageslab::where([['patient_id', $patient_id], ['lab_id', $lab_id]])->get()->first();
        if($messages_data){
            $messages = unserialize($messages_data->message);
            $messages_data->message = $messages;
            $response = ['success'=>true, 'messages'=> $messages_data];
        }else{
            $response = ['success'=>false, 'messages'=> "no message"];
        }
        
        return response()->json($response, 201);
    }

    public function patientSendLabMessage(Request $request, $lab_id, $patient_id)
    {   
        // return $request;
        $messages = array();
        $exist = \App\Messageslab::where([['patient_id', $patient_id], ['lab_id', $lab_id]])->get()->first();
        if($exist){
            // get the messages in database
            $message_data = Messageslab::where([['patient_id', $patient_id], ['lab_id', $lab_id]])->get()->first();
            // unserialize it so i can push the new message in
            $db_messages = unserialize($message_data->message);
            $message = "{"."patient|-|".$patient_id."|-|".$request->message."|-|notFile"."}";
            array_push($db_messages, $message);
            // serialize it so i can save to db
            $messages = serialize($db_messages);

            $payload = [
                'lab_id'        =>$lab_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];

            $message_data->update($payload);
            return $message_data;
        }else{
            $message = "{"."patient|-|".$patient_id."|-|".$request->message."|-|notFile"."}";
            // push message into messages array
            array_push($messages, $message);
            $messages = serialize($messages);
            // return $messages;
            $payload = [
                'lab_id'        =>$lab_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];
                    
            $messages = new \App\Messageslab($payload);
            $messages->save();
            return $messages;
        }
    }

    public function labSendPatientMessage(Request $request, $patient_id, $lab_id)
    {   
        $validator  = Validator::make($request->all(), [ 
            'message' => 'required|string|max:65000', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            return "";
        }
        $message    = Sanitizes::my_sanitize_string($request->message);
        // return $request;
        $messages = array();
        $exist = \App\Messageslab::where([['patient_id', $patient_id], ['lab_id', $lab_id]])->get()->first();
        if($exist){
            // get the messages in database
            $message_data = Messageslab::where([['patient_id', $patient_id], ['lab_id', $lab_id]])->get()->first();
            // unserialize it so i can push the new message in
            $db_messages = unserialize($message_data->message);
            $message = "{"."lab|-|".$lab_id."|-|".$message."|-|notFile"."}";
            // $message = "{"."patient|-|".$patient_id."|-|".$message."}";
            array_push($db_messages, $message);
            // serialize it so i can save to db
            $messages = serialize($db_messages);

            $payload = [
                'lab_id'        =>$lab_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];

            $message_data->update($payload);
            return $message_data;
        }else{
            $message = "{"."lab|-|".$lab_id."|-|".$message."|-|notFile"."}";
            // push message into messages array
            array_push($messages, $message);
            $messages = serialize($messages);
            // return $messages;
            $payload = [
                'lab_id'        =>$lab_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];
                    
            $messages = new \App\Messageslab($payload);
            $messages->save();
            return $messages;
        }
    }

    public function patientSendLabFile(Request $request, $lab_id, $patient_id) {
        // return $id;
        $validator = Validator::make($request->all(), [ 
            'send_file' => 'mimes:pdf,jpeg,png,jpg|max:500'
        ]);
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        $file = $request->file('send_file');
        $fileName = $lab_id .'-'. time().'.'.$file->getClientOriginalName();
        $originalFileName = $file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'chat/files/patient/lab/'.$lab_id;
        $destinationPath = public_path().$path;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);
        $filePath = config('global.file_path2') . "chat/files/patient/lab/".$lab_id."/".$fileName;
        // ///////////////////////////////////////////////////////////////////////////////////////
        $messages = array();
        $exist = \App\Messageslab::where([['patient_id', $patient_id], ['lab_id', $lab_id]])->get()->first();
        if($exist){
            // get the messages in database
            $message_data = Messageslab::where([['patient_id', $patient_id], ['lab_id', $lab_id]])->get()->first();
            // unserialize it so i can push the new message in
            $db_messages = unserialize($message_data->message);
            $message = "{"."patient_file|-|".$patient_id."|-|".$filePath."|-|".$originalFileName."}";
            array_push($db_messages, $message);
            // serialize it so i can save to db
            $messages = serialize($db_messages);

            $payload = [
                'lab_id'        =>$lab_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];

            $message_data->update($payload);
            return $message_data;
        }else{
            $message = "{"."patient_file|-|".$patient_id."|-|".$filePath."|-|".$originalFileName."}";
            // push message into messages array
            array_push($messages, $message);
            $messages = serialize($messages);
            // return $messages;
            $payload = [
                'lab_id'        =>$lab_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];
                    
            $messages = new \App\Messageslab($payload);
            $messages->save();
            return $messages;
        }
    }

    public function labSendPatientFile(Request $request, $patient_id, $lab_id) {
        // return $id;
        $validator = Validator::make($request->all(), [ 
            'send_file' => 'mimes:pdf,jpeg,png,jpg|max:500'
        ]);
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        $file = $request->file('send_file');
        $fileName = $lab_id .'-'. time().'.'.$file->getClientOriginalName();
        $originalFileName = $file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'chat/files/lab/'.$lab_id;
        $destinationPath = public_path().$path;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);
        $filePath = config('global.file_path2') . "chat/files/lab/".$lab_id."/".$fileName;
        // ///////////////////////////////////////////////////////////////////////////////////////
        $messages = array();
        $exist = \App\Messageslab::where([['patient_id', $patient_id], ['lab_id', $lab_id]])->get()->first();
        if($exist){
            // get the messages in database
            $message_data = Messageslab::where([['patient_id', $patient_id], ['lab_id', $lab_id]])->get()->first();
            // unserialize it so i can push the new message in
            $db_messages = unserialize($message_data->message);
            $message = "{"."lab_file|-|".$lab_id."|-|".$filePath."|-|".$originalFileName."}";
            // $message = "{"."patient|-|".$patient_id."|-|".$request->message."}";
            array_push($db_messages, $message);
            // serialize it so i can save to db
            $messages = serialize($db_messages);

            $payload = [
                'lab_id'        =>$lab_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];

            $message_data->update($payload);
            return $message_data;
        }else{
            $message = "{"."lab_file|-|".$lab_id."|-|".$filePath."|-|".$originalFileName."}";
            // $message = "{"."patient|-|".$patient_id."|-|".$request->message."}";
            // push message into messages array
            array_push($messages, $message);
            $messages = serialize($messages);
            // return $messages;
            $payload = [
                'lab_id'        =>$lab_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];
                    
            $messages = new \App\Messageslab($payload);
            $messages->save();
            return $messages;
        }
    }

    //  //////////////// PATIENT AND PHARM //////////////////////////////////////////////////
    public function patientGetPharmMessages($pharm_id, $patient_id)
    {
        $messages_data = Messagespharm::where([['patient_id', $patient_id], ['pharm_id', $pharm_id]])->get()->first();
        if($messages_data){
            $messages = unserialize($messages_data->message);
            $messages_data->message = $messages;
            $response = ['success'=>true, 'messages'=> $messages_data];
        }else{
            $response = ['success'=>false, 'messages'=> "no message"];
        }
        
        return response()->json($response, 201);
    }

    public function pharmGetPatientMessages($patient_id, $pharm_id)
    {
        $messages_data = Messagespharm::where([['patient_id', $patient_id], ['pharm_id', $pharm_id]])->get()->first();
        if($messages_data){
            $messages = unserialize($messages_data->message);
            $messages_data->message = $messages;
            $response = ['success'=>true, 'messages'=> $messages_data];
        }else{
            $response = ['success'=>false, 'messages'=> "no message"];
        }
        
        return response()->json($response, 201);
    }

    public function patientSendPharmMessage(Request $request, $pharm_id, $patient_id)
    {   
        // return $request;
        $validator  = Validator::make($request->all(), [ 
            'message' => 'required|string|max:65000', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            return "";
        }
        $message    = Sanitizes::my_sanitize_string($request->message);

        $messages = array();
        $exist = \App\Messagespharm::where([['patient_id', $patient_id], ['pharm_id', $pharm_id]])->get()->first();
        if($exist){
            // get the messages in database
            $message_data = Messagespharm::where([['patient_id', $patient_id], ['pharm_id', $pharm_id]])->get()->first();
            // unserialize it so i can push the new message in
            $db_messages = unserialize($message_data->message);
            $message = "{"."patient|-|".$patient_id."|-|".$message."|-|notFile"."}";
            array_push($db_messages, $message);
            // serialize it so i can save to db
            $messages = serialize($db_messages);

            $payload = [
                'pharm_id'      =>$pharm_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];

            $message_data->update($payload);
            return $message_data;
        }else{
            $message = "{"."patient|-|".$patient_id."|-|".$message."|-|notFile"."}";
            // push message into messages array
            array_push($messages, $message);
            $messages = serialize($messages);
            // return $messages;
            $payload = [
                'pharm_id'      =>$pharm_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];
                    
            $messages = new \App\Messagespharm($payload);
            $messages->save();
            return $messages;
        }
    }

    public function pharmSendPatientMessage(Request $request, $patient_id, $pharm_id)
    {   
        // return $request;
        $validator  = Validator::make($request->all(), [ 
            'message' => 'required|string|max:65000', 
        ]);

        // Return validation error
        if ($validator->fails()) { 
            return "";
        }
        $message    = Sanitizes::my_sanitize_string($request->message);
        
        $messages = array();
        $exist = \App\Messagespharm::where([['patient_id', $patient_id], ['pharm_id', $pharm_id]])->get()->first();
        if($exist){
            // get the messages in database
            $message_data = Messagespharm::where([['patient_id', $patient_id], ['pharm_id', $pharm_id]])->get()->first();
            // unserialize it so i can push the new message in
            $db_messages = unserialize($message_data->message);
            $message = "{"."pharm|-|".$pharm_id."|-|".$message."|-|notFile"."}";
            // $message = "{"."patient|-|".$patient_id."|-|".$message."}";
            array_push($db_messages, $message);
            // serialize it so i can save to db
            $messages = serialize($db_messages);

            $payload = [
                'pharm_id'      =>$pharm_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];

            $message_data->update($payload);
            return $message_data;
        }else{
            $message = "{"."pharm|-|".$pharm_id."|-|".$message."|-|notFile"."}";
            // push message into messages array
            array_push($messages, $message);
            $messages = serialize($messages);
            // return $messages;
            $payload = [
                'pharm_id'      =>$pharm_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];
                    
            $messages = new \App\Messagespharm($payload);
            $messages->save();
            return $messages;
        }
    }

    public function patientSendPharmFile(Request $request, $pharm_id, $patient_id) {
        // return $id;
        $validator = Validator::make($request->all(), [ 
            'send_file' => 'mimes:pdf,jpeg,png,jpg|max:500'
        ]);
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        $file = $request->file('send_file');
        $fileName = $pharm_id .'-'. time().'.'.$file->getClientOriginalName();
        $originalFileName = $file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'chat/files/patient/pharm/'.$pharm_id;
        $destinationPath = public_path().$path;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);
        $filePath = config('global.file_path2') . "chat/files/patient/pharm/".$pharm_id."/".$fileName;
        // ///////////////////////////////////////////////////////////////////////////////////////
        $messages = array();
        $exist = \App\Messagespharm::where([['patient_id', $patient_id], ['pharm_id', $pharm_id]])->get()->first();
        if($exist){
            // get the messages in database
            $message_data = Messagespharm::where([['patient_id', $patient_id], ['pharm_id', $pharm_id]])->get()->first();
            // unserialize it so i can push the new message in
            $db_messages = unserialize($message_data->message);
            $message = "{"."patient_file|-|".$patient_id."|-|".$filePath."|-|".$originalFileName."}";
            array_push($db_messages, $message);
            // serialize it so i can save to db
            $messages = serialize($db_messages);

            $payload = [
                'pharm_id'      =>$pharm_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];

            $message_data->update($payload);
            return $message_data;
        }else{
            $message = "{"."patient_file|-|".$patient_id."|-|".$filePath."|-|".$originalFileName."}";
            // push message into messages array
            array_push($messages, $message);
            $messages = serialize($messages);
            // return $messages;
            $payload = [
                'pharm_id'      =>$pharm_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];
                    
            $messages = new \App\Messagespharm($payload);
            $messages->save();
            return $messages;
        }
    }

    public function pharmSendPatientFile(Request $request, $patient_id, $pharm_id) {
        // return $id;
        $validator = Validator::make($request->all(), [ 
            'send_file' => 'mimes:pdf,jpeg,png,jpg|max:500'
        ]);
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        $file = $request->file('send_file');
        $fileName = $pharm_id .'-'. time().'.'.$file->getClientOriginalName();
        $originalFileName = $file->getClientOriginalName();

        // Path where the file will be saved
        $path = config('global.file_path1') . 'chat/files/pharm/'.$pharm_id;
        $destinationPath = public_path().$path;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);
        $filePath = config('global.file_path2') . "chat/files/pharm/".$pharm_id."/".$fileName;
        // ///////////////////////////////////////////////////////////////////////////////////////
        $messages = array();
        $exist = \App\Messagespharm::where([['patient_id', $patient_id], ['pharm_id', $pharm_id]])->get()->first();
        if($exist){
            // get the messages in database
            $message_data = Messagespharm::where([['patient_id', $patient_id], ['pharm_id', $pharm_id]])->get()->first();
            // unserialize it so i can push the new message in
            $db_messages = unserialize($message_data->message);
            $message = "{"."pharm_file|-|".$pharm_id."|-|".$filePath."|-|".$originalFileName."}";
            // $message = "{"."patient|-|".$patient_id."|-|".$request->message."}";
            array_push($db_messages, $message);
            // serialize it so i can save to db
            $messages = serialize($db_messages);

            $payload = [
                'pharm_id'      =>$pharm_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];

            $message_data->update($payload);
            return $message_data;
        }else{
            $message = "{"."pharm_file|-|".$pharm_id."|-|".$filePath."|-|".$originalFileName."}";
            // $message = "{"."patient|-|".$patient_id."|-|".$request->message."}";
            // push message into messages array
            array_push($messages, $message);
            $messages = serialize($messages);
            // return $messages;
            $payload = [
                'pharm_id'      =>$pharm_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];
                    
            $messages = new \App\Messagespharm($payload);
            $messages->save();
            return $messages;
        }
    }

    // ///////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // ///////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////

    public function sendMessage(Request $request, $patient_id, $sender_id)
    {   
        // return $request;
        $messages = array();
        $exist = \App\Messages::where([['patient_id', $patient_id], ['sender_id', $sender_id]])->get()->first();
        if($exist){
            // get the messages in database
            $message_data = Messages::where([['patient_id', $patient_id], ['sender_id', $sender_id]])->get()->first();
            // unserialize it so i can push the new message in
            $db_messages = unserialize($message_data->message);
            $message = "{"."sender:".$sender_id.":".$request->message."}";
            // $message = "{"."receiver:".$sender_id.":".$request->message."}";
            array_push($db_messages, $message);
            // serialize it so i can save to db
            $messages = serialize($db_messages);

            $payload = [
                'sender_id'     =>$sender_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];

            $message_data->update($payload);
            return $message_data;
        }else{
            $message = "{"."sender:".$sender_id.":".$request->message."}";
            // $message = "{"."receiver:".$sender_id.":".$request->message."}";
            // push message into messages array
            array_push($messages, $message);
            $messages = serialize($messages);
            // return $messages;
            $payload = [
                'sender_id'     =>$sender_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];
                    
            $messages = new \App\Messages($payload);
            $messages->save();
            return $messages;
        }
    }

    public function getLabMessages(Request $request, $patient_id, $lab_id)
    {
        $messages_data = Messages::where([['patient_id', $patient_id], ['lab_id', $lab_id]])->get()->first();
        if($messages_data){
            $messages = unserialize($messages_data->message);
            $messages_data->message = $messages;
            $response = ['success'=>true, 'messages'=> $messages_data];

            return response()->json($response, 201);
        }else{
            $response = ['success'=>false, 'messages'=> "No message"];

            return response()->json($response, 201);
        }
        
    }

    public function sendLabMessage(Request $request, $patient_id, $lab_id)
    {   
        // return $request;
        $messages = array();
        $exist = \App\Messages::where([['patient_id', $patient_id], ['lab_id', $lab_id]])->get()->first();
        if($exist){
            // get the messages in database
            $message_data = Messages::where([['patient_id', $patient_id], ['lab_id', $lab_id]])->get()->first();
            // unserialize it so i can push the new message in
            $db_messages = unserialize($message_data->message);
            $message = "{"."sender:".$lab_id.":".$request->message."}";
            // $message = "{"."receiver:".$lab_id.":".$request->message."}";
            array_push($db_messages, $message);
            // serialize it so i can save to db
            $messages = serialize($db_messages);

            $payload = [
                'lab_id'     =>$lab_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];

            $message_data->update($payload);
            return $message_data;
        }else{
            $message = "{"."sender:".$lab_id.":".$request->message."}";
            // $message = "{"."receiver:".$lab_id.":".$request->message."}";
            // push message into messages array
            array_push($messages, $message);
            $messages = serialize($messages);
            // return $messages;
            $payload = [
                'lab_id'        =>$lab_id,
                'patient_id'    =>$patient_id,
                'message'       =>$messages,
            ];
                    
            $messages = new \App\Messages($payload);
            $messages->save();
            return $messages;
        }
    }

    public function endAppointment(Request $request, $patient_id, $lab_id, $appointment_id)
    {   
        $status = 1;
        $appointment = Labbookappointment::where([['patient_id', $patient_id], ['lab_id', $lab_id], ['id', $appointment_id]])->get()->first();
        $appointment->status = 2;
        $appointment->save();

        $appointmentPayment = Labbookappointmentpayment::where([['patient_id', $patient_id], ['lab_id', $lab_id], ['appointment_id', $appointment_id]])->get()->first();
        $appointmentPayment->status = 2;
        $appointmentPayment->save();

        $response = ['success'=>true, 'data'=>"Apointment concluded"];
        return response()->json($response, 201);
    }

    
    

}
