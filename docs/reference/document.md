# 문서 객체

::: danger
🚧 이 문서는 초안을 작성중인 문서이다.
:::

문서는 `\DocumentItem` 객체

```php
$document = new \DocumentItem($document_srl);
```

## 글 상태, 발행 상태 (status) <Badge type="danger" text="🚧 초안 작성중" />

```
\Document::$statusList;

'temp' => 'TEMP',
'private' => 'PRIVATE',
'public' => 'PUBLIC',
'secret' => 'SECRET',
'embargo' => 'EMBARGO',
'trash' => 'TRASH',
'censored' => 'CENSORED',
'censored_by_admin' => 'CENSORED_BY_ADMIN',
'deleted' => 'DELETED',
'deleted_by_admin' => 'DELETED_BY_ADMIN',
'other' => 'OTHER',
```
