@component('mail::message')
# {{ $emailDetails['title'] }}
Hello {{ $emailDetails['first_name'] }} <br>
Thank you for Subscribing to Mydas Tutors.<br><br>
Your subscription for {{ $emailDetails['plan_name']}} was successful.<br>

Amount: {{ $emailDetails['amount_paid'] }} <br>
Transaction Reference: {{ $emailDetails['transaction_ref'] }} <br>
   
@component('mail::button', ['url' => $emailDetails['url']])
Login
@endcomponent

If you have any issues logging in with your new password please contact us support@mydastutors.com

Thanks,

{{ config('app.name') }}
@endcomponent