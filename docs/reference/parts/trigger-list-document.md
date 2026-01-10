| 트리거                                                       | 호출시점           | 설명 |
| ------------------------------------------------------------ | ------------------ | ---- |
| [copyDocumentModule.each](#document-copyDocumentModule.each) | before, after      |      |
| [copyDocumentModule](#document-copyDocumentModule)           | before, add, after |      |
| [declaredDocument](#document-declaredDocument)               | before, after      |      |
| [declaredDocumentCancel](#document-declaredDocumentCancel)   | before, after      |      |
| [deleteDocument](#document-deleteDocument)                   | before, after      |      |
| [getComments](#document-getComments)                         | after              |      |
| [getDocumentList](#document-getDocumentList)                 | before, after      |      |
| [getDocumentMenu](#document-getDocumentMenu)                 | before, after      |      |
| [getNoticeList](#document-getNoticeList)                     | before, after      |      |
| [getThumbnail](#document-getThumbnail)                       | before             |      |
| [insertDocument](#document-insertDocument)                   | before, after      |      |
| [manage](#document-manage)                                   | before, after      |      |
| [moveDocumentModule](#document-moveDocumentModule)           | before, after      |      |
| [moveDocumentToTrash](#document-moveDocumentToTrash)         | before, after      |      |
| [publishDocument](#document-publishDocument)                 | before, after      |      |
| [restoreTrash](#document-restoreTrash)                       | after              |      |
| [updateDocument](#document-updateDocument)                   | before, after      |      |
| [updateReadedCount](#document-updateReadedCount)             | before, after      |      |
| [updateVotedCount](#document-updateVotedCount)               | before, after      |      |
| [updateVotedCountCancel](#document-updateVotedCountCancel)   | before, after      |      |

### 글 조회 <Badge type="danger" text="🚧 초안 작성중" />

#### getDocumentList <Badge type="danger" text="🚧 초안 작성중" /> {#document-getDocumentList}

#### getNoticeList <Badge type="danger" text="🚧 초안 작성중" /> {#document-getNoticeList}

---

### 글 추가, 수정, 삭제 <Badge type="danger" text="🚧 초안 작성중" />

#### insertDocument <Badge type="danger" text="🚧 초안 작성중" /> {#document-insertDocument}

> [!warning]
> 이 이벤트는 글과 관련된 데이터의 변경사항을 처리하는 트랜잭션 안에서 동작하므로 의도하지 않은 롤백이 발생하지 않도록 주의해야 한다.

##### after

```php
/**
 * @see \DocumentController::insertDocument()
 * @param object{
 *     '_filter': string,
 *     'act': string,
 *     'allow_trackback': 'Y'|'N',
 *     'category_srl': int,
 *     'comment_status': "ALLOW",
 *     'commentStatus': "ALLOW",
 *     'content': string, // 글 내용 // [!code highlight]
 *     'document_srl': int, // 글 번호 // [!code highlight]
 *     'email_address': string,
 *     'error_return_url':string,
 *     'extra_vars': string,
 *     'homepage': string,
 *     'ipaddress': string,
 *     'is_admin': 'Y'|'N',
 *     'is_notice': 'Y'|'N', // 공지사항 // [!code highlight]
 *     'isRestore': bool, // 복구 기능으로 복원처리이면 true // [!code highlight]
 *     'lang_code': string,
 *     'list_order': int,
 *     'member_srl': int, // 회원 // [!code highlight]
 *     'mid': string, // [!code highlight]
 *     'module_srl': int, // [!code highlight]
 *     'module': string,
 *     'nick_name': string,
 *     'notify_message': 'Y'|'N',
 *     'readed_count': int,
 *     'status': string, // 글 발행 등의 상태 // [!code highlight]
 *     'tags': string,
 *     'title': string, // 제목 // [!code highlight]
 *     'update_order': int,
 *     'updated_file_count': int,
 *     'uploaded_count': int,
 *     'use_editor': 'Y'|'N',
 *     'use_html': 'Y'|'N',
 *     'user_id': string,
 *     'user_name': string,
 * } $data
 */
```

- `status` 값에 따른 구분
  - TEMP : 임시저장
  - PRIVATE
  - PUBLIC : 공개
  - SECRET : 비밀글
  - EMBARGO
  - TRASH : 휴지통
  - CENSORED
  - CENSORED_BY_ADMIN
  - DELETED
  - DELETED_BY_ADMIN
  - OTHER

#### updateDocument <Badge type="danger" text="🚧 초안 작성중" /> {#document-updateDocument}

```php
/**
 * @see \DocumentController::updateDocument()
 */
```

#### updateReadedCount <Badge type="danger" text="🚧 초안 작성중" /> {#document-updateReadedCount}

```php
/**
 * @see \DocumentController::updateReadedCount()
 */
```

#### deleteDocument <Badge type="danger" text="🚧 초안 작성중" /> {#document-deleteDocument}

```php
/**
 * @see \DocumentController::deleteDocument()
 */
```

##### before

##### after

```php
/**
 * 'document_srl': int,
 * 'module_srl': int,
 * 'category_srl': int,
 * 'lang_code': string,
 * 'is_notice': "N",
 * 'title': string,
 * 'title_bold': "N",
 * 'title_color': "N",
 * 'content': string,
 * 'readed_count': int,
 * 'voted_count': int,
 * 'blamed_count': int,
 * 'comment_count': int,
 * 'trackback_count': int,
 * 'uploaded_count': int,
 * 'password': null,
 * 'user_id': string,
 * 'user_name': string,
 * 'nick_name': string,
 * 'member_srl': int,
 * 'email_address': string,
 * 'homepage': string,
 * 'tags': null,
 * 'extra_vars': string,
 * 'regdate': string,
 * 'last_update': string,
 * 'last_updater': null,
 * 'ipaddress': string,
 * 'list_order': int,
 * 'update_order': int,
 * 'allow_trackback': "N",
 * 'notify_message': "N",
 * 'status': "PUBLIC",
 * 'comment_status': "ALLOW",
 * 'apparent_module_srl': int,
 * 'origin_module_srl': int,
 * // 휴지통 비우기로 삭제하는 경우 true
 * 'isEmptyTrash': bool,
 */
```

#### publishDocument <Badge type="tip" text="Since v2.1.12" /> <Badge type="danger" text="🚧 초안 작성중" /> {#document-publishDocument}

```php
/**
 * @see \DocumentController::insertDocument()
 * @see \DocumentController::updateDocument()
 */
```

---

### 휴지통 <Badge type="danger" text="🚧 초안 작성중" />

#### moveDocumentToTrash <Badge type="danger" text="🚧 초안 작성중" /> {#document-moveDocumentToTrash}

#### restoreTrash <Badge type="danger" text="🚧 초안 작성중" /> {#document-restoreTrash}

---

### 복사, 이동 <Badge type="danger" text="🚧 초안 작성중" />

#### moveDocumentModule <Badge type="danger" text="🚧 초안 작성중" /> {#document-moveDocumentModule}

#### copyDocumentModule <Badge type="danger" text="🚧 초안 작성중" /> {#document-copyDocumentModule}

#### copyDocumentModule.each <Badge type="danger" text="🚧 초안 작성중" /> {#document-copyDocumentModule.each}

---

### 신고 <Badge type="danger" text="🚧 초안 작성중" />

#### declaredDocument <Badge type="danger" text="🚧 초안 작성중" /> {#document-declaredDocument}

#### declaredDocumentCancel <Badge type="danger" text="🚧 초안 작성중" /> {#document-declaredDocumentCancel}

### 댓글 <Badge type="danger" text="🚧 초안 작성중" />

##### getComments <Badge type="danger" text="🚧 초안 작성중" /> {#document-getComments}

### 기타 <Badge type="danger" text="🚧 초안 작성중" />

#### getDocumentMenu <Badge type="danger" text="🚧 초안 작성중" /> {#document-getDocumentMenu}

#### getThumbnail <Badge type="danger" text="🚧 초안 작성중" /> {#document-getThumbnail}

#### manage <Badge type="danger" text="🚧 초안 작성중" /> {#document-manage}

#### updateVotedCount - 추천/비추천 <Badge type="info" text="before | after" /> <Badge type="danger" text="🚧 초안 작성중" /> {#document-updateVotedCount}

글을 추천하거나 비추천할 때 발생하는 이벤트이다.
추천/비추천을 받은 회원 번호와 글 번호를 받을 수 있다.

```php
/**
 * @see \DocumentController::updateVotedCount()
 * @param object{
 *     // 추천/비추천을 받는 대상 회원번호(글쓴이)
 *     member_srl: int,
 *     // 대상 모듈번호
 *     module_srl: int,
 *     // 대상 문서번호
 *     document_srl: int,
 *     // 추천|비추천
 *     update_target: 'voted_count'|'blamed_count',
 *     // 부여 포인트. 보통 `1`이다
 *     point: int,
 *     // 변경 전 추천/비추천 수
 *     before_point: int,
 *     // 변경 후 추천/비추천 수. before_point + point
 *     after_point: int,
 *     // 취소 여부
 *     cancel: bool,
 * } $data
 */
function($data) {
    $message = '';
    if ($data->update_target === 'voted_count') {
        // 추천: voted_count
        $message = $data->cancel ? '추천 취소' : '추천';

    } else if ($data->update_target === 'blamed_count') {
        // 비추천: blamed_count
        $message = $data->cancel ? '비추천 취소' : '비추천';
    }

    debugPrint("{$data->member_srl} 글쓴이의 {$data->document_srl} 글이 {$message} 되었습니다");
}
```

##### updateVotedCountCancel - 추천/비추천 취소 <Badge type="info" text="before | after" /> <Badge type="danger" text="🚧 초안 작성중" /> {#document-updateVotedCountCancel}

> [!info] 같은 형식의 데이터
> 이 이벤트와 앞의 `document.updateVotedCount` 이벤트는 데이터 형식이 같다.  
> 위 예제와 같은 이벤트 리스너에서 `cancel` 속성으로 구분하여 함께 처리할 수 있다.
> 
> ```php
> /**
>  * @see \DocumentController::updateVotedCountCancel()
>  */
> ```
