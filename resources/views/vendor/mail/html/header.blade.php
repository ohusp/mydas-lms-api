<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'DISH')
<img src="https://codeesa.kiu.ac.ug/images/logos/DISH%20Logo(3).png" class="logo" alt="Digital Innovation and Skills Hub Logo"><br>
{{ $slot }}
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
