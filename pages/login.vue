<template>
  <main
    style="background-color: #fdf4ff"
    class="h-screen bg-green-200 relative"
  >
    <section class="">
      <div
        class="overflow-hidden flex justify-center md:space-x-20 items-center pt-20"
      >
        <div class="w-11/12 md:w-10/12">
          <div class="mx-auto max-w-xl text-center sm:text-left space-y-9">
            <div class="flex justify-center items-center">
              <img src="@/assets/img/logo.svg" class="" alt="" />
            </div>
            <form
              @submit.prevent="handleLogin"
              class="mt-6 space-y-9 rounded-md md:rounded-lg md:shadow-md md:ring-1 mb-10 md:ring-gray-100 md:bg-white  md:p-10"
            >
              <div class="flex justify-center items-center flex-col space-y-2">
                <p
                  class="text-center text-lg font-semibold"
                  style="color: #360040"
                >
                  Hi, welcome back
                </p>
                <p style="color: #360040" class="text-sm md:text-base">
                  Enter your login details below
                </p>
              </div>

              <div>
                <label for="trustID" class="sr-only">Trust ID</label>

                <div class="relative">
                  <input
                    type="tel"
                    class="w-full rounded-lg p-3 pr-12 text-sm outline-none border focus:border-green-500 focus:outline-teal-500"
                    placeholder="Trust ID"
                    v-model="form.trustId"
                  />
                </div>
              </div>

              <div>
                <label for="password" class="sr-only">Password</label>

                <div class="relative">
                  <input
                    type="password"
                    class="w-full rounded-lg px-4 py-3 pr-12 text-sm outline-none border focus:border-green-500 focus:outline-teal-500"
                    placeholder="Password"
                    v-model="form.password"
                  />

                  <span
                    class="absolute inset-y-0 right-0 grid place-content-center px-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <!-- <div class="flex justify-between items-center mt-1 pt-1">
                <div class="flex items-center space-x-3">
                  <input type="checkbox" />
                  <p class="text-sm md:text-base">Remember Me</p>
                </div>
                <nuxt-link
                  class="text-sm md:text-base"
                  style="color: #39b200"
                  to="/"
                  >Forgot password?</nuxt-link
                >
              </div> -->

              <button
                :disabled="!isFormValid && loading"
                type="submit"
                style="background-color: #8b4e96"
                class="block w-full text-sm rounded-lg px-5 py-2.5 md:py-3 text-base font-medium text-white"
              >
                {{ loading ? "processing..." : "Login" }}
              </button>
            </form>
            <p
              style="color: #8b4e96"
              class="text-center text-sm text-gray-200 mt-3 font-semibold"
            >
              New to TrustXWallet?
              <nuxt-link
                style="color: #8b4e96"
                class="underline font-semibold"
                to="/signup"
                >Sign up</nuxt-link
              >
            </p>
          </div>
        </div>

        <!-- <div class="space-y-6 hidden md:block md:w-1/2">
          <h1 class="text-5xl font-bold text-white">High impact.</h1>
          <h1 class="text-5xl font-bold ml-10 text-white">
            With brands you trust.
          </h1>
          <img src="@/assets/img/login_brands.jpg" class="" alt="" />
        </div> -->
      </div>
    </section>
    <a
      href="https://api.whatsapp.com/send?phone=8135924737&text=Hello from Team X. Welcome to TrustXWallet. Kindly provide your full name and your trust ID while our support officer reach out to you shortly. Thank you for your patience. As patience has a gain as a yourba city known as (Surulere)."
      style="background-color: #8b4e96"
      class="rounded-md border shadow-lg px-3 py-2 absolute bottom-6 right-6 text-white font-medium text-sm cursor-pointer"
    >
      <span class="rounded-full p-3 text-white">?</span>Support X
    </a>
  </main>
</template>

<script>
export default {
  layout: "authLayout",
  data() {
    return {
      loading: false,
      form: {
        trustId: "",
        password: "",
      },
    };
  },
  computed: {
    isFormValid() {
      return this.form.trustId && this.form.password ? true : false;
    },
  },
  // mounted() {
  //   this.handleRedirection();
  // },
  methods: {
    handleRedirection() {
      let userTrustId = localStorage.getItem("trustId");
      let userType = localStorage.getItem("userType");
      if (userTrustId.length) {
        this.$router.push(`/dashboard/user/${userType}`);
      }
    },
    async handleLogin() {
      this.loading = true;
      const payload = {
        trustId: this.form.trustId,
        password: this.form.password,
      };
      await this.$axios
        .post(`https://trustwallet-oana.onrender.com/api/user/signin`, payload)
        .then((result) => {
          if (process.client) {
            delete result.data.user.password;
            localStorage.setItem("user", JSON.stringify(result.data.user));
          }

          if (result.data.user.userType === "shopper") {
            this.$router.push("/dashboard/shoppers");
          }

          if (result.data.user.userType === "merchant") {
            this.$router.push("/dashboard/merchants");
          }

          if (result.data.user.userType === "freelancer") {
            this.$router.push("/dashboard/freelancers");
          }

          if (result.data.user.userType === "dropshipper") {
            this.$router.push("/dashboard/dropshippers");
          }
        })
        .catch((error) => {
          this.$toast.error(error.response.data.errorMessage).goAway(1500);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style>
</style>
