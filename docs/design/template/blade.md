---
outline: [2, 5]
---

# 템플릿 문법 (v2) <Badge type="tip" text="Since Rhymix v2.2" />

::: danger
이 문서는 초안을 작성중인 문서이다.
:::

템플릿 문법(v2)는 [Laravel의 Blade](https://laravel.com/docs/10.x/blade) 문법을 차용하여 만들어졌다. Blade는 PHP 문법과 매우 유사하기 때문에 쉽게 익힐 수 있다.

Blade 문법을 차용하여 템플릿 파서는 Rhymix에 맞게 새로 작성되었다. 기능적 특성으로 인해 Laravel이 지원하는 일부 지시자(directive)는 지원하지 않으며 특성에 따라 다르게 해석될 수 있다. Rhymix에 특화된 지시자를 추가로 제공한다.

::: tip 공식 매뉴얼 참고를 권장 함
이 가이드는 템플릿 기능을 완전히 설명하지 못할 수 있고, v1 템플릿 문법과 호환되는 내용은 설명하지 않았으므로 공식 매뉴얼 또한 참고하는 것을 권장한다.

-> [Rhymix 매뉴얼 - 템플릿 문법 v2](https://rhymix.org/manual/theme/template_v2)

:::

## 데이터 출력

```blade
Hello, {{ $name }}.
```

### 필터

| 필터                                                       | 설명                                                                     | 옵션                                  |
| ---------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------- |
| [autoescape](#filter-eacape)                               | 자동 escape (이중 인코딩하지 않음)                                       |                                       |
| [autolang](#filter-autolang)                               | 자동 escape하되, 언어코드인 경우 escape하지 않음                         |                                       |
| [date](#filter-date)                                       | timestamp 날짜 포맷 변환. `date()`                                       | 포맷.<br>기본 값: `Y-m-d H:i:s`       |
| [escape](#filter-eacape)                                   | 강제 escape (이중 인코딩)                                                |                                       |
| [escapejs](#filter-escapejs)<br>별칭: js                   | JS 문자열에 넣을 수 있는 형태로 escape. `escape_js()`                    |                                       |
| [join](#filter-join)                                       | 배열을 문자열로 함침. `implode()`                                        | 구분자.<br>기본 값: `,`               |
| [json](#filter-json)                                       | JSON 인코딩. `json_encode()`                                             |                                       |
| [link](#filter-link)                                       | URL 문자열을 `<a>` 링크 태그로 변환<br>(`noescape` 필터가 적용 됨)       | URL.<br>기본 값: 대상 문자열          |
| [lower](#filter-case-trim)                                 | 소문자로 변환. `strtolower()`                                            |                                       |
| [nl2br](#filter-nl2br)                                     | 개행 문자를 `<br>` 태그로 변환. `nl2br()`<br>(`noescape` 필터가 적용 됨) |                                       |
| [noescape](#filter-eacape)                                 | escape 하지 않음. `{!! $value !!}`                                       |                                       |
| [number_format](#filter-number-format)<br>별칭: format     | 숫자에 천 단위 쉼표 표시                                                 | 반올림 소수점 자릿수.<br>기본 값: `0` |
| [number_shorten](#filter-number-shorten)`<br>별칭: shorten | 숫자를 "123.4K"와 같은 형태로 줄여서 표시                                | 표시할 자릿수.<br>기본 값: `2`        |
| [strip_tags](#filter-strip-tags)<br>별칭: strip            | HTML 태그 제거                                                           | 허용할 태그.<br>기본 값: 없음         |
| [trim](#filter-case-trim)                                  | 앞뒤 공백제거. `trim()`                                                  |                                       |
| [upper](#filter-case-trim)                                 | 대문자로 변환. `strtoupper()`                                            |                                       |
| [urlencode](#filter-urlencode)                             | URL 인코딩. `rawurlencode()`                                             |                                       |

#### autoescape, escape, noescape {#filter-eacape}

#### autolang {#filter-autolang}

#### escapejs, js {#filter-escapejs}

#### date {#filter-date}

#### number_shorten, shorten {#filter-number-shorten}

```blade
{{ 123|number_shorten }}<br>
{{ 1234|number_shorten }}<br>
{{ 12345|number_shorten }}<br>
{{ 123555555|number_shorten:0 }}<br>
{{ 123555555|number_shorten:1 }}<br>
{{ 123555555|number_shorten:2 }}<br>
{{ 123555555|number_shorten:3 }}<br>
{{ 123555555|number_shorten:4 }}<br>

<!-- 결과 -->

```

#### link {#filter-link}

출력하려는 대상 문자열이 URL이라면 링크로 변환하거나, 대상 문자열에 URL을 지정하여 링크를 생성할 수 있다.

```blade
@php
    $title = 'Rhymix 공식 사이트';
    $url = 'https://rhymix.org';
@endphp

{{ $url | link }}
-> `<a href="https://rhymix.org">https://rhymix.org</a>` // [!code highlight]

{{ $title | link:$url }}
-> `<a href="https://rhymix.org">Rhymix 공식 사이트</a>` // [!code highlight]
```

::: warning 헷갈리지 않도록 유의하자
옵션이 없을 때는 대상 문자열을 URL로 사용하여 링크를 생성하고, 옵션이 있으면 대상 문자열은 링크를 걸 텍스트로 사용하므로 옵션에는 URL을 지정해야 한다.
:::

#### 기타

##### number_format, format {#filter-number-format}

`number_format()` 함수의 별칭이다.

```blade
{{ number_format(1111.5555) }}
{{ 1111.5555 | number_format }}
{{ 1111.5555 | format }}
-> 1,112 // [!code highlight]

{{ number_format(1111.5555, 2) }}
{{ 1111.5555 | number_format:2 }}
{{ 1111.5555 | format:2 }}
-> 1,111.56 // [!code highlight]
```

##### upper, lower, trim {#filter-case-trim}

각 `strtoupper()`, `strtolower()`, `trim()` 함수의 별칭이다

```blade
{{ strtoupper('Hello') }}
{{ 'Hello' | upper }}
-> 'HELLO' // [!code highlight]

{{ strtolower('Hello') }}
{{ 'Hello' | lower }}
-> 'hello' // [!code highlight]

{{ trim('     Hello     ') }}
{{ '     Hello     ' | trim }}
-> 'Hello' // [!code highlight]
```

##### strip_tags, strip {#filter-strip-tags}

`strip_tags()` 함수의 별칭이다.

```blade
@php
    $str = '<strong><em>Hello</em></strong>';
@endphp

{{ strip_tags($str, '<strong>') }}
{{ strip_tags($str, ['strong']) }}
{{ $str | strip_tags:'<strong>' }}
{{ $str | strip:'<strong>' }}
-> '&lt;strong&gt;Hello&lt;/strong&gt;' // [!code highlight]
```

##### nl2br {#filter-nl2br}

`nl2br()` 함수의 별칭이다.

```blade
@php
    $str = "Hello\nWorld";
@endphp

{{ nl2br($str) }}
-> `Hello&lt;br /&gt;World` // [!code highlight]

{!! nl2br($str) !!}
{{ $str | nl2br }}
-> 'Hello<br />World' // [!code highlight]
```

##### join {#filter-join}

`implode()` 함수의 별칭이다.

```blade
@php
    $arr = ['Hello', 'World'];
@endphp

{{ implode($arr) }}
{{ $arr | join:'' }}
-> `HelloWorld` // [!code highlight]

{{ implode(', ', $arr) }}
{{ $arr | join }}
-> 'Hello, World' // [!code highlight]

{{ implode('-', $arr) }}
{{ $arr | join:'-' }}
-> 'Hello-World' // [!code highlight]
```

`implode()` 함수는 구분자 기본 값이 없지만, `join` 필터는 `, `를 기본 값으로 사용하므로 `implode(', ', $array)`와 동일하다.

##### urlencode {#filter-urlencode}

`rawurlencode()` 함수의 별칭이다.

```blade
@php
    $blog = 'https://domain/posts?search=';
    $query = 'Hello World';
@endphp

{{ $blog . rawurlencode($query) }}
{{ $blog }}{{ $query | urlencode }}
-> `https://domain/posts?search=Hello%20World` // [!code highlight]

{{ rawurlencode($blog . $query) }}
{{ $blog . $query | urlencode }}
-> https%3A%2F%2Fdomain%2Fposts%3Fsearch%3DHello%20World // [!code highlight]
```

## 제어문

### 조건문

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

### 반복문

```blade
<!-- foreach 구문 -->
@foreach ($array as $key => $value)
    ...
@endforeach

<!-- for 구문 -->
@for ($i = 0; $i < 10; $i++)
    {{ $i }}
@endfor

<!-- while 구문 -->
@while ($true)
    ...
@endwhile
```

::: details 비교하여 보기
::: code-group

```php [PHP]
// foreach 구문
<?php foreach($array as $key => $value): ?>
    ...
<?php endforeach; ?>

// for 구문
<?php for($i = 0; $i < 10; $i++): ?>
    <?= $i ?>
<?php endfor; ?>

// while 구문
<?php while($true): ?>
    ...
<?php endwhile; ?>
```

<!-- prettier-ignore -->
```html [v1:주석형]
<!-- foreach 구문 -->
<!--@foreach($array as $key => $value)-->
    ...
<!--@endforeach-->

<!-- for 구문 -->
<!--@for($i = 0; $i < 10; $i++)-->
    {$i}
<!--@endfor-->

<!-- while 구문 -->
<!--@while($true)-->
    ...
<!--@endwhile-->
```

<!-- prettier-ignore -->
```html [v1:태그형]
<!-- foreach 구문 -->
<block loop="$array => $key, $value">
    ...
</block>

<!-- for 구문 -->
<block loop="$i=0;$i<10;$i++">
    {$i}
</block>

<!-- while 구문 -->
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
