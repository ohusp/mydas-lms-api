<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class WelcomeMailAssociate extends Mailable
{
    use Queueable, SerializesModels;
    public $details;
   
    /**
     * Create a new message instance.
     *
     * @return void
     */
    // get from controller
    public function __construct($emailDetails)
    {
        $this->emailDetails = $emailDetails;
    }
   
    /**
     * Build the message.
     *
     * @return $this
     */
    // sends this to view
    public function build()
    {
        return $this->markdown('emails.welcomeMailAssociate')
                    ->with('emailDetails', $this->emailDetails);
    }
}