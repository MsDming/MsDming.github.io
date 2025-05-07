
// (function () {
//     // 获取容器
//     const containerOut = document.getElementById('site-subtitle')
//     containerOut.innerHTML += '<span class="typed-cursor typed-cursor--blink" aria-hidden="true">_</span>'
//     const container = document.getElementById('subtitle')
//     // 把需要展示的全部文字进行切割
//     const data = (GLOBAL_CONFIG_SITE.subtitle).split('')
//     // 需要追加到容器中的文字下标
//     let index = 0
//     function writing() {
//       if (index < data.length) {
//         // 追加文字
//         container.innerHTML += data[index ++]
//         let timer = setTimeout(writing, 200)
//         console.log(timer) // 这里会依次打印 1 2 3 4 5 6 7 8 9 10
//       }
//     }
//     writing()
//   })();