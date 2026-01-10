---
---

# 트리거(Trigger) 목록

> [!danger]
> 🚧 이 문서는 초안을 작성중인 문서이다.

> [!warning] 이 문서는 항상 부정확하다
> 코드의 모든 변경사항을 추적하여 이 문서를 항상 최신으로 유지하는 것은 어렵다.
>
> 이벤트(트리거)가 전달하는 데이터 형식은 상세히 정의하려고 했으나 각 속성의 타입이 설명한 것과 다르거나 누락, 변경 되었을 수 있다. 이벤트를 이해하는데 힌트로 삼을 정도는 되지만 전달 객체를 확인하여 사용하는 것을 권장한다.
>
> 라이믹스의 디버그 기능을 활성화하고 `debugPrint()` 함수를 이용해 데이터를 확인할 수 있다.  
> 관리페이지에서 "설정 -> 시스템 설정 -> 디버그 설정" 탭에서 디버그 기능을 설정할 수 있다.
>
> ```php
> // 이벤트 리스너(콜백)의 예
> addTriggerFunction($name, $position, function ($data) {
>     debugPrint($data);
> });
> ```

> [!tip]
> 가장 먼저 실행되는 트리거는 `moduleHandler.init`(before), 가장 마지막은 `display`(after) 이다.

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

## 커뮤니케이션 (communication) <Badge type="danger" text="🚧 초안 작성중" /> {#communication}

### deleteMessage <Badge type="info" text="before | after" /> <Badge type="tip" text="Since v2.1.12" /> <Badge type="danger" text="🚧 초안 작성중" /> {#communication-deleteMessage}

### deleteMessages <Badge type="info" text="before | after" /> <Badge type="tip" text="Since v2.1.12" /> <Badge type="danger" text="🚧 초안 작성중" /> {#communication-deleteMessages}

### addFriend <Badge type="info" text="before | after" /> <Badge type="danger" text="🚧 초안 작성중" /> {#communication-addFriend}

### deleteFriend <Badge type="info" text="before | after" /> <Badge type="danger" text="🚧 초안 작성중" /> {#communication-deleteFriend}

### sendMessage <Badge type="info" text="before | after" /> <Badge type="danger" text="🚧 초안 작성중" /> {#communication-sendMessage}

## 기타 <Badge type="danger" text="🚧 초안 작성중" /> {#etc}

| 이벤트                      | 호출 시점     | 설명 |
| --------------------------- | ------------- | ---- |
| editor.deleteSavedDoc       | after         |      |
| mail.send                   | before, after |      |
| menu.getModuleListInSitemap | after         |      |
| ncenterlite.\_insertNotify  | before, after |      |
| point.setPoint              | before, after |      |
| push.send                   | before, after |      |
| sms.send                    | before, after |      |
