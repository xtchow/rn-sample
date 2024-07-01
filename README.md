sample for a construction company to sell equipment

OBJECTIVES
  - create a modal which displays cart contents and leads to a checkout page
  COMPLETED
    - replicate *rn-course*'s half-baked "Search for an application" feature here using chatgpt's dummy data

HELPFUL LINKS
  - https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
  - https://css-tricks.com/wp-content/uploads/2022/02/css-flexbox-poster.png
  - https://www.learnui.design/blog/mobile-desktop-website-font-size-guidelines.html


this began with [`npx create-expo-app --template`](https://reactnative.dev/docs/typescript#getting-started-with-typescript), chose "Blank (TypeScript)", then named *rn-sample*.
  - then to push this existing repo
    ```
    git remote add origin git@github.com:xtchow/rn-sample.git
    git branch -M main
    git push -u origin main
    ```

regarding Prettier and ESLint with heavy influence copy from aquaman:
  - ```
    npm install --save-dev prettier eslint eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks
    ```
  - created `.prettierrc.json`
  - created `.eslintrc.json`