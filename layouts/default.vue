<script setup>
const { show, updateShow, updateHide  } = useScroll();
function handleScroll() {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const myTop = document.body.scrollHeight;
  if (scrollTop > myTop / 10) {
    updateHide()
  } else {
    updateShow()
  }
}

onMounted(async () => {
  document.addEventListener("scroll", handleScroll);
});
//filter blur-sm
</script>

<template>
  <img  @scroll="handleScroll" :class="[show ? 'fixed w-full h-full object-cover -z-999' : 'fixed filter blur-sm w-full h-full object-cover -z-999']" src="https://media.inyaa.cn/cover/7037ade43b1e484eac903a111b7ea709.jpg" >
  <a-layout class="layout">
    <a-layout-header class="px-0">
      <InyaaMenu />
    </a-layout-header>
    <a-layout-content>
      <slot />
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      <InyaaFooter />
    </a-layout-footer>
  </a-layout>
</template>
