@component('mail::message')
# {{ $details['title'] }}
  
The body of your message. 
   
@component('mail::button', ['url' => $details['url']])
Button Text
@endcomponent
   
Thanks,

{{ config('app.name') }}
@endcomponent