---
outline: [2, 4]
---

# 모듈 정보 및 설정

::: danger
이 문서는 초안을 작성중인 문서이다.
:::

## 모듈 정보 (info.xml) <Badge type="danger" text="초안 작성중" />

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

## 모듈 설정 (module.xml) <Badge type="danger" text="초안 작성중" />

### 네임스페이스 (namespaces) <Badge type="tip" text="Since v2.1.?" />

라이믹스는 2.1.3부터 네임스페이스를 지원한다. 모듈은 `Rhymix\Modules\모듈이름` 네임스페이스가 기본으로 사용된다. 클래스 오토로드를 위해 사용되며 `Rhymix\Modules\Example1` 네임스페이스는 `modules/example1` 디렉토리를 가리킨다.

기본 네임스페이스에 더해 `<namespaces>` 요소를 사용하여 네임스페이스를 추가할 수 있으며, 기본 네임스페이스와 마찬가지로 해당 모듈의 디렉토리를 가리키며 오토로드에 사용된다.

```xml
<namespaces>
    <namespace name="VendorName\Extension" />
</namespaces>
```

::: warning
어떤 이름을 지정하더라도 해당 모듈의 디렉토리를 가리키지만 `Rhymix\*`로 시작하는 네임스페이스를 사용하지 않도록 하자.
:::

### 클래스 (classes) <Badge type="tip" text="Since v2.1.3" /> <Badge type="danger" text="초안 작성중" />

```xml
<classes>
    <class type="default" name="Src\Module" />
    <class type="install" name="Src\Module" />
</classes>
```

### 액션 (Action) <Badge type="danger" text="초안 작성중" />

액션은 요청을 처리하기위해 수신하는 모듈의 메서드이다. 액션은 모듈의 고유한 이름을 포함한 이름을 가진다.

```xml
<actions>
    <!-- 관리자 페이지의 인덱스 액션 (admin-index) -->
    <action
        name="dispExample1AdminIndex"
        class="Controllers\Admin"
        admin-index="true" />

    <!-- 사용자 페이지의 인덱스 액션 (idex) -->
    <action
        name="dispExample1Index"
        class="Controllers\Common"
        idex="true" />
</actions>
```

| 속성                                             | 설명                   | 요구 버전 |
| ------------------------------------------------ | ---------------------- | --------- |
| [name](#action-name)                             | 액션의 이름            | >=        |
| [admin-index](#action-admin-index)               |                        | >=        |
| [cache-control](#action-cache-control)           |                        |           |
| [check_var](#action-check-var)                   |                        | >=        |
| [check-csrf](#action-check-csrf)                 |                        | >=        |
| [class](#action-type-or-class)                   | 액션을 처리하는 클래스 | >= v2.1   |
| [error-handlers](#action-error-handlers)         |                        | >=        |
| [global_route](#action-global-route)             |                        | >=        |
| [index](#action-index)                           |                        |           |
| [menu_index](#action-menu-index)                 |                        | >=        |
| [menu_name](#action-menu-name)                   |                        | >=        |
| [meta-noindex](#action-meta-noindex)             |                        | >=        |
| [method](#action-method)                         |                        | >=        |
| [permissions](#action-permissions)               | 권한 설정              | >=        |
| [route](#action-route)                           |                        | >=        |
| [ruleset](#action-ruleset)                       |                        | >=        |
| [session](#action-session)                       |                        |           |
| [setup_index](#action-setup-index)               |                        |           |
| [simple_setup_index](#action-simple-setup-index) |                        |           |
| [standalone](#action-standalone)                 |                        | >=        |
| [type](#action-type-or-class)                    |                        | >=        |

#### 필수 속성

액션의 이름(`name`)은 필수 속성이며, `type` 또는 `class` 속성 중 하나를 선택하여 지정해야 한다.

##### name {#action-name}

URL로 요청되어 호출된 메소드의 이름이다. 액션 이름은 `(disp|proc|get)` + `모듈명` + `액션` 조합의 문자열이며, URL에 `act` 파라미터로 사용되며, 모듈의 컨트롤러 클래스에서 메소드의 이름으로도 사용된다.

!!모듈이름의 규칙 링크

##### type & class {#action-type-or-class}

#### 메뉴

##### menu_index {#action-menu-index}

##### menu_name {#action-menu-name}

#### HTTP 메소드 & 라우팅

##### global_route {#action-global-route}

##### method {#action-method}

##### route {#action-route}

##### standalone {#action-standalone}

#### 보안, 검증

##### check_var {#action-check-var}

##### check-csrf {#action-check-csrf}

##### permissions {#action-permissions}

##### ruleset {#action-ruleset}

#### 기타

##### admin-index {#action-admin-index}

관리페이지 주 메뉴

##### cache-control {#action-cache-control}

##### error-handlers {#action-error-handlers}

오류 핸들러

##### index {#action-index}

##### meta-noindex {#action-meta-noindex}

meta robots noindex

##### session {#action-session}

##### setup_index {#action-setup-index}

##### simple_setup_index {#action-simple-setup-index}

### 라우터 (Router) <Badge type="danger" text="초안 작성중" />

라우터는 액션의 정보에 포함할 수 있다.

### 권한 (permissions) <Badge type="danger" text="초안 작성중" />

```xml
<permissions>
    <permission action="procTestSubmitData" target="view" />
</permissions>
```

### 오류 (errorHandlers) <Badge type="danger" text="초안 작성중" />

```xml
<errorHandlers>
    <errorHandler code="405" class="Controllers\Errors" method="dispErrorMethod" />
</errorHandlers>
```

### 이벤트 (eventHandlers) <Badge type="danger" text="초안 작성중" />

```xml
<eventHandlers>
    <!-- shutdown 핸들러 등록 -->
    <eventHandler before="moduleHandler.init" class="Src\EventHandler" method="beforeModuleHandlerInit" />

    <!-- 디버그바 출력 -->
    <eventHandler after="display" class="Src\EventHandler" method="afterDisplay" />
</eventHandlers>
```

### 권한 (grnats) <Badge type="danger" text="초안 작성중" />

```xml
<grants>
    <grant name="view" default="guest">
        <title xml:lang="ko">열람</title>
        <title xml:lang="en">View</title>
    </grant>
</grants>
```

<!-- ## prefixes <Badge type="tip" text="Since v2.?" /> -->
