<template>
  <main>
    <div
      v-if="show"
      class="backdrop rounded-md overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
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
            <div class="flex justify-center items-center space-x-3">
              <h1
                class="flex justify-center font-semibold items-center text-2xl pb-3"
                style="color: #360040"
              >
                Congratulations
              </h1>
              <div>
                <img src="@/assets/img/success_badge.svg" alt="" />
              </div>
            </div>

            <p
              class="font-semibold text-center leading-loose"
              style="color: #360040"
            >
              We have deducted
              <img
                class="inline ml-3"
                src="@/assets/img/nigeriaLogo.svg"
                alt=""
              /><b>(NGN) 2,500,000</b> from your total wallet balance to
              complete this transaction with the Trust Code :
              <b class="" style="font-weight: 900px">2587</b>
            </p>
          </div>

          <div class="space-y-6">
            <p
              class="font-semibold text-center leading-loose"
              style="color: #360040"
            >
              You will be redirected to make use of the LogX delivery service
            </p>

            <div class="flex justify-center items-center">
              <button
                @click="proceedToLogX"
                class="font-semibold py-2 w-full text-white rounded-lg"
                style="background-color: #8b4e96"
              >
                Click here to proceed to LogX
              </button>
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

    proceedToLogX() {
      this.$emit("proceedToLogX");
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