<template>
  <main class="flex">
    <ssr-carousel show-dots :slides-per-page="4" :autoplay-delay="5" loop>
      <slide class="" v-for="(slide, index) in carouselContents" :key="index">
        <img
          class="border-2 border-green-500"
          :src="require(`~/assets/img/${slide.imageUrl}`)"
          alt=""
        />
      </slide>
    </ssr-carousel>
  </main>
</template>

<script>
import SsrCarousel from "vue-ssr-carousel";
export default {
  components: {
    "ssr-carousel": SsrCarousel,
  },
  data() {
    return {
      carouselContents: [
        {
          id: 1,
          imageUrl: "company1.svg",
        },
        {
          id: 2,
          imageUrl: "company2.svg",
        },
        {
          id: 3,
          imageUrl: "company3.svg",
        },
        {
          id: 4,
          imageUrl: "company4.svg",
        },
        {
          id: 5,
          imageUrl: "company5.svg",
        },
        {
          id: 6,
          imageUrl: "company6.svg",
        },
        {
          id: 7,
          imageUrl: "company7.svg",
        },
        {
          id: 8,
          imageUrl: "company8.svg",
        },
        {
          id: 9,
          imageUrl: "company9.svg",
        },
        {
          id: 10,
          imageUrl: "company10.svg",
        },
        {
          id: 11,
          imageUrl: "company11.svg",
        },
        {
          id: 12,
          imageUrl: "company12.svg",
        },
        {
          id: 13,
          imageUrl: "company13.svg",
        },
        {
          id: 14,
          imageUrl: "company14.svg",
        },
        {
          id: 15,
          imageUrl: "company15.svg",
        },
        {
          id: 16,
          imageUrl: "company16.svg",
        },
        {
          id: 17,
          imageUrl: "company17.svg",
        },
        {
          id: 18,
          imageUrl: "company18.svg",
        },
        // {
        //   id: 19,
        //   imageUrl: "company19.svg",
        // },
        // {
        //   id: 20,
        //   imageUrl: "company20.svg",
        // },
        // {
        //   id: 21,
        //   imageUrl: "company21.svg",
        // },
        // {
        //   id: 22,
        //   imageUrl: "company22.svg",
        // },
        // {
        //   id: 23,
        //   imageUrl: "company23.svg",
        // },
        // {
        //   id: 24,
        //   imageUrl: "company24.svg",
        // },
        // {
        //   id: 25,
        //   imageUrl: "company25.svg",
        // },
      ],
    };
  },
};
</script>

<style>
</style>
