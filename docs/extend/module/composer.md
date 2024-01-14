# 컴포저(Composer) 사용하기

::: danger
🚧 이 문서는 초안을 작성중인 문서이다.
:::

## 컴포저 최적화 설정 <Badge type="danger" text="🚧 초안 작성중" />

autoloader 우선 순위와 최적화를 위해 다음과 같은 설정을 사용하는 것이 좋다.  
라이믹스의 autoloader를 우선하고 클래스맵을 생성해 실행 속도를 향상시킨다.

```json
{
  "config": {
    "optimize-autoloader": true,
    "platform-check": false,
    "prepend-autoloader": false
  },
  "require": {
    "php": ">=7.2.5"
  }
}
```

| 설정                       | 설명                                                   |
| -------------------------- | ------------------------------------------------------ |
| require.php                | PHP 버전 체크.<br>라이믹스의 현재 지원 버전: `>=7.2.5` |
| config.optimize-autoloader | `--optimize-autoloader` 옵션과 동일                    |
| config.platform-check      | PHP 버전 등을 런타임에서 체크하는 코드를 생성하지 않음 |
| config.prepend-autoloader  | 라이믹스의 autoload 규칙을 먼저 적용                   |

::: tip
오토로드를 최적화하고 라이믹스와 충돌을 방지하기 위한 설정이므로 필수로 사용하자.
:::

### 배포 시 최적화

위와 같이 설정하면 패키지를 추가하거나 업데이트, `dump`를 실행할 때 위 설정이 적용된다.  
단, `require-dev` 항목의 패키지는 모듈 등 확장기능을 배포에 포함하지 않는 것이 좋으므로 `--no-dev` 옵션을 사용하여 제외하자.

```shell
composer dump --no-dev
```

Git 저장소나 배포할 때는 `--no-dev` 옵션을 사용하여 클래스맵 생성을 제외하고, 저장소에 추가되거나 배포 파일에서 제거되도록 설정해두자.

Git 저장소에는 실행에 필요한 패키지들만 포함되도록 하고, `dev` 패키지는 저장소에 추가되지 않도록 `phpstan/phpstan`(예시) 등의 패키지를 `.gitingore`에 추가해 두면 좋다. `.gitattributes`에는 저장소에 포함된 항목 중 일반 사용자에게 필요하지 않은 파일 등을 제외할 수 있다.

아래는 예시이다.

::: code-group

```[.gitignore]
phpstan.neon
vendor/bin
vendor/phpstan/phpstan
vendor/wikimedia/composer-merge-plugin
```

```[.gitattributes]
.gitattributes export-ignore
.github export-ignore
.gitignore export-ignore
composer.json export-ignore
composer.lock export-ignore
package-lock.json export-ignore
package.json export-ignore
phpstan.neon export-ignore

```

:::

## 패키지 버전 충돌 해결하기 <Badge type="danger" text="🚧 초안 작성중" />

모듈에서 Composer로 패키지를 설치할 때 라이믹스에서 사용 중인 패키지와 충돌할 수 있다.
컴포저의 `replace` 설정을 이용하여 라이믹스에 이미 존재하는 패키지를 제외할 수 있다.

### 중복 패키지 제외하기

```shell
composer show -N
```

`composer show -N` 명령을 사용하면 아래와 같은 목록을 확인할 수 있다.

```shell
bordoni/phpass
composer/ca-bundle
coolsms/php-sdk
# ... 생략 ...
symfony/polyfill-mbstring
symfony/polyfill-php72
true/punycode
```

전체 목록을 복사하여 아래와 같이... 라이믹스에 이미 존재하는 패키지는 제외된다.
단, 버전 호환성 문제가 발생할 수 있다.

```json
{
  "config": {
    "optimize-autoloader": true,
    "platform-check": false,
    "prepend-autoloader": false
  },
  "require": {
    "php": ">=7.2.5"
  } // [!code --]
  }, // [!code ++]
  "replace": { // [!code ++]
    "bordoni/phpass": "*", // [!code ++]
    "composer/ca-bundle": "*", // [!code ++]
    "coolsms/php-sdk": "*", // [!code ++]
    // ... 생략 ...
    "symfony/polyfill-mbstring": "*", // [!code ++]
    "symfony/polyfill-php72": "*", // [!code ++]
    "true/punycode": "*" // [!code ++]
  } // [!code ++]
}
```
