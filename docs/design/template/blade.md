---
outline: [2, 5]
---

# 템플릿 문법 (v2) <Badge type="tip" text="v2.2+" />

::: danger
🚧 이 문서는 초안을 작성중인 문서이다.
:::

템플릿 문법(v2)은 [Laravel Blade](https://laravel.com/docs/10.x/blade) 문법을 차용하여 만들어졌으며, PHP 문법과 매우 비슷하기 때문에 쉽게 익힐 수 있다.

```blade
<?php
$name = 'Rhymix';
?>

Hello, {{ $name }}!
-> Hello, Rhymix! // [!code highlight]
```

HTML 태그를 인코딩하지 않고 그대로 출력하려면 `{!! $value !!}` 구문을 사용하면 된다.

```blade
<?php
$name = '<strong>Rhymix</strong>';
?>

{{ $html }}
-> &lt;strong&gt;Rhymix&lt;/strong&gt; // [!code highlight]

{!! $html !!}
-> <strong>Rhymix</strong> // [!code highlight]
```

::: info
값을 출력할 때 포맷을 변경하거나 형태를 변형해주는 Modifier를 사용할 수 있다.

-> [Modifier 살펴보기](/reference/template#modifier)
:::

## if, elseif, else, endif

조건문은 `@if`, `@elseif`, `@else`, `@endif` 지시자를 사용한다.

::: code-group

```blade [예시1]
@if ($mid === 'free')
    자유게시판
@elseif ($mid === 'notice')
    공지사항
@else
    {{ $mid }}
@endif
```

```blade [예시2]
<p class="message @if ($is_logged) logged @endif">
    ...
</p>
```

:::

## foreach

```blade
@foreach($document_list as $document)
    {{ $document->getTitle() }}
@endforeach
```
