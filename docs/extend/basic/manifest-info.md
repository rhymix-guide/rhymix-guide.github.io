# Manifest - 정보 및 설정 파일

::: danger
🚧 이 문서는 초안을 작성중인 문서이다.
:::

모듈, 레이아웃, 스킨, 애드온, 위젯 등 해당 확장의 정보를 담고 있는 파일이다. 제작자 정보와 버전, 라이선스 등의 정보를 담고 있으며, 모듈의 API를 노출하거나 레이아웃이나 스킨의 설정을 정의하는 등의 역할을 한다.

## 개요 <Badge type="danger" text="🚧 초안 작성중" />

자료의 유형에 따라 전용 속성이 있으며 제작자 정보 등의 공통 속성을 가진다.

보통 `info.xml` 파일명이 사용되지만 스킨은 `skin.xml` 파일명을 사용한다. 모듈은 `info.xml`과 함께 `module.xml` 파일로 모듈의 기능을 정의하는데 사용한다.

## info.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<layout version="0.2">
    <title xml:lang="ko">자료 이름</title>
    <description xml:lang="ko">자료의 설명</description>
    <!-- 버전 -->
    <version>1.0.0</version>
    <!-- 배포날짜 -->
    <date>2023-12-31</date>

    <!-- 제작자 정보 -->
    <author email_address="author@email.local" link="https://github.com/">
        <name xml:lang="ko">제작자 이름</name>
    </author>
</layout>
```

보통 위와 같은 형식의 제작자 정보 등을 담고 있으며, 자료 유형에 따라 최상위 노드의 이름이 다르고 정의할 수 있는 항목이 다르다. 예시한 것처럼 레이아웃은 `<layout>` 최상위 노드를 사용한다.

| 자료 유형            | 최상위 노드     |
| -------------------- | --------------- |
| 모듈                 | `<module>`      |
| 레이아웃             | `<layout>`      |
| 모듈 스킨, 위젯 스킨 | `<skin>`        |
| 애드온               | `<addon>`       |
| 위젯                 | `<widget>`      |
| 위젯 스타일          | `<widgetstyle>` |

### 공통 속성

#### 자료 정보

```xml
<title xml:lang="ko">자료 이름</title>
<description xml:lang="ko">자료의 설명</description>
<!-- 버전 -->
<version>1.0.0</version>
<!-- 배포날짜 -->
<date>2023-12-31</date>
```

| 속성명        | 설명                            |
| ------------- | ------------------------------- |
| `title`       | 자료의 이름                     |
| `description` | 자료의 설명                     |
| `version`     | 자료의 버전 (major.minor.patch) |
| `date`        | 자료의 배포일 (YYYY-MM-DD)      |

::: tip
버전은 [유의적 버전](https://semver.org/lang/ko/) 규칙 사용을 권장한다
:::

#### 제작자 정보 (author)

자료의 제작자 정보를 정의할 수 있다.

제작자의 이름과, 이메일 그리고 웹사이트 정보를 기록할 수 있다.

```xml
<author email_address="author@mail.host" link="https://website.url/">
    <name xml:lang="ko">제작자 이름</name>
</author>
```

---

### 확장 변수 (extra_vars) <Badge type="danger" text="🚧 초안 작성중" />

확장변수(`extra_vars`)는 자료의 설정 폼을 정의할 때 사용한다. 레이아웃, 위젯, 모듈 스킨 등에서 사용자 설정을 입력받아서 활용할 수 있다. 예를 들면, 레이아웃에서는 사이트 제목이나, 위젯에서는 출력할 항목의 갯수 등을 입력받아서 사용할 수 있다.

```xml
<extra_vars>
    <var name="site_title" type="text">
        <title xml:lang="ko">사이트 제목</title>
    </var>
    <var name="list_count" type="text">
        <title xml:lang="ko">출력 갯수</title>
    </var>
</extra_vars>
```

| type               | 설명                      | 적용 자료            |
| ------------------ | ------------------------- | -------------------- |
| text               | `<input type="text">`     | layout, widget, skin |
| checkbox           | `<input type="checkbox">` | layout, widget, skin |
| colorpicker        | 색상 선택기               | layout, skin         |
| image              | 이미지 선택               | layout, skin         |
| radio              | `<input type="radio">`    | layout, widget       |
| select             | `<select>`                | layout, widget, skin |
| select-multi-order |                           | widget               |
| textarea           | `<textarea>`              | layout, widget, skin |

::: details 회원정보 전용 속성

| type          | 설명                      |
| ------------- | ------------------------- |
| country       | 국가 선택                 |
| date          | 날짜 선택 UI              |
| email_address | `<input type="email">`    |
| homepage      | `<input type="url">`      |
| kr_zip        | 한국 주소                 |
| language      | 언어 선택                 |
| password      | `<input type="password">` |
| tel           | 전화번호                  |
| tel_intl      | 국제 전화번호             |
| timezone      | 타임존                    |

:::

### 컬러셋 (colorset) <Badge type="tip" text="스킨 전용" /> <Badge type="danger" text="🚧 초안 작성중" />

모듈 스킨, 위젯 스킨 전용 속성

```xml
<colorset>
    <color name="black">
        <title xml:lang="ko">black</title>
    </color>
    <color name="white">
        <title xml:lang="ko">white</title>
    </color>
</colorset>
```

### 메뉴 (menus) <Badge type="tip" text="레이아웃 전용" /> <Badge type="danger" text="🚧 초안 작성중" />

레이아웃 전용 속성

## 모듈 module.xml <Badge type="danger" text="🚧 초안 작성중" />
