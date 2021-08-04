@component('mail::message')
# {{ $emailDetails['title'] }}
Hello {{ $emailDetails['first_name'] }} <br>
Welcome to Digital Innovation and Skills Hub.<br><br>
DISH is an e-learning platform developed to provide access to youth and women to develop employment skills. Through DISH, online short certificate courses of 3 months are created and made available. The courses increase the employability of youth and women because they link to key emerging sectors in employment and contribute to stability, peace and resilience.
   
@component('mail::button', ['url' => $emailDetails['url']])
Login
@endcomponent

If you have any issues logging in with your new password please contact us elearning.project@kiu.ac.ug 

Thanks,

{{ config('app.name') }}
@endcomponent