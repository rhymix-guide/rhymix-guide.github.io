# 트리거 (이벤트)

::: danger
🚧 이 문서는 초안을 작성중인 문서이다.
:::

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
`class` 속성과 `method` 속성으로 이벤트가 발생할 때 실행된 클래스와 메소드를 지정하면 된다.

#### 호출 시점

`bofore`, `after` 시점은 보통 특정 기능을 처리하기 전과 후에 호출되며, `beforeAction`, `afterAction`은 모듈의 액션으로 지정된 메소드가 실행되기 전과 후에 호출된다.

| 호출 시점    | 설명                             |
| ------------ | -------------------------------- |
| beforeAction | 지정한 액션(`act`)이 실행되기 전 |
| before       | 보통 무언가를 처리하기 전        |
| after        | 보통 무언가를 처리한 후          |
| afterAction  | 지정한 액션(`act`)이 실행된 후   |

호출 시점에 따라 `before`와 `after`는 리스너에게 이벤트에 따라 각기 다르게 구성된 정보를 담은 객체를 받을 수 있으며, `beforeAction`과 `afterAction`은 해당 액션이 처리되는 모듈의 인스턴스를 받을 수 있다.

많은 트리거가 모든 시점에서 호출될 수 있으며,
`beforeAction` -> `before` -> `after` -> `afterAction` 순으로 호출된다.  
다만, 이름 규칙에 따라 이벤트 이름이 다르게 지정되어 있을 수 있다.

::: info 이벤트 이름
보통 `모듈이름.메소드이름`으로 구성되어 있지만 임의로 지어진 이름이므로 완전히 일치하지 않을 수 있다.
:::

::: warning 제약 및 주의사항

- 이벤트 핸들러에 등록하면 해당 모듈에서 등록했던 트리거 설정이 모두 제거되며, 이벤트 핸들러에 지정한 트리거만 유지된다.
  - 기존 방법으로 코드로 직접 트리거를 관리하는것과 이벤트 핸들러를 동시에 사용하면 서로 경합하여 불필요한 동작이 실행 될 수 있으니 한쪽만 선택하여 유지해야 한다.
- 이벤트 핸들러에 등록했던 이벤트를 모두 제거할 수 없다.  
  -> 관련 이슈 참고: https://github.com/rhymix/rhymix/issues/2259
  - 이벤트 핸들러에 등록했던 이벤트를 모두 제거하려면 기존의 트리거 삭제 기능을 이용해야 한다.  
    -> 참고: [트리거](reference/trigger)
    - `beforeAction`과 `afterAction`은 `act:모듈이름:메소드이름`으로 삭제할 수 있으며, `before`와 `after`는 이벤트 이름과 같다.

:::

::: info
PHP 코드로 구성해야했던 트리거 등록, 삭제 과정을 대체하는 기능이다.
`getTrigger()`, `insertTrigger()`, `deleteTrigger()` 등을 사용해 직접 코드를 구성해야했던 것을 간편한 방법으로 대체할 수 있다.
:::
