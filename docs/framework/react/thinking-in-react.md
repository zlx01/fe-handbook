# Thinking in React

[Thinking in React – React](https://react.dev/learn/thinking-in-react)

## Step 0: Start with the mockup

先准备好mock数据和设计稿（交互/视觉）

## Step 1: Break the UI into a component hierarchy

拆分组件层级结构

划分依据：

- 单一职责
- 设计稿元素的层次、交互
- 复用程度
- 页面 or 布局 or 组件
- ~~有无状态~~

## Step 2: Build a static version in React

先做视觉还原，不care数据流和交互

## Step 3: Find the minimal but complete representation of UI state

确定应用的状态

> Think of state as the minimal set of changing data that your app needs to remember.
>

注意区分props和state，可以计算的数据也不是state

## Step 4: Identify where your state should live

> React uses one-way data flow, passing data down the component hierarchy from parent to child component.
>

确定状态应该归属哪个组件。通常是确定组件依赖的state，找到共同的祖先组件，放在祖先组件中。

## Step 5: Add inverse data flow

通常是父组件传进来的set方法设置父组件的state

## 以tic-tac-toe为例

### 0.Start with the mockup

初始数据为空，无须mockUI；比较简单：一个棋盘九个格子，○或×

### 1.Break the UI into a component hierarchy

- 游戏zujian
- 棋盘组件
- 格子组件

### 2.Build a static version in React

- flex布局或grid布局都可以搞定

### 3.Find the minimal but complete representation of UI state

- 棋盘九个格子的状态，可以用一个数组表示
- 历史记录，可以用一个二维数组表示
- 下一个落子是哪一方。可以简单用一个布尔变量表示，但考虑到可以回退到历史记录的某一步，可以用一个状态表示当前是第几步，用模2取余来决定哪一方下一个落子。
- 当前是第几步

### 4.Identify where your state should live

- 格子组件：每个单元格的数据来自父组件
- 棋盘组件：数据来自游戏组件，监听子组件的点击事件，并处理“谁赢”的逻辑
- 游戏组件：所有状态数据

### 5.Add inverse data flow

- 点击空格事件 → 判断输赢 → 更新棋盘数据 → 更新历史数据
- 回退历史点击事件 → 更新棋盘数据
