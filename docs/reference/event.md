# 이벤트 (트리거)

> [!CAUTION] 🚧 이 문서는 초안을 작성중인 문서이다.

> [!IMPORTANT] 라이믹스 2.2 버전에 예정된 이벤트 시스템 개편 사항이 미리 반영했으므로 버전 차이를 주의하여 참고해야 한다.

이벤트(트리거)는 라이믹스의 주요 동작에 개입하여 추가 동작이나 데이터를 일부 변경하여 라이믹스의 동작을 바꾸거나 확장할 수 있다.

- 로그인 과정에 추가 인증방법을 적용
- 글이 작성될 때 내용을 필터링하거나 추가 데이터 저장
- 화면에 출력될 결과물을 후처리하여 변경
- ...

주로 모듈과 애드온에서 모든 이벤트를 활용할 수 있고, 위젯과 레이아웃, 스킨 등에서도 일부 활용할 수 있다.

> [!NOTE] 모듈과 애드온 외에는 이벤트 구독 시점이 늦어 활용할 수 있는 이벤트는 많지 않다.

## 이벤트 유형

이벤트는 발생 유형에 따라 두가지 방식으로 구분된다. 트리거(Trigger) 방식과 라이믹스 2.2 버전부터 지원하는 [PSR-14: Event Dispatcher](https://www.php-fig.org/psr/psr-14/)를 구현한 이벤트 방식이다.

|                      | 트리거             | Event Dispatcher <Badge text="v2.2+" type="tip" /> |
| -------------------- | ------------------ | -------------------------------------------------- |
| 이벤트 이름          | 임의로 지정된 이름 | 이벤트 클래스의 이름                               |
| 핸들러 인자          | 트리거에 따라 다름 | 이벤트 클래스의 인스턴스                           |
| 핸들러 리턴 값       | 트리거에 따라 다름 | 없음                                               |
| 핸들러에서 시점 구분 | 불가               | 가능 (`getPosition()`)                             |
| 이벤트 인터페이스    | 없음               | 이벤트 특성에 따른 인터페이스 제공 가능            |

::: details 참고 링크

- [rhymix/rhymix#2654 트리거 시스템 개편: Event 클래스 신설 및 PSR-14 지원](https://github.com/rhymix/rhymix/pull/2654)
  :::

> [!NOTE] 이벤트 이름의 규칙
>
> - 트리거 : 보통 `모듈이름.메소드이름` 형태가 많지만 정해진 규칙은 아니므로 임의로 지정할 수 있다
> - 이벤트 : 이벤트 인스턴스의 클래스 이름으로 사용된다

## 이벤트 발생 시점

이벤트는 보통 `before`, `after` 두 가지 시점으로 나뉜다. 하나의 이벤트를 주요 로직의 시작과 끝에 각각 발생하는 시점의 차이다. 보통 `before`와 `after`가 사용되지만 이외의 값을 사용할 수도 있다.

```php
// before 이벤트 발행
// 로직 실행 전 수집된 데이터를 추가
$args = Context::getRequestVars();
$someEvent = new someEvent(someEvent::POSITION_BEFORE, $args);
Rhymix\Framework\Event::getInstance()->dispatch($someEvent);

// 주요 로직 처리
$result = 'processed data';

// after 이벤트 발행
// 로직 실행 후 처리된 결과를 추가
$someEvent->setPosition(someEvent::POSITION_AFTER);
$someEvent->setResult($result);
Rhymix\Framework\Event::getInstance()->dispatch($someEvent);
```

## 이벤트 생성

제작한 모듈이나 애드온, 레이아웃, 스킨 등에서 직접 이벤트를 생성하여 활용할 수 있다.

### Event

이벤트는 `\Rhymix\Framework\AbstractEvent`를 상속한 클래스로 정의한다.

```php
// 이벤트 정의
class SomeEvent extends \Rhymix\Framework\AbstractEvent
{
}

// 이벤트 인스턴스
$event = new SomeEvent(SomeEvent::POSITION_BEFORE); // [!code highlight]

// 이벤트 dispatch
\Rhymix\Framework\Event::dispatch($event); // [!code highlight]
```

이벤트 클래스의 이름으로 이벤트 이름이 사용되며 네임스페이스가 포함된다.
다음 예시의 이벤트의 이름은 `Rhymix\Modules\Example\Events\SomeEvent`이다.

```php
namespace Rhymix\Modules\Example\Events; // [!code highlight]

class SomeEvent extends \Rhymix\Framework\AbstractEvent // [!code highlight]
{
}
```

이벤트는 특성에 따라 핸들러에 제공할 데이터를 저장해두거나 인터페이스를 제공할 수 있다.

```php {16-19}
namespace Rhymix\Modules\Example\Events;

class SomeEvent extends \Rhymix\Framework\AbstractEvent
{
    protected \Rhymix\Framework\Helpers\SessionHelper $member; // [!code highlight]

    function __construct(
        string $position = self::POSITION_BEFORE,
        \Rhymix\Framework\Helpers\SessionHelper $member
    ) {
        parent::__construct($position);
        $this->member = $member; // [!code highlight]
    }

    // 이벤트 핸들러에 제공할 추가 메소드
    public function authorName(): string
    {
        return $this->member->get('nick_name');
    }
}

$member = \Rhymix\Framework\Session::getMemberInfo();
$event = new SomeEvent(SomeEvent::POSITION_BEFORE, $member); // [!code highlight]
```

`Rhymix\Modules\Example\Events\SomeEvent` 이벤트를 구독하는 핸들러에서는 `authorName()` 메소드를 호출하여 활용할 수 있다.

### Trigger

트리거는 이벤트 클래스를 생성할 필요 없이 임의의 이름을 이벤트를 생성할 수 있다. 세번째 파라메터는 핸들러에 전달할 참조형 인자이다.

```php
/**
 * @param string $trigger_name 트리거 이름
 * @param string $called_position 실행 시점 (before, after)
 * @param mixed &$args 핸들러에 전달할 참조
 * @return mixed 핸들러 처리 후 반환된 객체
 */
\Rhymix\Framework\Event::trigger(string $trigger_name, string $called_position, &$args); // [!code highlight]

// 예시
$trigger_name = 'moduleName.methodName';
$called_position = 'before';
$args = ['key' => 'value'];
\Rhymix\Framework\Event::trigger($trigger_name, $called_position, $args);
```

::: details 트리거를 이벤트로 마이그레이션
`\Rhymix\Framework\Event::trigger()` 세번째 인자에 Event 인스턴스를 전달하여 트리거 방식을 이벤트 방식으로 마이그레이션할 수 있다. 기존 트리거에서 핸들러에 전달하던 데이터를 이벤트 인스턴스의 속성으로 추가하는 방식으로 호환성을 유지하면서 이벤트 방식으로 전환할 수 있다.

다만, 트리거에서 전달하던 파라메터 유형에 따라 `\ArrayAccess` 인터페이스 등을 구현하거나 `__get()`, `__set()` 매직 메소드를 구현하는 등 이벤트 핸들러에서 기존 트리거의 파라메터를 참조하던 호환성을 유지하기위한 조치가 필요하다. 이러한 처리 후에도 기존 트리거 핸들러들이 전달받은 파라메터의 타입을 검사하는 경우 호환성이 완전히 유지되지 않을 수 있다.
:::

## 이벤트 구독

이벤트를 구독하는 방법은 모듈에서만 활용 가능한 DB 등록형과 코드의 실행 여부에 따라 달라지는 동적 구독방식이 있다.

|                  | DB 등록형            | 동적 구독형                                   |
| ---------------- | -------------------- | --------------------------------------------- |
| 사용 제약        | 모듈에서만 사용 가능 | 모듈, 애드온, 레이아웃, 스킨 등에서 사용 가능 |
| 이벤트 수신 보장 | 보장 됨              | 구독 시점에 따라 차이가 있음                  |

DB 등록형은 모듈에서만 활용할 수 있지만 DB에 저장된 핸들러 정보를 사용하므로 이벤트 수신이 보장된다. 동적 구독형은 이벤트가 발생하기 전에 구독해야 하므로 활용에 제약이 있지만 모듈 외의도 활용할 수 있다.

### 이벤트 핸들러

Event Dispatcher 방식의 이벤트 핸들러는 `Rhymix\Framework\AbstractEvent`를 상속한 이벤트 인스턴스를 인자로 받게되며, 트리거 방식의 이벤트 핸들러는 이벤트에 따라 전달되는 인자가 다르다.

```php
// Event Dispatcher 방식 이벤트 핸들러 예시
function (\Rhymix\Modules\Example\Events\SomeEvent $event): void
{
    // 이벤트 발생 시점을 구분하여 처리
    if ($event->getPosition() === $event::POSITION_BEFORE) {
        // before
    } else {
        // after 또는 기타
    }
}

// 트리거 방식 이벤트 핸들러 예시
function (mixed $arg): mixed
{
    // 핸들러 로직
    // 이벤트 발생 시점을 구분할 수 없음

    return new \BaseObject(); // 필요시 반환
}
```

구독할 이벤트 이름을 지정할 때에도 다음과 같은 차이가 있다.

```php
// Event Dispatcher 방식 이벤트 이름 예시
$event_name = \Rhymix\Modules\Example\Events\SomeEvent::class; // [!code highlight]
// 또는 문자열로...
$event_name = 'Rhymix\Modules\Example\Events\SomeEvent'; // [!code highlight]

// 트리거 방식 이벤트 이름 예시
$event_name = 'moduleName.methodName'; // [!code highlight]
```

> [!TIP] before, after 시점 구분
> Event Dispatcher 방식의 이벤트<Badge text="v2.2+" type="tip" />는 `$event->getPosition()`으로 실행 시점을 구분할 수 있지만, 기존 트리거 방식의 이벤트는 핸들러에에서 실행 시점을 구분할 수 없다. 기존 트리거 방식의 이벤트는 핸들러를 분리하여 처리하는 것을 권장한다.

### 동적 이벤트 구독

동적으로 등록하는 방법은 이벤트가 발생하기 전에 등록해야하므로 활용이 제한적이지만, 모듈 외의도 애드온, 레이아웃, 스킨 등에서도 활용할 수 있다.

`\Rhymix\Framework\Event::subscribe()` 메소드를 사용하여 이벤트를 구독할 수 있고, 이벤트와 트리거의 구분 없이 같은 메소드를 사용한다.

```php
/**
 * @param $event_name 이벤트 이름
 * @param $position 실행 시점 (before, after)
 * @param $handler 핸들러
 */
\Rhymix\Framework\Event::subscribe(string $event_name, string $position, callable $handler); // [!code highlight]

// 예시: Event Dispatcher 이벤트
\Rhymix\Framework\Event::subscribe(
    \Rhymix\Modules\Example\Events\SomeEvent::class,
    'before',
    function (\Rhymix\Modules\Example\Events\SomeEvent $event) {}
);

// 예시: 트리거 이벤트
\Rhymix\Framework\Event::subscribe(
    'display',
    'before',
    function (mixed $arg) {}
);
```

> [!TIP] 애드온에서 이벤트 구독 시점
> 애드온에서는 구동 초기에 로드되므로 거의 모든 이벤트를 수신할 수 있다. 대부분의 이벤트를 구독하려면 애드온 로드 시점이 `before_module_init` 일 때 핸들러를 등록하면 된다.
>
> ```php
> // addons/*/*.addon.php
> if ($called_position === 'before_module_init') {
>     // 여기에서 이벤트 구독
> }
> ```

### 모듈에서 핸들러 등록 <Badge text="v2.1.3+" type="tip" />

모듈에서는 DB에 이벤트 핸들러 정보를 저장해두어 이벤트 수신을 보장하는 방법을 사용할 수 있다.

::: code-group

```xml [모듈명/conf/module.xml]
<module>
  <eventHandlers>
      <!--
      `moduleHandler.init` before 이벤트에
      `EventHandler::beforeModuleHandlerInit()` 메소드를 핸들러로 등록한 예시
      -->
      <eventHandler
          before="moduleHandler.init"
          class="EventHandler"
          method="beforeModuleHandlerInit" />
  </eventHandlers>
</module>
```

```php [모듈명/EventHandler.php]
namespace Rhymix\Modules\모듈명;

class EventHandler
{
    /**
     * moduleHandler.init before 이벤트 핸들러
     *
     * @param object $obj 이벤트에 전달된 객체
     */
    public function beforeModuleHandlerInit(&$obj)
    {
        // 이벤트 핸들러의 로직
    }
}
```

:::

`<eventHandler>` 노드의 속성은 다음과 같다.

- `before` 또는 `after` : 구독할 이벤트 이름. 실행 시점은 속성명으로 구분
- `class` : 핸들러 클래스 이름
- `method` : 핸들러 메소드 이름

> [!IMPORTANT] `before`, `after` 속성은 동시에 지정 불가
> `before`, `after` 속성은 동시에 지정할 수 없으며, `before`, `after` 순으로 `before`가 우선하여 하나만 등록된다.
>
> <!-- ref: https://github.com/rhymix/rhymix/blob/8379932dce0e4f4c2654ae4dcb06b2cd3a4d105f/common/framework/parsers/ModuleActionParser.php#L291-L311 -->
>
> ::: details beforeAction, afterAction 속성
> 모듈의 액션이 실행될 때 자동으로 발생하는 `act:모듈이름.액션이름` 이벤트에 핸들러를 등록하는 `beforeAction`, `afterAction` 속성을 사용하여 `모듈이름.액션이름` 형식으로 이벤트 이름을 지정할 수 있다.
>
> 하지만, `before`, `after` 속성으로 `act:모듈이름.액션이름` 이벤트명을 사용할 수 있으므로, 따로 구분하여 사용할 필요는 없다.
>
> `before`, `after` 속성과 마찬가지로 `before`, `after`, `beforeAction`, `afterAction` 순서로 우선하여 하나만 등록된다. `beforeAction`과 `afterAction`은 각각 `before`, `after`로 변환되며, `before` 또는 `after` 속성이 있다면 `beforeAction`, `afterAction`은 무시된다.
>
> <!-- ref: https://github.com/rhymix/rhymix/blob/8379932dce0e4f4c2654ae4dcb06b2cd3a4d105f/common/framework/parsers/ModuleActionParser.php#L291-L311 -->

> [!CAUTION] ⚠️ 제약 및 주의사항
>
> - `<eventHandlers>`를 지정하면 해당 모듈에서 기존 방법(`\ModuleController::insertTrigger()`)으로 등록했던 핸들러는 모두 제거되며, `<eventHandlers>`에 지정한 핸들러만 유지된다.
>   - 기존 방법으로 PHP 코드로 직접 핸들러를 추가한 것과 `<eventHandlers>`를 동시에 사용하면 서로 경합하여 오동작할 수 있으므로 하나의 방식만 사용해야 한다.
> - `<eventHandlers>`에 등록했던 핸들러를 모두 제거할 수 없다.  
>   -> 관련 이슈 참고: https://github.com/rhymix/rhymix/issues/2259
>   - 이벤트 핸들러에 등록했던 핸들러를 모두 제거하려면 [기존의 트리거 삭제 방법](#legacy-event-handler)을 이용해야 한다.
>     - `\ModuleController::deleteTrigger()` 메소드 참고
>     - `beforeAction`과 `afterAction` 속성으로 지정한 이벤트는 앞에 `act:`를 붙여(`act:모듈이름:메소드이름`) 삭제할 수 있다.

> [!NOTE]
> `insertTrigger()`, `deleteTrigger()` 등을 사용해 직접 코드를 구성해야했던 것을 간편한 방법으로 대체하는 방법이다.

## 이전 버전에서 이벤트 사용

### 2.2 버전 미만

#### 이벤트 생성

`ModuleHandler::triggerCall()` 메소드를 사용하여 이벤트를 생성할 수 있다.

```php
/**
 * 이벤트 발생시키기
 *
 * @param string $trigger_name 트리거 이름
 * @param string $called_position 실행 시점 flag (before, after)
 * @param object &$obj 핸들러에 전달할 객체
 * @return \BaseObject 핸들러 처리 후 반환된 객체
 */
\ModuleHandler::triggerCall($trigger_name, $called_position, $obj);
```

#### 이벤트 구독

```php
/**
 * @param string $trigger_name 트리거 이름
 * @param string $called_position 실행 시점 (before, after, beforeAction, afterAction)
 * @param callable $callback_function 핸들러
 */
\ModuleController::addTriggerFunction($trigger_name, $called_position, $callback_function); // [!code highlight]

// 예시
\ModuleController::addTriggerFunction(
    'display',
    'before',
    function (mixed $arg) {}
);
```

### 2.1.3 버전 미만

#### 모듈에서 핸들러 등록 {#legacy-event-handler}

##### getTrigger() {#legacy-event-handler-get}

##### insertTrigger() {#legacy-event-handler-insert}

##### deleteTrigger() {#legacy-event-handler-delete}
