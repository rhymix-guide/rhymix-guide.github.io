# Modifier

| Modifier                                                   | 설명                                                                         | 옵션                                  |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------- |
| [autoescape](#filter-eacape)                               | 자동 escape (이중 인코딩하지 않음)                                           |                                       |
| [autolang](#filter-autolang)                               | 자동 escape하되, 언어코드인 경우 escape하지 않음                             |                                       |
| [date](#filter-date)                                       | timestamp 날짜 포맷 변환. `date()`                                           | 포맷.<br>기본 값: `Y-m-d H:i:s`       |
| [escape](#filter-eacape)                                   | 강제 escape (이중 인코딩)                                                    |                                       |
| [escapejs](#filter-escapejs)<br>별칭: js                   | JS 문자열에 넣을 수 있는 형태로 escape. `escape_js()`                        |                                       |
| [join](#filter-join)                                       | 배열을 문자열로 함침. `implode()`                                            | 구분자.<br>기본 값: `,`               |
| [json](#filter-json)                                       | JSON 인코딩. `json_encode()`                                                 |                                       |
| [link](#filter-link)                                       | URL 문자열을 `<a>` 링크 태그로 변환<br>(`noescape` Modifier가 적용 됨)       | URL.<br>기본 값: 대상 문자열          |
| [lower](#filter-case-trim)                                 | 소문자로 변환. `strtolower()`                                                |                                       |
| [nl2br](#filter-nl2br)                                     | 개행 문자를 `<br>` 태그로 변환. `nl2br()`<br>(`noescape` Modifier가 적용 됨) |                                       |
| [noescape](#filter-eacape)                                 | escape 하지 않음. `{!! $value !!}`                                           |                                       |
| [number_format](#filter-number-format)<br>별칭: format     | 숫자에 천 단위 쉼표 표시                                                     | 반올림 소수점 자릿수.<br>기본 값: `0` |
| [number_shorten](#filter-number-shorten)`<br>별칭: shorten | 숫자를 "123.4K"와 같은 형태로 줄여서 표시                                    | 표시할 자릿수.<br>기본 값: `2`        |
| [strip_tags](#filter-strip-tags)<br>별칭: strip            | HTML 태그 제거                                                               | 허용할 태그.<br>기본 값: 없음         |
| [trim](#filter-case-trim)                                  | 앞뒤 공백제거. `trim()`                                                      |                                       |
| [upper](#filter-case-trim)                                 | 대문자로 변환. `strtoupper()`                                                |                                       |
| [urlencode](#filter-urlencode)                             | URL 인코딩. `rawurlencode()`                                                 |                                       |

## autoescape, escape, noescape {#filter-eacape}

`htmlspecialchars()` 함수를 사용하여 HTML 태그 및 특수문자를 인코딩한다.

```blade
@php
    $str = '<strong class="dummy">Hello</strong>';
@endphp

{{ $str }}
{{ $str | escape }}
-> &lt;strong class=&quot;dummy&quot;&gt;Hello&lt;/strong&gt; // [!code highlight]

{!! $str !!}
-> <strong class="dummy">Hello</strong> // [!code highlight]


{{--
    `escape` Modifier는 반복 인코딩한다
    `htmlspecialchars()` 함수의 `$double_encode = false` 옵션과 같다
--}}
@php
    $str = '&lt;strong class=&quot;dummy&quot;&gt;Hello&lt;/strong&gt;';
@endphp

{{ $str | escape }}
-> &amp;lt;strong class=&amp;quot;dummy&amp;quot;&amp;gt;Hello&amp;lt;/strong&amp;gt; // [!code highlight]

```

`autoescape`는 Modifier를 사용하지 않을 때와 같고, `noescape`는 `{!! $value !!}`와 같다.

## autolang {#filter-autolang}

## escapejs, js {#filter-escapejs}

## number_shorten, shorten {#filter-number-shorten}

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

## link {#filter-link}

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

> [!warning] 헷갈리지 않도록 유의하자
> 옵션이 없을 때는 대상 문자열을 URL로 사용하여 링크를 생성하고, 옵션이 있으면 대상 문자열은 링크를 걸 텍스트로 사용하므로 옵션에는 URL을 지정해야 한다.


## date {#filter-date}

## number_format, format {#filter-number-format}

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

## upper, lower, trim {#filter-case-trim}

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

## strip_tags, strip {#filter-strip-tags}

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

## nl2br {#filter-nl2br}

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

## join {#filter-join}

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

`implode()` 함수는 구분자 기본 값이 없지만, `join` Modifier는 `, `를 기본 값으로 사용하므로 `implode(', ', $array)`와 동일하다.

## urlencode {#filter-urlencode}

`rawurlencode()` 함수의 별칭이다.

```blade
@php
    $url = 'https://domain/posts?search=';
    $query = 'Hello World';
@endphp

{{ $url . rawurlencode($query) }}
{{ $url }}{{ $query | urlencode }}
-> `https://domain/posts?search=Hello%20World` // [!code highlight]

{{ rawurlencode($url . $query) }}
{{ $url . $query | urlencode }}
-> https%3A%2F%2Fdomain%2Fposts%3Fsearch%3DHello%20World // [!code highlight]
```
