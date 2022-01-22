export function useDialog() {
  const open = useState('open', () => false)

  function toOpen() {
    open.value = true
    setTimeout(() => {
      toClose()
    }, 1000);
  }
  function toClose() {
    open.value = false
  }

  return {
    open,
    toOpen,
    toClose,
  }
}
