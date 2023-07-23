<template>
  <main>
    <div
      v-if="show"
      class="backdrop rounded-md overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="p-3 py-10 bg-white rounded-md w-4/12">
        <div
          @click="close"
          class="cursor-pointer mr-10 flex justify-end items-end"
        >
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
        <div class="space-y-7">
          <div class="flex justify-center items-center space-x-3">
            <h1 class="text-xl font-extrabold" style="color: #360040">
              Payment Options
            </h1>
          </div>

          <div
            class="space-y-7 flex justify-center items-center flex-col w-6/12 mx-auto"
          >
            <div
              @click="handleSelectedMethod('card')"
              class="flex items-center justify-between w-full cursor-pointer"
            >
              <div class="w-full flex justify-center items-center">
                <img
                  class="h-12 w-12"
                  src="@/assets/img/cardPayment.svg"
                  alt=""
                />
              </div>
              <div class="w-full">
                <p class="font-semibold" style="color: #8b4e96">Card</p>
              </div>
            </div>

            <div
              @click="handleSelectedMethod('ussd')"
              class="flex items-center justify-between w-full cursor-pointer"
            >
              <div class="w-full flex justify-center items-center">
                <img
                  class="h-12 w-12"
                  src="@/assets/img/ussdPayment.svg"
                  alt=""
                />
              </div>
              <div class="w-full">
                <p class="font-semibold" style="color: #8b4e96">USSD</p>
              </div>
            </div>

            <div
              @click="handleSelectedMethod('bank_payment')"
              class="flex items-center justify-between w-full cursor-pointer"
            >
              <div class="w-full flex justify-center items-center">
                <img
                  class="h-12 w-12"
                  src="@/assets/img/bankPayment.svg"
                  alt=""
                />
              </div>
              <div class="w-full">
                <p class="font-semibold" style="color: #8b4e96">Bank</p>
              </div>
            </div>

            <div
              @click="handleSelectedMethod('bank_transfer')"
              class="flex items-center justify-between w-full cursor-pointer"
            >
              <div class="w-full flex justify-center items-center">
                <img
                  class="h-12 w-12"
                  src="@/assets/img/bankTransfer.svg"
                  alt=""
                />
              </div>
              <div class="w-full">
                <p class="font-semibold" style="color: #8b4e96">
                  Bank Transfer
                </p>
              </div>
            </div>
          </div>
        </div>
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

    handleSelectedMethod(item) {
      this.$emit("selectedPaymentMethod", item);
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