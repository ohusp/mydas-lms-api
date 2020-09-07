@component('mail::message')
# {{ $details['title'] }}
Hello {{ $details['first_name'] }} <br>
Welcome to Kampala International University.<br>
Click the button below to login with your username and password
   
@component('mail::button', ['url' => $details['url']])
Login
@endcomponent

If you have any issues logging in with your new password please contact us support@elearning.kiu.ac.ug 

Thanks,

{{ config('app.name') }}
@endcomponent