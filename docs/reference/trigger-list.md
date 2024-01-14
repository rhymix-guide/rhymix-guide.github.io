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
addTriggerFunction($name, $position, function ($data) {
    debugPrint($data);
});
```

:::

::: tip
가장 먼저 실행되는 트리거는 `moduleHandler.init`(before), 가장 마지막은 `display`(after) 이다.
:::

[[TOC]]

## 변경내역 {#changes}

<!--@include: ./parts/trigger-list-changes.md -->

## 코어 <Badge type="danger" text="🚧 초안 작성중" /> {#core}

<!--@include: ./parts/trigger-list-core.md -->

## 문서 (document) <Badge type="danger" text="🚧 초안 작성중" /> {#document}

<!--@include: ./parts/trigger-list-document.md -->

## 댓글 (comment) <Badge type="danger" text="🚧 초안 작성중" /> {#comment}

<!--@include: ./parts/trigger-list-comment.md -->

## 회원 (member) <Badge type="danger" text="🚧 초안 작성중" /> {#member}

<!--@include: ./parts/trigger-list-member.md -->

## 파일 (file) <Badge type="danger" text="🚧 초안 작성중" /> {#file}

<!--@include: ./parts/trigger-list-file.md -->

## 커뮤니케이션 (communication) <Badge type="danger" text="🚧 초안 작성중" />

### deleteMessage <Badge type="info" text="before & after" /> <Badge type="tip" text="Since v2.1.12" /> <Badge type="danger" text="🚧 초안 작성중" /> {#communication-deleteMessage}

### deleteMessages <Badge type="info" text="before & after" /> <Badge type="tip" text="Since v2.1.12" /> <Badge type="danger" text="🚧 초안 작성중" /> {#communication-deleteMessages}

### addFriend <Badge type="info" text="before & after" /> <Badge type="danger" text="🚧 초안 작성중" /> {#communication-addFriend}

### deleteFriend <Badge type="info" text="before & after" /> <Badge type="danger" text="🚧 초안 작성중" /> {#communication-deleteFriend}

### sendMessage <Badge type="info" text="before & after" /> <Badge type="danger" text="🚧 초안 작성중" /> {#communication-sendMessage}

---

```php
('editor.deleteSavedDoc', 'after')
('mail.send', 'after')
('mail.send', 'before')
('menu.getModuleListInSitemap', 'after')
('ncenterlite._insertNotify', 'after')
('ncenterlite._insertNotify', 'before')
('point.setPoint', 'after')
('point.setPoint', 'before')
('push.send', 'after')
('push.send', 'before')
('sms.send', 'after')
('sms.send', 'before')

// ('communication.addFriend', 'after')
// ('communication.addFriend', 'before')
// ('communication.deleteFriend', 'after')
// ('communication.deleteFriend', 'before')
// ('communication.deleteMessage', 'after')
// ('communication.deleteMessage', 'before')
// ('communication.deleteMessages', 'after')
// ('communication.deleteMessages', 'before')
// ('communication.sendMessage', 'after')
// ('communication.sendMessage', 'before')
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
