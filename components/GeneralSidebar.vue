<template>
  <main>
    <div style="background-color: #360040"
      class="hidden lg:flex h-screen flex-col justify-between border-r overflow-y-auto">
      <div class="px-4 py-6">
        <nuxt-link to="/login" class="grid h-10 place-content-center mb-20">
          <div class="">
            <img src="@/assets/img/white_trustxlogo.svg" alt="">
          </div>
        </nuxt-link>

        <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-4">
          <nuxt-link to="#" style="background-color: #ba68c8"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-white">
            <img src="@/assets/img/dashboardIcon.svg" alt="">

            <span class="text-sm font-semibold"> Dashboard </span>
          </nuxt-link>

          <nuxt-link to="#" class="flex items-center gap-2 rounded-lg px-4 py-2 text-white hover:bg-fuchsia-400">
            <img src="@/assets/img/messagesIcon.svg" alt="">

            <span class="text-sm font-semibold"> My Messages </span>
          </nuxt-link>

          <button class="flex items-center gap-2 rounded-lg px-4 py-2 text-white hover:bg-fuchsia-400"
            @click="redirectToTelegram">
            <img src="@/assets/img/messagesIcon.svg" alt="">

            <span class="text-sm font-semibold"> Community X </span>
          </button>

          <nuxt-link to="/dashboard/settings"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-white hover:bg-fuchsia-400">
            <img src="@/assets/img/messagesIcon.svg" alt="">

            <span class="text-sm font-semibold"> Settings </span>
          </nuxt-link>
        </nav>
      </div>
    </div>

    <div class="relative">
      <div v-if="showSidebar" :class="[showSidebar ? 'w-16 z-50' : '']" style="background-color: #360040"
        class="lg:hidden flex h-screen w-10 flex-col justify-between border-r bg-white z-50 absolute">
        <div>
          <div class="inline-flex h-16 w-16 items-center justify-center">
            <span class="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
              L
            </span>
          </div>

          <div class="border-t border-gray-100">
            <nav aria-label="Main Nav" class="flex flex-col p-2">
              <div class="py-4">
                <a href="" class="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700">
                  <img src="@/assets/img/dashboardIcon.svg" alt="">

                  <span
                    class="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    Dashboard
                  </span>
                </a>
              </div>

              <ul class="space-y-1 border-t border-gray-100 pt-4">
                <li>
                  <a href=""
                    class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                    <img src="@/assets/img/messagesIcon.svg" alt="">

                    <span
                      class="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      My Messages
                    </span>
                  </a>
                </li>

                <li>
                  <button
                    class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    @click="redirectToTelegram">
                    <img src="@/assets/img/settingsIcon.svg" alt="">

                    <span
                      class="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      Community X
                    </span>
                  </button>
                </li>

                <li>
                  <nuxt-link to="/dashboard/settings"
                    class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                    <img src="@/assets/img/supportIcon.svg" alt="">

                    <span
                      class="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      Settings
                    </span>
                  </nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div class="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
          <form action="/logout">
            <button type="submit"
              class="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>

              <span
                class="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                Logout
              </span>
            </button>
          </form>
        </div>
      </div>

      <div class="pl-6 z-50 absolute top-9 md:hidden">
        <svg v-b-toggle.sidebar-backdrop xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
          fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
          class="cursor-pointer">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <!-- <svg
          v-if="showSidebar"
          @click="toggleSidebar"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="cursor-pointer"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg> -->
      </div>
    </div>

    <main>
      <div class="md:hidden">
        <b-sidebar id="sidebar-backdrop" no-header backdrop shadow width="380px">
          <template #default="{ hide }">
            <div class="flex justify-between items-center mx-auto w-10/12 py-3">
              <div class="grid h-10 w-32 place-content-center">
                <img src="@/assets/img/logo.svg" alt="">
              </div>

              <div class="flex items-center space-x-3">
                <div>
                  <img src="@/assets/img/nigeriaLogo.svg" alt="">
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none"
                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" @click="hide">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              </div>
            </div>

            <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-9 w-10/12 mx-auto pb-6">
              <div class="space-y-6">
                <p style="color: #360040">
                  Products
                </p>

                <div class="flex items-center space-x-5">
                  <div class="p-2.5 rounded-full" style="background-color: #e7caec">
                    <img src="@/assets/img/side_dropshippers.svg" alt="" class="h-6 w-6">
                  </div>
                  <div class="space-y-1">
                    <p class="font-medium pb-0 mb-0 text-sm" style="color: #360040">
                      Trust X Dropshippers
                    </p>
                    <p class="font-light pt-0 mt-0 text-xs" style="color: #360040">
                      These are online vendors
                    </p>
                  </div>
                </div>
                <div class="flex items-center space-x-5">
                  <div class="p-2.5 rounded-full" style="background-color: #e7caec">
                    <img src="@/assets/img/side_shoppers.svg" alt="" class="h-6 w-6">
                  </div>
                  <div class="space-y-1">
                    <p class="font-medium pb-0 mb-0 text-sm" style="color: #360040">
                      TrustX Shoppers
                    </p>
                    <p class="font-light pt-0 mt-0 text-xs" style="color: #360040">
                      These are our buyers
                    </p>
                  </div>
                </div>
                <div class="flex items-center space-x-5">
                  <div class="p-2.5 rounded-full" style="background-color: #e7caec">
                    <img src="@/assets/img/side_freelancers.svg" alt="" class="h-6 w-6">
                  </div>
                  <div class="space-y-1">
                    <p class="font-medium pb-0 mb-0 text-sm" style="color: #360040">
                      TrustX freelancers
                    </p>
                    <p class="font-light pt-0 mt-0 text-xs" style="color: #360040">
                      These are our talents
                    </p>
                  </div>
                </div>
                <div class="flex items-center space-x-5">
                  <div class="p-2.5 rounded-full" style="background-color: #e7caec">
                    <img src="@/assets/img/side_merchants.svg" alt="" class="h-6 w-6">
                  </div>
                  <div class="space-y-1">
                    <p class="font-medium pb-0 mb-0 text-sm" style="color: #360040">
                      TrustX Merchants
                    </p>
                    <p class="font-light pt-0 mt-0 text-xs" style="color: #360040">
                      These are store owners
                    </p>
                  </div>
                </div>
              </div>

              <div class="space-y-6">
                <p style="color: #360040">
                  Monetization
                </p>

                <div class="flex items-center space-x-5">
                  <div class="p-2.5 rounded-full" style="background-color: #e7caec">
                    <img src="@/assets/img/side_dropshippers.svg" alt="" class="h-6 w-6">
                  </div>
                  <div class="space-y-1">
                    <p class="font-medium pb-0 mb-0 text-sm" style="color: #360040">
                      Profit from TXW
                    </p>
                    <p class="font-light pt-0 mt-0 text-xs" style="color: #360040">
                      Let’s make money together
                    </p>
                  </div>
                </div>
                <div class="flex items-center space-x-5">
                  <div class="p-2.5 rounded-full" style="background-color: #e7caec">
                    <img src="@/assets/img/side_merchants.svg" alt="" class="h-6 w-6">
                  </div>
                  <div class="space-y-1">
                    <p class="font-medium pb-0 mb-0 text-sm" style="color: #360040">
                      COAD
                    </p>
                    <p class="font-light pt-0 mt-0 text-xs" style="color: #360040">
                      Peer to peer payment
                    </p>
                  </div>
                </div>
                <div class="flex items-center space-x-5">
                  <div class="p-2.5 rounded-full" style="background-color: #e7caec">
                    <img src="@/assets/img/side_merchants.svg" alt="" class="h-6 w-6">
                  </div>
                  <div class="space-y-1">
                    <p class="font-medium pb-0 mb-0 text-sm" style="color: #360040">
                      DEI
                    </p>
                    <p class="font-light pt-0 mt-0 text-xs" style="color: #360040">
                      Disruptive Entrepreneurial Industrialization
                    </p>
                  </div>
                </div>
              </div>

              <div class="space-y-3">
                <div>
                  <nuxt-link style="color: #360040" class="font-medium" to="/">
                    Pricing
                  </nuxt-link>
                </div>
                <div>
                  <nuxt-link style="color: #360040" class="font-medium" to="/">
                    Testimonials
                  </nuxt-link>
                </div>
                <div>
                  <nuxt-link style="color: #360040" class="font-medium" to="/">
                    Team
                    <b style="color: #360040" class="font-bold">X</b>
                  </nuxt-link>
                </div>
                <div>
                  <nuxt-link style="color: #360040" class="font-medium" to="/">
                    Support
                    <b style="color: #360040" class="font-bold">X</b>
                  </nuxt-link>
                </div>
              </div>

              <div class="flex justify-center items-center">
                <nuxt-link to="/login" class="text-white font-medium py-2.5 text-center rounded-md w-full"
                  style="background-color: #8b4e96">
                  Log in
                </nuxt-link>
              </div>
            </nav>
          </template>
        </b-sidebar>
      </div>
    </main>
  </main>
</template>

<script>
export default {
  data() {
    return {
      showSidebar: false,
      shareText: 'Explore Our Community Today'
    }
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    },
    redirectToTelegram() {
      if (process.client) {
        const currentPath = window.location.href
        window.open(`https://t.me/share/url?url=${currentPath}&text=${this.shareText}`, '_blank')
      }
    }
  }
}
</script>
