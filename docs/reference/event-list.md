# 이벤트 / 트리거 목록

> [!danger] 🚧 이 문서는 초안을 작성중인 문서이다.

> [!important] 이 문서는 항상 부정확하다
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

> [!TIP] 모듈의 액션이 실행될 때 자동으로 발생하는 이벤트
> 모듈의 액션이 실행되기 전, 후에 `act:모듈이름.액션이름` 형태의 이벤트가 발생하며, `before`, `after` 시점으로 구분된다.
>
> 예를들어, 회원이 로그아웃할 때 `member` 모듈의 `procMemberLogout` 액션이 실행되는데, 다음과 같이 이벤트가 발생한다.
>
> 1. before `act:member.procMemberLogout`
> 1. before `member.doLogout`
> 1. after `member.doLogout`
> 1. after `act:member.procMemberLogout`
>
> before `act:member.procMemberLogout` 이벤트의 핸들러는 액션이 실행된 모듈의 인스턴스를 인자로 받을 수 있으며, after `act:member.procMemberLogout` 이벤트의 핸들러는 액션 메소드가 반환한 결과(보통 `\BaseObject` 또는 `\Rhymix\Framework\Helpers\DBResultHelper`)를 인자로 받을 수 있다.

## 변경내역 {#changes}

<!--@include: ./parts/event-list-changes.md -->

## 코어 <Badge type="danger" text="🚧 초안 작성중" /> {#core}

<!--@include: ./parts/event-list-core.md -->

## 문서 (document) <Badge type="danger" text="🚧 초안 작성중" /> {#document}

<!--@include: ./parts/event-list-document.md -->

## 댓글 (comment) <Badge type="danger" text="🚧 초안 작성중" /> {#comment}

<!--@include: ./parts/event-list-comment.md -->

## 회원 (member) <Badge type="danger" text="🚧 초안 작성중" /> {#member}

<!--@include: ./parts/event-list-member.md -->

## 파일 (file) <Badge type="danger" text="🚧 초안 작성중" /> {#file}

<!--@include: ./parts/event-list-file.md -->

## 커뮤니케이션 (communication) <Badge type="danger" text="🚧 초안 작성중" /> {#communication}

### deleteMessage <Badge type="info" text="Trigger" /> <Badge type="info" text="before, after" /> <Badge type="tip" text="v2.1.12+" /> <Badge type="danger" text="🚧 초안 작성중" /> {#communication-deleteMessage}

### deleteMessages <Badge type="info" text="Trigger" /> <Badge type="info" text="before, after" /> <Badge type="tip" text="v2.1.12+" /> <Badge type="danger" text="🚧 초안 작성중" /> {#communication-deleteMessages}

### addFriend <Badge type="info" text="Trigger" /> <Badge type="info" text="before, after" /> <Badge type="danger" text="🚧 초안 작성중" /> {#communication-addFriend}

### deleteFriend <Badge type="info" text="Trigger" /> <Badge type="info" text="before, after" /> <Badge type="danger" text="🚧 초안 작성중" /> {#communication-deleteFriend}

### sendMessage <Badge type="info" text="Trigger" /> <Badge type="info" text="before, after" /> <Badge type="danger" text="🚧 초안 작성중" /> {#communication-sendMessage}

## 기타 <Badge type="danger" text="🚧 초안 작성중" /> {#etc}

| 이벤트                      | 타입    | 호출 시점     | 설명 |
| --------------------------- | ------- | ------------- | ---- |
| editor.deleteSavedDoc       | Trigger | after         |      |
| mail.send                   | Trigger | before, after |      |
| menu.getModuleListInSitemap | Trigger | after         |      |
| ncenterlite.\_insertNotify  | Trigger | before, after |      |
| point.setPoint              | Trigger | before, after |      |
| push.send                   | Trigger | before, after |      |
| sms.send                    | Trigger | before, after |      |
