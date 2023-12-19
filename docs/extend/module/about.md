# 라이믹스 모듈 만들기

::: danger
이 문서는 초안을 작성중인 문서이다.
:::

모듈은 MVC 구조를 가지며 `Rhymix\Modules\{모듈이름}` Namespace로 구성할 수 있다.

다음과 같이 모듈의 기본 클래스를 정의할 수 있다.

```php
// file: modules/MyModule/controllers/Base.php

namespace Rhymix\Modules\MyModule\Controllers;

use ModuleObject;

class Base extends ModuleObject
{

}
```

기능을 구성하는 파일 구조는 자유롭게 구성할 수 있으며, `module.xml` 파일에서 API를 정의할 수 있다.

```xml
<?xml version="1.0" encoding="utf-8"?>
<module>
    <classes>
        <class type="default" name="Controllers\Base" />
    </classes>

    <actions />
    <eventHandlers />
    <menus />
    <grants />
</module>
```
