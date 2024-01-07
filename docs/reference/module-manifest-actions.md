# 모듈 액션

::: danger
🚧 이 문서는 초안을 작성중인 문서이다.
:::

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

## 필수 속성

액션의 이름(`name`)은 필수 속성이며, `type` 또는 `class` 속성 중 하나를 선택하여 지정해야 한다.

### name {#action-name}

URL로 요청되어 호출된 메소드의 이름이다. 액션 이름은 `(disp|proc|get)` + `모듈명` + `액션` 조합의 문자열이며, URL에 `act` 파라미터로 사용되며, 모듈의 컨트롤러 클래스에서 메소드의 이름으로도 사용된다.

!!모듈이름의 규칙 링크

### type & class {#action-type-or-class}

## 메뉴

### menu_index {#action-menu-index}

### menu_name {#action-menu-name}

## HTTP 메소드 & 라우팅

### global_route {#action-global-route}

### method {#action-method}

### route {#action-route}

### standalone {#action-standalone}

## 보안, 검증

### check_var {#action-check-var}

### check-csrf {#action-check-csrf}

### permissions {#action-permissions}

### ruleset {#action-ruleset}

## 기타

### admin-index {#action-admin-index}

관리페이지 주 메뉴

### cache-control {#action-cache-control}

### error-handlers {#action-error-handlers}

오류 핸들러

### index {#action-index}

### meta-noindex {#action-meta-noindex}

meta robots noindex

### session {#action-session}

### setup_index {#action-setup-index}

### simple_setup_index {#action-simple-setup-index}
