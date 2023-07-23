<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="w-full">
    <div class="w-full overflow-y-auto px-6 md:px-14 py-6 space-y-10">
      <div class="flex justify-between items-center">
        <div>
          <h1 style="color: #360040" class="hidden md:block font-bold text-xl">
            Settings
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
            <p class="pt-0 mt-0 text-sm" style="color: #360040">
              {{ loggedInUser && loggedInUser.phone.slice(1) }}
            </p>
            <div class="absolute top-1 right-8 md:right-6">
              <img src="@/assets/img/star_icon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-11/12 mx-auto mt-20">
      <main class="shadow-lg bg-white rounded-lg pb-10">
        <div class="flex justify-center items-center relative">
          <div
            class="flex justify-center items-center flex-col absolute -top-10"
          >
            <div class="pb-2">
              <img src="@/assets/img/profile.svg" alt="" />
            </div>
            <h3 style="color: #360040" class="font-bold text-xl mt-0 pt-0">
              John Dumelo Doe
            </h3>
            <p style="color: #360040" class="mt-2 pt-2 text-sm">
              ID : {{ loggedInUser && loggedInUser.phone.slice(1) }}
            </p>
          </div>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 p-7 md:p-16 pt-40 md:pb-20 md:pt-52"
        >
          <div
            @click="$router.push('/dashboard/settings/profile')"
            class="flex items-center justify-between border border-purple-400 px-5 py-3 rounded-md cursor-pointer"
          >
            <div class="flex items-center space-x-3">
              <img src="@/assets/img/view_profile.svg" />
              <p style="color: #8b4e96">View Profile</p>
            </div>

            <div>
              <img src="@/assets/img/greaterThan.svg" />
            </div>
          </div>

          <div
            class="flex items-center justify-between border border-purple-400 px-5 py-3 rounded-md"
          >
            <div class="flex items-center space-x-3">
              <img src="@/assets/img/faqs.svg" />
              <p style="color: #8b4e96">FAQs</p>
            </div>

            <div>
              <img src="@/assets/img/greaterThan.svg" />
            </div>
          </div>

          <div
            class="flex items-center justify-between border border-purple-400 px-5 py-3 rounded-md"
          >
            <div class="flex items-center space-x-3">
              <img src="@/assets/img/terms_condition.svg" />
              <p style="color: #8b4e96">Terms & Condition</p>
            </div>

            <div>
              <img src="@/assets/img/greaterThan.svg" />
            </div>
          </div>

          <a
            href="https://api.whatsapp.com/send?phone=8135924737&text=Hello from Team X. Welcome to TrustXWallet. Kindly provide your full name and your trust ID while our support officer reach out to you shortly. Thank you for your patience. As patience has a gain as a yourba city known as (Surulere)."
            class="flex items-center justify-between border border-purple-400 px-5 py-3 rounded-md cursor-pointer"
          >
            <div class="flex items-center space-x-3">
              <img src="@/assets/img/contact_us.svg" />
              <p style="color: #8b4e96">Contact Us</p>
            </div>

            <div>
              <img src="@/assets/img/greaterThan.svg" />
            </div>
          </a>
        </div>

        <div
          @click="handleLogout"
          class="flex justify-center items-center cursor-pointer"
        >
          <div class="flex items-center space-x-3">
            <p style="color: #8b4e96" class="font-medium">Sign out</p>
            <img src="@/assets/img/logout.svg" alt="" />
          </div>
        </div>
      </main>
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
    return {
      loggedInUser: null,
    };
  },
  mounted() {
    const loggedUser = localStorage.getItem("user");
    this.loggedInUser = loggedUser !== null ? JSON.parse(loggedUser) : "";
  },
  methods: {
    handleLogout() {
      localStorage.removeItem("user");
      // TODO : SETUP SWAL MODAL
      this.$router.push("/login");
    },
  },
};
</script>
