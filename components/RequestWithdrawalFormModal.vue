<template>
  <main>
    <div
      v-if="show"
      class="backdrop backdrop-blur-sm rounded-md overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="p-10 bg-white rounded-md w-5/12">
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
        <div class="space-y-10">
          <div class="space-y-6">
            <h1 class="text-xl font-semibold" style="color: #360040">
              Request Withdrawal
            </h1>
          </div>

          <div class="space-y-6">
            <form class="space-y-6">
              <div class="space-y-4">
                <div class="space-y-2">
                  <label class="font-semibold text-sm"
                    >From wallet balance</label
                  >
                </div>
                <div class="relative">
                  <input
                    class="py-2.5 pr-6 pl-11 border w-full rounded-lg"
                    type="tel"
                    placeholder="(NGN) XXX,XXX"
                  />
                  <img
                    src="@/assets/img/nigeriaLogo.svg"
                    alt=""
                    class="absolute top-3 left-3"
                  />
                </div>
              </div>

              <div class="space-y-4">
                <div class="space-y-2">
                  <label class="font-semibold text-sm"
                    >Amount</label
                  >
                </div>
                <div class="relative">
                  <input
                    class="py-2.5 pr-6 pl-11 border w-full rounded-lg"
                    type="tel"
                    placeholder="(NGN) XXX,XXX"
                  />
                  <img
                    src="@/assets/img/nigeriaLogo.svg"
                    alt=""
                    class="absolute top-3 left-3"
                  />
                </div>
              </div>

              <div class="relative space-y-4">
                <label style="color: #360040" class="font-semibold text-sm"
                  >To bank account
                </label>
                <select
                  class="py-2.5 px-4 border w-full rounded-lg font-medium"
                >
                  <option>United Bank Of Africa</option>
                  <option value="Bank of America">Bank of America</option>
                </select>
              </div>
            </form>
            <div class="flex flex-col space-y-3 justify-center items-center">
              <button
                @click="proceedWithWithdrawal"
                class="font-semibold py-2 w-full text-white rounded-lg"
                style="background-color: #8b4e96"
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import index from "../pages/index.vue";
export default {
  components: { index },
  name: "ModalComponent",
  props: ["show"],
  methods: {
    close() {
      this.$emit("close");
    },

    proceedWithWithdrawal() {
      this.$emit("withdrawalSuccess");
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