# 라이믹스 모듈 만들기

::: danger
🚧 이 문서는 초안을 작성중인 문서이다.
:::

라이믹스에 기능을 추가하거나 확장하기위해 모듈을 이용할 수 있다.

모듈 크게 모듈의 정보와 설정을 담은 XML 포맷의 Manifest 파일과 동작을 구성하는 PHP 파일로 구성된다. 여기에 라이믹스가 지원하는 다국어, DB 테이블 정의, view 템플릿을 구성할 수 있다.

```shell
modules/example1      # 이 예제 모듈의 디렉토리
├── conf              # 모듈 정보 및 설정 (Manifest)
│   ├── info.xml        # 모듈 정보
│   └── module.xml      # 모듈 설정
├── lang              # 다국어
│   └── ko.php          # 한국어
├── public            # Assets
│   └── img
├── queries           # XML 쿼리
├── schemas           # 데이터베이스 스키마
├── src               # 모듈을 구성하는 PHP 파일
│   ├── controllers     # 컨트롤러
│   └── models          # 모델
├── views             # view 템플릿 파일
└── LICENSE           # 라이선스 파일 (GNU GPL v2 or later)
```

::: tip 모듈 템플릿
모듈의 권장 구조를 쉽게 구성할 수 있도록 GitHub 템플릿 저장소를 이용할 수 있다.  
-> [모듈 템플릿 사용하기](https://github.com/rhymix-guide/rhymix-module)
:::

::: details 라이믹스의 권장 구조

위 예시는 필자가 권장하는 구조이며, 라이믹스의 권장하는 구조와는 사소한 차이가 있다.

::: code-group

```shell [라이믹스 권장 구조]
modules/example       # 모듈의 폴더
├── conf              # 모듈 정보 및 설정 (Manifest)
│   ├── info.xml        # 모듈 정보
│   └── module.xml      # 모듈 설정
├── controllers       # 컨트롤러 // [!code highlight]
├── lang              # 다국어
│   └── ko.php          # 한국어
├── models            # 모델 // [!code highlight]
├── queries           # XML 쿼리
├── schemas           # DB 테이블 스키마
├── views             # view 템플릿
│   └── img
└── LICENSE           # 라이선스 파일
```

```shell [비교하기]
modules/example       # 모듈의 폴더
├── conf              # 모듈 정보 및 설정 (Manifest)
│   ├── info.xml        # 모듈 정보
│   └── module.xml      # 모듈 설정
├── controllers       # src 밑으로 이동 // [!code --]
├── lang              # 다국어
│   └── ko.php          # 한국어
├── models            # src 밑으로 이동 // [!code --]
├── public            # Assets // [!code ++]
│   └── img           # [!code ++]
├── queries           # XML 쿼리
├── schemas           # DB 테이블 스키마
├── src               # 모듈을 구성하는 PHP 파일 // [!code ++]
│   ├── controllers     # 컨트롤러 // [!code ++]
│   └── models          # 모델 // [!code ++]
├── views             # view 템플릿
│   └── img           # public 밑으로 이동 // [!code --]
└── LICENSE           # 라이선스 파일
```

`controllers`, `models` 디렉토리의 역활 외에 추가로 필요해지는 구조가 다른 디렉토리와 뒤섞이는 문제 방지를 위해 `src` 디렉토리 아래에 두었다.

`public` 디렉토리는 Webpack, vite, gulp 등 빌드 도구를 사용할 때 타겟 디렉토리로 지정을 편리하게 하고, `public` 디렉토리를 제외한 모든 접근을 제한해야할 때 규칙을 단순화하기 위해서이다.

---

라이믹스의 권장 구조를 따른 모듈 생성기를 이용할 수 있다.  
-> [라이믹스 모듈 생성기](https://www.poesis.org/tools/rxmodulegen/)
:::
