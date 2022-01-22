import { useQuery } from 'h3'
export default async (req, res) => {
    const params = await useQuery(req);
    const data = await $fetch('/blog/web/list', {
        baseURL: 'https://www.inyaa.cn/inyaa-gateway/inyaa-admin',
        method: 'GET',
        params: params
    }).then(res => {
        if (!res) {
            return {};
        }
        if (res.code && res.code === 200) {
            return res.data
        } else {
            return {};
        }
    })
    return data
}
