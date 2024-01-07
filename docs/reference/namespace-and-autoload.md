# 네임스페이스와 autoload

라이믹스는 `Rhymix\*`로 시작하는 네임스페이스를 사용한다. `Rhymix\Framework`는 라이믹스의 주요 기능을 가리키고, `Rhymix\Modules`는 라이믹스의 모듈을 가리킨다.

## 모듈 네임스페이스 (namespace)

모듈은 `Rhymix\Modules\모듈이름` 네임스페이스를 사용할 수 있으며, 개별 모듈의 `modules/모듈이름` 디렉토리를 가리키고 있다.

`example1` 모듈은 `modules/example1` 디렉토리에 있고 `Rhymix\Modules\Example1` 네임스페이스를 사용할 수 있다.

```php
# 모듈 네임스페이스 사용 예시
use Rhymix\Modules\Example1\Models\ConfigModel;
```

## autoload (autoload)

모듈 네임스페이스는 모듈이 가진 클래스 파일을 autoload하는데 사용된다.

단, 라이믹스는 하위 호환성 때문에 PSR-4 또는 PSR-0 표준안을 따르지 않으며, 다음과 같은 규칙을 가진다.

- 디렉토리는 **반드시** 소문자로만 사용
- 파일명은 CamelCase 사용 권장

```php
use Rhymix\Modules\Example1\Models\ConfigModel;
// ✅      modules/example1/models/ConfigModel.php // [!code highlight]
// ❌      modules/Example1/Models/ConfigModel.php // [!code error]

use Rhymix\Modules\MyAwesomeModule\Models\ConfigModel;
// ✅      modules/myawesomemodule/models/ConfigModel.php // [!code highlight]
// ❌      modules/myawesomemodule/models/configmodel.php // [!code error]
// ❌      modules/MyAwesomeModule/Models/ConfigModel.php // [!code error]
```

## 커스텀 네임스페이스

기본 네임스페이스 대신 직접 네임스페이스를 지정할 수 있다. 이 커스텀 네임스페이스도 모듈의 디렉토리를 가리는 `Rhymix\Modules\모듈이름` 네임스페이스와 역할은 같이 "별칭"으로 사용된다.

모듈의 설정을 담은 `conf/module.xml` 파일에 `<namespace>` 항목을 추가하면 된다.

```xml
<!-- modules/awesomecart/conf/module.xml -->
<module>
    <namespaces>
        <namespace name="Kkidogi\RxExtensions\ShoppingCart" /> // [!code highlight]
    </namespaces>
</module>
```

이 설정은 `modules/awesomecart` 디렉토리에 있으므로 `Kkidogi\RxExtensions\ShoppingCart` 네임스페이스는 이 `modules/awesomecart` 디렉토리를 가리킨다.

```php
# 기본 네임스페이스 사용
use Rhymix\Modules\AwesomeCart\DataAggregators\Product; // [!code highlight]
// ->      modules/awesomecart/dataaggregators\Product.php
------------------------------^

# 예시한 커스텀 네임스페이스 사용
use Kkidogi\RxExtensions\ShoppingCart\DataAggregators\Product; // [!code highlight]
// ->             modules/awesomecart/dataaggregators/Product.php
-------------------------------------^
```

<!--
::: info
`Rhymix\Modules\모듈이름` 기본 네임스페이스는 모듈이름 부분부터 모두 소문자로 변경되어 디렉토리를 찾으므로 다음과 같이 모두 같은 파일을 찾아낸다.
하지만 결국 해당 클래스 파일의 `namespace` 선언에 따르므로 선언과 일치하는 네임스페이스로 사용해야하며 혼용하지 않도록 주의해야 한다.

```php
use Rhymix\Modules\AwesomeCart\DataAggregators\Product;
use Rhymix\Modules\Awesomecart\Dataaggregators\Product;
use Rhymix\Modules\AWESOMECART\DATAAGGREGATORS\Product;
// ->      modules/awesomecart/dataaggregators\Product.php
-------------------^^^^^^^^^^^ ^^^^^^^^^^^^^^^
```
:::
-->

::: tip 커스텀 네임스페이스의 역할
커스텀 네임스페이스는 단순히 `Rhymix\Modules\모듈이름`의 별칭일 뿐이다.

다만, 모듈 이름을 변경할 때 수정해야 할 코드가 줄고, 커스텀 네임스페이스를 그대로 유지할 수 있어서 외부에서 해당 모듈의 클래스를 사용한 코드 또한 변경을 줄일 수 있다.
:::

::: warning
네임스페이스는 _가능한_ 고유한 이름을 사용하자.  
예제에서 예시한 이름이나 타인의 네임스페이스를 따라 사용하지 않아야 한다. 보통 회사 이름 등 조직의 이름을 사용하거나 github/gitlab 계정의 ID 등 자신만의 특별한 닉네임을 사용하기도 한다.

예시:

- RxLtdCompany\ShoppingCart
- RxDevTipKr\Examples\Example1
- Kkidogi\RhymixExtensions\Dummy

:::
