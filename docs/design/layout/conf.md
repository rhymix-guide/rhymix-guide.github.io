# 레이아웃 설정 파일

::: danger
🚧 이 문서는 초안을 작성중인 문서이다.
:::

```xml
<?xml version="1.0" encoding="UTF-8"?>
<layout version="0.2">
    <title xml:lang="ko">레이아웃 이름</title>
    <description xml:lang="ko">새로 만든 레이아웃</description>
    <version>1.0.0</version>
    <date>2023-12-31</date>
    <author email_address="kkigomi@gmail.com" link="https://github.com/kkigomi/">
        <name xml:lang="ko">Kkigomi</name>
    </author>
    <menus />
    <extra_vars />
    </extra_vars>
</layout>
```

## 기본정보

<!--@include: ../../parts/conf/basic.md-->

## 제작자 정보 (author)

<!--@include: ../../parts/conf/author.md-->

## 메뉴 (menus)

```xml
<menus>
    <menu name="GNB" maxdepth="3" default="true">
        <title xml:lang="ko">메인 메뉴</title>
    </menu>
    <menu name="UNB" maxdepth="1">
        <title xml:lang="ko">매거진형 추가 메뉴</title>
    </menu>
    <menu name="FNB" maxdepth="2">
        <title xml:lang="ko">푸터 메뉴</title>
    </menu>
</menus>
```

## 확장변수 (extras_vars)

<!--@include: ../../parts/conf/extra_vars.md-->