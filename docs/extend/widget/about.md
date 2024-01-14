# 라이믹스 위젯 만들기

::: danger
🚧 이 문서는 초안을 작성중인 문서이다.
:::

## 위젯 정보 <Badge type="danger" text="🚧 초안 작성중" />

### 설정

## 파일 구성 <Badge type="danger" text="🚧 초안 작성중" />

위젯은 구성이 단순하여 `widgetname.class.php` 파일 하나로 동작한다.

```shell
widgets/widgetname/
├── conf
│   └── info.xml          # 위젯 정보 // [!code highlight]
├── queries               # XML 쿼리
├── skins                 # 스킨 디렉토리
│   └── default
└── widgetname.class.php    # 위젯 클래스 // [!code highlight]
```

폴더명, 파일명 그리고 클래스 이름 모두 소문자를 사용해야 한다.

위젯 클래스는 `WidgetHandler` 클래스를 상속받아 구현하고, 위젯의 이름과 같은 클래스를 포함해야 한다. 이 클래스의 `proc()` 메서드에서 위젯이 출력하는 문자열을 반환해야 한다.

```php{7-11}
// widgets/widgetname/widgetname.class.php 파일
class widgetname extends \WidgetHandler
{
    /**
     * @param object $args 위젯 설정
     */
    public function proc(object $args): string
    {
        // 위젯 코드
        return 'widget 컨텐츠';
    }
}
```

이것만으로도 위젯은 동작한다.

## 네임스페이스 활용하기

라이믹스가 위젯에서는 네임스페이스를 지원하지는 않지만 위젯에서도 네임스페이스를 활용할 수 있다.
`class_alias()` 함수를 이용해 라이믹스가 인식할 수 있게 위젯의 메인 클래스를 별칭으로 노출해야 한다.

```php
// widgets/example1/example1.class.php 파일
namespace VendorName\Widget\Example1; // [!code ++]

class Widget extends \WidgetHandler
{
    /** 위젯 이름 */
    const NAME = 'example1'; // [!code ++]

    public function proc(object $args): string
    {
        // 위젯 코드
        return 'widget 컨텐츠';
    }
}

// 라이믹스가 인식할 수 있도록 `VendorName\Widget\Example1\Widget` 클래스를
// `example1` 별칭으로 노출한다.
class_alias(Widget::class, Widget::NAME); // [!code ++]
```

::: tip 🎉 위젯 개발 템플릿
이처럼 네임스페이스를 활용하여 위젯 개발을 위한 템플릿을 이용할 수 있다.  
-> [위젯 개발 템플릿 사용하기](https://github.com/rhymix-guide/rhymix-widget)
:::
