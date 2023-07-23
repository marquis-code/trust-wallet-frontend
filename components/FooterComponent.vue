<template>
  <footer aria-label="Site Footer" class="bg-white relative">
    <div class="md:flex justify-between items-center py-16">
      <img src="@/assets/img/footerMap1.svg" alt="" />
      <!-- <img src="@/assets/img/footerMap3.svg" alt=""> -->
      <img src="@/assets/img/footerMap2.svg" alt="" />
    </div>
    <div
      class="lg:flex justify-center items-center font-semibold"
      style="color: #360040"
    >
      <div
        class="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8 absolute top-0"
      >
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div class="text-teal-600">
              <img src="@/assets/img/logo.svg" alt="" />
            </div>
          </div>

          <div
            class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
          >
            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center space-x-3 rounded-lg py-2 text-gray-500 hover:text-gray-700"
              >
                <div class="flex items-center gap-2">
                  <p class="font-semibold" style="color: #8b4e96">Products</p>
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

              <nav aria-label="Teams Nav" class="mt-2 flex flex-col">
                <a
                  href="#"
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg> -->

                  <span style="color: #360040" class="text-sm font-medium">
                    Dropshippers <b style="color: #360040">X</b>
                  </span>
                </a>

                <a
                  href="#"
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg> -->

                  <span class="text-sm font-medium">
                    <span style="color: #360040" class="text-sm font-medium">
                      Freelancers <b style="color: #360040">X</b>
                    </span>
                  </span>
                </a>

                <a
                  href="#"
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg> -->

                  <span class="text-sm font-medium">
                    <span style="color: #360040" class="text-sm font-medium"
                      >Accounts Review
                    </span>
                  </span>
                </a>

                <a
                  href="#"
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg> -->

                  <span class="text-sm font-medium">
                    <span style="color: #360040" class="text-sm font-medium">
                      Merchants <b style="color: #360040">X</b>
                    </span>
                  </span>
                </a>

                <a
                  href="#"
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg> -->

                  <span class="text-sm font-medium">
                    <span style="color: #360040" class="text-sm font-medium">
                      Shoppers <b style="color: #360040">X</b>
                    </span>
                  </span>
                </a>

                <a
                  href="#"
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg> -->

                  <span class="text-sm font-medium">
                    <span style="color: #360040" class="text-sm font-medium">
                      Log <b>X</b>
                    </span>
                  </span>
                </a>
              </nav>
            </details>



            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center space-x-3 rounded-lg py-2 text-gray-500 hover:text-gray-700"
              >
                <div class="flex items-center gap-2">
                  <span class="font-semibold" style="color: #8b4e96">
                    Support <b>X</b>
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

              <nav aria-label="Teams Nav" class="mt-2 flex flex-col">
                <a
                  href="#"
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg> -->

                  <span style="color: #360040" class="text-sm font-medium">
                    User protection
                  </span>
                </a>

                <a
                  href="#"
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg> -->

                  <span class="text-sm font-medium">
                    <span style="color: #360040" class="text-sm font-medium">
                      Trade resolution
                    </span>
                  </span>
                </a>

                <a
                  href="#"
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg> -->

                  <span class="text-sm font-medium">
                    <span style="color: #360040" class="text-sm font-medium"
                      >Help desk
                    </span>
                  </span>
                </a>

                <a
                  href="#"
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>

                  <span class="text-sm font-medium">
                    <span style="color: #360040" class="text-sm font-medium">
                      Contact us
                    </span>
                  </span>
                </a>
              </nav>
            </details>


            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center space-x-3 rounded-lg py-2 text-gray-500 hover:text-gray-700"
              >
                <div class="flex items-center gap-2">
                  <span class="font-semibold" style="color: #8b4e96">
                    Log <b>X</b>
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

              <nav aria-label="Teams Nav" class="mt-2 flex flex-col">
                <a
                  href="#"
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg> -->

                  <span style="color: #360040" class="text-sm font-medium">
                    User protection
                  </span>
                </a>

                <a
                  href="#"
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg> -->

                  <span class="text-sm font-medium">
                    <span style="color: #360040" class="text-sm font-medium">
                      Trade resolution
                    </span>
                  </span>
                </a>

                <a
                  href="#"
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg> -->

                  <span class="text-sm font-medium">
                    <span style="color: #360040" class="text-sm font-medium"
                      >Help desk
                    </span>
                  </span>
                </a>

                <a
                  href="#"
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg> -->

                  <span class="text-sm font-medium">
                    <span style="color: #360040" class="text-sm font-medium">
                      Contact us
                    </span>
                  </span>
                </a>
              </nav>
            </details>

            <div>
              <p class="font-semibold" style="color: #8b4e96">Connect</p>

              <nav aria-label="Footer Navigation - Services" class="mt-6">
                <div class="text-sm flex items-center space-x-3">
                  <div>
                    <img
                      src="@/assets/img/twitter.svg"
                      class="h-10 w-10"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="@/assets/img/instagram.svg"
                      class="h-10 w-10"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="@/assets/img/linkedin.svg"
                      class="h-10 w-10"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="@/assets/img/youtube.svg"
                      class="h-10 w-10"
                      alt=""
                    />
                  </div>
                </div>
              </nav>
            </div>

            <div>
              <p class="font-semibold" style="color: #8b4e96">Contact</p>

              <nav aria-label="Footer Navigation - Services" class="mt-6">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      style="color: #360040"
                      class="text-gray-700 transition hover:opacity-75 font-light"
                    >
                      hello@TrustXwallet.com
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p class="font-semibold" style="color: #8b4e96">Lagos, Nigeria</p>

              <nav aria-label="Footer Navigation - Services" class="mt-6">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      style="color: #360040"
                      class="text-gray-700 transition hover:opacity-75 font-light"
                    >
                      14, Gerrard road Ikoyi, Lagos
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-gray-700 transition hover:opacity-75 font-light"
                    >
                      08103833350, 08135924737
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p class="font-semibold" style="color: #8b4e96">Kenya</p>

              <nav aria-label="Footer Navigation - Services" class="mt-6">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      style="color: #360040"
                      class="text-gray-700 transition hover:opacity-75 font-light"
                    >
                      Cove Court, Watermark business park Ndege Rd. off Langata
                      Rd.
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p class="font-semibold" style="color: #8b4e96">Ghana</p>

              <nav aria-label="Footer Navigation - Services" class="mt-6">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      style="color: #360040"
                      class="text-gray-700 transition hover:opacity-75 font-light"
                    >
                      Barnes Rd, Accra Metropolitan, Accra.
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div class="flex justify-center items-center space-x-4 pt-6">
          <img src="@/assets/img/nigeria.svg" />
          <img src="@/assets/img/flag1.svg" />
          <img src="@/assets/img/flag2.svg" />
          <img src="@/assets/img/flag3.svg" />
          <img src="@/assets/img/flag4.svg" />
        </div>

        <p class="text-xl text-center font-light" style="colot: #360040">
          &copy; Copywright, 2023.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
