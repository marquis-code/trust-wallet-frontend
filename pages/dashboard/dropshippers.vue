<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="w-full">
    <div class="w-full h-screen overflow-y-auto px-6 md:px-14 py-6 space-y-10">
      <div class="flex justify-between items-center">
        <div>
          <h1 style="color: #360040" class="hidden md:block font-bold text-xl">
            Dashboard
          </h1>
        </div>
        <div class="flex items-center md:space-x-6 space-x-4">
          <div><img src="@/assets/img/nigeriaLogo.svg" alt=""></div>
          <div><img src="@/assets/img/notification_icon.svg" alt=""></div>
          <div>
            <img src="@/assets/img/avatar_icon.svg" class="rounded-full" alt="">
          </div>
          <div class="relative">
            <p style="color: #360040" class="md:text-xl font-bold pb-0 mb-0">
              Ama
            </p>
            <p class="pt-0 mt-0 text-sm" style="color: #360040">
              {{
                loggedInUser?.phone?.slice(1)
                  ? loggedInUser?.phone?.slice(1)
                  : "0000000000"
              }}
            </p>
            <div class="absolute top-1 md:right-6 right-8">
              <img src="@/assets/img/star_icon.svg" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="md:flex justify-between items-center bg-white shadow-md space-y-9 rounded-lg px-6 py-8 border">
        <div class="flex space-x-3">
          <div>
            <img src="@/assets/img/dispute_transaction_icon.svg" alt="">
          </div>
          <div class="space-y-2">
            <p style="color: #360040" class="font-extrabold">
              Standing escrow order
            </p>
            <p style="color: #360040" class="w-10/12 text-sm font-light">
              This enables you to make escrow payment to merchant X
            </p>
          </div>
        </div>

        <button
          class="rounded-lg px-10 py-2.5 md:py-3 cursor-pointer w-full md:w-3/12"
          style="background-color: #8b4e96"
          @click="handleStandingEscrowOrder"
        >
          <h1 class="font-semibold text-white text-center md:text-left">
            Make request now
          </h1>
        </button>
      </div>

      <div class="md:px-10 py-4 md:py-0 shadow-md rounded-md border space-y-4">
        <div style="background-color: #ba68c8" class="rounded-full w-14 h-14 flex justify-center items-center">
          <img src="@/assets/img/wallet_icon_white.svg" class="h-7 w-7" alt="">
        </div>

        <div class="md:flex justify-between items-center space-y-9 md:space-y-0">
          <div class="space-y-3">
            <p style="color: #360040" class="font-light">
              Escrow wallet balance
            </p>
            <div class="flex items-center space-x-2">
              <div><img src="@/assets/img/nigeriaLogo.svg" alt=""></div>
              <p class="font-semibold md:text-xl">
                (NGN)
                {{
                  loggedInUser?.mainWalletBalance
                    ? loggedInUser?.mainWalletBalance
                    : "0.00"
                }}
              </p>
            </div>
          </div>
          <div class="flex items-center">
            <div class="">
              <input
                v-model="form.trustCode"
                type="tel"
                maxlength="4"
                placeholder="Input trust code here"
                class="placeholder-purple-500 text-xs rounded-l-md border px-3 mr-5 text-center py-3 outline-none w-full pr-6"
              >
            </div>
            <div class="">
              <button
                :disabled="!form?.trustCode.length"
                class="text-white font-medium py-3 text-sm md:px-5 w-full flex justify-center items-center rounded-r-lg"
                style="background-color: #8b4e96"
                @click="handlePayout"
              >
                Enter
              </button>
            </div>
          </div>
          <!-- <div class="md:flex items-center md:space-x-6 space-y-6 md:space-y-0">
            <div
              class="rounded-lg flex justify-between items-center pl-3 md:pl-10 ring-1 ring-purple-300 cursor-pointer rounded-r-lg"
            >
              <input
                type="tel"
                placeholder="Input trust code here"
                class="placeholder-purple-500 outline-none rounded-r-lg text-sm md:text-base"
              />
              <div
                class="text-white font-medium py-2.5 w-1/2 md:px-5 px-10 text-sm md:text-base flex justify-center items-center rounded-r-lg"
                style="background-color: #8b4e96"
              >
                Enter
              </div>
            </div>
          </div> -->
        </div>
      </div>

      <div class="md:px-10 py-4 md:py-0 shadow-md rounded-md space-y-4 bg-purple-100">
        <div style="background-color: #ba68c8" class="rounded-full w-14 h-14 flex justify-center items-center">
          <img src="@/assets/img/lock_icon.svg" class="h-7 w-7" alt="">
        </div>

        <div class="flex justify-between items-center">
          <div class="space-y-3">
            <p style="color: #360040" class="font-light">
              SEO wallet balance
            </p>
            <div class="flex items-center space-x-2">
              <div><img src="@/assets/img/nigeriaLogo.svg" alt=""></div>
              <p class="font-semibold md:text-xl">
                (NGN)
                {{
                  loggedInUser?.seoWalletBalance
                    ? loggedInUser.seoWalletBalance
                    : "0.00"
                }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="md:px-10 py-4 md:py-0 shadow-md rounded-md space-y-4" style="background-color: #e0ffff">
        <div style="background-color: #ba68c8" class="rounded-full w-14 h-14 flex justify-center items-center">
          <img src="@/assets/img/lock_icon.svg" class="h-7 w-7" alt="">
        </div>

        <div class="md:flex justify-between items-center space-y-6 md:space-y-0">
          <div class="space-y-3">
            <p style="color: #360040" class="font-light">
              Net Profit
            </p>
            <div class="flex items-center space-x-2">
              <div><img src="@/assets/img/nigeriaLogo.svg" alt=""></div>
              <p class="font-semibold text-xl">
                (NGN)
                {{
                  loggedInUser?.netProfitWalletBalance
                    ? loggedInUser.netProfitWalletBalance
                    : "0.00"
                }}
              </p>
            </div>
          </div>
          <div>
            <button
              style="color: #ba68c8"
              class="font-semibold w-full text-center md:text-left border px-8 rounded-lg py-2.5 md:py-3"
              @click="handleWithdrawalRequest"
            >
              Request withdrawal
            </button>
          </div>
        </div>
      </div>

      <div class="md:flex items-center md:space-x-16 space-y-9 md:space-y-0">
        <div class="flex space-x-4 bg-white shadow-md rounded-lg px-6 py-4 md:w-1/2 border">
          <div>
            <img src="@/assets/img/dispute_transaction_icon.svg" alt="">
          </div>
          <div>
            <p style="color: #360040" class="font-light">
              Transactions in dispute
            </p>
            <p style="color: #360040">
              0
            </p>
          </div>
        </div>
        <div class="flex space-x-4 bg-white shadow-md rounded-lg px-6 py-4 md:w-1/2 border">
          <div>
            <img src="@/assets/img/successful_transaction_logo.svg" alt="">
          </div>
          <div>
            <p style="color: #360040" class="font-light">
              Successful transactions
            </p>
            <p style="color: #360040">
              0
            </p>
          </div>
        </div>
      </div>

      <div>
        <div class="overflow-x-auto rounded-lg border-gray-200 border-t">
          <b-card>
            <div class="overflow-x-auto rounded-lg border-gray-200 border-t">
              <b-table
                striped
                show-empty
                responsive
                :items="tableData"
                :fields="fields"
                :busy="loading"
                :current-page="currentPage"
                :per-page="perPage"
              >
                <template #table-busy>
                  <div class="text-center my-2 cursor-pointer">
                    <b-spinner class="align-middle" />
                    <small>Loading...</small>
                  </div>
                </template>

                <template #empty>
                  <p class="text-center text-sm text-secondary py-2 cursor-pointer">
                    {{
                      search
                        ? `No programmes found for search value: "${search}"`
                        : "No Escrow Orders available"
                    }}
                  </p>
                </template>

                <template #cell(sn)="data">
                  <span class="font-medium py-2 text-sm cursor-pointer">
                    {{ data.index + 1 }}</span>
                </template>

                <template #cell(trustId)="data">
                  <span class="font-medium py-2 text-sm cursor-pointer">
                    {{ data?.item?.trustId }}</span>
                </template>

                <template #cell(date)="data">
                  <span class="font-medium py-2 text-sm cursor-pointer">
                    {{ data?.item?.date }}</span>
                </template>

                <template #cell(amount)="data">
                  <span class="font-medium py-2 text-sm cursor-pointer">
                    {{ data?.item?.amount }}</span>
                </template>

                <template #cell(trustCode)="data">
                  <span class="font-medium py-2 text-sm cursor-pointer">
                    {{ data?.item?.trustCode }}</span>
                </template>

                <template #cell(status)="data">
                  <span class="font-medium py-2 text-sm cursor-pointer">
                    {{ data?.item?.status }}</span>
                </template>

                <template #cell(actions)="data">
                  <span class="font-medium py-2 text-sm cursor-pointer">
                    {{ data?.item?.actions }}</span>
                </template>
              </b-table>
              <div class="flex justify-end items-end">
                <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" size="md" class="my-3" />
              </div>
            </div>
          </b-card>
        </div>
      </div>

      <b-modal
        id="standingEscrowFormModal"
        hide-header
        hide-footer
        scrollable
        no-close-on-esc
        no-close-on-backdrop
        no-stacking
        size="md"
      >
        <h1 class="flex justify-center font-semibold items-center text-xl pb-3 pt-3" style="color: #360040">
          Standing escrow order
        </h1>

        <form class="p-2 space-y-6" @submit.prevent="handleStandingEscrowOrderSuccess">
          <div>
            <input
              type="tel"
              placeholder="Input seller trust ID here"
              class="px-3 py-3 w-full text-sm placeholder-gray-500 border rounded-md"
            >
          </div>

          <div class="rounded-md px-6 py-3 border space-y-4">
            <h1 class="text-gray-500 font-medium">
              Address
            </h1>
            <div class="space-y-6">
              <div class="">
                <textarea
                  class="rounded-lg w-full text-sm border px-3 py-3 outline-none focus:ring-1 ring-green-500"
                  rows="3"
                  cols="3"
                  placeholder="Enter address here"
                />
              </div>
              <div class="relative">
                <input
                  type="text"
                  placeholder="Product Narration*"
                  class="pl-9 placeholder-gray-500 text-sm border rounded-lg w-full py-3 outline-none focus:ring-1 ring-green-500"
                >
                <img src="@/assets/img/narration.svg" class="absolute top-5 left-3" alt="">
              </div>
              <div class="relative">
                <input
                  type="tel"
                  placeholder="Mobile number*"
                  class="pl-9 placeholder-gray-500 border text-sm rounded-lg w-full py-3 outline-none focus:ring-1 ring-green-500"
                >
                <img src="@/assets/img/mobile.svg" class="absolute top-5 left-3" alt="">
                <img src="@/assets/img/phoneCount.svg" class="absolute top-5 right-3" alt="">
              </div>
              <div class="relative">
                <input
                  type="tel"
                  placeholder="Price*"
                  class="pl-9 placeholder-gray-500 border text-sm rounded-lg w-full py-3 outline-none focus:ring-1 ring-green-500"
                >
                <img src="@/assets/img/dollar-sign.svg" class="absolute top-5 left-3" alt="">
                <img src="@/assets/img/moneyCount.svg" class="absolute top-5 right-3" alt="">
              </div>
            </div>

            <p class="font-light text-gray-400">
              Charges
            </p>
            <div class="flex items-center justify-between">
              <p class="font-light text-gray-400 text-sm">
                Escrow Charge
              </p>
              <p class="font-light text-gray-400 text-sm">
                N00.00
              </p>
            </div>

            <div class="flex items-center justify-between">
              <p style="font-weight: 900" class="font-medium text-sm text-gray-400">
                Total
              </p>
              <p class="font-medium text-gray-400 text-sm">
                N00.00
              </p>
            </div>
          </div>

          <div class="border w-full space-y-3 px-6 py-4 rounded-lg">
            <h1 class="text-base font-emedium text-gray-400 text-sm">
              Delivery method *
            </h1>

            <div class="flex items-center space-x-3">
              <div><input type="checkbox"></div>
              <p class="text-base text-gray-400 font-light text-sm">
                Express delivery by LogX
              </p>
            </div>
            <div class="flex items-center space-x-3">
              <div><input type="checkbox"></div>
              <p class="text-base text-gray-400 font-light text-sm">
                Use an alternative delivery system
              </p>
            </div>
          </div>

          <div class="flex justify-between items-center space-x-10 pb-3">
            <button
              class="py-2 font-medium w-full rounded-lg border border-purple-900"
              style="color: #8b4e96"
              type="button"
              @click="$bvModal.hide('standingEscrowFormModal')"
            >
              Cancel
            </button>
            <button class="py-2 font-medium w-full text-white rounded-lg" style="background-color: #8b4e96" type="submit">
              Confirm
            </button>
          </div>
        </form>
      </b-modal>

      <b-modal
        id="standingEscrowOrderSuccessModal"
        centered
        hide-header
        hide-footer
        no-close-on-esc
        no-close-on-backdrop
        no-stacking
      >
        <div class="space-y-10 p-6">
          <div class="space-y-8">
            <div class="flex justify-center items-center space-x-3">
              <h1 class="flex justify-center font-semibold items-center text-2xl" style="color: #360040">
                Congratulations
              </h1>
              <div>
                <img src="@/assets/img/success_badge.svg" alt="">
              </div>
            </div>
            <p class="font-light text-center text-sm" style="color: #360040">
              We have sent the sum of
              <img class="inline ml-1" src="@/assets/img/nigeriaLogo.svg" alt=""><b>(NGN) 2,500,000</b> from your escrow
              wallet balance to this
              Trust ID : <b>090 3453 5247</b>
            </p>

            <p class="font-light text-center text-sm" style="color: #360040">
              You will be redirected to make use of the LogX delivery service
            </p>
          </div>

          <div class="flex justify-center items-center">
            <button
              class="font-medium text-sm py-2 w-full text-white rounded-lg"
              style="background-color: #8b4e96"
              @click="$bvModal.show('withdrawSuccessConfirmationModal')"
            >
              Click here to proceed to LogX
            </button>
          </div>
        </div>
      </b-modal>

      <b-modal
        id="withdrawSuccessConfirmationModal"
        centered
        hide-header
        hide-footer
        no-close-on-esc
        no-close-on-backdrop
        no-stacking
      >
        <div class="space-y-10 p-6">
          <div class="space-y-8">
            <div class="flex justify-center items-center space-x-3">
              <h1 class="flex justify-center font-semibold items-center text-2xl" style="color: #360040">
                Congratulations
              </h1>
              <div>
                <img src="@/assets/img/success_badge.svg" alt="">
              </div>
            </div>

            <p class="font-light text-center text-sm" style="color: #360040">
              We have sent the sum of
              <img class="inline ml-1" src="@/assets/img/nigeriaLogo.svg" alt=""><b>(NGN) 2,500,000</b> from your escrow
              wallet balance to this
              Trust ID :
              <b>090 3453 5247</b>
            </p>
          </div>

          <div class="flex justify-center items-center">
            <button
              class="font-medium text-sm py-2 w-full text-white rounded-lg"
              style="background-color: #8b4e96"
              @click="$bvModal.hide('withdrawSuccessConfirmationModal')"
            >
              Back to dashboard
            </button>
          </div>
        </div>
      </b-modal>
    </div>

    <b-modal
      id="requestWithdrawalModal"
      centered
      hide-footer
      no-close-on-esc
      no-close-on-backdrop
      no-stacking
      size="md"
    >
      <template #modal-title>
        <h1 class="text-lg font-medium" style="color: #360040">
          Request Withdrawal
        </h1>
      </template>
      <div class="space-y-6 p-6">
        <form class="space-y-6">
          <div class="relative space-y-3">
            <label style="color: #360040" class="font-medium text-sm">To bank account
            </label>
            <select
              v-model="selected_bank"
              class="py-2.5 px-2 border w-full rounded-lg outline-none font-medium"
              required
            >
              <option v-for="(bank, index) in banksList" :key="index" :value="bank">
                {{ bank.name }}
              </option>
            </select>
          </div>

          <div v-if="bankHasBeenSelected" class="space-y-2">
            <div class="space-y-2">
              <label class="font-medium text-sm">Account Number</label>
            </div>
            <div class="">
              <input
                v-model.trim="bankInfo.account_number"
                class="py-2.5 pr-6 pl-3 border w-full rounded-lg outline-none focus-within:border-green-500"
                type="tel"
                placeholder="Enter account number"
                @change="validateAccountNumber"
              >
            </div>
            <p v-if="accountNameError || !isAccountNumberValid" class="text-red-500 text-xs">
              {{ accountNameError }}
            </p>
          </div>

          <section class="lg:flex justify-between space-y-3 lg:space-y-0 lg:space-x-10 items-center">
            <p v-if="loadingAccountName" class="text-xs text-green-600">
              Verifying account number...
            </p>

            <div v-if="!loadingAccountName" class="space-y-2 w-full relative">
              <label class="text-xs font-medium text-grays-black-5">Account Name</label>
              <input
                v-model.trim="bankInfo.account_name"
                type="text"
                class="text-xs bg-gray-100 outline-none focus-within:border-green-500 border-none w-full rounded-md p-3 placeholder-gray-500 placeholder-opacity-25 ring-1 ring-gray-300"
                placeholder=""
                readonly
              >
            </div>
          </section>

          <div class="space-y-3">
            <div class="space-y-2">
              <label class="font-medium text-sm">Amount</label>
            </div>
            <div class="relative">
              <input
                v-model.trim="bankInfo.withdraw_amount"
                class="py-2.5 pr-6 text-sm outline-none focus:border-green-500 pl-6 border w-full rounded-lg"
                type="tel"
                placeholder="Enter amount."
              >
            </div>
          </div>
        </form>
        <div class="flex flex-col space-y-3 justify-center items-center pt-3">
          <button
            :disabled="!isFormValid && processingTranfer"
            :class="[!isFormValid ? 'cursor-not-allowed opacity-75' : '']"
            class="font-semibold py-2 w-full text-white rounded-lg"
            style="background-color: #8b4e96"
            @click="proceedWithWithdrawal"
          >
            {{ processingTranfer ? "Processing..." : "Withdraw" }}
          </button>
        </div>
      </div>
    </b-modal>

    <b-modal
      id="requestWithdrawalModal"
      centered
      hide-footer
      no-close-on-esc
      no-close-on-backdrop
      no-stacking
      size="md"
    >
      <template #modal-title>
        <h1 class="text-lg font-medium" style="color: #360040">
          Request Withdrawal
        </h1>
      </template>
      <div class="space-y-6 p-6">
        <form class="space-y-6">
          <div class="relative space-y-3">
            <label style="color: #360040" class="font-medium text-sm">To bank account
            </label>
            <select
              v-model="selected_bank"
              class="py-2.5 px-2 border w-full rounded-lg outline-none font-medium"
              required
            >
              <option v-for="(bank, index) in banksList" :key="index" :value="bank">
                {{ bank.name }}
              </option>
            </select>
          </div>

          <div v-if="bankHasBeenSelected" class="space-y-2">
            <div class="space-y-2">
              <label class="font-medium text-sm">Account Number</label>
            </div>
            <div class="">
              <input
                v-model.trim="bankInfo.account_number"
                class="py-2.5 pr-6 pl-3 border w-full rounded-lg outline-none focus-within:border-green-500"
                type="tel"
                placeholder="Enter account number"
                @change="validateAccountNumber"
              >
            </div>
            <p v-if="accountNameError || !isAccountNumberValid" class="text-red-500 text-xs">
              {{ accountNameError }}
            </p>
          </div>

          <section class="lg:flex justify-between space-y-3 lg:space-y-0 lg:space-x-10 items-center">
            <p v-if="loadingAccountName" class="text-xs text-green-600">
              Verifying account number...
            </p>

            <div v-if="!loadingAccountName" class="space-y-2 w-full relative">
              <label class="text-xs font-medium text-grays-black-5">Account Name</label>
              <input
                v-model.trim="bankInfo.account_name"
                type="text"
                class="text-xs bg-gray-100 outline-none focus-within:border-green-500 border-none w-full rounded-md p-3 placeholder-gray-500 placeholder-opacity-25 ring-1 ring-gray-300"
                placeholder=""
                readonly
              >
            </div>
          </section>

          <div class="space-y-3">
            <div class="space-y-2">
              <label class="font-medium text-sm">Amount</label>
            </div>
            <div class="relative">
              <input
                v-model.trim="bankInfo.withdraw_amount"
                class="py-2.5 pr-6 text-sm outline-none focus:border-green-500 pl-6 border w-full rounded-lg"
                type="tel"
                placeholder="Enter amount."
              >
            </div>
          </div>
        </form>
        <div class="flex flex-col space-y-3 justify-center items-center pt-3">
          <button
            :disabled="!isFormValid && processingTranfer"
            :class="[!isFormValid ? 'cursor-not-allowed opacity-75' : '']"
            class="font-semibold py-2 w-full text-white rounded-lg"
            style="background-color: #8b4e96"
            @click="proceedWithWithdrawal"
          >
            {{ processingTranfer ? "Processing..." : "Withdraw" }}
          </button>
        </div>
      </div>
    </b-modal>

    <b-modal
      id="withdrawalSuccessModal"
      centered
      hide-footer
      hide-header
      no-close-on-esc
      no-close-on-backdrop
      no-stacking
      size="md"
    >
      <div class="space-y-10 p-6">
        <div class="space-y-6">
          <div class="flex justify-center flex-col items-center space-y-3">
            <p class="flex justify-center font-medium items-center pb-3" style="color: #360040">
              Withdrawal Completed
            </p>
            <div>
              <img src="@/assets/img/success_badge.svg" alt="">
            </div>
          </div>

          <p class="font-light text-center leading-loose" style="color: #360040">
            We have credited your account with
            <img class="inline ml-1" src="@/assets/img/nigeriaLogo.svg" alt=""><b>(NGN) 2,500,000</b>
          </p>
        </div>
        <div class="flex justify-center items-center">
          <button class="font-medium py-2 w-full text-white rounded-lg" style="background-color: #8b4e96" @click="close">
            Done
          </button>
        </div>
      </div>
    </b-modal>

    <b-modal
      id="unVerifiedUserModal"
      centered
      hide-footer
      hide-header
      no-close-on-esc
      no-close-on-backdrop
      no-stacking
      size="md"
    >
      <div class="space-y-6 p-3">
        <p class="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4a90e2"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </p>
        <p class="text-gray-600">
          Please you need to verify your account to make withdrawals.
        </p>
        <p class="text-gray-600">
          Would you like to proceed to fund your wallet?
        </p>

        <div class="flex justify-center items-center space-x-6">
          <button class="font-medium py-2 w-full text-white rounded-md bg-red-400" @click="closeAccountVerificationModal">
            Cancel
          </button>
          <button class="font-medium py-2 w-full text-white rounded-md bg-black" @click="redirectToAccountVerification">
            proceed to verify account
          </button>
        </div>
      </div>
    </b-modal>
  </main>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dashboard',
  components: {},
  layout: 'dashboardLayout',
  data () {
    return {
      currentPage: 1,
      loggedInUser: null,
      loading: false,
      selected_bank: null,
      bankHasBeenSelected: false,
      loadingAccountName: false,
      processingTranfer: false,
      totalRows: 1,
      perPage: 7,
      search: '',
      banksList: [],
      accountNameError: '',
      isAccountNumberValid: true,
      bankInfo: {
        account_number: '',
        bank_code: '',
        account_name: '',
        withdraw_amount: ''
      },
      form: {
        trustCode: ''
      },
      fields: [
        {
          key: 'sn',
          label: 'S/N',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'trustId',
          label: 'Trust Id',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'date',
          label: 'Date',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'amount',
          label: 'Amount',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'trustCode',
          label: 'Trust Code',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'status',
          label: 'Status',
          class: 'font-medium text-gray-400 text-sm'
        },
        {
          key: 'actions',
          label: 'Actions',
          class: 'font-medium text-gray-400 text-sm'
        }
      ],
      tableData: []
    }
  },
  computed: {
    isFormValid () {
      return !!(
        this.bankInfo.account_number &&
        this.bankInfo.account_name &&
        this.bankInfo.withdraw_amount
      )
    }
  },
  watch: {
    selected_bank (value) {
      if (value) {
        this.bankHasBeenSelected = true
      }
      this.bankInfo.bank_code = value.code
    },
    'bankInfo.account_number' (value) {
      if (value.length === 10) {
        this.validateAccountNumber()
      }

      if (value.length !== 10) {
        this.isAccountNumberValid = false
        this.bankInfo.account_name = ''
        this.accountNameError = ''
      }

      if (value.length === 0) {
        this.accountNameError = ''
      }
    }
  },
  mounted () {
    const loggedUser = localStorage.getItem('user')
    this.loggedInUser = loggedUser !== null ? JSON.parse(loggedUser) : ''
    console.log(this.loggedInUser)
  },
  created () {
    this.loadEscrowOrders()
  },
  methods: {
    redirectToAccountVerification () {
      this.$router.push('/dashboard/settings/profile')
    },
    closeAccountVerificationModal () {
      this.$bvModal.hide('unVerifiedUserModal')
    },
    async proceedWithWithdrawal () {
      this.processingTranfer = true
      try {
        const withdrawalPayload = {
          type: 'nuban',
          name: '',
          account_number: this.bankInfo.account_number,
          bank_code: this.bankInfo.bank_code,
          currency: 'NGN'
        }

        const response = await this.$axios.post(
          'https://api.paystack.co/transferrecipient',
          withdrawalPayload,
          {
            headers: {
              authorization:
                'Bearer sk_live_c6e48951ea505ee01d035de53026cb9fb48a614a',
              'content-type': 'application/json'
            }
          }
        )

        const paystackWithdrawalPayload = {
          source: 'balance',
          amount: this.bankInfo.withdraw_amount,
          reference: '' + Math.floor(Math.random() * 100000000000000 + 1),
          recipient: response.data.data.recipient_code,
          reason: 'Withdraw to bank'
        }

        const paystackTransferResult = await this.$axios.post(
          'https://api.paystack.co/transfer',
          paystackWithdrawalPayload,
          {
            headers: {
              authorization:
                'Bearer sk_live_c6e48951ea505ee01d035de53026cb9fb48a614a',
              'content-type': 'application/json'
            }
          }
        )

        const trustWalletWithdrawalPayload = {
          trustId: '8147626503',
          amount: paystackTransferResult.data.data.amount
        }

        await this.$axios.post(
          '/payment/withdraw',
          trustWalletWithdrawalPayload
        )

        this.$bvModal.show('withdrawalSuccessModal')
      } catch (error) {
        this.$toast.error(error.response.data.message)
      } finally {
        this.processingTranfer = false
      }
    },
    handleWithdrawalRequest () {
      if (this.loggedInUser?.verified) {
        this.$bvModal.show('requestWithdrawalModal')
      } else {
        this.$bvModal.show('unVerifiedUserModal')
      }
    },
    loadEscrowOrders () {
      this.loading = true
      this.$axios
        .get(
          `https://trustwallet-oana.onrender.com/api/user/escrow_order/${this.loggedInUser?.trustId}`
        )
        .then((res) => {
          this.tableData = res.data
          this.totalRows = res.data.length
        })
        .catch(() => {
          console.log('Something went wrong while fetching escrow orders')
          // this.$toast.warning(
          //   'Something went wrong while fetching escrow orders'
          // )
        })
        .finally(() => {
          this.loading = false
        })
    },
    handleStandingEscrowOrder () {
      this.$bvModal.show('standingEscrowFormModal')
    },
    close () {
      this.$bvModal.show('standingEscrowFormModal')
    },
    handleStandingEscrowOrderSuccess () {
      this.$bvModal.show('standingEscrowOrderSuccessModal')
    }
  }
}
</script>
