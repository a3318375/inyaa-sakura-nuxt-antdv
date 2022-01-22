<script setup>
import {MenuIcon} from '@heroicons/vue/outline'
import InyaaNotifications from "../../components/InyaaNotifications";

const nuxtApp = useNuxtApp();
const route = useRoute();
const {toOpen} = useDialog()
const {data} = await useAsyncData('blogInfo', () => $fetch('/blog/web/info', {
  parseResponse: JSON.parse,
  baseURL: 'https://www.inyaa.cn/inyaa-gateway/inyaa-admin',
  method: "GET",
  params: {
    id: route.params.id,
  },
}).then(r => {
  if (!r) {
    return {};
  }
  if (r.code && r.code === 200) {
    return r.data
  } else {
    return {};
  }
}))

useMeta({
  title: data.value? data.value.title : '瑶瑶的梦中小屋',
  link: [
    {rel: 'icon', href: 'https://media.inyaa.cn/favicon.ico'}
  ],
  meta: [
    { name: 'keywords', content: '瑶瑶,梦中小屋,瑶瑶的梦中小屋' },
    { name: 'description', content: '瑶瑶的梦中小屋，一个个人小站.' },
  ],
})
console.log(data.value.title)
onMounted(async () => {
  window.toCopy = toCopy
})

function toCopy(e) {
  navigator.clipboard.writeText(e.firstElementChild.innerHTML);
  toOpen()
}
function updateTop(){
  document.getElementById('divHover').style.top = '75%'
  document.getElementById('divHover').style.transition = '0.5s'
}

function updateTopAll(){
  document.getElementById('divHover').style.removeProperty('top')
  document.getElementById('divHover').style.transition = '0.5s'
}
</script>

<template>
  <InyaaNotifications/>
  <div class="py-10 pt-17">
    <header>
      <div
          class="max-w-5xl mx-auto bg-white bg-opacity-80 flex flex-col relative"
          @mouseover="updateTop"
          @mouseleave="updateTopAll"
      >
        <div
            class="bg-cover bg-center bg-no-repeat md:h-96"
            :style="'background-image: url(' + data.cover + ')'"
        ></div>
        <div
            id="divHover"
            class="
            inset-0
            mx-auto
            absolute
            flex flex-col
            text-center
            justify-center
            backdrop-filter backdrop-blur
            transition
            duration-500
            ease-in-out
            transform
          "
        >
          <h1 class="text-3xl text-white">{{ data.title }}</h1>
          <p class="text-white">
            <span>
              <img
                  class="w-9 h-9 align-middle float-none inline rounded-full"
                  src="https://media.inyaa.cn/99db72d3abaaef4beece7e9f94b3623.jpg"
              />
            </span>
            <span> bymoye </span>
            <span>·</span>2021-02-28 <span>·</span>684 次阅读
          </p>
        </div>
      </div>
    </header>
    <main>
      <div class="max-w-5xl mx-auto">
        <!-- Replace with your content -->
        <div class="px-4 py-8 sm:px-0 bg-white bg-opacity-80">
          <div class="px-6 pt-4">
            <div class="entry-content" v-html="nuxtApp.$markit.render(data.context)" >
            </div>
          </div>
          <InyaaComment/>
        </div>
        <!-- /End replace -->
        <div id="TOC-btn">
          <div class="position-relative">
            <div class="p-2 text-white">
              <MenuIcon class="w-4 h-4 inline stroke-current"/>
              目录
            </div>
            <div class="TOC-ctx" v-html="nuxtApp.$markit.topHtml">
            </div>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>
