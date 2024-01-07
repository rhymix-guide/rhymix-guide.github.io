# changelog

::: danger
🚧 이 문서는 초안을 작성중인 문서이다.
:::

## v2.1

### 주요 변경사항 {#v2-1-주요-변경사항}

#### 트리거 {#v2-1-트리거}

### v2.1.8 — 2023-10-27 {#v2-1-8}

-> [Rhymix 2.1.8 Release Notes](https://rhymix.org/news/424)

- 템플릿 문법 v2 프리뷰 버전 공개
  - Blade 문법 기반의 새로운 템플릿 시스템 추가
  - https://rhymix.org/manual/theme/template_v2
  - 안정화를 거쳐 라이믹스 v2.2에서 공식 지원 예정
- `procFilter()` 함수를 사용하여 폼을 제출할 때 XML이 아닌 JSON 형식으로 응답하도록 변경
- `Rhymix\Framework\Cookie` 클래스 추가
- 트리거 `admin.dashboard` 추가
  - 관리자 대시보드 내용과 순서를 변경하는데 활용 가능

### v2.1.7 — 2023-10-10 {#v2-1-7}

-> [Rhymix 2.1.7 Release Notes](https://rhymix.org/news/419)

- `common/framework` 경로의 메소드에 type 선언 적용
- 트리거 `document.copyDocumentModule.each` before, after 추가
- 트리거 `comment.copyCommentByDocument.each` before, after 추가
- `Security::getRandomUUID()`에서 UUID 버전을 선택할 수 있도록 개선
  ```php
  public static function getRandomUUID(int $version = 4): string;
  Security::getRandomUUID();  // v4
  Security::getRandomUUID(7); // v7
  ```

### v2.1.6 — 2023-09-27 {#v2-1-6}

- 에러 로그를 통한 디버깅이 원활하지 않은 호스팅 환경에서 필요할 때 에러 메시지를 화면에 표시할 수 있도록, 주석 처리된 코드를 index.php에 추가 (#2180)
- 대부분의 전역 함수에 반환 자료형을 명시하고, 호환성 문제의 가능성이 낮은 곳에는 파라미터의 자료형도 지정
- 라이믹스 2.1.5 이후 일부 템플릿 변환시 유의미한 공백 문자가 삭제되는 문제 수정
- 파일 모듈의 일부 메소드에 관한 주석이 반환 자료형을 잘못 표기하는 문제 수정 (#2183)
- Rhymix\Framework\Cache 및 DB 클래스의 일부 메소드에 관한 주석이 반환 자료형을 잘못 표기하는 문제 수정

### v2.1.5 — 2023-09-13 {#v2-1-5}

- SCSS 컴파일시 sourcemap을 생성하여, 개발자 도구에서 원본 SCSS 파일의 줄 번호를 쉽게 확인할 수 있도록 개선
- 템플릿에서 오류 발생시 표시되는 줄 번호가 원본 파일의 줄 번호와 항상 일치하도록 개선
- 템플릿 컴파일시 불필요한 BOM을 삭제하고, CRLF 줄바꿈 문자를 LF로 통일하여 최종 출력물이 일관성있게 인코딩되도록 개선
- 부분 페이지 렌더링(레이아웃 제거) 기능 사용 여부를 관리자가 컨트롤할 수 있도록 옵션 추가
- files 테이블의 upload_target_type 컬럼에 최대 20자까지 저장할 수 있도록 하여, doc, cmt 등으로 억지로 줄여쓸 필요 없도록 변경
- PHP-CLI에서 라이믹스 호출시 세션을 사용할 수 없어서 발생하는 E_WARNING 수정
- 스크립트 합치기 기능 사용시 개발자 도구가 잘못된 경로의 sourcemap 파일을 로딩하려고 시도하므로, 이 경우 sourcemap 참조를 제거하도록 변경
- executeQuery()의 3번째 파라미터($column_list)에 배열이 아닌 NULL 등을 넘길 경우 치명적인 오류 수정 (#2186)
- getLayoutList() 메소드가 deprecated로 잘못 표시된 것 수정 (#1975)
- 사용을 권장하지 않거나 라이믹스에서 쓸모없게 된 함수들을 deprecated로 표시하고, legacy.php 파일 하단으로 이동
- 기본 에러 핸들러에서 $errcontext 파라미터 제거 (PHP 7.2 이후 deprecated, PHP 8.0 이후 지원 중단된 기능)

### v2.1.4 — 2023-08-31 {#v2-1-4}

- 자동 로그인 쿠키를 정기적으로 다시 전송하고, 보안키 교체 여부를 선택할 수 있도록 하여, 특정 브라우저나 어플리케이션에서 로그인이 풀리는 현상을 완화
- 테이블 스키마 XML에서 default="CURRENT_TIMESTAMP()" 등 간단한 함수를 기본값으로 지정할 수 있도록 지원 (#2169)
- module.xml에서 특정 액션에서는 세션을 사용하지 않거나 Cache-Control 헤더를 전송하지 않도록 하는 기능 추가
- 크론탭 등에서 CLI 스크립트를 호출하는 통일된 방법 제공 (예: php index.php common.clean_empty_dirs)
- \_rx_ajax_compat, \_rx_csrf_token 등 라이믹스에서 특별한 의미를 가진 POST 필드를 X-AJAX-Compat, X-CSRF-Token 등의 HTTP 헤더로 대체할 수 있도록 지원
- xGetElementById(), exec_xml() 등 라이믹스에서 deprecated 표시된 자바스크립트 함수를 호출할 경우, stack trace를 볼 수 있도록 console.log가 아닌 console.warn을 사용하여 표시
- 회원 팝업 메뉴, 문서 팝업 메뉴 등을 불러올 때 XML이 아닌 JSON으로 통신하도록 변경
- 커스텀 네임스페이스 아래에 2단계 이상의 네임스페이스를 사용하면 인식하지 못하는 문제 수정
- 커스텀 쿼리 사용시 디버그 정보에 실제 쿼리 실행 위치가 아닌 DB.php가 표시되는 문제 수정
- 한국 IP 주소 대역 업데이트

### v2.1.3 — 2023-08-15 {#v2-1-3}

- 쪽지 보내기, 친구 추가 등 회원 메뉴에서 연결되는 대부분의 화면을 현재 창에 열도록 변경 (#1732, #2154)
- 세션 키를 사용하는 보안 설정 삭제 (#2157)
- 세션 쿠키에 항상 httpOnly 속성을 추가하도록 변경
- 알림센터에서 FCM을 사용하여 푸시 알림을 발송할 때, 알림 데이터를 "notification" 필드에 넣을지 선택하는 옵션을 제공합니다. (#1933)
- MemberController->insertGroup() 메소드와 procMemberAdminInsertGroup() 액션의 결과값에 group_srl 값이 추가되었습니다.
- 라이믹스 2.1.3부터 ./files/cache/ 디렉토리 아래에 있는 .php 파일을 직접 호출하는 것은 금지됩니다. 아파치 사용시 .htaccess에 의해 자동으로 차단되며, nginx 사용시 rewrite 규칙을 업데이트하여야 차단됩니다.
- 쪽지 보내기, 친구 추가 등 팝업창에서 열던 화면을 현재 창에서 열도록 스킨을 수정할 경우, 폼을 표시하는 disp 액션과 폼을 제출하는 proc 액션 양쪽 모두 window_type=self 파라미터를 추가해 주어야 합니다. 이 파라미터를 추가하지 않을 경우 팝업창에서 열던 기존 방식의 스킨이라고 간주하고, 팝업창에 맞는 레이아웃을 표시하게 됩니다.
- 트랜잭션 안에서 실행되던 document.insertDocument (before) 트리거가 트랜잭션 바깥으로 이동했습니다. 예전에는 이 트리거에서 오류를 반환하면 트랜잭션을 중단시키고 다른 자료가 실행한 쿼리까지 롤백할 수 있었으나, 이제는 다른 쿼리에 영향을 주지 않습니다.
- module.xml에서 사용하는 `check_csrf`, `meta_noindex`, `admin_index` 등의 속성에서 하이픈(`-`), 언더바(`_`), `camelCase` 표현을 구분하지 않고 모두 허용하도록 변경되었습니다.
  - `check-csrf="true"`, `check_csrf="Y"`, `checkCsrf="on"` 모두 동일한 의미입니다.
- module.xml에서 이벤트 핸들러(트리거)를 선언할 수 있도록 지원합니다.
  - 더이상 트리거 등록 여부를 PHP에서 확인하고 일일이 등록해 줄 필요가 없습니다.
  - 이벤트를 받을 클래스는 controller, model 등 XE 방식의 명칭을 입력해도 되고, 해당 모듈의 네임스페이스(Rhymix\Modules\모듈명) 아래에 있는 클래스명을 입력해도 됩니다. 신규 개발하는 모듈이라면 네임스페이스를 사용하는 것을 권장합니다.
  - 이벤트 핸들러 삭제시에도 module.xml을 수정하면 "모듈 설정 완료" 클릭시 자동으로 삭제됩니다.
  - 단, module.xml에 이벤트 핸들러가 하나라도 선언되어 있는 경우, 다른 방법으로 등록한 트리거는 삭제 대상으로 인식합니다.
  - 예를 들어 아래의 예제에서 beforeInsertDocument() 메소드는 Rhymix\Modules\모듈명\Controllers\EventHandlers 클래스에 있고, 이 클래스는 ./modules/모듈명/controllers/EventHandlers.php 파일에 선언되어 있다고 가정합니다.
- 특정 액션 직전이나 직후에만 호출되는 이벤트 핸들러(트리거)를 선언할 수 있도록 지원합니다.
- 모듈에서 "Rhymix\Modules\모듈명"이 아닌 커스텀 네임스페이스를 선언할 수 있도록 지원합니다.
- 모듈에서 "모듈명.class.php" 대신 사용할 기본 클래스와 설치/업데이트 담당 클래스를 별도로 선언할 수 있도록 지원합니다.
- 초 단위가 없는 타임스탬프를 zdate()이나 ztime()에 넘길 경우 현재 시각을 반환하는 문제 수정 (#2161)
- 일부 표준 시간대에서 ISO 8601 타임스탬프를 zdate()이나 ztime()에 넘길 경우 잘못된 표준 시간대로 해석하는 문제 수정
- 유튜브 iframe 코드의 allow 속성이 삭제되는 문제 수정

### v2.1.2 — 2023-07-06 {#v2-1-2}

- 게시판 확장변수의 설명란에 여러 줄을 입력할 수 있도록 지원 (#2106)

### v2.1.1 — 2023-06-26 {#v2-1-1}

- 특정 언어의 번역문이 누락된 경우, 영어로 fallback하지 않고 공란으로 표시되는 문제 수정 (#2131)
- 모듈 주소(mid), 아이디 등에서 "member"를 금지어로 취급하도록 변경
- 게시판 확장변수의 설명란에 여러 줄을 입력할 수 있도록 지원 (#2106)
- 기본 회원 스킨 한정으로, 필수 약관에 동의하지 않으면 폼이 제출되지 않도록 수정 (#2139)
- 쪽지의 발신자, 수신자 등의 정보를 트리거에서 조작할 수 있도록 지원 (#2100)
- 휴지통 이동 후 트리거에서 trash_srl 값을 받아올 수 있도록 개선 (#2141)
- $this->setRedirectUrl()에 연관배열을 넘길 수 있도록 개선
- 특정 환경에서 태그나 댓글 검색시 ORDER BY 컬럼을 찾을 수 없는 문제 수정 @dewekk (#2138)

### 🎉 v2.1.0 — 2023-06-21 {#v2-1-0}

작년 말에 공지한 대로 라이믹스 2.1은 PHP 7.2 이상에서만 사용할 수 있으며, PHP 7.4 이상을 권장합니다. 구 버전이나 XE 1.x에서 업그레이드하실 경우 PHP 버전 차이에 주의하시기 바랍니다. 구 버전에서 정상 작동하던 모듈, 애드온, 위젯 등이 PHP 7.2 이상에서 오류를 일으킨다면 BaseObject 문제일 가능성이 높습니다. 오래 전 XE 1.9에서 변경된 사항이므로 대다수의 정상적인 자료는 이미 수정되었거나, 수정 방법이 커뮤니티에 알려져 있을 것입니다.

- 최신 모바일 기기나 이미지 편집 프로그램이 생성하는 AVIF 및 HEIC 이미지를 JPG로 변환하여 저장하는 기능
  - ImageMagick 7 이상의 "magick" 명령이 서버에 설치되어 있어야 합니다.
- 회원 모듈에 URL(mid)를 고정적으로 부여하여 레이아웃, URL 구조 등을 일관성있게 유지할 수 있도록 지원 (#1806, #1896, #2122)
  - 기존 사이트는 회원 모듈 설정에서 URL을 확인하고 "강제 적용"을 체크해야 적용됩니다.
  - 해당 기능 사용시 커뮤니케이션 모듈(쪽지함, 친구 기능) 및 알림센터 설정 화면도 회원 모듈의 URL(mid)를 사용합니다.
- 수정하여 업로드한 템플릿을 즉시 변환하지 않고 1~3초 기다리는 옵션 제공
  - 해외 서버 등 업로드가 느린 환경에서 업로드 도중 방문자가 있을 경우, 반쪽짜리 템플릿을 변환하려다 오류를 뿜는 불편을 줄일 수 있습니다.
- 스팸필터 모듈이 확장변수 내용도 검사하도록 변경 (#2051)
- 회원가입 추가 항목(확장변수)으로 국가, 언어, 표준 시간대 입력란을 생성할 수 있도록 지원 @dewekk (#2089)
- argon2id 비밀번호 암호화(해싱) 알고리즘 지원
- 모듈 네임스페이스 내에 있는 클래스 파일명은 대소문자를 구분하는 것을 기본으로 결정
- 최상위 디렉토리에 있던 composer.json과 vendor를 common 디렉토리 안으로 이동
- 외부 요청을 위한 Rhymix\Framework\HTTP 클래스 추가
- SCSS 컴파일러를 최신 버전으로 업데이트
- 코어에 포함하여 배포하던 cacert.pem을 composer/ca-bundle 패키지로 대체하여 업데이트 편의 도모
- XML 쿼리에서 SQL date 타입의 포맷(YYYY-MM-DD hh:mm:ss)으로 기본값을 입력할 수 있는 default="timestamp()" 문법 지원
  - XML 스키마에서 SQL date 타입을 사용하려면 type="\date"로 선언하면 됩니다. type="date"는 XE용 자료와 호환되도록 char(14)로 생성됩니다.
- zdate(), ztime() 등 시간을 처리하는 함수에서 SQL date 타입의 포맷(YYYY-MM-DD hh:mm:ss) 및 ISO 8601 포맷(표준 시간대 정보 포함)도 기존의 14자 포맷과 동일하게 지원하여, 표준 포맷을 편리하게 사용할 수 있도록 지원
- 실험적으로 jQuery 3.x를 선택할 수 있도록 지원
- 모듈에서 $this->copyResponseFrom($다른모듈)을 사용하여 다른 모듈, 다른 액션의 실행 결과를 그대로 가져올 수 있도록 지원
- 자동 로그인시 member.doAutoLogin (after) 트리거 추가 @Waterticket (#2076, #2087)
- 파일 업로드시 file.insertFile (before) 트리거에서 포맷을 변환하거나 최종 저장 위치(save_path = uploaded_filename)를 지정할 수 있도록 지원
- getUrl() 및 관련 함수에 2차원 이상의 배열을 넘길 수 있도록 지원 (#2123)
- 승인, 거부, 미인증(메일 인증 미완료) 등 회원 상태를 구체적으로 표시하는 status 컬럼 추가 (#2124)
- AJAX 기능 강화
- DB 클래스 개선
- config.php에서 session.lifetime 설정에 0보다 큰 값을 입력한 경우, 기본값인 8시간(28800)을 적용하지 않고 설정값 그대로 사용하도록 변경
- 로그인하지 않은 상태에서도 `<meta>` 태그에 항상 CSRF 토큰을 넣도록 변경
- `E_DEPRECATED` 오류를 숨기지 않도록 변경
- SVG 파일 업로드시 보안상 문제가 될 수 있는 태그 필터링 강화
- X-Frame-Options 및 X-Content-Type-Options 헤더를 전송하는 보안 설정 추가
- 스크립트 합치기 기능 사용시 중간에 낀 CSS @import가 동작하지 않는 문제 수정 (#2052)
- 댓글 신고 취소시 트리거에서 document_srl이 잘못 전달되는 문제 수정 (#2080)
- SCSS 컴파일시 전달한 변수에 false, null, 빈 문자열 등이 포함되어 있으면 컴파일되지 않는 문제 수정 (#2085)
- 모든 형태의 짧은주소 사용시 로그인 후 무한 리다이렉트가 발생할 수 있는 문제 수정 @dewekk (#2095)
- 오류 표시(message) 모듈에서 설정한 모바일 스킨이 적용되지 않는 문제 수정 (#2098)
- 비회원 글쓴이의 닉네임, 홈페이지 등이 이중으로 인코딩되는 문제 수정
- 회원정보의 홈페이지 항목에 한글 도메인 등 IDN을 입력할 수 없는 문제 수정 (#2111)
- 메일 발신자 주소에 기본값을 사용하려고 해도 Reply-To 주소로 덮어씌워지는 문제 수정 (#2115)
- 문서나 댓글 요약을 추출할 때, 일부 에디터에서 작성한 내용이 빈 칸 없이 붙어버리는 문제 수정 (#2116)
- CLI 환경에서 일부 Context 변수가 세팅되어 있지 않은 문제 수정
- 라이믹스 프레임워크와 주요 모듈의 빈 줄 공백문자 처리 방법을 통일 (.editorconfig 이용을 적극 권장합니다.)
- 주요 모듈의 클래스명이 모두 대문자로 시작하도록 통일 (예: memberModel → MemberModel)
- 사용을 권장하지 않는 기능 deprecated 처리
  - exec_xml() 함수 deprecated 처리, exec_html() 호출시 콘솔 에러 메시지 변경 (#2109)
  - 구 버전에서 커스텀 쿼리에 종종 사용되던 DB 클래스의 \_query() 및 \_fetch() 메소드를 deprecated 처리
  - Context::convertEncodingStr() 및 관련된 메소드들을 deprecated 처리
- 파일 캐시, wincache, xcache 삭제

## v2.0

::: tip PHP 7.1 이하를 지원하는 마지막 버전
Rhymix 2.1부터는 PHP 7.2 이상에서만 사용할 수 있으며, PHP 7.4 이상을 권장한다.
:::

### 주요 변경사항 {#v2-0-주요-변경사항}

#### 트리거 {#v2-0-트리거}

| 트리거                                                                                             | 추가된 버전 |
| -------------------------------------------------------------------------------------------------- | ----------- |
| [`comment.getThumbnail`](/reference/trigger-list#comment-getThumbnail) (before)                    | v2.0.0      |
| [`document.getThumbnail`](/reference/trigger-list#document-getThumbnail) (before)                  | v2.0.0      |
| [`member.deleteScrapDocument`](/reference/trigger-list#member-deleteScrapDocument) (before, after) | v2.0.24     |

### v2.0.24 — 2022-12-21 {#v2-0-24}

PHP 7.0 ~7.1을 지원하는 마지막 버전입니다. 2023년 1월 이후 릴리즈되는 버전은 PHP 7.2 이상에서만 사용할 수 있으며, PHP 7.4 이상을 권장합니다. 구 버전에서는 일부 기능을 사용할 수 없는 정도가 아니라, 전혀 작동하지 않게 될 예정이니 주의하시기 바랍니다.

PHP 7.0-7.1에서 정상 작동하던 모듈, 애드온, 위젯 등이 PHP 7.2 이상에서 오류를 일으킨다면 new Object를 new BaseObject로 변경해야 할 가능성이 높으니 참고하세요. 2017년 XE 1.9에서 변경된 사항이므로 대다수의 자료는 이미 수정되었거나, 수정 방법이 커뮤니티에 알려져 있을 것입니다.

- 디버그 패널에서 쿼리의 콜 스택을 모두 볼 수 있는 옵션 추가 (#1944)
- 댓글 신고 취소 기능 추가 @dewekk (#2010)
- 댓글을 불러오는 대부분의 메소드에서 `status`를 지정할 수 있도록 지원 (#2035)
- 트리거 `member.deleteScrapDocument` (before, after) 추가 #2038
  - 회원의 스크랩 취소(삭제) 시
- `PageHandler`를 `iterator`로 사용할 수 있도록 지원 @nemo9l (#2039)
- 회원 메뉴의 언어코드를 치환하는 시점을 늦추어 서드파티 자료가 끼어들 수 있도록 지원 (#2041)
- 서드파티 자료에서 특정 문서의 스크랩 횟수, 특정 회원의 스크랩 횟수를 구할 수 있도록 지원
- config.js를 통해 CKEditor 설정을 커스터마이징할 때, CKEDITOR.toolbarMode 변수를 통해 도구상자 모드를 파악할 수 있도록 지원
- 디버그 정보를 JSON으로 볼 때 쿼리명, 소요시간, 에러메시지 등 자주 찾는 정보를 먼저 배치하여 편의 개선
- 모듈 설정을 분할 저장할 수 있도록 insertModuleSectionConfig(), getModuleSectionConfig() 등의 메소드 제공
- XML 쿼리에서 정렬 방식을 변수로 넘기지 않은 경우 기본값을 별도 지정할 수 있도록 order_default 속성 제공
- PHP 7.x에서 str_contains(), str_starts_with(), str_ends_with() 함수를 사용할 수 있도록 polyfill 제공
- 일부 특이한 쿼리 실행시 PHP 8.x에서 발생하는 워닝 수정
- 다음 우편번호 API 주소를 최신 권장사항에 맞게 변경 @nemo9l (#2040)
-

### v2.0.23 — 2022-10-31 {#v2-0-23}

- 에디터에서 일부 aspect-ratio 및 object-fit CSS 속성을 사용할 수 있도록 허용 (#2006)
  - XSS 필터링에 사용하는 라이브러리의 엄격한 설정 방식 특성상, aspect-ratio의 분수 문법은 1/2, 9/16, 3/4 등 아주 흔한 비율들 외에는 지정하기 어렵습니다. 가능하면 0.5, 0.5825, 0.75 등 좀더 자유도가 높은 소수 문법을 사용하시기 바랍니다.
- 템플릿에서 $foo->$bar 문법을 사용할 수 있도록 개선
  - 객체의 속성을 동적으로 참조하기 위해 더이상 객체를 배열로 변환할 필요가 없습니다.
- 템플릿 인클루드, CSS/JS 로딩 또는 SCSS import 사용시, 라이믹스가 설치된 디렉토리를 기준으로 하는 상대경로를 지정하는 문법 추가
  - 다른 자료가 제공하는 파일이나 상위 디렉토리의 파일을 참조하려면 현재 파일의 경로를 기준으로 거슬러올라가서 `../../../../modules/foo/bar.css` 라고 써야 했던 것을 `^/modules/foo/bar.css` 처럼 `^`를 써서 단순화할 수 있습니다. 라이믹스가 서브디렉토리에 설치된 경우에도 정확하게 동작합니다.
- 등록된 모바일 기기에서 로그아웃하며 FCM 토큰을 제시할 경우, 해당 토큰을 등록 해제 (로그아웃된 기기로 푸시알림을 보내는 것 방지)
- "잘못된 요청입니다" 또는 "보안정책상 허용되지 않습니다" 오류 발생시 원인을 추측할 수 있는 `ERR_*` 코드를 추가하여 디버깅 편의 향상
- `document.updateDocument` (after) 트리거 시점에서 문서 정보를 가져오면 수정 전의 확장변수가 나오는 문제 수정 (#1969)
- 디버그 기능 사용시 쿼리 오류가 표시되지 않는 문제 수정
- 쿼리 오류를 표시할 때 항상 "error -1"이 붙는 문제 수정
- 서드파티 자료들이 자주 혼동하는 `getModuleInfos`, `getModulesInfo` 쿼리의 구조를 서로 호환되도록 변경
- `<config autoescape="on" />` 문법 사용시 `on`, `off` 외에도 `true`, `yes`, `Y` 등 코어에서 `toBool()` 함수를 통해 참으로 인식할 수 있는 값은 모두 참으로 처리하도록 변경하여, 의도치 않게 `autoescape`를 꺼놓게 되는 상황을 방지

### v2.0.22 — 2022-08-16 {#v2-0-22}

- 모바일 어플리케이션 등에서 로그인 상태를 체크할 수 있는 rx_login_status 쿠키 및 getLoginStatus API 추가
- 관리자 페이지에서 도메인의 다크모드 설정이 적용되지 않는 문제 수정 (#1980)
- 템플릿에서 data: 이미지 경로를 지정하면 이상하게 변환되는 문제 수정
- JSON으로 제출한 CSRF 토큰을 인식하지 못하는 문제 수정

### v2.0.21 — 2022-07-04 {#v2-0-21}

- PHP 8.2 이후 버전에 대비하여 Context 및 BaseObject 클래스에 #[AllowDynamicProperties] 속성 추가
- 라이믹스 2.0.19 보안패치 이후 위젯페이지에 괄호가 포함된 데이터를 제출할 수 없는 문제 수정 @dewekk (#1909)
- CSS 합치기 기능 사용시 charset 설정이 주석 아래로 밀려서 적용되지 않는 문제 수정 (#1926)
- PHP 8.x에서 LESS 컴파일시 string \* float 에러 수정 (#1927)
- 날짜 형식의 확장변수, 생일 등 시간 정보가 없는 데이터는 표준 시간대 변환을 거치지 않도록 수정 (#1936)
- normalizeUri() 함수에 외부 URL 입력시 현재 사이트의 SSL 사용 여부에 따라 변조되는 문제 수정 (#1949)
- UPDATE 쿼리에서 정의한 테이블 alias가 적용되지 않는 문제 수정 @dewekk (#1950, #1956)
- 복잡한 구조의 JSON 데이터 제출시 배열이 아닌 오브젝트로 디코딩되는 문제 수정
- 시작하지 않은 트랜잭션을 커밋하려고 시도할 수 있는 문제 수정
- Guzzle 라이브러리 업데이트 (#1920, #1951, #1960)

### v2.0.19 — 2022-03-16 {#v2-0-19}

- [RVE-2022-2] 외부페이지의 템플릿 문법을 이용한 원격 코드 실행(RCE) 취약점
- MemberModel::getMemberInfo\* 함수의 반환값 포맷이 일정하지 않은 데 따른 잠재적인 버그 예방조치 (#1886)
- 템플릿에서 loop 속성에 함수를 사용하면 2번씩 호출되는 문제 수정 (#1893)
- 쿼리 파라미터가 최대 길이를 초과할 때 에러 메시지에는 최소 길이로 표시되는 문제 수정 @Erictoby (#1897)
- 템플릿 문법에서 {isset()}, {unset()}, {empty()}로 시작하는 삼항식을 인식하지 못하는 문제 수정
- 특정한 형태로 작성된 모듈에서 다른 모듈의 standalone 액션을 끌어다 쓰려고 하면 메시지 없는 에러를 반환하는 문제 수정
- URL 검증 정규식 수정
- 문서의 getExtraVars() 메소드가 항상 배열을 반환하도록 개선 @dewekk (#1879)

### v2.0.18 — 2022-02-09 {#v2-0-18}

- 푸시 알림(FCM) 전송시 보낸이 정보, 제목, 내용 등을 구분하여 data 필드에 넣어서 받는 앱이 자유롭게 조합할 수 있도록 개선 (#1843)
- 메일 주소나 전화번호로 로그인할 경우 user_id 대신 email_address나 phone_number라는 필드명을 사용할 수 있도록 하여 브라우저 자동완성 지원 강화 (#1847)
- XML 쿼리 사용시 변수 값으로 NullValue 클래스를 넘기면 IS NULL, IS NOT NULL 조건이 생성되도록 개선
- XML 테이블 스키마에서 foreign key를 정의한 경우, 테이블간의 관계를 감안하여 CREATE TABLE 순서를 결정하도록 개선
- DB 쿼리 결과는 BaseObject를 상속받는 DBResultHelper 클래스에 담아서 반환하여 쉽게 구분할 수 있도록 변경
- 커스텀 쿼리 사용시 테이블 alias가 일관성있게 생성되지 않는 문제 수정 (#1864)
- 에디터 컴포넌트 등의 확장변수 선언시 type 속성을 지정하지 않으면 입력란이 사라지는 문제 수정 (#1871, #1872)
- 코어에 포함된 게시판 모바일 스킨들이 모바일 헤더/푸터 설정을 따르지 않는 문제 수정 (#1873)
- 이미 로그인한 사용자가 로그인 화면에 접근하면 직전 화면이 아닌 메인화면으로 돌아가는 문제 수정

### v2.0.17 — 2021-12-31 {#v2-0-17}

- 실행 가능할 수 있는 .php 및 .js 파일을 파일박스에 올릴 수 없도록 변경 (보안취약점은 아니지만 선제적 방어) (#1796)
- 크로뮴 기반의 엣지 브라우저를 정상 인식하도록 개선 @YJSoft (#1811, #1812)
- FCM 알림 발송시 소리, 아이콘, 색상, 뱃지 등을 지정할 수 있는 함수 추가 @Waterticket (#1836, #1841)
- FCM 연동을 위한 기기 토큰 등록 과정을 헤더, 쿠키 등 더 다양한 방법으로 수행할 수 있도록 개선
- 네임스페이스가 적용된 임의의 모듈 클래스로도 트리거를 등록할 수 있도록 지원
- DB::modifyColumn()에서 charset 개별 지정 지원

### v2.0.16 — 2021-10-08 {#v2-0-16}

- 최신 SSL 인증서 호환성 개선을 위한 cacert.pem 업데이트
- 대한민국 IP 주소 대역 목록 업데이트
- 프로필 사진 등을 변경하는 메소드를 서드파티 자료에서 직접 호출할 경우 회원 캐시가 갱신되지 않는 문제 수정
- 02-1688-XXXX와 같은 형태의 한국 전화번호가 검증을 통과하지 못하는 문제 수정

### v2.0.15 — 2021-09-13 {#v2-0-15}

- 폼에 mid, act, error_return_url 등 불필요한 hidden input을 추가하지 않도록 지시하는 `rx-autoform="false"` 속성 추가 (#1779)
- 모듈에서 `setRedirectUrl()`을 사용하여 다른 주소로 포워딩할 때, `setHttpStatusCode()`를 사용하여 301, 302, 303, 307, 308 상태코드를 추가할 수 있도록 개선
- 자동 생성되는 확장변수 입력 태그에 `rx_ev_checkbox`, `rx_ev_select` 등의 class명을 추가하여 서드파티 자료에서 보다 쉽게 조작할 수 있도록 개선
- 파일 업로드를 포함하는 `rx_ajax` 폼 제출시에도 `success` 및 `error` 콜백함수를 지정할 수 있도록 개선
- 구 문법을 사용하여 멀티컬럼 유니크 인덱스를 생성할 수 없는 문제 수정 (#1778)
- 모바일에서 board API 사용시 권한이 세팅되지 않아 본문을 읽을 수 없는 문제 수정 (#1780)
- sql_mode가 기본값인 상태에서 긴 댓글은 휴지통에 들어가지 않는 문제 수정

### v2.0.13 — 2021-07-01 {#v2-0-13}

- `<load>` 문법으로 외부 CSS 파일을 불러올 때 index 속성이 적용되지 않는 문제 수정 (#1734)
  - 다른 자료에서 CSS를 끌어다 쓰는 경우 여전히 순서가 어긋날 수 있습니다. 예: 위젯 스킨에서 자체 포함된 CSS, 레이아웃의 CSS, 외부 CSS 등을 섞어쓰는 경우, 레이아웃에서 끌어다 쓴 CSS는 레이아웃에 포함된 다른 CSS들과 함께 정렬됩니다. index 속성 조작으로 다른 자료의 영역을 침범할 수 없습니다.
- 썸네일의 가로세로 길이가 서로 다른 경우 세로 길이를 무시하고 가로 기준으로 정사각형이 되는 문제 수정

### v2.0.12 — 2021-06-22 {#v2-0-12}

- `Context::getBodyClassList()` 및 `Context::removeBodyClass()` 메소드 추가
- 라이트모드/다크모드 여부를 최대한 빨리 감지하여 페이지 로딩 직후 깜빡임을 줄이고, 모드가 변경되더라도 즉시 재감지하도록 개선 (#1704)
- 썸네일 생성시 `height`을 `auto`로 지정하면 원본 이미지 비율에 맞추어 썸네일 세로 크기를 자동 판단하는 기능 추가 (#1707)
- 게시판 API에서 공지 여부, 제목 색상, 첨부파일 수, 댓글 허용 여부 등의 정보를 활용할 수 있도록 개선 (#1711)
- 서브쿼리 조건에도 if 속성을 사용할 수 있도록 개선 @mackeyhan (#1728)
- 회원, 문서, 댓글의 팝업 메뉴를 등록할 때 `_self`, `_blank`, `_parent`, `_top` 등 구체적인 프레임명을 지정할 수 있도록 개선 (#1732)
- `DocumentController::updateDocumentExtraVars()` 함수를 추가하여 특정 문서의 특정 확장변수 값을 쉽게 변경할 수 있도록 개선
- 위의 함수 및 `DocumentController::insertDocumentExtraVars()`를 호출할 때 `var_idx` 없이 `eid`만 넘겨도 정상 작동하도록 개선
- XML 쿼리에서 `default="null"` 속성이 XE와 다르게 해석되는 문제 수정 (#1706)
- 외부 URL을 import하는 CSS 파일을 합칠 경우 `import`가 삭제되는 문제 수정 (#1729)

### v2.0.11 — 2021-04-30 {#v2-0-11}

- 문서 목록을 불러올 때 항상 `extra_vars` 컬럼을 포함하도록 변경 (#1695)
- 기본 썸네일 방식을 "비율 유지하며 가득 채움(`fill`)"로 변경
- 문서와 댓글 클래스에서 동일하게 작동하는 `getStatus()` 및 `getStatusText()` 메소드를 통해 삭제 여부 등의 상태를 쉽게 파악할 수 있도록 지원
- 쿼리 결과 데이터를 `stdClass`가 아닌 임의의 클래스에 담을 수 있도록 지원
- 지난 5년간 정상 작동하지 않은 `exec_html()` 함수를 deprecate 처리 (#1690)
- 잘못된 내용이 들어간 채 13년간 방치된 `document.getChildCategory` 쿼리 삭제 (#1694)

### v2.0.10 — 2021-04-13 {#v2-0-10}

- 모듈 개발자가 특정 액션에 사용할 수 있는 HTTP method를 제한하더라도 controller 이외의 클래스에서는 적용되지 않는 문제 수정

### v2.0.9 — 2021-03-31 {#v2-0-9}

- 글읽기 페이지에서 `author` 및 `section` 메타 태그 지원 (#1663)
- 친구 추가/삭제시 트리거 지원 (#1666)
- 모듈에서 직접 추가한 OpenGraph 메타 태그를 덮어쓰지 않도록 변경
- 쿼리스트링이 포함된 파일 경로를 `og:image` 메타 태그로 지정한 경우, 이미지 크기를 측정하기 전에 쿼리스트링을 제거하여 정확한 경로를 찾아가도록 변경
- 설정되지 않은 도메인으로 접속시 기본 액션을 "301 리다이렉트"에서 "메인 화면 표시"로 변경
- CLI에서는 세션을 아예 시작하지 않도록 변경
- 다크모드를 자동 감지하도록 설정한 경우, `getColorScheme()` 함수가 항상 다크모드로 인식하는 문제 수정 (#1662)
- 모바일용 외부페이지 경로를 입력하지 않은 경우, 안내문과 달리 PC용 외부페이지 경로가 적용되지 않는 문제 수정 (#1665)
- 그누보드5에서 회원정보를 들여온 경우 PBKDF2 해시를 인식하지 못하는 문제 수정

### v2.0.8 — 2021-02-28 {#v2-0-8}

- CSRF 체크시 Referer 헤더뿐 아니라 Origin 헤더도 체크하도록 개선
- XML 쿼리에 ifvar 속성 지원 (6b7486e7)
- 동영상 썸네일 추출시 잘못된 명령을 실행하는 문제 수정
- ModuleModel::getModuleSrlByMid() 메소드가 연관배열을 반환하여 기존 자료와 호환되지 않을 수 있는 문제 수정 (#1614)
- PHP 8.0에서 아주 오래된 레이아웃(버전 0.1)을 사용할 경우 XML 파싱 과정에서 발생하는 오류 수정 (#1627)
- 파일 업로드가 포함된 폼은 새로고침 없는 제출(rx_ajax) 기능이 정상적으로 적용되지 않는 문제 수정
- list_count = 0인 경우 잘못된 SQL 구문이 생성되는 문제 수정

### v2.0.7 — 2021-02-05 {#v2-0-7}

- PHP에서 MenuAdminModel::getMenuInfo() 메소드를 사용하여 임의의 메뉴(사이트맵)를 불러올 수 있습니다.
- 템플릿에서 $\_SESSION을 직접 참조할 수 있도록 개선했습니다.
- 트랜잭션 안에서 또다시 트랜잭션을 사용하려고 할 경우, XE 및 Rhymix 1.x 버전과 같이 SAVEPOINT를 사용하여 부분적 롤백을 허용하는 기능을 다시 적용했습니다. 이와 관련된 쿼리들도 모두 디버그 로그에 남도록 하여, 이중 트랜잭션으로 인한 오류 발생시 좀더 안정적으로 디버깅할 수 있도록 했습니다.
- JOIN, GROUP BY, 서브쿼리 등이 포함된 XML 쿼리의 결과 갯수 카운트가 잘못 나오거나 쿼리 오류를 유발하는 문제 수정 (#1592, #1593)
- 회원가입 및 회원정보 수정시 확장변수 검증을 정상적으로 통과하지 못하는 문제 수정 (#1594)
- ModuleModel::getMidList()에서 검색 조건 설정시 캐시 때문에 검색 조건이 반영되지 않는 문제 수정 (#1596)

### v2.0.6 — 2021-01-29 {#v2-0-6}

- 메뉴마다 아이콘 코드를 별도로 지정할 수 있습니다. 해당 코드를 실제로 사용하여 아이콘을 표시하는 것은 서드파티 레이아웃 제작자의 몫입니다. 기존에 메뉴 설명란을 사용하여 아이콘 지정을 지원하던 레이아웃이라면 이제 아이콘과 설명을 모두 입력받을 수도 있습니다.
- 로그인시 다른 모든 기기에서 로그아웃되도록 하는 옵션이 회원 모듈에 추가되었습니다. DB 세션 사용 여부와 무관하며, 기본값은 OFF입니다.
- SCSS 스타일시트에서 상대경로로 임의의 파일을 인클루드할 수 있도록 지원합니다. `@import(./css/filename.scss)`와 같이 확장자를 포함한 상대경로를 정확하게 입력하면 해당 파일을 불러오고, 기존에 지원하던 방식대로 `@import(css/filename)`과 같이 약식으로 지정하면 `css/_filename.scss`라는 partial을 불러오려는 것으로 해석됩니다. 레이아웃에 포함된 SCSS 파일을 스킨에서 인클루드하여 사용하는 등, 서로 다른 자료끼리 연동하는 데는 전자가 더 편리합니다.
- 최신 cacert.pem 파일을 기본 내장하고, 모든 curl 및 소켓 요청에 일괄 적용하도록 하였습니다.
- 영문이나 숫자만 저장하므로 `utf8mb4`를 지원할 필요가 없는 일부 DB 컬럼들의 문자셋을 utf8 또는 latin1으로 변경하였습니다. `MyISAM`이나 `InnoDB`의 인덱스 길이 제한에 영향을 덜 받을 것으로 예상됩니다. 이를 위해 XML 스키마에서 `charset=""` 속성을 사용할 수 있도록 하였습니다. 기존 방식인 `utf8mb4="false"` 속성도 지원하며, `charset="utf8"`와 동일한 것으로 인식합니다.
- 소셜XE 등 서드파티 모듈에서 아이디, 비밀번호 확인 필드 없이 회원가입을 받더라도 정상적으로 가입되도록 수정
- 서브쿼리 컬럼을 사용하는 쿼리에서 count를 요청할 경우 오류가 발생하거나 정확하지 않은 결과가 나오는 문제 수정 @mackeyhan @kijin (#1575)

### v2.0.5 — 2021-01-19 {#v2-0-5}

- 썸네일 생성시 기존의 crop, ratio 방식 외에도 다양한 방식을 선택할 수 있도록 하였습니다.
- 파일 모듈을 거쳐서 다운로드해야 하는 동영상인 경우, `<video>` 태그에 preload="none" 속성이 자동으로 추가되도록 했습니다. (#1557)
- 디버그 설정을 통해 모든 SQL 쿼리에 쿼리명과 IP 주소를 주석으로 덧붙이도록 할 수 있습니다. DB의 process list나 slow log를 사용하여 슬로우 쿼리를 확인할 때, 누가 어디에서 실행한 쿼리인지 좀더 쉽게 확인할 수 있습니다.
- XML 쿼리 작성시 `<index_hint>`에 변수(var)와 기본값(default)을 지정할 수 있습니다.
- NOT IN 쿼리에 expression을 사용한 경우 IN으로 잘못 해석되는 문제 수정 @mackeyhan (#1566)
- 레이아웃에 포함된 info.xml을 수정해도 레이아웃 설정 화면에 곧바로 반영되지 않는 문제 수정

### v2.0.3 — 2021-01-08 {#v2-0-3}

- 템플릿 변환시 srcset 속성에 포함된 상대경로도 실제 설치 경로에 맞게 변환하도록 함 @shydah (#1544)
- 다크모드 사용시 에디터와 업로더에도 자동으로 어두운 색이 적용되도록 함 @misol (#1546, #1548)
- 통합게시판 설정에 기간 제한 추가 (#1505)
- 회원가입 및 로그인에 사용하던 전역 룰셋을 제거하고 PHP단에서 더 상세하게 컨트롤하도록 변경
- SELECT 쿼리에서 GROUP BY 또는 DISTINCT 사용시 결과 갯수가 맞지 않거나 2페이지 이후 데이터가 보이지 않을 수 있는 현상 해결
- composer 의존성 자료 업데이트, Guzzle 6.5 추가, 불필요한 라이브러리 삭제

### v2.0.2 — 2021-01-04 {#v2-0-2}

- `document.getNoticeList` 트리거 추가 @bjrambo (#1520)
- 커뮤니케이션 모듈 스킨에 read_message.html이 없는 경우 messages.html만 불러오도록 하여 반응형 스킨 제작을 용이하게 함 (#1524)
- 통합게시판 사용시, 서드파티 자료가 문서에 추가한 $mid, $module_title 등을 덮어쓰지 않도록 함

### 🎉 v2.0.0 — 2020-12-18 {#v2-0-0}

- 짧은주소 대폭 개선 [#1322](https://github.com/rhymix/rhymix/pull/1322)
  - 짧은주소 적용 확대
  - 서드파티 모듈에서 짧은주소 형식을 지정하여 사용 가능
    - 📌 https://rhymix.org/manual/plugin/router/router
- 모바일 푸시알림 지원 [#1325](https://github.com/rhymix/rhymix/pull/1325)
  - 구글 FCM 연동으로 알림센터의 알림 기능 제공
- PDO 적용 및 API 지원 [#1332](https://github.com/rhymix/rhymix/pull/1332) -> 📌바로가기

  - `Rhymix\Framework\DB` 클래스 싱글턴 인스턴스 사용
    ::: code-group

    ```php{3,6-7} [예시1]
    $oDB = DB::getInstance();
    $stmt = $oDB->prepare(
        'SELECT * FROM documents WHERE document_srl = :document_srl'
    );
    foreach ([1, 2, 3] as $document_srl) {
        $stmt->execute([':document_srl' => $document_srl]);
        $document = $stmt->fetch();
    }
    ```

    ```php{3,7} [예시2]
    $oDB = DB::getInstance();
    $result = $oDB->query(
        'SELECT * FROM member WHERE user_name = ? AND phone_number LIKE ?',
        $user_name,
        "%{$phone_number}%"
    );
    $member_list = $result->fetchAll();
    ```

    :::

- 확장변수 타입 추가. 국제전화번호, 국가, 언어, 시간대(Timezone) [#1475](https://github.com/rhymix/rhymix/pull/1475)
  - 회원정보 설정에서만 사용할 수 있다
- 썸네일 생성 시 트리거 추가
  - `document.getThumbnail`(before) -> [바로가기](/reference/trigger-list.html#document-getThumbnail)
  - `comment.getThumbnail`(before) -> [바로가기](/reference/trigger-list.html#comment-getThumbnail)
- 특정 문서와 회원에 관련된 캐시를 제거하는 메소드 추가
  - `DocumentController::clearDocumentCache()`
  - `MemberController::clearMemberCache()`
- 다크모드 감지 및 상태 공유를 위한 rx_color_scheme 쿠키 스펙을 도입하였습니다. [#1482](https://github.com/rhymix/rhymix/pull/1482)
- Rhymix\Framework\Cache 클래스에서 직접 incr/decr 함수를 지원합니다