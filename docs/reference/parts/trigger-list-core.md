| 트리거                                         | 호출시점      | 설명                                  |
| ---------------------------------------------- | ------------- | ------------------------------------- |
| [display](#core-display)                       | before, after | 요청의 응답을 출력하기 전과 후에 호출 |
| [layout](#core-layout)                         | before        |                                       |
| [moduleHandler.init](#core-moduleHandler.init) | before, after |                                       |
| [moduleHandler.proc](#core-moduleHandler.proc) | after         |                                       |
| [moduleObject.proc](#core-moduleObject.proc)   | before, after |                                       |
| [admin.dashboard](#core-admin.dashboard)       | before        | 관리페이지 대시보드에 항목을 추가     |

### display <Badge type="danger" text="🚧 초안 작성중" /> {#core-display}

요청의 응답을 출력하기 전과 후에 호출된다.

```php
/**
 * 요청의 응답을 출력하기 전과 후에 호출
 * @param string &$output 출력할 내용
 */
function (&$output = '') {
    // 예시: $output 변수를 참조로 받아 내용을 추가하거나 변경 가능
    $output .= '추가할 내용';
}
```

### layout <Badge type="danger" text="🚧 초안 작성중" /> {#core-layout}

### moduleHandler.init <Badge type="danger" text="🚧 초안 작성중" /> {#core-moduleHandler.init}

### moduleHandler.proc <Badge type="danger" text="🚧 초안 작성중" /> {#core-moduleHandler.proc}

### moduleObject.proc <Badge type="danger" text="🚧 초안 작성중" /> {#core-moduleObject.proc}

### admin.dashboard - 관리페이지 대시보드 <Badge type="info" text="before" /> {#core-admin.dashboard}

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

### module.deleteModule <Badge type="info" text="before & after" /> <Badge type="danger" text="🚧 초안 작성중" /> {#module-deleteModule}

### module.dispAdditionSetup <Badge type="info" text="before & after" /> <Badge type="danger" text="🚧 초안 작성중" /> {#module-dispAdditionSetup}

### module.procModuleAdminCopyModule <Badge type="info" text="after" /> <Badge type="danger" text="🚧 초안 작성중" /> {#module-procModuleAdminCopyModule}
