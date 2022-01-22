<script setup>
import { BookmarkIcon } from '@heroicons/vue/outline'
import { PlusSmIcon } from '@heroicons/vue/solid'

let pageNum = 1
const blogList = useState('blogList', () => [])

const nextPage = async() =>{
  pageNum++
  const { content } = await $fetch('/api/blog/list', {
    method: "GET",
    params: {
      size: 10,
      page: pageNum,
    },
  })
  blogList.value = [...blogList.value, ...content]
}

const { data } = await useAsyncData('blogList', () => $fetch('/api/blog/list', {
  method: "GET",
  params: {
    size: 10,
  },
}))
blogList.value = data.value.content
</script>

<template>
  <div class="text-center">
    <div class="inline-grid gap-6 px-5 bg-white bg-opacity-80">
      <h1 class="pt-8 pb-2 pl-0"><BookmarkIcon class="float-left h-6 w-6" aria-hidden="true" /> <span class="float-left">Discovery</span></h1>
        <div  v-for="item in blogList" :key="item.id" class="max-w-md mx-auto bg-white rounded-xl hover:shadow-lg overflow-hidden md:max-w-4xl">
          <div class="md:flex">
              <div class="md:flex-shrink-0">
              <img class="md:h-64 w-full object-cover md:w-112" :src="item.cover" alt="Man looking at item at a store">
              </div>
              <div class="p-8 md:w-112">
              <a :href="'/article/' + item.id" class="block mt-1 text-lg leading-tight font-medium text-black no-underline">{{item.title}}</a>
              <p class="mt-2 text-gray-500">{{item.summary}}</p>
              </div>
          </div>
        </div>
        <div class="pb-8">
          <div class="relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center">
              <button type="button" @click="nextPage" class="inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span>Next</span>
              </button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
