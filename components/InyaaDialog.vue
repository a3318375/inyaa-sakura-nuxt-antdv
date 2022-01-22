<script setup>
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/outline'
const { open, toClose } = useLoginDialog()
const oldUrl = useCookie('oldUrl')
const user = useCookie('user')
const isLogin = useCookie('isLogin')
isLogin.value = isLogin.value || false

function qqLogin() {
  oldUrl.value = window.location.href
  window.location.href = 'https://api.inyaa.cn/inyaa-web/oauth2/authorization/qq'
}
function githubLogin() {
  oldUrl.value = window.location.href
  window.location.href = 'https://api.inyaa.cn/inyaa-web/oauth2/authorization/github'
}
console.log(1, oldUrl)
console.log(2, user)
console.log(2.5, isLogin)
onMounted(async () => {
  if (!isLogin.value) {
    console.log(3, '初始化')
    if (oldUrl && oldUrl.value) {
      console.log(4, '存在未跳转的链接')
      if (!user || !user.value) {
        const data = await $fetch('/user', {
          baseURL: 'https://api.inyaa.cn/inyaa-web',
          credentials: "include",
          method: 'GET'
        })
        if (data) {
          console.log(4.5, data)
          user.value = {
            id: data.data.id,
            name: data.data.otherNickname,
            email: '',
            imageUrl: data.data.avatar
          }
        }
      } else {
        console.log(6, '用户存在')
      }
      console.log('oldUrl', oldUrl)
      const jumpUrl = oldUrl.value
      console.log(7, '新链接', jumpUrl)
      oldUrl.value = null
      console.log(8, '旧链接', oldUrl)
      isLogin.value = true
      window.location.href = jumpUrl
    }
  }
});
</script>

<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div>
              <div class="mt-3 text-center sm:mt-5">
                <div class="mt-2">
                  <div class="min-h-full flex flex-col justify-center sm:px-6 lg:px-8">
                    <div class="sm:mx-auto sm:w-full sm:max-w-md">
                      <h2 class="text-center text-3xl font-extrabold text-gray-900">
                        登陆
                      </h2>
                    </div>

                    <div class="sm:mx-auto sm:w-full sm:max-w-md">
                      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form class="space-y-6" action="#" method="POST">
                          <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">
                              账号
                            </label>
                            <div class="mt-1">
                              <input id="email" name="email" type="email" autocomplete="email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                          </div>

                          <div>
                            <label for="password" class="block text-sm font-medium text-gray-700">
                              密码
                            </label>
                            <div class="mt-1">
                              <input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                          </div>

                          <div class="flex items-center justify-between">
                            <div class="flex items-center">
                              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                                记住我
                              </label>
                            </div>

                            <div class="text-sm">
                              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                                忘记密码
                              </a>
                            </div>
                          </div>

                          <div>
                            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              登陆
                            </button>
                          </div>
                        </form>

                        <div class="mt-6">
                          <div class="relative">
                            <div class="absolute inset-0 flex items-center">
                              <div class="w-full border-t border-gray-300" />
                            </div>
                            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">
                第三方登陆
              </span>
                            </div>
                          </div>

                          <div class="mt-6 grid grid-cols-3 gap-3">
                            <div>
                              <a href="#" title="使用 QQ 帐号登录" @click="qqLogin" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <span class="sr-only">Sign in with QQ</span>
                                <img src="https://media.inyaa.cn/QQ.png" class="w-5 h-5" />
                              </a>
                            </div>

                            <div>
                              <a href="#" title="使用 Twitter 帐号登录" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <span class="sr-only">Sign in with Twitter</span>
                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                              </a>
                            </div>

                            <div>
                              <a href="#" title="使用 GitHub 帐号登录" @click="githubLogin" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <span class="sr-only">Sign in with GitHub</span>
                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>


