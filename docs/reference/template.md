# 템플릿 문법 (v2) <Badge type="tip" text="Since Rhymix v2.1" />

::: danger
🚧 이 문서는 초안을 작성중인 문서이다.
:::

템플릿 문법(v2)은 [Laravel Blade](https://laravel.com/docs/10.x/blade) 문법을 차용하여 만들어졌다. PHP 문법과 매우 비슷하기 때문에 쉽게 익힐 수 있고, 유용한 기능도 제공한다.

지시자(directive)로 불리는 Blade 템플릿의 구문은 `@` 기호로 시작한다.

::: tip
에디터에서 지원하는 Blade 관련 플러그인을 사용하면 문법 강조와 자동 완성 기능을 사용할 수 있다.

- [VSCode - laravel-blade](https://marketplace.visualstudio.com/items?itemName=cjhowe7.laravel-blade) - 문법 강조
- [VSCode - Laravel Blade formatter](https://marketplace.visualstudio.com/items?itemName=shufo.vscode-blade-formatter) - 코드 형식 포맷
  :::

::: info 공식 매뉴얼 참고를 권장 함
이 가이드는 템플릿 기능을 완전히 설명하지 못할 수 있고, v1 템플릿 문법과 호환되는 내용은 설명하지 않았으므로 공식 매뉴얼 또한 참고하는 것을 권장한다.

-> [Rhymix 매뉴얼 - 템플릿 문법 v2](https://rhymix.org/manual/theme/template_v2)

:::

::: info
Blade 문법을 차용하여 템플릿 파서는 Rhymix에 맞게 새로 작성되었다.  
Laravel의 기능에 특화된 지시자는 지원하지 않으며, 대신 Rhymix에 특화된 지시자를 제공한다.
:::

## 출력

```blade
<?php
$name = 'Rhymix';
?>

Hello, {{ $name }}!
-> Hello, Rhymix! <!-- [!code highlight] -->
```

HTML 태그를 인코딩하지 않고 그대로 출력하려면 `{!! $value !!}` 구문을 사용하면 된다.

```blade
<?php
$name = '<strong>Rhymix</strong>';
?>

{{ $html }}
-> &lt;strong&gt;Rhymix&lt;/strong&gt; <!-- [!code highlight] -->

{!! $html !!}
-> <strong>Rhymix</strong> <!-- [!code highlight] -->
```
### Modifier <Badge type="warning" text="권장하지 않음" />

Modifier는 출력하려는 값을 변경하여 출력하는 기능이다. 출력 값 뒤에 파이프 기호(`|`)를 사용하고, 문자열을 인코딩하거나 날짜 포맷, `implode()`, `json_encode()` 등의 기능을 간편하게 사용할 수 있다.

<span v-pre>`{{ $value | modifier }}`</span> 형태로 사용한다.

> [!WARNING]
> Modifier는 간단하게 사용할 수 있고 일부 옵션도 지원하지만, `|` 연산자와 혼동할 수 있어서 의도와 다르게 해석될 수 있다. PHP 함수나 헬퍼 함수로 쉽게 대체 가능하므로 사용을 권장하지 않는다.
>
> -> [Modifier 자세히 보기](https://rhymix.org/manual/theme/template_v2#출력_필터)

## 제어문

### @if

```blade
@if ($condition1)
    ...
@elseif ($condition2)
    ...
@else
    ...
@endif
```

::: details 비교하여 보기
::: code-group

```php [PHP]
<?php if ($condition1): ?>
    ...
<?php elseif ($condition2): ?>
    ...
<?php else: ?>
    ...
<?php endif; ?>
```

<!-- prettier-ignore -->
```html [v1:주석형]
<!--@if($condition1)-->
    ...
<!--@elseif($condition2)-->
    ...
<!--@else-->
    ...
<!--@endif-->
```

<!-- prettier-ignore -->
```html [v1:태그형]
<block cond="$condition">
    ...
</block>
<!-- 태그형은 elseif / else 구문을 지원하지 않는다 -->
```

:::

### @foreach / @for / @while

```blade
{{-- foreach --}}
@foreach ($array as $key => $value)
    ...
@endforeach

{{-- for --}}
@for ($i = 0; $i < 10; $i++)
    {{ $i }}
@endfor

{{-- while --}}
@while ($true)
    ...
@endwhile
```

::: details 비교하여 보기
::: code-group

```php [PHP]
// foreach
<?php foreach($array as $key => $value): ?>
    ...
<?php endforeach; ?>

// for
<?php for($i = 0; $i < 10; $i++): ?>
    <?= $i ?>
<?php endfor; ?>

// while
<?php while($true): ?>
    ...
<?php endwhile; ?>
```

<!-- prettier-ignore -->
```html [v1:주석형]
<!-- foreach -->
<!--@foreach($array as $key => $value)-->
    ...
<!--@endforeach-->

<!-- for -->
<!--@for($i = 0; $i < 10; $i++)-->
    {$i}
<!--@endfor-->

<!-- while -->
<!--@while($true)-->
    ...
<!--@endwhile-->
```

<!-- prettier-ignore -->
```html [v1:태그형]
<!-- foreach -->
<block loop="$array => $key, $value">
    ...
</block>

<!-- for -->
<block loop="$i=0;$i<10;$i++">
    {$i}
</block>

<!-- while -->
<block loop="$true">
    ...
</block>
```

:::

#### continue / break

#### forelse

`foreach` 반복문으로 배열의 데이터를 출력할 때, 배열이 비어있으면 "결과 없음"과 같은 메시지를 출력해야 한다면 `@if` / `@foreach` 구문을 단순하게 줄여주는 `@forelse` 구문을 사용할 수 있다.

```blade
@if (empty($members))
    No Members
@else
    @foreach ($members as $member)
        ...
    @endforeach
@endif
```

```blade
@forelse ($members as $member)
    ...
@empty
    No Members
@endforelse
```

### $loop 변수

### switch

```blade
@switch($i)
    @case(1)
        First case...
        @break

    @case(2)
        Second case...
        @break

    @default
        Default case...
@endswitch
```

::: details 비교하여 보기

```php
<?php switch($i): ?>
    <?php case 1: ?>
        First case...
        <?php break; ?>

    <?php case 2: ?>
        Second case...
        <?php break; ?>

    <?php default: ?>
        Default case...
<?php endswitch; ?>
```

:::

## include

## load

## @class
