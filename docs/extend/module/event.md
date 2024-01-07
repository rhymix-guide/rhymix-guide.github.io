# 이벤트(트리거) 활용하기

::: danger
🚧 이 문서는 초안을 작성중인 문서이다.
:::

이벤트(트리거)를 사용하면

```xml
<!-- 모듈디렉토리/conf/module.xml -->
<eventHandlers>
    <!-- `moduleHandler.init` before 이벤트 리스너를 등록한 예시 -->
    <eventHandler
        before="moduleHandler.init"
        class="Src\EventHandler"
        method="listenerBeforeModuleHandlerInit" />
</eventHandlers>
```

```php
// 모듈디렉토리/src/Eventhandler.php
namespace Rhymix\Modules\모듈폴더\Src;

// `class` 속성에 지정한 클래스
class EventHandler extends \ModuleObject
{
    /**
     * `<eventHandler>`에서 정의한 `method`에 지정한 이벤트 리스너
     */
    public function listenerBeforeModuleHandlerInit(&$triggerObject)
    {
        // 실행할 코드
        debugPrint($triggerObject);
    }
}
```

::: tip
`debugPrint()` 함수는 라이믹스에서 제공하는 디버깅을 위한 함수이다.  
-> [디버그 기능 알아보기](/reference/debug)
:::