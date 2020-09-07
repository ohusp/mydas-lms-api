<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\MyTestMail;
use Mail;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function myTestMail()
    {
        $myEmail = 'mendes.paul25@yahoo.com';
   
        $details = [
            'title' => 'Mail Test from Nicesnippets.com',
            'url' => 'https://www.nicesnippets.com'
        ];
  
        Mail::to($myEmail)->send(new MyTestMail($details));
   
        // dd("Mail Send Successfully");
        // return new MyTestMail();
        return \View::make("emails/myTestMail")->with("details", $details);
    }
}