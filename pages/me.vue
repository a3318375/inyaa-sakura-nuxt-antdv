<script setup>
useMeta({
  title: '关于我',
  link: [
    {rel: 'icon', href: 'https://media.inyaa.cn/favicon.ico'}
  ],
  meta: [
    { name: 'keywords', content: '瑶瑶,梦中小屋,瑶瑶的梦中小屋' },
    { name: 'description', content: '瑶瑶的梦中小屋，一个个人小站.' },
  ],
})
</script>

<template>
  <div class="py-10 pt-17">
    <header>
      <div
        class="max-w-5xl mx-auto bg-white bg-opacity-80 flex flex-col relative"
      >
        <div
          class="bg-cover bg-center bg-no-repeat md:h-96"
        ></div>
        <div
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
            hover:-translate-y-1 hover:top-3/4
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
        <!-- Replace with your content -->
        <div class="px-4 py-8 sm:px-0 bg-white bg-opacity-80">
          <article
            class="prose prose-xl md:max-w-4xl px-6 pt-4">
            <p>本人为java开发，也算是工作多年</p>
            <p>第一次是用ssm + jsp + bootstrap做的，当时因为服务器很贵，所以很快就放弃了</p>
            <p>后台前端经过多次变化，比如，改用了vue + iview却不会做自适应，之后又改用了nodejs+layui</p>
            <p>前一阵用新号，买了2H8G5M的服务器，一次买了3年。</p>
            <p>前一阵用了wordpress做博客，但是及其不方便</p>
            <p>所以就有了现在的博客，后端采用了spring boot，搭建了一套oauth2，认证服务器、授权服务器和客户端。授权服务器和客户端，也切到了最新的写法。</p>
            <p>当然，目前还没完善,还在后续尝试中。比如服务器配置比较好，尝试了一键k8s，尝试用k8s的配置中心、服务注册、服务发现。</p>
            <p>前端采用了，vue3 + vite2。UI借鉴了大佬的wordpress的Sakura主题，也不断在完善中</p>
            </article>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>
