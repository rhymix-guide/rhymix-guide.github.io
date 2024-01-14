# 주요 객체

::: danger
🚧 이 문서는 초안을 작성중인 문서이다.
:::

## BaseObject <Badge type="danger" text="🚧 초안 작성중" />

`BaseObject`는 라이믹스가 데이터를 자유롭게 담아 사용할 수 있는 공용 객체다. 데이터를 추가하고 가져오는 `set()`, `get()` 메서드를 제공한다.

```php
$data = new \BaseObject();

$data->set('key', 'value');

echo $data->get('key'); // value
```

오류와 상태 메시지를 반환하는데도 사용된다.

```php
function foo(): \BaseObject
{
    $result = new \BaseObject(); // [!code highlight]

    $list = [];

    if (/* 오류 발생 */) {
        $result->setMessage('오류가 발생했습니다', 'error'); // [!code highlight]
        return $result;
    }

    $result->set('list', $list); // [!code highlight]
    $result->setMessage('완료되었습니다'); // [!code highlight]

    return $result;
}

$data = foo();

// 오류 상황
if ($data->getMessageType() === 'error') {
    debugPrint($data->getMessage()); // 오류가 발생했습니다 // [!code highlight]
    return;
}

// 정상 상황
debugPrint($data->get('list')); // [!code highlight]
debugPrint($data->getMessage()); // 완료되었습니다 // [!code highlight]
```

## 문서 - DocumentItem <Badge type="danger" text="🚧 초안 작성중" />

문서의 데이터를 담아두고 API를 제공하는 객체이다.

```php
// 문서를 하나 가져오기
// `\DocumentModel::getDocument()` 메소드는 `DocumentItem` 객체를 반환 한다
$document = new \DocumentModel::getDocument(100);

$document->getTitle(); // 문서 제목
$document->isSecret(); // 비밀글 여부
$document->getUrl(); // 문서의 URL
```

## 댓글 - CommentItem <Badge type="danger" text="🚧 초안 작성중" />
