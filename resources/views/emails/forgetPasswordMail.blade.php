@component('mail::message')
# {{ $details['title'] }}
  
Please click the button below to reset your password.
   
@component('mail::button', ['url' => $details['url']])
Reset Password
@endcomponent

If you have any issues logging in with your new password please contact us support@elearning.kiu.ac.ug 

Thanks,

{{ config('app.name') }}
@endcomponent