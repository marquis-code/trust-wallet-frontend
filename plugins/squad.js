if (process.client) {
  /*! For license information please see squad.min.js.LICENSE.txt */
  !(function (t, e) {
    'object' == typeof exports && 'object' == typeof module
      ? (module.exports = e())
      : 'function' == typeof define && define.amd
      ? define([], e)
      : 'object' == typeof exports
      ? (exports['@squad'] = e())
      : (t['@squad'] = e())
  })(window, function () {
    return (function (t) {
      var e = {}
      function i(n) {
        if (e[n]) return e[n].exports
        var r = (e[n] = { i: n, l: !1, exports: {} })
        return t[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports
      }
      return (
        (i.m = t),
        (i.c = e),
        (i.d = function (t, e, n) {
          i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n })
        }),
        (i.r = function (t) {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(t, '__esModule', { value: !0 })
        }),
        (i.t = function (t, e) {
          if ((1 & e && (t = i(t)), 8 & e)) return t
          if (4 & e && 'object' == typeof t && t && t.__esModule) return t
          var n = Object.create(null)
          if (
            (i.r(n),
            Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
            2 & e && 'string' != typeof t)
          )
            for (var r in t)
              i.d(
                n,
                r,
                function (e) {
                  return t[e]
                }.bind(null, r)
              )
          return n
        }),
        (i.n = function (t) {
          var e =
            t && t.__esModule
              ? function () {
                  return t.default
                }
              : function () {
                  return t
                }
          return i.d(e, 'a', e), e
        }),
        (i.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        }),
        (i.p = ''),
        i((i.s = 2))
      )
    })([
      function (t, e, i) {
        'use strict'
        t.exports = () => {
          function t() {
            let t = document.createElement('div'),
              e = document.createElement('div'),
              i = document.createElement('div')
            t.setAttribute('id', 'squad-app-loader'),
              t.classList.add('app-loader'),
              e.classList.add('app-loader__spinner'),
              i.classList.add('app-loader__spinner_text')
            var n = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'svg'
            )
            n.setAttribute('width', '150'),
              n.setAttribute('height', '34'),
              n.setAttribute('fill', 'none'),
              n.setAttribute('viewBox', '0 0 166 34')
            var r = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'path'
            )
            r.setAttribute(
              'd',
              'M29 14.5H19C18.8674 14.5 18.7402 14.5527 18.6464 14.6464C18.5527 14.7402 18.5 14.8674 18.5 15V22C18.5 22.1326 18.5527 22.2598 18.6464 22.3536C18.7402 22.4473 18.8674 22.5 19 22.5H29C29.1326 22.5 29.2598 22.4473 29.3536 22.3536C29.4473 22.2598 29.5 22.1326 29.5 22V15C29.5 14.8674 29.4473 14.7402 29.3536 14.6464C29.2598 14.5527 29.1326 14.5 29 14.5ZM24 19C23.7528 19 23.5111 18.9267 23.3055 18.7893C23.1 18.652 22.9398 18.4568 22.8452 18.2284C22.7505 17.9999 22.7258 17.7486 22.774 17.5061C22.8222 17.2637 22.9413 17.0409 23.1161 16.8661C23.2909 16.6913 23.5137 16.5722 23.7561 16.524C23.9986 16.4758 24.2499 16.5005 24.4784 16.5952C24.7068 16.6898 24.902 16.85 25.0393 17.0555C25.1767 17.2611 25.25 17.5028 25.25 17.75C25.25 18.0815 25.1183 18.3995 24.8839 18.6339C24.6495 18.8683 24.3315 19 24 19Z'
            ),
              (r.style.opacity = '0.2'),
              (r.style.fill = 'white')
            var s = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'path'
            )
            s.setAttribute(
              'd',
              'M24 19C24.6904 19 25.25 18.4404 25.25 17.75C25.25 17.0596 24.6904 16.5 24 16.5C23.3096 16.5 22.75 17.0596 22.75 17.75C22.75 18.4404 23.3096 19 24 19Z'
            ),
              (s.style.stroke = 'white'),
              (s.style.strokeLinecap = 'round'),
              (s.style.strokeLinejoin = 'round')
            var o = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'path'
            )
            o.setAttribute('d', 'M24 19V20.5'),
              (o.style.stroke = 'white'),
              (o.style.strokeLinecap = 'round'),
              (o.style.strokeLinejoin = 'round')
            var a = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'path'
            )
            a.setAttribute(
              'd',
              'M29 14.5H19C18.7239 14.5 18.5 14.7239 18.5 15V22C18.5 22.2761 18.7239 22.5 19 22.5H29C29.2761 22.5 29.5 22.2761 29.5 22V15C29.5 14.7239 29.2761 14.5 29 14.5Z'
            ),
              (a.style.stroke = 'white'),
              (a.style.strokeLinecap = 'round'),
              (a.style.strokeLinejoin = 'round')
            var h = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'path'
            )
            h.setAttribute(
              'd',
              'M21.75 14.5V12.25C21.75 11.6533 21.9871 11.081 22.409 10.659C22.831 10.2371 23.4033 10 24 10C24.5967 10 25.169 10.2371 25.591 10.659C26.0129 11.081 26.25 11.6533 26.25 12.25V14.5'
            ),
              (h.style.stroke = 'white'),
              (h.style.strokeLinecap = 'round'),
              (h.style.strokeLinejoin = 'round')
            var u = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'path'
            )
            u.setAttribute(
              'd',
              'M46.8807 13.3636H47.7805C47.7109 11.8175 46.3736 10.674 44.4794 10.674C42.6001 10.674 41.1534 11.8026 41.1534 13.4432C41.1534 14.7507 42.0781 15.571 43.674 16.0433L44.892 16.4013C46.1548 16.7692 47.0199 17.2415 47.0199 18.2805C47.0199 19.5036 45.9112 20.3239 44.3899 20.3239C43.0178 20.3239 41.9439 19.6626 41.8445 18.4545H40.8899C40.9993 20.0653 42.3118 21.174 44.3899 21.174C46.5973 21.174 47.9197 19.9261 47.9197 18.2955C47.9197 16.6051 46.4482 15.929 45.1555 15.5661L44.0817 15.2578C43.0923 14.9794 42.0533 14.4773 42.0533 13.4034C42.0533 12.3097 43.0327 11.5092 44.4545 11.5092C45.8018 11.5092 46.7663 12.2301 46.8807 13.3636ZM53.0604 21.1591C54.5916 21.1591 55.6207 20.3288 55.9688 19.3693L55.1286 19.0959C54.8352 19.782 54.1442 20.3487 53.0604 20.3487C51.4993 20.3487 50.5099 19.2102 50.4702 17.4453H56.1577V17.0078C56.1577 14.4574 54.5817 13.2592 52.9261 13.2592C50.9474 13.2592 49.5803 14.9148 49.5803 17.2266C49.5803 19.5433 50.9226 21.1591 53.0604 21.1591ZM50.4751 16.6648C50.5696 15.2429 51.5291 14.0646 52.9261 14.0646C54.2933 14.0646 55.2528 15.1932 55.2528 16.6648H50.4751ZM61.0907 21.1591C62.6816 21.1591 63.8002 20.1548 64.0041 18.7727H63.1092C62.9054 19.7472 62.1049 20.3487 61.0907 20.3487C59.5943 20.3487 58.6049 19.0462 58.6049 17.1868C58.6049 15.3374 59.6241 14.0646 61.0907 14.0646C62.1795 14.0646 62.9153 14.7656 63.1042 15.6307H63.9991C63.7903 14.2138 62.6071 13.2592 61.0758 13.2592C59.0772 13.2592 57.715 14.9197 57.715 17.2166C57.715 19.4936 59.0375 21.1591 61.0907 21.1591ZM70.753 18.0817C70.753 19.4837 69.699 20.2393 68.665 20.2393C67.5613 20.2393 66.7857 19.4489 66.7857 18.2557V13.3636H65.9007V18.3104C65.9007 20.12 66.9448 21.0994 68.4114 21.0994C69.53 21.0994 70.3255 20.5178 70.6834 19.7322H70.753V21H71.638V13.3636H70.753V18.0817ZM73.9808 21H74.8658V16.0682C74.8658 14.9347 75.7358 14.1143 76.929 14.1143C77.1626 14.1143 77.3814 14.1541 77.4609 14.1641V13.2642C77.3416 13.2592 77.1378 13.2493 76.9936 13.2493C76.0341 13.2493 75.2138 13.7663 74.9055 14.5369H74.8409V13.3636H73.9808V21ZM81.826 21.1591C83.3572 21.1591 84.3864 20.3288 84.7344 19.3693L83.8942 19.0959C83.6009 19.782 82.9098 20.3487 81.826 20.3487C80.2649 20.3487 79.2756 19.2102 79.2358 17.4453H84.9233V17.0078C84.9233 14.4574 83.3473 13.2592 81.6918 13.2592C79.7131 13.2592 78.3459 14.9148 78.3459 17.2266C78.3459 19.5433 79.6882 21.1591 81.826 21.1591ZM79.2408 16.6648C79.3352 15.2429 80.2947 14.0646 81.6918 14.0646C83.0589 14.0646 84.0185 15.1932 84.0185 16.6648H79.2408ZM89.6227 21.1591C91.0098 21.1591 91.6561 20.2791 91.9693 19.5831H92.0737V21H92.9387V10.8182H92.0488V14.8203H91.9693C91.666 14.1342 91.0346 13.2592 89.6376 13.2592C87.7534 13.2592 86.4806 14.8501 86.4806 17.2017C86.4806 19.5732 87.7484 21.1591 89.6227 21.1591ZM89.7271 20.3487C88.2058 20.3487 87.3706 18.9666 87.3706 17.1868C87.3706 15.4268 88.1958 14.0646 89.7271 14.0646C91.2186 14.0646 92.0637 15.3572 92.0637 17.1868C92.0637 19.0312 91.2086 20.3487 89.7271 20.3487ZM99.5808 21H100.441V19.5831H100.55C100.858 20.2841 101.505 21.1591 102.897 21.1591C104.771 21.1591 106.039 19.5732 106.039 17.2017C106.039 14.8501 104.766 13.2592 102.882 13.2592C101.485 13.2592 100.854 14.1342 100.55 14.8203H100.471V10.8182H99.5808V21ZM100.456 17.1868C100.456 15.3572 101.296 14.0646 102.787 14.0646C104.319 14.0646 105.149 15.4268 105.149 17.1868C105.149 18.9666 104.309 20.3487 102.787 20.3487C101.306 20.3487 100.456 19.0312 100.456 17.1868ZM108.326 23.8636C109.28 23.8636 109.981 23.3168 110.389 22.2081L113.626 13.3786L112.661 13.3636L110.394 19.8317H110.324L108.057 13.3636H107.098L109.907 21.0746L109.628 21.8501C109.206 23.0036 108.609 23.2074 107.709 22.924L107.471 23.7045C107.65 23.7891 107.978 23.8636 108.326 23.8636ZM118.728 18.928C118.971 19.292 119.279 19.5627 119.652 19.74C120.035 19.908 120.427 19.992 120.828 19.992C121.052 19.992 121.281 19.9593 121.514 19.894C121.747 19.8193 121.957 19.712 122.144 19.572C122.34 19.432 122.499 19.2593 122.62 19.054C122.741 18.8487 122.802 18.6107 122.802 18.34C122.802 17.9573 122.681 17.668 122.438 17.472C122.195 17.2667 121.892 17.0987 121.528 16.968C121.173 16.828 120.781 16.6973 120.352 16.576C119.932 16.4453 119.54 16.268 119.176 16.044C118.821 15.82 118.523 15.5213 118.28 15.148C118.037 14.7653 117.916 14.252 117.916 13.608C117.916 13.3187 117.977 13.0107 118.098 12.684C118.229 12.3573 118.429 12.0587 118.7 11.788C118.971 11.5173 119.316 11.2933 119.736 11.116C120.165 10.9293 120.679 10.836 121.276 10.836C121.817 10.836 122.335 10.9107 122.83 11.06C123.325 11.2093 123.759 11.5127 124.132 11.97L123.04 12.964C122.872 12.7027 122.634 12.4927 122.326 12.334C122.018 12.1753 121.668 12.096 121.276 12.096C120.903 12.096 120.59 12.1473 120.338 12.25C120.095 12.3433 119.899 12.4693 119.75 12.628C119.601 12.7773 119.493 12.9407 119.428 13.118C119.372 13.2953 119.344 13.4587 119.344 13.608C119.344 14.028 119.465 14.35 119.708 14.574C119.951 14.798 120.249 14.98 120.604 15.12C120.968 15.26 121.36 15.386 121.78 15.498C122.209 15.61 122.601 15.7687 122.956 15.974C123.32 16.17 123.623 16.4407 123.866 16.786C124.109 17.122 124.23 17.5887 124.23 18.186C124.23 18.662 124.137 19.0913 123.95 19.474C123.773 19.8567 123.53 20.1787 123.222 20.44C122.914 20.7013 122.55 20.902 122.13 21.042C121.71 21.182 121.262 21.252 120.786 21.252C120.151 21.252 119.549 21.14 118.98 20.916C118.411 20.692 117.958 20.3467 117.622 19.88L118.728 18.928ZM132.541 24.192H131.281V20.048H131.253C131.029 20.3933 130.707 20.6687 130.287 20.874C129.867 21.07 129.419 21.168 128.943 21.168C128.43 21.168 127.963 21.0793 127.543 20.902C127.133 20.7247 126.778 20.482 126.479 20.174C126.19 19.8567 125.966 19.488 125.807 19.068C125.649 18.6387 125.569 18.1767 125.569 17.682C125.569 17.1967 125.649 16.744 125.807 16.324C125.966 15.8947 126.19 15.5213 126.479 15.204C126.778 14.8867 127.133 14.6393 127.543 14.462C127.963 14.2847 128.43 14.196 128.943 14.196C129.391 14.196 129.825 14.294 130.245 14.49C130.675 14.686 131.011 14.9613 131.253 15.316H131.281V14.364H132.541V24.192ZM129.097 15.372C128.761 15.372 128.458 15.4327 128.187 15.554C127.917 15.666 127.688 15.8247 127.501 16.03C127.315 16.226 127.17 16.4687 127.067 16.758C126.965 17.038 126.913 17.346 126.913 17.682C126.913 18.018 126.965 18.3307 127.067 18.62C127.17 18.9 127.315 19.1427 127.501 19.348C127.688 19.544 127.917 19.7027 128.187 19.824C128.458 19.936 128.761 19.992 129.097 19.992C129.433 19.992 129.737 19.936 130.007 19.824C130.278 19.7027 130.507 19.544 130.693 19.348C130.88 19.1427 131.025 18.9 131.127 18.62C131.23 18.3307 131.281 18.018 131.281 17.682C131.281 17.346 131.23 17.038 131.127 16.758C131.025 16.4687 130.88 16.226 130.693 16.03C130.507 15.8247 130.278 15.666 130.007 15.554C129.737 15.4327 129.433 15.372 129.097 15.372ZM140.33 21H139.07V19.978H139.042C138.883 20.3327 138.608 20.622 138.216 20.846C137.824 21.0607 137.371 21.168 136.858 21.168C136.531 21.168 136.223 21.1167 135.934 21.014C135.645 20.9207 135.388 20.7713 135.164 20.566C134.949 20.3607 134.777 20.0993 134.646 19.782C134.515 19.4553 134.45 19.0727 134.45 18.634V14.364H135.71V18.284C135.71 18.592 135.752 18.858 135.836 19.082C135.92 19.2967 136.032 19.474 136.172 19.614C136.312 19.7447 136.471 19.8427 136.648 19.908C136.835 19.964 137.026 19.992 137.222 19.992C137.483 19.992 137.726 19.95 137.95 19.866C138.174 19.782 138.37 19.6513 138.538 19.474C138.706 19.2873 138.837 19.054 138.93 18.774C139.023 18.494 139.07 18.1627 139.07 17.78V14.364H140.33V21ZM142.257 15.176C142.612 14.8493 143.023 14.6067 143.489 14.448C143.956 14.28 144.423 14.196 144.889 14.196C145.375 14.196 145.79 14.2567 146.135 14.378C146.49 14.4993 146.779 14.6627 147.003 14.868C147.227 15.0733 147.391 15.3113 147.493 15.582C147.605 15.8433 147.661 16.1187 147.661 16.408V19.796C147.661 20.0293 147.666 20.244 147.675 20.44C147.685 20.636 147.699 20.8227 147.717 21H146.597C146.569 20.664 146.555 20.328 146.555 19.992H146.527C146.247 20.4213 145.916 20.7247 145.533 20.902C145.151 21.0793 144.707 21.168 144.203 21.168C143.895 21.168 143.601 21.126 143.321 21.042C143.041 20.958 142.794 20.832 142.579 20.664C142.374 20.496 142.211 20.2907 142.089 20.048C141.968 19.796 141.907 19.5067 141.907 19.18C141.907 18.7507 142.001 18.3913 142.187 18.102C142.383 17.8127 142.645 17.5793 142.971 17.402C143.307 17.2153 143.695 17.0847 144.133 17.01C144.581 16.926 145.057 16.884 145.561 16.884H146.485V16.604C146.485 16.436 146.453 16.268 146.387 16.1C146.322 15.932 146.224 15.7827 146.093 15.652C145.963 15.512 145.799 15.4047 145.603 15.33C145.407 15.246 145.174 15.204 144.903 15.204C144.661 15.204 144.446 15.2273 144.259 15.274C144.082 15.3207 143.919 15.3813 143.769 15.456C143.62 15.5213 143.485 15.6007 143.363 15.694C143.242 15.7873 143.125 15.876 143.013 15.96L142.257 15.176ZM145.813 17.808C145.515 17.808 145.207 17.8267 144.889 17.864C144.581 17.892 144.297 17.9527 144.035 18.046C143.783 18.1393 143.573 18.27 143.405 18.438C143.247 18.606 143.167 18.8207 143.167 19.082C143.167 19.4647 143.293 19.74 143.545 19.908C143.807 20.076 144.157 20.16 144.595 20.16C144.941 20.16 145.235 20.104 145.477 19.992C145.72 19.8707 145.916 19.7167 146.065 19.53C146.215 19.3433 146.322 19.138 146.387 18.914C146.453 18.6807 146.485 18.452 146.485 18.228V17.808H145.813ZM156.139 21H154.879V20.048H154.851C154.608 20.4027 154.272 20.678 153.843 20.874C153.423 21.07 152.989 21.168 152.541 21.168C152.028 21.168 151.561 21.0793 151.141 20.902C150.73 20.7247 150.376 20.4773 150.077 20.16C149.788 19.8427 149.564 19.474 149.405 19.054C149.246 18.634 149.167 18.1767 149.167 17.682C149.167 17.1873 149.246 16.73 149.405 16.31C149.564 15.8807 149.788 15.512 150.077 15.204C150.376 14.8867 150.73 14.6393 151.141 14.462C151.561 14.2847 152.028 14.196 152.541 14.196C153.017 14.196 153.465 14.2987 153.885 14.504C154.305 14.7 154.627 14.9707 154.851 15.316H154.879V10.416H156.139V21ZM152.695 19.992C153.031 19.992 153.334 19.936 153.605 19.824C153.876 19.7027 154.104 19.544 154.291 19.348C154.478 19.1427 154.622 18.9 154.725 18.62C154.828 18.3307 154.879 18.018 154.879 17.682C154.879 17.346 154.828 17.038 154.725 16.758C154.622 16.4687 154.478 16.226 154.291 16.03C154.104 15.8247 153.876 15.666 153.605 15.554C153.334 15.4327 153.031 15.372 152.695 15.372C152.359 15.372 152.056 15.4327 151.785 15.554C151.514 15.666 151.286 15.8247 151.099 16.03C150.912 16.226 150.768 16.4687 150.665 16.758C150.562 17.038 150.511 17.346 150.511 17.682C150.511 18.018 150.562 18.3307 150.665 18.62C150.768 18.9 150.912 19.1427 151.099 19.348C151.286 19.544 151.514 19.7027 151.785 19.824C152.056 19.936 152.359 19.992 152.695 19.992Z'
            ),
              (u.style.fill = 'white')
            var c = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'path'
            )
            c.setAttribute(
              'd',
              'M7.64691 11.864C52.9336 2.22334 153.779 -7.48816 164.318 13.474C177.493 39.6767 -4.77347 37.664 1.14094 18.3668C6.98258 -0.692976 89.3892 6.55268 112.444 10.0133'
            ),
              (c.style.stroke = 'white'),
              (c.style.strokeWidth = '0.16183'),
              n.appendChild(r),
              n.appendChild(s),
              n.appendChild(o),
              n.appendChild(a),
              n.appendChild(h),
              n.appendChild(u),
              n.appendChild(c),
              i.appendChild(n)
            for (let t = 0; t < 12; t++) {
              let t = document.createElement('div')
              e.appendChild(t)
            }
            return t.appendChild(e), t
          }
          return {
            openWidget: function () {
              var t = document.getElementById('squad--widget-div'),
                e =
                  (document.getElementById('squad-app-loader'),
                  document.getElementById('squad--frame-id'))
              ;(t.style.visibility = 'visible'),
                (t.style.display = 'flex'),
                setTimeout(() => {
                  !(function () {
                    var t = document.getElementById('squad--widget-div'),
                      e = document.getElementById('squad--frame-id')
                    ;(t.style.display = 'flex'),
                      (e.style.display = 'block'),
                      (t.style.visibility = 'visible'),
                      (e.style.visibility = 'visible')
                  })(),
                    e.focus({ preventScroll: !1 }),
                    t.focus({ preventScroll: !1 })
                }, 2e3)
            },
            closeWidget: function () {
              var t, e
              ;(t = document.getElementById('squad--widget-div')),
                (e = document.getElementById('squad--frame-id')),
                (t.style.display = 'none'),
                (e.style.display = 'none'),
                (t.style.visibility = 'hidden'),
                (e.style.visibility = 'hidden')
            },
            createLoader: t,
            addStyle: function () {
              var t = document.createElement('style')
              ;(t.type = 'text/css'),
                (t.innerText = s),
                document.head.appendChild(t)
            },
            init: function (e) {
              document.getElementById('squad--widget-div') &&
                document.getElementById('squad--frame-id') &&
                document.getElementById('squad--widget-div').remove()
              const { key: i, onload: s, qs: o } = e,
                a = { ...o, key: i }
              var h = new URL('https://popup.squadco.com')
              const u = document.createElement('div')
              u.setAttribute('id', 'squad--widget-div'),
                u.setAttribute('style', n),
                document.body.insertBefore(u, document.body.childNodes[0])
              const c = document.createElement('IFRAME')
              c.setAttribute('src', '' + h.href),
                c.setAttribute('style', r),
                c.setAttribute('id', 'squad--frame-id'),
                c.setAttribute('allowfullscreen', 'true'),
                c.setAttribute('frameborder', 0),
                c.setAttribute(
                  'sandbox',
                  'allow-same-origin allow-scripts allow-forms allow-popups allow-modals allow-popups-to-escape-sandbox'
                ),
                (c.onload = function (t) {
                  var e = document.getElementById('squad-app-loader')
                  'visible' === c.style.visibility &&
                    (e.style.display = 'none'),
                    t.target.contentWindow.postMessage(
                      JSON.stringify(a),
                      'https://popup.squadco.com'
                    ),
                    s()
                })
              var l = t()
              document.getElementById('squad--widget-div').appendChild(l),
                document.getElementById('squad--widget-div').appendChild(c)
            },
          }
        }
        const n =
            'position:fixed;overflow: hidden;display: none;justify-content: center;align-items: center;z-index: 999999999;height: 100%;width: 100%;color: transparent;background: rgba(0, 0, 0, 0.6);visibility:hidden;margin: 0;top:0;right:0;bottom:0;left:0;',
          r =
            'position: fixed;display: none;overflow: hidden;z-index: 999999999;width: 100%;height: 100%;transition: opacity 0.3s ease 0s;visibility:hidden;margin: 0;top:0;right:0;bottom:0;left:0;',
          s =
            '.app-loader {\n  text-align: center;\n  color: white;\n  margin-right: -30px;\n  width: 100%;\n  position: fixed;\n}\n\n@-webkit-keyframes app-loader__spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.app-loader__spinner_text{\nmargin: 40px auto;\n}\n\n.app-loader__spinner {\n  position: relative;\n  display: inline-block;\n  width: fit-content;\n}\n\n.app-loader__spinner div {\n  position: absolute;\n  -webkit-animation: app-loader__spinner linear 1s infinite;\n  animation: app-loader__spinner linear 1s infinite;\n  background: white;\n  width: 10px;\n  height: 30px;\n  border-radius: 40%;\n  -webkit-transform-origin: 5px 65px;\n  transform-origin: 5px 65px;\n}\n\n.app-loader__spinner div:nth-child(1) {\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-animation-delay: -0.916666666666667s;\n  animation-delay: -0.916666666666667s;\n}\n\n.app-loader__spinner div:nth-child(2) {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg);\n  -webkit-animation-delay: -0.833333333333333s;\n  animation-delay: -0.833333333333333s;\n}\n\n.app-loader__spinner div:nth-child(3) {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg);\n  -webkit-animation-delay: -0.75s;\n  animation-delay: -0.75s;\n}\n\n.app-loader__spinner div:nth-child(4) {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  -webkit-animation-delay: -0.666666666666667s;\n  animation-delay: -0.666666666666667s;\n}\n\n.app-loader__spinner div:nth-child(5) {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg);\n  -webkit-animation-delay: -0.583333333333333s;\n  animation-delay: -0.583333333333333s;\n}\n\n.app-loader__spinner div:nth-child(6) {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg);\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n\n.app-loader__spinner div:nth-child(7) {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n  -webkit-animation-delay: -0.416666666666667s;\n  animation-delay: -0.416666666666667s;\n}\n\n.app-loader__spinner div:nth-child(8) {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg);\n  -webkit-animation-delay: -0.333333333333333s;\n  animation-delay: -0.333333333333333s;\n}\n\n.app-loader__spinner div:nth-child(9) {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg);\n  -webkit-animation-delay: -0.25s;\n  animation-delay: -0.25s;\n}\n\n.app-loader__spinner div:nth-child(10) {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n  -webkit-animation-delay: -0.166666666666667s;\n  animation-delay: -0.166666666666667s;\n}\n\n.app-loader__spinner div:nth-child(11) {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg);\n  -webkit-animation-delay: -0.083333333333333s;\n  animation-delay: -0.083333333333333s;\n}\n\n.app-loader__spinner div:nth-child(12) {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg);\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n\n.app-loader__spinner {\n  -webkit-transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);\n  transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);\n}\n'
      },
      function (t) {
        t.exports = JSON.parse('{"version":"3.2.1"}')
      },
      function (t, e, i) {
        i(0), (t.exports = i(3))
      },
      function (t, e, i) {
        'use strict'
        const n = i(0),
          { JSEncrypt: r } = i(4),
          s = () => {},
          o = (t) => {
            throw new Error(t + ' is required')
          }
        function a({
          key: t,
          onClose: e = s,
          onSuccess: i,
          onLoad: r = s,
          ...h
        }) {
          if (!(this instanceof a))
            return new a({ key: t, onClose: e, onSuccess: i, onLoad: r })
          ;(this.key = t || o('PUBLIC_KEY')),
            'paymentChannel' in h &&
              (console.warn(
                'paymentChannel is deprecated. update to payment_channels'
              ),
              (h.payment_channels = h.paymentChannel),
              delete h.paymentChannel),
            (this.config = {
              ...h,
              config_meta: {
                browser_screen_height: window.innerHeight,
                browser_screen_width: window.innerWidth,
              },
            }),
            this.config.amount || o('AMOUNT'),
            this.config.email || o('EMAIL'),
            (a.prototype.onLoad = r),
            (a.prototype.onClose = e),
            (a.prototype.onSuccess = i || o('onSuccess callback')),
            (a.prototype.utils = n())
        }
        let h
        ;(a.prototype.setup = function () {
          a.prototype.utils.addStyle(),
            a.prototype.utils.init({
              key: this.key,
              qs: this.config,
              onload: this.onLoad,
            })
        }),
          (a.prototype.reauthorise = function (t) {
            if (!t)
              throw new Error('Re-auth token is required for reauthorisation')
            a.prototype.utils.addStyle(),
              a.prototype.utils.init({
                key: this.key,
                qs: { ...this.config, reauth_token: t },
                onload: this.onLoad,
              })
          }),
          (a.prototype.handleRedirect = async function (t) {
            const e = t.redirect_link || t.callback_url
            if (e) {
              let i = new URL(e)
              i.searchParams.append('reference', t.transaction_ref),
                (window.location = i.toString())
            } else
              t.payment_link_id && (window.location = 'https://squadco.com')
          }),
          (a.prototype.open = function () {
            ;(h = this.config),
              a.prototype.utils.openWidget(),
              (a.prototype.eventHandler = function (t) {
                switch (t.data.type) {
                  case 'squad.widget.account_linked':
                    this.onSuccess({ ...t.data.data }), a.prototype.close()
                    break
                  case 'squad.widget.closed':
                    a.prototype.close()
                    break
                  case 'squad.widget.sentValues':
                    h.payload = JSON.parse(t.data.data)
                    break
                  case 'payment.successful':
                    a.prototype.onSuccess(t.data.data),
                      setTimeout(
                        () => a.prototype.handleRedirect(t.data.data),
                        5e3
                      )
                    break
                  case 'payment.interswitch':
                    a.prototype.doISWVisaRedirect(t.data.data)
                    break
                  case 'payment.gtpay':
                    a.prototype.doGTPayRedirect(t.data.data)
                    break
                  case 'doPay':
                    a.prototype.doPayment()
                }
              }.bind(this)),
              window.addEventListener('message', this.eventHandler, !1)
          }),
          (a.prototype.close = function () {
            window.removeEventListener('message', this.eventHandler, !1),
              a.prototype.utils.closeWidget(),
              this.onClose()
          }),
          (a.prototype.doGTPayRedirect = async function (t) {
            window.location.replace(t)
          }),
          (a.prototype.doISWVisaRedirect = async function (t) {
            var e = document.createElement('form')
            e.setAttribute('method', 'post'),
              e.setAttribute('target', '_blank'),
              e.setAttribute('rel', 'noreferrer noopener'),
              e.setAttribute('action', t.acsUrl)
            var i = document.createElement('input')
            i.setAttribute('type', 'hidden'),
              i.setAttribute('name', 'MD'),
              i.setAttribute('value', t.mD)
            var n = document.createElement('input')
            n.setAttribute('type', 'hidden'),
              n.setAttribute('name', 'PaReq'),
              n.setAttribute('value', t.paReq)
            var r = document.createElement('input')
            r.setAttribute('type', 'hidden'),
              r.setAttribute('name', 'TermUrl'),
              r.setAttribute('value', t.termUrl)
            var s = document.createElement('input')
            s.setAttribute('type', 'hidden'),
              s.setAttribute('name', 'JWT'),
              s.setAttribute('value', t.iswJWT)
            var o = document.createElement('input')
            o.setAttribute('type', 'submit'),
              o.setAttribute('value', 'Submit'),
              o.setAttribute('type', 'hidden'),
              e.append(i),
              e.append(n),
              e.append(r),
              e.append(s),
              e.append(o),
              document.getElementsByTagName('body')[0].appendChild(e),
              e.submit()
          }),
          (a.prototype.doPayment = async function () {
            if (window.PaymentRequest) {
              let t
              t = window.ApplePaySession
                ? {
                    supportedMethods: 'https://apple.com/apple-pay',
                    data: {
                      version: 3,
                      merchantIdentifier: 'https://popup.squadco.com',
                      merchantCapabilities: [
                        'supports3DS',
                        'supportsCredit',
                        'supportsDebit',
                      ],
                      supportedNetworks: [
                        'amex',
                        'discover',
                        'masterCard',
                        'visa',
                      ],
                      countryCode: 'NG',
                    },
                  }
                : {
                    supportedMethods: 'basic-card',
                    data: {
                      supportedNetworks: [
                        'visa',
                        'mastercard',
                        'amex',
                        'discover',
                        'jcb',
                        'unionpay',
                      ],
                    },
                  }
              const e = [t],
                i = {
                  total: {
                    label: 'Total',
                    amount: {
                      currency: h.currency_code || 'NGN',
                      value: h.amount / 100,
                    },
                  },
                },
                n = new PaymentRequest(e, i, {}),
                s = await n.show(),
                o = new r(),
                a = h.payload.encryptPublicKey
              o.setPublicKey(a)
              const u = (t) => {
                  const e = JSON.stringify(t)
                  return o.encrypt(e)
                },
                c = {
                  type: 'cardAction',
                  access_token: h.payload.access_token,
                  transaction_ref: h.payload.transaction_ref,
                  card: {
                    cvv: s.details.cardSecurityCode,
                    number: s.details.cardNumber,
                    expiry_month: s.details.expiryMonth,
                    expiry_year: s.details.expiryYear.toString().slice(2),
                  },
                },
                l = u(c)
              let p = document.getElementById('squad--frame-id')
              const f = { data: l },
                d = h.is_recurring ? 'RecurringPayment' : 'ChargeCard'
              fetch(`${h.payload.baseUrl}/payment/${d}`, {
                method: 'post',
                headers: {
                  Accept: 'application/json, text/plain, */*',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(f),
              })
                .then((t) => t.json())
                .then((t) => {
                  if (211 != t.status) {
                    const e = { type: 'cardAction2', res: t }
                    p.contentWindow.postMessage(e, 'https://popup.squadco.com')
                  } else
                    211 === t.status &&
                      p.contentWindow.postMessage(
                        c,
                        'https://popup.squadco.com'
                      )
                  return t
                })
                .catch((t) => {
                  const e = { type: 'cardAction2', err: t }
                  p.contentWindow.postMessage(e, 'https://popup.squadco.com')
                })
                .finally(() => s.complete())
            }
          }),
          (window.squad = a),
          (window.Squad = a),
          (t.exports = a)
      },
      function (t, e, i) {
        'use strict'
        i.r(e),
          i.d(e, 'JSEncrypt', function () {
            return ot
          })
        function n(t) {
          return '0123456789abcdefghijklmnopqrstuvwxyz'.charAt(t)
        }
        function r(t, e) {
          return t & e
        }
        function s(t, e) {
          return t | e
        }
        function o(t, e) {
          return t ^ e
        }
        function a(t, e) {
          return t & ~e
        }
        function h(t) {
          if (0 == t) return -1
          var e = 0
          return (
            0 == (65535 & t) && ((t >>= 16), (e += 16)),
            0 == (255 & t) && ((t >>= 8), (e += 8)),
            0 == (15 & t) && ((t >>= 4), (e += 4)),
            0 == (3 & t) && ((t >>= 2), (e += 2)),
            0 == (1 & t) && ++e,
            e
          )
        }
        function u(t) {
          for (var e = 0; 0 != t; ) (t &= t - 1), ++e
          return e
        }
        var c,
          l = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
        function p(t) {
          var e,
            i,
            n = ''
          for (e = 0; e + 3 <= t.length; e += 3)
            (i = parseInt(t.substring(e, e + 3), 16)),
              (n += l.charAt(i >> 6) + l.charAt(63 & i))
          for (
            e + 1 == t.length
              ? ((i = parseInt(t.substring(e, e + 1), 16)),
                (n += l.charAt(i << 2)))
              : e + 2 == t.length &&
                ((i = parseInt(t.substring(e, e + 2), 16)),
                (n += l.charAt(i >> 2) + l.charAt((3 & i) << 4)));
            (3 & n.length) > 0;

          )
            n += '='
          return n
        }
        function f(t) {
          var e,
            i = '',
            r = 0,
            s = 0
          for (e = 0; e < t.length && '=' != t.charAt(e); ++e) {
            var o = l.indexOf(t.charAt(e))
            o < 0 ||
              (0 == r
                ? ((i += n(o >> 2)), (s = 3 & o), (r = 1))
                : 1 == r
                ? ((i += n((s << 2) | (o >> 4))), (s = 15 & o), (r = 2))
                : 2 == r
                ? ((i += n(s)), (i += n(o >> 2)), (s = 3 & o), (r = 3))
                : ((i += n((s << 2) | (o >> 4))), (i += n(15 & o)), (r = 0)))
          }
          return 1 == r && (i += n(s << 2)), i
        }
        var d,
          g = function (t) {
            var e
            if (void 0 === c) {
              var i = '0123456789ABCDEF',
                n = ' \f\n\r\tÂ \u2028\u2029'
              for (c = {}, e = 0; e < 16; ++e) c[i.charAt(e)] = e
              for (i = i.toLowerCase(), e = 10; e < 16; ++e) c[i.charAt(e)] = e
              for (e = 0; e < n.length; ++e) c[n.charAt(e)] = -1
            }
            var r = [],
              s = 0,
              o = 0
            for (e = 0; e < t.length; ++e) {
              var a = t.charAt(e)
              if ('=' == a) break
              if (-1 != (a = c[a])) {
                if (void 0 === a)
                  throw new Error('Illegal character at offset ' + e)
                ;(s |= a),
                  ++o >= 2 ? ((r[r.length] = s), (s = 0), (o = 0)) : (s <<= 4)
              }
            }
            if (o) throw new Error('Hex encoding incomplete: 4 bits missing')
            return r
          },
          m = {
            decode: function (t) {
              var e
              if (void 0 === d) {
                var i = '= \f\n\r\tÂ \u2028\u2029'
                for (d = Object.create(null), e = 0; e < 64; ++e)
                  d[
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(
                      e
                    )
                  ] = e
                for (d['-'] = 62, d._ = 63, e = 0; e < i.length; ++e)
                  d[i.charAt(e)] = -1
              }
              var n = [],
                r = 0,
                s = 0
              for (e = 0; e < t.length; ++e) {
                var o = t.charAt(e)
                if ('=' == o) break
                if (-1 != (o = d[o])) {
                  if (void 0 === o)
                    throw new Error('Illegal character at offset ' + e)
                  ;(r |= o),
                    ++s >= 4
                      ? ((n[n.length] = r >> 16),
                        (n[n.length] = (r >> 8) & 255),
                        (n[n.length] = 255 & r),
                        (r = 0),
                        (s = 0))
                      : (r <<= 6)
                }
              }
              switch (s) {
                case 1:
                  throw new Error(
                    'Base64 encoding incomplete: at least 2 bits missing'
                  )
                case 2:
                  n[n.length] = r >> 10
                  break
                case 3:
                  ;(n[n.length] = r >> 16), (n[n.length] = (r >> 8) & 255)
              }
              return n
            },
            re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
            unarmor: function (t) {
              var e = m.re.exec(t)
              if (e)
                if (e[1]) t = e[1]
                else {
                  if (!e[2]) throw new Error('RegExp out of sync')
                  t = e[2]
                }
              return m.decode(t)
            },
          },
          y = 1e13,
          v = (function () {
            function t(t) {
              this.buf = [+t || 0]
            }
            return (
              (t.prototype.mulAdd = function (t, e) {
                var i,
                  n,
                  r = this.buf,
                  s = r.length
                for (i = 0; i < s; ++i)
                  (n = r[i] * t + e) < y
                    ? (e = 0)
                    : (n -= (e = 0 | (n / y)) * y),
                    (r[i] = n)
                e > 0 && (r[i] = e)
              }),
              (t.prototype.sub = function (t) {
                var e,
                  i,
                  n = this.buf,
                  r = n.length
                for (e = 0; e < r; ++e)
                  (i = n[e] - t) < 0 ? ((i += y), (t = 1)) : (t = 0), (n[e] = i)
                for (; 0 === n[n.length - 1]; ) n.pop()
              }),
              (t.prototype.toString = function (t) {
                if (10 != (t || 10))
                  throw new Error('only base 10 is supported')
                for (
                  var e = this.buf,
                    i = e[e.length - 1].toString(),
                    n = e.length - 2;
                  n >= 0;
                  --n
                )
                  i += (y + e[n]).toString().substring(1)
                return i
              }),
              (t.prototype.valueOf = function () {
                for (var t = this.buf, e = 0, i = t.length - 1; i >= 0; --i)
                  e = e * y + t[i]
                return e
              }),
              (t.prototype.simplify = function () {
                var t = this.buf
                return 1 == t.length ? t[0] : this
              }),
              t
            )
          })(),
          b =
            /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
          w =
            /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/
        function C(t, e) {
          return t.length > e && (t = t.substring(0, e) + 'â€¦'), t
        }
        var S,
          T = (function () {
            function t(e, i) {
              ;(this.hexDigits = '0123456789ABCDEF'),
                e instanceof t
                  ? ((this.enc = e.enc), (this.pos = e.pos))
                  : ((this.enc = e), (this.pos = i))
            }
            return (
              (t.prototype.get = function (t) {
                if ((void 0 === t && (t = this.pos++), t >= this.enc.length))
                  throw new Error(
                    'Requesting byte offset ' +
                      t +
                      ' on a stream of length ' +
                      this.enc.length
                  )
                return 'string' == typeof this.enc
                  ? this.enc.charCodeAt(t)
                  : this.enc[t]
              }),
              (t.prototype.hexByte = function (t) {
                return (
                  this.hexDigits.charAt((t >> 4) & 15) +
                  this.hexDigits.charAt(15 & t)
                )
              }),
              (t.prototype.hexDump = function (t, e, i) {
                for (var n = '', r = t; r < e; ++r)
                  if (((n += this.hexByte(this.get(r))), !0 !== i))
                    switch (15 & r) {
                      case 7:
                        n += '  '
                        break
                      case 15:
                        n += '\n'
                        break
                      default:
                        n += ' '
                    }
                return n
              }),
              (t.prototype.isASCII = function (t, e) {
                for (var i = t; i < e; ++i) {
                  var n = this.get(i)
                  if (n < 32 || n > 176) return !1
                }
                return !0
              }),
              (t.prototype.parseStringISO = function (t, e) {
                for (var i = '', n = t; n < e; ++n)
                  i += String.fromCharCode(this.get(n))
                return i
              }),
              (t.prototype.parseStringUTF = function (t, e) {
                for (var i = '', n = t; n < e; ) {
                  var r = this.get(n++)
                  i +=
                    r < 128
                      ? String.fromCharCode(r)
                      : r > 191 && r < 224
                      ? String.fromCharCode(
                          ((31 & r) << 6) | (63 & this.get(n++))
                        )
                      : String.fromCharCode(
                          ((15 & r) << 12) |
                            ((63 & this.get(n++)) << 6) |
                            (63 & this.get(n++))
                        )
                }
                return i
              }),
              (t.prototype.parseStringBMP = function (t, e) {
                for (var i, n, r = '', s = t; s < e; )
                  (i = this.get(s++)),
                    (n = this.get(s++)),
                    (r += String.fromCharCode((i << 8) | n))
                return r
              }),
              (t.prototype.parseTime = function (t, e, i) {
                var n = this.parseStringISO(t, e),
                  r = (i ? b : w).exec(n)
                return r
                  ? (i && ((r[1] = +r[1]), (r[1] += +r[1] < 70 ? 2e3 : 1900)),
                    (n = r[1] + '-' + r[2] + '-' + r[3] + ' ' + r[4]),
                    r[5] &&
                      ((n += ':' + r[5]),
                      r[6] && ((n += ':' + r[6]), r[7] && (n += '.' + r[7]))),
                    r[8] &&
                      ((n += ' UTC'),
                      'Z' != r[8] && ((n += r[8]), r[9] && (n += ':' + r[9]))),
                    n)
                  : 'Unrecognized time: ' + n
              }),
              (t.prototype.parseInteger = function (t, e) {
                for (
                  var i, n = this.get(t), r = n > 127, s = r ? 255 : 0, o = '';
                  n == s && ++t < e;

                )
                  n = this.get(t)
                if (0 === (i = e - t)) return r ? -1 : 0
                if (i > 4) {
                  for (o = n, i <<= 3; 0 == (128 & (+o ^ s)); )
                    (o = +o << 1), --i
                  o = '(' + i + ' bit)\n'
                }
                r && (n -= 256)
                for (var a = new v(n), h = t + 1; h < e; ++h)
                  a.mulAdd(256, this.get(h))
                return o + a.toString()
              }),
              (t.prototype.parseBitString = function (t, e, i) {
                for (
                  var n = this.get(t),
                    r = '(' + (((e - t - 1) << 3) - n) + ' bit)\n',
                    s = '',
                    o = t + 1;
                  o < e;
                  ++o
                ) {
                  for (
                    var a = this.get(o), h = o == e - 1 ? n : 0, u = 7;
                    u >= h;
                    --u
                  )
                    s += (a >> u) & 1 ? '1' : '0'
                  if (s.length > i) return r + C(s, i)
                }
                return r + s
              }),
              (t.prototype.parseOctetString = function (t, e, i) {
                if (this.isASCII(t, e)) return C(this.parseStringISO(t, e), i)
                var n = e - t,
                  r = '(' + n + ' byte)\n'
                n > (i /= 2) && (e = t + i)
                for (var s = t; s < e; ++s) r += this.hexByte(this.get(s))
                return n > i && (r += 'â€¦'), r
              }),
              (t.prototype.parseOID = function (t, e, i) {
                for (var n = '', r = new v(), s = 0, o = t; o < e; ++o) {
                  var a = this.get(o)
                  if ((r.mulAdd(128, 127 & a), (s += 7), !(128 & a))) {
                    if ('' === n)
                      if ((r = r.simplify()) instanceof v)
                        r.sub(80), (n = '2.' + r.toString())
                      else {
                        var h = r < 80 ? (r < 40 ? 0 : 1) : 2
                        n = h + '.' + (r - 40 * h)
                      }
                    else n += '.' + r.toString()
                    if (n.length > i) return C(n, i)
                    ;(r = new v()), (s = 0)
                  }
                }
                return s > 0 && (n += '.incomplete'), n
              }),
              t
            )
          })(),
          E = (function () {
            function t(t, e, i, n, r) {
              if (!(n instanceof D)) throw new Error('Invalid tag value.')
              ;(this.stream = t),
                (this.header = e),
                (this.length = i),
                (this.tag = n),
                (this.sub = r)
            }
            return (
              (t.prototype.typeName = function () {
                switch (this.tag.tagClass) {
                  case 0:
                    switch (this.tag.tagNumber) {
                      case 0:
                        return 'EOC'
                      case 1:
                        return 'BOOLEAN'
                      case 2:
                        return 'INTEGER'
                      case 3:
                        return 'BIT_STRING'
                      case 4:
                        return 'OCTET_STRING'
                      case 5:
                        return 'NULL'
                      case 6:
                        return 'OBJECT_IDENTIFIER'
                      case 7:
                        return 'ObjectDescriptor'
                      case 8:
                        return 'EXTERNAL'
                      case 9:
                        return 'REAL'
                      case 10:
                        return 'ENUMERATED'
                      case 11:
                        return 'EMBEDDED_PDV'
                      case 12:
                        return 'UTF8String'
                      case 16:
                        return 'SEQUENCE'
                      case 17:
                        return 'SET'
                      case 18:
                        return 'NumericString'
                      case 19:
                        return 'PrintableString'
                      case 20:
                        return 'TeletexString'
                      case 21:
                        return 'VideotexString'
                      case 22:
                        return 'IA5String'
                      case 23:
                        return 'UTCTime'
                      case 24:
                        return 'GeneralizedTime'
                      case 25:
                        return 'GraphicString'
                      case 26:
                        return 'VisibleString'
                      case 27:
                        return 'GeneralString'
                      case 28:
                        return 'UniversalString'
                      case 30:
                        return 'BMPString'
                    }
                    return 'Universal_' + this.tag.tagNumber.toString()
                  case 1:
                    return 'Application_' + this.tag.tagNumber.toString()
                  case 2:
                    return '[' + this.tag.tagNumber.toString() + ']'
                  case 3:
                    return 'Private_' + this.tag.tagNumber.toString()
                }
              }),
              (t.prototype.content = function (t) {
                if (void 0 === this.tag) return null
                void 0 === t && (t = 1 / 0)
                var e = this.posContent(),
                  i = Math.abs(this.length)
                if (!this.tag.isUniversal())
                  return null !== this.sub
                    ? '(' + this.sub.length + ' elem)'
                    : this.stream.parseOctetString(e, e + i, t)
                switch (this.tag.tagNumber) {
                  case 1:
                    return 0 === this.stream.get(e) ? 'false' : 'true'
                  case 2:
                    return this.stream.parseInteger(e, e + i)
                  case 3:
                    return this.sub
                      ? '(' + this.sub.length + ' elem)'
                      : this.stream.parseBitString(e, e + i, t)
                  case 4:
                    return this.sub
                      ? '(' + this.sub.length + ' elem)'
                      : this.stream.parseOctetString(e, e + i, t)
                  case 6:
                    return this.stream.parseOID(e, e + i, t)
                  case 16:
                  case 17:
                    return null !== this.sub
                      ? '(' + this.sub.length + ' elem)'
                      : '(no elem)'
                  case 12:
                    return C(this.stream.parseStringUTF(e, e + i), t)
                  case 18:
                  case 19:
                  case 20:
                  case 21:
                  case 22:
                  case 26:
                    return C(this.stream.parseStringISO(e, e + i), t)
                  case 30:
                    return C(this.stream.parseStringBMP(e, e + i), t)
                  case 23:
                  case 24:
                    return this.stream.parseTime(
                      e,
                      e + i,
                      23 == this.tag.tagNumber
                    )
                }
                return null
              }),
              (t.prototype.toString = function () {
                return (
                  this.typeName() +
                  '@' +
                  this.stream.pos +
                  '[header:' +
                  this.header +
                  ',length:' +
                  this.length +
                  ',sub:' +
                  (null === this.sub ? 'null' : this.sub.length) +
                  ']'
                )
              }),
              (t.prototype.toPrettyString = function (t) {
                void 0 === t && (t = '')
                var e = t + this.typeName() + ' @' + this.stream.pos
                if (
                  (this.length >= 0 && (e += '+'),
                  (e += this.length),
                  this.tag.tagConstructed
                    ? (e += ' (constructed)')
                    : !this.tag.isUniversal() ||
                      (3 != this.tag.tagNumber && 4 != this.tag.tagNumber) ||
                      null === this.sub ||
                      (e += ' (encapsulates)'),
                  (e += '\n'),
                  null !== this.sub)
                ) {
                  t += '  '
                  for (var i = 0, n = this.sub.length; i < n; ++i)
                    e += this.sub[i].toPrettyString(t)
                }
                return e
              }),
              (t.prototype.posStart = function () {
                return this.stream.pos
              }),
              (t.prototype.posContent = function () {
                return this.stream.pos + this.header
              }),
              (t.prototype.posEnd = function () {
                return this.stream.pos + this.header + Math.abs(this.length)
              }),
              (t.prototype.toHexString = function () {
                return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
              }),
              (t.decodeLength = function (t) {
                var e = t.get(),
                  i = 127 & e
                if (i == e) return i
                if (i > 6)
                  throw new Error(
                    'Length over 48 bits not supported at position ' +
                      (t.pos - 1)
                  )
                if (0 === i) return null
                e = 0
                for (var n = 0; n < i; ++n) e = 256 * e + t.get()
                return e
              }),
              (t.prototype.getHexStringValue = function () {
                var t = this.toHexString(),
                  e = 2 * this.header,
                  i = 2 * this.length
                return t.substr(e, i)
              }),
              (t.decode = function (e) {
                var i
                i = e instanceof T ? e : new T(e, 0)
                var n = new T(i),
                  r = new D(i),
                  s = t.decodeLength(i),
                  o = i.pos,
                  a = o - n.pos,
                  h = null,
                  u = function () {
                    var e = []
                    if (null !== s) {
                      for (var n = o + s; i.pos < n; ) e[e.length] = t.decode(i)
                      if (i.pos != n)
                        throw new Error(
                          'Content size is not correct for container starting at offset ' +
                            o
                        )
                    } else
                      try {
                        for (;;) {
                          var r = t.decode(i)
                          if (r.tag.isEOC()) break
                          e[e.length] = r
                        }
                        s = o - i.pos
                      } catch (t) {
                        throw new Error(
                          'Exception while decoding undefined length content: ' +
                            t
                        )
                      }
                    return e
                  }
                if (r.tagConstructed) h = u()
                else if (
                  r.isUniversal() &&
                  (3 == r.tagNumber || 4 == r.tagNumber)
                )
                  try {
                    if (3 == r.tagNumber && 0 != i.get())
                      throw new Error(
                        'BIT STRINGs with unused bits cannot encapsulate.'
                      )
                    h = u()
                    for (var c = 0; c < h.length; ++c)
                      if (h[c].tag.isEOC())
                        throw new Error(
                          'EOC is not supposed to be actual content.'
                        )
                  } catch (t) {
                    h = null
                  }
                if (null === h) {
                  if (null === s)
                    throw new Error(
                      "We can't skip over an invalid tag with undefined length at offset " +
                        o
                    )
                  i.pos = o + Math.abs(s)
                }
                return new t(n, a, s, r, h)
              }),
              t
            )
          })(),
          D = (function () {
            function t(t) {
              var e = t.get()
              if (
                ((this.tagClass = e >> 6),
                (this.tagConstructed = 0 != (32 & e)),
                (this.tagNumber = 31 & e),
                31 == this.tagNumber)
              ) {
                var i = new v()
                do {
                  ;(e = t.get()), i.mulAdd(128, 127 & e)
                } while (128 & e)
                this.tagNumber = i.simplify()
              }
            }
            return (
              (t.prototype.isUniversal = function () {
                return 0 === this.tagClass
              }),
              (t.prototype.isEOC = function () {
                return 0 === this.tagClass && 0 === this.tagNumber
              }),
              t
            )
          })(),
          x = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
            67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
            139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
            211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277,
            281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359,
            367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439,
            443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521,
            523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607,
            613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683,
            691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773,
            787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863,
            877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967,
            971, 977, 983, 991, 997,
          ],
          A = (1 << 26) / x[x.length - 1],
          V = (function () {
            function t(t, e, i) {
              null != t &&
                ('number' == typeof t
                  ? this.fromNumber(t, e, i)
                  : null == e && 'string' != typeof t
                  ? this.fromString(t, 256)
                  : this.fromString(t, e))
            }
            return (
              (t.prototype.toString = function (t) {
                if (this.s < 0) return '-' + this.negate().toString(t)
                var e
                if (16 == t) e = 4
                else if (8 == t) e = 3
                else if (2 == t) e = 1
                else if (32 == t) e = 5
                else {
                  if (4 != t) return this.toRadix(t)
                  e = 2
                }
                var i,
                  r = (1 << e) - 1,
                  s = !1,
                  o = '',
                  a = this.t,
                  h = this.DB - ((a * this.DB) % e)
                if (a-- > 0)
                  for (
                    h < this.DB &&
                    (i = this[a] >> h) > 0 &&
                    ((s = !0), (o = n(i)));
                    a >= 0;

                  )
                    h < e
                      ? ((i = (this[a] & ((1 << h) - 1)) << (e - h)),
                        (i |= this[--a] >> (h += this.DB - e)))
                      : ((i = (this[a] >> (h -= e)) & r),
                        h <= 0 && ((h += this.DB), --a)),
                      i > 0 && (s = !0),
                      s && (o += n(i))
                return s ? o : '0'
              }),
              (t.prototype.negate = function () {
                var e = N()
                return t.ZERO.subTo(this, e), e
              }),
              (t.prototype.abs = function () {
                return this.s < 0 ? this.negate() : this
              }),
              (t.prototype.compareTo = function (t) {
                var e = this.s - t.s
                if (0 != e) return e
                var i = this.t
                if (0 != (e = i - t.t)) return this.s < 0 ? -e : e
                for (; --i >= 0; ) if (0 != (e = this[i] - t[i])) return e
                return 0
              }),
              (t.prototype.bitLength = function () {
                return this.t <= 0
                  ? 0
                  : this.DB * (this.t - 1) +
                      j(this[this.t - 1] ^ (this.s & this.DM))
              }),
              (t.prototype.mod = function (e) {
                var i = N()
                return (
                  this.abs().divRemTo(e, null, i),
                  this.s < 0 && i.compareTo(t.ZERO) > 0 && e.subTo(i, i),
                  i
                )
              }),
              (t.prototype.modPowInt = function (t, e) {
                var i
                return (
                  (i = t < 256 || e.isEven() ? new R(e) : new O(e)),
                  this.exp(t, i)
                )
              }),
              (t.prototype.clone = function () {
                var t = N()
                return this.copyTo(t), t
              }),
              (t.prototype.intValue = function () {
                if (this.s < 0) {
                  if (1 == this.t) return this[0] - this.DV
                  if (0 == this.t) return -1
                } else {
                  if (1 == this.t) return this[0]
                  if (0 == this.t) return 0
                }
                return (
                  ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0]
                )
              }),
              (t.prototype.byteValue = function () {
                return 0 == this.t ? this.s : (this[0] << 24) >> 24
              }),
              (t.prototype.shortValue = function () {
                return 0 == this.t ? this.s : (this[0] << 16) >> 16
              }),
              (t.prototype.signum = function () {
                return this.s < 0
                  ? -1
                  : this.t <= 0 || (1 == this.t && this[0] <= 0)
                  ? 0
                  : 1
              }),
              (t.prototype.toByteArray = function () {
                var t = this.t,
                  e = []
                e[0] = this.s
                var i,
                  n = this.DB - ((t * this.DB) % 8),
                  r = 0
                if (t-- > 0)
                  for (
                    n < this.DB &&
                    (i = this[t] >> n) != (this.s & this.DM) >> n &&
                    (e[r++] = i | (this.s << (this.DB - n)));
                    t >= 0;

                  )
                    n < 8
                      ? ((i = (this[t] & ((1 << n) - 1)) << (8 - n)),
                        (i |= this[--t] >> (n += this.DB - 8)))
                      : ((i = (this[t] >> (n -= 8)) & 255),
                        n <= 0 && ((n += this.DB), --t)),
                      0 != (128 & i) && (i |= -256),
                      0 == r && (128 & this.s) != (128 & i) && ++r,
                      (r > 0 || i != this.s) && (e[r++] = i)
                return e
              }),
              (t.prototype.equals = function (t) {
                return 0 == this.compareTo(t)
              }),
              (t.prototype.min = function (t) {
                return this.compareTo(t) < 0 ? this : t
              }),
              (t.prototype.max = function (t) {
                return this.compareTo(t) > 0 ? this : t
              }),
              (t.prototype.and = function (t) {
                var e = N()
                return this.bitwiseTo(t, r, e), e
              }),
              (t.prototype.or = function (t) {
                var e = N()
                return this.bitwiseTo(t, s, e), e
              }),
              (t.prototype.xor = function (t) {
                var e = N()
                return this.bitwiseTo(t, o, e), e
              }),
              (t.prototype.andNot = function (t) {
                var e = N()
                return this.bitwiseTo(t, a, e), e
              }),
              (t.prototype.not = function () {
                for (var t = N(), e = 0; e < this.t; ++e)
                  t[e] = this.DM & ~this[e]
                return (t.t = this.t), (t.s = ~this.s), t
              }),
              (t.prototype.shiftLeft = function (t) {
                var e = N()
                return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e
              }),
              (t.prototype.shiftRight = function (t) {
                var e = N()
                return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e
              }),
              (t.prototype.getLowestSetBit = function () {
                for (var t = 0; t < this.t; ++t)
                  if (0 != this[t]) return t * this.DB + h(this[t])
                return this.s < 0 ? this.t * this.DB : -1
              }),
              (t.prototype.bitCount = function () {
                for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i)
                  t += u(this[i] ^ e)
                return t
              }),
              (t.prototype.testBit = function (t) {
                var e = Math.floor(t / this.DB)
                return e >= this.t
                  ? 0 != this.s
                  : 0 != (this[e] & (1 << t % this.DB))
              }),
              (t.prototype.setBit = function (t) {
                return this.changeBit(t, s)
              }),
              (t.prototype.clearBit = function (t) {
                return this.changeBit(t, a)
              }),
              (t.prototype.flipBit = function (t) {
                return this.changeBit(t, o)
              }),
              (t.prototype.add = function (t) {
                var e = N()
                return this.addTo(t, e), e
              }),
              (t.prototype.subtract = function (t) {
                var e = N()
                return this.subTo(t, e), e
              }),
              (t.prototype.multiply = function (t) {
                var e = N()
                return this.multiplyTo(t, e), e
              }),
              (t.prototype.divide = function (t) {
                var e = N()
                return this.divRemTo(t, e, null), e
              }),
              (t.prototype.remainder = function (t) {
                var e = N()
                return this.divRemTo(t, null, e), e
              }),
              (t.prototype.divideAndRemainder = function (t) {
                var e = N(),
                  i = N()
                return this.divRemTo(t, e, i), [e, i]
              }),
              (t.prototype.modPow = function (t, e) {
                var i,
                  n,
                  r = t.bitLength(),
                  s = _(1)
                if (r <= 0) return s
                ;(i = r < 18 ? 1 : r < 48 ? 3 : r < 144 ? 4 : r < 768 ? 5 : 6),
                  (n = r < 8 ? new R(e) : e.isEven() ? new I(e) : new O(e))
                var o = [],
                  a = 3,
                  h = i - 1,
                  u = (1 << i) - 1
                if (((o[1] = n.convert(this)), i > 1)) {
                  var c = N()
                  for (n.sqrTo(o[1], c); a <= u; )
                    (o[a] = N()), n.mulTo(c, o[a - 2], o[a]), (a += 2)
                }
                var l,
                  p,
                  f = t.t - 1,
                  d = !0,
                  g = N()
                for (r = j(t[f]) - 1; f >= 0; ) {
                  for (
                    r >= h
                      ? (l = (t[f] >> (r - h)) & u)
                      : ((l = (t[f] & ((1 << (r + 1)) - 1)) << (h - r)),
                        f > 0 && (l |= t[f - 1] >> (this.DB + r - h))),
                      a = i;
                    0 == (1 & l);

                  )
                    (l >>= 1), --a
                  if (((r -= a) < 0 && ((r += this.DB), --f), d))
                    o[l].copyTo(s), (d = !1)
                  else {
                    for (; a > 1; ) n.sqrTo(s, g), n.sqrTo(g, s), (a -= 2)
                    a > 0 ? n.sqrTo(s, g) : ((p = s), (s = g), (g = p)),
                      n.mulTo(g, o[l], s)
                  }
                  for (; f >= 0 && 0 == (t[f] & (1 << r)); )
                    n.sqrTo(s, g),
                      (p = s),
                      (s = g),
                      (g = p),
                      --r < 0 && ((r = this.DB - 1), --f)
                }
                return n.revert(s)
              }),
              (t.prototype.modInverse = function (e) {
                var i = e.isEven()
                if ((this.isEven() && i) || 0 == e.signum()) return t.ZERO
                for (
                  var n = e.clone(),
                    r = this.clone(),
                    s = _(1),
                    o = _(0),
                    a = _(0),
                    h = _(1);
                  0 != n.signum();

                ) {
                  for (; n.isEven(); )
                    n.rShiftTo(1, n),
                      i
                        ? ((s.isEven() && o.isEven()) ||
                            (s.addTo(this, s), o.subTo(e, o)),
                          s.rShiftTo(1, s))
                        : o.isEven() || o.subTo(e, o),
                      o.rShiftTo(1, o)
                  for (; r.isEven(); )
                    r.rShiftTo(1, r),
                      i
                        ? ((a.isEven() && h.isEven()) ||
                            (a.addTo(this, a), h.subTo(e, h)),
                          a.rShiftTo(1, a))
                        : h.isEven() || h.subTo(e, h),
                      h.rShiftTo(1, h)
                  n.compareTo(r) >= 0
                    ? (n.subTo(r, n), i && s.subTo(a, s), o.subTo(h, o))
                    : (r.subTo(n, r), i && a.subTo(s, a), h.subTo(o, h))
                }
                return 0 != r.compareTo(t.ONE)
                  ? t.ZERO
                  : h.compareTo(e) >= 0
                  ? h.subtract(e)
                  : h.signum() < 0
                  ? (h.addTo(e, h), h.signum() < 0 ? h.add(e) : h)
                  : h
              }),
              (t.prototype.pow = function (t) {
                return this.exp(t, new B())
              }),
              (t.prototype.gcd = function (t) {
                var e = this.s < 0 ? this.negate() : this.clone(),
                  i = t.s < 0 ? t.negate() : t.clone()
                if (e.compareTo(i) < 0) {
                  var n = e
                  ;(e = i), (i = n)
                }
                var r = e.getLowestSetBit(),
                  s = i.getLowestSetBit()
                if (s < 0) return e
                for (
                  r < s && (s = r),
                    s > 0 && (e.rShiftTo(s, e), i.rShiftTo(s, i));
                  e.signum() > 0;

                )
                  (r = e.getLowestSetBit()) > 0 && e.rShiftTo(r, e),
                    (r = i.getLowestSetBit()) > 0 && i.rShiftTo(r, i),
                    e.compareTo(i) >= 0
                      ? (e.subTo(i, e), e.rShiftTo(1, e))
                      : (i.subTo(e, i), i.rShiftTo(1, i))
                return s > 0 && i.lShiftTo(s, i), i
              }),
              (t.prototype.isProbablePrime = function (t) {
                var e,
                  i = this.abs()
                if (1 == i.t && i[0] <= x[x.length - 1]) {
                  for (e = 0; e < x.length; ++e) if (i[0] == x[e]) return !0
                  return !1
                }
                if (i.isEven()) return !1
                for (e = 1; e < x.length; ) {
                  for (var n = x[e], r = e + 1; r < x.length && n < A; )
                    n *= x[r++]
                  for (n = i.modInt(n); e < r; ) if (n % x[e++] == 0) return !1
                }
                return i.millerRabin(t)
              }),
              (t.prototype.copyTo = function (t) {
                for (var e = this.t - 1; e >= 0; --e) t[e] = this[e]
                ;(t.t = this.t), (t.s = this.s)
              }),
              (t.prototype.fromInt = function (t) {
                ;(this.t = 1),
                  (this.s = t < 0 ? -1 : 0),
                  t > 0
                    ? (this[0] = t)
                    : t < -1
                    ? (this[0] = t + this.DV)
                    : (this.t = 0)
              }),
              (t.prototype.fromString = function (e, i) {
                var n
                if (16 == i) n = 4
                else if (8 == i) n = 3
                else if (256 == i) n = 8
                else if (2 == i) n = 1
                else if (32 == i) n = 5
                else {
                  if (4 != i) return void this.fromRadix(e, i)
                  n = 2
                }
                ;(this.t = 0), (this.s = 0)
                for (var r = e.length, s = !1, o = 0; --r >= 0; ) {
                  var a = 8 == n ? 255 & +e[r] : L(e, r)
                  a < 0
                    ? '-' == e.charAt(r) && (s = !0)
                    : ((s = !1),
                      0 == o
                        ? (this[this.t++] = a)
                        : o + n > this.DB
                        ? ((this[this.t - 1] |=
                            (a & ((1 << (this.DB - o)) - 1)) << o),
                          (this[this.t++] = a >> (this.DB - o)))
                        : (this[this.t - 1] |= a << o),
                      (o += n) >= this.DB && (o -= this.DB))
                }
                8 == n &&
                  0 != (128 & +e[0]) &&
                  ((this.s = -1),
                  o > 0 &&
                    (this[this.t - 1] |= ((1 << (this.DB - o)) - 1) << o)),
                  this.clamp(),
                  s && t.ZERO.subTo(this, this)
              }),
              (t.prototype.clamp = function () {
                for (
                  var t = this.s & this.DM;
                  this.t > 0 && this[this.t - 1] == t;

                )
                  --this.t
              }),
              (t.prototype.dlShiftTo = function (t, e) {
                var i
                for (i = this.t - 1; i >= 0; --i) e[i + t] = this[i]
                for (i = t - 1; i >= 0; --i) e[i] = 0
                ;(e.t = this.t + t), (e.s = this.s)
              }),
              (t.prototype.drShiftTo = function (t, e) {
                for (var i = t; i < this.t; ++i) e[i - t] = this[i]
                ;(e.t = Math.max(this.t - t, 0)), (e.s = this.s)
              }),
              (t.prototype.lShiftTo = function (t, e) {
                for (
                  var i = t % this.DB,
                    n = this.DB - i,
                    r = (1 << n) - 1,
                    s = Math.floor(t / this.DB),
                    o = (this.s << i) & this.DM,
                    a = this.t - 1;
                  a >= 0;
                  --a
                )
                  (e[a + s + 1] = (this[a] >> n) | o), (o = (this[a] & r) << i)
                for (a = s - 1; a >= 0; --a) e[a] = 0
                ;(e[s] = o), (e.t = this.t + s + 1), (e.s = this.s), e.clamp()
              }),
              (t.prototype.rShiftTo = function (t, e) {
                e.s = this.s
                var i = Math.floor(t / this.DB)
                if (i >= this.t) e.t = 0
                else {
                  var n = t % this.DB,
                    r = this.DB - n,
                    s = (1 << n) - 1
                  e[0] = this[i] >> n
                  for (var o = i + 1; o < this.t; ++o)
                    (e[o - i - 1] |= (this[o] & s) << r),
                      (e[o - i] = this[o] >> n)
                  n > 0 && (e[this.t - i - 1] |= (this.s & s) << r),
                    (e.t = this.t - i),
                    e.clamp()
                }
              }),
              (t.prototype.subTo = function (t, e) {
                for (var i = 0, n = 0, r = Math.min(t.t, this.t); i < r; )
                  (n += this[i] - t[i]), (e[i++] = n & this.DM), (n >>= this.DB)
                if (t.t < this.t) {
                  for (n -= t.s; i < this.t; )
                    (n += this[i]), (e[i++] = n & this.DM), (n >>= this.DB)
                  n += this.s
                } else {
                  for (n += this.s; i < t.t; )
                    (n -= t[i]), (e[i++] = n & this.DM), (n >>= this.DB)
                  n -= t.s
                }
                ;(e.s = n < 0 ? -1 : 0),
                  n < -1 ? (e[i++] = this.DV + n) : n > 0 && (e[i++] = n),
                  (e.t = i),
                  e.clamp()
              }),
              (t.prototype.multiplyTo = function (e, i) {
                var n = this.abs(),
                  r = e.abs(),
                  s = n.t
                for (i.t = s + r.t; --s >= 0; ) i[s] = 0
                for (s = 0; s < r.t; ++s)
                  i[s + n.t] = n.am(0, r[s], i, s, 0, n.t)
                ;(i.s = 0), i.clamp(), this.s != e.s && t.ZERO.subTo(i, i)
              }),
              (t.prototype.squareTo = function (t) {
                for (var e = this.abs(), i = (t.t = 2 * e.t); --i >= 0; )
                  t[i] = 0
                for (i = 0; i < e.t - 1; ++i) {
                  var n = e.am(i, e[i], t, 2 * i, 0, 1)
                  ;(t[i + e.t] += e.am(
                    i + 1,
                    2 * e[i],
                    t,
                    2 * i + 1,
                    n,
                    e.t - i - 1
                  )) >= e.DV && ((t[i + e.t] -= e.DV), (t[i + e.t + 1] = 1))
                }
                t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)),
                  (t.s = 0),
                  t.clamp()
              }),
              (t.prototype.divRemTo = function (e, i, n) {
                var r = e.abs()
                if (!(r.t <= 0)) {
                  var s = this.abs()
                  if (s.t < r.t)
                    return (
                      null != i && i.fromInt(0),
                      void (null != n && this.copyTo(n))
                    )
                  null == n && (n = N())
                  var o = N(),
                    a = this.s,
                    h = e.s,
                    u = this.DB - j(r[r.t - 1])
                  u > 0
                    ? (r.lShiftTo(u, o), s.lShiftTo(u, n))
                    : (r.copyTo(o), s.copyTo(n))
                  var c = o.t,
                    l = o[c - 1]
                  if (0 != l) {
                    var p =
                        l * (1 << this.F1) + (c > 1 ? o[c - 2] >> this.F2 : 0),
                      f = this.FV / p,
                      d = (1 << this.F1) / p,
                      g = 1 << this.F2,
                      m = n.t,
                      y = m - c,
                      v = null == i ? N() : i
                    for (
                      o.dlShiftTo(y, v),
                        n.compareTo(v) >= 0 && ((n[n.t++] = 1), n.subTo(v, n)),
                        t.ONE.dlShiftTo(c, v),
                        v.subTo(o, o);
                      o.t < c;

                    )
                      o[o.t++] = 0
                    for (; --y >= 0; ) {
                      var b =
                        n[--m] == l
                          ? this.DM
                          : Math.floor(n[m] * f + (n[m - 1] + g) * d)
                      if ((n[m] += o.am(0, b, n, y, 0, c)) < b)
                        for (o.dlShiftTo(y, v), n.subTo(v, n); n[m] < --b; )
                          n.subTo(v, n)
                    }
                    null != i &&
                      (n.drShiftTo(c, i), a != h && t.ZERO.subTo(i, i)),
                      (n.t = c),
                      n.clamp(),
                      u > 0 && n.rShiftTo(u, n),
                      a < 0 && t.ZERO.subTo(n, n)
                  }
                }
              }),
              (t.prototype.invDigit = function () {
                if (this.t < 1) return 0
                var t = this[0]
                if (0 == (1 & t)) return 0
                var e = 3 & t
                return (e =
                  ((e =
                    ((e =
                      ((e = (e * (2 - (15 & t) * e)) & 15) *
                        (2 - (255 & t) * e)) &
                      255) *
                      (2 - (((65535 & t) * e) & 65535))) &
                    65535) *
                    (2 - ((t * e) % this.DV))) %
                  this.DV) > 0
                  ? this.DV - e
                  : -e
              }),
              (t.prototype.isEven = function () {
                return 0 == (this.t > 0 ? 1 & this[0] : this.s)
              }),
              (t.prototype.exp = function (e, i) {
                if (e > 4294967295 || e < 1) return t.ONE
                var n = N(),
                  r = N(),
                  s = i.convert(this),
                  o = j(e) - 1
                for (s.copyTo(n); --o >= 0; )
                  if ((i.sqrTo(n, r), (e & (1 << o)) > 0)) i.mulTo(r, s, n)
                  else {
                    var a = n
                    ;(n = r), (r = a)
                  }
                return i.revert(n)
              }),
              (t.prototype.chunkSize = function (t) {
                return Math.floor((Math.LN2 * this.DB) / Math.log(t))
              }),
              (t.prototype.toRadix = function (t) {
                if (
                  (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36)
                )
                  return '0'
                var e = this.chunkSize(t),
                  i = Math.pow(t, e),
                  n = _(i),
                  r = N(),
                  s = N(),
                  o = ''
                for (this.divRemTo(n, r, s); r.signum() > 0; )
                  (o = (i + s.intValue()).toString(t).substr(1) + o),
                    r.divRemTo(n, r, s)
                return s.intValue().toString(t) + o
              }),
              (t.prototype.fromRadix = function (e, i) {
                this.fromInt(0), null == i && (i = 10)
                for (
                  var n = this.chunkSize(i),
                    r = Math.pow(i, n),
                    s = !1,
                    o = 0,
                    a = 0,
                    h = 0;
                  h < e.length;
                  ++h
                ) {
                  var u = L(e, h)
                  u < 0
                    ? '-' == e.charAt(h) && 0 == this.signum() && (s = !0)
                    : ((a = i * a + u),
                      ++o >= n &&
                        (this.dMultiply(r),
                        this.dAddOffset(a, 0),
                        (o = 0),
                        (a = 0)))
                }
                o > 0 &&
                  (this.dMultiply(Math.pow(i, o)), this.dAddOffset(a, 0)),
                  s && t.ZERO.subTo(this, this)
              }),
              (t.prototype.fromNumber = function (e, i, n) {
                if ('number' == typeof i)
                  if (e < 2) this.fromInt(1)
                  else
                    for (
                      this.fromNumber(e, n),
                        this.testBit(e - 1) ||
                          this.bitwiseTo(t.ONE.shiftLeft(e - 1), s, this),
                        this.isEven() && this.dAddOffset(1, 0);
                      !this.isProbablePrime(i);

                    )
                      this.dAddOffset(2, 0),
                        this.bitLength() > e &&
                          this.subTo(t.ONE.shiftLeft(e - 1), this)
                else {
                  var r = [],
                    o = 7 & e
                  ;(r.length = 1 + (e >> 3)),
                    i.nextBytes(r),
                    o > 0 ? (r[0] &= (1 << o) - 1) : (r[0] = 0),
                    this.fromString(r, 256)
                }
              }),
              (t.prototype.bitwiseTo = function (t, e, i) {
                var n,
                  r,
                  s = Math.min(t.t, this.t)
                for (n = 0; n < s; ++n) i[n] = e(this[n], t[n])
                if (t.t < this.t) {
                  for (r = t.s & this.DM, n = s; n < this.t; ++n)
                    i[n] = e(this[n], r)
                  i.t = this.t
                } else {
                  for (r = this.s & this.DM, n = s; n < t.t; ++n)
                    i[n] = e(r, t[n])
                  i.t = t.t
                }
                ;(i.s = e(this.s, t.s)), i.clamp()
              }),
              (t.prototype.changeBit = function (e, i) {
                var n = t.ONE.shiftLeft(e)
                return this.bitwiseTo(n, i, n), n
              }),
              (t.prototype.addTo = function (t, e) {
                for (var i = 0, n = 0, r = Math.min(t.t, this.t); i < r; )
                  (n += this[i] + t[i]), (e[i++] = n & this.DM), (n >>= this.DB)
                if (t.t < this.t) {
                  for (n += t.s; i < this.t; )
                    (n += this[i]), (e[i++] = n & this.DM), (n >>= this.DB)
                  n += this.s
                } else {
                  for (n += this.s; i < t.t; )
                    (n += t[i]), (e[i++] = n & this.DM), (n >>= this.DB)
                  n += t.s
                }
                ;(e.s = n < 0 ? -1 : 0),
                  n > 0 ? (e[i++] = n) : n < -1 && (e[i++] = this.DV + n),
                  (e.t = i),
                  e.clamp()
              }),
              (t.prototype.dMultiply = function (t) {
                ;(this[this.t] = this.am(0, t - 1, this, 0, 0, this.t)),
                  ++this.t,
                  this.clamp()
              }),
              (t.prototype.dAddOffset = function (t, e) {
                if (0 != t) {
                  for (; this.t <= e; ) this[this.t++] = 0
                  for (this[e] += t; this[e] >= this.DV; )
                    (this[e] -= this.DV),
                      ++e >= this.t && (this[this.t++] = 0),
                      ++this[e]
                }
              }),
              (t.prototype.multiplyLowerTo = function (t, e, i) {
                var n = Math.min(this.t + t.t, e)
                for (i.s = 0, i.t = n; n > 0; ) i[--n] = 0
                for (var r = i.t - this.t; n < r; ++n)
                  i[n + this.t] = this.am(0, t[n], i, n, 0, this.t)
                for (r = Math.min(t.t, e); n < r; ++n)
                  this.am(0, t[n], i, n, 0, e - n)
                i.clamp()
              }),
              (t.prototype.multiplyUpperTo = function (t, e, i) {
                --e
                var n = (i.t = this.t + t.t - e)
                for (i.s = 0; --n >= 0; ) i[n] = 0
                for (n = Math.max(e - this.t, 0); n < t.t; ++n)
                  i[this.t + n - e] = this.am(
                    e - n,
                    t[n],
                    i,
                    0,
                    0,
                    this.t + n - e
                  )
                i.clamp(), i.drShiftTo(1, i)
              }),
              (t.prototype.modInt = function (t) {
                if (t <= 0) return 0
                var e = this.DV % t,
                  i = this.s < 0 ? t - 1 : 0
                if (this.t > 0)
                  if (0 == e) i = this[0] % t
                  else
                    for (var n = this.t - 1; n >= 0; --n)
                      i = (e * i + this[n]) % t
                return i
              }),
              (t.prototype.millerRabin = function (e) {
                var i = this.subtract(t.ONE),
                  n = i.getLowestSetBit()
                if (n <= 0) return !1
                var r = i.shiftRight(n)
                ;(e = (e + 1) >> 1) > x.length && (e = x.length)
                for (var s = N(), o = 0; o < e; ++o) {
                  s.fromInt(x[Math.floor(Math.random() * x.length)])
                  var a = s.modPow(r, this)
                  if (0 != a.compareTo(t.ONE) && 0 != a.compareTo(i)) {
                    for (var h = 1; h++ < n && 0 != a.compareTo(i); )
                      if (0 == (a = a.modPowInt(2, this)).compareTo(t.ONE))
                        return !1
                    if (0 != a.compareTo(i)) return !1
                  }
                }
                return !0
              }),
              (t.prototype.square = function () {
                var t = N()
                return this.squareTo(t), t
              }),
              (t.prototype.gcda = function (t, e) {
                var i = this.s < 0 ? this.negate() : this.clone(),
                  n = t.s < 0 ? t.negate() : t.clone()
                if (i.compareTo(n) < 0) {
                  var r = i
                  ;(i = n), (n = r)
                }
                var s = i.getLowestSetBit(),
                  o = n.getLowestSetBit()
                if (o < 0) e(i)
                else {
                  s < o && (o = s),
                    o > 0 && (i.rShiftTo(o, i), n.rShiftTo(o, n))
                  var a = function () {
                    ;(s = i.getLowestSetBit()) > 0 && i.rShiftTo(s, i),
                      (s = n.getLowestSetBit()) > 0 && n.rShiftTo(s, n),
                      i.compareTo(n) >= 0
                        ? (i.subTo(n, i), i.rShiftTo(1, i))
                        : (n.subTo(i, n), n.rShiftTo(1, n)),
                      i.signum() > 0
                        ? setTimeout(a, 0)
                        : (o > 0 && n.lShiftTo(o, n),
                          setTimeout(function () {
                            e(n)
                          }, 0))
                  }
                  setTimeout(a, 10)
                }
              }),
              (t.prototype.fromNumberAsync = function (e, i, n, r) {
                if ('number' == typeof i)
                  if (e < 2) this.fromInt(1)
                  else {
                    this.fromNumber(e, n),
                      this.testBit(e - 1) ||
                        this.bitwiseTo(t.ONE.shiftLeft(e - 1), s, this),
                      this.isEven() && this.dAddOffset(1, 0)
                    var o = this,
                      a = function () {
                        o.dAddOffset(2, 0),
                          o.bitLength() > e &&
                            o.subTo(t.ONE.shiftLeft(e - 1), o),
                          o.isProbablePrime(i)
                            ? setTimeout(function () {
                                r()
                              }, 0)
                            : setTimeout(a, 0)
                      }
                    setTimeout(a, 0)
                  }
                else {
                  var h = [],
                    u = 7 & e
                  ;(h.length = 1 + (e >> 3)),
                    i.nextBytes(h),
                    u > 0 ? (h[0] &= (1 << u) - 1) : (h[0] = 0),
                    this.fromString(h, 256)
                }
              }),
              t
            )
          })(),
          B = (function () {
            function t() {}
            return (
              (t.prototype.convert = function (t) {
                return t
              }),
              (t.prototype.revert = function (t) {
                return t
              }),
              (t.prototype.mulTo = function (t, e, i) {
                t.multiplyTo(e, i)
              }),
              (t.prototype.sqrTo = function (t, e) {
                t.squareTo(e)
              }),
              t
            )
          })(),
          R = (function () {
            function t(t) {
              this.m = t
            }
            return (
              (t.prototype.convert = function (t) {
                return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
              }),
              (t.prototype.revert = function (t) {
                return t
              }),
              (t.prototype.reduce = function (t) {
                t.divRemTo(this.m, null, t)
              }),
              (t.prototype.mulTo = function (t, e, i) {
                t.multiplyTo(e, i), this.reduce(i)
              }),
              (t.prototype.sqrTo = function (t, e) {
                t.squareTo(e), this.reduce(e)
              }),
              t
            )
          })(),
          O = (function () {
            function t(t) {
              ;(this.m = t),
                (this.mp = t.invDigit()),
                (this.mpl = 32767 & this.mp),
                (this.mph = this.mp >> 15),
                (this.um = (1 << (t.DB - 15)) - 1),
                (this.mt2 = 2 * t.t)
            }
            return (
              (t.prototype.convert = function (t) {
                var e = N()
                return (
                  t.abs().dlShiftTo(this.m.t, e),
                  e.divRemTo(this.m, null, e),
                  t.s < 0 && e.compareTo(V.ZERO) > 0 && this.m.subTo(e, e),
                  e
                )
              }),
              (t.prototype.revert = function (t) {
                var e = N()
                return t.copyTo(e), this.reduce(e), e
              }),
              (t.prototype.reduce = function (t) {
                for (; t.t <= this.mt2; ) t[t.t++] = 0
                for (var e = 0; e < this.m.t; ++e) {
                  var i = 32767 & t[e],
                    n =
                      (i * this.mpl +
                        (((i * this.mph + (t[e] >> 15) * this.mpl) & this.um) <<
                          15)) &
                      t.DM
                  for (
                    t[(i = e + this.m.t)] += this.m.am(0, n, t, e, 0, this.m.t);
                    t[i] >= t.DV;

                  )
                    (t[i] -= t.DV), t[++i]++
                }
                t.clamp(),
                  t.drShiftTo(this.m.t, t),
                  t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
              }),
              (t.prototype.mulTo = function (t, e, i) {
                t.multiplyTo(e, i), this.reduce(i)
              }),
              (t.prototype.sqrTo = function (t, e) {
                t.squareTo(e), this.reduce(e)
              }),
              t
            )
          })(),
          I = (function () {
            function t(t) {
              ;(this.m = t),
                (this.r2 = N()),
                (this.q3 = N()),
                V.ONE.dlShiftTo(2 * t.t, this.r2),
                (this.mu = this.r2.divide(t))
            }
            return (
              (t.prototype.convert = function (t) {
                if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m)
                if (t.compareTo(this.m) < 0) return t
                var e = N()
                return t.copyTo(e), this.reduce(e), e
              }),
              (t.prototype.revert = function (t) {
                return t
              }),
              (t.prototype.reduce = function (t) {
                for (
                  t.drShiftTo(this.m.t - 1, this.r2),
                    t.t > this.m.t + 1 && ((t.t = this.m.t + 1), t.clamp()),
                    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                    this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
                  t.compareTo(this.r2) < 0;

                )
                  t.dAddOffset(1, this.m.t + 1)
                for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; )
                  t.subTo(this.m, t)
              }),
              (t.prototype.mulTo = function (t, e, i) {
                t.multiplyTo(e, i), this.reduce(i)
              }),
              (t.prototype.sqrTo = function (t, e) {
                t.squareTo(e), this.reduce(e)
              }),
              t
            )
          })()
        function N() {
          return new V(null)
        }
        function M(t, e) {
          return new V(t, e)
        }
        var H = 'undefined' != typeof navigator
        H && 'Microsoft Internet Explorer' == navigator.appName
          ? ((V.prototype.am = function (t, e, i, n, r, s) {
              for (var o = 32767 & e, a = e >> 15; --s >= 0; ) {
                var h = 32767 & this[t],
                  u = this[t++] >> 15,
                  c = a * h + u * o
                ;(r =
                  ((h =
                    o * h + ((32767 & c) << 15) + i[n] + (1073741823 & r)) >>>
                    30) +
                  (c >>> 15) +
                  a * u +
                  (r >>> 30)),
                  (i[n++] = 1073741823 & h)
              }
              return r
            }),
            (S = 30))
          : H && 'Netscape' != navigator.appName
          ? ((V.prototype.am = function (t, e, i, n, r, s) {
              for (; --s >= 0; ) {
                var o = e * this[t++] + i[n] + r
                ;(r = Math.floor(o / 67108864)), (i[n++] = 67108863 & o)
              }
              return r
            }),
            (S = 26))
          : ((V.prototype.am = function (t, e, i, n, r, s) {
              for (var o = 16383 & e, a = e >> 14; --s >= 0; ) {
                var h = 16383 & this[t],
                  u = this[t++] >> 14,
                  c = a * h + u * o
                ;(r =
                  ((h = o * h + ((16383 & c) << 14) + i[n] + r) >> 28) +
                  (c >> 14) +
                  a * u),
                  (i[n++] = 268435455 & h)
              }
              return r
            }),
            (S = 28)),
          (V.prototype.DB = S),
          (V.prototype.DM = (1 << S) - 1),
          (V.prototype.DV = 1 << S)
        ;(V.prototype.FV = Math.pow(2, 52)),
          (V.prototype.F1 = 52 - S),
          (V.prototype.F2 = 2 * S - 52)
        var q,
          P,
          k = []
        for (q = '0'.charCodeAt(0), P = 0; P <= 9; ++P) k[q++] = P
        for (q = 'a'.charCodeAt(0), P = 10; P < 36; ++P) k[q++] = P
        for (q = 'A'.charCodeAt(0), P = 10; P < 36; ++P) k[q++] = P
        function L(t, e) {
          var i = k[t.charCodeAt(e)]
          return null == i ? -1 : i
        }
        function _(t) {
          var e = N()
          return e.fromInt(t), e
        }
        function j(t) {
          var e,
            i = 1
          return (
            0 != (e = t >>> 16) && ((t = e), (i += 16)),
            0 != (e = t >> 8) && ((t = e), (i += 8)),
            0 != (e = t >> 4) && ((t = e), (i += 4)),
            0 != (e = t >> 2) && ((t = e), (i += 2)),
            0 != (e = t >> 1) && ((t = e), (i += 1)),
            i
          )
        }
        ;(V.ZERO = _(0)), (V.ONE = _(1))
        var U = (function () {
          function t() {
            ;(this.i = 0), (this.j = 0), (this.S = [])
          }
          return (
            (t.prototype.init = function (t) {
              var e, i, n
              for (e = 0; e < 256; ++e) this.S[e] = e
              for (i = 0, e = 0; e < 256; ++e)
                (i = (i + this.S[e] + t[e % t.length]) & 255),
                  (n = this.S[e]),
                  (this.S[e] = this.S[i]),
                  (this.S[i] = n)
              ;(this.i = 0), (this.j = 0)
            }),
            (t.prototype.next = function () {
              var t
              return (
                (this.i = (this.i + 1) & 255),
                (this.j = (this.j + this.S[this.i]) & 255),
                (t = this.S[this.i]),
                (this.S[this.i] = this.S[this.j]),
                (this.S[this.j] = t),
                this.S[(t + this.S[this.i]) & 255]
              )
            }),
            t
          )
        })()
        var F,
          K,
          Z = null
        if (null == Z) {
          ;(Z = []), (K = 0)
          var z = void 0
          if (window.crypto && window.crypto.getRandomValues) {
            var G = new Uint32Array(256)
            for (window.crypto.getRandomValues(G), z = 0; z < G.length; ++z)
              Z[K++] = 255 & G[z]
          }
          var W = 0,
            $ = function (t) {
              if ((W = W || 0) >= 256 || K >= 256)
                window.removeEventListener
                  ? window.removeEventListener('mousemove', $, !1)
                  : window.detachEvent && window.detachEvent('onmousemove', $)
              else
                try {
                  var e = t.x + t.y
                  ;(Z[K++] = 255 & e), (W += 1)
                } catch (t) {}
            }
          window.addEventListener
            ? window.addEventListener('mousemove', $, !1)
            : window.attachEvent && window.attachEvent('onmousemove', $)
        }
        function J() {
          if (null == F) {
            for (F = new U(); K < 256; ) {
              var t = Math.floor(65536 * Math.random())
              Z[K++] = 255 & t
            }
            for (F.init(Z), K = 0; K < Z.length; ++K) Z[K] = 0
            K = 0
          }
          return F.next()
        }
        var Y = (function () {
          function t() {}
          return (
            (t.prototype.nextBytes = function (t) {
              for (var e = 0; e < t.length; ++e) t[e] = J()
            }),
            t
          )
        })()
        var X = (function () {
          function t() {
            ;(this.n = null),
              (this.e = 0),
              (this.d = null),
              (this.p = null),
              (this.q = null),
              (this.dmp1 = null),
              (this.dmq1 = null),
              (this.coeff = null)
          }
          return (
            (t.prototype.doPublic = function (t) {
              return t.modPowInt(this.e, this.n)
            }),
            (t.prototype.doPrivate = function (t) {
              if (null == this.p || null == this.q)
                return t.modPow(this.d, this.n)
              for (
                var e = t.mod(this.p).modPow(this.dmp1, this.p),
                  i = t.mod(this.q).modPow(this.dmq1, this.q);
                e.compareTo(i) < 0;

              )
                e = e.add(this.p)
              return e
                .subtract(i)
                .multiply(this.coeff)
                .mod(this.p)
                .multiply(this.q)
                .add(i)
            }),
            (t.prototype.setPublic = function (t, e) {
              null != t && null != e && t.length > 0 && e.length > 0
                ? ((this.n = M(t, 16)), (this.e = parseInt(e, 16)))
                : console.error('Invalid RSA public key')
            }),
            (t.prototype.encrypt = function (t) {
              var e = (this.n.bitLength() + 7) >> 3,
                i = (function (t, e) {
                  if (e < t.length + 11)
                    return console.error('Message too long for RSA'), null
                  for (var i = [], n = t.length - 1; n >= 0 && e > 0; ) {
                    var r = t.charCodeAt(n--)
                    r < 128
                      ? (i[--e] = r)
                      : r > 127 && r < 2048
                      ? ((i[--e] = (63 & r) | 128), (i[--e] = (r >> 6) | 192))
                      : ((i[--e] = (63 & r) | 128),
                        (i[--e] = ((r >> 6) & 63) | 128),
                        (i[--e] = (r >> 12) | 224))
                  }
                  i[--e] = 0
                  for (var s = new Y(), o = []; e > 2; ) {
                    for (o[0] = 0; 0 == o[0]; ) s.nextBytes(o)
                    i[--e] = o[0]
                  }
                  return (i[--e] = 2), (i[--e] = 0), new V(i)
                })(t, e)
              if (null == i) return null
              var n = this.doPublic(i)
              if (null == n) return null
              for (
                var r = n.toString(16), s = r.length, o = 0;
                o < 2 * e - s;
                o++
              )
                r = '0' + r
              return r
            }),
            (t.prototype.setPrivate = function (t, e, i) {
              null != t && null != e && t.length > 0 && e.length > 0
                ? ((this.n = M(t, 16)),
                  (this.e = parseInt(e, 16)),
                  (this.d = M(i, 16)))
                : console.error('Invalid RSA private key')
            }),
            (t.prototype.setPrivateEx = function (t, e, i, n, r, s, o, a) {
              null != t && null != e && t.length > 0 && e.length > 0
                ? ((this.n = M(t, 16)),
                  (this.e = parseInt(e, 16)),
                  (this.d = M(i, 16)),
                  (this.p = M(n, 16)),
                  (this.q = M(r, 16)),
                  (this.dmp1 = M(s, 16)),
                  (this.dmq1 = M(o, 16)),
                  (this.coeff = M(a, 16)))
                : console.error('Invalid RSA private key')
            }),
            (t.prototype.generate = function (t, e) {
              var i = new Y(),
                n = t >> 1
              this.e = parseInt(e, 16)
              for (var r = new V(e, 16); ; ) {
                for (
                  ;
                  (this.p = new V(t - n, 1, i)),
                    0 != this.p.subtract(V.ONE).gcd(r).compareTo(V.ONE) ||
                      !this.p.isProbablePrime(10);

                );
                for (
                  ;
                  (this.q = new V(n, 1, i)),
                    0 != this.q.subtract(V.ONE).gcd(r).compareTo(V.ONE) ||
                      !this.q.isProbablePrime(10);

                );
                if (this.p.compareTo(this.q) <= 0) {
                  var s = this.p
                  ;(this.p = this.q), (this.q = s)
                }
                var o = this.p.subtract(V.ONE),
                  a = this.q.subtract(V.ONE),
                  h = o.multiply(a)
                if (0 == h.gcd(r).compareTo(V.ONE)) {
                  ;(this.n = this.p.multiply(this.q)),
                    (this.d = r.modInverse(h)),
                    (this.dmp1 = this.d.mod(o)),
                    (this.dmq1 = this.d.mod(a)),
                    (this.coeff = this.q.modInverse(this.p))
                  break
                }
              }
            }),
            (t.prototype.decrypt = function (t) {
              var e = M(t, 16),
                i = this.doPrivate(e)
              return null == i
                ? null
                : (function (t, e) {
                    var i = t.toByteArray(),
                      n = 0
                    for (; n < i.length && 0 == i[n]; ) ++n
                    if (i.length - n != e - 1 || 2 != i[n]) return null
                    ++n
                    for (; 0 != i[n]; ) if (++n >= i.length) return null
                    var r = ''
                    for (; ++n < i.length; ) {
                      var s = 255 & i[n]
                      s < 128
                        ? (r += String.fromCharCode(s))
                        : s > 191 && s < 224
                        ? ((r += String.fromCharCode(
                            ((31 & s) << 6) | (63 & i[n + 1])
                          )),
                          ++n)
                        : ((r += String.fromCharCode(
                            ((15 & s) << 12) |
                              ((63 & i[n + 1]) << 6) |
                              (63 & i[n + 2])
                          )),
                          (n += 2))
                    }
                    return r
                  })(i, (this.n.bitLength() + 7) >> 3)
            }),
            (t.prototype.generateAsync = function (t, e, i) {
              var n = new Y(),
                r = t >> 1
              this.e = parseInt(e, 16)
              var s = new V(e, 16),
                o = this,
                a = function () {
                  var e = function () {
                      if (o.p.compareTo(o.q) <= 0) {
                        var t = o.p
                        ;(o.p = o.q), (o.q = t)
                      }
                      var e = o.p.subtract(V.ONE),
                        n = o.q.subtract(V.ONE),
                        r = e.multiply(n)
                      0 == r.gcd(s).compareTo(V.ONE)
                        ? ((o.n = o.p.multiply(o.q)),
                          (o.d = s.modInverse(r)),
                          (o.dmp1 = o.d.mod(e)),
                          (o.dmq1 = o.d.mod(n)),
                          (o.coeff = o.q.modInverse(o.p)),
                          setTimeout(function () {
                            i()
                          }, 0))
                        : setTimeout(a, 0)
                    },
                    h = function () {
                      ;(o.q = N()),
                        o.q.fromNumberAsync(r, 1, n, function () {
                          o.q.subtract(V.ONE).gcda(s, function (t) {
                            0 == t.compareTo(V.ONE) && o.q.isProbablePrime(10)
                              ? setTimeout(e, 0)
                              : setTimeout(h, 0)
                          })
                        })
                    },
                    u = function () {
                      ;(o.p = N()),
                        o.p.fromNumberAsync(t - r, 1, n, function () {
                          o.p.subtract(V.ONE).gcda(s, function (t) {
                            0 == t.compareTo(V.ONE) && o.p.isProbablePrime(10)
                              ? setTimeout(h, 0)
                              : setTimeout(u, 0)
                          })
                        })
                    }
                  setTimeout(u, 0)
                }
              setTimeout(a, 0)
            }),
            (t.prototype.sign = function (t, e, i) {
              var n = (function (t, e) {
                if (e < t.length + 22)
                  return console.error('Message too long for RSA'), null
                for (var i = e - t.length - 6, n = '', r = 0; r < i; r += 2)
                  n += 'ff'
                return M('0001' + n + '00' + t, 16)
              })((Q[i] || '') + e(t).toString(), this.n.bitLength() / 4)
              if (null == n) return null
              var r = this.doPrivate(n)
              if (null == r) return null
              var s = r.toString(16)
              return 0 == (1 & s.length) ? s : '0' + s
            }),
            (t.prototype.verify = function (t, e, i) {
              var n = M(e, 16),
                r = this.doPublic(n)
              return null == r
                ? null
                : (function (t) {
                    for (var e in Q)
                      if (Q.hasOwnProperty(e)) {
                        var i = Q[e],
                          n = i.length
                        if (t.substr(0, n) == i) return t.substr(n)
                      }
                    return t
                  })(r.toString(16).replace(/^1f+00/, '')) == i(t).toString()
            }),
            t
          )
        })()
        var Q = {
          md2: '3020300c06082a864886f70d020205000410',
          md5: '3020300c06082a864886f70d020505000410',
          sha1: '3021300906052b0e03021a05000414',
          sha224: '302d300d06096086480165030402040500041c',
          sha256: '3031300d060960864801650304020105000420',
          sha384: '3041300d060960864801650304020205000430',
          sha512: '3051300d060960864801650304020305000440',
          ripemd160: '3021300906052b2403020105000414',
        }
        var tt = {}
        tt.lang = {
          extend: function (t, e, i) {
            if (!e || !t)
              throw new Error(
                'YAHOO.lang.extend failed, please check that all dependencies are included.'
              )
            var n = function () {}
            if (
              ((n.prototype = e.prototype),
              (t.prototype = new n()),
              (t.prototype.constructor = t),
              (t.superclass = e.prototype),
              e.prototype.constructor == Object.prototype.constructor &&
                (e.prototype.constructor = e),
              i)
            ) {
              var r
              for (r in i) t.prototype[r] = i[r]
              var s = function () {},
                o = ['toString', 'valueOf']
              try {
                ;/MSIE/.test(navigator.userAgent) &&
                  (s = function (t, e) {
                    for (r = 0; r < o.length; r += 1) {
                      var i = o[r],
                        n = e[i]
                      'function' == typeof n &&
                        n != Object.prototype[i] &&
                        (t[i] = n)
                    }
                  })
              } catch (t) {}
              s(t.prototype, i)
            }
          },
        }
        var et = {}
        ;(void 0 !== et.asn1 && et.asn1) || (et.asn1 = {}),
          (et.asn1.ASN1Util = new (function () {
            ;(this.integerToByteHex = function (t) {
              var e = t.toString(16)
              return e.length % 2 == 1 && (e = '0' + e), e
            }),
              (this.bigIntToMinTwosComplementsHex = function (t) {
                var e = t.toString(16)
                if ('-' != e.substr(0, 1))
                  e.length % 2 == 1
                    ? (e = '0' + e)
                    : e.match(/^[0-7]/) || (e = '00' + e)
                else {
                  var i = e.substr(1).length
                  i % 2 == 1 ? (i += 1) : e.match(/^[0-7]/) || (i += 2)
                  for (var n = '', r = 0; r < i; r++) n += 'f'
                  e = new V(n, 16)
                    .xor(t)
                    .add(V.ONE)
                    .toString(16)
                    .replace(/^-/, '')
                }
                return e
              }),
              (this.getPEMStringFromHex = function (t, e) {
                return hextopem(t, e)
              }),
              (this.newObject = function (t) {
                var e = et.asn1,
                  i = e.DERBoolean,
                  n = e.DERInteger,
                  r = e.DERBitString,
                  s = e.DEROctetString,
                  o = e.DERNull,
                  a = e.DERObjectIdentifier,
                  h = e.DEREnumerated,
                  u = e.DERUTF8String,
                  c = e.DERNumericString,
                  l = e.DERPrintableString,
                  p = e.DERTeletexString,
                  f = e.DERIA5String,
                  d = e.DERUTCTime,
                  g = e.DERGeneralizedTime,
                  m = e.DERSequence,
                  y = e.DERSet,
                  v = e.DERTaggedObject,
                  b = e.ASN1Util.newObject,
                  w = Object.keys(t)
                if (1 != w.length) throw 'key of param shall be only one.'
                var C = w[0]
                if (
                  -1 ==
                  ':bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:'.indexOf(
                    ':' + C + ':'
                  )
                )
                  throw 'undefined key: ' + C
                if ('bool' == C) return new i(t[C])
                if ('int' == C) return new n(t[C])
                if ('bitstr' == C) return new r(t[C])
                if ('octstr' == C) return new s(t[C])
                if ('null' == C) return new o(t[C])
                if ('oid' == C) return new a(t[C])
                if ('enum' == C) return new h(t[C])
                if ('utf8str' == C) return new u(t[C])
                if ('numstr' == C) return new c(t[C])
                if ('prnstr' == C) return new l(t[C])
                if ('telstr' == C) return new p(t[C])
                if ('ia5str' == C) return new f(t[C])
                if ('utctime' == C) return new d(t[C])
                if ('gentime' == C) return new g(t[C])
                if ('seq' == C) {
                  for (var S = t[C], T = [], E = 0; E < S.length; E++) {
                    var D = b(S[E])
                    T.push(D)
                  }
                  return new m({ array: T })
                }
                if ('set' == C) {
                  for (S = t[C], T = [], E = 0; E < S.length; E++) {
                    D = b(S[E])
                    T.push(D)
                  }
                  return new y({ array: T })
                }
                if ('tag' == C) {
                  var x = t[C]
                  if (
                    '[object Array]' === Object.prototype.toString.call(x) &&
                    3 == x.length
                  ) {
                    var A = b(x[2])
                    return new v({ tag: x[0], explicit: x[1], obj: A })
                  }
                  var V = {}
                  if (
                    (void 0 !== x.explicit && (V.explicit = x.explicit),
                    void 0 !== x.tag && (V.tag = x.tag),
                    void 0 === x.obj)
                  )
                    throw "obj shall be specified for 'tag'."
                  return (V.obj = b(x.obj)), new v(V)
                }
              }),
              (this.jsonToASN1HEX = function (t) {
                return this.newObject(t).getEncodedHex()
              })
          })()),
          (et.asn1.ASN1Util.oidHexToInt = function (t) {
            for (
              var e = '',
                i = parseInt(t.substr(0, 2), 16),
                n = ((e = Math.floor(i / 40) + '.' + (i % 40)), ''),
                r = 2;
              r < t.length;
              r += 2
            ) {
              var s = (
                '00000000' + parseInt(t.substr(r, 2), 16).toString(2)
              ).slice(-8)
              if (((n += s.substr(1, 7)), '0' == s.substr(0, 1)))
                (e = e + '.' + new V(n, 2).toString(10)), (n = '')
            }
            return e
          }),
          (et.asn1.ASN1Util.oidIntToHex = function (t) {
            var e = function (t) {
                var e = t.toString(16)
                return 1 == e.length && (e = '0' + e), e
              },
              i = function (t) {
                var i = '',
                  n = new V(t, 10).toString(2),
                  r = 7 - (n.length % 7)
                7 == r && (r = 0)
                for (var s = '', o = 0; o < r; o++) s += '0'
                n = s + n
                for (o = 0; o < n.length - 1; o += 7) {
                  var a = n.substr(o, 7)
                  o != n.length - 7 && (a = '1' + a), (i += e(parseInt(a, 2)))
                }
                return i
              }
            if (!t.match(/^[0-9.]+$/)) throw 'malformed oid string: ' + t
            var n = '',
              r = t.split('.'),
              s = 40 * parseInt(r[0]) + parseInt(r[1])
            ;(n += e(s)), r.splice(0, 2)
            for (var o = 0; o < r.length; o++) n += i(r[o])
            return n
          }),
          (et.asn1.ASN1Object = function () {
            ;(this.getLengthHexFromValue = function () {
              if (void 0 === this.hV || null == this.hV)
                throw 'this.hV is null or undefined.'
              if (this.hV.length % 2 == 1)
                throw (
                  'value hex must be even length: n=' +
                  ''.length +
                  ',v=' +
                  this.hV
                )
              var t = this.hV.length / 2,
                e = t.toString(16)
              if ((e.length % 2 == 1 && (e = '0' + e), t < 128)) return e
              var i = e.length / 2
              if (i > 15)
                throw (
                  'ASN.1 length too long to represent by 8x: n = ' +
                  t.toString(16)
                )
              return (128 + i).toString(16) + e
            }),
              (this.getEncodedHex = function () {
                return (
                  (null == this.hTLV || this.isModified) &&
                    ((this.hV = this.getFreshValueHex()),
                    (this.hL = this.getLengthHexFromValue()),
                    (this.hTLV = this.hT + this.hL + this.hV),
                    (this.isModified = !1)),
                  this.hTLV
                )
              }),
              (this.getValueHex = function () {
                return this.getEncodedHex(), this.hV
              }),
              (this.getFreshValueHex = function () {
                return ''
              })
          }),
          (et.asn1.DERAbstractString = function (t) {
            et.asn1.DERAbstractString.superclass.constructor.call(this)
            ;(this.getString = function () {
              return this.s
            }),
              (this.setString = function (t) {
                ;(this.hTLV = null),
                  (this.isModified = !0),
                  (this.s = t),
                  (this.hV = stohex(this.s))
              }),
              (this.setStringHex = function (t) {
                ;(this.hTLV = null),
                  (this.isModified = !0),
                  (this.s = null),
                  (this.hV = t)
              }),
              (this.getFreshValueHex = function () {
                return this.hV
              }),
              void 0 !== t &&
                ('string' == typeof t
                  ? this.setString(t)
                  : void 0 !== t.str
                  ? this.setString(t.str)
                  : void 0 !== t.hex && this.setStringHex(t.hex))
          }),
          tt.lang.extend(et.asn1.DERAbstractString, et.asn1.ASN1Object),
          (et.asn1.DERAbstractTime = function (t) {
            et.asn1.DERAbstractTime.superclass.constructor.call(this)
            ;(this.localDateToUTC = function (t) {
              return (
                (utc = t.getTime() + 6e4 * t.getTimezoneOffset()), new Date(utc)
              )
            }),
              (this.formatDate = function (t, e, i) {
                var n = this.zeroPadding,
                  r = this.localDateToUTC(t),
                  s = String(r.getFullYear())
                'utc' == e && (s = s.substr(2, 2))
                var o =
                  s +
                  n(String(r.getMonth() + 1), 2) +
                  n(String(r.getDate()), 2) +
                  n(String(r.getHours()), 2) +
                  n(String(r.getMinutes()), 2) +
                  n(String(r.getSeconds()), 2)
                if (!0 === i) {
                  var a = r.getMilliseconds()
                  if (0 != a) {
                    var h = n(String(a), 3)
                    o = o + '.' + (h = h.replace(/[0]+$/, ''))
                  }
                }
                return o + 'Z'
              }),
              (this.zeroPadding = function (t, e) {
                return t.length >= e
                  ? t
                  : new Array(e - t.length + 1).join('0') + t
              }),
              (this.getString = function () {
                return this.s
              }),
              (this.setString = function (t) {
                ;(this.hTLV = null),
                  (this.isModified = !0),
                  (this.s = t),
                  (this.hV = stohex(t))
              }),
              (this.setByDateValue = function (t, e, i, n, r, s) {
                var o = new Date(Date.UTC(t, e - 1, i, n, r, s, 0))
                this.setByDate(o)
              }),
              (this.getFreshValueHex = function () {
                return this.hV
              })
          }),
          tt.lang.extend(et.asn1.DERAbstractTime, et.asn1.ASN1Object),
          (et.asn1.DERAbstractStructured = function (t) {
            et.asn1.DERAbstractString.superclass.constructor.call(this)
            ;(this.setByASN1ObjectArray = function (t) {
              ;(this.hTLV = null), (this.isModified = !0), (this.asn1Array = t)
            }),
              (this.appendASN1Object = function (t) {
                ;(this.hTLV = null),
                  (this.isModified = !0),
                  this.asn1Array.push(t)
              }),
              (this.asn1Array = new Array()),
              void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array)
          }),
          tt.lang.extend(et.asn1.DERAbstractStructured, et.asn1.ASN1Object),
          (et.asn1.DERBoolean = function () {
            et.asn1.DERBoolean.superclass.constructor.call(this),
              (this.hT = '01'),
              (this.hTLV = '0101ff')
          }),
          tt.lang.extend(et.asn1.DERBoolean, et.asn1.ASN1Object),
          (et.asn1.DERInteger = function (t) {
            et.asn1.DERInteger.superclass.constructor.call(this),
              (this.hT = '02'),
              (this.setByBigInteger = function (t) {
                ;(this.hTLV = null),
                  (this.isModified = !0),
                  (this.hV = et.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t))
              }),
              (this.setByInteger = function (t) {
                var e = new V(String(t), 10)
                this.setByBigInteger(e)
              }),
              (this.setValueHex = function (t) {
                this.hV = t
              }),
              (this.getFreshValueHex = function () {
                return this.hV
              }),
              void 0 !== t &&
                (void 0 !== t.bigint
                  ? this.setByBigInteger(t.bigint)
                  : void 0 !== t.int
                  ? this.setByInteger(t.int)
                  : 'number' == typeof t
                  ? this.setByInteger(t)
                  : void 0 !== t.hex && this.setValueHex(t.hex))
          }),
          tt.lang.extend(et.asn1.DERInteger, et.asn1.ASN1Object),
          (et.asn1.DERBitString = function (t) {
            if (void 0 !== t && void 0 !== t.obj) {
              var e = et.asn1.ASN1Util.newObject(t.obj)
              t.hex = '00' + e.getEncodedHex()
            }
            et.asn1.DERBitString.superclass.constructor.call(this),
              (this.hT = '03'),
              (this.setHexValueIncludingUnusedBits = function (t) {
                ;(this.hTLV = null), (this.isModified = !0), (this.hV = t)
              }),
              (this.setUnusedBitsAndHexValue = function (t, e) {
                if (t < 0 || 7 < t)
                  throw 'unused bits shall be from 0 to 7: u = ' + t
                var i = '0' + t
                ;(this.hTLV = null), (this.isModified = !0), (this.hV = i + e)
              }),
              (this.setByBinaryString = function (t) {
                var e = 8 - ((t = t.replace(/0+$/, '')).length % 8)
                8 == e && (e = 0)
                for (var i = 0; i <= e; i++) t += '0'
                var n = ''
                for (i = 0; i < t.length - 1; i += 8) {
                  var r = t.substr(i, 8),
                    s = parseInt(r, 2).toString(16)
                  1 == s.length && (s = '0' + s), (n += s)
                }
                ;(this.hTLV = null),
                  (this.isModified = !0),
                  (this.hV = '0' + e + n)
              }),
              (this.setByBooleanArray = function (t) {
                for (var e = '', i = 0; i < t.length; i++)
                  1 == t[i] ? (e += '1') : (e += '0')
                this.setByBinaryString(e)
              }),
              (this.newFalseArray = function (t) {
                for (var e = new Array(t), i = 0; i < t; i++) e[i] = !1
                return e
              }),
              (this.getFreshValueHex = function () {
                return this.hV
              }),
              void 0 !== t &&
                ('string' == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/)
                  ? this.setHexValueIncludingUnusedBits(t)
                  : void 0 !== t.hex
                  ? this.setHexValueIncludingUnusedBits(t.hex)
                  : void 0 !== t.bin
                  ? this.setByBinaryString(t.bin)
                  : void 0 !== t.array && this.setByBooleanArray(t.array))
          }),
          tt.lang.extend(et.asn1.DERBitString, et.asn1.ASN1Object),
          (et.asn1.DEROctetString = function (t) {
            if (void 0 !== t && void 0 !== t.obj) {
              var e = et.asn1.ASN1Util.newObject(t.obj)
              t.hex = e.getEncodedHex()
            }
            et.asn1.DEROctetString.superclass.constructor.call(this, t),
              (this.hT = '04')
          }),
          tt.lang.extend(et.asn1.DEROctetString, et.asn1.DERAbstractString),
          (et.asn1.DERNull = function () {
            et.asn1.DERNull.superclass.constructor.call(this),
              (this.hT = '05'),
              (this.hTLV = '0500')
          }),
          tt.lang.extend(et.asn1.DERNull, et.asn1.ASN1Object),
          (et.asn1.DERObjectIdentifier = function (t) {
            var e = function (t) {
                var e = t.toString(16)
                return 1 == e.length && (e = '0' + e), e
              },
              i = function (t) {
                var i = '',
                  n = new V(t, 10).toString(2),
                  r = 7 - (n.length % 7)
                7 == r && (r = 0)
                for (var s = '', o = 0; o < r; o++) s += '0'
                n = s + n
                for (o = 0; o < n.length - 1; o += 7) {
                  var a = n.substr(o, 7)
                  o != n.length - 7 && (a = '1' + a), (i += e(parseInt(a, 2)))
                }
                return i
              }
            et.asn1.DERObjectIdentifier.superclass.constructor.call(this),
              (this.hT = '06'),
              (this.setValueHex = function (t) {
                ;(this.hTLV = null),
                  (this.isModified = !0),
                  (this.s = null),
                  (this.hV = t)
              }),
              (this.setValueOidString = function (t) {
                if (!t.match(/^[0-9.]+$/)) throw 'malformed oid string: ' + t
                var n = '',
                  r = t.split('.'),
                  s = 40 * parseInt(r[0]) + parseInt(r[1])
                ;(n += e(s)), r.splice(0, 2)
                for (var o = 0; o < r.length; o++) n += i(r[o])
                ;(this.hTLV = null),
                  (this.isModified = !0),
                  (this.s = null),
                  (this.hV = n)
              }),
              (this.setValueName = function (t) {
                var e = et.asn1.x509.OID.name2oid(t)
                if ('' === e)
                  throw 'DERObjectIdentifier oidName undefined: ' + t
                this.setValueOidString(e)
              }),
              (this.getFreshValueHex = function () {
                return this.hV
              }),
              void 0 !== t &&
                ('string' == typeof t
                  ? t.match(/^[0-2].[0-9.]+$/)
                    ? this.setValueOidString(t)
                    : this.setValueName(t)
                  : void 0 !== t.oid
                  ? this.setValueOidString(t.oid)
                  : void 0 !== t.hex
                  ? this.setValueHex(t.hex)
                  : void 0 !== t.name && this.setValueName(t.name))
          }),
          tt.lang.extend(et.asn1.DERObjectIdentifier, et.asn1.ASN1Object),
          (et.asn1.DEREnumerated = function (t) {
            et.asn1.DEREnumerated.superclass.constructor.call(this),
              (this.hT = '0a'),
              (this.setByBigInteger = function (t) {
                ;(this.hTLV = null),
                  (this.isModified = !0),
                  (this.hV = et.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t))
              }),
              (this.setByInteger = function (t) {
                var e = new V(String(t), 10)
                this.setByBigInteger(e)
              }),
              (this.setValueHex = function (t) {
                this.hV = t
              }),
              (this.getFreshValueHex = function () {
                return this.hV
              }),
              void 0 !== t &&
                (void 0 !== t.int
                  ? this.setByInteger(t.int)
                  : 'number' == typeof t
                  ? this.setByInteger(t)
                  : void 0 !== t.hex && this.setValueHex(t.hex))
          }),
          tt.lang.extend(et.asn1.DEREnumerated, et.asn1.ASN1Object),
          (et.asn1.DERUTF8String = function (t) {
            et.asn1.DERUTF8String.superclass.constructor.call(this, t),
              (this.hT = '0c')
          }),
          tt.lang.extend(et.asn1.DERUTF8String, et.asn1.DERAbstractString),
          (et.asn1.DERNumericString = function (t) {
            et.asn1.DERNumericString.superclass.constructor.call(this, t),
              (this.hT = '12')
          }),
          tt.lang.extend(et.asn1.DERNumericString, et.asn1.DERAbstractString),
          (et.asn1.DERPrintableString = function (t) {
            et.asn1.DERPrintableString.superclass.constructor.call(this, t),
              (this.hT = '13')
          }),
          tt.lang.extend(et.asn1.DERPrintableString, et.asn1.DERAbstractString),
          (et.asn1.DERTeletexString = function (t) {
            et.asn1.DERTeletexString.superclass.constructor.call(this, t),
              (this.hT = '14')
          }),
          tt.lang.extend(et.asn1.DERTeletexString, et.asn1.DERAbstractString),
          (et.asn1.DERIA5String = function (t) {
            et.asn1.DERIA5String.superclass.constructor.call(this, t),
              (this.hT = '16')
          }),
          tt.lang.extend(et.asn1.DERIA5String, et.asn1.DERAbstractString),
          (et.asn1.DERUTCTime = function (t) {
            et.asn1.DERUTCTime.superclass.constructor.call(this, t),
              (this.hT = '17'),
              (this.setByDate = function (t) {
                ;(this.hTLV = null),
                  (this.isModified = !0),
                  (this.date = t),
                  (this.s = this.formatDate(this.date, 'utc')),
                  (this.hV = stohex(this.s))
              }),
              (this.getFreshValueHex = function () {
                return (
                  void 0 === this.date &&
                    void 0 === this.s &&
                    ((this.date = new Date()),
                    (this.s = this.formatDate(this.date, 'utc')),
                    (this.hV = stohex(this.s))),
                  this.hV
                )
              }),
              void 0 !== t &&
                (void 0 !== t.str
                  ? this.setString(t.str)
                  : 'string' == typeof t && t.match(/^[0-9]{12}Z$/)
                  ? this.setString(t)
                  : void 0 !== t.hex
                  ? this.setStringHex(t.hex)
                  : void 0 !== t.date && this.setByDate(t.date))
          }),
          tt.lang.extend(et.asn1.DERUTCTime, et.asn1.DERAbstractTime),
          (et.asn1.DERGeneralizedTime = function (t) {
            et.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
              (this.hT = '18'),
              (this.withMillis = !1),
              (this.setByDate = function (t) {
                ;(this.hTLV = null),
                  (this.isModified = !0),
                  (this.date = t),
                  (this.s = this.formatDate(this.date, 'gen', this.withMillis)),
                  (this.hV = stohex(this.s))
              }),
              (this.getFreshValueHex = function () {
                return (
                  void 0 === this.date &&
                    void 0 === this.s &&
                    ((this.date = new Date()),
                    (this.s = this.formatDate(
                      this.date,
                      'gen',
                      this.withMillis
                    )),
                    (this.hV = stohex(this.s))),
                  this.hV
                )
              }),
              void 0 !== t &&
                (void 0 !== t.str
                  ? this.setString(t.str)
                  : 'string' == typeof t && t.match(/^[0-9]{14}Z$/)
                  ? this.setString(t)
                  : void 0 !== t.hex
                  ? this.setStringHex(t.hex)
                  : void 0 !== t.date && this.setByDate(t.date),
                !0 === t.millis && (this.withMillis = !0))
          }),
          tt.lang.extend(et.asn1.DERGeneralizedTime, et.asn1.DERAbstractTime),
          (et.asn1.DERSequence = function (t) {
            et.asn1.DERSequence.superclass.constructor.call(this, t),
              (this.hT = '30'),
              (this.getFreshValueHex = function () {
                for (var t = '', e = 0; e < this.asn1Array.length; e++) {
                  t += this.asn1Array[e].getEncodedHex()
                }
                return (this.hV = t), this.hV
              })
          }),
          tt.lang.extend(et.asn1.DERSequence, et.asn1.DERAbstractStructured),
          (et.asn1.DERSet = function (t) {
            et.asn1.DERSet.superclass.constructor.call(this, t),
              (this.hT = '31'),
              (this.sortFlag = !0),
              (this.getFreshValueHex = function () {
                for (
                  var t = new Array(), e = 0;
                  e < this.asn1Array.length;
                  e++
                ) {
                  var i = this.asn1Array[e]
                  t.push(i.getEncodedHex())
                }
                return (
                  1 == this.sortFlag && t.sort(),
                  (this.hV = t.join('')),
                  this.hV
                )
              }),
              void 0 !== t &&
                void 0 !== t.sortflag &&
                0 == t.sortflag &&
                (this.sortFlag = !1)
          }),
          tt.lang.extend(et.asn1.DERSet, et.asn1.DERAbstractStructured),
          (et.asn1.DERTaggedObject = function (t) {
            et.asn1.DERTaggedObject.superclass.constructor.call(this),
              (this.hT = 'a0'),
              (this.hV = ''),
              (this.isExplicit = !0),
              (this.asn1Object = null),
              (this.setASN1Object = function (t, e, i) {
                ;(this.hT = e),
                  (this.isExplicit = t),
                  (this.asn1Object = i),
                  this.isExplicit
                    ? ((this.hV = this.asn1Object.getEncodedHex()),
                      (this.hTLV = null),
                      (this.isModified = !0))
                    : ((this.hV = null),
                      (this.hTLV = i.getEncodedHex()),
                      (this.hTLV = this.hTLV.replace(/^../, e)),
                      (this.isModified = !1))
              }),
              (this.getFreshValueHex = function () {
                return this.hV
              }),
              void 0 !== t &&
                (void 0 !== t.tag && (this.hT = t.tag),
                void 0 !== t.explicit && (this.isExplicit = t.explicit),
                void 0 !== t.obj &&
                  ((this.asn1Object = t.obj),
                  this.setASN1Object(
                    this.isExplicit,
                    this.hT,
                    this.asn1Object
                  )))
          }),
          tt.lang.extend(et.asn1.DERTaggedObject, et.asn1.ASN1Object)
        var it,
          nt =
            ((it = function (t, e) {
              return (it =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e
                  }) ||
                function (t, e) {
                  for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                })(t, e)
            }),
            function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Class extends value ' +
                    String(e) +
                    ' is not a constructor or null'
                )
              function i() {
                this.constructor = t
              }
              it(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((i.prototype = e.prototype), new i()))
            }),
          rt = (function (t) {
            function e(i) {
              var n = t.call(this) || this
              return (
                i &&
                  ('string' == typeof i
                    ? n.parseKey(i)
                    : (e.hasPrivateKeyProperty(i) ||
                        e.hasPublicKeyProperty(i)) &&
                      n.parsePropertiesFrom(i)),
                n
              )
            }
            return (
              nt(e, t),
              (e.prototype.parseKey = function (t) {
                try {
                  var e = 0,
                    i = 0,
                    n = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t)
                      ? g(t)
                      : m.unarmor(t),
                    r = E.decode(n)
                  if (
                    (3 === r.sub.length && (r = r.sub[2].sub[0]),
                    9 === r.sub.length)
                  ) {
                    ;(e = r.sub[1].getHexStringValue()),
                      (this.n = M(e, 16)),
                      (i = r.sub[2].getHexStringValue()),
                      (this.e = parseInt(i, 16))
                    var s = r.sub[3].getHexStringValue()
                    this.d = M(s, 16)
                    var o = r.sub[4].getHexStringValue()
                    this.p = M(o, 16)
                    var a = r.sub[5].getHexStringValue()
                    this.q = M(a, 16)
                    var h = r.sub[6].getHexStringValue()
                    this.dmp1 = M(h, 16)
                    var u = r.sub[7].getHexStringValue()
                    this.dmq1 = M(u, 16)
                    var c = r.sub[8].getHexStringValue()
                    this.coeff = M(c, 16)
                  } else {
                    if (2 !== r.sub.length) return !1
                    var l = r.sub[1].sub[0]
                    ;(e = l.sub[0].getHexStringValue()),
                      (this.n = M(e, 16)),
                      (i = l.sub[1].getHexStringValue()),
                      (this.e = parseInt(i, 16))
                  }
                  return !0
                } catch (t) {
                  return !1
                }
              }),
              (e.prototype.getPrivateBaseKey = function () {
                var t = {
                  array: [
                    new et.asn1.DERInteger({ int: 0 }),
                    new et.asn1.DERInteger({ bigint: this.n }),
                    new et.asn1.DERInteger({ int: this.e }),
                    new et.asn1.DERInteger({ bigint: this.d }),
                    new et.asn1.DERInteger({ bigint: this.p }),
                    new et.asn1.DERInteger({ bigint: this.q }),
                    new et.asn1.DERInteger({ bigint: this.dmp1 }),
                    new et.asn1.DERInteger({ bigint: this.dmq1 }),
                    new et.asn1.DERInteger({ bigint: this.coeff }),
                  ],
                }
                return new et.asn1.DERSequence(t).getEncodedHex()
              }),
              (e.prototype.getPrivateBaseKeyB64 = function () {
                return p(this.getPrivateBaseKey())
              }),
              (e.prototype.getPublicBaseKey = function () {
                var t = new et.asn1.DERSequence({
                    array: [
                      new et.asn1.DERObjectIdentifier({
                        oid: '1.2.840.113549.1.1.1',
                      }),
                      new et.asn1.DERNull(),
                    ],
                  }),
                  e = new et.asn1.DERSequence({
                    array: [
                      new et.asn1.DERInteger({ bigint: this.n }),
                      new et.asn1.DERInteger({ int: this.e }),
                    ],
                  }),
                  i = new et.asn1.DERBitString({
                    hex: '00' + e.getEncodedHex(),
                  })
                return new et.asn1.DERSequence({
                  array: [t, i],
                }).getEncodedHex()
              }),
              (e.prototype.getPublicBaseKeyB64 = function () {
                return p(this.getPublicBaseKey())
              }),
              (e.wordwrap = function (t, e) {
                if (!t) return t
                var i = '(.{1,' + (e = e || 64) + '})( +|$\n?)|(.{1,' + e + '})'
                return t.match(RegExp(i, 'g')).join('\n')
              }),
              (e.prototype.getPrivateKey = function () {
                var t = '-----BEGIN RSA PRIVATE KEY-----\n'
                return (
                  (t += e.wordwrap(this.getPrivateBaseKeyB64()) + '\n'),
                  (t += '-----END RSA PRIVATE KEY-----')
                )
              }),
              (e.prototype.getPublicKey = function () {
                var t = '-----BEGIN PUBLIC KEY-----\n'
                return (
                  (t += e.wordwrap(this.getPublicBaseKeyB64()) + '\n'),
                  (t += '-----END PUBLIC KEY-----')
                )
              }),
              (e.hasPublicKeyProperty = function (t) {
                return (
                  (t = t || {}).hasOwnProperty('n') && t.hasOwnProperty('e')
                )
              }),
              (e.hasPrivateKeyProperty = function (t) {
                return (
                  (t = t || {}).hasOwnProperty('n') &&
                  t.hasOwnProperty('e') &&
                  t.hasOwnProperty('d') &&
                  t.hasOwnProperty('p') &&
                  t.hasOwnProperty('q') &&
                  t.hasOwnProperty('dmp1') &&
                  t.hasOwnProperty('dmq1') &&
                  t.hasOwnProperty('coeff')
                )
              }),
              (e.prototype.parsePropertiesFrom = function (t) {
                ;(this.n = t.n),
                  (this.e = t.e),
                  t.hasOwnProperty('d') &&
                    ((this.d = t.d),
                    (this.p = t.p),
                    (this.q = t.q),
                    (this.dmp1 = t.dmp1),
                    (this.dmq1 = t.dmq1),
                    (this.coeff = t.coeff))
              }),
              e
            )
          })(X),
          st = i(1),
          ot = (function () {
            function t(t) {
              void 0 === t && (t = {}),
                (t = t || {}),
                (this.default_key_size = t.default_key_size
                  ? parseInt(t.default_key_size, 10)
                  : 1024),
                (this.default_public_exponent =
                  t.default_public_exponent || '010001'),
                (this.log = t.log || !1),
                (this.key = null)
            }
            return (
              (t.prototype.setKey = function (t) {
                this.log &&
                  this.key &&
                  console.warn('A key was already set, overriding existing.'),
                  (this.key = new rt(t))
              }),
              (t.prototype.setPrivateKey = function (t) {
                this.setKey(t)
              }),
              (t.prototype.setPublicKey = function (t) {
                this.setKey(t)
              }),
              (t.prototype.decrypt = function (t) {
                try {
                  return this.getKey().decrypt(f(t))
                } catch (t) {
                  return !1
                }
              }),
              (t.prototype.encrypt = function (t) {
                try {
                  return p(this.getKey().encrypt(t))
                } catch (t) {
                  return !1
                }
              }),
              (t.prototype.sign = function (t, e, i) {
                try {
                  return p(this.getKey().sign(t, e, i))
                } catch (t) {
                  return !1
                }
              }),
              (t.prototype.verify = function (t, e, i) {
                try {
                  return this.getKey().verify(t, f(e), i)
                } catch (t) {
                  return !1
                }
              }),
              (t.prototype.getKey = function (t) {
                if (!this.key) {
                  if (
                    ((this.key = new rt()),
                    t && '[object Function]' === {}.toString.call(t))
                  )
                    return void this.key.generateAsync(
                      this.default_key_size,
                      this.default_public_exponent,
                      t
                    )
                  this.key.generate(
                    this.default_key_size,
                    this.default_public_exponent
                  )
                }
                return this.key
              }),
              (t.prototype.getPrivateKey = function () {
                return this.getKey().getPrivateKey()
              }),
              (t.prototype.getPrivateKeyB64 = function () {
                return this.getKey().getPrivateBaseKeyB64()
              }),
              (t.prototype.getPublicKey = function () {
                return this.getKey().getPublicKey()
              }),
              (t.prototype.getPublicKeyB64 = function () {
                return this.getKey().getPublicBaseKeyB64()
              }),
              (t.version = st.version),
              t
            )
          })()
        e.default = ot
      },
    ])
  })
}
