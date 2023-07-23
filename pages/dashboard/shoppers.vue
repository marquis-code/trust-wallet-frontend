
<template>
  <main class="w-full">
    <div class="w-full h-screen overflow-y-auto container mx-auto md:px-14 py-6 space-y-10">
      <div class="flex justify-between items-center ">
        <div>
          <h1 style="color: #360040" class="hidden md:block font-bold text-xl">
            Dashboard
          </h1>
        </div>
        <div class="flex items-center md:space-x-6 space-x-4">
          <div>
            <img src="@/assets/img/nigeriaLogo.svg" alt="" class="rounded-full">
          </div>
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
            <div class="absolute top-1 right-8">
              <img src="@/assets/img/star_icon.svg" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="md:flex justify-between items-center bg-white shadow-md space-y-9 rounded-lg px-6 py-8">
        <div class="flex space-x-3">
          <div>
            <img src="@/assets/img/dispute_transaction_icon.svg" alt="">
          </div>
          <div class="space-y-2">
            <p style="color: #360040" class="font-medium ont-medium text-sm md:text-base">
              Purchase escrow order
            </p>
            <p style="color: #360040" class="md:w-10/12 font-light tracking-wide text-xs md:text-base">
              This enables you to make payment into a seller’s escrow wallet
            </p>
          </div>
        </div>

        <div
          class="rounded-lg px-10 py-3 cursor-pointer"
          style="background-color: #8b4e96"
          @click="handleEscrowPurchase"
        >
          <h1 class="font-medium text-xs md:text-base text-white text-center md:text-left">
            Make request now
          </h1>
        </div>
      </div>

      <div
        class="md:flex justify-between items-center bg-white shadow-md space-y-9 rounded-lg p-6 md:p-10 py-8 "
      >
        <div class="space-y-3">
          <div style="background-color: #ba68c8" class="rounded-full w-14 h-14 flex justify-center items-center">
            <img src="@/assets/img/wallet_icon_white.svg" class="h-7 w-7" alt="">
          </div>
          <div class="">
            <p style="color: #360040" class="font-medium text-sm md:text-base">
              Total wallet balance
            </p>
            <div class="flex items-center space-x-2">
              <div><img src="@/assets/img/nigeriaLogo.svg" alt=""></div>
              <p class="font-bold text-xs md:text-xl">
                (NGN)
                {{
                  loggedInUser?.mainWalletBalance
                    ? loggedInUser?.mainWalletBalance
                    : "0.00"
                }}
              </p>
            </div>
          </div>
        </div>

        <div class="md:flex justify-between items-center space-y-6 md:space-y-0">
          <!-- <div class="">
            <p style="color: #360040" class="font-medium text-sm md:text-base">
              Total wallet balance
            </p>
            <div class="flex items-center space-x-2">
              <div><img src="@/assets/img/nigeriaLogo.svg" alt=""></div>
              <p class="font-bold text-xs md:text-xl">
                (NGN)
                {{
                  loggedInUser?.mainWalletBalance
                    ? loggedInUser?.mainWalletBalance
                    : "0.00"
                }}
              </p>
            </div>
          </div> -->
          <div class="md:flex items-center md:space-x-6 space-y-6 md:space-y-0 w-full">
            <button class="rounded-lg px-16 py-2.5 w-full" style="background-color: #8b4e96" @click="handleWalletFunding">
              <span class="font-semibold w-full text-xs text-center md:text-left text-white">
                Fund Wallet
              </span>
            </button>

            <div class="w-full">
              <button
                style="color: #8b4e96"
                class="rounded-lg text-xs px-10 py-3 border w-full border-purple-300 cursor-pointer"
                @click="handleWithdrawalRequest"
              >
                Request withdrawal
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="p-6 md:p-10 shadow-md rounded-md space-y-4 bg-purple-100">
        <div style="background-color: #ba68c8" class="rounded-full w-14 h-14 flex justify-center items-center">
          <img src="@/assets/img/lock_icon.svg" class="h-7 w-7" alt="">
        </div>

        <div class="flex justify-between items-center">
          <div class="">
            <p style="color: #360040" class="font-medium text-sm md:text-base">
              Escrow wallet balance
            </p>
            <div class="flex items-center space-x-2">
              <div><img src="@/assets/img/nigeriaLogo.svg" alt=""></div>
              <p class="font-bold text-xs md:text-xl">
                (NGN)
                {{
                  loggedInUser.escrowWalletBalance
                    ? loggedInUser.escrowWalletBalance
                    : "0.00"
                }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="md:flex items-center md:space-x-16 space-y-9 md:space-y-0">
        <div class="flex space-x-4 bg-white shadow-md rounded-lg px-6 py-4 md:w-1/2">
          <div>
            <img src="@/assets/img/successful_transaction_logo.svg" alt="">
          </div>
          <div>
            <p style="color: #360040" class="font-medium text-sm md:text-base tracking-wide">
              Successful transactions
            </p>
            <p style="color: #360040" class="text-xs md:text-base">
              0
            </p>
          </div>
        </div>
        <div class="flex space-x-4 bg-white shadow-md rounded-lg px-6 py-4 md:w-1/2 border">
          <div>
            <img src="@/assets/img/dispute_transaction_icon.svg" alt="">
          </div>
          <div>
            <p style="color: #360040" class="font-medium text-sm md:text-base tracking-wide">
              Transactions in dispute
            </p>
            <p style="color: #360040" class="text-xs md:text-base">
              0
            </p>
          </div>
        </div>
      </div>

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
                {{ data.item.trustId }}</span>
            </template>

            <template #cell(date)="data">
              <span class="font-medium py-2 text-sm cursor-pointer">
                {{ data.item.date }}</span>
            </template>

            <template #cell(amount)="data">
              <span class="font-medium py-2 text-sm cursor-pointer">
                {{ data.item.amount }}</span>
            </template>

            <template #cell(trustCode)="data">
              <span class="font-medium py-2 text-sm cursor-pointer">
                {{ data.item.trustCode }}</span>
            </template>

            <template #cell(status)="data">
              <span class="font-medium py-2 text-sm cursor-pointer">
                {{ data.item.status }}</span>
            </template>

            <template #cell(actions)="data">
              <span class="font-medium py-2 text-sm cursor-pointer">
                {{ data.item.actions }}</span>
            </template>
          </b-table>
          <div class="flex justify-end items-end">
            <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" size="md" class="my-3" />
          </div>
        </div>
      </b-card>
    </div>

    <b-modal
      id="fundWalletModal"
      centered
      hide-footer
      no-close-on-esc
      no-close-on-backdrop
      no-stacking
      size="md"
    >
      <template #modal-title>
        <h1>Payment details</h1>
      </template>
      <div class="space-y-9 p-6">
        <form class="space-y-6">
          <div class="space-y-3">
            <div class="flex justify-between items-center space-y-2">
              <label class="font-semibold text-sm">Credit Card Number</label>

              <div class="flex items-center space-x-2">
                <div><img src="@/assets/img/visaText.svg" alt=""></div>
                <div><img src="@/assets/img/visaLogo.svg" alt=""></div>
              </div>
            </div>
            <div class="relative">
              <input
                class="py-2.5 px-4 border w-full rounded-lg outline-none"
                type="tel"
                placeholder="xxxx  xxxx  xxxx   xxxx"
              >
              <img class="absolute top-3 md:top-3 right-3" src="@/assets/img/card_lock.svg" alt="">
            </div>
          </div>

          <div class="relative space-y-3">
            <label style="color: #360040" class="font-semibold text-sm">Amount</label>
            <input placeholder="(NGN) XXX,XXX" class="py-2.5 pr-4 pl-10 border w-full rounded-lg outline-none" type="tel">
            <img class="absolute top-3 md:top-9 left-3" src="@/assets/img/nigeriaLogo.svg" alt="">
          </div>

          <div class="md:flex justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
            <div class="relative space-y-3">
              <label style="color: #360040" class="font-semibold text-sm">Expiry Date</label>
              <input placeholder="mm / yy" class="py-2.5 px-4 w-full rounded-lg border outline-none" type="tel">
            </div>

            <div class="relative space-y-3">
              <label style="color: #360040" class="font-semibold text-sm">CVV</label>
              <input placeholder="xxx" class="py-2.5 px-4 w-full rounded-lg border outline-none" type="tel">
            </div>
          </div>
        </form>
        <div class="flex flex-col space-y-3 justify-center items-center">
          <button
            class="font-medium py-3 w-full text-white rounded-lg text-sm"
            style="background-color: #8b4e96"
            @click="proceedWithPayment"
          >
            Pay (NGN) XXX,XXX now
          </button>
          <p class="text-center font-semibold cursor-pointer text-sm" style="color: #8b4e96">
            Use a different payment method
          </p>
        </div>
      </div>
    </b-modal>

    <b-modal
      id="paymentOptionsModal"
      centered
      hide-footer
      no-close-on-esc
      no-close-on-backdrop
      no-stacking
      size="md"
    >
      <template #modal-title>
        <h1 class="text-lg font-medium" style="color: #360040">
          Payment Options
        </h1>
      </template>
      <div class="space-y-7 py-6">
        <div class="space-y-7 flex justify-center items-center flex-col w-6/12 mx-auto">
          <div class="flex items-center justify-between w-full cursor-pointer" @click="handleSelectedMethod('card')">
            <div class="w-full flex justify-center items-center">
              <img class="h-12 w-12" src="@/assets/img/cardPayment.svg" alt="">
            </div>
            <div class="w-full">
              <p class="font-semibold" style="color: #8b4e96">
                Card
              </p>
            </div>
          </div>

          <div class="flex items-center justify-between w-full cursor-pointer" @click="handleSelectedMethod('ussd')">
            <div class="w-full flex justify-center items-center">
              <img class="h-12 w-12" src="@/assets/img/ussdPayment.svg" alt="">
            </div>
            <div class="w-full">
              <p class="font-semibold" style="color: #8b4e96">
                USSD
              </p>
            </div>
          </div>

          <div
            class="flex items-center justify-between w-full cursor-pointer"
            @click="handleSelectedMethod('bank_payment')"
          >
            <div class="w-full flex justify-center items-center">
              <img class="h-12 w-12" src="@/assets/img/bankPayment.svg" alt="">
            </div>
            <div class="w-full">
              <p class="font-semibold" style="color: #8b4e96">
                Bank
              </p>
            </div>
          </div>

          <div
            class="flex items-center justify-between w-full cursor-pointer"
            @click="handleSelectedMethod('bank_transfer')"
          >
            <div class="w-full flex justify-center items-center">
              <img class="h-12 w-12" src="@/assets/img/bankTransfer.svg" alt="">
            </div>
            <div class="w-full">
              <p class="font-semibold" style="color: #8b4e96">
                Bank Transfer
              </p>
            </div>
          </div>
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
      id="purchaseEscrowModal"
      centered
      hide-footer
      no-close-on-esc
      no-close-on-backdrop
      no-stacking
      size="md"
    >
      <template #modal-title>
        <h1 class="flex justify-center font-semibold items-center" style="color: #360040">
          Purchase escrow order
        </h1>
      </template>

      <form class="p-2 space-y-6" @submit.prevent="handleEscrowPurchaseRequest">
        <div>
          <input
            v-model="orderData.trustId"
            type="tel"
            maxlength="10"
            placeholder="Input seller trust ID here"
            class="px-3 py-3 w-full text-sm placeholder-gray-500 border rounded-md"
          >
        </div>

        <div class="md:rounded-md md:px-6 md:py-3 md:border space-y-4">
          <h1 class="text-gray-500 font-medium md:text-lg">
            Address
          </h1>
          <div class="space-y-6">
            <div class="">
              <textarea
                v-model="orderData.address"
                class="rounded-lg w-full border text-sm px-3 py-3 outline-none focus:ring-1 ring-green-500"
                rows="3"
                cols="3"
                placeholder="Enter address here"
              />
            </div>
            <div class="relative">
              <input
                v-model="orderData.productNarration"
                type="text"
                placeholder="Product Narration*"
                class="pl-9 placeholder-gray-500 text-sm border rounded-lg w-full py-3 outline-none focus:ring-1 ring-green-500"
              >
              <img src="@/assets/img/narration.svg" class="absolute top-5 left-3 h-4 w-4" alt="">
            </div>
            <div class="relative">
              <input
                v-model="orderData.phone"
                type="tel"
                placeholder="Mobile number*"
                maxlength="11"
                class="pl-9 placeholder-gray-500 text-sm border rounded-lg w-full py-3 outline-none focus:ring-1 ring-green-500"
              >
              <img src="@/assets/img/mobile.svg" class="absolute top-5 left-3 h-4 w-4" alt="">
              <img src="@/assets/img/phoneCount.svg" class="absolute top-5 right-3" alt="">
            </div>
            <div class="relative">
              <input
                v-model="orderData.price"
                type="tel"
                placeholder=""
                class="pl-9 placeholder-gray-500 text-sm border rounded-lg w-full py-3 outline-none focus:ring-1 ring-green-500"
              >
              <img src="@/assets/img/naira.png" class="absolute top-5 left-3 h-4 w-4" alt="">
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
            <p class="font-bold text-gray-400 text-sm md:text-base">
              N {{ `${escrowAllowance}.00` || "0.00" }}
            </p>
          </div>

          <div class="flex items-center justify-between pt-1 mt-1">
            <p style="font-weight: 900" class="font-medium text-gray-400 text-sm">
              Total
            </p>
            <p class="font-bold text-gray-400 text-sm md:text-base">
              N
              {{
                `${Number(orderData.price) + Number(escrowAllowance)}.00` ||
                  "0.00"
              }}
            </p>
          </div>
        </div>

        <div class="border w-full space-y-3 px-6 py-4 rounded-lg">
          <h1 class="text-base font-emedium text-gray-400">
            Delivery method *
          </h1>

          <div class="flex items-center space-x-3">
            <div>
              <input id="logX" v-model="orderData.deliveryMethod" value="logX" type="radio">
            </div>
            <label for="logX" class="text-sm text-gray-400 font-light">
              Express delivery by LogX
            </label>
          </div>
          <div class="flex items-center space-x-3">
            <div>
              <input id="alternative" v-model="orderData.deliveryMethod" value="alternative" type="radio">
            </div>
            <label for="alternative" class="text-sm text-gray-400 font-light">
              Use an alternative delivery system
            </label>
          </div>
        </div>

        <div class="md:flex justify-between space-y-6 md:space-y-0 items-center md:space-x-10 pb-3">
          <div class="w-full">
            <button
              :disabled="processingOrder && isOrderFormValid"
              class="py-2 font-medium w-full text-white rounded-lg"
              style="background-color: #8b4e96"
              type="submit"
              @click="proceedToCreateOrder"
            >
              {{ processingOrder ? "processing..." : "Confirm" }}
            </button>
          </div>
          <div class="w-full">
            <button
              class="py-2 font-medium w-full rounded-lg border border-purple-900"
              style="color: #8b4e96"
              type="button"
              @click="closeOrderModal"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </b-modal>

    <b-modal
      id="purchaseEscrowSuccessModal"
      centered
      hide-footer
      hide-header
      no-close-on-esc
      no-close-on-backdrop
      no-stacking
      size="md"
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
            <img class="inline ml-1" src="@/assets/img/nigeriaLogo.svg" alt=""><b>(NGN) {{ Number(orderData.price) +
              Number(escrowAllowance) }}0</b>
            from your escrow wallet balance to this Trust ID :
            <b>{{ orderData.trustId ? orderData.trustId : "000000" }}</b>
          </p>

          <p class="font-light text-center text-sm" style="color: #360040">
            You will be redirected to make use of the
            {{ orderData.deliveryMethod ? orderData.deliveryMethod : "Log X" }}
            service
          </p>
        </div>

        <div class="flex justify-center items-center">
          <button
            class="font-medium text-sm py-3 w-full text-white rounded-lg"
            style="background-color: #8b4e96"
            @click="$bvModal.show('logXModal')"
          >
            Click here to proceed to LogX
          </button>
        </div>
      </div>
    </b-modal>

    <b-modal
      id="logXModal"
      centered
      hide-footer
      hide-header
      no-close-on-esc
      no-close-on-backdrop
      no-stacking
      size="md"
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
            We have deducted
            <img class="inline ml-1" src="@/assets/img/nigeriaLogo.svg" alt=""><b>(NGN) 2,500,000</b> from your total
            wallet balance to complete
            this transaction with the Trust Code : <b>090 3453 5247</b>
          </p>
        </div>

        <div class="flex justify-center items-center">
          <button
            class="font-medium text-sm py-3 w-full text-white rounded-lg"
            style="background-color: #8b4e96"
            @click="$bvModal.hide('logXModal')"
          >
            Back to dashboard
          </button>
        </div>
      </div>
    </b-modal>

    <b-modal
      id="insufficientBalanceModal"
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
          Sorry you dont have sufficient balance in your
          <b>total wallet balance.</b>
          Please Fund your wallet and try again.
        </p>
        <p class="text-gray-600">
          Would you like to proceed to fund your wallet?
        </p>

        <div class="flex justify-center items-center space-x-6">
          <button
            class="font-medium text-xs py-3 w-full text-white rounded-md bg-red-400"
            @click="closeInsufficientBalanceModal"
          >
            Cancel
          </button>
          <button class="font-medium text-xs py-3 w-full text-white rounded-md bg-black" @click="handleWalletFunding">
            Fund wallet
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
          <button
            class="font-medium text-xs py-3 w-full text-white rounded-md bg-red-400"
            @click="closeAccountVerificationModal"
          >
            Cancel
          </button>
          <button
            class="font-medium text-xs py-3 w-full text-white rounded-md bg-black"
            @click="redirectToAccountVerification"
          >
            proceed to verify account
          </button>
        </div>
      </div>
    </b-modal>
  </main>
</template>

<script>
// import squad from '@/plugins/squad.js'
export default {
  name: 'Dashboard',
  components: {},
  layout: 'dashboardLayout',
  data () {
    return {
      banksList: [],
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
      currentPage: 1,
      perPage: 7,
      search: '',
      showModal: false,
      totalRows: 1,
      loading: true,
      tableData: [],
      loggedInUser: {},
      selected_bank: null,
      bankHasBeenSelected: false,
      loadingAccountName: false,
      processingTranfer: false,
      processingOrder: false,
      trustId: '',
      userEmail: '',
      bankInfo: {
        account_number: '',
        bank_code: '',
        account_name: '',
        withdraw_amount: ''
      },
      orderData: {
        trustId: '',
        address: '',
        productNarration: '',
        phone: '',
        price: '',
        deliveryMethod: ''
      },
      fundWalletData: {
        trustId: '8147626503',
        amount: 400
      },
      accountNameError: '',
      isAccountNumberValid: true
    }
  },
  computed: {
    escrowAllowance () {
      return this.orderData ? `${(Number(this.orderData.price) * 7.5) / 100}` : ''
    },
    isFormValid () {
      return !!(
        this.bankInfo.account_number &&
        this.bankInfo.account_name &&
        this.bankInfo.withdraw_amount
      )
    },
    isOrderFormValid () {
      return !!(
        this.orderData.trustId &&
        this.orderData.address &&
        this.orderData.productNarration &&
        this.orderData.phone &&
        this.orderData.price &&
        this.orderData.deliveryMethod
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
  created () {
    this.loadBanks()
    this.setUserData()
    this.loadEscrowOrders()
  },
  mounted () {
    const loggedUser = localStorage.getItem('user')
    this.loggedInUser = loggedUser !== null ? JSON.parse(loggedUser) : ''
    this.totalRows = this.tableData.length
  },
  methods: {
    redirectToAccountVerification () {
      this.$router.push('/dashboard/settings/profile')
    },
    closeAccountVerificationModal () {
      this.$bvModal.hide('unVerifiedUserModal')
    },
    loadEscrowOrders () {
      this.loading = true
      this.$axios
        .get(
          `https://trustwallet-oana.onrender.com/api/user/escrow_order/${this.loggedInUser.trustId}`
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
    closeInsufficientBalanceModal () {
      this.$bvModal.hide('insufficientBalanceModal')
    },
    async proceedToCreateOrder () {
      this.processingOrder = true
      const payload = {
        trustId: this.orderData.trustId,
        address: this.orderData.address,
        productNarration: this.orderData.productNarration,
        phoneNumber: this.orderData.phone,
        price: this.orderData.price,
        deliveryMethod: this.orderData.deliveryMethod,
        requestingUser: 'shopper'
      }

      if (
        this.loggedInUser &&
        this.loggedInUser?.mainWalletBalance < this.orderData.price
      ) {
        this.$bvModal.show('insufficientBalanceModal')
      } else {
        this.$axios
          .post(
            'https://trustwallet-oana.onrender.com/api/user/new-purchase-escrow',
            payload
          )
          .then((res) => {
            this.$bvModal.show('purchaseEscrowSuccessModal')
          })
          .catch(() => {
            alert(
              'Something went wrong while processing purchase escrow order'
            )
          })
          .finally(() => {
            this.processingOrder = false
          })
      }
    },
    setUserData () {
      if (process.client) {
        this.trustId = localStorage.getItem('trustId')
        this.userEmail = localStorage.getItem('email')
      }
    },
    handleWalletFunding () {
      this.processingFunding = true
      this.$bvModal.hide('insufficientBalanceModal')
      if (this.fundWalletData.trustId === '') {
        alert('Trust ID is required')
        this.processingFunding = false
      } else if (this.fundWalletData.amount === '') {
        this.errors.push('Please enter amount')
        this.processingFunding = false
      } else {
        // const squadKey =
        //   'pk_dce747d560f6bee26c1854c11afc3be5f75a793d'
        // const squadInstance = new squad({
        //   key: squadKey,
        //   email: 'abahmarquis@gmail.com',
        //   amount: this.fundWalletData.amount * 100,
        //   currency_code: 'NGN',
        //   onClose: () => console.log('Widget closed'),
        //   onLoad: () => console.log('Widget loaded successfully'),
        //   onSuccess: (res) => {
        //     console.log(res)
        //     this.processingPayment = true
        //     const payload = {
        //       trustId: this.fundWalletData.trustId,
        //       amount: this.fundWalletData.amount,
        //       reference: res.transaction_ref
        //     }
        //     this.$axios
        //       .post(
        //         'https://trustxwallet.onrender.com/api/user/transaction/verify',
        //         payload
        //       )
        //       .then((res) => {
        //         console.log(res)
        //       })
        //       .catch((error) => {
        //         console.log(error)
        //       })
        //       .finally(() => {
        //         this.processingFunding = false
        //       })
        //   }
        // })
        // squadInstance.setup()
        // squadInstance.open()

        // access the paystack key from env file
        const paystackApiKey = 'pk_live_e849d3b956ff39677f3514dc6b25310f31c70343'
        this.$paystack({
          key: paystackApiKey, // Replace with your public key.
          email: this.loggedInUser?.email ?? '',
          // amount value is expected in kobo (charge * 100)
          amount: this.fundWalletData?.amount * 100,
          ref: '' + Math.floor(Math.random() * 100000000000000 + 1),
          currency: 'NGN',
          callback: (res) => {
            this.verifyTransaction(res)
          },
          onClose: () => {
            alert('window cosed')
          }
        })
      }
    },
    verifyTransaction (result) {
      this.verifyingTransaction = true
      const payload = {
        trustId: this.trustId,
        amount: result.amount,
        reference: result.reference
      }
      this.$axios.post(
        '/transaction/verify',
        payload
      ).then(() => {
        alert('Transaction was successfully verified')
      }).catch(() => {
        console.log('Something went wrong while verifying transaction')
      }).finally(() => {
        this.verifyingTransaction = false
      })
    },
    proceedWithPayment () {
      this.$bvModal.show('paymentOptionsModal')
    },
    handleWithdrawalRequest () {
      if (this.loggedInUser.verified) {
        this.$bvModal.show('requestWithdrawalModal')
      } else {
        this.$bvModal.show('unVerifiedUserModal')
      }
    },
    loadBanks () {
      this.$axios
        .get('https://api.paystack.co/bank?currency=NGN')
        .then((res) => {
          this.banksList = res.data.data
        })
        .catch(() => {
          console.log('Something went wrong while loading baanks')
          // this.$toast.error("Something went wrong while loading baanks.");
        })
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
          trustId: this.loggedInUser?.phone ?? '8147626503',
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
    close () {
      this.$bvModal.hide('withdrawalSuccessModal')
    },
    handleEscrowPurchase () {
      this.$bvModal.show('purchaseEscrowModal')
    },
    closeOrderModal () {
      this.$bvModal.hide('purchaseEscrowModal')
    },
    handleEscrowPurchaseRequest () {
      this.$bvModal.show('purchaseEscrowSuccessModal')
    },
    validateAccountNumber () {
      this.isAccountNumberValid = true
      this.loadingAccountName = true
      this.$axios
        .get(
          `https://api.paystack.co/bank/resolve?account_number=${this.bankInfo.account_number}&bank_code=${this.bankInfo.bank_code}`,
          {
            headers: {
              authorization:
                'Bearer sk_live_c6e48951ea505ee01d035de53026cb9fb48a614a'
            }
          }
        )
        .then((res) => {
          this.isAccountNumberValid = true
          this.bankInfo.account_name = res.data.data.account_name
        })
        .catch(() => {
          this.isAccountNumberValid = false
          this.accountNameError = 'please enter a valid account number'
        })
        .finally(() => {
          this.loadingAccountName = false
        })
    }
  }
}
</script>
