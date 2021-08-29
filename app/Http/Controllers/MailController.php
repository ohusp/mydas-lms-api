<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Subscription_plans;
use App\Subscriptions;
use JWTAuth;
use JWTAuthException;
use Mail;
use App\Mail\SubscriptionPayment;
use App\Mail\RenewSubscriptionPayment;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;
use App\Encrypt\Encrypt;
use Illuminate\Support\Facades\Storage;
use File;



class MailController extends Controller
{   
    public static function sendEmail($emailDetails, $mailType)
    {  
        // Mail::to($email)->send(new $mailType($emailDetails));
    }
}