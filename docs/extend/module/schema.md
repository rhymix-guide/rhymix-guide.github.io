# 테이블 생성

::: danger
🚧 이 문서는 초안을 작성중인 문서이다.
:::

```xml
<table name="my_table">
    <column name="no" type="bigint" notnull="notnull" primary_key="primary_key" auto_increment="auto_increment" />
    <column name="id" type="varchar" size="33" notnull="notnull" unique="unique_id" />
    <column name="data" type="longtext" notnull="notnull" />
    <column name="meta_utime" type="double" />
    <column name="meta_datetime" type="datetime" />
    <column name="meta_uri" type="text" />
    <column name="meta_ip" type="varchar" size="45" />
    <column name="meta_method" type="varchar" size="10" />
</table>
```

## 테이블 이름

테이블 이름은 최상위 노드인 `<table>`의 `name` 속성으로 정의한다.

`my_table` 테이블을 정의하는 예시:

```xml
<table name="my_table">
    <!-- columns -->
</table>
```

::: info Prefix
테이블 이름에는 자동으로 prefix가 붙는다. 테이블 이름에는 prefix를 붙이지 않아야 한다.
:::

## 속성

### name

```xml
<column name="id" />
```

### type

```xml
<column type="bigint" />
```

### notnull

```xml
<column notnull="notnull" />
```

### primary_key

```xml
<column primary_key="primary_key" />
```

### unique

```xml
<column name="uuid" unique="unique_uuid" />
```

### auto_increment

자동 증가 값

```xml
<column name="no" type="bigint" auto_increment="auto_increment" />
```

### size

```xml
<column name="name" type="varchar" size="100" />
```

### default

```xml
<column name="enable" type="char" size="1" default="N" />
```

### index

```xml
<column name="category" type="varchar" size="50" index="idx_category" />
```

## 예시

## 레퍼런스

- https://github.com/rhymix/rhymix/pull/1332
