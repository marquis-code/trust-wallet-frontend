<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="w-full">
    <div class="w-full h-screen overflow-y-auto px-6 md:px-14 py-6 space-y-10">
      <div class="flex justify-between items-center">
        <div>
          <h1 style="color: #360040" class="hidden md:block font-bold text-xl">
            Dashboard
          </h1>
        </div>
        <div class="flex items-center md:space-x-6 space-x-4">
          <div><img src="@/assets/img/nigeriaLogo.svg" alt="" /></div>
          <div><img src="@/assets/img/notification_icon.svg" alt="" /></div>
          <div>
            <img
              src="@/assets/img/avatar_icon.svg"
              class="rounded-full"
              alt=""
            />
          </div>
          <div class="relative">
            <p style="color: #360040" class="md:text-xl font-bold pb-0 mb-0">
              Ama
            </p>
            <p class="pt-0 mt-0 text-sm" style="color: #360040">9877566273</p>
            <div class="absolute top-1 right-8">
              <img src="@/assets/img/star_icon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="md:flex items-center md:space-x-16 space-y-9 md:space-y-0">
        <div
          class="flex space-x-4 bg-white shadow-md rounded-lg px-6 py-4 md:w-1/2 border"
        >
          <div>
            <img src="@/assets/img/dispute_transaction_icon.svg" alt="" />
          </div>
          <div>
            <p style="color: #360040" class="font-light">
              Transactions in dispute
            </p>
            <p style="color: #360040">0</p>
          </div>
        </div>
        <div
          class="flex space-x-4 bg-white shadow-md rounded-lg px-6 py-4 md:w-1/2 border"
        >
          <div>
            <img src="@/assets/img/successful_transaction_logo.svg" alt="" />
          </div>
          <div>
            <p style="color: #360040" class="font-light">
              Successful transactions
            </p>
            <p style="color: #360040">0</p>
          </div>
        </div>
      </div>

      <div
        class="md:p-10 p-3 py-4 md:py-0 shadow-md rounded-md border space-y-4"
      >
        <div
          style="background-color: #ba68c8"
          class="rounded-full w-14 h-14 flex justify-center items-center"
        >
          <img
            src="@/assets/img/wallet_icon_white.svg"
            class="h-7 w-7"
            alt=""
          />
        </div>

        <div
          class="md:flex justify-between items-center space-y-9 md:space-y-0"
        >
          <div class="space-y-3">
            <p style="color: #360040" class="font-light text-sm md:text-base">
              Escrow wallet balance
            </p>
            <div class="flex items-center space-x-2">
              <div><img src="@/assets/img/nigeriaLogo.svg" alt="" /></div>
              <p class="font-semibold md:text-xl">(NGN) 2,500,000</p>
            </div>
          </div>
          <div class="md:flex items-center md:space-x-6 space-y-6 md:space-y-0">
            <div
              class="rounded-lg flex justify-between items-center pl-3 md:pl-10 ring-1 ring-purple-300 cursor-pointer rounded-r-lg"
            >
              <input
                type="tel"
                placeholder="Input trust code here"
                class="placeholder-purple-500 outline-none rounded-r-lg text-sm md:text-base"
              />
              <button
                class="text-white font-medium py-2.5 md:px-5 px-10 w-1/2 text-sm md:text-base flex justify-center items-center rounded-r-lg"
                style="background-color: #8b4e96"
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="md:p-10 p-3 py-4 md:py-0 shadow-md rounded-md space-y-4 bg-purple-100"
      >
        <div
          style="background-color: #ba68c8"
          class="rounded-full w-14 h-14 flex justify-center items-center"
        >
          <img src="@/assets/img/lock_icon.svg" class="h-7 w-7" alt="" />
        </div>

        <div
          class="md:flex justify-between items-center space-y-6 md:space-y-0"
        >
          <div class="space-y-3">
            <p style="color: #360040" class="font-light text-sm md:text-base">
              Net Profit
            </p>
            <div class="flex items-center space-x-2">
              <div><img src="@/assets/img/nigeriaLogo.svg" alt="" /></div>
              <p class="font-semibold md:text-xl">(NGN) 2,500,000</p>
            </div>
          </div>
          <div class="flex md:flex-col justify-start items-start">
            <button
              style="color: #ba68c8"
              class="font-semibold text-center md:text-left ring ring-gray-100 outline-none border-2 border-purple-900 px-8 rounded-lg py-2.5 w-full"
            >
              Request withdrawal
            </button>
          </div>
        </div>
      </div>

      <!-- <div
        class="p-10 shadow-md rounded-md space-y-4"
        style="background-color: #e0ffff"
      >
        <div
          style="background-color: #ba68c8"
          class="rounded-full w-14 h-14 flex justify-center items-center"
        >
          <img src="@/assets/img/lock_icon.svg" class="h-7 w-7" alt="" />
        </div>

        <div
          class="md:flex justify-between items-center space-y-6 md:space-y-0"
        >
          <div class="space-y-3">
            <p style="color: #360040" class="font-light">Net Profit</p>
            <div class="flex items-center space-x-2">
              <div><img src="@/assets/img/nigeriaLogo.svg" alt="" /></div>
              <p class="font-semibold text-xl">(NGN) 2,500,000</p>
            </div>
          </div>
          <div>
            <button
              style="color: #ba68c8"
              class="font-semibold w-full text-center md:text-left border px-8 rounded-lg py-3"
            >
              Request withdrawal
            </button>
          </div>
        </div>
      </div> -->

      <div>
        <div class="overflow-x-auto rounded-lg border-gray-200 border-t">
          <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead class="">
              <tr class="bg-purple-100 h-16">
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-semibold"
                  style="color: #360040"
                >
                  Trust ID
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-semibold"
                  style="color: #360040"
                >
                  Date
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-semibold"
                  style="color: #360040"
                >
                  Amount (N)
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-semibold"
                  style="color: #360040"
                >
                  Product name
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-semibold"
                  style="color: #360040"
                >
                  Status
                </th>
                <th
                  class="whitespace-nowrap px-4 py-2 text-left font-semibold"
                  style="color: #360040"
                >
                  Actions
                </th>
                <th class="px-4 py-2" />
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
              <tr class="">
                <td
                  class="whitespace-nowrap px-4 py-6 font-light text-gray-500"
                >
                  24000002
                </td>
                <td
                  class="whitespace-nowrap px-4 py-6 font-light text-gray-500"
                >
                  Jan 10, 2020
                </td>
                <td
                  class="whitespace-nowrap px-4 py-6 font-light text-gray-500"
                >
                  100,000
                </td>
                <td
                  class="whitespace-nowrap px-4 py-6 font-light text-gray-500"
                >
                  5373
                </td>
                <td
                  class="whitespace-nowrap px-4 py-6 font-light text-gray-500"
                >
                  In progress
                </td>
                <td class="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    class="inline-block rounded px-4 py-2.5 text-xs font-semibold text-white bg-green-500"
                  >
                    Release fund
                  </a>
                </td>
              </tr>
              <tr class="">
                <td
                  class="whitespace-nowrap px-4 py-6 font-light text-gray-500"
                >
                  24000002
                </td>
                <td
                  class="whitespace-nowrap px-4 py-6 font-light text-gray-500"
                >
                  Jan 10, 2020
                </td>
                <td
                  class="whitespace-nowrap px-4 py-6 font-light text-gray-500"
                >
                  100,000
                </td>
                <td
                  class="whitespace-nowrap px-4 py-6 font-light text-gray-500"
                >
                  5373
                </td>
                <td
                  class="whitespace-nowrap px-4 py-6 font-light text-gray-500"
                >
                  In progress
                </td>
                <td class="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    class="inline-block rounded px-4 py-2.5 text-xs font-semibold text-white bg-green-500"
                  >
                    Release fund
                  </a>
                </td>
              </tr>
              <tr class="">
                <td
                  class="whitespace-nowrap px-4 py-6 font-light text-gray-500"
                >
                  24000002
                </td>
                <td
                  class="whitespace-nowrap px-4 py-6 font-light text-gray-500"
                >
                  Jan 10, 2020
                </td>
                <td
                  class="whitespace-nowrap px-4 py-6 font-light text-gray-500"
                >
                  100,000
                </td>
                <td
                  class="whitespace-nowrap px-4 py-6 font-light text-gray-500"
                >
                  5373
                </td>
                <td
                  class="whitespace-nowrap px-4 py-6 font-light text-gray-500"
                >
                  In progress
                </td>
                <td class="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    class="inline-block rounded px-4 py-2.5 text-xs font-semibold text-white bg-green-500"
                  >
                    Release fund
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <purchase-escrow-order-modal
        :show="showPurchaseModal"
        @close="showPurchaseModal = false"
        @success="handleOrderSuccess"
      />

      <purchase-escrow-success-modal
        :show="showPurchaseSuccessModal"
        @close="showPurchaseSuccessModal = false"
        @proceedToLogX="proceedToLogX"
      />

      <request-withdrawal-modal
        :show="showWithdrawalModal"
        @close="showWithdrawalModal = false"
        @proceedWithPayment="proceedWithPayment"
      />

      <payment-method-modal
        :show="showPaymentMethodModal"
        @close="showPaymentMethodModal = false"
        @selectedPaymentMethod="handleSelectedPaymentMethod"
      />

      <request-withdrawal-form-modal
        :show="showRequestWithdrawFormModal"
        @close="showRequestWithdrawFormModal = false"
        @withdrawalSuccess="handleWithdrawalSuccess"
      />

      <withdrawal-success-modal
        :show="showWithdrawalSuccessModal"
        @close="showWithdrawalSuccessModal = false"
      />

      <b-modal
        id="withdrawSuccessModal"
        centered
        hide-header
        hide-footer
        no-close-on-esc
        no-close-on-backdrop
      >
        <div class="space-y-10 p-6">
          <div class="space-y-6">
            <div class="flex justify-center items-center space-x-3">
              <h1
                class="flex justify-center font-semibold items-center text-2xl"
                style="color: #360040"
              >
                Congratulations
              </h1>
              <div>
                <img src="@/assets/img/success_badge.svg" alt="" />
              </div>
            </div>

            <p
              class="font-medium text-center leading-loose"
              style="color: #360040"
            >
              We have sent the sum of
              <img
                class="inline ml-1"
                src="@/assets/img/nigeriaLogo.svg"
                alt=""
              /><b>(NGN) 2,500,000</b> from your escrow wallet balance to your
              Net profit wallet balance
            </p>
          </div>

          <div class="flex justify-center items-center">
            <button
              @click="$bvModal.hide('withdrawSuccessModal')"
              class="font-semibold py-2 w-full text-white rounded-lg"
              style="background-color: #8b4e96"
            >
              Done
            </button>
          </div>
        </div>
      </b-modal>
    </div>
  </main>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",
  components: {},
  layout: "dashboardLayout",
  data() {
    return {};
  },
  // mounted() {
  //   let currentUserType = localStorage.getItem("userType");
  //   if (currentUserType !== "freelancer") {
  //     this.$router.push("/login");
  //   }
  // },
  methods: {},
};
</script>
