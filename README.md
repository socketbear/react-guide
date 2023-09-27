# React Guide 

React Guide는 Vuejs 개발자가 React를 배우면서 겪는 경험을 코드로 구성해본 공간입니다.
[reactease](https://github.com/Hacker-C/reactease) 기반으로 분석하면서 실제 프로젝트에 도입할 수준까지 예제를 포함해서 만들어 보는 것을 목적으로 합니다.
처음에는 UnoCSS를 도입한 React를 사용하고 싶어 시작했습니다. 그렇게 하나 둘 프로젝트를 수행하기 위해 필요한 것들을 추가하다 보니 평소에 서비스 구축을 위해 만들었던 프레임워크 수준으로 만드는 것을 목표로 진행하게 되었습니다.
서비스 개발을 할 때에는 실제적으로 필요한 것이 많습니다. React 기반으로 라이브러리 들을 한번 씩 만들어 보면서 적용해 보왔습니다.

## 적용한 라이브러리들 (계속 추가될 예정...)

- ⚡ Vite, pnpm
- 🔥 React
- ⚓ React Router
- 🎨 [Unocss](https://unocss.dev)
- 🏠 [Valtio](https://valtio.pmnd.rs/), Redux와 같은 상태 관리 라이브러리
- 🎈 Iconify for icons（[Icon sets](https://icon-sets.iconify.design))
- 💪 TypeScript
- 🚀 Using [vite-plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc), faster.
- 😋 ESLint with [@antfu/eslint-config]()
- 📁 File path alias (`'~/*'` -> `src/*`)
- 📱 [Blueprint](https://blueprintjs.com/), React 기반 UI toolkit
- [ofetch](https://github.com/unjs/ofetch), fetch를 좀 더 좋게!
- [json-server](https://github.com/typicode/json-server), 빠르고 편한 mock 서버

## 추가 기능들 (계속 추가될 예정)
- [X] Layout: `~/layout`
- [X] Blueprint 추가하고 레이아웃에 적용
  - Dark mode 적용
- [X] SCSS 도입하고 관련 디렉토리 구성 (`~/assets/styles/`)
  - preload: SCSS 변수 파일 vite.config에 적용
- [X] fetch 전용 도구 선정 및 Interceptor 예제
  - ofetch 선정 및 예제 구성, hooks 디렉토리 내 인터셉터 포함된 Wrapper 구성
  - `pnpm mock`로 mock 전용 json-server 실행
- [X] 쓸만한 UI Component Library 도입
  - Blueprint 도입 
- [ ] Food Action 서비스 예제

### About unocss.config.ts

You can use many atomic css features by using the [UnoCSS Packages](https://github.com/unocss/unocss/tree/main/packages)

1. presetAttributify
    ```html
    <h2
      m="x-2 y-1"
      bg="gray-400 hover:gray-200"
      text="2xl primary"
      font="base bold"
    >
      Attributify Mode
    </h2>
    ```

2. presetWind
    Integrated some features of TaildwindCSS and WindiCSS.
    ```html
    <!-- lt-sm means screen less then 640px -->
    <div className='lt-sm:bg-red-200 at-sm:gray-400 sm:bg-blue-200'></div>
    ```

3. transformerVariantGroup
    ```html
    <div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>
    ```

## 설치

- Nodejs 최신 버전을 설치합니다. (v18 이상)
- pnpm을 설치합니다.
- 해당 Repository를 클론 합니다.

```bash
pnpm i
pnpm dev
```

## Usage

### Development

Just run and visit http://localhost:3333
```
pnpm dev
```

### Build

To build the App, run
```
pnpm build
```

### Deploy

You can try [netlify](https://www.netlify.com) or [vercel](https://vercel.com/) or other ways.
