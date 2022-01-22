<script setup>
const user = useCookie('user')
const isLogin = useCookie('isLogin')
isLogin.value = isLogin.value || false
let userInfo = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
      'https://media.inyaa.cn/none.png',
}
if (user && user.value) {
  userInfo = user.value
}

const {toOpen} = useLoginDialog()
const data = useState("menuData", () => []);
const userNavigation = isLogin.value ? [
  {name: '账号管理', href: '#'},
  {name: '账号设置', href: '#'},
  {name: '退出登陆', href: 'logout'},
] : [{name: '登陆', href: 'login'}]

function toLogin() {
  console.log('开始登陆')
  toOpen()
}

function toLogout() {
  console.log('开始退出')
  isLogin.value = false
  user.value = null
  window.location.reload()
}

function hideMenu() {
}

onMounted(async () => {
  document.addEventListener("scroll", hideMenu);
});

const showLogin = useState('showLogin', () => false)
const showModal = () => {
  showLogin.value = true;
};

const handleOk = () => {
  showLogin.value = false;
};
</script>
<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <InyaaDialog/>
  <a-affix :offset-top="top">
    <a-menu v-model:selectedKeys="current" mode="horizontal" class="w-full float-right">
      <a-menu-item :key="menu.id" v-for="menu in data">
        <a :href="menu.path">{{ menu.name }}</a>
      </a-menu-item>
      <a-menu-item>
        <button class="i-carbon-user-avatar h-8 w-8 py-3" @click="showModal"/>
      </a-menu-item>
    </a-menu>
  </a-affix>
  <div>
    <a-modal v-model:visible="showLogin" title="登陆" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>
