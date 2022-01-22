import {defineNuxtPlugin} from '#app';

export default defineNuxtPlugin(async () => {
    const data = useState("menuData", () => []);

    data.value = await $fetch('/menu/findMenuList', {
        baseURL: 'https://www.inyaa.cn/inyaa-gateway/inyaa-admin',
        params: {
            enable: true
        },
        method: 'GET',
    }).then(r => {
        if (!r) {
            return {};
        }
        if (r.code && r.code === 200) {
            return r.data
        } else {
            return {};
        }
    })
})
