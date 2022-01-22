export function useScroll() {
    const show = useState('scroll', () => true)

    function updateShow() {
        show.value = true
    }
    function updateHide() {
        show.value = false
    }

    return {
        show,
        updateShow,
        updateHide,
    }
}
