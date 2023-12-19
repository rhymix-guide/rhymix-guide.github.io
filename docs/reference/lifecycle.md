# Lifecycle

::: danger
이 문서는 초안을 작성중인 문서이다.
:::

XE 요청 라이프사이클이란 URL에 접속한 순간부터 클라이언트에 응답을 보낸 순간까지 XE가 거치는 일련의 과정을 나타냅니다. 다음은 XE 요청 라이프사이클을 나타낸 그림입니다.

XE 요청 라이프사이클의 주요 과정은 다음과 같습니다.

1. 컨텍스트 초기화
2. 모듈 초기화
3. 요청된 모듈 액션 실행
4. 응답 결과 생성
5. XE core 이해하기

개발자는 애드온을 사용해서 이 라이프사이클의 특정 순간에 커스텀 코드를 실행할 수 있습니다.
애드온은 XE 추가 기능의 일종으로서, PHP include 메커니즘으로 작동합니다. 코드가 직접 코어
메서드에 포함되기 때문에 라이프사이클을 조작하는 기능을 구현할 수 있습니다. 애드온에 관한 자세한 설명은 "2.2 애드온"을 참조하십시오.

## 1.2.1 컨텍스트 초기화
컨텍스트 초기화는 Context 클래스에서 처리합니다. 이 클래스는 XE 액션이 실행되는 환경을 캡슐화합니다. 주요 역할은 다음과 같습니다.

- $GLOBALS의 컨텍스트 변수 설정(display handler에서 사용)
- 언어 유형에 따라 언어 파일 포함
- 컨텍스트와 세션의 인증(authentication) 정보 설정
- 서버에서 rewrite 모드를 사용하는지 확인
- 자바스크립트 사용을 위한 위치 설정

Context 클래스의 위치는 ./classes/context/Context.class.php입니다.

## 1.2.2 모듈 초기화
모듈 초기화는 ModuleHandler 클래스의 init() 메서드에서 처리합니다. init() 메서드의 역할은 다음과 같습니다.

- 모듈 초기화 전에 애드온 실행(before_module_init hook)
- 요청 인수에서 변수 설정
- XSS를 방지하기 위한 변수 인증
- module_srl, mid, document_srl를 기준으로 요청 모듈 검색
- 현재 모듈 정보를 컨텍스트로 설정

ModuleHandler 클래스 위치는 ./classes/module/ModuleHandler.class.php입니다.

## 1.2.3 요청 모듈 액션 실행
모든 모듈은 ModuleHandler 클래스의 procModule() 메서드를 통해 실행됩니다. 이 메서드의 역할은 다음과 같습니다.

- 모듈 실행 전에 후크된 애드온 실행(before_module_proc hook)
- 현재 모듈 액션 실행

## 1.2.4 응답 결과 생성

DisplayHandler 클래스는 결과 생성을 담당합니다. 요청 종류에 따라 HTML이나 XML/JSON 콘텐츠를 출력할 수 있습니다. HTML의 경우, 이 클래스는 지정된 템플릿 파일을 검색하고 분석하여 완성된 HTML 형식을 만듭니다. XML/JSON의 경우 ModuleObject 속성은 다른 포매팅 없이 XML/JSON으로 직렬화(serialize)됩니다.
