export function useLoginDialog() {
  const open = useState('loginOpen', () => false)

  function toOpen() {
    open.value = true
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
