<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <main class="">
    <div class="relative hidden lg:block">
      <div class="flex justify-between py-20" style="background-color: #fdf4ff">
        <img src="@/assets/img/map1.svg" alt="" />
        <img src="@/assets/img/map2.svg" alt="" />
        <!-- <img src="@/assets/img/map3.svg" alt="" /> -->
      </div>

      <section
        class="overflow-hidden sm:grid sm:grid-cols-2 absolute top-6 py-10 space-y-10"
      >
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="mx-auto max-w-xl sm:text-left space-y-8">
            <div class="">
              <div class="flex items-center space-x-2">
                <p style="color: #8b4e96">Alipay of Africa</p>
                <img src="@/assets/img/world.svg" alt="" />
              </div>
              <p class="text-2xl font-bold text-gray-900 md:text-4xl">
                <span style="color: #8b4e96">Safe</span> and
                <span style="color: #8b4e96">Seamless</span> transaction for
                African E-commerce
              </p>
            </div>

            <p
              style="color: #360040"
              class="hidden text-gray-500 md:mt-4 font-medium md:block leading-loose"
            >
              TrustXwallet allows online marketplace transaction possible with
              anyone and anywhere in the world at zero risk, providing different
              escrow needs
            </p>

            <div class="mt-4 md:mt-8 flex items-center space-x-5">
              <nuxt-link
                style="background-color: #8b4e96; color: #fae1ff"
                to="/login"
                class="inline-block font-medium rounded px-6 py-3 text-sm text-white transition hover:bg-emerald-700 focus:outline-none focus:ring"
              >
                Create escrow wallet now
              </nuxt-link>
              <a
                href="https://api.whatsapp.com/send?phone=8135924737&text=Hello from Team X. Welcome to TrustXWallet. Kindly provide your full name and your trust ID while our support officer reach out to you shortly. Thank you for your patience. As patience has a gain as a yourba city known as (Surulere)."
                style="color: #8b4e96"
                class="font-medium"
              >
                Or Contact SupportX
              </a>
              <div><img src="@/assets/img/emoji.svg" alt="emoji" /></div>
            </div>

            <div class="space-y-3 pt-20">
              <p style="color: #360040" class="font-medium">
                Trusted by 100,000+ online users (Buyers and sellers)
              </p>
              <div class="flex items-center space-x-3">
                <img src="@/assets/img/avatar1.svg" alt="" />
                <img src="@/assets/img/avatar2.svg" alt="" />
                <img src="@/assets/img/avatar3.svg" alt="" />
                <img src="@/assets/img/avatar4.svg" alt="" />
                <img src="@/assets/img/avatar5.svg" alt="" />
                <img src="@/assets/img/avatar6.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="z-10">
          <div class="relative flex justify-end items-end z-10">
            <div class="flex flex-col">
              <div>
                <img
                  alt="Student"
                  :src="
                    require(`@/assets/img/${rotatingCTAImages[activeRotatingHeader].imageUrl}`)
                  "
                  class="object-cover h-[500px]"
                />
              </div>
              <div class="flex items-center space-x-3 justify-center">
                <p style="color: #360040" class="font-medium w-1/2 text-sm">
                  Watch our top-sellers explain how their businesses scaled up,
                  discuss working with TrustXWallet
                </p>
                <div><img src="@/assets/img/mediaIcon.svg" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
        <!---->
      </section>
    </div>

    <section
      class="lg:hidden lg:pt-0 relative z-0"
      style="background-color: #fdf4ff"
    >
      <div
        class="flex justify-between flex-col py-20 z-0"
        style="background-color: #fdf4ff"
      >
        <img src="@/assets/img/map1.svg" alt="" />
        <img src="@/assets/img/map3.svg" alt="" />
        <img src="@/assets/img/map2.svg" alt="" />
      </div>

      <div class="p-8 md:p-12 lg:px-16 lg:py-24 space-y-6 z-50 absolute top-0">
        <div class="mx-auto max-w-xl sm:text-left space-y-2">
          <div class="flex items-center space-x-2">
            <p style="color: #8b4e96">Alipay of Africa</p>
            <img src="@/assets/img/world.svg" alt="" />
          </div>
          <h2 class="text-3xl font-bold text-gray-900 md:text-3xl">
            <span style="color: #8b4e96">Safe</span> and
            <span style="color: #8b4e96">Seamless</span> transaction for African
            E-commerce
          </h2>
        </div>
        <div class="mx-auto max-w-xl sm:text-left space-y-8">
          <p
            style="color: #360040"
            class="text-gray-500 md:mt-4 md:block font-light text-sm"
          >
            TrustXwallet allows online marketplace transaction possible with
            anyone and anywhere in the world at zero risk, providing different
            escrow needs
          </p>

          <div
            class="mt-4 md:mt-8 flex justify-center flex-col items-center space-y-9 pb-6 lg:pb-0"
          >
            <nuxt-link
              style="background-color: #8b4e96; color: #fae1ff"
              to="/login"
              class="font-medium rounded w-full py-2.5 text-sm text-white transition hover:bg-emerald-700 focus:outline-none flex justify-center items-center"
            >
              Create a free escrow wallet
            </nuxt-link>

            <div
              class="cursor-pointer flex items-center ring-1 ring-offset-fuchsia-400 w-full py-2.5 rounded-md justify-center"
            >
              <a
                href="https://api.whatsapp.com/send?phone=8135924737&text=Hello from Team X. Welcome to TrustXWallet. Kindly provide your full name and your trust ID while our support officer reach out to you shortly. Thank you for your patience. As patience has a gain as a yourba city known as (Surulere)."
                style="color: #8b4e96"
                class="font-medium"
              >
                Or Contact SupportX
              </a>
              <div><img src="@/assets/img/emoji.svg" alt="emoji" /></div>
            </div>
          </div>

          <div class="relative z-0">
            <img
              alt="Student"
              :src="
                require(`@/assets/img/${rotatingCTAImages[activeRotatingHeader].imageUrl}`)
              "
              class="object-cover h-[360px]"
            />
          </div>

          <div class="space-y-3 pt-10">
            <p style="color: #360040" class="font-medium text-sm">
              Trusted by 100,000+ online users
            </p>
            <div class="flex items-center space-x-4">
              <img src="@/assets/img/avatar1.svg" class="h-10 w-10" alt="" />
              <img src="@/assets/img/avatar2.svg" class="h-10 w-10" alt="" />
              <img src="@/assets/img/avatar3.svg" class="h-10 w-10" alt="" />
              <img src="@/assets/img/avatar4.svg" class="h-10 w-10" alt="" />
              <img src="@/assets/img/avatar5.svg" class="h-10 w-10" alt="" />
              <img src="@/assets/img/avatar6.svg" class="h-10 w-10" alt="" />
            </div>
          </div>

          <div class="space-y-4 pt-6">
            <p style="color: #360040" class="font-light text-sm">
              Watch our top-sellers explain how their businesses scaled up,
              discuss working with TrustXWallet
            </p>

            <div class="flex items-center space-x-3">
              <div>
                <img src="@/assets/img/mediaIcon.svg" class="h-6 w-6" alt="" />
              </div>
              <p style="color: #ba68c8" class="text-sm">Play Video</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="bg-white py-20">
      <div
        class="lg:flex items-center space-y-10 lg:space-y-0 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 lg:space-x-40"
      >
        <div class="lg:w-1/2">
          <img src="@/assets/img/advertWoman.svg" alt="" />
        </div>
        <div class="lg:w-1/2 space-y-3 px-2 lg:px-0">
          <h1
            class="lg:font-semibold font-black text-2xl"
            style="color: #360040"
          >
            What is TrustXwallet?
          </h1>
          <div style="color: #360040" class="space-y-6 font-medium lg:px-0">
            <p class="leading-loose text-justify">
              TrustXWallet is the ultimate solution for secure and reliable
              online transactions. Our platform is designed to make online
              transactions quick, efficient, and hassle-free, ensuring that
              everyone can carry out their transactions with confidence. Our
              vision is to create a world where anyone with a business idea can
              start their own business without the need for a website or
              physical store. We believe in the power of technology to transform
              the way people do business, and we're committed to providing the
              most innovative and trustworthy escrow services to our users.
            </p>

            <p class="hidden lg:block text-lg leading-loose text-justify">
              At TrustXWallet, we prioritize credibility and reliability between
              buyers and sellers. Our platform ensures that all transactions are
              secure and transparent, and we use the latest encryption and
              security protocols to protect our users' data and funds. We
              understand that trust is the foundation of any successful
              transaction, and we're dedicated to building trust between our
              users by providing a safe and reliable platform for all their
              escrow needs.
            </p>

            <p class="hidden lg:block text-lg leading-loose text-justify">
              As digital innovation continues to transform the financial
              industry, we're committed to staying ahead of the curve and
              providing our users with the most advanced and efficient escrow
              services available. With TrustXWallet, you can carry out your
              transactions with confidence, knowing that your funds and data are
              safe and secure. So why wait? Sign up today and experience the
              future of online transactions with TrustXWallet.
            </p>
            <div class="hidden lg:flex items-center space-x-3">
              <img src="@/assets/img/nextButton.svg" alt="" />
              <p style="color: #8b4e96" class="font-semibold">
                See the people at TeamX and what we set to achieve
              </p>
            </div>
            <div class="lg:hidden flex items-center space-x-3">
              <img src="@/assets/img/nextButton.svg" alt="" />
              <p style="color: #8b4e96" class="font-semibold">
                See the people at TeamX
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="mx-auto max-w-screen-xl pb-32 px-4 sm:px-6 lg:px-8">
        <div class="space-y-2 pb-10">
          <p style="color: #360040" class="text-3xl font-black">
            Safe and seamless experience
          </p>
          <p class="font-medium lg:w-1/2" style="color: #360040">
            Transactions are secure and transparent through the use of latest
            encryption and security protocols to protect our user’s data and
            funds.
          </p>
        </div>

        <div
          class="lg:flex justify-center items-center space-y-10 lg:space-y-0 lg:space-x-40"
        >
          <div class="lg:w-1/2">
            <img
              src="@/assets/img/logxdelivery.svg"
              class="object-cover h-[600px]"
              alt=""
            />
          </div>
          <div class="lg:w-1/2 space-y-8">
            <div>
              <p style="color: #360040" class="text-xl md:text-3xl font-black">
                Guaranteed product quality, every time
              </p>
              <p class="leading-loose font-medium" style="color: #360040">
                Don't take chances with your online purchases choose our escrow
                services for guaranteed product quality and complete peace of
                mind.
              </p>
            </div>

            <div>
              <p style="color: #360040" class="text-xl md:text-3xl font-black">
                Guaranteed product quality, every time
              </p>
              <p class="leading-loose font-medium" style="color: #360040">
                Our platform provides a secure and trusted environment for
                buyers and sellers to transact, with funds held in escrow until
                both parties are satisfied with the transaction.
              </p>
            </div>

            <div>
              <p style="color: #360040" class="text-xl md:text-3xl font-black">
                Experience unbeatable transaction success
              </p>
              <p class="leading-loose font-medium" style="color: #360040">
                We ensure that both buyers and sellers have full confidence in
                the transaction and reduces the risk of fraud or disputes
                through the most optimal channels.
              </p>
            </div>
            <div class="flex items-center space-x-3">
              <img src="@/assets/img/nextButton.svg" alt="" />
              <p style="color: #8b4e96" class="font-semibold">
                Discover the secret to our success rates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section style="background-color: #fdf4ff" class="">
      <div
        class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
      >
        <div
          class="lg:flex-row justify-center items-center lg:space-x-20 flex space-y-10 flex-col-reverse"
        >
          <div class="lg:py-24 lg:w-1/2 space-y-8">
            <div class="space-y-3">
              <h2
                class="text-xl lg:text-3xl font-extrabold"
                style="color: #360040"
              >
                Existing escrow chain to aid credibility and transparency
              </h2>

              <p class="mt-4 font-medium" style="color: #360040">
                Our escrow chain is designed to provide full visibility into the
                transaction process, so buyers and sellers can see exactly where
                their funds are at all times.
              </p>
            </div>

            <div class="space-y-10">
              <div class="leading-relaxed flex items-center space-x-3">
                <div
                  class="rounded-lg p-3 flex justify-center items-center"
                  style="background-color: #fbe2ff"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#75348a"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p
                  class="font-medium text-sm md:text-base"
                  style="color: #360040"
                >
                  Standing Escrow Order which is sent from a dropshipper to a
                  merchant on the mandate of a buyer.
                </p>
              </div>

              <div class="leading-relaxed flex items-center space-x-3">
                <div
                  class="rounded-lg p-3 flex justify-center items-center"
                  style="background-color: #fbe2ff"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#75348a"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p
                  class="font-medium text-sm md:text-base"
                  style="color: #360040"
                >
                  Trust Identification Number (Trust ID) is the escrow wallet
                  number given to all TrustXWallet users.hipper to a merchant on
                  the mandate of a buyer.
                </p>
              </div>

              <div class="leading-relaxed flex items-center space-x-3">
                <div
                  class="rounded-lg p-3 flex justify-center items-center"
                  style="background-color: #fbe2ff"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#75348a"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p
                  class="font-medium text-sm md:text-base"
                  style="color: #360040"
                >
                  Trust Code is the trade fulfilment code given by buyers to
                  give sellers access to the payment made.
                </p>
              </div>

              <div class="leading-relaxed flex items-center space-x-3">
                <div
                  class="rounded-lg p-3 flex justify-center items-center"
                  style="background-color: #fbe2ff"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#75348a"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p
                  class="font-medium text-sm md:text-base"
                  style="color: #360040"
                >
                  Purchase Escrow Order which is sent from a buyer to a
                  dropshipper to give details on items to be purchased.
                </p>
              </div>
              <div class="leading-relaxed flex items-center space-x-3">
                <div
                  class="rounded-lg p-3 flex justify-center items-center"
                  style="background-color: #fbe2ff"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#75348a"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p
                  class="font-medium text-sm md:text-base"
                  style="color: #360040"
                >
                  Log X is the courier service that is provided to our users to
                  complete an e-commerce chain of transaction.
                </p>
              </div>

              <div class="flex items-center space-x-3">
                <img src="@/assets/img/nextButton.svg" alt="" />
                <p style="color: #8b4e96" class="font-semibold">
                  Find out how our full escrow chain works
                </p>
              </div>
            </div>
          </div>

          <div class="lg:w-1/2 pb-14 lg:pb-0">
            <img
              alt=""
              :src="
                require(`@/assets/img/${rotatingThreeChainImages[activeRotatingThreeChain].imageUrl}`)
              "
              class="object-cover md:h-[500px] h-[360px]"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div
        class="lg:flex justify-center items-center lg:space-x-40 mx-auto max-w-screen-xl pb-32 px-4 sm:px-6 lg:px-8 pt-24 space-y-20 lg:space-y-0"
      >
        <div class="lg:w-1/2">
          <img src="@/assets/img/circle.svg" class="object-cover" alt="" />
        </div>
        <div class="lg:w-1/2 space-y-8">
          <div class="space-y-3 lg:space-y-0">
            <p style="color: #360040" class="lg:text-3xl text-xl font-black">
              Fair, simple and transparent pricing for trust transactions
            </p>
            <p class="leading-loose font-medium" style="color: #360040">
              Our escrow service is set up to help ensure an affordable pricing
              system to all our users in order to make them complete a
              transaction without breaking the bank.
            </p>
          </div>

          <div class="space-y-3 lg:space-y-0">
            <p style="color: #360040" class="lg:text-3xl text-xl font-black">
              This is where insurance backs your transactions to ensure payment
              security
            </p>
            <p class="leading-loose font-medium" style="color: #360040">
              When it comes to finances, most especially our day to day
              transactions, we always want to have that confidence to transact
              with the next person without bearing a loss. Transactions that
              occur on our platform is fully backed by insurance.
            </p>
          </div>

          <div class="flex items-center space-x-3">
            <img src="@/assets/img/nextButton.svg" alt="" />
            <p style="color: #8b4e96" class="font-semibold">
              Check out our pricing system made for you
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-50">
      <div
        class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-24 space-y-16"
      >
        <div class="space-y-2">
          <h1 class="text-xl md:text-3xl font-extrabold" style="color: #360040">
            Trusted by 100,000+ online users
          </h1>
          <p style="color: #360040" class="font-medium">
            Thousands of online buyers and sellers trust us to deliver
          </p>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 space-y-5 lg:space-y-0"
        >
          <article
            @click="$router.push('/register/dropshipper')"
            class="rounded-lg cursor-pointer border border-gray-100 p-4 shadow-lg transition hover:shadow-lg sm:p-6 bg-white space-y-3"
          >
            <div class="pb-3">
              <img src="@/assets/img/trustUser1.svg" class="h-10 w-10" alt="" />
            </div>

            <a href="#">
              <h5 class="mt-0.5 text-lg font-bold" style="color: #360040">
                TrustXwallet for Dropshippers
              </h5>
            </a>

            <p
              class="mt-2 text-sm leading-relaxed font-medium line-clamp-3"
              style="color: #360040"
            >
              We help dropshippers accept payments from across Africa
            </p>

            <div class="flex items-center space-x-3 pt-3">
              <div><img src="@/assets/img/nextButton.svg" alt="" /></div>
              <div>
                <a href="#" class="font-bold" style="color: #360040">
                  Learn more
                </a>
              </div>
            </div>
          </article>

          <article
            @click="$router.push('/register/freelancer')"
            class="rounded-lg cursor-pointer border border-gray-100 p-4 shadow-lg transition hover:shadow-lg sm:p-6 bg-white space-y-3"
          >
            <div class="pb-3">
              <img src="@/assets/img/trustUser2.svg" class="h-10 w-10" alt="" />
            </div>

            <a href="#">
              <h5 class="mt-0.5 text-lg font-bold" style="color: #360040">
                TrustXwallet for Freelancers
              </h5>
            </a>

            <p
              class="mt-2 text-sm leading-relaxed font- line-clamp-3"
              style="color: #360040"
            >
              We help freelancers accept payments from across Africa
            </p>

            <div class="flex items-center space-x-3 pt-3">
              <div><img src="@/assets/img/nextButton.svg" alt="" /></div>
              <div>
                <a href="#" class="font-bold" style="color: #360040">
                  Learn more
                </a>
              </div>
            </div>
          </article>

          <article
            @click="$router.push('/register/shopper')"
            class="rounded-lg cursor-pointer border border-gray-100 p-4 shadow-lg transition hover:shadow-lg sm:p-6 bg-white space-y-3"
          >
            <div class="pb-3">
              <img src="@/assets/img/trustUser3.svg" class="h-10 w-10" alt="" />
            </div>

            <a href="#">
              <h5 class="mt-0.5 text-lg font-bold" style="color: #360040">
                TrustXwallet for Shoppers
              </h5>
            </a>

            <p
              class="mt-2 text-sm leading-relaxed font- line-clamp-3"
              style="color: #360040"
            >
              We help shoppers accept payments from across Africa
            </p>

            <div class="flex items-center space-x-3 pt-3">
              <div><img src="@/assets/img/nextButton.svg" alt="" /></div>
              <div>
                <a href="#" class="font-bold" style="color: #360040">
                  Learn more
                </a>
              </div>
            </div>
          </article>

          <article
            @click="$router.push('/register/merchant')"
            class="rounded-lg cursor-pointer border border-gray-100 p-4 shadow-lg transition hover:shadow-lg sm:p-6 bg-white space-y-3"
          >
            <div class="pb-3">
              <img src="@/assets/img/trustUser1.svg" class="h-10 w-10" alt="" />
            </div>

            <a href="#">
              <h5 class="mt-0.5 text-lg font-bold" style="color: #360040">
                TrustXwallet for Merchants
              </h5>
            </a>

            <p
              class="mt-2 text-sm leading-relaxed font- line-clamp-3"
              style="color: #360040"
            >
              We help merchants accept payments from across Africa
            </p>

            <div class="flex items-center space-x-3 pt-3">
              <div><img src="@/assets/img/nextButton.svg" alt="" /></div>
              <div>
                <a href="#" class="font-bold" style="color: #360040">
                  Learn more
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-gray-50">
      <div
        class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 lg:py-24 space-y-16"
      >
        <div class="space-y-3">
          <h1 style="color: #360040" class="font-bold text-xl md:text-3xl">
            Backed by trusted global partners
          </h1>
          <p style="color: #360040" class="font-medium">
            We collaborate with global brands to get the job done
          </p>
        </div>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-10">
          <!-- <footer-carousel></footer-carousel> -->
          <img src="@/assets/img/company1.svg" class="h-20 w-20" alt="fiverr" />
          <img src="@/assets/img/company2.svg" class="h-20 w-20" alt="upwork" />
          <img
            src="@/assets/img/company3.svg"
            class="h-20 w-20"
            alt="linkedin"
          />
          <img
            src="@/assets/img/company4.svg"
            class="h-20 w-20"
            alt="freelancer"
          />
          <img src="@/assets/img/company5.svg" class="h-20 w-20" alt="Be" />

          <img
            src="@/assets/img/company6.svg"
            class="h-20 w-20"
            alt="paystack"
          />
          <img src="@/assets/img/company7.svg" class="h-20 w-20" alt="GTOC" />
          <img
            src="@/assets/img/company8.svg"
            class="h-20 w-20"
            alt="flutterwave"
          />
          <img src="@/assets/img/company9.svg" class="h-20 w-20" alt="UBA" />
          <img
            src="@/assets/img/company10.svg"
            class="h-20 w-20"
            alt="access"
          />

          <img src="@/assets/img/company11.svg" class="h-20 w-20" alt="visa" />
          <img
            src="@/assets/img/company12.svg"
            class="h-20 w-20"
            alt="paypal"
          />
          <img
            src="@/assets/img/company13.svg"
            class="h-20 w-20"
            alt="mastercard"
          />
          <img src="@/assets/img/company22.svg" alt="HeirsHolding" />
          <img
            src="@/assets/img/company15.svg"
            class="h-20 w-20"
            alt="stripe"
          />

          <img
            src="@/assets/img/company16.svg"
            class="h-20 w-20"
            alt="shopify"
          />
          <img
            src="@/assets/img/company17.svg"
            class="h-20 w-20"
            alt="aliDropship"
          />
          <img src="@/assets/img/company23.svg" alt="squad" />
          <!-- <img src="@/assets/img/company18.svg" class="h-20 w-20" alt="boxRounded" /> -->
          <!-- <img src="@/assets/img/company19.svg" alt="amazon" />
          <img src="@/assets/img/company20.svg" alt="aliBaba" />

          <img src="@/assets/img/company21.svg" alt="TC" />
          <img src="@/assets/img/company22.svg" alt="HeirsHolding" />
          <img src="@/assets/img/company23.svg" alt="squad" />
          <img src="@/assets/img/company24.svg" alt="alPay" />
          <img src="@/assets/img/company25.svg" alt="interswitch" /> -->
        </div>
      </div>
    </section>

    <section class="lg:flex justify-center items-center">
      <div class="relative">
        <div><img src="@/assets/img/stain.svg" alt="" /></div>

        <div
          class="lg:flex justify-between items-center md:absolute lg:top-24 lg:px-32 space-y-12 lg:space-y-16 pt-6 lg:pt-0 px-6"
        >
          <div class="space-y-3 lg:w-1/2">
            <p style="color: #360040" class="font-light">
              Try TrustXwallet now
            </p>
            <div class="relative">
              <h1
                class="font-extrabold text-2xl lg:text-4xl"
                style="color: #360040"
              >
                Start enjoying
                <span class="" style="color: #8b4e96">safe</span> and
                <span class="" style="color: #8b4e96">seamless</span>
                transactions in just 30 seconds
                <img class="inline" src="@/assets/img/running.svg" alt="" />
              </h1>
            </div>
          </div>
          <div class="lg:w-1/2 flex justify-end items-end">
            <nuxt-link
              style="background-color: #8b4e96; color: #fae1ff"
              class="block rounded-md px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 w-full lg:w-1/2"
              to="/signup"
            >
              Create a free escrow wallet
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
export default {
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
      activeRotatingHeader: 0,
      activeRotatingThreeChain: 0,
      rotatingCTAImages: [
        {
          id: 1,
          imageUrl: "rotate_header1.png",
        },
        {
          id: 2,
          imageUrl: "rotate_header2.png",
        },
      ],
      rotatingThreeChainImages: [
        {
          id: 1,
          imageUrl: "three_chain_rotate1.png",
        },
        {
          id: 2,
          imageUrl: "three_chain_rotate2.png",
        },
      ],
    };
  },
  mounted() {
    this.switchRotatingCTAImages();
    this.switchRotatingThreeChainImages();
  },
  methods: {
    switchRotatingCTAImages() {
      setInterval(() => {
        this.activeRotatingHeader += 1;

        if (this.activeRotatingHeader === 2) {
          this.activeRotatingHeader = 0;
        }
      }, 3000);
    },
    switchRotatingThreeChainImages() {
      setInterval(() => {
        this.activeRotatingThreeChain += 1;

        if (this.activeRotatingThreeChain === 2) {
          this.activeRotatingThreeChain = 0;
        }
      }, 3000);
    },
  },
};
</script>
