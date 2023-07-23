<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="w-full">
    <div class="w-full overflow-y-auto px-6 md:px-14 py-6 space-y-10">
      <div class="flex justify-between items-center">
        <div>
          <h1 style="color: #360040" class="hidden md:block font-bold text-xl">
            Support
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
            <div class="absolute top-1 right-8 md:right-6">
              <img src="@/assets/img/star_icon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-11/12 mx-auto">
      <div>
        <p class="font-semibold" style="color: #360040">
          Get the help you need
        </p>
        <p class="text-medium" style="color: #360040">
          Please be patient while you are being attended to
        </p>
      </div>

      <div class="mt-20">
        <img src="@/assets/img/support.svg" alt="support" />
      </div>
    </div>
  </main>
</template>

<script>
import Pusher from "pusher-js";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",
  components: {},
  layout: "dashboardLayout",
  data() {
    return {
      username: "username",
      message: "",
      messages: [],
    };
  },
  mounted() {
    const pusher = new Pusher("ab324e57b86338de0f6b", {
      cluster: "mt1",
    });

    const channel = pusher.subscribe("chat");
    channel.bind("message", (data) => {
      this.messages.push(data);
    });
  },
  methods: {
    async submit() {
      await this.$axios.post("https://trustxwallet.onrender.com/api/messages", {
        username: this.username,
        message: this.message,
      });
      this.message = "";
    },
  },
};
</script>
