<template>
  <main>
    <div
      v-if="show"
      class="backdrop overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="p-10 bg-white rounded-md w-10/12 md:w-5/12">
        <div class="space-y-10">
          <div class="flex justify-between items-center">
            <div>
              <h1 class="text-xl font-semibold" style="color: #360040">
                Payment Details
              </h1>
            </div>
            <div @click="close">
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
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </div>

          <div class="space-y-9">
            <form class="space-y-6">
              <div class="space-y-4">
                <div class="flex justify-between items-center space-y-2">
                  <label class="font-semibold text-sm"
                    >Credit Card Number</label
                  >

                  <div class="flex items-center space-x-2">
                    <div><img src="@/assets/img/visaText.svg" alt="" /></div>
                    <div><img src="@/assets/img/visaLogo.svg" alt="" /></div>
                  </div>
                </div>
                <div class="">
                  <input
                    class="py-2.5 px-4 border w-full rounded-lg outline-none"
                    type="tel"
                    placeholder="xxxx  xxxx  xxxx   xxxx"
                  />
                </div>
              </div>

              <div class="relative space-y-4">
                <label style="color: #360040" class="font-semibold text-sm"
                  >Amount</label
                >
                <input
                  placeholder="(NGN) XXX,XXX"
                  class="py-2.5 px-4 pl-10  border w-full rounded-lg outline-none"
                  type="tel"
                />
                <img
                  class="absolute top-9 md:top-3 left-3"
                  src="@/assets/img/nigeriaLogo.svg"
                  alt=""
                />
              </div>

              <div class="md:flex justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
                <div class="relative space-y-4">
                  <label style="color: #360040" class="font-semibold text-sm"
                    >Expiry Date</label
                  >
                  <input
                    placeholder="mm / yy"
                    class="py-2.5 px-4 w-full rounded-lg border outline-none"
                    type="tel"
                  />
                </div>

                <div class="relative space-y-4">
                  <label style="color: #360040" class="font-semibold text-sm"
                    >CVV</label
                  >
                  <input
                    placeholder="xxx"
                    class="py-2.5 px-4 w-full rounded-lg border outline-none"
                    type="tel"
                  />
                </div>
              </div>
            </form>
            <div class="flex flex-col space-y-3 justify-center items-center">
              <button
                class="font-semibold py-2 w-full text-white rounded-lg text-sm"
                style="background-color: #8b4e96"
                @click="proceedWithPayment"
              >
                Pay (NGN) XXX,XXX now
              </button>
              <p
                class="text-center font-semibold cursor-pointer text-sm"
                style="color: #8b4e96"
              >
                Use a different payment method
              </p>
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
  props: {
    show: {
      type: Boolean,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },

    proceedWithPayment() {
      this.$emit("proceedWithPayment");
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
