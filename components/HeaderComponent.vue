<template>
  <header
    aria-label="Site Header"
    style="background-color: #fdf4ff"
    class="w-full sticky top-0 z-50"
  >
    <div
      class="mx-auto flex h-20 max-w-screen-xl items-center gap-8 px-6 lg:px-0"
    >
      <a class="block text-teal-600" href="/">
        <span class="sr-only">Home</span>
        <img class="h-24 w-24" src="@/assets/img/logo.svg" alt="" />
      </a>

      <div class="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Site Nav" class="hidden md:block">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <details class="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                  class="flex cursor-pointer items-center space-x-3 rounded-lg py-2 text-gray-500 hover:text-gray-700"
                >
                  <div class="flex items-center gap-2">
                    <span
                      style="color: #360040"
                      class="transition hover:text-gray-500/75 font-semibold"
                    >
                      Products
                    </span>
                  </div>

                  <span
                    class="shrink-0 transition duration-300 group-open:-rotate-180"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <div
                  class="border absolute top-16 z-50 w-42 rounded-md bg-white shadow-md"
                >
                  <div
                    aria-label="Teams Nav"
                    class="mt-2 flex flex-col bg-white w-full p-6"
                  >
                    <div class="space-y-6 w-full">
                      <p style="color: #360040">Products</p>

                      <div class="flex items-center space-x-5 cursor-pointer">
                        <div
                          class="p-2.5 rounded-full"
                          style="background-color: #e7caec"
                        >
                          <img
                            src="@/assets/img/side_dropshippers.svg"
                            alt=""
                            class="h-6 w-6"
                          />
                        </div>
                        <div class="space-y-1">
                          <p
                            class="font-medium pb-0 mb-0 text-sm"
                            style="color: #360040"
                          >
                            Trust X Dropshippers
                          </p>
                          <p
                            class="font-light pt-0 mt-0 text-xs"
                            style="color: #360040"
                          >
                            These are online vendors
                          </p>
                        </div>
                      </div>
                      <div class="flex items-center space-x-5 cursor-pointer">
                        <div
                          class="p-2.5 rounded-full"
                          style="background-color: #e7caec"
                        >
                          <img
                            src="@/assets/img/side_shoppers.svg"
                            alt=""
                            class="h-6 w-6"
                          />
                        </div>
                        <div class="space-y-1">
                          <p
                            class="font-medium pb-0 mb-0 text-sm"
                            style="color: #360040"
                          >
                            Trust X Shoppers
                          </p>
                          <p
                            class="font-light pt-0 mt-0 text-xs"
                            style="color: #360040"
                          >
                            These are our buyers
                          </p>
                        </div>
                      </div>
                      <div class="flex items-center space-x-5 cursor-pointer">
                        <div
                          class="p-2.5 rounded-full"
                          style="background-color: #e7caec"
                        >
                          <img
                            src="@/assets/img/side_freelancers.svg"
                            alt=""
                            class="h-6 w-6"
                          />
                        </div>
                        <div class="space-y-1">
                          <p
                            class="font-medium pb-0 mb-0 text-sm"
                            style="color: #360040"
                          >
                            Trust X freelancers
                          </p>
                          <p
                            class="font-light pt-0 mt-0 text-xs"
                            style="color: #360040"
                          >
                            These are our talents
                          </p>
                        </div>
                      </div>
                      <div class="flex items-center space-x-5 cursor-pointer">
                        <div
                          class="p-2.5 rounded-full"
                          style="background-color: #e7caec"
                        >
                          <img
                            src="@/assets/img/side_merchants.svg"
                            alt=""
                            class="h-6 w-6"
                          />
                        </div>
                        <div class="space-y-1">
                          <p
                            class="font-medium pb-0 mb-0 text-sm"
                            style="color: #360040"
                          >
                            TrustX Merchants
                          </p>
                          <p
                            class="font-light pt-0 mt-0 text-xs"
                            style="color: #360040"
                          >
                            These are store owners
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </li>
            <li>
              <nuxt-link
                style="color: #360040"
                class="transition hover:text-gray-500/75 font-semibold"
                to="/"
              >
                Testimonials
              </nuxt-link>
            </li>

            <li>
              <nuxt-link
                style="color: #360040"
                class="transition hover:text-gray-500/75 font-semibold"
                to="/"
              >
                Pricing
              </nuxt-link>
            </li>
            <li>
              <details class="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                  class="flex cursor-pointer items-center space-x-3 rounded-lg py-2 text-gray-500 hover:text-gray-700"
                >
                  <div class="flex items-center gap-2">
                    <span
                      style="color: #360040"
                      class="transition hover:text-gray-500/75 font-semibold"
                    >
                      Monetization
                    </span>
                  </div>

                  <span
                    class="shrink-0 transition duration-300 group-open:-rotate-180"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <div
                  class="border absolute top-16 z-50 w-42 rounded-md bg-white shadow-md"
                >
                  <div
                    aria-label="Teams Nav"
                    class="mt-2 flex flex-col bg-white w-full p-6"
                  >
                    <div class="space-y-6">
                      <p style="color: #360040">Monetization</p>

                      <div class="flex items-center space-x-5 cursor-pointer">
                        <div
                          class="p-2.5 rounded-full"
                          style="background-color: #e7caec"
                        >
                          <img
                            src="@/assets/img/side_dropshippers.svg"
                            alt=""
                            class="h-6 w-6"
                          />
                        </div>
                        <div class="space-y-1">
                          <p
                            class="font-medium pb-0 mb-0 text-sm"
                            style="color: #360040"
                          >
                            Profit from TXW
                          </p>
                          <p
                            class="font-light pt-0 mt-0 text-xs"
                            style="color: #360040"
                          >
                            Let’s make money together
                          </p>
                        </div>
                      </div>
                      <div class="flex items-center space-x-5 cursor-pointer">
                        <div
                          class="p-2.5 rounded-full"
                          style="background-color: #e7caec"
                        >
                          <img
                            src="@/assets/img/side_merchants.svg"
                            alt=""
                            class="h-6 w-6"
                          />
                        </div>
                        <div class="space-y-1">
                          <p
                            class="font-medium pb-0 mb-0 text-sm"
                            style="color: #360040"
                          >
                            COAD
                          </p>
                          <p
                            class="font-light pt-0 mt-0 text-xs"
                            style="color: #360040"
                          >
                            Peer to peer payment
                          </p>
                        </div>
                      </div>
                      <div class="flex items-center space-x-5 cursor-pointer">
                        <div
                          class="p-2.5 rounded-full"
                          style="background-color: #e7caec"
                        >
                          <img
                            src="@/assets/img/side_merchants.svg"
                            alt=""
                            class="h-6 w-6"
                          />
                        </div>
                        <div class="space-y-1">
                          <p
                            class="font-medium pb-0 mb-0 text-sm"
                            style="color: #360040"
                          >
                            DEI
                          </p>
                          <p
                            class="font-light pt-0 mt-0 text-xs"
                            style="color: #360040"
                          >
                            Disruptive Entrepreneurial <br />
                            Industrialization
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-4">
          <div class="flex items-center space-x-7">
            <p class="hidden lg:block">
              <nuxt-link
                style="color: #360040"
                class="transition hover:text-gray-500/75 font-light cursor-pointer"
                to="/"
              >
                Team <b class="font-extrabold" style="color: #360040">X</b>
              </nuxt-link>
            </p>

            <p class="hidden lg:block">
              <nuxt-link
                style="color: #360040"
                class="transition hover:text-gray-500/75 cursor-pointer font-light"
                to="/"
              >
                Support <b class="font-extrabold" style="color: #360040">X</b>
              </nuxt-link>
            </p>

            <p class="hidden lg:block">
              <nuxt-link
                style="color: #360040"
                class="transition hover:text-gray-500/75 font-bold cursor-pointer"
                to="/login"
              >
                Login
              </nuxt-link>
            </p>
          </div>

          <div class="hidden lg:flex sm:gap-4 z-50">
            <nuxt-link
              style="background-color: #8b4e96; color: #fae1ff"
              class="rounded-md px-2 py-2 flex justify-center items-center text-xs font-medium text-white transition hover:bg-teal-700"
              to="/login"
            >
              Create escrow wallet now
            </nuxt-link>

            <div
              class="hidden rounded-md py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
            >
              <img
                alt=""
                class="rounded-full"
                src="@/assets/img/nigeriaLogo.svg"
              />
            </div>
          </div>

          <button
            style="background-color: #fdf4ff"
            v-b-toggle.sidebar-backdrop
            class="block rounded p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden z-50"
          >
            <span class="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="md:hidden z-50">
      <b-sidebar id="sidebar-backdrop" no-header backdrop shadow width="380px">
        <template #default="{ hide }">
          <div class="flex justify-between items-center mx-auto w-10/12 py-3">
            <div class="grid h-10 w-32 place-content-center">
              <img src="@/assets/img/logo.svg" alt="" />
            </div>

            <div class="flex items-center space-x-3">
              <div>
                <img src="@/assets/img/nigeriaLogo.svg" alt="" />
              </div>
              <div>
                <svg
                  @click="hide"
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </div>
          </div>

          <nav
            aria-label="Main Nav"
            class="mt-6 flex flex-col space-y-9 w-10/12 mx-auto pb-6"
          >
            <div class="space-y-6">
              <p style="color: #360040">Products</p>

              <div @click="$router.push('/register/dropshipper')" class="flex items-center space-x-5">
                <div
                  class="p-2.5 rounded-full"
                  style="background-color: #e7caec"
                >
                  <img
                    src="@/assets/img/side_dropshippers.svg"
                    alt=""
                    class="h-6 w-6"
                  />
                </div>
                <div class="space-y-1">
                  <p
                    class="font-medium pb-0 mb-0 text-sm"
                    style="color: #360040"
                  >
                    Trust X Dropshippers
                  </p>
                  <p
                    class="font-light pt-0 mt-0 text-xs"
                    style="color: #360040"
                  >
                    These are online vendors
                  </p>
                </div>
              </div>

              <div @click="$router.push('/register/shopper')" class="flex items-center space-x-5">
                <div
                  class="p-2.5 rounded-full"
                  style="background-color: #e7caec"
                >
                  <img
                    src="@/assets/img/side_shoppers.svg"
                    alt=""
                    class="h-6 w-6"
                  />
                </div>
                <div class="space-y-1">
                  <p
                    class="font-medium pb-0 mb-0 text-sm"
                    style="color: #360040"
                  >
                    TrustX Shoppers
                  </p>
                  <p
                    class="font-light pt-0 mt-0 text-xs"
                    style="color: #360040"
                  >
                    These are our buyers
                  </p>
                </div>
              </div>

               <div @click="$router.push('/register/freelancer')" class="flex items-center space-x-5">
                <div
                  class="p-2.5 rounded-full"
                  style="background-color: #e7caec"
                >
                  <img
                    src="@/assets/img/side_freelancers.svg"
                    alt=""
                    class="h-6 w-6"
                  />
                </div>
                <div class="space-y-1">
                  <p
                    class="font-medium pb-0 mb-0 text-sm"
                    style="color: #360040"
                  >
                    TrustX freelancers
                  </p>
                  <p
                    class="font-light pt-0 mt-0 text-xs"
                    style="color: #360040"
                  >
                    These are our talents
                  </p>
                </div>
              </div>

               <div @click="$router.push('/register/merchant')" class="flex items-center space-x-5">
                <div
                  class="p-2.5 rounded-full"
                  style="background-color: #e7caec"
                >
                  <img
                    src="@/assets/img/side_merchants.svg"
                    alt=""
                    class="h-6 w-6"
                  />
                </div>
                <div class="space-y-1">
                  <p
                    class="font-medium pb-0 mb-0 text-sm"
                    style="color: #360040"
                  >
                    TrustX Merchants
                  </p>
                  <p
                    class="font-light pt-0 mt-0 text-xs"
                    style="color: #360040"
                  >
                    These are store owners
                  </p>
                </div>
              </div>
            </div>

            <!-- <div class="space-y-6">
              <p style="color: #360040">Monetization</p>

              <div class="flex items-center space-x-5">
                <div
                  class="p-2.5 rounded-full"
                  style="background-color: #e7caec"
                >
                  <img
                    src="@/assets/img/side_dropshippers.svg"
                    alt=""
                    class="h-6 w-6"
                  />
                </div>
                <div class="space-y-1">
                  <p
                    class="font-medium pb-0 mb-0 text-sm"
                    style="color: #360040"
                  >
                    Profit from TXW
                  </p>
                  <p
                    class="font-light pt-0 mt-0 text-xs"
                    style="color: #360040"
                  >
                    Let’s make money together
                  </p>
                </div>
              </div>
              <div class="flex items-center space-x-5">
                <div
                  class="p-2.5 rounded-full"
                  style="background-color: #e7caec"
                >
                  <img
                    src="@/assets/img/side_merchants.svg"
                    alt=""
                    class="h-6 w-6"
                  />
                </div>
                <div class="space-y-1">
                  <p
                    class="font-medium pb-0 mb-0 text-sm"
                    style="color: #360040"
                  >
                    COAD
                  </p>
                  <p
                    class="font-light pt-0 mt-0 text-xs"
                    style="color: #360040"
                  >
                    Peer to peer payment
                  </p>
                </div>
              </div>
              <div class="flex items-center space-x-5">
                <div
                  class="p-2.5 rounded-full"
                  style="background-color: #e7caec"
                >
                  <img
                    src="@/assets/img/side_merchants.svg"
                    alt=""
                    class="h-6 w-6"
                  />
                </div>
                <div class="space-y-1">
                  <p
                    class="font-medium pb-0 mb-0 text-sm"
                    style="color: #360040"
                  >
                    DEI
                  </p>
                  <p
                    class="font-light pt-0 mt-0 text-xs"
                    style="color: #360040"
                  >
                    Disruptive Entrepreneurial Industrialization
                  </p>
                </div>
              </div>
            </div> -->

            <div class="space-y-3">
              <!-- <div>
                <nuxt-link style="color: #360040" class="font-medium" to="/"
                  >Pricing</nuxt-link
                >
              </div>
              <div>
                <nuxt-link style="color: #360040" class="font-medium" to="/"
                  >Testimonials</nuxt-link
                >
              </div>
              <div>
                <nuxt-link style="color: #360040" class="font-medium" to="/"
                  >Team
                  <b style="color: #360040" class="font-bold">X</b></nuxt-link
                >
              </div> -->
              <div>
                <a
                  href="https://api.whatsapp.com/send?phone=8135924737&text=Hello from Team X. Welcome to TrustXWallet. Kindly provide your full name and your trust ID while our support officer reach out to you shortly. Thank you for your patience. As patience has a gain as a yourba city known as (Surulere)."
                  style="color: #360040"
                  class="font-medium"
                  to="/"
                  >Support <b style="color: #360040" class="font-bold">X</b></a
                >
              </div>
            </div>

            <div class="flex justify-center items-center">
              <nuxt-link
                to="/login"
                class="text-white font-medium py-2.5 text-center rounded-md w-full"
                style="background-color: #8b4e96"
              >
                Log in
              </nuxt-link>
            </div>
          </nav>
        </template>
      </b-sidebar>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      showSideMenue: true,
    };
  },
  methods: {
    toggleSideMenue() {
      this.showSideMenue = !this.showSideMenue;
    },
  },
};
</script>

<style scoped>
:deep(.b-sidebar-body) {
  flex-grow: 1;
  height: 100%;
  overflow-y: auto;
  background-color: #fdf4ff !important;
}
</style>
