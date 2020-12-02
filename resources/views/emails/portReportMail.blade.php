@component('mail::message')
<table style="width:100%">
    <tr>
        <td>
            <img src="https://dashboard.cammedics.com/{{ $emailDetails['logo'] }}" style="height:40px; width:auto">
        </td>
        <td>
            <br><h2>{{ $emailDetails['title'] }}</h2>
        </td>
    </tr>
</table>


@component('mail::table')
<table style="width:100%">
  <tr>
    <th style="float: left">Name:</td>
    <td>{{ $emailDetails['patient_name'] }}</td>
  </tr>
  <tr>
    <th style="float: left">Age:</td>
    <td>{{ $emailDetails['age'] }}</td>
  </tr>
  <tr>
    <th style="float: left">National:</td>
    <td>{{ $emailDetails['nationality'] }}</td>
  </tr>
  <tr>
    <th style="float: left">Passport Number:</td>
    <td>{{ $emailDetails['passport_number'] }}</td>
  </tr>
  <tr>
    <th style="float: left">Vessel:</td>
    <td>{{ $emailDetails['vessel'] }}</td>
  </tr>
  <tr>
    <th style="float: left">Arrival From:</td>
    <td>{{ $emailDetails['arrival_from'] }}</td>
  </tr>
</table>
<hr>
<strong>OBSERVATIONS</strong><br></br><br>
{{ $emailDetails['observations'] }}
<br></br>

<hr>
<strong>RECOMMENDATIONS</strong><br></br><br>
{{ $emailDetails['recommendations'] }}
<br></br>

<hr>
<table style="width:100%">
  <tr>
    <th style="float: left">Name of Officer:</td>
    <td>{{ $emailDetails['name_of_officer'] }}</td>
  </tr>
  <tr>
    <th style="float: left">Position:</td>
    <td>{{ $emailDetails['position'] }}</td>
  </tr>
  <tr>
    <th style="float: left">Date:</td>
    <td>{{ $emailDetails['date'] }}</td>
  </tr>
  <tr>
    <th style="float: left">Time:</td>
    <td>{{ $emailDetails['time'] }}</td>
  </tr>
</table>

@endcomponent


Powered by: {{ config('app.name') }}
@endcomponent