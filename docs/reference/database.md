# 데이터베이스(Database) 사용하기

라이믹스는 XML 포맷으로 정의하는 쿼리 빌더를 사용할 수 있고, [PDO](https://www.php.net/manual/en/class.pdostatement.php)를 확장한 DB 헬퍼를 사용할 수 있다.

```php
// XML 쿼리 빌더
$result = executeQueryArray(
    'document.getDocumentList',
    ['module_srl' => 50]
);
$documentList = $result->data;

// PDO 기반 DB 헬퍼
$result = Rhymix\Framework\DB::getInstance()->query(
    "SELECT * FROM `documents` WHERE `module_srl` = :module_srl LIMIT 20",
    ['module_srl' => 50]
);
$documentList = $result->fetchAll();
```

보기엔 DB 헬퍼보다 XML 쿼리 빌더의 사용이 단순해보이지만 각각의 장단점이 있다.

- XML 쿼리 빌더
  - 질의문을 정의하는 방법을 익혀야 한다
  - 질의문을 동적으로 생성하므로 `where` 조건을 동적으로 변경하기 쉽다
  - 질의문 정의가 다소 복잡해지거나 지원하지 않는 규격은 사용할 수 없다
  - 다른 확장 기능에서도 사용할 수 있고, 규격화된 사용성을 제공할 수 있다
- DB 헬퍼
  - SQL 문을 이용해 비교적 간단하게 작성할 수 있다
  - 질의문을 변형해야 할 때 질의문을 따로 분리하거나 조건에 따라 문자열을 조합해야 한다
  - `prepare()` 메소드를 이용해 질의문을 반복 사용할 수 있다

|        | XML 쿼리 빌더   | DB 헬퍼       |
| ------ | --------------- | ------------- |
| 복잡도 | 복잡하고 어려움 | 단순하고 쉬움 |
| 재사용 | 편리함          | 불편함        |
| 동적화 | 편리함          | 불편함        |

쿼리 빌더는 정의하기 다소 복잡하지만 사용할 때 편리하고, DB 헬퍼는 단순하지만 재사용이 어렵다.  
또한, 쿼리 빌더가 모든 유형의 질의문을 지원하지 않으므로 DB 헬퍼를 사용해야 할 수 있다.

::: warning
쿼리 빌더와 DB 헬퍼 모두 SQL Injection이 방지되지만, DB 헬퍼를 사용하여 질의문을 작성할 때는 사용자 입력 값을 질의문 문자열에 사용하지 않도록 주의해야 한다.
:::

::: tip 테이블 이름의 `prefix`는 생략
라이믹스가 사용하는 테이블 이름 앞에 붙는 `prefix`(보통 `rx_`)는 질의문을 자동으로 고쳐서 붙여주므로 테이블 이름에는 `prefix`를 붙이지 않아야 한다.

XML 쿼리 빌더와 DB 헬퍼 모두 자동으로 `prefix`를 붙여준다.
:::

## XML 쿼리 빌더

XML 쿼리 빌더는 `executeQuery()`, `executeQueryArray()` 함수로 이용할 수 있으며, 이는 XML로 정의된 쿼리를 실행한다.

```php
$result = executeQueryArray(
    'document.getDocumentList',
    ['module_srl' => '50', 'list_count' => 10]
);
debugPrint($result->data);
```

이 쿼리가 실행되려면 아래와 같은 질의문 정의가 필요하다.

```xml
<query id="getDocumentList" action="select"> // [!code highlight]
    <tables>
        <table name="documents" /> // [!code highlight]
    </tables>
    <columns>
        <column name="*" />
    </columns>
    <conditions>
        <condition column="module_srl" var="module_srl" filter="number" /> // [!code highlight]
    </conditions>
    <navigation>
        <list_count var="list_count" default="20" /> // [!code highlight]
    </navigation>
</query>
```

`document.getDocumentList`는 `document` 모듈의 `getDocumentList.xml` 파일을 가리킨다. 모듈 외에도 위젯과 애드온에서도 정의하여 사용할 수 있다.

::: tip 쿼리 빌더 사용하기
쿼리 빌더를 사용하면 질의문을 다소 복잡한 규격을 익혀 정의해야 한다.  
복잡도는 증가하지만 질의문의 재사용성을 높일 수 있고, 다른 확장 기능에서 사용할 때 규격화된 사용성을 제공할 수 있다.

-> [쿼리 빌더 사용하기](/reference/database/query-builder)
:::

## DB 헬퍼

PDO 기반의 DB 헬퍼를 이용하여 직접 쿼리를 실행할 수 있다.

```php
use Rhymix\Framework\DB;

$stmt = DB::getInstance()->query(
    "SELECT * FROM `documents` WHERE `module_srl` = :module_srl LIMIT 20",
    ['module_srl' => 50]
);

// fetch()
foreach ($stmt->fetch() as $document) {
    debugPrint($doucment);
}

// fetchAll()
$documentList = $stmt->fetchAll();
debugPrint($documentList);
```

PDO가 제공하는 `prepare()` 메소드를 이용할 수도 있다.

```php
$stmt = DB::getInstance()->prepare(
    "SELECT * FROM `documents` WHERE `module_srl` = :module_srl LIMIT 10",
);

$documentList = [];

// execute()
$stmt->execute(['module_srl' => 50]);
array_push($documentList, ...$stmt->fetchAll());

// execute()
$stmt->execute(['module_srl' => 52]);
array_push($documentList, ...$stmt->fetchAll());

debugPrint($documentList);
```

::: tip DB 헬퍼 사용하기
XML 쿼리 빌더에 비해 비교적 쉽고 PDO API를 사용할 수 있다.

-> [DB 헬퍼 사용하기](/reference/database/db-helper)
:::
