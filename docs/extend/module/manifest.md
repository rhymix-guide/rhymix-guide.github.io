---
outline: [2, 4]
---

# 모듈 정보 및 설정

::: danger
🚧 이 문서는 초안을 작성중인 문서이다.
:::

## 모듈 정보 (info.xml) <Badge type="danger" text="🚧 초안 작성중" />

`info.xml`에서 `<module>` 최상위 노드를 사용하여 모듈의 정보를 정의한다. 모듈 정보는 `info.xml` 파일의 공통 속성에 추가로 `<category>` 항목을 정의할 수 있다.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<module version="0.2">
    <title xml:lang="ko">모듈 이름</title>
    <description xml:lang="ko">모듈 설명</description>
    <!-- 모듈 버전 -->
    <version>1.0.0</version>
    <!-- 모듈 배포일 -->
    <date>2023-12-31</date>

    <!-- 모듈 카테고리 -->
    <category>service</category>

    <!-- 제작자 정보 -->
    <author email_address="author@email.host" link="https://website.host/">
        <name xml:lang="ko">제작자 이름</name>
    </author>
</module>
```

카테고리는

| ㅁ           | ㄷ  |
| ------------ | --- |
| accessory    |     |
| construction |     |
| content      |     |
| member       |     |
| migration    |     |
| service      |     |
| statistics   |     |
| system       |     |
| utility      |     |

## 모듈 설정 (module.xml) <Badge type="danger" text="🚧 초안 작성중" />

### 커스텀 네임스페이스 (namespaces) <Badge type="tip" text="Since v2.1.3" />

라이믹스는 2.1.3부터 네임스페이스를 지원한다.

모듈은 `Rhymix\Modules\모듈이름` 네임스페이스가 기본으로 사용된다. 클래스 파일의 autoload를 위해 사용되며 `Rhymix\Modules\Example1` 네임스페이스는 `modules/example1` 디렉토리를 가리킨다.

기본 네임스페이스에 대한 별칭으로 `<namespaces>` 요소를 사용하여 네임스페이스를 추가할 수 있다. 기본 네임스페이스처럼 해당 모듈의 디렉토리를 가리키며 autoload에 사용된다.

```xml
<!-- modules/example1/conf/module.xml -->
<module>
    <namespaces>
        <!-- `name` 속성에 네임스페이스를 지정 -->
        <namespace name="VendorName\Example1" />
    </namespaces>
</module>
```

```php
// 기본 네임스페이스
use Rhymix\Modules\Example1\Models\ConfigModel;
//         modules/example1/models/ConfigModel.php
---------------------------^

// 예시한 커스텀 네임스페이스
use VendorName\Example1\Models\ConfigModel;
//     modules/example1/models/ConfigModel.php
-----------------------^
```

기본 네임스페이스와 커스텀 네임스페이스 모두 `modules/example1/models/ConfigModel.php` 파일을 가리킨다. 디렉토리는 반드시 소문자만 사용해야 하며, 파일명은 CamelCase를 사용하는 것을 권장한다. 필요하다면 디렉토리에 snake_case를 사용할 수 있다.

::: tip -> [네임스페이스와 autoload 자세히 알아보기](/reference/namespace-and-autoload)
:::

---

### 최상위 클래스 (classes) <Badge type="tip" text="Since v2.1.3" />

모듈의 최상위 클래스를 정의하는데 사용한다.
이 최상위 클래스는 모듈의 설치나 업데이트를 위한 구성을 정의하거나 모듈을 구성하는 정보를 담는 객체를 생성하는데 사용된다.

```xml
<classes>
    <!-- `name` 속성에 `src/ModuleBase.php` 파일을 지정한 예시 -->
    <class type="default" name="Src\ModuleBase" />
    <class type="install" name="Src\ModuleBase" />
</classes>
```

최상위 클래스로 사용되는 `default`와 설치와 업데이트 관리에 사용되는 `install` 클래스를 분리하여 지정할 수 있다.

`name` 속성에 네임스페이스로 클래스를 지정할 수 있으며, `Rhymix\Modules\모듈이름` 또는 커스텀 네이스페이스로 지정한 전체 네임스페이스 이름에서 생략한 이름을 사용할 수 있다.

이 클래스들은 라이믹스의 `\ModuleObject` 클래스를 상속해야 한다.

```php
// src/ModuleBase.php

namespace Rhymix\Modules\Example1\Src;

// `\ModuleObject` 클래스를 상속
class ModuleBase extends \ModuleObject
{
    // ...
}
```

::: info
이 두 클래스에는 메소드를 정의하는 등 클래스의 구성요소가 많지 않으므로 같은 클래스를 사용해도 좋으며, 필요 시 분리하여 사용해도 된다.
:::

---

### 액션 정의 (actions)

`<actions>` 항목은 요청을 처리하는 클래스와 메소드를 가리킨다.  
`https://hostname/index.php?module=모듈이름&act=액션이름` 이와 같은 주소에 접근하면, `module`과 `act` 파라미터로 모듈을 찾아 `<action>` 항목에 지정된 메소드를 실행한다.

`class`에는 실행된 클래스의 네임스페이스를 포함하는 클래스 이름을 지정하고, `name`에는 실행될 메소드의 이름을 지정한다.

```xml
<actions>
    <!-- `example1` 모듈의 `dispExample1AdminConfig` 액션 정의 -->
    <action
        name="dispExample1AdminConfig"
        class="Controllers\AdminController" />

    <!-- `example1` 모듈의 `dispExample1Index` 액션 정의 -->
    <action
        name="dispExample1Index"
        class="Controllers\CommonController" />
</actions>
```

::: code-group

```php [src/controllers/AdminController.php]
// index.php?module=example&act=dispExample1AdminConfig

namespace Rhymix\Modules\Example1\Src\Controllers;

class AdminController extends \ModuleObject
{
    public function dispExample1AdminConfig()
    {
        // 실행할 코드
    }
}
```

```php [src/controllers/CommonController.php]
// index.php?module=example&act=dispExample1Index

namespace Rhymix\Modules\Example1\Src\Controllers;

class CommonController extends \ModuleObject
{
    public function dispExample1Index()
    {
        // 실행할 코드
    }
}
```

:::

#### 액션 이름의 규칙

액션의 이름에는 모듈의 이름이 포함되며, `disp`, `proc`, `get` 등의 접두사가 붙는다.

"disp|proc|get + 모듈이름 + 액션"의 조합으로 구성된다.  
"모듈이름"은 모듈이 설치된 디렉토리명이 대문자로 시작되는 문자열이며, "액션"은 기능에 따라 적절하게 이름을 지을 수 있는 문자열이다.

| 접두사 | 설명                                                             |
| ------ | ---------------------------------------------------------------- |
| disp   | 보통 화면을 출력하는 역할 (view)                                 |
| proc   | 보통 데이터를 가공(저장, 수정, 삭제)하는 역할 (controller)       |
| get    | 보통 데이터를 가져오는 역할 (model 데이터를 반환하는 controller) |

::: tip -> [액션 자세히 알아보기](/reference/module-manifest-actions)
:::

---

### 라우터 (router) <Badge type="tip" text="Since v2.1.3" /> <Badge type="danger" text="🚧 초안 작성중" />

라우터는 액션의 정보에 포함할 수 있다.

---

### 권한 (permissions) <Badge type="danger" text="🚧 초안 작성중" />

```xml
<permissions>
    <permission action="procTestSubmitData" target="view" />
</permissions>
```

---

### 권한 (grnats) <Badge type="danger" text="🚧 초안 작성중" />

```xml
<grants>
    <grant name="view" default="guest">
        <title xml:lang="ko">열람</title>
    </grant>
</grants>
```

---

### 이벤트 핸들러 (eventHandlers) <Badge type="tip" text="Since v2.1.3" /> <Badge type="danger" text="🚧 초안 작성중" />

이벤트 핸들러는 트리거를 등록, 수정, 삭제할 수 있다.

```xml
<eventHandlers>
    <!-- `moduleHandler.init` before 트리거를 등록한 예시 -->
    <eventHandler
        before="moduleHandler.init"
        class="Src\EventHandler"
        method="beforeModuleHandlerInit" />
</eventHandlers>
```

이벤트를 수신할 호출 시점 _하나를_ 선택하여 속성으로 지정해야 한다.  
`bofore`, `after` 시점은 보통 특정 기능을 처리하기 전과 후에 호출되며, `beforeAction`, `afterAction`은 모듈의 액션으로 지정된 메소드가 실행되기 전과 후에 호출된다.

`class` 속성과 `method` 속성으로 이벤트가 발생할 때 실행된 클래스와 메소드를 지정하면 된다.

```php
namespace Rhymix\Modules\모듈이름\Src;

// `class` 속성에 지정된 클래스
class EventHandler extends \ModuleObject
{
    /**
     * `moduleHandler.init` 이벤트가 발생할 때 `method` 속성으로 지정한 메소드
     *
     * @param object $triggerObject 트리거를 호출한 코드에서 전달한 객체
     */
    public function beforeModuleHandlerInit($triggerObject)
    {
        // 실행할 코드
    }
}
```

::: tip -> [트리거(이벤트) 자세히 알아보기](/reference/trigger)
:::

---

### 오류 처리 (errorHandlers) <Badge type="tip" text="Since v2.1.3" /> <Badge type="danger" text="🚧 초안 작성중" />

```xml
<errorHandlers>
    <errorHandler
        code="405"
        class="Controllers\Errors"
        method="dispErrorMethod" />
</errorHandlers>
```

<!-- ## prefixes <Badge type="tip" text="Since v2.?" /> -->
