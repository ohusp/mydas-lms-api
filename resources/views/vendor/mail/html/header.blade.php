<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'CamMedics')
<img src="https://cammedics.com/img/cam-medics.png" class="logo" alt="CamMedics Logo"><br>
{{ $slot }}
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
