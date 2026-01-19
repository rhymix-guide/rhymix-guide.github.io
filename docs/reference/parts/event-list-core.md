| 이벤트                                                                | 타입    | 호출시점      | 설명                                |
| --------------------------------------------------------------------- | ------- | ------------- | ----------------------------------- |
| [moduleHandler.init](#core-moduleHandler.init)                        | Trigger | before, after | 가장 먼저 발생하는 이벤트           |
| [moduleObject.proc](#core-moduleObject.proc)                          | Trigger | before, after |                                     |
| [moduleHandler.proc](#core-moduleHandler.proc)                        | Trigger | after         |                                     |
| [layout](#core-layout)                                                | Trigger | before        |                                     |
| [display](#core-display)                                              | Trigger | before, after | 응답할 최종 컨텐츠를 변경할 수 있다 |
| [admin.dashboard](#core-admin.dashboard)                              | Trigger | before        |                                     |
| [module.deleteModule](#module-deleteModule)                           | Trigger | before, after |                                     |
| [module.dispAdditionSetup](#module-dispAdditionSetup)                 | Trigger | before, after |                                     |
| [module.procModuleAdminCopyModule](#module-procModuleAdminCopyModule) | Trigger | after         |                                     |

이 섹션의 이벤트 중 일부는 라이믹스의 주요 라이프사이클의 일부이다. `moduleHandler.init` 이벤트가 가장 먼저 발생하며, 다음과 같은 순서로 발생한다.

1. moduleHandler.init - before
2. moduleHandler.init - after
3. moduleObject.proc - before
4. moduleObject.proc - after
5. moduleHandler.proc - after
6. layout - before
7. display - before
8. display - after

### 라이프사이클 {#core-lifecycle}

#### moduleHandler.init - 라이믹스 초기 동작 <Badge type="info" text="Trigger" /> <Badge type="info" text="before, after" /> {#core-moduleHandler.init}

모듈을 동작시키기 위해 요청 정보를 처리하여 실행할 모듈과 액션을 찾는 초기화 과정에서 호출된다.

> [!tip] `ModuleHandler` 인스턴스는 다른 방법으로 참조하기 어려우며, 이 이벤트를 활용해 참조할 수 있다.

- before : `ModuleHandler` 객체가 전달되어 수집된 정보를 받을 수 있다
- after : 수집한 정보로 실행할 모듈의 객체를 받을 수 있다

##### before - {#core-moduleHandler.init-before}

::: code-group

```php [src/EventHandler.php]
class EventHandler
{
    protected static \ModuleHandler $moduleHandler;

    /*
     * ModuleHandler 인스턴스는 다른 방법으로 참조할 수 없기 때문에
     * 이 이벤트를 사용해 미리 참조를 보관해두고 활용하는 예시이다.
     */

    /**
     * ModuleHandler 객체를 받아 보관해둔다
     *
     * @see \ModuleHandler::__construct()
     * @param \ModuleHandler $moduleHandler
     */
    public static function beforeModuleHandlerInit(&$moduleHandler)
    {
        self::$moduleHandler = $moduleHandler;
    }

    public static function beforeDisplay()
    {
        // 최종 실행된 모듈의 정보과 액션을 정확히 확인할 수 있다
        debugPrint(self::$moduleHandler->module);
        debugPrint(self::$moduleHandler->act);
    }
}
```

```xml [module.xml]
<module>
    <eventHandlers>
        <eventHandler before="moduleHandler.init"
            class="Src\EventHandler"
            method="beforeModuleHandlerInit" />
        <eventHandler before="display"
            class="Src\EventHandler"
            method="beforeDisplay" />
    </eventHandlers>
</module>
```

:::

##### after <Badge type="danger" text="🚧 초안 작성중" /> {#core-moduleHandler.init-after}

#### moduleObject.proc <Badge type="info" text="Trigger" /> <Badge type="info" text="before, after" /> <Badge type="danger" text="🚧 초안 작성중" /> {#core-moduleObject.proc}

###### before <Badge type="danger" text="🚧 초안 작성중" /> {#core-moduleObject.proc-before}

###### after <Badge type="danger" text="🚧 초안 작성중" /> {#core-moduleObject.proc-after}

#### moduleHandler.proc <Badge type="info" text="Trigger" /> <Badge type="info" text="after" /><Badge type="danger" text="🚧 초안 작성중" /> {#core-moduleHandler.proc}

##### after <Badge type="danger" text="🚧 초안 작성중" /> {#core-moduleHandler.proc-after}

#### layout <Badge type="info" text="Trigger" /> <Badge type="info" text="before" /> <Badge type="danger" text="🚧 초안 작성중" /> {#core-layout}

##### before <Badge type="danger" text="🚧 초안 작성중" /> {#core-layout-before}

#### display - 응답 컨텐츠 <Badge type="info" text="Trigger" /> <Badge type="info" text="before, after" /> {#core-display}

응답할 최종 컨텐츠를 변경할 수 있다.

보통 HTML 내용을 변경하는 용도로 사용되며, 요청/응답 포맷에 따라 JSON, XML 포맷이 될 수 있다.

HTML 응답 시 `before` 시점에서는 `<body>` 태그 안에 들어갈 레이아웃과 컨텐츠의 일부가 채워져있지만, HTML 전체 구조는 포함되지 않는다. `after` 시점에서는 최종 응답 직전에 호출되며, 전체 HTML 구조를 포함한다.

```php
/**
 * return 값은 사용되지 않으며,
 * 첫번째 인자에 참조로 전달된 `$content`를 이용해 출력될 내용을 변경할 수 있다.
 *
 * @see \DisplayHandler::printContent()
 * @param string &$content 출력될 내용
 * @return void
 */
function (string &$content)
{
    // HTML 응답일 때만 실행
    if (\Context::getResponseMethod() !== 'HTML') {
        return;
    }

    // 예시: HTML 응답에 스크립트를 추가
    $content .= <<<HTML
    <script>
        console.log('Hello, Rhymix!');
    </script>
    HTML;
}
```

> [!note]
> `before` 시점에서는 이벤트 처리 순서에 따라 같은 이벤트를 구독하는 위젯과 에디터 컴포넌트 컨텐츠가 렌더링 되어있지 않을 수 있다.

### 기타 <Badge type="danger" text="🚧 초안 작성중" /> {#core-etc}

#### admin.dashboard - 관리페이지 대시보드 <Badge type="info" text="Trigger" /> <Badge type="info" text="before" /> {#core-admin.dashboard}

관리페이지 대시보드에 항목을 추가할 수 있다.  
왼쪽, 오른쪽 나뉘어져 있고 출력되는 항목은 각 좌, 우 배열의 순서대로 출력된다.

```php
/**
 * @param object{
 *     left: string[],
 *     right: string[],
 * } &$dashboard 대시보드 항목
 */
function (&$dashboard) {
    // 예시: 대시보드 항목을 추가
    $html = <<<HTML
    <section>
        <h2>대시보드 항목의 제목</h2>
        <div style="padding: 10px;">
            <p>항목의 컨텐츠</p>
        </div>

        <!-- `more` 클래스를 지정하면 제목의 오른쪽에 표시된다 -->
        <div class="more">
            <a href="#">링크 예시 <i class="xi-angle-right"></i></a>
        </div>
    </section>
    HTML;

    // 대시보드 오른쪽에 첫번째로 추가 예시
    array_unshift($dashboard->right, $html);
}
```

#### module.deleteModule - 모듈 삭제 <Badge type="info" text="Trigger" /> <Badge type="info" text="before, after" /> <Badge type="danger" text="🚧 초안 작성중" /> {#module-deleteModule}

#### module.dispAdditionSetup - 모듈의 추가 설정 탭 <Badge type="info" text="Trigger" /> <Badge type="info" text="before, after" /> <Badge type="danger" text="🚧 초안 작성중" /> {#module-dispAdditionSetup}

게시판 등의 모듈 설정에서 '추가 설정' 탭에 설정 항목을 추가할 수 있다.

#### module.procModuleAdminCopyModule <Badge type="info" text="Trigger" /> <Badge type="info" text="after" /> <Badge type="danger" text="🚧 초안 작성중" /> {#module-procModuleAdminCopyModule}
