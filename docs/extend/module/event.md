# 이벤트(트리거) 활용하기

::: danger
🚧 이 문서는 초안을 작성중인 문서이다.
:::

이벤트 핸들러를 사용해 특정 이벤트(트리거)가 발생할 때 실행할 기능을 정의할 수 있다.

아래 예시는 `moduleHandler.init`(before) 이벤트가 발생할 때 `src\EventHandler.php` 파일의 `listenerBeforeModuleHandlerInit()` 메소드를 실행한다.

`conf/module.xml` 파일에서 정의:

```xml{4-7}
<!-- 모듈이름/conf/module.xml -->
<eventHandlers>
    <!-- `moduleHandler.init` before 이벤트 리스너를 등록한 예시 -->
    <eventHandler
        before="moduleHandler.init"
        class="Src\EventHandler"
        method="listenerBeforeModuleHandlerInit" />
</eventHandlers>
```

`src/EventHandler.php` 파일에서 실행할 메소드 정의:

```php{5,10-14}
// 모듈이름/src/Eventhandler.php
namespace Rhymix\Modules\모듈이름\Src;

// `class` 속성에 지정한 클래스
class EventHandler
{
    /**
     * `<eventHandler>`에서 정의한 `method`에 지정한 이벤트 리스너
     */
    public static function listenerBeforeModuleHandlerInit(&$triggerObject)
    {
        // 실행할 코드
        debugPrint($triggerObject);
    }
}
```

리스너 메소드에서 모듈의 경로 등을 쉽게 사용할 수 있도록 `\ModuleObject` 클래스를 상속하면 된다.

```php
class EventHandler // [!code --]
class EventHandler extends \ModuleObject // [!code ++]
{
    public static function listenerBeforeModuleHandlerInit(&$triggerObject) // [!code --]
    public function listenerBeforeModuleHandlerInit(&$triggerObject) // [!code ++]
    {
        /** @var string $this->module 모듈의 이름 (디렉토리명) */
        /** @var string $this->module_path 모듈의 경로 (서버 내 절대 경로) */
        debugPrint($this);
    }
}
```

## 이벤트 활용 예시

### 관리페이지 대시보드에 출력하기

관리페이지 대시보드에 통계나 데이터, 설정, 상태 등의 정보를 출력하는데 활용할 수 있다.

::: code-group

```xml{3-6} [conf/module.xml]
<module>
    <eventHandlers>
        <eventHandler
            before="admin.dashboard"
            class="Src\EventHandler"
            method="adminDashboard" />
    </eventHandlers>
</module>
```

```php{3-16} [src/EventHandler.php]
class EventHandler
{
    public static function adminDashboard(object $object): void
    {
        $html = <<<HTML
        <section>
            <h2>섹션 제목</h2>
            <p style="padding: 10px;">예시 컨텐츠</p>
            <div class="more">
                <a href="#">설정 바로가기<i class="xi-angle-right"></i></a>
            </div>
        </section>
        HTML;

        array_unshift($object->left, $html);
    }
}
```

::: info -> [`admin.dashboard` 이벤트 자세히 보기](/reference/trigger-list#core-admin.dashboard)
:::
