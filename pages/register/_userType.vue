<template>
  <main style="background-color: #fdf4ff" class="h-screen">
    <section class="">
      <div
        class="overflow-hidden flex justify-center md:space-x-20 items-center pt-6"
      >
        <div class="w-10/12">
          <div class="flex justify-center items-center">
            <img src="@/assets/img/logo.svg" class="" alt="" />
          </div>
          <div class="mx-auto max-w-xl text-center sm:text-left">
            <section
              v-if="currentStep === 1"
              action=""
              class="mt-6 space-y-9 rounded-md md:rounded-lg md:p-10 md:shadow-md md:ring-1 mb-10 ring-gray-100 p-10 bg-white"
            >
              <div class="flex justify-center items-center flex-col space-y-2">
                <p style="color: #360040" class="text-sm md:text-base">
                  Kindly pick the option that best describes you below
                </p>
              </div>

              <div class="flex justify-center items-center">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div class="flex items-center space-x-3">
                    <div>
                      <input
                        id="shopper"
                        v-model="form.userType"
                        value="shopper"
                        type="radio"
                        class="h-4 w-4"
                        :checked="
                          $route.params.userType == 'shopper' ? true : false
                        "
                      />
                    </div>
                    <div>
                      <label
                        for="shopper"
                        class="font-medium cursor-pointer"
                        style="color: #360040"
                      >
                        I am a shopper
                      </label>
                    </div>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div>
                      <input
                        id="freelancer"
                        v-model="form.userType"
                        value="freelancer"
                        type="radio"
                        class="h-4 w-4"
                        :checked="
                          $route.params.userType == 'freelancer' ? true : false
                        "
                      />
                    </div>
                    <div>
                      <label
                        for="freelancer"
                        class="font-medium cursor-pointer"
                        style="color: #360040"
                      >
                        I am a freelancer
                      </label>
                    </div>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div>
                      <input
                        id="dropshipper"
                        v-model="form.userType"
                        value="dropshipper"
                        type="radio"
                        class="h-4 w-4"
                        :checked="
                          $route.params.userType == 'dropshipper' ? true : false
                        "
                      />
                    </div>
                    <div>
                      <label
                        for="dropshipper"
                        class="font-medium cursor-pointer"
                        style="color: #360040"
                      >
                        I am a dropshipper
                      </label>
                    </div>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div>
                      <input
                        id="merchant"
                        v-model="form.userType"
                        value="merchant"
                        type="radio"
                        class="h-4 w-4"
                      />
                    </div>
                    <div>
                      <label
                        for="merchant"
                        class="font-medium cursor-pointer"
                        style="color: #360040"
                        :checked="
                          $route.params.userType == 'merchant' ? true : false
                        "
                      >
                        I am a merchant
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                style="background-color: #8b4e96"
                class="block w-10/12 mx-auto rounded-lg px-5 py-2.5 md:py-3 text-base font-medium text-white"
                @click="next"
              >
                Continue
              </button>

              <p class="text-center text-sm text-gray-500 mt-3">
                Already have an account?
                <nuxt-link
                  style="color: #8b4e96"
                  class="font-medium"
                  to="/login"
                >
                  Login
                </nuxt-link>
              </p>
            </section>

            <section
              v-if="currentStep === 2"
              action=""
              class="mt-6 space-y-9 rounded-md md:rounded-lg md:p-10 md:shadow-md md:ring-1 mb-10 ring-gray-100 p-6 bg-white"
            >
              <div class="flex justify-center items-center flex-col space-y-2">
                <!-- <img src="@/assets/img/trustXLogo.svg" alt="" /> -->
                <p
                  class="text-center md:text-lg font-semibold"
                  style="color: #360040"
                >
                  Let’s verify your identity
                </p>
                <p style="color: #360040" class="text-sm">
                  Provide the correct details below
                </p>
              </div>
              <!--
              <div class="flex justify-center items-center flex-col space-y-2">
                <img
                  v-if="profilePreview && !uploadingProfile"
                  class="h-14 w-14 rounded-full object-cover"
                  :src="profilePreview"
                  alt=""
                />
                <spinner v-if="uploadingProfile"></spinner>
                <img
                  v-if="!profilePreview && !uploadingProfile"
                  class="h-16 w-16"
                  src="@/assets/img/userIcon.svg"
                  alt=""
                />
                <input
                  @change="handleProfileUpload"
                  class="hidden"
                  type="file"
                  id="profile"
                />
                <label
                  for="profile"
                  class="text-indigo-700 text-sm font-medium cursor-pointer"
                  :class="[
                    uploadingProfile ? 'opacity-25 cursor-not-allowed' : '',
                  ]"
                  >{{
                    uploadingProfile ? "Uploading..." : "Click to upload image"
                  }}</label
                >
              </div> -->

              <div>
                <label for="phone" class="sr-only">Phone</label>

                <div class="relative">
                  <input
                    v-model="form.phone"
                    type="tel"
                    class="w-full text-lg rounded-lg border py-2.5 pl-36 pr-6 outline-none border-none ring-1 ring-gray-300"
                    placeholder="903 3467 368"
                  />
                  <img
                    src="@/assets/img/phoneFlag.svg"
                    alt=""
                    class="absolute top-3 pl-4"
                  />
                  <img
                    src="@/assets/img/bisect.svg"
                    alt=""
                    class="absolute top-0 pl-32"
                  />
                </div>
              </div>
              <!--
              <div>
                <label for="email" class="sr-only">Email</label>

                <div class="relative">
                  <input
                    type="email"
                    class="w-full rounded-lg py-2.5 p-3 pr-6 outline-none border-none ring-1 ring-gray-300"
                    placeholder="Enter email address"
                    v-model="form.email"
                  />
                </div>
              </div> -->

              <div>
                <label for="password" class="sr-only">Password</label>

                <div class="relative">
                  <input
                    v-model="form.password"
                    :type="[showPassword ? 'text' : 'password']"
                    class="w-full rounded-lg px-4 py-3 border pr-12 text-sm outline-none border-none ring-1 ring-gray-300"
                    placeholder="Create Password"
                  />

                  <span
                    :class="[showPassword ? 'text-red-500' : 'text-green-500']"
                    class="absolute inset-y-0 font-bold text-sm right-0 grid place-content-center px-4 cursor-pointer"
                    @click="togglePassword"
                  >
                    {{ showPassword ? "Hide" : "Show" }}
                  </span>
                </div>
                <div class="flex flex-start justify-start pt-1">
                  <p style="color: #360040" class="font-light text-sm">
                    {{
                      form.password.length < 8
                        ? "Must be at least 8 characters long"
                        : ""
                    }}
                  </p>
                </div>
              </div>

              <button
                :disabled="loading"
                type="submit"
                style="background-color: #8b4e96"
                class="block w-full rounded-lg px-5 py-2.5 md:py-3 text-base font-medium text-white"
                @click="handleSubmit"
              >
                {{ loading ? "Processing..." : "Verify" }}
              </button>

              <div class="flex items-center space-x-3">
                <p class="h-0.5 w-6/12 bg-gray-200"></p>
                <p>or</p>
                <p class="h-0.5 w-6/12 bg-gray-200"></p>
              </div>

              <button
                :disabled="loading"
                type="submit"
                style="background-color: #8b4e96"
                class="block w-full rounded-lg text-sm px-5 py-2.5 font-medium text-white"
                @click="handleSubmit"
              >
                <img
                  src="@/assets/img/linkedin.png"
                  class="inline h-6 w-7 pr-2"
                />
                Signup with Linkedin
              </button>

              <button
                :disabled="loading"
                type="submit"
                style="background-color: #8b4e96"
                class="block text-sm w-full rounded-lg px-5 py-2.5  font-medium text-white"
                @click="handleSubmit"
              >
                <img
                  src="@/assets/img/behance.png"
                  class="inline h-6 w-7 pr-2"
                />
                Signup with Behance
              </button>
            </section>

            <section
              v-if="currentStep === 3"
              action=""
              class="mt-6 space-y-9 md:rounded-lg p-6 md:p-10 md:shadow-md md:ring-1 mb-10 ring-gray-100 sm:p-6 lg:p-8 bg-white"
            >
              <div class="flex justify-center items-center flex-col space-y-2">
                <img src="@/assets/img/trustXLogo.svg" alt="" />
                <p
                  class="text-center text-lg font-semibold"
                  style="color: #360040"
                >
                  Let’s verify your identity
                </p>
                <p style="color: #360040" class="text-sm md:text-base">
                  A code has been sent to you on your phone number +234
                  *******{{ form.phone.slice(-3) }}. Please type code below.
                </p>
              </div>

              <div class="flex justify-center items-center space-x-4">
                <div>
                  <input
                    v-model="first_otp_value"
                    type="tel"
                    class="border outline-none rounded-xl h-16 w-16 text-center"
                  />
                </div>
                <div>
                  <input
                    v-model="second_otp_value"
                    type="tel"
                    class="border outline-none rounded-xl h-16 w-16 text-center"
                  />
                </div>
                <div>
                  <input
                    v-model="third_otp_value"
                    type="tel"
                    class="border outline-none rounded-xl h-16 w-16 text-center"
                  />
                </div>
                <div>
                  <input
                    v-model="fourth_otp_value"
                    type="tel"
                    class="border outline-none rounded-xl h-16 w-16 text-center"
                  />
                </div>
              </div>

              <div class="space-y-6">
                <button
                  :disabled="verifyingOtp"
                  type="submit"
                  style="background-color: #8b4e96"
                  class="block w-full rounded-lg px-5 py-2.5 md:py-3 text-base font-medium text-white"
                  @click="verifyOtp"
                >
                  {{ verifyingOtp ? "Verifying..." : "Verify" }}
                </button>

                <button
                  type="submit"
                  style="color: #8b4e96"
                  class="block w-full rounded-lg px-5 py-2.5 md:py-3 text-base font-medium border-2 border-purple-600"
                >
                  Resend code
                </button>
              </div>
            </section>

            <section
              v-if="currentStep === 4"
              action=""
              class="mt-6 space-y-9 md:rounded-lg p-10 md:shadow-md md:ring-1 mb-10 bg-white md:ring-gray-100 sm:p-6 lg:p-8"
            >
              <div class="flex justify-center items-center flex-col space-y-2">
                <img src="@/assets/img/trustXLogo.svg" alt="" />
                <p
                  class="text-center text-lg font-semibold"
                  style="color: #360040"
                >
                  Verification successful
                </p>
                <p style="color: #360040">
                  Click the button below to view your dashboard
                </p>
              </div>

              <div class="flex justify-center items-center">
                <img src="@/assets/img/successCheck.svg" alt="" />
              </div>

              <button
                type="submit"
                style="background-color: #8b4e96"
                class="block w-full rounded-lg px-5 py-2.5 md:py-3 text-base font-medium text-white"
                @click="redirectToDashboard"
              >
                Proceed to dashboard
              </button>
            </section>
          </div>
        </div>

        <!-- <div class="space-y-6 hidden md:block md:w-1/2">
          <h1 class="text-5xl font-bold text-white">Useful products.</h1>
          <h1 class="text-5xl font-bold ml-10 text-white">
            With brands you trust.
          </h1>
          <img src="@/assets/img/signup_brands.jpg" alt="" />
        </div> -->
      </div>
    </section>
    <a
      href="https://api.whatsapp.com/send?phone=8135924737&text=Hello from Team X. Welcome to TrustXWallet. Kindly provide your full name and your trust ID while our support officer reach out to you shortly. Thank you for your patience. As patience has a gain as a yourba city known as (Surulere)."
      style="background-color: #8b4e96"
      class="rounded-md border shadow-lg px-3 py-2 absolute bottom-3 right-6 text-white font-medium text-sm cursor-pointer "
    >
      <span class="rounded-full p-3 text-white text-sm">?</span>Support X
    </a>
  </main>
</template>

<script>
export default {
  layout: "authLayout",
  data() {
    return {
      currentStep: 1,
      activeUserType: "",
      uploadingFile: false,
      uploadingProfile: false,
      profilePreview: "",
      showPassword: false,
      userId: "",
      form: {
        userType: true,
        avatar: "",
        phone: "",
        password: "",
        email: "",
      },
      verifyingOtp: false,
      third_otp_value: "",
      first_otp_value: "",
      second_otp_value: "",
      fourth_otp_value: "",
      loading: false,
    };
  },
  mounted() {
    this.userId = localStorage.getItem("userId");
    // this.$nextTick(() => {
    //   this.msg = 'Third message'
    // })
    this.activeUserType = this.$route.params.userType;
    if (this.activeUserType) {
      this.currentStep = 2;
    } else {
      this.currentStep = 1;
    }
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    // async handleProfileUpload(e) {
    //   this.form.avatar = e.target.files[0];
    //   this.profilePreview = URL.createObjectURL(this.form.avatar);
    // },
    next() {
      this.currentStep += 1;
    },
    async handleSubmit() {
      this.loading = true;
      // if (!this.form.avatar) {
      //   this.$toast.error("Please upload an image").goAway(1500);
      //   this.loading = false;
      //   return;
      // }
      try {
        // const formData = new FormData();
        // formData.append("profile", this.form.avatar);
        // formData.append("phone", this.form.phone);
        // formData.append("password", this.form.password);
        // formData.append("email", this.form.email);
        // formData.append("userType", this.form.userType);

        const payload = {
          phone: this.form.phone,
          password: this.form.password,
          userType: this.activeUserType,
        };

        const result = await this.$axios.post(
          "https://trustwallet-oana.onrender.com/api/user/signup",
          payload
        );

        if (process.client) {
          localStorage.setItem("userId", result.data.data.userId);
        }
        this.userId = result.data.userId;
        this.$toast.success(result.data.successMessage).goAway(2000);
        this.currentStep += 1;
        this.loading = false;
      } catch (error) {
        console.log(error.response);
        // this.$toast.error(error.response.data.errorMessage).goAway(1500);
        this.loading = false;
      }
    },

    async verifyOtp() {
      this.verifyingOtp = true;
      try {
        const payload = {
          userId: localStorage.getItem("userId"),
          otp: `${this.first_otp_value}${this.second_otp_value}${this.third_otp_value}${this.fourth_otp_value}`,
        };
        const result = await this.$axios.post(
          "https://trustwallet-oana.onrender.com/api/user/verifyOtp",
          payload
        );

        console.log(result.data.user);

        this.currentStep += 1;
        if (process.client) {
          localStorage.setItem("user", JSON.stringify(result.data.user));
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.verifyingOtp = false;
      }
    },

    redirectToDashboard() {
      if (this.form.userType === "dropshipper") {
        this.$router.push("/dashboard/dropshippers");
      }

      if (this.form.userType === "merchant") {
        this.$router.push("/dashboard/merchant");
      }

      if (this.form.userType === "shopper") {
        this.$router.push("/dashboard/shoppers");
      }

      if (this.form.userType === "freelancer") {
        this.$router.push("/dashboard/freelancers");
      }
    },
  },
};
</script>

<style scoped>
input[type="radio"] {
  accent-color: #c9deeb;
}
</style>
