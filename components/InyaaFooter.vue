<script setup>
let page = 0
const { data } = await useFetch('/config/findAll', {
  baseURL: 'https://www.inyaa.cn/inyaa-gateway/inyaa-admin',
  method: 'GET',
  params: {
    type: 0
  }
})
</script>

<template>
  <div class="pt-4 text-center">
    <footer class="text-white">
      <p><a href="http://www.beian.miit.gov.cn" target="_blank">{{data.data.WEB_ICP}}</a></p>
      <p>{{data.data.WEB_NAME}} ©2021 Created by {{data.data.WEB_ADMIN_NAME}}</p>
      <p>本站由 <a href="https://www.upyun.com/?utm_source=lianmeng&amp;utm_medium=referral">
        <img class="inline" src="https://media.inyaa.cn/upai.png!brand"></a> 提供CDN加速/云存储服务
      </p>
    </footer>
  </div>
</template>


