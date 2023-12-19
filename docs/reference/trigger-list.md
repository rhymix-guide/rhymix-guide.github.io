# 트리거(Trigger) 목록 <Badge type="warning" text="작성중인 문서" />

::: danger
이 문서는 초안을 작성중인 문서이다.
:::

::: tip
가장 먼저 실행되는 트리거는 `moduleHandler.init`(before), 가장 마지막은 `display`(after) 이다.
:::

## 코어 {#core}

| 트리거             | 호출시점      | 설명                                  |
| ------------------ | ------------- | ------------------------------------- |
| display            | before, after | 요청의 응답을 출력하기 전과 후에 호출 |
| layout             | before        |                                       |
| moduleHandler.init | before, after |                                       |
| moduleHandler.proc | after         |                                       |
| moduleObject.proc  | before, after |                                       |

### display {#core-display}

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

### layout {#core-layout}

### moduleHandler.init {#core-moduleHandler.init}

### moduleHandler.proc {#core-moduleHandler.proc}

### moduleObject.proc {#core-moduleObject.proc}

## 문서 (document) {#document}

| 트리거                  | 호출시점           | 설명 |
| ----------------------- | ------------------ | ---- |
| copyDocumentModule      | before, add, after |      |
| copyDocumentModule.each | before, after      |      |
| declaredDocument        | before, after      |      |
| declaredDocumentCancel  | before, after      |      |
| deleteDocument          | before, after      |      |
| getComments             | after              |      |
| getDocumentList         | before, after      |      |
| getDocumentMenu         | before, after      |      |
| getNoticeList           | before, after      |      |
| getThumbnail            | before             |      |
| insertDocument          | before, after      |      |
| manage                  | before, after      |      |
| moveDocumentModule      | before, after      |      |
| moveDocumentToTrash     | before, after      |      |
| restoreTrash            | after              |      |
| updateDocument          | before, after      |      |
| updateReadedCount       | before, after      |      |
| updateVotedCount        | before, after      |      |
| updateVotedCountCancel  | before, after      |      |

### copyDocumentModule {#document-copyDocumentModule}

### copyDocumentModule.each {#document-copyDocumentModule.each}

### declaredDocument {#document-declaredDocument}

### declaredDocumentCancel {#document-declaredDocumentCancel}

### deleteDocument {#document-deleteDocument}

### getComments {#document-getComments}

### getDocumentList {#document-getDocumentList}

### getDocumentMenu {#document-getDocumentMenu}

### getNoticeList {#document-getNoticeList}

### getThumbnail {#document-getThumbnail}

```php
/**
 * @param \stdClass()
 */
function ($options) {
    
}
```

### insertDocument {#document-insertDocument}

### manage {#document-manage}

### moveDocumentModule {#document-moveDocumentModule}

### moveDocumentToTrash {#document-moveDocumentToTrash}

### restoreTrash {#document-restoreTrash}

### updateDocument {#document-updateDocument}

### updateReadedCount {#document-updateReadedCount}

### updateVotedCount {#document-updateVotedCount}

### updateVotedCountCancel {#document-updateVotedCountCancel}

## 댓글 (comment) {#comment}

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

### copyCommentByDocument {#comment-copyCommentByDocument}

### copyCommentByDocument.each {#comment-copyCommentByDocument.each}

### declaredComment {#comment-declaredComment}

### declaredCommentCancel {#comment-declaredCommentCancel}

### deleteComment {#comment-deleteComment}

### getCommentList {#comment-getCommentList}

### getCommentMenu {#comment-getCommentMenu}

### getThumbnail {#comment-getThumbnail}

### getTotalCommentList {#comment-getTotalCommentList}

### insertComment {#comment-insertComment}

### moveCommentToTrash {#comment-moveCommentToTrash}

### procCommentAdminChangeStatus {#comment-procCommentAdminChangeStatus}

### sendEmailToAdminAfterInsertComment {#comment-sendEmailToAdminAfterInsertComment}

### updateComment {#comment-updateComment}

### updateVotedCount {#comment-updateVotedCount}

### updateVotedCountCancel {#comment-updateVotedCountCancel}

## 회원 (member) {#member}

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

### addMemberToGroup {#member-addMemberToGroup}

### deleteGroup {#member-deleteGroup}

### deleteMember {#member-deleteMember}

### deleteScrapDocument {#member-deleteScrapDocument}

### dispMemberSignUpForm {#member-dispMemberSignUpForm}

### doAutoLogin {#member-doAutoLogin}

### doLogin {#member-doLogin}

### doLogout {#member-doLogout}

### getMemberMenu {#member-getMemberMenu}

### insertGroup {#member-insertGroup}

### insertMember {#member-insertMember}

### insertMemberDevice {#member-insertMemberDevice}

### procMemberAuthAccount {#member-procMemberAuthAccount}

### procMemberInsert {#member-procMemberInsert}

### procMemberModifyInfo {#member-procMemberModifyInfo}

### procMemberScrapDocument {#member-procMemberScrapDocument}

### updateGroup {#member-updateGroup}

### updateMember {#member-updateMember}

### updateMemberEmailAddress {#member-updateMemberEmailAddress}

## 파일 (file) {#file}

| 트리거       | 호출시점      | 설명 |
| ------------ | ------------- | ---- |
| deleteFile   | before, after |      |
| downloadFile | before, after |      |
| insertFile   | before, after |      |

### deleteFile {#file-deleteFile}

### downloadFile {#file-downloadFile}

### insertFile {#file-insertFile}

---

```php
('admin.dashboard', 'before')
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
