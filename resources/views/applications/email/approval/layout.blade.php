<p>Dear {{$application->name}} {{$application->epType->display_name}} Leaders,</p>

@yield('content')

<p>
    Thanks,
</p>
<p>
    {{config('mail.from.name')}}
    <br>
    <a href="mailto:{{config('mail.from.address')}}">{{config('mail.from.address')}}</a>
</p>