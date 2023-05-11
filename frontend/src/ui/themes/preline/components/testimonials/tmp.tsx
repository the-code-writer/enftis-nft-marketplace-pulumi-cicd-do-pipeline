import React from "react";
import { HiInformationCircle } from "react-icons/hi";
import AlertSimple from "./AlertSimple";

type AlertProps = {
    children: React.ReactNode;
    title: string;
    titleClassName?: string;
    message: string;
}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Testimonials -->
<div class="overflow-hidden bg-slate-800">
  <div class="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Title -->
    <div class="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
        Loved by business and individuals across the globe
      </h2>
    </div>
    <!-- End Title -->

    <!-- Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Card -->
      <div class="flex h-auto">
        <div class="flex flex-col bg-white rounded-xl dark:bg-slate-900">
          <div class="flex-auto p-4 md:p-6">
            <p class="text-base italic md:text-lg text-gray-800 dark:text-gray-200">
              " With Preline, we're able to easily track our performance in full detail. It's become an essential tool for us to grow and engage with our audience. "
            </p>
          </div>

          <div class="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-slate-700">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img class="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
              </div>

              <div class="grow ml-3">
                <p class="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                  Josh Tyson
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Product Manager | Capsule
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Card -->

      <!-- Card -->
      <div class="flex h-auto">
        <div class="flex flex-col bg-white rounded-xl dark:bg-slate-900">
          <div class="flex-auto p-4 md:p-6">
            <p class="text-base italic md:text-lg text-gray-800 dark:text-gray-200">
              " In September, I will be using this theme for 2 years. I went through multiple updates and changes and I'm very glad to see the consistency and effort made by the team. "
            </p>
          </div>

          <div class="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-slate-700">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img class="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
              </div>

              <div class="grow ml-3">
                <p class="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                  Luisa
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Senior Director of Operations | Fitbit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Card -->

      <!-- Card -->
      <div class="flex h-auto">
        <div class="flex flex-col bg-white rounded-xl dark:bg-slate-900">
          <div class="flex-auto p-4 md:p-6">
            <p class="text-base italic md:text-lg text-gray-800 dark:text-gray-200">
              " Refreshing and Thought provoking design and it changes my view about how I design the websites. Great typography, modern clean white design, nice tones of the color. "
            </p>
          </div>

          <div class="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-slate-700">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img class="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]" src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description">
              </div>

              <div class="grow ml-3">
                <p class="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                  Alisa Williams
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Entrepreneur | Happy customer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Card -->
    </div>
    <!-- End Grid -->

    <!-- Grid -->
    <div class="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
      <!-- Stats -->
      <div>
        <h4 class="text-lg sm:text-xl font-semibold text-white">Accuracy rate</h4>
        <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">99.95%</p>
        <p class="mt-1 text-gray-400">in fulfilling orders</p>
      </div>
      <!-- End Stats -->

      <!-- Stats -->
      <div>
        <h4 class="text-lg sm:text-xl font-semibold text-white">Startup businesses</h4>
        <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">2,000+</p>
        <p class="mt-1 text-gray-400">partner with Preline</p>
      </div>
      <!-- End Stats -->

      <!-- Stats -->
      <div>
        <h4 class="text-lg sm:text-xl font-semibold text-white">Happy customer</h4>
        <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">85%</p>
        <p class="mt-1 text-gray-400">this year alone</p>
      </div>
      <!-- End Stats -->
    </div>
    <!-- End Grid -->

    <!-- SVG Element -->
    <div class="absolute bottom-0 right-0 transform lg:translate-x-32" aria-hidden="true">
      <svg class="w-40 h-auto sm:w-72" width="1115" height="636" viewBox="0 0 1115 636" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z" fill="currentColor" class="fill-orange-500"/>
        <path d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z" fill="currentColor" class="fill-cyan-500"/>
        <path d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z" fill="currentColor" class="fill-white"/>
      </svg>
    </div>
    <!-- End SVG Element -->
  </div>
</div>
<!-- End Testimonials -->
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Testimonials -->
<div class="relative overflow-hidden">
  <div class="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
    <!-- Gradients -->
    <div aria-hidden="true" class="flex absolute left-0 -z-[1]">
      <div class="bg-purple-200 opacity-20 blur-3xl w-[1036px] h-[300px] dark:bg-purple-900 dark:opacity-20"></div>
    </div>
    <!-- End Gradients -->

    <!-- Grid -->
    <div class="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
      <div class="hidden lg:block lg:col-span-2">
        <img class="rounded-xl" src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description">
      </div>
      <!-- End Col -->

      <div class="lg:col-span-4">
        <!-- Blockquote -->
        <blockquote>
          <svg class="w-24 h-auto mb-4" viewBox="-0.3 0 320.3999999999999 99.9" xmlns="http://www.w3.org/2000/svg" width="2500" height="779"><path d="M168.7 25.1c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.8-6.5 6.5-6.5c3.7.1 6.5 3 6.5 6.5zm-26.8 13.1v1.6s-3.1-4-9.7-4c-10.9 0-19.4 8.3-19.4 19.8 0 11.4 8.4 19.8 19.4 19.8 6.7 0 9.7-4.1 9.7-4.1V73c0 .8.6 1.4 1.4 1.4h8.1V36.8h-8.1c-.8 0-1.4.7-1.4 1.4zm0 24.1c-1.5 2.2-4.5 4.1-8.1 4.1-6.4 0-11.3-4-11.3-10.8s4.9-10.8 11.3-10.8c3.5 0 6.7 2 8.1 4.1zm15.5-25.5h9.6v37.6h-9.6zm143.4-1c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8s-8.5-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-22.7-14.2v22.4h-9.6V53.2c0-6.2-2-8.7-7.4-8.7-2.9 0-5.9 1.5-7.8 3.7v26.2h-9.6V36.8h7.6c.8 0 1.4.7 1.4 1.4v1.6c2.8-2.9 6.5-4 10.2-4 4.2 0 7.7 1.2 10.5 3.6 3.4 2.8 4.7 6.4 4.7 12.7zm-57.7-16.3c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8.1-11.4-8.4-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-26-30.5c2.9 0 4.4.5 4.4.5v8.9s-8-2.7-13 3v26.3H173V36.8h8.1c.8 0 1.4.7 1.4 1.4v1.6c1.8-2.1 5.7-4 8.7-4zM91.5 71c-.5-1.2-1-2.5-1.5-3.6-.8-1.8-1.6-3.5-2.3-5.1l-.1-.1C80.7 47.2 73.3 32 65.5 17l-.3-.6c-.8-1.5-1.6-3.1-2.4-4.7-1-1.8-2-3.7-3.6-5.5C56 2.2 51.4 0 46.5 0c-5 0-9.5 2.2-12.8 6-1.5 1.8-2.6 3.7-3.6 5.5-.8 1.6-1.6 3.2-2.4 4.7l-.3.6C19.7 31.8 12.2 47 5.3 62l-.1.2c-.7 1.6-1.5 3.3-2.3 5.1-.5 1.1-1 2.3-1.5 3.6C.1 74.6-.3 78.1.2 81.7c1.1 7.5 6.1 13.8 13 16.6 2.6 1.1 5.3 1.6 8.1 1.6.8 0 1.8-.1 2.6-.2 3.3-.4 6.7-1.5 10-3.4 4.1-2.3 8-5.6 12.4-10.4 4.4 4.8 8.4 8.1 12.4 10.4 3.3 1.9 6.7 3 10 3.4.8.1 1.8.2 2.6.2 2.8 0 5.6-.5 8.1-1.6 7-2.8 11.9-9.2 13-16.6.8-3.5.4-7-.9-10.7zm-45.1 5.2C41 69.4 37.5 63 36.3 57.6c-.5-2.3-.6-4.3-.3-6.1.2-1.6.8-3 1.6-4.2 1.9-2.7 5.1-4.4 8.8-4.4s7 1.6 8.8 4.4c.8 1.2 1.4 2.6 1.6 4.2.3 1.8.2 3.9-.3 6.1-1.2 5.3-4.7 11.7-10.1 18.6zm39.9 4.7c-.7 5.2-4.2 9.7-9.1 11.7-2.4 1-5 1.3-7.6 1-2.5-.3-5-1.1-7.6-2.6-3.6-2-7.2-5.1-11.4-9.7 6.6-8.1 10.6-15.5 12.1-22.1.7-3.1.8-5.9.5-8.5-.4-2.5-1.3-4.8-2.7-6.8-3.1-4.5-8.3-7.1-14.1-7.1s-11 2.7-14.1 7.1c-1.4 2-2.3 4.3-2.7 6.8-.4 2.6-.3 5.5.5 8.5 1.5 6.6 5.6 14.1 12.1 22.2-4.1 4.6-7.8 7.7-11.4 9.7-2.6 1.5-5.1 2.3-7.6 2.6-2.7.3-5.3-.1-7.6-1-4.9-2-8.4-6.5-9.1-11.7-.3-2.5-.1-5 .9-7.8.3-1 .8-2 1.3-3.2.7-1.6 1.5-3.3 2.3-5l.1-.2c6.9-14.9 14.3-30.1 22-44.9l.3-.6c.8-1.5 1.6-3.1 2.4-4.6.8-1.6 1.7-3.1 2.8-4.4 2.1-2.4 4.9-3.7 8-3.7s5.9 1.3 8 3.7c1.1 1.3 2 2.8 2.8 4.4.8 1.5 1.6 3.1 2.4 4.6l.3.6c7.6 14.9 15 30.1 21.9 45v.1c.8 1.6 1.5 3.4 2.3 5 .5 1.2 1 2.2 1.3 3.2.8 2.6 1.1 5.1.7 7.7z" fill="#ff5a5f"/></svg>

          <p class="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal dark:text-gray-200">
            To say that switching to Preline has been life-changing is an understatement. My business has tripled and I got my life back.
          </p>

          <footer class="mt-6">
            <div class="flex items-center">
              <div class="lg:hidden flex-shrink-0">
                <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
              </div>
              <div class="ml-4 lg:ml-0">
                <p class="font-medium text-gray-800 dark:text-gray-200">
                  Nicole Grazioso
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Head of Finance
                </p>
              </div>
            </div>
          </footer>
        </blockquote>
        <!-- End Blockquote -->
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
</div>
<!-- End Testimonials -->
        
        </>

    )

} 
 
export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Testimonials with Stats -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
  <div class="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
    <div class="lg:col-span-5 lg:col-start-1">
      <!-- Title -->
      <div class="mb-8">
        <h2 class="mb-2 text-3xl text-gray-800 font-bold lg:text-4xl dark:text-gray-200">
          It's all about speed
        </h2>
        <p class="text-gray-600 dark:text-gray-400">
          We provide you with a test account that can be set up in seconds. Our main focus is getting responses to you as soon as we can.
        </p>
      </div>
      <!-- End Title -->

      <!-- Blockquote -->
      <blockquote class="relative">
        <svg class="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-200 dark:text-gray-800" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"/>
        </svg>

        <div class="relative z-10">
          <p class="text-xl italic text-gray-800 dark:text-white">
            Amazing people to work with. Very fast and professional partner.
          </p>
        </div>

        <footer class="mt-6">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
            </div>
            <div class="grow ml-4">
              <div class="font-semibold text-gray-800 dark:text-gray-200">Josh Grazioso</div>
              <div class="text-xs text-gray-500">Director Payments & Risk | Airbnb</div>
            </div>
          </div>
        </footer>
      </blockquote>
      <!-- End Blockquote -->
    </div>
    <!-- End Col -->

    <div class="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
      <div class="space-y-6 sm:space-y-8">
        <!-- List -->
        <ul class="grid grid-cols-2 divide-y divide-y-2 divide-x divide-x-2 divide-gray-200 overflow-hidden dark:divide-gray-700">
          <li class="flex flex-col -m-0.5 p-4 sm:p-8">
            <div class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-gray-200">
              45k+
            </div>
            <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              users - from new startups to public companies
            </p>
          </li>

          <li class="flex flex-col -m-0.5 p-4 sm:p-8">
            <div class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-gray-200">
              <svg class="w-4 h-4 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 14.4452C9 14.9504 8.55229 15.36 8 15.36C7.44772 15.36 7 14.9504 7 14.4452V3.38868L1.70711 8.23079C1.31658 8.58806 0.683417 8.58806 0.292893 8.23079C-0.0976311 7.87353 -0.0976311 7.29429 0.292893 6.93703L7.11612 0.694919C7.60427 0.248339 8.39573 0.248341 8.88388 0.694919L15.7071 6.93703C16.0976 7.29429 16.0976 7.87353 15.7071 8.23079C15.3166 8.58806 14.6834 8.58806 14.2929 8.23079L9 3.38868V14.4452Z" fill="currentColor"/>
              </svg>
              23%
            </div>
            <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              increase in traffic on webpages with Looms
            </p>
          </li>

          <li class="flex flex-col -m-0.5 p-4 sm:p-8">
            <div class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-gray-200">
              <svg class="w-4 h-4 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 14.4452C9 14.9504 8.55229 15.36 8 15.36C7.44772 15.36 7 14.9504 7 14.4452V3.38868L1.70711 8.23079C1.31658 8.58806 0.683417 8.58806 0.292893 8.23079C-0.0976311 7.87353 -0.0976311 7.29429 0.292893 6.93703L7.11612 0.694919C7.60427 0.248339 8.39573 0.248341 8.88388 0.694919L15.7071 6.93703C16.0976 7.29429 16.0976 7.87353 15.7071 8.23079C15.3166 8.58806 14.6834 8.58806 14.2929 8.23079L9 3.38868V14.4452Z" fill="currentColor"/>
              </svg>
              9.3%
            </div>
            <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              boost in reply rates across sales outreach
            </p>
          </li>

          <li class="flex flex-col -m-0.5 p-4 sm:p-8">
            <div class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-gray-200">
              2x
            </div>
            <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              faster than previous Preline versions
            </p>
          </li>
        </ul>
        <!-- End List -->
      </div>
    </div>
    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Testimonials with Stats -->
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Testimonials -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
  <div class="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
    <div class="hidden md:block mb-24 md:mb-0 sm:px-6">
      <div class="relative">
        <img class="rounded-xl" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=500&h=600&q=80" alt="Image Description">

        <!-- SVG Element -->
        <div class="absolute bottom-0 left-0 -z-[1] translate-y-10 -translate-x-14">
          <svg class="max-w-[10rem] h-auto text-slate-400 dark:text-slate-700" width="696" height="653" viewBox="0 0 696 653" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="72.5" cy="29.5" r="29.5" fill="currentColor"/>
            <circle cx="171.5" cy="29.5" r="29.5" fill="currentColor"/>
            <circle cx="270.5" cy="29.5" r="29.5" fill="currentColor"/>
            <circle cx="369.5" cy="29.5" r="29.5" fill="currentColor"/>
            <circle cx="468.5" cy="29.5" r="29.5" fill="currentColor"/>
            <circle cx="567.5" cy="29.5" r="29.5" fill="currentColor"/>
            <circle cx="666.5" cy="29.5" r="29.5" fill="currentColor"/>
            <circle cx="29.5" cy="128.5" r="29.5" fill="currentColor"/>
            <circle cx="128.5" cy="128.5" r="29.5" fill="currentColor"/>
            <circle cx="227.5" cy="128.5" r="29.5" fill="currentColor"/>
            <circle cx="326.5" cy="128.5" r="29.5" fill="currentColor"/>
            <circle cx="425.5" cy="128.5" r="29.5" fill="currentColor"/>
            <circle cx="524.5" cy="128.5" r="29.5" fill="currentColor"/>
            <circle cx="623.5" cy="128.5" r="29.5" fill="currentColor"/>
            <circle cx="72.5" cy="227.5" r="29.5" fill="currentColor"/>
            <circle cx="171.5" cy="227.5" r="29.5" fill="currentColor"/>
            <circle cx="270.5" cy="227.5" r="29.5" fill="currentColor"/>
            <circle cx="369.5" cy="227.5" r="29.5" fill="currentColor"/>
            <circle cx="468.5" cy="227.5" r="29.5" fill="currentColor"/>
            <circle cx="567.5" cy="227.5" r="29.5" fill="currentColor"/>
            <circle cx="666.5" cy="227.5" r="29.5" fill="currentColor"/>
            <circle cx="29.5" cy="326.5" r="29.5" fill="currentColor"/>
            <circle cx="128.5" cy="326.5" r="29.5" fill="currentColor"/>
            <circle cx="227.5" cy="326.5" r="29.5" fill="currentColor"/>
            <circle cx="326.5" cy="326.5" r="29.5" fill="currentColor"/>
            <circle cx="425.5" cy="326.5" r="29.5" fill="currentColor"/>
            <circle cx="524.5" cy="326.5" r="29.5" fill="currentColor"/>
            <circle cx="623.5" cy="326.5" r="29.5" fill="currentColor"/>
            <circle cx="72.5" cy="425.5" r="29.5" fill="currentColor"/>
            <circle cx="171.5" cy="425.5" r="29.5" fill="currentColor"/>
            <circle cx="270.5" cy="425.5" r="29.5" fill="currentColor"/>
            <circle cx="369.5" cy="425.5" r="29.5" fill="currentColor"/>
            <circle cx="468.5" cy="425.5" r="29.5" fill="currentColor"/>
            <circle cx="567.5" cy="425.5" r="29.5" fill="currentColor"/>
            <circle cx="666.5" cy="425.5" r="29.5" fill="currentColor"/>
            <circle cx="29.5" cy="524.5" r="29.5" fill="currentColor"/>
            <circle cx="128.5" cy="524.5" r="29.5" fill="currentColor"/>
            <circle cx="227.5" cy="524.5" r="29.5" fill="currentColor"/>
            <circle cx="326.5" cy="524.5" r="29.5" fill="currentColor"/>
            <circle cx="425.5" cy="524.5" r="29.5" fill="currentColor"/>
            <circle cx="524.5" cy="524.5" r="29.5" fill="currentColor"/>
            <circle cx="623.5" cy="524.5" r="29.5" fill="currentColor"/>
            <circle cx="72.5" cy="623.5" r="29.5" fill="currentColor"/>
            <circle cx="171.5" cy="623.5" r="29.5" fill="currentColor"/>
            <circle cx="270.5" cy="623.5" r="29.5" fill="currentColor"/>
            <circle cx="369.5" cy="623.5" r="29.5" fill="currentColor"/>
            <circle cx="468.5" cy="623.5" r="29.5" fill="currentColor"/>
            <circle cx="567.5" cy="623.5" r="29.5" fill="currentColor"/>
            <circle cx="666.5" cy="623.5" r="29.5" fill="currentColor"/>
          </svg>
        </div>
        <!-- End SVG Element -->
      </div>
    </div>
    <!-- End Col -->

    <div>
      <!-- Blockquote -->
      <blockquote class="relative">
        <svg class="absolute top-0 left-0 transform -translate-x-8 -translate-y-4 h-24 w-24 text-gray-200 dark:text-gray-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"/>
        </svg>

        <div class="relative z-10">
          <p class="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-gray-200">
            Featured client
          </p>

          <p class="text-xl font-medium italic text-gray-800 md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal dark:text-gray-200">
            To say that switching to Preline has been life-changing is an understatement. My business has tripled and I got my life back.
          </p>
        </div>

        <footer class="mt-6">
          <div class="flex items-center">
            <div class="md:hidden flex-shrink-0">
              <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
            </div>
            <div class="ml-4 md:ml-0">
              <div class="text-base font-semibold text-gray-800 dark:text-gray-200">Nicole Grazioso</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">Director Payments & Risk | Airbnb</div>
            </div>
          </div>
        </footer>

        <div class="mt-8 lg:mt-14">
          <a class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm lg:p-4 dark:focus-visible:ring-offset-gray-800" href="#">
            Read the story
          </a>
        </div>
      </blockquote>
      <!-- End Blockquote -->
    </div>
    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Testimonials -->
        
        </>

    )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Testimonials -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
  <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 md:gap-20 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
    <!-- Icon Block -->
    <div class="text-center">
      <svg class="w-auto h-8 mx-auto text-gray-800 dark:text-gray-200" width="227" height="88" viewBox="0 0 227 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M155.1 50.7001C151 50.7001 147.5 51.7001 144.5 53.1001C143.4 50.9001 142.3 49.0001 142.1 47.6001C142 46.0001 141.7 45.0001 142 43.0001C142.3 41.0001 143.4 38.3001 143.4 38.0001C143.4 37.8001 143.1 36.8001 140.8 36.8001C138.5 36.8001 136.4 37.2001 136.2 37.9001C136 38.5001 135.5 39.9001 135.2 41.4001C134.8 43.5001 130.5 51.1001 128.1 55.1001C127.3 53.5001 126.6 52.2001 126.5 51.1001C126.3 49.5001 126 48.5001 126.3 46.5001C126.6 44.5001 127.7 41.8001 127.7 41.5001C127.7 41.3001 127.4 40.3001 125.1 40.3001C122.8 40.3001 120.7 40.7001 120.5 41.4001C120.3 42.0001 120 43.5001 119.5 44.9001C119 46.3001 113.3 59.0001 111.8 62.3001C111 64.0001 110.4 65.3001 109.9 66.2001C109.9 66.2001 109.9 66.3001 109.8 66.4001C109.4 67.2001 109.2 67.6001 109.2 67.6001C108.9 68.2001 108.5 68.7001 108.4 68.7001C108.3 68.7001 108 67.2001 108.4 65.1001C109.3 60.7001 111.3 53.8001 111.3 53.6001C111.3 53.5001 111.7 52.3001 110 51.7001C108.3 51.1001 107.7 52.1001 107.6 52.1001C107.5 52.1001 107.3 52.5001 107.3 52.5001C107.3 52.5001 109.2 44.8001 103.8 44.8001C100.4 44.8001 95.8001 48.5001 93.5001 51.8001C92.1001 52.6001 89.0001 54.3001 85.7001 56.1001C84.4001 56.8001 83.1001 57.5001 81.9001 58.2001C81.8001 58.1001 81.7001 58.0001 81.6001 57.9001C75.0001 50.8001 63.0001 45.8001 63.5001 36.5001C63.7001 33.1001 64.9001 24.2001 86.6001 13.3001C104.5 4.50005 118.8 6.90005 121.3 12.3001C124.8 20.1001 113.7 34.4001 95.1001 36.5001C88.0001 37.3001 84.3001 34.6001 83.4001 33.5001C82.4001 32.4001 82.3001 32.4001 81.9001 32.6001C81.3001 32.9001 81.7001 33.9001 81.9001 34.4001C82.5001 35.8001 84.7001 38.4001 88.6001 39.7001C92.0001 40.8001 100.3 41.4001 110.3 37.5001C121.5 33.2001 130.3 21.1001 127.7 11.0001C125.2 0.800058 108.1 -2.49995 92.0001 3.20005C82.4001 6.60005 72.0001 12.0001 64.6001 18.9001C55.7001 27.2001 54.3001 34.4001 54.9001 37.4001C57.0001 48.1001 71.8001 55.1001 77.7001 60.3001C77.4001 60.5001 77.1001 60.6001 76.9001 60.7001C73.9001 62.2001 62.7001 68.1001 59.8001 74.3001C56.6001 81.4001 60.3001 86.4001 62.8001 87.1001C70.4001 89.2001 78.2001 85.4001 82.4001 79.2001C86.6001 72.9001 86.1001 64.8001 84.1001 61.1001C84.1001 61.1001 84.1001 61.0001 84.0001 61.0001C84.8001 60.6001 85.6001 60.1001 86.3001 59.6001C87.8001 58.7001 89.3001 57.9001 90.6001 57.2001C89.9001 59.2001 89.3001 61.5001 89.1001 65.0001C88.8001 69.0001 90.4001 74.2001 92.6001 76.2001C93.6001 77.1001 94.7001 77.1001 95.4001 77.1001C97.9001 77.1001 99.0001 75.0001 100.3 72.5001C101.8 69.5001 103.2 66.0001 103.2 66.0001C103.2 66.0001 101.5 75.5001 106.2 75.5001C107.9 75.5001 109.6 73.3001 110.4 72.2001C110.4 72.2001 110.4 72.1001 110.5 72.0001C110.7 71.7001 110.8 71.6001 110.8 71.6001C111.5 70.4001 113 67.7001 115.3 63.2001C118.2 57.4001 121.1 50.2001 121.1 50.2001C121.1 50.2001 121.4 52.0001 122.2 54.9001C122.7 56.6001 123.8 58.5001 124.6 60.4001C123.9 61.4001 123.5 61.9001 123.5 61.9001C122.9 62.6001 122.4 63.4001 121.7 64.2001C119.4 67.0001 116.6 70.1001 116.2 71.1001C115.8 72.2001 115.9 73.0001 116.7 73.6001C117.3 74.1001 118.4 74.1001 119.6 74.1001C121.7 74.0001 123.2 73.4001 123.9 73.1001C125 72.7001 126.3 72.1001 127.6 71.2001C129.9 69.5001 131.3 67.1001 131.1 63.9001C131 62.2001 130.5 60.4001 129.8 58.8001C130 58.5001 130.2 58.2001 130.4 57.9001C134 52.6001 136.8 46.9001 136.8 46.9001C136.8 46.9001 137.1 48.7001 137.9 51.6001C138.3 53.1001 139.2 54.7001 140 56.3001C136.6 59.0001 134.5 62.2001 133.8 64.3001C132.5 68.2001 133.5 69.9001 135.5 70.3001C136.4 70.5001 137.7 70.1001 138.6 69.7001C139.8 69.3001 141.2 68.7001 142.5 67.7001C144.8 66.0001 147 63.7001 146.8 60.5001C146.7 59.1001 146.4 57.6001 145.8 56.2001C148.7 55.0001 152.4 54.3001 157.1 54.9001C167.2 56.1001 169.2 62.4001 168.9 65.1001C168.5 67.8001 166.4 69.2001 165.7 69.7001C165 70.1001 164.8 70.3001 164.8 70.6001C164.9 71.1001 165.2 71.0001 165.8 71.0001C166.6 70.9001 171.1 68.8001 171.3 64.0001C171.6 57.4001 165.7 50.6001 155.1 50.7001ZM76.9001 77.0001C73.5001 80.7001 68.9001 82.0001 66.8001 80.9001C64.6001 79.6001 65.5001 74.2001 69.6001 70.4001C72.1001 68.0001 75.3001 65.8001 77.5001 64.5001C78.0001 64.2001 78.7001 63.8001 79.6001 63.2001C79.7001 63.1001 79.8001 63.1001 79.8001 63.1001C80.0001 63.0001 80.1001 62.9001 80.3001 62.8001C81.9001 68.3001 80.5001 73.2001 76.9001 77.0001ZM101.4 60.4001C100.2 63.3001 97.8001 70.6001 96.3001 70.2001C95.0001 69.9001 94.2001 64.3001 96.0001 58.9001C96.9001 56.2001 98.9001 52.9001 100 51.6001C101.8 49.6001 103.9 48.9001 104.3 49.7001C105 50.7001 102.1 58.6001 101.4 60.4001ZM121.6 70.0001C121.1 70.3001 120.6 70.4001 120.4 70.3001C120.3 70.2001 120.6 69.9001 120.6 69.9001C120.6 69.9001 123.1 67.2001 124.1 65.9001C124.7 65.2001 125.4 64.3001 126.1 63.4001C126.1 63.5001 126.1 63.6001 126.1 63.7001C126.2 66.9001 123 69.1001 121.6 70.0001ZM137.2 66.5001C136.8 66.2001 136.9 65.4001 138.1 62.7001C138.6 61.7001 139.7 59.9001 141.6 58.2001C141.8 58.9001 142 59.5001 141.9 60.2001C141.9 64.3001 139 65.8001 137.2 66.5001Z" fill="currentColor"/>
      </svg>

      <div class="mt-2 sm:mt-6">
        <p class="text-gray-800 dark:text-gray-200">
          " Truly great template and costumer support. "
        </p>
      </div>

      <!-- Star -->
      <div class="flex-shrink-0 flex justify-center space-x-1 mt-3">
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
      </div>
      <!-- End Star -->
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div class="text-center">
      <svg class="w-auto h-8 mx-auto text-gray-800 dark:text-gray-200" width="100" height="33" viewBox="0 0 100 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.8281 1.37569C22.5336 1.37569 23.2424 1.37569 23.9508 1.3708C23.943 3.90544 23.9763 6.44058 23.9352 8.97522C23.9171 10.6112 23.2268 12.3547 21.7273 13.1664C20.0327 14.0293 17.884 14.0245 16.2226 13.0866C14.8083 12.2589 14.1209 10.5569 14.1591 8.96984C14.1669 6.43764 14.1615 3.90544 14.1645 1.37324H16.2246C16.23 3.56544 16.2197 5.75518 16.227 7.94737C16.2632 8.95467 16.2657 10.051 16.8713 10.9096C17.6854 12.0304 19.3933 12.1361 20.5405 11.505C21.5786 10.8788 21.8002 9.57305 21.8208 8.45763C21.8384 6.09763 21.8227 3.73568 21.8281 1.37569ZM31.0244 1.42217C32.8091 0.891852 34.8007 1.21376 36.3902 2.16431C36.3804 2.90597 36.3804 3.64518 36.3804 4.38488C35.0463 3.3903 33.2714 2.65891 31.6149 3.23815C30.8987 3.45243 30.43 4.31443 30.7749 5.00814C31.0582 5.6725 31.8287 5.86574 32.4383 6.11329C33.7518 6.63626 35.2665 6.91708 36.2405 8.02711C37.4924 9.53929 37.1754 12.2315 35.3413 13.1512C33.2778 14.2201 30.6991 13.8801 28.7207 12.7672C28.7183 12.0045 28.7183 11.2447 28.7104 10.482C30.1996 11.6287 32.2656 12.3088 34.0894 11.6106C35.084 11.2501 35.2102 9.70269 34.3086 9.16846C32.9094 8.32114 31.1913 8.14844 29.8493 7.18761C28.6698 6.33931 28.322 4.65786 28.8117 3.33355C29.1771 2.37272 30.0612 1.70542 31.0244 1.42217ZM50.1764 1.19028C52.984 3.7665 55.7149 6.4303 58.4711 9.06279V1.37324H60.5317V13.8107C57.7211 11.1415 54.9884 8.39305 52.1621 5.73855V13.5391C51.4953 13.544 50.8305 13.544 50.1661 13.5465C50.1696 9.42873 50.149 5.31195 50.1764 1.19028ZM65.9449 1.3708C68.4311 1.3708 70.9144 1.38352 73.3977 1.36297C73.4128 1.98917 73.4128 2.61488 73.4128 3.24108C71.6306 3.24108 69.8504 3.23815 68.0676 3.24108V6.13384C69.6571 6.13922 71.2441 6.13384 72.8336 6.13922V8.00412C71.244 8.0064 69.6553 8.0064 68.0676 8.00412C68.0676 9.22717 68.0676 10.4541 68.073 11.6777C69.8503 11.6698 71.6306 11.6777 73.4055 11.6723C73.408 12.3166 73.4104 12.9628 73.4104 13.6071H65.94C65.9449 9.52902 65.9376 5.45138 65.9449 1.3708ZM79.4513 1.84974C81.3832 0.731877 83.8513 1.07433 85.747 2.10512C85.7832 2.86243 85.7832 3.6217 85.7808 4.3795C84.4051 3.3492 82.552 2.61244 80.8632 3.28756C79.9048 3.63001 79.7937 5.07517 80.6645 5.57466C82.0833 6.38872 83.8176 6.5531 85.1443 7.55306C86.927 8.88227 86.7954 12.0999 84.7578 13.1302C82.6943 14.2123 80.0902 13.8929 78.1167 12.7491C78.1167 11.9966 78.1167 11.2447 78.104 10.4923C79.5413 11.5197 81.3705 12.2183 83.1429 11.7393C83.797 11.5744 84.3973 10.9869 84.3043 10.2658C84.3176 9.71443 83.9311 9.23011 83.4467 9.0036C82.0554 8.282 80.4136 8.07848 79.1524 7.10249C77.5061 5.8271 77.6148 2.90352 79.4513 1.84974ZM91.8163 1.89133C93.7326 0.731877 96.2418 1.04351 98.1351 2.10218C98.1429 2.85215 98.1429 3.59919 98.1483 4.34868C96.7853 3.31838 94.9253 2.62026 93.259 3.30028C92.3295 3.66083 92.2233 5.06489 93.0731 5.57466C94.5261 6.42003 96.3347 6.5531 97.6639 7.63329C98.8077 8.53492 99.0367 10.2066 98.5935 11.5255C98.1786 12.6996 96.9962 13.3846 95.8343 13.635C94.0515 14.0034 92.148 13.6737 90.5639 12.7828C90.538 12.0177 90.538 11.2525 90.5355 10.4874C92.0345 11.6004 94.0775 12.3137 95.8988 11.6126C96.8905 11.252 97.0426 9.73204 96.1488 9.18069C94.711 8.28151 92.8975 8.15333 91.5502 7.08635C89.9617 5.81193 90.036 2.9637 91.8163 1.89133ZM0.960938 1.37324C3.12084 1.49946 5.36391 1.05574 7.45386 1.73673C9.77471 2.48084 10.1044 6.11084 7.9871 7.29035C9.91659 8.08925 10.3593 10.825 9.0355 12.3396C8.22144 13.3082 6.89223 13.5656 5.68924 13.6018C4.11249 13.6277 2.53867 13.6018 0.961916 13.6096V1.37324H0.960938ZM3.02544 3.24353C3.02283 4.31525 3.02283 5.3868 3.02544 6.45819C4.13304 6.40437 5.28221 6.61278 6.36388 6.30115C7.67009 5.92249 7.68036 3.7714 6.38198 3.38002C5.2871 3.10166 4.14086 3.29245 3.02544 3.24353ZM3.02544 8.26439C3.02055 9.42335 3.023 10.5828 3.02544 11.7378C4.29741 11.6478 5.66331 11.9878 6.8663 11.4546C8.05902 10.8724 7.9509 8.88863 6.70144 8.44295C5.51655 8.07359 4.24653 8.34511 3.02544 8.26439ZM42.2432 1.37324H44.3058V13.6096H42.2432V1.37324ZM33.7988 20.3716C35.7229 19.1529 38.2889 19.491 40.19 20.5908C40.1797 21.3275 40.1797 22.0643 40.1821 22.8006C38.7913 21.7835 36.8799 20.9978 35.2053 21.7781C34.3785 22.1724 34.2704 23.4008 35.0145 23.9341C36.5399 24.9027 38.5672 24.9492 39.8832 26.2735C40.7638 27.1052 40.9106 28.432 40.6846 29.5655C40.4219 30.699 39.4327 31.5439 38.3427 31.8648C36.4347 32.4519 34.2934 32.1353 32.5777 31.1383C32.5831 30.3835 32.5855 29.6291 32.5777 28.8742C34.0283 29.9637 35.9988 30.6799 37.7815 30.041C38.8578 29.7524 39.0721 28.0988 38.0981 27.5577C36.6583 26.6585 34.8267 26.5455 33.5023 25.4326C32.0009 24.1635 32.0988 21.4327 33.7988 20.3716ZM9.14117 19.8564H11.1993C11.2042 23.8905 11.205 27.9263 11.2018 31.9636H9.14117V19.8564ZM17.0597 19.5732C19.8008 22.19 22.5355 24.8176 25.3006 27.4095C25.3109 24.8695 25.303 22.3319 25.3055 19.7948C25.9904 19.7919 26.6774 19.7909 27.3666 19.7919C27.3714 23.9214 27.3612 28.0479 27.3714 32.1774C24.5765 29.5283 21.8359 26.8195 19.0621 24.1469C19.0488 26.7515 19.0621 29.3581 19.0567 31.9651H17.0602C17.0576 27.8332 17.0574 23.7025 17.0597 19.5732ZM46.0425 19.8564H48.1036V31.9636H46.0425V19.8564ZM54.031 19.8564C55.6901 19.8564 57.3508 19.8546 59.0132 19.8511C60.9011 19.8281 62.8511 20.7943 63.7738 22.4816C64.7654 24.2535 64.8295 26.456 64.2141 28.3649C63.5546 30.3707 61.5914 31.7895 59.4999 31.925C57.6786 32.0179 55.8548 31.9382 54.031 31.9636V19.8564ZM56.1537 21.7238V30.0933C57.6297 30.0395 59.2191 30.3203 60.5919 29.6301C61.9128 28.9496 62.5165 27.4041 62.4778 25.982C62.5316 24.5446 62.0243 22.9322 60.7005 22.1954C59.3116 21.42 57.6659 21.8221 56.1537 21.7238ZM68.8406 19.8564C71.3082 19.8542 73.777 19.8542 76.2469 19.8564C76.2469 20.4797 76.244 21.103 76.244 21.7267C74.4619 21.7215 72.681 21.7215 70.9012 21.7267V24.5549C72.4882 24.5578 74.0769 24.5588 75.6672 24.5578V26.3611C74.0777 26.3611 72.4873 26.3582 70.9012 26.3611V30.0909C72.6815 30.0963 74.4642 30.0909 76.2469 30.0938V31.9612H68.8406V19.8564ZM82.3029 19.854C83.9746 19.8692 85.6468 19.8383 87.316 19.8643C88.7347 19.9 90.2347 20.717 90.6427 22.1489C91.0086 23.3935 90.921 24.8695 90.1221 25.933C89.6329 26.569 88.8394 26.8092 88.0977 27.0127C89.5452 28.648 90.9817 30.2951 92.4073 31.9539C91.5919 31.9695 90.7796 31.9695 89.9705 31.9539C88.5894 30.313 87.1819 28.6952 85.7945 27.0646C85.3361 27.0675 84.8802 27.0675 84.4247 27.0675C84.4198 28.6981 84.4222 30.3287 84.4222 31.9597C83.7139 31.962 83.0055 31.962 82.2971 31.9597V19.8501L82.3029 19.854ZM84.4222 21.6602C84.4174 22.8607 84.4198 24.0613 84.4222 25.2613C85.5225 25.1997 86.6727 25.434 87.7377 25.0916C89.0542 24.5632 89.0826 22.4498 87.7866 21.8867C86.7211 21.4792 85.5435 21.7189 84.4281 21.6621" fill="currentColor"/>
      </svg>

      <div class="mt-2 sm:mt-6">
        <p class="text-gray-800 dark:text-gray-200">
          " The best one I've ever come across. "
        </p>
      </div>

      <!-- Star -->
      <div class="flex-shrink-0 flex justify-center space-x-1 mt-3">
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M49.6867 20.0305C50.2889 19.3946 49.9878 18.1228 49.0846 18.1228L33.7306 15.8972C33.4296 15.8972 33.1285 15.8972 32.8275 15.2613L25.9032 0.317944C25.6021 0 25.3011 0 25 0V42.6046C25 42.6046 25.3011 42.6046 25.6021 42.6046L39.7518 49.9173C40.3539 50.2352 41.5581 49.5994 41.2571 48.6455L38.5476 32.4303C38.5476 32.1124 38.5476 31.7944 38.8486 31.4765L49.6867 20.0305Z" fill="#cbd5e1"/>
          <path d="M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z" fill="currentColor"/>
        </svg>
      </div>
      <!-- End Star -->
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div class="text-center">
      <svg class="w-auto h-8 mx-auto text-gray-800 dark:text-gray-200" width="106" height="36" viewBox="0 0 106 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M55.4732 9.52669C55.4732 10.6846 54.5258 11.6846 53.3153 11.6846C52.1048 11.6846 51.1574 10.7372 51.1574 9.52669C51.1574 8.31616 52.0521 7.36879 53.3153 7.36879C54.5785 7.47406 55.4732 8.42142 55.4732 9.52669ZM46.6837 13.8425C46.6837 14.053 46.6837 14.3688 46.6837 14.3688C46.6837 14.3688 45.6837 13.053 43.5258 13.053C39.9469 13.053 37.1574 15.7898 37.1574 19.5267C37.1574 23.2635 39.8942 26.0004 43.5258 26.0004C45.7363 26.0004 46.6837 24.6319 46.6837 24.6319V25.2109C46.6837 25.4741 46.8942 25.6846 47.1574 25.6846H49.789V13.3688C49.789 13.3688 47.3679 13.3688 47.1574 13.3688C46.8942 13.3688 46.6837 13.632 46.6837 13.8425ZM46.6837 21.7372C46.21 22.4741 45.21 23.1056 44.0521 23.1056C41.9469 23.1056 40.3679 21.7898 40.3679 19.5793C40.3679 17.3688 41.9995 16.053 44.0521 16.053C45.21 16.053 46.2627 16.6846 46.6837 17.4214V21.7372ZM51.789 13.3688H54.9469V25.6846H51.789V13.3688ZM98.789 13.053C96.6311 13.053 95.6311 14.3688 95.6311 14.3688V7.47406H92.4732V25.7372C92.4732 25.7372 94.8942 25.7372 95.1048 25.7372C95.3679 25.7372 95.5785 25.5267 95.5785 25.2635V24.6846C95.5785 24.6846 96.5785 26.053 98.7364 26.053C102.315 26.053 105.105 23.3162 105.105 19.5793C105.157 15.7898 102.368 13.053 98.789 13.053ZM98.2627 23.053C97.0521 23.053 96.1048 22.4214 95.6311 21.6846V17.2635C96.1048 16.632 97.1574 15.8951 98.2627 15.8951C100.368 15.8951 101.947 17.2109 101.947 19.4214C101.947 21.632 100.368 23.053 98.2627 23.053ZM90.8416 18.4214V25.7898H87.6837V18.7898C87.6837 16.7372 87.0521 15.9477 85.2627 15.9477C84.3153 15.9477 83.3153 16.4214 82.6837 17.1583V25.7372H79.5258V13.3688H81.9995C82.2627 13.3688 82.4732 13.5793 82.4732 13.8425V14.3688C83.3679 13.4214 84.6311 13.053 85.8416 13.053C87.21 13.053 88.3679 13.4214 89.2627 14.2109C90.4206 15.1583 90.8416 16.3162 90.8416 18.4214ZM71.8942 13.053C69.7364 13.053 68.7364 14.3688 68.7364 14.3688V7.47406H65.5785V25.7372C65.5785 25.7372 67.9995 25.7372 68.21 25.7372C68.4732 25.7372 68.6837 25.5267 68.6837 25.2635V24.6846C68.6837 24.6846 69.6837 26.053 71.8416 26.053C75.4206 26.053 78.21 23.3162 78.21 19.5793C78.2627 15.7898 75.4732 13.053 71.8942 13.053ZM71.3679 23.053C70.1574 23.053 69.21 22.4214 68.7364 21.6846V17.2635C69.21 16.632 70.2627 15.8951 71.3679 15.8951C73.4732 15.8951 75.0521 17.2109 75.0521 19.4214C75.0521 21.632 73.4732 23.053 71.3679 23.053ZM62.8416 13.053C63.789 13.053 64.2627 13.2109 64.2627 13.2109V16.1056C64.2627 16.1056 61.6311 15.2109 59.9995 17.1056V25.7372H56.8416V13.3688C56.8416 13.3688 59.2627 13.3688 59.4732 13.3688C59.7364 13.3688 59.9469 13.5793 59.9469 13.8425V14.3688C60.5785 13.6846 61.8942 13.053 62.8416 13.053ZM30.1574 24.6319C29.9995 24.2635 29.8416 23.7898 29.6837 23.4741C29.4206 22.8951 29.1574 22.3162 28.9469 21.7898L28.8942 21.7372C26.6311 16.8425 24.21 11.8425 21.6311 6.89511L21.5258 6.68458C21.2627 6.2109 20.9995 5.68458 20.7363 5.15827C20.4206 4.57932 20.1048 3.94774 19.5785 3.36879C18.5258 2.053 16.9995 1.31616 15.4206 1.31616C13.789 1.31616 12.3153 2.053 11.21 3.26353C10.6837 3.89511 10.3153 4.47406 9.99951 5.10564C9.73635 5.63195 9.47319 6.15827 9.21003 6.63195L9.10477 6.84248C6.57845 11.7372 4.10477 16.7372 1.84161 21.6846L1.78898 21.7372C1.57845 22.2635 1.3153 22.8425 1.05214 23.4214C0.894243 23.7898 0.736348 24.1583 0.578453 24.5793C0.1574 25.7898 -0.000494055 26.9477 0.210032 28.1056C0.578453 30.5793 2.21003 32.632 4.47319 33.5267C5.3153 33.8951 6.21003 34.053 7.10477 34.053C7.36793 34.053 7.68372 34.0004 7.94687 34.0004C9.05214 33.8951 10.1574 33.5267 11.21 32.8951C12.5785 32.1583 13.8416 31.053 15.2627 29.4741C16.6837 31.053 17.9995 32.1056 19.3153 32.8951C20.4206 33.5267 21.5258 33.8951 22.5785 34.0004C22.8416 34.053 23.1574 34.053 23.4206 34.053C24.3153 34.053 25.2627 33.8951 26.0521 33.5267C28.3679 32.632 29.9469 30.5267 30.3153 28.1056C30.6837 26.9477 30.5785 25.8425 30.1574 24.6319ZM15.3679 26.3162C13.5785 24.1056 12.4732 22.0004 12.0521 20.2109C11.8942 19.4741 11.8416 18.7898 11.9469 18.2109C11.9995 17.6846 12.21 17.2109 12.4732 16.8425C13.1048 15.9477 14.1574 15.4214 15.3679 15.4214C16.5785 15.4214 17.6837 15.9477 18.2627 16.8425C18.5258 17.2109 18.7363 17.6846 18.789 18.2109C18.8942 18.7898 18.8416 19.4741 18.6837 20.2109C18.2627 21.9477 17.1048 24.053 15.3679 26.3162ZM28.4206 27.8425C28.21 29.5267 27.0521 31.0004 25.4206 31.6846C24.6311 32.0004 23.789 32.1056 22.9469 32.0004C22.1048 31.8951 21.3153 31.632 20.4732 31.1583C19.3153 30.5267 18.1048 29.4741 16.7363 28.0004C18.8942 25.3688 20.21 22.8951 20.6837 20.7372C20.8942 19.7372 20.9469 18.7898 20.8416 17.9477C20.7363 17.1056 20.4206 16.3688 19.9469 15.7372C18.9469 14.2635 17.21 13.4214 15.3153 13.4214C13.4206 13.4214 11.6837 14.3162 10.6837 15.7372C10.21 16.3688 9.94687 17.1583 9.78898 17.9477C9.68372 18.7898 9.68372 19.7372 9.94687 20.7372C10.4206 22.8951 11.789 25.3688 13.8942 28.0004C12.5258 29.5267 11.3153 30.5267 10.1574 31.1583C9.3153 31.632 8.47319 31.8951 7.68372 32.0004C6.78898 32.1056 5.94687 31.9477 5.21003 31.6846C3.57845 31.053 2.47319 29.5267 2.21003 27.8425C2.10477 27.0004 2.1574 26.2109 2.52582 25.2635C2.63108 24.9477 2.78898 24.632 2.94687 24.2109C3.1574 23.6846 3.42056 23.1056 3.68372 22.5793L3.73635 22.5267C5.99951 17.632 8.42056 12.632 10.9469 7.78985L11.0521 7.57932C11.3153 7.10564 11.5785 6.57932 11.8416 6.053C12.1048 5.52669 12.4206 5.053 12.7363 4.63195C13.4206 3.84248 14.3679 3.42143 15.3679 3.42143C16.3679 3.42143 17.3153 3.84248 17.9995 4.63195C18.3679 5.053 18.6311 5.52669 18.8942 6.053C19.1574 6.52669 19.4206 7.053 19.6837 7.57932L19.789 7.78985C22.2627 12.6846 24.6837 17.6846 26.9469 22.5267V22.5793C27.21 23.1056 27.4206 23.6846 27.6837 24.2109C27.8416 24.5793 27.9995 24.9477 28.1048 25.2635C28.4732 26.1583 28.5785 27.0004 28.4206 27.8425Z" fill="currentColor"/>
      </svg>

      <div class="mt-2 sm:mt-6">
        <p class="text-gray-800 dark:text-gray-200">
          " This is a truly beautiful template. "
        </p>
      </div>

      <!-- Star -->
      <div class="flex-shrink-0 flex justify-center space-x-1 mt-3">
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
      </div>
      <!-- End Star -->
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div class="text-center">
      <svg class="w-auto h-8 mx-auto text-gray-800 dark:text-gray-200" width="140" height="47" viewBox="0 0 140 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
          <path d="M96.2674 23.8697C93.7525 23.5204 92.7744 22.8916 92.8443 21.9136C92.984 20.1671 95.1497 19.9575 96.477 20.0274C99.0619 20.2369 99.6207 22.4725 99.6207 22.7519L102.136 22.5423C101.996 20.9355 100.669 17.7918 96.8962 17.5124C94.8004 17.3727 92.984 17.7918 91.7964 18.8397C90.8882 19.6082 90.1197 20.7958 89.98 21.9835C89.7006 25.8258 93.473 26.3847 95.8483 26.734C98.8523 27.1531 99.5509 27.5723 99.481 28.69C99.481 29.2489 99.1317 29.8078 98.7126 30.1571C98.0838 30.6461 96.8263 30.8557 95.5688 30.716C92.7046 30.4365 92.495 28.6202 92.495 28.2709L89.98 28.3407C89.98 29.8777 91.0279 32.8817 95.2894 33.3707C97.5948 33.6501 99.481 32.9515 100.459 32.2529C101.577 31.4146 102.206 30.0174 102.275 28.69C102.485 24.708 98.6427 24.219 96.2674 23.8697Z" fill="currentColor"/>
          <path d="M110.659 30.7161C114.431 30.7161 114.152 26.4546 114.152 26.4546V17.9316H117.086V26.3847C117.086 26.3847 117.086 26.4546 117.086 26.6642C117.086 27.9217 116.946 33.3009 110.728 33.3009H110.519C104.301 33.3009 104.162 27.9915 104.162 26.6642C104.162 26.5245 104.162 26.3847 104.162 26.3847V17.9316H107.096V26.3847C107.166 26.3847 106.886 30.7161 110.659 30.7161Z" fill="currentColor"/>
          <path d="M136.926 28.3405C136.088 29.8076 134.411 30.6459 132.595 30.6459C130.08 30.6459 128.054 29.0392 127.705 26.5242H139.93C139.93 26.1749 139.93 25.6859 139.93 25.3366C139.93 20.5861 136.717 17.5122 132.455 17.5122C128.194 17.5122 124.771 20.5162 124.771 25.3366C124.771 30.1569 128.194 33.2308 132.455 33.2308C135.11 33.2308 137.625 32.113 139.022 29.8775L136.926 28.3405ZM132.525 20.2368C134.97 20.2368 136.717 21.7737 137.136 24.2887H127.774C128.124 21.7038 130.01 20.2368 132.525 20.2368Z" fill="currentColor"/>
          <path d="M80.9681 17.582C78.8723 17.582 76.7066 18.5601 75.7286 20.2367V17.8615H72.7944V40.2168H75.7286V30.7158C76.7066 32.4623 78.8723 33.3006 80.9681 33.3006C85.0898 33.3006 88.513 30.2966 88.513 25.4762C88.513 20.7257 85.0898 17.582 80.9681 17.582ZM80.6886 30.576C78.2435 30.576 75.6587 28.8295 75.6587 25.616C75.6587 22.4024 78.1737 20.3066 80.8284 20.3066C83.5529 20.3066 85.7186 22.3325 85.7186 25.3365C85.6487 28.4104 83.3433 30.576 80.6886 30.576Z" fill="currentColor"/>
          <path d="M122.605 9.68799H119.67V32.9515H122.605V9.68799Z" fill="currentColor"/>
          <path d="M64.4113 17.4424C64.3414 17.4424 64.2716 17.4424 64.2017 17.4424C64.2017 17.4424 61.6867 17.4424 59.3115 18.4204L59.5909 19.1889L60.1498 20.7957C60.9881 20.4464 62.3853 20.0272 64.2017 19.9574C64.2716 19.9574 64.3414 19.9574 64.4113 19.9574C67.6249 19.9574 67.6947 22.8915 67.6947 22.8915V23.6599L62.6648 23.5901C62.3155 23.5901 60.2895 23.5901 58.8225 24.9873C58.4732 25.3366 58.1937 25.6859 57.9841 26.1051C57.7047 26.7338 57.4951 27.4324 57.4951 28.2009C57.4951 29.1789 57.7746 30.0871 58.1937 30.8556C58.4033 31.2049 58.6827 31.5542 58.9622 31.8336C59.9402 32.7418 61.3374 33.3007 62.8744 33.3007C63.0141 33.3007 63.1538 33.3007 63.2237 33.3007C64.9702 33.2308 66.577 32.5322 67.6249 30.8556V32.9514H70.2097V23.4504C70.2796 21.0053 68.7426 17.4424 64.4113 17.4424ZM63.1538 30.9254C62.2456 30.9953 60.1498 30.5063 60.1498 28.2009C60.1498 27.5721 60.7087 26.1051 62.5251 26.1051C64.3414 26.1051 67.555 26.1051 67.555 26.1051C67.6249 28.8995 65.9482 30.7857 63.1538 30.9254Z" fill="currentColor"/>
          <path d="M49.1118 30.3667C44.4311 30.3667 40.8682 26.5942 40.8682 21.9136C40.8682 17.233 44.501 13.3906 49.1118 13.3906C51.3473 13.3906 53.3034 14.2988 54.7704 15.696L56.5169 13.3208C54.6307 11.5743 51.976 10.5264 49.1118 10.5264C42.8243 10.5264 37.8643 15.6262 37.8643 21.9136C37.8643 28.201 42.8243 33.3008 49.1118 33.3008C51.6966 33.3008 54.002 32.4625 55.8183 31.1351L54.8403 28.4106C53.2335 29.5284 51.0678 30.3667 49.1118 30.3667Z" fill="currentColor"/>
          <path d="M0 30.2965H3.63273V28.061H8.24351V30.2965H11.8064V12.9712H0V30.2965Z" fill="currentColor"/>
          <path d="M18.0938 8.08105C17.5349 8.08105 17.1157 8.50022 17.1157 9.0591C17.1157 9.61798 17.5349 10.0371 18.0938 10.0371C18.6526 10.0371 19.0718 9.61798 19.0718 9.0591C19.1417 8.57008 18.6526 8.08105 18.0938 8.08105Z" fill="currentColor"/>
          <path d="M18.0938 12.6221C17.5349 12.6221 17.1157 13.0412 17.1157 13.6001C17.1157 14.159 17.5349 14.5782 18.0938 14.5782C18.6526 14.5782 19.0718 14.159 19.0718 13.6001C19.1417 13.1111 18.6526 12.6221 18.0938 12.6221Z" fill="currentColor"/>
          <path d="M18.0938 17.2329C17.5349 17.2329 17.1157 17.6521 17.1157 18.211C17.1157 18.7698 17.5349 19.189 18.0938 19.189C18.6526 19.189 19.0718 18.7698 19.0718 18.211C19.1417 17.6521 18.6526 17.2329 18.0938 17.2329Z" fill="currentColor"/>
          <path d="M22.7744 8.08105C22.2155 8.08105 21.7964 8.50022 21.7964 9.0591C21.7964 9.61798 22.2155 10.0371 22.7744 10.0371C23.3333 10.0371 23.7525 9.61798 23.7525 9.0591C23.7525 8.57008 23.3333 8.08105 22.7744 8.08105Z" fill="currentColor"/>
          <path d="M22.7744 12.6221C22.2155 12.6221 21.7964 13.0412 21.7964 13.6001C21.7964 14.159 22.2155 14.5782 22.7744 14.5782C23.3333 14.5782 23.7525 14.159 23.7525 13.6001C23.7525 13.1111 23.3333 12.6221 22.7744 12.6221Z" fill="currentColor"/>
          <path d="M22.7744 17.2329C22.2155 17.2329 21.7964 17.6521 21.7964 18.211C21.7964 18.7698 22.2155 19.189 22.7744 19.189C23.3333 19.189 23.7525 18.7698 23.7525 18.211C23.7525 17.6521 23.3333 17.2329 22.7744 17.2329Z" fill="currentColor"/>
          <path d="M27.3154 8.08105C26.7566 8.08105 26.3374 8.50022 26.3374 9.0591C26.3374 9.61798 26.7566 10.0371 27.3154 10.0371C27.8743 10.0371 28.2935 9.61798 28.2935 9.0591C28.2935 8.57008 27.8743 8.08105 27.3154 8.08105Z" fill="currentColor"/>
          <path d="M27.3154 12.6221C26.7566 12.6221 26.3374 13.0412 26.3374 13.6001C26.3374 14.159 26.7566 14.5782 27.3154 14.5782C27.8743 14.5782 28.2935 14.159 28.2935 13.6001C28.2935 13.1111 27.8743 12.6221 27.3154 12.6221Z" fill="currentColor"/>
          <path d="M27.3154 17.2329C26.7566 17.2329 26.3374 17.6521 26.3374 18.211C26.3374 18.7698 26.7566 19.189 27.3154 19.189C27.8743 19.189 28.2935 18.7698 28.2935 18.211C28.2935 17.6521 27.8743 17.2329 27.3154 17.2329Z" fill="currentColor"/>
          <path d="M6.07776 24.2885C2.79433 24.2186 0.0697788 26.8035 -8.15348e-05 30.017C-0.0699418 33.2306 2.51489 35.9552 5.79832 36.0949C9.08176 36.1647 11.7364 33.5799 11.8762 30.2965C11.8762 27.0829 9.29134 24.3584 6.07776 24.2885ZM7.89413 32.3224H3.91209V28.3404H7.89413V32.3224Z" fill="currentColor"/>
          <path d="M6.07776 24.2885C2.79433 24.2186 0.0697788 26.8035 -8.15348e-05 30.017C-0.0699418 33.2306 2.51489 35.9552 5.79832 36.0949C9.08176 36.1647 11.7364 33.5799 11.8762 30.2965C11.8762 27.0829 9.29134 24.3584 6.07776 24.2885ZM7.89413 32.3224H3.91209V28.3404H7.89413V32.3224Z" fill="white" fill-opacity="0.2"/>
          <path d="M5.93812 19.1189C9.21766 19.1189 11.8762 16.4603 11.8762 13.1808C11.8762 9.90126 9.21766 7.24268 5.93812 7.24268C2.65859 7.24268 0 9.90126 0 13.1808C0 16.4603 2.65859 19.1189 5.93812 19.1189Z" fill="white"/>
          <path d="M16.627 23.1709V35.3266H28.7826V23.1709H16.627ZM26.3375 31.9733H19.1419V30.4364H26.3375V31.9733ZM26.3375 27.9913H19.1419V26.4543H26.3375V27.9913Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="140" height="47" fill="white"/>
          </clipPath>
        </defs>
      </svg>

      <div class="mt-2 sm:mt-6">
        <p class="text-gray-800 dark:text-gray-200">
          " There one theme that you want. "
        </p>
      </div>

      <!-- Star -->
      <div class="flex-shrink-0 flex justify-center space-x-1 mt-3">
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
      </div>
      <!-- End Star -->
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div class="text-center">
      <svg class="w-auto h-8 mx-auto text-gray-800 dark:text-gray-200" width="140" height="47" viewBox="0 0 140 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.3991 8.15082C20.3991 9.61789 19.1416 10.8754 17.6745 10.8754C16.2075 10.8754 14.95 9.61789 14.95 8.15082C14.95 6.68375 16.2075 5.42627 17.6745 5.42627C19.1416 5.42627 20.3991 6.68375 20.3991 8.15082ZM17.6745 13.1109C16.0678 13.1109 14.8103 14.3684 14.8103 15.9752C14.8103 17.582 16.0678 18.8394 17.6745 18.8394C19.2813 18.8394 20.5388 17.582 20.5388 15.9752C20.5388 14.2985 19.2813 13.1109 17.6745 13.1109ZM17.6745 20.7257C16.0678 20.7257 14.7404 22.053 14.7404 23.6598C14.7404 25.2666 16.0678 26.5939 17.6745 26.5939C19.2813 26.5939 20.6087 25.2666 20.6087 23.6598C20.6785 22.053 19.2813 20.7257 17.6745 20.7257ZM17.6745 28.4802C16.0678 28.4802 14.8103 29.7376 14.8103 31.3444C14.8103 32.9512 16.0678 34.2087 17.6745 34.2087C19.2813 34.2087 20.5388 32.9512 20.5388 31.3444C20.5388 29.8075 19.2813 28.4802 17.6745 28.4802ZM17.6745 36.3744C16.2075 36.3744 14.95 37.6319 14.95 39.0989C14.95 40.566 16.2075 41.8235 17.6745 41.8235C19.1416 41.8235 20.3991 40.566 20.3991 39.0989C20.3991 37.6319 19.2115 36.3744 17.6745 36.3744ZM25.2195 12.7616C23.4729 12.7616 22.0059 14.2287 22.0059 15.9752C22.0059 17.7217 23.4729 19.1887 25.2195 19.1887C26.966 19.1887 28.433 17.7217 28.433 15.9752C28.433 14.2287 26.966 12.7616 25.2195 12.7616ZM25.2195 20.3764C23.4031 20.3764 21.8662 21.8434 21.8662 23.7297C21.8662 25.546 23.3332 27.083 25.2195 27.083C27.0358 27.083 28.5728 25.6159 28.5728 23.7297C28.5728 21.8434 27.0358 20.3764 25.2195 20.3764ZM25.2195 28.1309C23.4729 28.1309 22.0059 29.5979 22.0059 31.3444C22.0059 33.0909 23.4729 34.558 25.2195 34.558C26.966 34.558 28.433 33.0909 28.433 31.3444C28.433 29.5979 26.966 28.1309 25.2195 28.1309ZM32.9739 19.9572C31.0179 19.9572 29.2714 21.564 29.2714 23.6598C29.2714 25.6159 30.8781 27.3624 32.9739 27.3624C35.0698 27.3624 36.6765 25.7556 36.6765 23.6598C36.5368 21.564 34.93 19.9572 32.9739 19.9572ZM10.0598 13.4602C8.73243 13.4602 7.61466 14.578 7.61466 15.9053C7.61466 17.2327 8.73243 18.3504 10.0598 18.3504C11.3871 18.3504 12.5049 17.2327 12.5049 15.9053C12.5049 14.578 11.457 13.4602 10.0598 13.4602ZM10.0598 21.075C8.59271 21.075 7.47494 22.1927 7.47494 23.6598C7.47494 25.1269 8.59271 26.2446 10.0598 26.2446C11.5268 26.2446 12.6446 25.1269 12.6446 23.6598C12.6446 22.1927 11.5268 21.075 10.0598 21.075ZM10.0598 28.8295C8.73243 28.8295 7.61466 29.9472 7.61466 31.2746C7.61466 32.6019 8.73243 33.7197 10.0598 33.7197C11.3871 33.7197 12.5049 32.6019 12.5049 31.2746C12.5049 29.9472 11.457 28.8295 10.0598 28.8295ZM2.445 21.4941C1.18752 21.4941 0.209473 22.4722 0.209473 23.7297C0.209473 24.9871 1.18752 25.9652 2.445 25.9652C3.70249 25.9652 4.68053 24.9871 4.68053 23.7297C4.68053 22.4722 3.70249 21.4941 2.445 21.4941Z" fill="currentColor"/>
        <path d="M64.4812 18.9092C64.2018 18.9092 63.9922 19.1886 63.9922 19.3982V38.7495C63.9922 39.0289 64.2716 39.2385 64.4812 39.2385H66.7866C67.066 39.2385 67.2756 38.9591 67.2756 38.7495V19.3982C67.2756 19.1188 66.9962 18.9092 66.7866 18.9092H64.4812Z" fill="currentColor"/>
        <path d="M65.7389 10.7358C64.4815 10.7358 63.5034 11.7139 63.5034 12.9714C63.5034 14.2289 64.4815 15.2069 65.7389 15.2069C66.9964 15.2069 67.9745 14.2289 67.9745 12.9714C67.9745 11.7139 66.9266 10.7358 65.7389 10.7358Z" fill="currentColor"/>
        <path d="M114.082 18.9092C113.803 18.9092 113.593 19.1886 113.593 19.3982V38.7495C113.593 39.0289 113.873 39.2385 114.082 39.2385H116.388C116.667 39.2385 116.877 38.9591 116.877 38.7495V19.3982C116.877 19.1188 116.597 18.9092 116.388 18.9092H114.082Z" fill="currentColor"/>
        <path d="M115.2 10.7358C113.942 10.7358 112.964 11.7139 112.964 12.9714C112.964 14.2289 113.942 15.2069 115.2 15.2069C116.457 15.2069 117.435 14.2289 117.435 12.9714C117.435 11.7139 116.457 10.7358 115.2 10.7358Z" fill="currentColor"/>
        <path d="M138.603 37.3525C138.743 37.2127 138.743 37.073 138.743 37.0031C138.743 36.8634 138.743 36.8634 138.743 36.8634C138.743 36.8634 138.743 36.7237 138.603 36.7237C138.603 36.7237 138.463 36.584 138.324 36.584C138.184 36.584 138.184 36.584 138.044 36.584H137.416V38.3305H137.695V37.7018H138.044L138.533 38.3305H138.813L138.184 37.562C138.463 37.6319 138.603 37.4922 138.603 37.3525ZM137.765 37.4922V36.8634H138.254C138.394 36.8634 138.533 36.8634 138.603 37.0031C138.743 37.0031 138.743 37.1429 138.743 37.2826C138.743 37.4223 138.743 37.562 138.603 37.562C138.463 37.562 138.324 37.7018 138.254 37.7018H137.765V37.4922Z" fill="currentColor"/>
        <path d="M138.114 35.8853C137.276 35.8853 136.507 36.6537 136.507 37.492C136.507 38.3304 137.276 39.0988 138.114 39.0988C138.952 39.0988 139.721 38.3304 139.721 37.492C139.721 36.5839 139.022 35.8853 138.114 35.8853ZM138.114 38.9591C137.276 38.9591 136.647 38.3304 136.647 37.492C136.647 36.6537 137.276 36.025 138.114 36.025C138.952 36.025 139.581 36.6537 139.581 37.492C139.581 38.3304 138.883 38.9591 138.114 38.9591Z" fill="currentColor"/>
        <path d="M83.6928 22.0531C83.9722 22.0531 84.1818 21.7737 84.1818 21.5641V19.2587C84.1818 18.9793 83.9024 18.7697 83.6928 18.7697H78.7327V11.3645C78.7327 11.0851 78.4533 10.8755 78.2437 10.8755H75.9383C75.6588 10.8755 75.4493 11.1549 75.4493 11.3645V18.7697H73.0042C72.7247 18.7697 72.5151 19.0491 72.5151 19.2587V21.5641C72.5151 21.8436 72.7946 22.0531 73.0042 22.0531H75.4493V33.2308C75.4493 36.6539 77.7547 38.8895 81.108 38.8895H83.5531C83.8325 38.8895 84.0421 38.61 84.0421 38.4004V36.0951C84.0421 35.8156 83.7626 35.606 83.5531 35.606H81.4573C79.8505 35.606 78.7327 34.4883 78.7327 32.7418V21.9833L83.6928 22.0531Z" fill="currentColor"/>
        <path d="M132.735 22.0531C133.014 22.0531 133.224 21.7737 133.224 21.5641V19.2587C133.224 18.9793 132.944 18.7697 132.735 18.7697H127.775V11.3645C127.775 11.0851 127.495 10.8755 127.286 10.8755H124.98C124.701 10.8755 124.491 11.1549 124.491 11.3645V18.7697H122.046C121.767 18.7697 121.557 19.0491 121.557 19.2587V21.5641C121.557 21.8436 121.837 22.0531 122.046 22.0531H124.491V33.2308C124.491 36.6539 126.797 38.8895 130.15 38.8895H132.595C132.874 38.8895 133.084 38.61 133.084 38.4004V36.0951C133.084 35.8156 132.805 35.606 132.595 35.606H130.36C128.753 35.606 127.635 34.4883 127.635 32.7418V21.9833L132.735 22.0531Z" fill="currentColor"/>
        <path d="M49.8106 22.053V38.5401C49.8106 38.8195 50.09 39.0291 50.2996 39.0291H52.605C52.8844 39.0291 53.094 38.7497 53.094 38.5401V22.053H58.5431C58.8226 22.053 59.0321 21.7736 59.0321 21.564V19.2586C59.0321 18.9792 58.7527 18.7696 58.5431 18.7696H53.094V14.4383C53.094 12.6918 54.3515 11.5041 55.8186 11.5041H58.5431C58.8226 11.5041 59.0321 11.2247 59.0321 11.0151V8.70973C59.0321 8.43028 58.7527 8.2207 58.5431 8.2207H55.9583C52.5351 8.2207 49.8106 11.085 49.8106 14.3684V18.7696H47.3655C47.086 18.7696 46.8765 19.049 46.8765 19.2586V21.564C46.8765 21.8435 47.1559 22.053 47.3655 22.053H49.8106Z" fill="currentColor"/>
        <path d="M106.258 21.2148C104.442 19.2587 101.857 18.1409 99.1321 18.1409C96.5473 18.1409 93.9625 19.2587 92.3557 20.8655V8.57008C92.3557 8.29064 92.0763 8.08105 91.8667 8.08105H89.5613C89.2818 8.08105 89.0723 8.3605 89.0723 8.57008V28.8994C89.0723 36.4443 94.1022 39.7278 99.0623 39.7278C103.952 39.7278 109.052 36.3745 109.052 28.8994C109.052 25.8954 108.074 23.1709 106.258 21.2148ZM99.0623 36.584C94.1022 36.584 92.2858 32.6719 92.2858 28.9693C92.2858 24.4284 95.0104 21.4244 99.0623 21.4244C103.114 21.4244 105.839 24.4982 105.839 28.9693C105.769 32.6719 104.022 36.584 99.0623 36.584Z" fill="currentColor"/>
      </svg>

      <div class="mt-2 sm:mt-6">
        <p class="text-gray-800 dark:text-gray-200">
          " Great design and thorough documentation. "
        </p>
      </div>

      <!-- Star -->
      <div class="flex-shrink-0 flex justify-center space-x-1 mt-3">
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"/>
        </svg>
        <svg class="h-4 w-4 text-blue-500" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M49.6867 20.0305C50.2889 19.3946 49.9878 18.1228 49.0846 18.1228L33.7306 15.8972C33.4296 15.8972 33.1285 15.8972 32.8275 15.2613L25.9032 0.317944C25.6021 0 25.3011 0 25 0V42.6046C25 42.6046 25.3011 42.6046 25.6021 42.6046L39.7518 49.9173C40.3539 50.2352 41.5581 49.5994 41.2571 48.6455L38.5476 32.4303C38.5476 32.1124 38.5476 31.7944 38.8486 31.4765L49.6867 20.0305Z" fill="#cbd5e1"/>
          <path d="M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z" fill="currentColor"/>
        </svg>
      </div>
      <!-- End Star -->
    </div>
    <!-- End Icon Block -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Testimonials -->
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Testimonials -->
<div class="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Blockquote -->
  <blockquote class="text-center lg:mx-auto lg:w-3/5">
    <svg class="mx-auto w-20 h-auto sm:w-28 text-gray-800 dark:text-gray-200" width="106" height="36" viewBox="0 0 106 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M55.4732 9.52669C55.4732 10.6846 54.5258 11.6846 53.3153 11.6846C52.1048 11.6846 51.1574 10.7372 51.1574 9.52669C51.1574 8.31616 52.0521 7.36879 53.3153 7.36879C54.5785 7.47406 55.4732 8.42142 55.4732 9.52669ZM46.6837 13.8425C46.6837 14.053 46.6837 14.3688 46.6837 14.3688C46.6837 14.3688 45.6837 13.053 43.5258 13.053C39.9469 13.053 37.1574 15.7898 37.1574 19.5267C37.1574 23.2635 39.8942 26.0004 43.5258 26.0004C45.7363 26.0004 46.6837 24.6319 46.6837 24.6319V25.2109C46.6837 25.4741 46.8942 25.6846 47.1574 25.6846H49.789V13.3688C49.789 13.3688 47.3679 13.3688 47.1574 13.3688C46.8942 13.3688 46.6837 13.632 46.6837 13.8425ZM46.6837 21.7372C46.21 22.4741 45.21 23.1056 44.0521 23.1056C41.9469 23.1056 40.3679 21.7898 40.3679 19.5793C40.3679 17.3688 41.9995 16.053 44.0521 16.053C45.21 16.053 46.2627 16.6846 46.6837 17.4214V21.7372ZM51.789 13.3688H54.9469V25.6846H51.789V13.3688ZM98.789 13.053C96.6311 13.053 95.6311 14.3688 95.6311 14.3688V7.47406H92.4732V25.7372C92.4732 25.7372 94.8942 25.7372 95.1048 25.7372C95.3679 25.7372 95.5785 25.5267 95.5785 25.2635V24.6846C95.5785 24.6846 96.5785 26.053 98.7364 26.053C102.315 26.053 105.105 23.3162 105.105 19.5793C105.157 15.7898 102.368 13.053 98.789 13.053ZM98.2627 23.053C97.0521 23.053 96.1048 22.4214 95.6311 21.6846V17.2635C96.1048 16.632 97.1574 15.8951 98.2627 15.8951C100.368 15.8951 101.947 17.2109 101.947 19.4214C101.947 21.632 100.368 23.053 98.2627 23.053ZM90.8416 18.4214V25.7898H87.6837V18.7898C87.6837 16.7372 87.0521 15.9477 85.2627 15.9477C84.3153 15.9477 83.3153 16.4214 82.6837 17.1583V25.7372H79.5258V13.3688H81.9995C82.2627 13.3688 82.4732 13.5793 82.4732 13.8425V14.3688C83.3679 13.4214 84.6311 13.053 85.8416 13.053C87.21 13.053 88.3679 13.4214 89.2627 14.2109C90.4206 15.1583 90.8416 16.3162 90.8416 18.4214ZM71.8942 13.053C69.7364 13.053 68.7364 14.3688 68.7364 14.3688V7.47406H65.5785V25.7372C65.5785 25.7372 67.9995 25.7372 68.21 25.7372C68.4732 25.7372 68.6837 25.5267 68.6837 25.2635V24.6846C68.6837 24.6846 69.6837 26.053 71.8416 26.053C75.4206 26.053 78.21 23.3162 78.21 19.5793C78.2627 15.7898 75.4732 13.053 71.8942 13.053ZM71.3679 23.053C70.1574 23.053 69.21 22.4214 68.7364 21.6846V17.2635C69.21 16.632 70.2627 15.8951 71.3679 15.8951C73.4732 15.8951 75.0521 17.2109 75.0521 19.4214C75.0521 21.632 73.4732 23.053 71.3679 23.053ZM62.8416 13.053C63.789 13.053 64.2627 13.2109 64.2627 13.2109V16.1056C64.2627 16.1056 61.6311 15.2109 59.9995 17.1056V25.7372H56.8416V13.3688C56.8416 13.3688 59.2627 13.3688 59.4732 13.3688C59.7364 13.3688 59.9469 13.5793 59.9469 13.8425V14.3688C60.5785 13.6846 61.8942 13.053 62.8416 13.053ZM30.1574 24.6319C29.9995 24.2635 29.8416 23.7898 29.6837 23.4741C29.4206 22.8951 29.1574 22.3162 28.9469 21.7898L28.8942 21.7372C26.6311 16.8425 24.21 11.8425 21.6311 6.89511L21.5258 6.68458C21.2627 6.2109 20.9995 5.68458 20.7363 5.15827C20.4206 4.57932 20.1048 3.94774 19.5785 3.36879C18.5258 2.053 16.9995 1.31616 15.4206 1.31616C13.789 1.31616 12.3153 2.053 11.21 3.26353C10.6837 3.89511 10.3153 4.47406 9.99951 5.10564C9.73635 5.63195 9.47319 6.15827 9.21003 6.63195L9.10477 6.84248C6.57845 11.7372 4.10477 16.7372 1.84161 21.6846L1.78898 21.7372C1.57845 22.2635 1.3153 22.8425 1.05214 23.4214C0.894243 23.7898 0.736348 24.1583 0.578453 24.5793C0.1574 25.7898 -0.000494055 26.9477 0.210032 28.1056C0.578453 30.5793 2.21003 32.632 4.47319 33.5267C5.3153 33.8951 6.21003 34.053 7.10477 34.053C7.36793 34.053 7.68372 34.0004 7.94687 34.0004C9.05214 33.8951 10.1574 33.5267 11.21 32.8951C12.5785 32.1583 13.8416 31.053 15.2627 29.4741C16.6837 31.053 17.9995 32.1056 19.3153 32.8951C20.4206 33.5267 21.5258 33.8951 22.5785 34.0004C22.8416 34.053 23.1574 34.053 23.4206 34.053C24.3153 34.053 25.2627 33.8951 26.0521 33.5267C28.3679 32.632 29.9469 30.5267 30.3153 28.1056C30.6837 26.9477 30.5785 25.8425 30.1574 24.6319ZM15.3679 26.3162C13.5785 24.1056 12.4732 22.0004 12.0521 20.2109C11.8942 19.4741 11.8416 18.7898 11.9469 18.2109C11.9995 17.6846 12.21 17.2109 12.4732 16.8425C13.1048 15.9477 14.1574 15.4214 15.3679 15.4214C16.5785 15.4214 17.6837 15.9477 18.2627 16.8425C18.5258 17.2109 18.7363 17.6846 18.789 18.2109C18.8942 18.7898 18.8416 19.4741 18.6837 20.2109C18.2627 21.9477 17.1048 24.053 15.3679 26.3162ZM28.4206 27.8425C28.21 29.5267 27.0521 31.0004 25.4206 31.6846C24.6311 32.0004 23.789 32.1056 22.9469 32.0004C22.1048 31.8951 21.3153 31.632 20.4732 31.1583C19.3153 30.5267 18.1048 29.4741 16.7363 28.0004C18.8942 25.3688 20.21 22.8951 20.6837 20.7372C20.8942 19.7372 20.9469 18.7898 20.8416 17.9477C20.7363 17.1056 20.4206 16.3688 19.9469 15.7372C18.9469 14.2635 17.21 13.4214 15.3153 13.4214C13.4206 13.4214 11.6837 14.3162 10.6837 15.7372C10.21 16.3688 9.94687 17.1583 9.78898 17.9477C9.68372 18.7898 9.68372 19.7372 9.94687 20.7372C10.4206 22.8951 11.789 25.3688 13.8942 28.0004C12.5258 29.5267 11.3153 30.5267 10.1574 31.1583C9.3153 31.632 8.47319 31.8951 7.68372 32.0004C6.78898 32.1056 5.94687 31.9477 5.21003 31.6846C3.57845 31.053 2.47319 29.5267 2.21003 27.8425C2.10477 27.0004 2.1574 26.2109 2.52582 25.2635C2.63108 24.9477 2.78898 24.632 2.94687 24.2109C3.1574 23.6846 3.42056 23.1056 3.68372 22.5793L3.73635 22.5267C5.99951 17.632 8.42056 12.632 10.9469 7.78985L11.0521 7.57932C11.3153 7.10564 11.5785 6.57932 11.8416 6.053C12.1048 5.52669 12.4206 5.053 12.7363 4.63195C13.4206 3.84248 14.3679 3.42143 15.3679 3.42143C16.3679 3.42143 17.3153 3.84248 17.9995 4.63195C18.3679 5.053 18.6311 5.52669 18.8942 6.053C19.1574 6.52669 19.4206 7.053 19.6837 7.57932L19.789 7.78985C22.2627 12.6846 24.6837 17.6846 26.9469 22.5267V22.5793C27.21 23.1056 27.4206 23.6846 27.6837 24.2109C27.8416 24.5793 27.9995 24.9477 28.1048 25.2635C28.4732 26.1583 28.5785 27.0004 28.4206 27.8425Z" fill="currentColor"></path>
    </svg>

    <div class="mt-6 lg:mt-10">
      <p class="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-gray-800">
        <svg class="absolute top-0 left-0 transform -translate-x-8 -translate-y-8 h-16 w-16 text-gray-200 sm:h-24 sm:w-24 dark:text-gray-700" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z" fill="currentColor"/>
        </svg>
        <span class="relative z-10 italic text-gray-800 dark:text-gray-200">I just wanted to say that I'm very happy with my purchase of Preline so far. The documentation is outstanding - clear and detailed.</span>
      </p>
    </div>

    <footer class="mt-6">
      <div class="font-semibold text-gray-800 dark:text-gray-200">Philip</div>
      <div class="text-sm text-gray-500">Product Manager | Airbnb</div>
    </footer>
  </blockquote>
  <!-- End Blockquote -->
</div>
<!-- End Testimonials -->
        
        </>

    )

} 
 
export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Testimonials -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Card -->
    <div class="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700">
      <div class="flex-auto p-4 md:p-6">
        <svg class="w-20 h-auto sm:w-24 text-gray-700 dark:text-gray-300" width="140" height="47" viewBox="0 0 140 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.3991 8.15082C20.3991 9.61789 19.1416 10.8754 17.6745 10.8754C16.2075 10.8754 14.95 9.61789 14.95 8.15082C14.95 6.68375 16.2075 5.42627 17.6745 5.42627C19.1416 5.42627 20.3991 6.68375 20.3991 8.15082ZM17.6745 13.1109C16.0678 13.1109 14.8103 14.3684 14.8103 15.9752C14.8103 17.582 16.0678 18.8394 17.6745 18.8394C19.2813 18.8394 20.5388 17.582 20.5388 15.9752C20.5388 14.2985 19.2813 13.1109 17.6745 13.1109ZM17.6745 20.7257C16.0678 20.7257 14.7404 22.053 14.7404 23.6598C14.7404 25.2666 16.0678 26.5939 17.6745 26.5939C19.2813 26.5939 20.6087 25.2666 20.6087 23.6598C20.6785 22.053 19.2813 20.7257 17.6745 20.7257ZM17.6745 28.4802C16.0678 28.4802 14.8103 29.7376 14.8103 31.3444C14.8103 32.9512 16.0678 34.2087 17.6745 34.2087C19.2813 34.2087 20.5388 32.9512 20.5388 31.3444C20.5388 29.8075 19.2813 28.4802 17.6745 28.4802ZM17.6745 36.3744C16.2075 36.3744 14.95 37.6319 14.95 39.0989C14.95 40.566 16.2075 41.8235 17.6745 41.8235C19.1416 41.8235 20.3991 40.566 20.3991 39.0989C20.3991 37.6319 19.2115 36.3744 17.6745 36.3744ZM25.2195 12.7616C23.4729 12.7616 22.0059 14.2287 22.0059 15.9752C22.0059 17.7217 23.4729 19.1887 25.2195 19.1887C26.966 19.1887 28.433 17.7217 28.433 15.9752C28.433 14.2287 26.966 12.7616 25.2195 12.7616ZM25.2195 20.3764C23.4031 20.3764 21.8662 21.8434 21.8662 23.7297C21.8662 25.546 23.3332 27.083 25.2195 27.083C27.0358 27.083 28.5728 25.6159 28.5728 23.7297C28.5728 21.8434 27.0358 20.3764 25.2195 20.3764ZM25.2195 28.1309C23.4729 28.1309 22.0059 29.5979 22.0059 31.3444C22.0059 33.0909 23.4729 34.558 25.2195 34.558C26.966 34.558 28.433 33.0909 28.433 31.3444C28.433 29.5979 26.966 28.1309 25.2195 28.1309ZM32.9739 19.9572C31.0179 19.9572 29.2714 21.564 29.2714 23.6598C29.2714 25.6159 30.8781 27.3624 32.9739 27.3624C35.0698 27.3624 36.6765 25.7556 36.6765 23.6598C36.5368 21.564 34.93 19.9572 32.9739 19.9572ZM10.0598 13.4602C8.73243 13.4602 7.61466 14.578 7.61466 15.9053C7.61466 17.2327 8.73243 18.3504 10.0598 18.3504C11.3871 18.3504 12.5049 17.2327 12.5049 15.9053C12.5049 14.578 11.457 13.4602 10.0598 13.4602ZM10.0598 21.075C8.59271 21.075 7.47494 22.1927 7.47494 23.6598C7.47494 25.1269 8.59271 26.2446 10.0598 26.2446C11.5268 26.2446 12.6446 25.1269 12.6446 23.6598C12.6446 22.1927 11.5268 21.075 10.0598 21.075ZM10.0598 28.8295C8.73243 28.8295 7.61466 29.9472 7.61466 31.2746C7.61466 32.6019 8.73243 33.7197 10.0598 33.7197C11.3871 33.7197 12.5049 32.6019 12.5049 31.2746C12.5049 29.9472 11.457 28.8295 10.0598 28.8295ZM2.445 21.4941C1.18752 21.4941 0.209473 22.4722 0.209473 23.7297C0.209473 24.9871 1.18752 25.9652 2.445 25.9652C3.70249 25.9652 4.68053 24.9871 4.68053 23.7297C4.68053 22.4722 3.70249 21.4941 2.445 21.4941Z" fill="currentColor"></path>
          <path d="M64.4812 18.9092C64.2018 18.9092 63.9922 19.1886 63.9922 19.3982V38.7495C63.9922 39.0289 64.2716 39.2385 64.4812 39.2385H66.7866C67.066 39.2385 67.2756 38.9591 67.2756 38.7495V19.3982C67.2756 19.1188 66.9962 18.9092 66.7866 18.9092H64.4812Z" fill="currentColor"></path>
          <path d="M65.7389 10.7358C64.4815 10.7358 63.5034 11.7139 63.5034 12.9714C63.5034 14.2289 64.4815 15.2069 65.7389 15.2069C66.9964 15.2069 67.9745 14.2289 67.9745 12.9714C67.9745 11.7139 66.9266 10.7358 65.7389 10.7358Z" fill="currentColor"></path>
          <path d="M114.082 18.9092C113.803 18.9092 113.593 19.1886 113.593 19.3982V38.7495C113.593 39.0289 113.873 39.2385 114.082 39.2385H116.388C116.667 39.2385 116.877 38.9591 116.877 38.7495V19.3982C116.877 19.1188 116.597 18.9092 116.388 18.9092H114.082Z" fill="currentColor"></path>
          <path d="M115.2 10.7358C113.942 10.7358 112.964 11.7139 112.964 12.9714C112.964 14.2289 113.942 15.2069 115.2 15.2069C116.457 15.2069 117.435 14.2289 117.435 12.9714C117.435 11.7139 116.457 10.7358 115.2 10.7358Z" fill="currentColor"></path>
          <path d="M138.603 37.3525C138.743 37.2127 138.743 37.073 138.743 37.0031C138.743 36.8634 138.743 36.8634 138.743 36.8634C138.743 36.8634 138.743 36.7237 138.603 36.7237C138.603 36.7237 138.463 36.584 138.324 36.584C138.184 36.584 138.184 36.584 138.044 36.584H137.416V38.3305H137.695V37.7018H138.044L138.533 38.3305H138.813L138.184 37.562C138.463 37.6319 138.603 37.4922 138.603 37.3525ZM137.765 37.4922V36.8634H138.254C138.394 36.8634 138.533 36.8634 138.603 37.0031C138.743 37.0031 138.743 37.1429 138.743 37.2826C138.743 37.4223 138.743 37.562 138.603 37.562C138.463 37.562 138.324 37.7018 138.254 37.7018H137.765V37.4922Z" fill="currentColor"></path>
          <path d="M138.114 35.8853C137.276 35.8853 136.507 36.6537 136.507 37.492C136.507 38.3304 137.276 39.0988 138.114 39.0988C138.952 39.0988 139.721 38.3304 139.721 37.492C139.721 36.5839 139.022 35.8853 138.114 35.8853ZM138.114 38.9591C137.276 38.9591 136.647 38.3304 136.647 37.492C136.647 36.6537 137.276 36.025 138.114 36.025C138.952 36.025 139.581 36.6537 139.581 37.492C139.581 38.3304 138.883 38.9591 138.114 38.9591Z" fill="currentColor"></path>
          <path d="M83.6928 22.0531C83.9722 22.0531 84.1818 21.7737 84.1818 21.5641V19.2587C84.1818 18.9793 83.9024 18.7697 83.6928 18.7697H78.7327V11.3645C78.7327 11.0851 78.4533 10.8755 78.2437 10.8755H75.9383C75.6588 10.8755 75.4493 11.1549 75.4493 11.3645V18.7697H73.0042C72.7247 18.7697 72.5151 19.0491 72.5151 19.2587V21.5641C72.5151 21.8436 72.7946 22.0531 73.0042 22.0531H75.4493V33.2308C75.4493 36.6539 77.7547 38.8895 81.108 38.8895H83.5531C83.8325 38.8895 84.0421 38.61 84.0421 38.4004V36.0951C84.0421 35.8156 83.7626 35.606 83.5531 35.606H81.4573C79.8505 35.606 78.7327 34.4883 78.7327 32.7418V21.9833L83.6928 22.0531Z" fill="currentColor"></path>
          <path d="M132.735 22.0531C133.014 22.0531 133.224 21.7737 133.224 21.5641V19.2587C133.224 18.9793 132.944 18.7697 132.735 18.7697H127.775V11.3645C127.775 11.0851 127.495 10.8755 127.286 10.8755H124.98C124.701 10.8755 124.491 11.1549 124.491 11.3645V18.7697H122.046C121.767 18.7697 121.557 19.0491 121.557 19.2587V21.5641C121.557 21.8436 121.837 22.0531 122.046 22.0531H124.491V33.2308C124.491 36.6539 126.797 38.8895 130.15 38.8895H132.595C132.874 38.8895 133.084 38.61 133.084 38.4004V36.0951C133.084 35.8156 132.805 35.606 132.595 35.606H130.36C128.753 35.606 127.635 34.4883 127.635 32.7418V21.9833L132.735 22.0531Z" fill="currentColor"></path>
          <path d="M49.8106 22.053V38.5401C49.8106 38.8195 50.09 39.0291 50.2996 39.0291H52.605C52.8844 39.0291 53.094 38.7497 53.094 38.5401V22.053H58.5431C58.8226 22.053 59.0321 21.7736 59.0321 21.564V19.2586C59.0321 18.9792 58.7527 18.7696 58.5431 18.7696H53.094V14.4383C53.094 12.6918 54.3515 11.5041 55.8186 11.5041H58.5431C58.8226 11.5041 59.0321 11.2247 59.0321 11.0151V8.70973C59.0321 8.43028 58.7527 8.2207 58.5431 8.2207H55.9583C52.5351 8.2207 49.8106 11.085 49.8106 14.3684V18.7696H47.3655C47.086 18.7696 46.8765 19.049 46.8765 19.2586V21.564C46.8765 21.8435 47.1559 22.053 47.3655 22.053H49.8106Z" fill="currentColor"></path>
          <path d="M106.258 21.2148C104.442 19.2587 101.857 18.1409 99.1321 18.1409C96.5473 18.1409 93.9625 19.2587 92.3557 20.8655V8.57008C92.3557 8.29064 92.0763 8.08105 91.8667 8.08105H89.5613C89.2818 8.08105 89.0723 8.3605 89.0723 8.57008V28.8994C89.0723 36.4443 94.1022 39.7278 99.0623 39.7278C103.952 39.7278 109.052 36.3745 109.052 28.8994C109.052 25.8954 108.074 23.1709 106.258 21.2148ZM99.0623 36.584C94.1022 36.584 92.2858 32.6719 92.2858 28.9693C92.2858 24.4284 95.0104 21.4244 99.0623 21.4244C103.114 21.4244 105.839 24.4982 105.839 28.9693C105.769 32.6719 104.022 36.584 99.0623 36.584Z" fill="currentColor"></path>
        </svg>

        <p class="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white"><em>
          " I'm absolutely floored by the level of care and attention to detail the team at HS have put into this theme and for one can guarantee that I will be a return customer. "
        </em></p>
      </div>

      <div class="p-4 rounded-b-xl md:px-6">
        <h3 class="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
          Nicole Grazioso
        </h3>
        <p class="text-sm text-gray-500">
          Director Payments & Risk | HubSpot
        </p>
      </div>
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div class="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700">
      <div class="flex-auto p-4 md:p-6">
        <svg class="w-20 h-auto sm:w-24 text-gray-700 dark:text-gray-300" width="200" height="67" viewBox="0 0 200 67" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M192.914 45.0629C197.106 45.0629 200 42.1687 200 38.1767C200 36.1807 199.401 34.2845 198.403 32.9871C197.305 31.5899 195.709 30.7915 193.812 30.7915C191.317 30.7915 188.922 32.6877 186.627 36.6797L186.427 36.9791L186.327 36.6797C185.729 34.9831 185.23 33.5859 184.93 32.7875C184.731 32.1887 184.631 31.9891 184.631 31.8893C184.531 31.4901 184.132 31.1907 183.633 31.1907C183.333 31.1907 183.034 31.2905 182.735 31.4901C182.435 31.6897 182.236 31.8893 182.236 32.1887C179.94 39.3743 178.044 42.8673 176.447 42.8673C176.248 42.8673 176.048 42.7675 175.948 42.6677C175.549 42.1687 175.649 41.0709 175.749 39.5739C175.848 38.4761 175.948 37.1787 175.948 35.8813C175.848 33.2865 174.451 31.6897 172.156 31.6897C169.261 31.6897 167.365 34.7835 166.467 36.5799L166.168 37.0789L166.068 36.4801C165.868 34.1847 165.07 31.4901 162.675 31.4901C159.88 31.4901 157.685 34.7835 156.387 37.5779L156.088 38.2765V37.4781C156.287 33.7855 156.387 31.5899 156.487 30.9911C156.587 30.3923 156.487 29.9931 156.287 29.6937C156.088 29.4941 155.788 29.3943 155.19 29.3943C154.291 29.4941 153.792 29.9931 153.094 31.7895C151.996 34.7835 149.102 41.8693 146.707 41.8693C146.208 41.8693 145.908 41.6697 145.609 41.3703C144.611 40.2725 145.01 37.2785 145.609 33.0869V32.7875C145.908 30.7915 145.409 30.3923 144.311 30.1927C144.212 30.1927 144.112 30.1927 144.012 30.1927C143.114 30.1927 142.715 30.9911 141.916 33.2865C140.519 37.3783 138.623 41.5699 136.527 41.5699C136.427 41.5699 136.327 41.5699 136.327 41.5699C135.23 41.3703 135.23 39.6737 135.23 37.5779C135.23 36.3803 135.23 35.0829 135.13 33.9851C134.83 31.8893 133.533 30.5919 131.836 30.4921C128.443 30.4921 126.248 34.7835 125.15 37.3783L124.95 37.9771L124.85 37.3783C124.651 35.6817 124.551 34.0849 124.451 32.3883V32.2885C130.739 24.4043 133.533 18.6158 133.633 13.7256C133.633 10.6318 132.236 8.7356 129.741 8.7356C127.944 8.7356 123.752 10.2326 122.255 24.0051C121.956 26.5999 121.856 29.1947 121.856 31.7895C118.962 35.9811 112.774 43.1667 106.786 43.1667C101.297 43.1667 97.006 38.7755 97.006 30.9911C97.006 20.6118 104.391 14.2246 109.88 14.2246C111.078 14.2246 112.076 14.524 112.874 15.2226C113.673 15.9212 114.072 16.8194 114.072 17.8174C114.072 19.2146 113.573 20.013 113.174 20.7116C113.074 20.9112 112.974 21.1108 112.874 21.3104C112.774 21.51 112.675 21.8094 112.774 22.009C112.874 22.3084 113.273 22.4083 113.772 22.4083C115.07 22.4083 117.066 20.512 117.066 17.6178C117.066 14.6238 114.571 11.53 109.98 11.53C103.094 11.53 93.9122 19.015 93.9122 31.2905C93.9122 39.8733 99.3014 45.8613 106.687 45.8613C111.876 45.8613 117.066 42.1687 121.557 35.8813L121.856 35.4821V35.9811C121.956 38.2765 122.156 40.0729 122.255 41.3703C122.355 42.1687 122.355 42.8673 122.355 43.1667C122.355 43.8653 122.455 44.4641 122.754 44.7635C123.054 45.0629 123.453 45.2625 124.052 45.2625C125.05 45.2625 125.25 44.5639 125.649 42.8673L125.749 42.3683C126.248 40.2725 128.144 33.4861 130.938 33.4861C131.437 33.4861 131.737 33.5859 132.036 33.8853C132.635 34.5839 132.535 35.8813 132.535 37.4781C132.535 38.4761 132.435 39.4741 132.535 40.4721C132.834 43.0669 133.932 44.3643 136.028 44.4641C138.124 44.4641 140.419 42.1687 141.617 40.0729L141.816 39.6737L141.916 40.1727C142.116 41.2705 143.114 45.0629 146.108 45.0629C148.902 45.0629 151.198 42.1687 153.792 36.1807L154.092 35.3823V36.2805C153.992 38.5759 153.892 41.2705 153.892 43.4661C153.892 45.1627 154.092 45.7615 154.79 45.7615H154.99C155.689 45.7615 156.188 45.3623 156.487 44.4641C158.483 37.6777 160.08 34.4841 161.776 34.4841C163.373 34.4841 163.573 37.4781 163.673 42.7675V43.1667C163.673 44.9631 163.772 45.8613 164.97 45.8613C165.868 45.8613 166.068 45.1627 166.467 43.4661C166.567 43.1667 166.667 42.7675 166.766 42.3683C168.363 36.8793 169.661 34.6837 171.257 34.6837C172.655 34.6837 172.755 36.0809 172.755 36.5799C172.854 37.5779 172.754 38.6757 172.555 39.6737C172.455 40.6717 172.355 41.5699 172.355 42.5679C172.455 44.6637 173.653 45.8613 175.649 45.9611C178.343 45.9611 180.639 42.8673 182.735 36.7795L182.834 36.3803L183.034 36.7795C183.433 37.7775 183.932 39.0749 184.331 40.5719V40.6717V40.7715C182.335 45.2625 180.838 50.2526 180.838 52.9472C180.838 56.4402 182.435 58.7356 184.93 58.8354C186.327 58.8354 189.421 58.3364 189.521 53.2466C189.521 51.1508 189.022 48.2566 188.024 44.5639L187.924 44.1647L188.323 44.3643C190.02 44.5639 191.517 45.0629 192.914 45.0629ZM124.651 27.8973C124.751 26.5999 124.85 25.4023 124.95 24.2047C125.948 16.7196 127.944 11.4302 129.94 11.4302C130.838 11.4302 131.337 12.1288 131.337 13.526C131.337 16.9192 129.142 21.8094 124.95 27.9971L124.651 28.4961V27.8973ZM186.826 54.9432C186.527 55.3424 186.128 55.542 185.529 55.542C184.93 55.542 184.431 55.3424 184.132 54.9432C183.234 53.7456 183.533 50.9512 184.93 45.8613C185.13 45.2625 185.329 44.6637 185.529 44.0649L185.729 43.5659L185.828 44.0649C187.525 49.8534 187.924 53.546 186.826 54.9432ZM187.425 39.8733L187.325 39.5739V39.4741C189.222 35.4821 191.517 33.1867 193.413 33.1867C195.609 33.1867 197.106 35.1827 197.106 37.9771C197.106 39.8733 196.307 40.8713 195.609 41.4701C194.81 42.1687 193.812 42.4681 192.715 42.4681C190.12 42.5679 188.423 41.1707 187.425 39.8733ZM64.2715 44.3643C67.2655 44.1647 69.6607 40.0729 70.4591 38.3763L70.6587 37.8773L70.7585 38.3763C71.1577 40.7715 72.5549 44.8633 76.6467 44.9631C78.4431 44.9631 80.4391 43.8653 82.5349 41.7695L82.7345 41.5699L82.8343 41.7695C84.2315 44.0649 86.0279 45.3623 88.0239 45.1627C90.9182 44.9631 92.7146 42.9671 92.8144 41.5699C92.8144 41.1707 92.7146 40.8713 92.515 40.6717C92.2156 40.3723 91.9162 40.3723 91.6168 40.5719L91.517 40.6717C90.8184 41.3703 89.6208 42.5679 88.2236 42.5679C86.5269 42.6677 85.3293 41.6697 84.5309 39.5739V39.4741L84.6307 39.3743C89.2216 33.2865 92.515 24.1049 92.2156 17.9172C92.1158 15.023 91.2176 11.6298 88.1238 11.6298H87.8244C86.6267 11.7296 85.5289 12.2286 84.6307 13.3264C81.7365 16.6198 80.2395 24.6039 80.7385 33.6857C80.8383 35.5819 81.1377 37.3783 81.7365 38.9751V39.0749L81.6367 39.1747C79.9401 41.1707 78.2435 42.2685 76.8463 42.2685C73.5529 42.2685 73.6527 36.7795 73.9521 32.1887C74.0519 31.1907 74.0519 30.5919 73.7525 30.1927C73.5529 29.8933 73.1537 29.7935 72.6547 29.7935H72.5549C71.3573 29.7935 71.1577 29.9931 70.5589 31.7895C69.3613 35.3823 66.8663 41.3703 64.3713 41.3703C63.6727 41.3703 63.1737 41.1707 62.7745 40.6717C61.5769 39.1747 62.4751 35.3823 63.1737 32.2885C63.2735 31.7895 63.4731 31.1907 63.5729 30.6917C63.7725 29.9931 63.6727 29.3943 63.4731 29.0949C63.1737 28.7955 62.6747 28.5959 62.0759 28.6957C60.978 28.7955 60.3792 29.1947 59.98 31.1907L59.8802 31.5899V31.6897C59.3812 30.9911 58.483 30.1927 56.8862 30.1927C56.7864 30.1927 56.5868 30.1927 56.3872 30.1927C54.5908 30.2925 52.5948 31.5899 51.0978 33.3863C49.4012 35.5819 48.503 38.2765 48.8024 41.0709C48.8024 41.1707 48.8024 41.3703 48.9022 41.4701V41.5699L48.8024 41.6697C47.8044 42.7675 46.7066 43.3663 45.7086 43.3663C44.1118 43.3663 43.2136 42.1687 43.2136 40.1727C43.2136 36.7795 45.509 26.6997 45.509 23.0071C45.509 19.1148 43.8124 17.019 40.7186 16.9192C36.3273 16.9192 32.8343 21.9092 29.5409 32.1887C29.2415 33.1867 28.9421 34.1847 28.6427 35.1827L28.1437 36.7795L28.2435 35.1827C28.5429 31.6897 28.7425 28.2965 28.8423 24.8035C29.0419 19.8134 28.3433 16.6198 26.7465 15.023C25.9481 14.1248 24.8503 13.7256 23.3533 13.7256C17.9641 13.7256 15.3693 22.8075 13.4731 29.2945C12.8743 31.1907 11.7764 35.5819 11.0778 38.5759L11.477 37.8773C11.7764 34.0849 12.7745 24.7037 12.6747 19.6138C12.5749 14.1248 10.7784 11.6298 6.78643 11.6298C4.59082 11.6298 3.19361 12.7276 2.29541 13.6258C0.798403 14.9232 0 17.019 0 18.8154C0 19.9132 0.698603 20.9112 1.1976 20.9112C1.49701 20.9112 1.69661 20.4122 1.79641 20.2126C3.09381 16.1208 4.69062 14.1248 6.68663 14.1248C7.58483 14.1248 8.18363 14.4242 8.68263 14.9232C10.2794 16.6198 9.98004 21.3104 9.48104 29.8933C9.38124 32.4881 9.18164 35.6817 8.98204 39.1747C8.98204 39.7735 8.88224 40.3723 8.88224 40.9711C8.68263 43.4661 8.58283 45.3623 9.48104 45.4621C10.6786 45.6617 11.477 45.1627 11.8762 43.9651C12.475 42.1687 13.7725 37.2785 16.3673 28.3963C18.8623 19.9132 20.7585 16.7196 23.1537 16.7196C25.9481 16.7196 26.1477 21.51 25.6487 31.5899C25.5489 33.6857 25.3493 36.1807 25.2495 38.7755C25.2495 39.1747 25.2495 39.4741 25.2495 39.8733C25.1497 42.0689 25.0499 43.7655 25.6487 44.4641C25.8483 44.6637 26.1477 44.7635 26.4471 44.7635C27.6447 44.7635 28.0439 43.6657 28.6427 41.9691C28.7425 41.6697 28.8423 41.3703 28.9421 40.9711C33.0339 29.5939 36.1277 19.7136 40.2196 19.7136C41.4172 19.7136 42.4152 20.7116 42.4152 22.7077C42.4152 27.1987 40.2196 35.8813 40.2196 40.2725C40.2196 41.8693 40.7186 43.2665 41.517 44.2645C42.4152 45.2625 43.6128 45.8613 45.1098 45.8613C46.507 45.8613 47.9042 45.1627 49.4012 43.8653L49.501 43.7655L49.6008 43.8653C50.5988 45.1627 52.0958 45.8613 53.7924 45.6617C56.3872 45.4621 58.483 43.1667 59.2814 41.0709L59.481 40.6717L59.6806 41.0709C60.2794 42.6677 61.5769 44.6637 64.2715 44.3643ZM87.7246 14.6238C88.024 14.6238 88.3233 14.7236 88.523 15.023C89.521 16.4202 89.521 21.4102 87.8244 27.0989C86.8263 30.3923 85.5289 33.3863 83.9321 35.9811L83.6327 36.3803L83.5329 35.8813C83.3333 34.4841 83.2335 33.0869 83.2335 31.8893C82.9341 23.3065 85.5289 14.7236 87.7246 14.6238ZM59.481 34.6837C58.5828 38.2765 56.8862 42.5679 53.7924 42.8673H53.493C52.1956 42.8673 51.497 42.0689 51.3972 40.3723C51.1976 38.2765 52.0958 35.8813 53.6926 34.1847C54.6906 33.0869 55.7884 32.4881 56.7864 32.4881C58.1836 32.5879 59.0818 33.5859 59.481 34.6837ZM73.7525 21.51C72.6547 21.51 71.6567 22.4082 71.6567 23.5061C71.6567 24.6039 72.5549 25.5021 73.6527 25.5021V25.7017V25.5021C74.7505 25.5021 75.6487 24.6039 75.7485 23.5061C75.8483 22.4082 74.9501 21.51 73.7525 21.51ZM145.309 21.51C144.212 21.51 143.214 22.4082 143.214 23.5061C143.214 24.6039 144.112 25.5021 145.21 25.5021V25.7017V25.5021C146.307 25.5021 147.305 24.6039 147.305 23.5061C147.405 22.4082 146.507 21.51 145.309 21.51Z" fill="currentColor"></path>
        </svg>

        <p class="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white"><em>
          " With Preline, we're able to easily track our performance in full detail. It's become an essential tool for us to grow and engage with our audience. "
        </em></p>
      </div>

      <div class="p-4 rounded-b-xl md:px-6">
        <h3 class="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
          Josh Tyson
        </h3>
        <p class="text-sm text-gray-500">
          Product Manager | Capsule
        </p>
      </div>
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div class="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700">
      <div class="flex-auto p-4 md:p-6">
        <svg class="w-20 h-auto sm:w-24 text-gray-700 dark:text-gray-300" width="140" height="47" viewBox="0 0 140 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M96.2674 23.8697C93.7525 23.5204 92.7744 22.8916 92.8443 21.9136C92.984 20.1671 95.1497 19.9575 96.477 20.0274C99.0619 20.2369 99.6207 22.4725 99.6207 22.7519L102.136 22.5423C101.996 20.9355 100.669 17.7918 96.8962 17.5124C94.8004 17.3727 92.984 17.7918 91.7964 18.8397C90.8882 19.6082 90.1197 20.7958 89.98 21.9835C89.7006 25.8258 93.473 26.3847 95.8483 26.734C98.8523 27.1531 99.5509 27.5723 99.481 28.69C99.481 29.2489 99.1317 29.8078 98.7126 30.1571C98.0838 30.6461 96.8263 30.8557 95.5688 30.716C92.7046 30.4365 92.495 28.6202 92.495 28.2709L89.98 28.3407C89.98 29.8777 91.0279 32.8817 95.2894 33.3707C97.5948 33.6501 99.481 32.9515 100.459 32.2529C101.577 31.4146 102.206 30.0174 102.275 28.69C102.485 24.708 98.6427 24.219 96.2674 23.8697Z" fill="currentColor"></path>
            <path d="M110.659 30.7161C114.431 30.7161 114.152 26.4546 114.152 26.4546V17.9316H117.086V26.3847C117.086 26.3847 117.086 26.4546 117.086 26.6642C117.086 27.9217 116.946 33.3009 110.728 33.3009H110.519C104.301 33.3009 104.162 27.9915 104.162 26.6642C104.162 26.5245 104.162 26.3847 104.162 26.3847V17.9316H107.096V26.3847C107.166 26.3847 106.886 30.7161 110.659 30.7161Z" fill="currentColor"></path>
            <path d="M136.926 28.3405C136.088 29.8076 134.411 30.6459 132.595 30.6459C130.08 30.6459 128.054 29.0392 127.705 26.5242H139.93C139.93 26.1749 139.93 25.6859 139.93 25.3366C139.93 20.5861 136.717 17.5122 132.455 17.5122C128.194 17.5122 124.771 20.5162 124.771 25.3366C124.771 30.1569 128.194 33.2308 132.455 33.2308C135.11 33.2308 137.625 32.113 139.022 29.8775L136.926 28.3405ZM132.525 20.2368C134.97 20.2368 136.717 21.7737 137.136 24.2887H127.774C128.124 21.7038 130.01 20.2368 132.525 20.2368Z" fill="currentColor"></path>
            <path d="M80.9681 17.582C78.8723 17.582 76.7066 18.5601 75.7286 20.2367V17.8615H72.7944V40.2168H75.7286V30.7158C76.7066 32.4623 78.8723 33.3006 80.9681 33.3006C85.0898 33.3006 88.513 30.2966 88.513 25.4762C88.513 20.7257 85.0898 17.582 80.9681 17.582ZM80.6886 30.576C78.2435 30.576 75.6587 28.8295 75.6587 25.616C75.6587 22.4024 78.1737 20.3066 80.8284 20.3066C83.5529 20.3066 85.7186 22.3325 85.7186 25.3365C85.6487 28.4104 83.3433 30.576 80.6886 30.576Z" fill="currentColor"></path>
            <path d="M122.605 9.68799H119.67V32.9515H122.605V9.68799Z" fill="currentColor"></path>
            <path d="M64.4113 17.4424C64.3414 17.4424 64.2716 17.4424 64.2017 17.4424C64.2017 17.4424 61.6867 17.4424 59.3115 18.4204L59.5909 19.1889L60.1498 20.7957C60.9881 20.4464 62.3853 20.0272 64.2017 19.9574C64.2716 19.9574 64.3414 19.9574 64.4113 19.9574C67.6249 19.9574 67.6947 22.8915 67.6947 22.8915V23.6599L62.6648 23.5901C62.3155 23.5901 60.2895 23.5901 58.8225 24.9873C58.4732 25.3366 58.1937 25.6859 57.9841 26.1051C57.7047 26.7338 57.4951 27.4324 57.4951 28.2009C57.4951 29.1789 57.7746 30.0871 58.1937 30.8556C58.4033 31.2049 58.6827 31.5542 58.9622 31.8336C59.9402 32.7418 61.3374 33.3007 62.8744 33.3007C63.0141 33.3007 63.1538 33.3007 63.2237 33.3007C64.9702 33.2308 66.577 32.5322 67.6249 30.8556V32.9514H70.2097V23.4504C70.2796 21.0053 68.7426 17.4424 64.4113 17.4424ZM63.1538 30.9254C62.2456 30.9953 60.1498 30.5063 60.1498 28.2009C60.1498 27.5721 60.7087 26.1051 62.5251 26.1051C64.3414 26.1051 67.555 26.1051 67.555 26.1051C67.6249 28.8995 65.9482 30.7857 63.1538 30.9254Z" fill="currentColor"></path>
            <path d="M49.1118 30.3667C44.4311 30.3667 40.8682 26.5942 40.8682 21.9136C40.8682 17.233 44.501 13.3906 49.1118 13.3906C51.3473 13.3906 53.3034 14.2988 54.7704 15.696L56.5169 13.3208C54.6307 11.5743 51.976 10.5264 49.1118 10.5264C42.8243 10.5264 37.8643 15.6262 37.8643 21.9136C37.8643 28.201 42.8243 33.3008 49.1118 33.3008C51.6966 33.3008 54.002 32.4625 55.8183 31.1351L54.8403 28.4106C53.2335 29.5284 51.0678 30.3667 49.1118 30.3667Z" fill="currentColor"></path>
            <path d="M0 30.2965H3.63273V28.061H8.24351V30.2965H11.8064V12.9712H0V30.2965Z" fill="currentColor"></path>
            <path d="M18.0938 8.08105C17.5349 8.08105 17.1157 8.50022 17.1157 9.0591C17.1157 9.61798 17.5349 10.0371 18.0938 10.0371C18.6526 10.0371 19.0718 9.61798 19.0718 9.0591C19.1417 8.57008 18.6526 8.08105 18.0938 8.08105Z" fill="currentColor"></path>
            <path d="M18.0938 12.6221C17.5349 12.6221 17.1157 13.0412 17.1157 13.6001C17.1157 14.159 17.5349 14.5782 18.0938 14.5782C18.6526 14.5782 19.0718 14.159 19.0718 13.6001C19.1417 13.1111 18.6526 12.6221 18.0938 12.6221Z" fill="currentColor"></path>
            <path d="M18.0938 17.2329C17.5349 17.2329 17.1157 17.6521 17.1157 18.211C17.1157 18.7698 17.5349 19.189 18.0938 19.189C18.6526 19.189 19.0718 18.7698 19.0718 18.211C19.1417 17.6521 18.6526 17.2329 18.0938 17.2329Z" fill="currentColor"></path>
            <path d="M22.7744 8.08105C22.2155 8.08105 21.7964 8.50022 21.7964 9.0591C21.7964 9.61798 22.2155 10.0371 22.7744 10.0371C23.3333 10.0371 23.7525 9.61798 23.7525 9.0591C23.7525 8.57008 23.3333 8.08105 22.7744 8.08105Z" fill="currentColor"></path>
            <path d="M22.7744 12.6221C22.2155 12.6221 21.7964 13.0412 21.7964 13.6001C21.7964 14.159 22.2155 14.5782 22.7744 14.5782C23.3333 14.5782 23.7525 14.159 23.7525 13.6001C23.7525 13.1111 23.3333 12.6221 22.7744 12.6221Z" fill="currentColor"></path>
            <path d="M22.7744 17.2329C22.2155 17.2329 21.7964 17.6521 21.7964 18.211C21.7964 18.7698 22.2155 19.189 22.7744 19.189C23.3333 19.189 23.7525 18.7698 23.7525 18.211C23.7525 17.6521 23.3333 17.2329 22.7744 17.2329Z" fill="currentColor"></path>
            <path d="M27.3154 8.08105C26.7566 8.08105 26.3374 8.50022 26.3374 9.0591C26.3374 9.61798 26.7566 10.0371 27.3154 10.0371C27.8743 10.0371 28.2935 9.61798 28.2935 9.0591C28.2935 8.57008 27.8743 8.08105 27.3154 8.08105Z" fill="currentColor"></path>
            <path d="M27.3154 12.6221C26.7566 12.6221 26.3374 13.0412 26.3374 13.6001C26.3374 14.159 26.7566 14.5782 27.3154 14.5782C27.8743 14.5782 28.2935 14.159 28.2935 13.6001C28.2935 13.1111 27.8743 12.6221 27.3154 12.6221Z" fill="currentColor"></path>
            <path d="M27.3154 17.2329C26.7566 17.2329 26.3374 17.6521 26.3374 18.211C26.3374 18.7698 26.7566 19.189 27.3154 19.189C27.8743 19.189 28.2935 18.7698 28.2935 18.211C28.2935 17.6521 27.8743 17.2329 27.3154 17.2329Z" fill="currentColor"></path>
            <path d="M6.07776 24.2885C2.79433 24.2186 0.0697788 26.8035 -8.15348e-05 30.017C-0.0699418 33.2306 2.51489 35.9552 5.79832 36.0949C9.08176 36.1647 11.7364 33.5799 11.8762 30.2965C11.8762 27.0829 9.29134 24.3584 6.07776 24.2885ZM7.89413 32.3224H3.91209V28.3404H7.89413V32.3224Z" fill="currentColor"></path>
            <path d="M6.07776 24.2885C2.79433 24.2186 0.0697788 26.8035 -8.15348e-05 30.017C-0.0699418 33.2306 2.51489 35.9552 5.79832 36.0949C9.08176 36.1647 11.7364 33.5799 11.8762 30.2965C11.8762 27.0829 9.29134 24.3584 6.07776 24.2885ZM7.89413 32.3224H3.91209V28.3404H7.89413V32.3224Z" fill="white" fill-opacity="0.2"></path>
            <path d="M5.93812 19.1189C9.21766 19.1189 11.8762 16.4603 11.8762 13.1808C11.8762 9.90126 9.21766 7.24268 5.93812 7.24268C2.65859 7.24268 0 9.90126 0 13.1808C0 16.4603 2.65859 19.1189 5.93812 19.1189Z" fill="white"></path>
            <path d="M16.627 23.1709V35.3266H28.7826V23.1709H16.627ZM26.3375 31.9733H19.1419V30.4364H26.3375V31.9733ZM26.3375 27.9913H19.1419V26.4543H26.3375V27.9913Z" fill="currentColor"></path>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="140" height="47" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>

        <p class="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white"><em>
          " In September, I will be using this theme for 2 years. I went through multiple updates and changes and I'm very glad to see the consistency and effort made by the team. "
        </em></p>
      </div>

      <div class="p-4 rounded-b-xl md:px-6">
        <h3 class="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
          Luisa
        </h3>
        <p class="text-sm text-gray-500">
          Senior Director of Operations | Fitbit
        </p>
      </div>
    </div>
    <!-- End Card -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Testimonials -->
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        
        
        </>

    )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
  return (

      <>
      
      
      
      </>

  )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

  
  return (

      <>
      
      
      
      </>

  )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

  
  return (

      <>
      
      
      
      </>

  )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
  return (

      <>
      
      
      
      </>

  )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

  
  return (

      <>
      
      
      
      </>

  )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

  
  return (

      <>
      
      
      
      </>

  )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
  return (

      <>
      
      
      
      </>

  )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

  
  return (

      <>
      
      
      
      </>

  )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

  
  return (

      <>
      
      
      
      </>

  )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
  return (

      <>
      
      
      
      </>

  )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

  
  return (

      <>
      
      
      
      </>

  )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

  
  return (

      <>
      
      
      
      </>

  )

} 