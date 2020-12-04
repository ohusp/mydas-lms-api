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
    <th style="float: left; padding-top: 10px;">Name:</td>
    <td>{{ $emailDetails['patient_name'] }}</td>
  </tr>
  <tr>
    <th style="float: left; padding-top: 10px;">Age:</td>
    <td>{{ $emailDetails['age'] }}</td>
  </tr>
  <tr>
    <th style="float: left; padding-top: 10px;">National:</td>
    <td>{{ $emailDetails['nationality'] }}</td>
  </tr>
  <tr>
    <th style="float: left; padding-top: 10px;">Passport Number:</td>
    <td>{{ $emailDetails['passport_number'] }}</td>
  </tr>
  <tr>
    <th style="float: left; padding-top: 10px;">Vessel:</td>
    <td>{{ $emailDetails['vessel'] }}</td>
  </tr>
  <tr>
    <th style="float: left; padding-top: 10px;">Arrival From:</td>
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
    <th style="float: left; padding-top: 10px;">Name of Officer:</td>
    <td>{{ $emailDetails['name_of_officer'] }}</td>
  </tr>
  <tr>
    <th style="float: left; padding-top: 10px;">Position:</td>
    <td>{{ $emailDetails['position'] }}</td>
  </tr>
  <tr>
    <th style="float: left; padding-top: 10px;">Date:</td>
    <td>{{ $emailDetails['date'] }}</td>
  </tr>
  <tr>
    <th style="float: left; padding-top: 10px;">Time:</td>
    <td>{{ $emailDetails['time'] }}</td>
  </tr>
  <tr>
    <th style="float: left; padding-top: 10px;">Time Zone:</td>
    <td>{{ $emailDetails['time_zone'] }}</td>
  </tr>
</table>

@endcomponent


<span style="font-size: 12px">Powered by: <span style="color: #ca333a">Cam</span><span style="color: #2167ac">Medics</span></span>
@endcomponent