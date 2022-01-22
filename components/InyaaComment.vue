<script setup>
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue'
import {
  ChatAltIcon,
  CodeIcon,
  DotsVerticalIcon,
  EyeIcon,
  FlagIcon,
  PlusSmIcon,
  SearchIcon,
  ShareIcon,
  StarIcon,
  ThumbUpIcon,
} from '@heroicons/vue/solid'
import {BellIcon, MenuIcon, XIcon} from '@heroicons/vue/outline'
const nuxtApp = useNuxtApp();
const user = useCookie('user')
const route = useRoute();
const commonts = await $fetch('/blog/comment/list', {
  baseURL: 'https://api.inyaa.cn/inyaa-web',
  credentials: "include",
  method: 'GET',
  params: {
    blogId: route.params.id,
  },
})
const commontList = [...commonts.data.content]


const commentText = useState('commentText', () => '')
const subComment = async() => {
  if (!user || !user.value) {
    alert('请先登陆')
  }
  await $fetch('/blog/comment/save', {
    baseURL: 'https://api.inyaa.cn/inyaa-web',
    credentials: "include",
    method: 'POST',
    body: {
      userId: user.value.id,
      toUserId: 0,
      content: commentText.value,
      blogId: route.params.id,
    },
  })
  console.log(commentText)
  commentText.value = ''
  window.location.reload();
}
</script>
<template>
  <div class="pt-8 px-6">
    <a-list
        class="comment-list"
        :header="`${commontList.length} 个评论`"
        item-layout="horizontal"
        :data-source="commontList"
    >
      <template #renderItem="{ item }">
        <a-list-item>
          <a-comment author="回复1号" avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png">
            <template #actions>
              <span>Reply to</span>
            </template>
            <template #content>
              <p>
                {{ item.content }}
              </p>
            </template>
            <template #datetime>
              <a-tooltip :title="item.createTime">
                <span>{{ nuxtApp.$dayjs(item.createTime).fromNow() }}</span>
              </a-tooltip>
            </template>
            <a-comment v-if="item.childList?.length > 0" v-for="child in item.childList">
              <template #actions>
                <span>Reply to</span>
              </template>
              <template #author>
                <a>{{ child.author }}</a>
              </template>
              <template #avatar>
                <a-avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                />
              </template>
              <template #content>
                <p>{{ child.content }}</p>
              </template>
            </a-comment>
          </a-comment>
        </a-list-item>
      </template>
    </a-list>
    <a-comment>
      <template #avatar>
        <a-avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
        />
      </template>
      <template #content>
        <a-form-item>
          <a-textarea :rows="4" v-model="commentText" />
        </a-form-item>
        <a-form-item>
          <a-button html-type="submit" type="primary" @click="subComment">
            Add Comment
          </a-button>
        </a-form-item>
      </template>
    </a-comment>
  </div>
</template>
