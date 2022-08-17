<template>
  <router-view/>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
// flex布局
.flex {
  display: flex;
  align-items: center;
}

.flex-flaot {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.page_content {
  padding: 20px;
  width: 100%;
  background: #000;
}
</style>
