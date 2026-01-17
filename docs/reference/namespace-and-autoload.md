# 네임스페이스와 autoload

라이믹스는 `Rhymix\`로 시작하는 네임스페이스를 사용한다. `Rhymix\` 네임스페이스는 라이믹스의 주요 기능과 확장 기능들을 위해 예약되어 있다.

- `Rhymix\Framework` : 라이믹스를 구성하는 주요 프레임워크 기능
- `Rhymix\Addons\애드온명` : `addons` 폴더의 개별 애드온
- `Rhymix\Modules\모듈명` : `modules` 폴더의 개별 모듈
- `Rhymix\Widgets\위젯명` : `widgets` 폴더의 개별 위젯

```
.
├── addons _____________ Rhymix\Addons
│   └── adminlogging ___ Rhymix\Addons\Adminlogging
├── common
│   └── framework ______ Rhymix\Framework
├── modules ____________ Rhymix\Modules
│   └── board __________ Rhymix\Modules\Board
└── widgets ____________ Rhymix\Widgets
    └── content ________ Rhymix\Widgets\Content
```


## 모듈 네임스페이스 예시

모듈은 `Rhymix\Modules\모듈이름` 네임스페이스를 사용할 수 있으며, 개별 모듈의 `modules/모듈이름` 디렉토리를 가리킨다.

`example1` 모듈은 `modules/example1` 디렉토리에 있고 `Rhymix\Modules\Example1` 네임스페이스를 사용할 수 있다.

::: code-group

```php [modules/example1/models/ConfigModel.php]
// modules/example1/models
namespace Rhymix\Modules\Example1\Models;

// Rhymix\Modules\Example1\Models\ConfigModel
class ConfigModel {}
```

:::

## Autoload

`Rhymix\` 네임스페이스는 정해진 경로의 파일을 자동으로 로드한다.

라이믹스는 하위 호환성 때문에 PSR-4 또는 PSR-0 표준안을 따르지 않으며, 다음과 같은 규칙을 가진다.

- 디렉토리는 **반드시** 소문자만 사용
- 파일명은 클래스 이름과 일치해야한다. **StudlyCase**(**PascalCase**) 권장

```php
use Rhymix\Modules\Example1\Models\ConfigModel;
// ✅     modules/example1/models/ConfigModel.php
// ❌     modules/Example1/Models/ConfigModel.php // [!code error]

use Rhymix\Modules\MyAwesomeModule\TopicCollectors\BasicCollector;
// ✅     modules/myawesomemodule/topiccollectors/BasicCollector.php
// ❌     modules/myawesomemodule/topiccollectors/basiccollector.php // [!code error]
// ❌     modules/MyAwesomeModule/TopicCollectors/BasicCollector.php // [!code error]

use Rhymix\Addons\Example\Base;
// ✅     addons/example/Base.php
// ❌     addons/Example/Base.php // [!code error]
```

::: details
라이믹스는 네임스페이스로 경로를 찾을 때 디렉토리는 모두 소문자로 변환되며, 클래스의 이름만 대소문자를 그대로 유지하여 파일을 찾는다.

파일명은 예외로 모두 소문자로 된 파일명을 허용하지만 권장하지 않는다.
:::

## 커스텀 네임스페이스 <Badge text="2.1.3+" type="tip" />

모듈에서는 기본 네임스페이스를 대신 할 네임스페이스를 지정할 수 있다.

모듈의 디렉토리를 가리는 `Rhymix\Modules\모듈이름` 네임스페이스와 같은 역할의 "별칭"으로 사용된다.

`conf/module.xml` 파일에 `<namespace>` 항목을 추가하면 된다.

```xml
<!-- modules/awesomecart/conf/module.xml -->
<module>
    <namespaces>
        <namespace name="Kkidogi\ShoppingCart" /> <!-- [!code highlight] -->
    </namespaces>
</module>
```

`modules/awesomecart` 모듈에 커스텀 네임스페이스 `Kkidogi\ShoppingCart`를 지정한 예시이며, `Rhymix\Modules\Awesomecart`와 같은 디렉토리를 가리키는 별칭으로 사용된다.

```php
# 기본 네임스페이스 사용
use Rhymix\Modules\Awesomecart\DataAggregators\Product; // [!code highlight]
//         modules/awesomecart/dataaggregators\Product.php
------------------------------^

# 예시한 커스텀 네임스페이스 사용
use Kkidogi\ShoppingCart\DataAggregators\Product; // [!code highlight]
//   modules/awesomecart/dataaggregators/Product.php
------------------------^
```

> [!NOTE] 별칭으로만 사용
> 커스텀 네임스페이스는 `disp모듈이름AdminAct` 처럼 모듈 이름이 포함되어야하는 메소드 이름 규칙 등으로 인해 모듈의 디렉토리명에 종속되는 문제를 해결해주진 않는다. **별칭으로만 사용**되는 것으로 이해해야 한다.



### 주의사항

커스텀 네임스페이스는 라이믹스 관리페이지에서 "모듈 업데이트"를 수행해야 라이믹스에서 등록, 인식되어 정상적으로 사용할 수 있다.

네임스페이스가 등록되기 전에 템플릿이나 이벤트 핸들러 등에서 커스텀 네임스페이스를 먼저 사용하면 오류가 발생하므로 주의해야 한다.

> [!NOTE]
> `files/config.php` 파일에 `namespaces` 항목에 커스텀 네임스페이스가 등록된다.

## 네임스페이스 주의 사항

### Rhymix 네임스페이스 제한

`Rhymix\` 네임스페이스는 라이믹스의 핵심 기능을 위해 예약되어 있으며, 정해진 네임스페이스 외에 다른 용도로 사용하지 않아야 한다.

> [!NOTE]
> 아직 공개되지 않은 기능을 위해 `Rhymix\Plugins`, `Rhymix\Themes` 네임스페이스가 예약되어 있다.

### 커스텀 네임스페이스
커스텀 네임스페이스는 _고유한_ 이름을 사용해야한다.

예시 코드에 포함된 네임스페이스를 복사하여 사용하거나 다른 제작자의 네임스페이스를 따라 사용하지 않아야 한다. 보통 회사 이름 등 조직의 이름을 사용하거나 github 계정의 ID 등 자신만의 특별한 닉네임을 사용하기도 한다.

활용 예시:
- RxLtd\ShoppingCart
- RxDevTips\Module\Example1
- Kkidogi\RhymixExtensions\Dummy

비추천 예시:
- Rhymix\ShoppingCart : `Rhymix\` 네임스페이스를 규칙 외 사용 금지
- RhymixExtensions\AwesomeModule : `Rhymix` 브랜드 사용은 권장하지 않음
