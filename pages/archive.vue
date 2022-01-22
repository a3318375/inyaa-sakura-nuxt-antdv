<script setup>
const nuxtApp = useNuxtApp();
import { ChatAltIcon, TagIcon, UserCircleIcon } from "@heroicons/vue/solid";
const { data } = await useFetch("/blog/web/archive/list", {
  baseURL: "https://www.inyaa.cn/inyaa-gateway/inyaa-admin",
  method: "GET",
});

useMeta({
  title: '归档',
  link: [
    {rel: 'icon', href: 'https://media.inyaa.cn/favicon.ico'}
  ],
  meta: [
    { name: 'keywords', content: '瑶瑶,梦中小屋,瑶瑶的梦中小屋' },
    { name: 'description', content: '瑶瑶的梦中小屋，一个个人小站.' },
  ],
})
const activity = [
  {
    id: 1,
    type: "comment",
    title: "這個是標題",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
    date: "6d ago",
  },
  {
    id: 4,
    type: "comment",
    title: "這個是標題",
    person: { name: "Jason Meyers", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.",
    date: "2h ago",
  },
];
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
  <div class="py-10 pt-17">
    <header>
      <div
          class="max-w-5xl mx-auto bg-white bg-opacity-80 flex flex-col relative"
          @mouseover="updateTop"
          @mouseleave="updateTopAll"
      >
        <div class="bg-cover bg-center bg-no-repeat md:h-96"></div>
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
          <h1 class="text-3xl text-white">关于</h1>
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
        <div class="bg-white bg-opacity-80">
          <a-timeline mode="alternate">
            <a-timeline-item v-for="item in data.data">{{ item.title }} 发布于 {{ nuxtApp.$dayjs(item.createTime).fromNow() }}</a-timeline-item>
          </a-timeline>
        </div>
      </div>
    </main>
  </div>
</template>
