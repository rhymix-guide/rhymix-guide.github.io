---
---

# 트리거(Trigger) 목록

::: danger
🚧 이 문서는 초안을 작성중인 문서이다.
:::

::: warning 이 문서는 _항상_ 부정확하다
코드의 모든 변경사항을 추적하여 이 문서를 항상 최신으로 유지하는 것은 어렵다.

이벤트(트리거)가 전달하는 데이터 형식은 상세히 정의하려고 했으나 각 속성의 타입이 설명한 것과 다르거나 누락, 변경 되었을 수 있다. 이벤트를 이해하는데 힌트로 삼을 정도는 되지만 전달 객체를 확인하여 사용하는 것을 권장한다.

라이믹스의 디버그 기능을 활성화하고 `debugPrint()` 함수를 이용해 데이터를 확인할 수 있다.  
관리페이지에서 "설정 -> 시스템 설정 -> 디버그 설정" 탭에서 디버그 기능을 설정할 수 있다.

```php
// 이벤트 리스너(콜백)의 예
addTriggerFunction($name, $position, function ($triggerObject) {
    debugPrint($triggerObject);
});
```

:::

::: tip
가장 먼저 실행되는 트리거는 `moduleHandler.init`(before), 가장 마지막은 `display`(after) 이다.
:::

## 코어 <Badge type="danger" text="🚧 초안 작성중" /> {#core}

| 트리거             | 호출시점      | 설명                                  |
| ------------------ | ------------- | ------------------------------------- |
| display            | before, after | 요청의 응답을 출력하기 전과 후에 호출 |
| layout             | before        |                                       |
| moduleHandler.init | before, after |                                       |
| moduleHandler.proc | after         |                                       |
| moduleObject.proc  | before, after |                                       |

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

### admin.dashboard <Badge type="danger" text="🚧 초안 작성중" /> {#core-admin.dashboard}

관리페이지 대시보드에 항목을 추가할 수 있다.  
왼쪽, 오른쪽 나뉘어져 있고 출력되는 항목은 각 좌, 우 배열의 순서대로 출력된다.

```php
/**
 * @param object{
 *     left: array,
 *     right: array,
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

        <!-- `more` 클래스를 지정하면 `h2` 제목의 오른쪽에 표시된다 -->
        <div class="more">
            <a href="#">링크 예시 <i class="xi-angle-right"></i></a>
        </div>
    </section>
    HTML;

    // 대시보드 오른쪽에 첫번째로 추가
    array_unshift($dashboard->right, $html);
}
```

## 문서 (document) <Badge type="danger" text="🚧 초안 작성중" /> {#document}

| 트리거                                                       | 호출시점           | 설명 |
| ------------------------------------------------------------ | ------------------ | ---- |
| [copyDocumentModule](#document-copyDocumentModule)           | before, add, after |      |
| [copyDocumentModule.each](#document-copyDocumentModule.each) | before, after      |      |
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
| [restoreTrash](#document-restoreTrash)                       | after              |      |
| [updateDocument](#document-updateDocument)                   | before, after      |      |
| [updateReadedCount](#document-updateReadedCount)             | before, after      |      |
| [updateVotedCount](#document-updateVotedCount)               | before, after      |      |
| [updateVotedCountCancel](#document-updateVotedCountCancel)   | before, after      |      |

### 글 조회

#### getDocumentList <Badge type="danger" text="🚧 초안 작성중" /> {#document-getDocumentList}

#### getNoticeList <Badge type="danger" text="🚧 초안 작성중" /> {#document-getNoticeList}

---

### 글 추가, 수정, 삭제

#### insertDocument <Badge type="danger" text="🚧 초안 작성중" /> {#document-insertDocument}

::: warning
이 이벤트는 글과 관련된 데이터의 변경사항을 처리하는 트랜잭션 안에서 동작하므로 의도하지 않은 롤백이 발생하지 않도록 주의해야 한다.
:::

##### after

```php
/**
 * @param object{
 *     '_filter': string,
 *     'act': string,
 *     'allow_trackback': 'Y'|'N',
 *     'category_srl': int,
 *     'comment_status': "ALLOW",
 *     'commentStatus': "ALLOW",
 *     'content': string,
 *     'document_srl': int,
 *     'email_address': string,
 *     'error_return_url':string,
 *     'extra_vars': string,
 *     'homepage': string,
 *     'ipaddress': string,
 *     'is_admin': 'Y'|'N',
 *     'is_notice': 'Y'|'N',
 *     'isRestore': bool,
 *     'lang_code': string,
 *     'list_order': int,
 *     'member_srl': int,
 *     'mid': string,
 *     'module_srl': int,
 *     'module': string,
 *     'nick_name': string,
 *     'notify_message': 'Y'|'N',
 *     'readed_count': int,
 *     'status': "PUBLIC",
 *     'tags': string,
 *     'title': string,
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

#### updateReadedCount <Badge type="danger" text="🚧 초안 작성중" /> {#document-updateReadedCount}

#### deleteDocument <Badge type="danger" text="🚧 초안 작성중" /> {#document-deleteDocument}

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

---

### 휴지통

#### moveDocumentToTrash <Badge type="danger" text="🚧 초안 작성중" /> {#document-moveDocumentToTrash}

#### restoreTrash <Badge type="danger" text="🚧 초안 작성중" /> {#document-restoreTrash}

---

### 복사, 이동

#### moveDocumentModule <Badge type="danger" text="🚧 초안 작성중" /> {#document-moveDocumentModule}

#### copyDocumentModule <Badge type="danger" text="🚧 초안 작성중" /> {#document-copyDocumentModule}

#### copyDocumentModule.each <Badge type="danger" text="🚧 초안 작성중" /> {#document-copyDocumentModule.each}

---

### 신고

#### declaredDocument <Badge type="danger" text="🚧 초안 작성중" /> {#document-declaredDocument}

#### declaredDocumentCancel <Badge type="danger" text="🚧 초안 작성중" /> {#document-declaredDocumentCancel}

### getComments <Badge type="danger" text="🚧 초안 작성중" /> {#document-getComments}

### getDocumentMenu <Badge type="danger" text="🚧 초안 작성중" /> {#document-getDocumentMenu}

### getThumbnail <Badge type="danger" text="🚧 초안 작성중" /> {#document-getThumbnail}

### manage <Badge type="danger" text="🚧 초안 작성중" /> {#document-manage}

### updateVotedCount <Badge type="info" text="before & after" /> - 추천/비추천 <Badge type="danger" text="🚧 초안 작성중" /> {#document-updateVotedCount}

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

### updateVotedCountCancel <Badge type="info" text="before & after" /> - 추천/비추천 취소 <Badge type="danger" text="🚧 초안 작성중" /> {#document-updateVotedCountCancel}

::: info 같은 형식의 데이터
이 이벤트와 앞의 `document.updateVotedCount` 이벤트는 데이터 형식이 같다.  
위 예제와 같은 이벤트 리스너에서 `cancel` 속성으로 구분하여 함께 처리할 수 있다.

```php
/**
 * @see \DocumentController::updateVotedCountCancel()
 */
```

:::

## 댓글 (comment) <Badge type="danger" text="🚧 초안 작성중" /> {#comment}

| 트리거                             | 호출시점           | 설명 |
| ---------------------------------- | ------------------ | ---- |
| copyCommentByDocument.each         | before, add, after |      |
| declaredComment                    | before, after      |      |
| declaredCommentCancel              | before, after      |      |
| deleteComment                      | before, after      |      |
| getCommentList                     | before, after      |      |
| getCommentMenu                     | before, after      |      |
| getThumbnail                       | before             |      |
| getTotalCommentList                | before, after      |      |
| insertComment                      | before, after      |      |
| moveCommentToTrash                 | before, after      |      |
| procCommentAdminChangeStatus       | after              |      |
| sendEmailToAdminAfterInsertComment | after              |      |
| updateComment                      | before, after      |      |
| updateVotedCount                   | before, after      |      |
| updateVotedCountCancel             | before, after      |      |

### copyCommentByDocument <Badge type="danger" text="🚧 초안 작성중" /> {#comment-copyCommentByDocument}

### copyCommentByDocument.each <Badge type="danger" text="🚧 초안 작성중" /> {#comment-copyCommentByDocument.each}

### declaredComment <Badge type="danger" text="🚧 초안 작성중" /> {#comment-declaredComment}

### declaredCommentCancel <Badge type="danger" text="🚧 초안 작성중" /> {#comment-declaredCommentCancel}

### deleteComment <Badge type="danger" text="🚧 초안 작성중" /> {#comment-deleteComment}

### getCommentList <Badge type="danger" text="🚧 초안 작성중" /> {#comment-getCommentList}

### getCommentMenu <Badge type="danger" text="🚧 초안 작성중" /> {#comment-getCommentMenu}

### getThumbnail <Badge type="danger" text="🚧 초안 작성중" /> {#comment-getThumbnail}

### getTotalCommentList <Badge type="danger" text="🚧 초안 작성중" /> {#comment-getTotalCommentList}

### insertComment <Badge type="danger" text="🚧 초안 작성중" /> {#comment-insertComment}

### moveCommentToTrash <Badge type="danger" text="🚧 초안 작성중" /> {#comment-moveCommentToTrash}

### procCommentAdminChangeStatus <Badge type="danger" text="🚧 초안 작성중" /> {#comment-procCommentAdminChangeStatus}

### sendEmailToAdminAfterInsertComment <Badge type="danger" text="🚧 초안 작성중" /> {#comment-sendEmailToAdminAfterInsertComment}

### updateComment <Badge type="danger" text="🚧 초안 작성중" /> {#comment-updateComment}

### updateVotedCount <Badge type="danger" text="🚧 초안 작성중" /> {#comment-updateVotedCount}

### updateVotedCountCancel <Badge type="danger" text="🚧 초안 작성중" /> {#comment-updateVotedCountCancel}

## 회원 (member) <Badge type="danger" text="🚧 초안 작성중" /> {#member}

| 트리거                                                       | 호출시점      | 설명 |
| ------------------------------------------------------------ | ------------- | ---- |
| [addMemberToGroup](#member-addMemberToGroup)                 | after         |      |
| [deleteGroup](#member-deleteGroup)                           | before, after |      |
| [deleteMember](#member-deleteMember)                         | before, after |      |
| [deleteScrapDocument](#member-deleteScrapDocument)           | before, after |      |
| [dispMemberSignUpForm](#member-dispMemberSignUpForm)         | before        |      |
| [doAutoLogin](#member-doAutoLogin)                           | after         |      |
| [doLogin](#member-doLogin)                                   | before, after |      |
| [doLogout](#member-doLogout)                                 | before, after |      |
| [getMemberMenu](#member-getMemberMenu)                       | before, after |      |
| [insertGroup](#member-insertGroup)                           | before, after |      |
| [insertMember](#member-insertMember)                         | before, after |      |
| [insertMemberDevice](#member-insertMemberDevice)             | before, after |      |
| [procMemberAuthAccount](#member-procMemberAuthAccount)       | before, after |      |
| [procMemberInsert](#member-procMemberInsert)                 | before, after |      |
| [procMemberModifyInfo](#member-procMemberModifyInfo)         | after         |      |
| [procMemberScrapDocument](#member-procMemberScrapDocument)   | before, after |      |
| [updateGroup](#member-updateGroup)                           | before, after |      |
| [updateMember](#member-updateMember)                         | before, after |      |
| [updateMemberEmailAddress](#member-updateMemberEmailAddress) | after         |      |

### addMemberToGroup <Badge type="danger" text="🚧 초안 작성중" /> {#member-addMemberToGroup}

### deleteGroup <Badge type="danger" text="🚧 초안 작성중" /> {#member-deleteGroup}

### deleteMember <Badge type="danger" text="🚧 초안 작성중" /> {#member-deleteMember}

### deleteScrapDocument <Badge type="danger" text="🚧 초안 작성중" /> {#member-deleteScrapDocument}

### dispMemberSignUpForm <Badge type="danger" text="🚧 초안 작성중" /> {#member-dispMemberSignUpForm}

### doAutoLogin <Badge type="danger" text="🚧 초안 작성중" /> {#member-doAutoLogin}

### doLogin <Badge type="danger" text="🚧 초안 작성중" /> {#member-doLogin}

### doLogout <Badge type="danger" text="🚧 초안 작성중" /> {#member-doLogout}

### getMemberMenu <Badge type="danger" text="🚧 초안 작성중" /> {#member-getMemberMenu}

### insertGroup <Badge type="danger" text="🚧 초안 작성중" /> {#member-insertGroup}

### insertMember <Badge type="danger" text="🚧 초안 작성중" /> {#member-insertMember}

### insertMemberDevice <Badge type="danger" text="🚧 초안 작성중" /> {#member-insertMemberDevice}

### procMemberAuthAccount <Badge type="danger" text="🚧 초안 작성중" /> {#member-procMemberAuthAccount}

### procMemberInsert <Badge type="danger" text="🚧 초안 작성중" /> {#member-procMemberInsert}

### procMemberModifyInfo <Badge type="danger" text="🚧 초안 작성중" /> {#member-procMemberModifyInfo}

### procMemberScrapDocument <Badge type="danger" text="🚧 초안 작성중" /> {#member-procMemberScrapDocument}

### updateGroup <Badge type="danger" text="🚧 초안 작성중" /> {#member-updateGroup}

### updateMember <Badge type="danger" text="🚧 초안 작성중" /> {#member-updateMember}

### updateMemberEmailAddress <Badge type="danger" text="🚧 초안 작성중" /> {#member-updateMemberEmailAddress}

## 파일 (file) <Badge type="danger" text="🚧 초안 작성중" /> {#file}

| 트리거       | 호출시점      | 설명 |
| ------------ | ------------- | ---- |
| deleteFile   | before, after |      |
| downloadFile | before, after |      |
| insertFile   | before, after |      |

### deleteFile <Badge type="danger" text="🚧 초안 작성중" /> {#file-deleteFile}

### downloadFile <Badge type="danger" text="🚧 초안 작성중" /> {#file-downloadFile}

### insertFile <Badge type="danger" text="🚧 초안 작성중" /> {#file-insertFile}

---

```php
('communication.addFriend', 'after')
('communication.addFriend', 'before')
('communication.deleteFriend', 'after')
('communication.deleteFriend', 'before')
('communication.sendMessage', 'after')
('communication.sendMessage', 'before')
('editor.deleteSavedDoc', 'after')
('mail.send', 'after')
('mail.send', 'before')
('menu.getModuleListInSitemap', 'after')
('module.deleteModule', 'after')
('module.deleteModule', 'before')
('module.dispAdditionSetup', 'after')
('module.dispAdditionSetup', 'before')
('module.procModuleAdminCopyModule', 'after')
('ncenterlite._insertNotify', 'after')
('ncenterlite._insertNotify', 'before')
('point.setPoint', 'after')
('point.setPoint', 'before')
('push.send', 'after')
('push.send', 'before')
('sms.send', 'after')
('sms.send', 'before')

// ('admin.dashboard', 'before')
// ('display', 'after')
// ('display', 'before')
// ('layout', 'before')
// ('moduleHandler.init', 'after')
// ('moduleHandler.init', 'before')
// ('moduleHandler.proc', 'after')
// ('moduleObject.proc', 'after')
// ('moduleObject.proc', 'before')
// ('comment.copyCommentByDocument.each', 'after')
// ('comment.copyCommentByDocument.each', 'before')
// ('comment.copyCommentByDocument', 'add')
// ('comment.declaredComment', 'after')
// ('comment.declaredComment', 'before')
// ('comment.declaredCommentCancel', 'after')
// ('comment.declaredCommentCancel', 'before')
// ('comment.deleteComment', 'after')
// ('comment.deleteComment', 'before')
// ('comment.getCommentList', 'after')
// ('comment.getCommentList', 'before')
// ('comment.getCommentMenu', 'after')
// ('comment.getCommentMenu', 'before')
// ('comment.getThumbnail', 'before')
// ('comment.getTotalCommentList', 'after')
// ('comment.getTotalCommentList', 'before')
// ('comment.insertComment', 'after')
// ('comment.insertComment', 'before')
// ('comment.moveCommentToTrash', 'after')
// ('comment.moveCommentToTrash', 'before')
// ('comment.procCommentAdminChangeStatus', 'after')
// ('comment.sendEmailToAdminAfterInsertComment', 'after')
// ('comment.updateComment', 'after')
// ('comment.updateComment', 'before')
// ('comment.updateVotedCount', 'after')
// ('comment.updateVotedCount', 'before')
// ('comment.updateVotedCountCancel', 'after')
// ('comment.updateVotedCountCancel', 'before')
// ('document.copyDocumentModule.each', 'after')
// ('document.copyDocumentModule.each', 'before')
// ('document.copyDocumentModule', 'add')
// ('document.copyDocumentModule', 'after')
// ('document.copyDocumentModule', 'before')
// ('document.declaredDocument', 'after')
// ('document.declaredDocument', 'before')
// ('document.declaredDocumentCancel', 'after')
// ('document.declaredDocumentCancel', 'before')
// ('document.deleteDocument', 'after')
// ('document.deleteDocument', 'before')
// ('document.getComments', 'after')
// ('document.getDocumentList', 'after')
// ('document.getDocumentList', 'before')
// ('document.getDocumentMenu', 'after')
// ('document.getDocumentMenu', 'before')
// ('document.getNoticeList', 'after')
// ('document.getNoticeList', 'before')
// ('document.getThumbnail', 'before')
// ('document.insertDocument', 'after')
// ('document.insertDocument', 'before')
// ('document.manage', 'after')
// ('document.manage', 'before')
// ('document.moveDocumentModule', 'after')
// ('document.moveDocumentModule', 'before')
// ('document.moveDocumentToTrash', 'after')
// ('document.moveDocumentToTrash', 'before')
// ('document.restoreTrash', 'after')
// ('document.updateDocument', 'after')
// ('document.updateDocument', 'before')
// ('document.updateReadedCount', 'after')
// ('document.updateReadedCount', 'before')
// ('document.updateVotedCount', 'after')
// ('document.updateVotedCount', 'before')
// ('document.updateVotedCountCancel', 'after')
// ('document.updateVotedCountCancel', 'before')
// ('file.deleteFile', 'after')
// ('file.deleteFile', 'before')
// ('file.downloadFile', 'after')
// ('file.downloadFile', 'before')
// ('file.insertFile', 'after')
// ('file.insertFile', 'before')
// ('member.addMemberToGroup', 'after')
// ('member.deleteGroup', 'after')
// ('member.deleteGroup', 'before')
// ('member.deleteMember', 'after')
// ('member.deleteMember', 'before')
// ('member.deleteScrapDocument', 'after')
// ('member.deleteScrapDocument', 'before')
// ('member.dispMemberSignUpForm', 'before')
// ('member.doAutoLogin', 'after')
// ('member.doLogin', 'after')
// ('member.doLogin', 'before')
// ('member.doLogout', 'after')
// ('member.doLogout', 'before')
// ('member.getMemberMenu', 'after')
// ('member.getMemberMenu', 'before')
// ('member.insertGroup', 'after')
// ('member.insertGroup', 'before')
// ('member.insertMember', 'after')
// ('member.insertMember', 'before')
// ('member.insertMemberDevice', 'after')
// ('member.insertMemberDevice', 'before')
// ('member.procMemberAuthAccount', 'after')
// ('member.procMemberAuthAccount', 'before')
// ('member.procMemberInsert', 'after')
// ('member.procMemberInsert', 'before')
// ('member.procMemberModifyInfo', 'after')
// ('member.procMemberScrapDocument', 'after')
// ('member.procMemberScrapDocument', 'before')
// ('member.updateGroup', 'after')
// ('member.updateGroup', 'before')
// ('member.updateMember', 'after')
// ('member.updateMember', 'before')
// ('member.updateMemberEmailAddress', 'after')
```
