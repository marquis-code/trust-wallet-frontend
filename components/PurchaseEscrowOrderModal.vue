<template>
  <main>
    <div
      v-if="show"
      class="backdrop rounded-md overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="p-10 bg-white rounded-md w-10/12 md:w-5/12">
        <div @click="close" class="cursor-pointer flex justify-end items-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9b9b9b"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <h1
          class="flex justify-center font-semibold items-center text-xl pb-3"
          style="color: #360040"
        >
          Purchase escrow order
        </h1>

        <form class="py-2 space-y-3">
          <div>
            <input
              type="tel"
              placeholder="Input seller trust ID here"
              class="px-3 py-3 w-full placeholder-gray-500 font-semibold border rounded-md text-xs"
            />
          </div>

          <div class="rounded-md shadow-lg px-6 py-3 border space-y-3">
            <h1 class="text-gray-500 font-extrabold text">Address</h1>
            <div class="space-y-3">
              <div class="">
                <textarea
                  class="rounded-lg font-semibold shadow-md w-full border px-3 py-3 text-xs outline-none focus:ring-1 ring-green-500"
                  rows="3"
                  cols="3"
                  placeholder="Enter address here"
                />
              </div>
              <div class="relative">
                <input
                  type="text"
                  placeholder="Product Narration*"
                  class="pl-10 font-semibold placeholder-gray-500 border rounded-lg w-full py-3 text-xs outline-none focus:ring-1 ring-green-500"
                />
                <img
                  src="@/assets/img/narration.svg"
                  class="absolute top-3 left-3"
                  alt=""
                />
              </div>
              <div class="relative">
                <input
                  type="tel"
                  placeholder="Mobile number*"
                  class="px-3 pl-10 font-semibold placeholder-gray-500 border rounded-lg w-full py-3 text-xs outline-none focus:ring-1 ring-green-500"
                />
                <img
                  src="@/assets/img/mobile.svg"
                  class="absolute top-3 left-3"
                  alt=""
                />
                <img
                  src="@/assets/img/phoneCount.svg"
                  class="absolute top-3 right-3"
                  alt=""
                />
              </div>
              <div class="relative">
                <input
                  type="tel"
                  placeholder="Price*"
                  class="px-3 pl-10 font-semibold placeholder-gray-500 border rounded-lg w-full py-3 text-xs outline-none focus:ring-1 ring-green-500"
                />
                <img
                  src="@/assets/img/dollar-sign.svg"
                  class="absolute top-3 left-3"
                  alt=""
                />
                <img
                  src="@/assets/img/moneyCount.svg"
                  class="absolute top-3 right-3"
                  alt=""
                />
              </div>

              <h1 class="font-semibold text-gray-400 text-sm">Charges</h1>
              <div class="flex items-center justify-between">
                <p class="font-semibold text-gray-400 text-xs">Escrow Charge</p>
                <p class="font-semibold text-gray-400 text-xs">N00.00</p>
              </div>

              <div class="flex items-center justify-between">
                <p
                  style="margin-top: 0px margin-bottom : 0px"
                  class="font-semibold text-gray-400 text-xs"
                >
                  Insurance
                </p>
                <p
                  style="margin-top: 0px margin-bottom : 0px"
                  class="font-semibold text-gray-400 text-xs"
                >
                  N00.00
                </p>
              </div>

              <div class="flex items-center justify-between">
                <p
                  style="font-weight: 900"
                  class="font-bold text-gray-400 text-xs"
                >
                  Total
                </p>
                <p class="font-bold text-gray-400 text-xs">N00.00</p>
              </div>
            </div>
          </div>

          <div class="border w-full space-y-1 px-6 py-4 rounded-lg shadow-lg">
            <h1 class="text-sm font-extrabold text-gray-400">
              Delivery method *
            </h1>

            <div class="flex items-center space-x-3">
              <div><input type="checkbox" /></div>
              <p class="text-xs text-gray-400 font-semibold">
                Express delivery by LogX
              </p>
            </div>
            <div class="flex items-center space-x-3">
              <div><input type="checkbox" /></div>
              <p class="text-xs text-gray-400 font-semibold">
                Use an alternative delivery system
              </p>
            </div>
          </div>

          <div class="flex justify-between items-center space-x-10">
            <button
              @click="close"
              class="text-white font-semibold py-2 w-full rounded-lg border border-purple-400"
              style="color: #8b4e96"
            >
              Cancel
            </button>
            <button
              @click="handleEscrowOrder"
              class="font-semibold py-2 w-full text-white rounded-lg"
              style="background-color: #8b4e96"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ModalComponent",
  props: ["show"],
  methods: {
    close() {
      this.$emit("close");
    },
    handleEscrowOrder() {
      this.$emit("success");
    },
  },
};
</script>
<style scoped>
.backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
}
</style>
