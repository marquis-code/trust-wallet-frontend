<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="w-full">
    <div class="w-full h-screen overflow-y-auto px-6 md:px-14 py-6 space-y-9">
      <div
        class="flex flex-row justify-end items-end md:justify-between md:items-center"
      >
        <div class="hidden md:flex md:items-center space-x-3">
          <nuxt-link
            to="/dashboard/settings"
            style="color: #360040"
            class="hidden md:block font-bold text-xl"
          >
            Settings
          </nuxt-link>
          <div><img src="@/assets/img/greaterThan.svg" alt="" /></div>
          <p>Profile</p>
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
          <div class="">
            <div class="">
              <img src="@/assets/img/star_icon.svg" alt="" />
            </div>

            <div>
              <p style="color: #360040" class="md:text-xl font-bold pb-0 mb-0">
                Ama
              </p>
              <p class="pt-0 mt-0 text-sm" style="color: #360040">{{ loggedInUser && loggedInUser.phone.slice(1) }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center w-full">
        <div class="flex items-center space-x-3">
          <div class="pb-2">
            <img src="@/assets/img/profile.svg" class="h-20 w-20" alt="" />
          </div>
          <div>
            <h3 style="color: #360040" class="font-bold text-xl mt-0 pt-0">
              John Dumelo Doe
            </h3>
            <p style="color: #360040" class="mt-0 pt-0 text-sm">
              ID : {{ loggedInUser && loggedInUser.phone.slice(1) }}
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-7 md:px-10">
        <div class="space-y-3">
          <label class="text-sm">First Name</label>
          <div class="relative">
            <input
              type="text"
              value="John"
              readonly
              class="py-3 w-full px-3 outline-none border rounded-md text-gray-500 font-light text-sm shadow-md"
            />
            <div class="flex justify-end items-end pr-6">
              <p
                class="absolute top-4 font-semibold cursor-pointer"
                style="color: #8b4e96"
              >
                Edit
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-3">
          <label class="text-sm">Middle Name</label>
          <div class="relative">
            <input
              type="text"
              value="Dumelo"
              readonly
              class="py-3 w-full px-3 outline-none border rounded-md text-gray-500 font-light text-sm shadow-md"
            />
            <div class="flex justify-end items-end pr-6">
              <p
                class="absolute top-4 font-semibold cursor-pointer"
                style="color: #8b4e96"
              >
                Edit
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-3">
          <label class="text-sm">Surname</label>
          <div class="relative">
            <input
              type="text"
              value="Doe"
              readonly
              class="py-3 w-full px-3 outline-none border rounded-md text-gray-500 font-light text-sm shadow-md"
            />
            <div class="flex justify-end items-end pr-6">
              <p
                class="absolute top-4 font-semibold cursor-pointer"
                style="color: #8b4e96"
              >
                Edit
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-3">
          <label class="text-sm">Shipping Address</label>
          <div class="relative">
            <input
              type="text"
              value="Block B, Ajao estate"
              readonly
              class="py-3 w-full px-3 outline-none border rounded-md text-gray-500 font-light text-sm shadow-md"
            />
            <div class="flex justify-end items-end pr-6">
              <p
                class="absolute top-4 font-semibold cursor-pointer"
                style="color: #8b4e96"
              >
                Edit
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-3">
          <label class="text-sm">Email Address</label>
          <div class="relative">
            <input
              type="text"
              value="example@gmail.com"
              readonly
              class="py-3 w-full px-3 outline-none border rounded-md text-gray-500 font-light text-sm shadow-sm"
            />
            <div class="flex justify-end items-end pr-6">
              <p
                class="absolute top-4 font-semibold cursor-pointer"
                style="color: #8b4e96"
              >
                Edit
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-3">
          <label class="text-sm">Phone Number</label>
          <div class="relative">
            <input
              type="text"
              value="09025675527"
              readonly
              class="py-3 w-full px-3 outline-none border rounded-md text-gray-500 font-light text-sm shadow-sm"
            />
            <div class="flex justify-end items-end pr-6">
              <p
                class="absolute top-4 font-semibold cursor-pointer"
                style="color: #8b4e96"
              >
                Edit
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-3">
          <label class="text-sm">Category (optional for buyers)</label>
          <div class="relative">
            <input
              type="text"
              value="Let’s know what you sell here"
              readonly
              class="py-3 w-full px-3 outline-none border rounded-md text-gray-500 font-light text-sm shadow-sm"
            />
            <div class="flex justify-end items-end pr-6">
              <p
                class="absolute top-4 font-semibold cursor-pointer"
                style="color: #8b4e96"
              >
                Edit
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center">
        <button
          style="background-color: #8b4e96"
          class="py-2.5 text-white px-10 text-sm rounded-md"
        >
          Save changes
        </button>
      </div>
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
  methods: {},
};
</script>
