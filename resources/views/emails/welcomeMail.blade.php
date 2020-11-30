@component('mail::message')
# {{ $emailDetails['title'] }}
Hello {{ $emailDetails['first_name'] }} <br>
Welcome to CamMedics.<br><br>
CamMedics is an innovative portal customized to deliver excellent virtual medical care and cutting edge treatment to patients across the globle.<br><br>
Click the button below to login with your username and password
   
@component('mail::button', ['url' => $emailDetails['url']])
Login
@endcomponent

If you have any issues logging in with your new password please contact us support@cammedics.com 

Thanks,

{{ config('app.name') }}
@endcomponent