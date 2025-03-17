<script setup>

import {Disclosure, DisclosureButton} from '@headlessui/vue'
import {Bars3Icon, XMarkIcon} from '@heroicons/vue/24/outline'
</script>

<style>
/* assets/css/fonts.css */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

body {
  font-family: "K2D", sans-serif;
}

h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900 !important;
}

/* Or create utility classes */
.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}

button.rounded {
  border-radius: 16px !important;
}

button.btn-default {
  background: transparent;
}

button.btn-primary {
  background: #74B9FF;
}

.bottom-n-150 {
  bottom:-150px;
}

.right-n-90 {
  right: -90px;
}

.box-shadow {
  -webkit-box-shadow: 0px 0px 30px 9px rgba(51,51,51,0.1);
  box-shadow: 0px 0px 30px 9px rgba(51,51,51,0.1);
}

.footer-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;
}
.process-bg {
  position: absolute;
  bottom: -160px;
  right: -30px;
  z-index: -1;
}

.ellipse-bg {
  position: absolute;
  top: -100px;
  left: -170px;
  z-index: -1;
}

.ellipse-pink-bg {
  position: absolute;
  bottom: 30px;
  right: -280px;
  z-index: -1;
}

.pt-37px {
  padding-top: 37px;
}
.pt-75px {
 padding-top:75px;
}
.pb-75px {
  padding-bottom: 75px;
}
.pb-37px {
  padding-bottom: 37px;
}

@media (max-width: 1024px) {
   .robot-image {
     right: 0 !important;
   }
  .process-bg {
    bottom: -80px;
  }
}

</style>


<template>
  <div id="layout-portal" class="overflow-hidden">
    <div class="min-h-full">
      <Disclosure as="nav" class="hidden bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-5 mb-5">
          <div class="flex h-16 justify-between">
            <div class="flex">
              <div class="flex flex-shrink-0 items-center pr-5">
                <NuxtLink to="/">
                  <span class="inline mr-5" style="float: left">
                  </span>
                </NuxtLink>
              </div>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:items-center">
              <button type="button"
                      class="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span class="absolute -inset-1.5"/>
              </button>
            </div>
            <div class="-mr-2 hidden flex items-center sm:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton
                  class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                <span class="absolute -inset-0.5"/>
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true"/>
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true"/>
              </DisclosureButton>
            </div>
          </div>
        </div>
      </Disclosure>
      <div class="center">
        <div class="wrapper relative">
          <div class="relative pb-75px flex flex-col lg:flex-row gap-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-5 mb-5">
            <img class="block w-auto lg:hidden" src="/images/logo-wide.png" alt="Your Company"/>
            <img class="hidden h-20 w-auto lg:block" src="/images/logo-wide.png" alt="Your Company"/>
          </div>
          <div class="relative pb-75px flex flex-col lg:flex-row gap-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-5 mb-5">
            <div class="lg:w-1/2">
              <h2 class="text-5xl text-2xl font-bold mb-4"><span class="text-blue-300">CMS Health Checks</span>  Your Safety and Compliant!</h2>
              <p class="text-xl pb-37px text-gray-700">The CMS Health Tool helps developers make sure their <span class="text-blue-300">software</span> is working and meets necessary<span class="text-orange-300"> regulations</span>.
                <br/>
                <br/>
                Don't let software issues slow down your business!</p>
              <div class="inline-flex row space-x-4 mt-5">
                <button class="btn-primary px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Get Started</button>
                <a href="https://github.com/cms-health-project" target="_blank" class="icon-game btn-default items-center gap-4 flex px-4 py-2 rounded hover:bg-gray-300">
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.2953 15.486H8.57969C4.56875 15.486 1.32812 18.7266 1.32812 22.7375C1.32812 26.7485 4.56875 29.9891 8.57969 29.9891C10.9437 29.9891 13.0422 28.8469 14.3703 27.0938H17.5047C18.8328 28.8469 20.9312 29.9891 23.2953 29.9891C27.3062 29.9891 30.5469 26.7485 30.5469 22.7375C30.5469 18.7266 27.3062 15.486 23.2953 15.486Z" fill="white"/>
                    <path d="M24.8891 31.689C22.4719 31.689 20.2406 30.6265 18.7 28.7937H16.3359C14.7953 30.6531 12.5641 31.689 10.1469 31.689C5.7375 31.689 2.125 28.0765 2.125 23.6406C2.125 19.2047 5.7375 15.5922 10.1734 15.5922H24.9156C29.3516 15.5922 32.9641 19.2047 32.9641 23.6406C32.9641 28.0765 29.325 31.689 24.8891 31.689Z" fill="#6E6E8E"/>
                    <path d="M23.2953 15.486H8.57969C4.56875 15.486 1.32812 18.7266 1.32812 22.7375C1.32812 26.7485 4.56875 29.9891 8.57969 29.9891C10.9437 29.9891 13.0422 28.8469 14.3703 27.0938H17.5047C18.8328 28.8469 20.9312 29.9891 23.2953 29.9891C27.3062 29.9891 30.5469 26.7485 30.5469 22.7375C30.5469 18.7266 27.3062 15.486 23.2953 15.486Z" fill="white"/>
                    <path d="M8.5797 30.8922C6.40157 30.8922 4.35626 30.0156 2.81563 28.4484C1.30157 26.8812 0.478134 24.8094 0.531259 22.6047C0.637509 18.3015 4.3297 14.7953 8.71251 14.7953H11.9531C12.4047 14.7953 12.75 15.1406 12.75 15.5922C12.75 16.0437 12.4047 16.3891 11.9531 16.3891H8.71251C5.1797 16.3891 2.23126 19.2047 2.12501 22.6578C2.07188 24.4109 2.73595 26.0844 3.95782 27.3328C5.1797 28.5812 6.82657 29.2719 8.5797 29.2719C10.625 29.2719 12.5109 28.3422 13.7328 26.6953C13.8922 26.4828 14.1313 26.3766 14.3703 26.3766H17.5047C17.7438 26.3766 17.9828 26.4828 18.1422 26.6953C19.4969 28.5016 21.6484 29.4578 23.9063 29.2453C26.9344 28.9531 29.3516 26.5891 29.6969 23.5609C29.9094 21.7015 29.325 19.8953 28.1031 18.514C26.8813 17.1594 25.1281 16.3625 23.2953 16.3625H16.7344C15.8578 16.3625 15.1406 15.6453 15.1406 14.7687V12.9094C15.1406 11.8734 14.3172 11.05 13.2813 11.05H7.96876C6.05626 11.05 4.51563 9.50936 4.51563 7.59686C4.51563 5.68436 6.05626 4.14374 7.96876 4.14374H21.25C22.2859 4.14374 23.1094 3.3203 23.1094 2.28436C23.1094 1.8328 23.4547 1.48749 23.9063 1.48749C24.3578 1.48749 24.7031 1.8328 24.7031 2.28436C24.7031 4.19686 23.1625 5.73749 21.25 5.73749H7.96876C6.93282 5.73749 6.10938 6.56093 6.10938 7.59686C6.10938 8.6328 6.93282 9.45624 7.96876 9.45624H13.2813C15.1938 9.45624 16.7344 10.9969 16.7344 12.9094V14.7687H23.2953C25.5797 14.7687 27.7578 15.7515 29.2984 17.4515C30.8125 19.1516 31.5563 21.4359 31.2906 23.7203C30.8656 27.4922 27.8375 30.4672 24.0656 30.8125C21.3828 31.0515 18.8328 29.989 17.1328 27.9437H14.7688C13.2281 29.8297 10.9969 30.8922 8.5797 30.8922Z" fill="#330656"/>
                    <path d="M10.4656 22.1797H9.16405V20.8781H7.83593V22.1797H6.53436V23.5078H7.83593V24.8094H9.16405V23.5078H10.4656V22.1797ZM20.7984 21.8875C20.5871 21.8875 20.3844 21.9715 20.235 22.1209C20.0855 22.2704 20.0016 22.473 20.0016 22.6844C20.0016 22.8957 20.0855 23.0984 20.235 23.2479C20.3844 23.3973 20.5871 23.4813 20.7984 23.4813C21.0098 23.4813 21.2125 23.3973 21.3619 23.2479C21.5113 23.0984 21.5953 22.8957 21.5953 22.6844C21.5953 22.473 21.5113 22.2704 21.3619 22.1209C21.2125 21.9715 21.0098 21.8875 20.7984 21.8875ZM23.1891 19.4969C22.9777 19.4969 22.775 19.5808 22.6256 19.7303C22.4761 19.8797 22.3922 20.0824 22.3922 20.2938C22.3922 20.5051 22.4761 20.7078 22.6256 20.8572C22.775 21.0067 22.9777 21.0906 23.1891 21.0906C23.4004 21.0906 23.6031 21.0067 23.7525 20.8572C23.902 20.7078 23.9859 20.5051 23.9859 20.2938C23.9859 20.0824 23.902 19.8797 23.7525 19.7303C23.6031 19.5808 23.4004 19.4969 23.1891 19.4969ZM25.8453 22.1531C25.634 22.1531 25.4313 22.2371 25.2818 22.3865C25.1324 22.536 25.0484 22.7387 25.0484 22.95C25.0484 23.1614 25.1324 23.364 25.2818 23.5135C25.4313 23.6629 25.634 23.7469 25.8453 23.7469C26.0566 23.7469 26.2593 23.6629 26.4088 23.5135C26.5582 23.364 26.6422 23.1614 26.6422 22.95C26.6422 22.7387 26.5582 22.536 26.4088 22.3865C26.2593 22.2371 26.0566 22.1531 25.8453 22.1531ZM23.4547 24.5438C23.35 24.5438 23.2464 24.5644 23.1497 24.6044C23.053 24.6445 22.9652 24.7032 22.8912 24.7772C22.8172 24.8512 22.7585 24.939 22.7185 25.0357C22.6784 25.1324 22.6578 25.236 22.6578 25.3406C22.6578 25.4453 22.6784 25.5489 22.7185 25.6456C22.7585 25.7423 22.8172 25.8301 22.8912 25.9041C22.9652 25.9781 23.053 26.0368 23.1497 26.0769C23.2464 26.1169 23.35 26.1375 23.4547 26.1375C23.5593 26.1375 23.6629 26.1169 23.7596 26.0769C23.8563 26.0368 23.9442 25.9781 24.0182 25.9041C24.0921 25.8301 24.1508 25.7423 24.1909 25.6456C24.2309 25.5489 24.2516 25.4453 24.2516 25.3406C24.2516 25.236 24.2309 25.1324 24.1909 25.0357C24.1508 24.939 24.0921 24.8512 24.0182 24.7772C23.9442 24.7032 23.8563 24.6445 23.7596 24.6044C23.6629 24.5644 23.5593 24.5438 23.4547 24.5438Z" fill="#74B9FF"/>
                    <path d="M14.6359 23.2156C14.4246 23.2156 14.2219 23.2996 14.0724 23.449C13.923 23.5985 13.8391 23.8012 13.8391 24.0125C13.8391 24.2239 13.923 24.4265 14.0724 24.576C14.2219 24.7254 14.4246 24.8094 14.6359 24.8094C14.8473 24.8094 15.05 24.7254 15.1994 24.576C15.3488 24.4265 15.4328 24.2239 15.4328 24.0125C15.4328 23.8012 15.3488 23.5985 15.1994 23.449C15.05 23.2996 14.8473 23.2156 14.6359 23.2156ZM17.0266 23.2156C16.8152 23.2156 16.6125 23.2996 16.4631 23.449C16.3136 23.5985 16.2297 23.8012 16.2297 24.0125C16.2297 24.2239 16.3136 24.4265 16.4631 24.576C16.6125 24.7254 16.8152 24.8094 17.0266 24.8094C17.2379 24.8094 17.4406 24.7254 17.59 24.576C17.7395 24.4265 17.8234 24.2239 17.8234 24.0125C17.8234 23.8012 17.7395 23.5985 17.59 23.449C17.4406 23.2996 17.2379 23.2156 17.0266 23.2156Z" fill="#330656"/>
                  </svg>

                  Explore the code
                </a>
              </div>
            </div>
            <div class="lg:w-1/2 flex items-center justify-center">
              <img class="w-full" src="/images/partners_logos.png" alt="Partner Logos"/>
            </div>
          </div>
          <div class="footer-bg">
            <img class="block w-full" src="/images/header.png" alt="process"/>
          </div>
        </div>


        <div class="pb-75px pt-75px relative flex flex-col lg:flex-row gap-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-5 mb-5">
          <div class="lg:w-1/2 relative mb-20">
            <pre class="border-[10px] border-blue-300 rounded-lg bg-blue-100 rounded-md overflow-x-auto">
              <code class="text-sm font-mono">
              "status": "pass",
              "version": "1",
              "serviceId": "example.org",
              "description": "Health of WordPress website example.org",
              "checks": {
               "WordPress:Version": [
                {
                 "componentId": "dfd6cf2b-1b6e-4412-a0b8-f6f7797a60d1",
                 "componentType": "system",
                 "observedValue": "6.4.3",
                 "status": "info",
                 "time": "2018-01-17T03:36:48Z",
                 "output": ""
                }
               ]
              }
              </code>
            </pre>
            <div class="wrapper robot-image absolute bottom-n-150 right-n-90">
              <img class="w-full" src="/images/robots.png" alt="robots check"/>
            </div>
          </div>
          <div class="column lg:w-1/2 flex flex-col">
            <h2 class="text-5xl text-2xl font-bold mb-4">Compliance Matters for <span class="text-orange-300">Software!</span></h2>
            <p>Keeping your software safe and compliant is essential!<br/>
              Protect users and ensure quality following regulations.<br/>
              With <span class="text-blue-300">CMS Health Checks</span> you can easily:<br/>
              ✅Meet compliance standards
              <br/>
              ✅Maintain customer trust
               <br/>
              ✅Avoid penalties and security issues.
              <br/>
              <br/>
              Let <span class="text-blue-300">CMS Health Checks</span> be <span class="text-orange-300">your guide</span> to a stable software future!</p>
          </div>
          <div class="ellipse-pink-bg">
            <img class="block w-100" src="/images/Ellipse.png" alt="process"/>
          </div>
        </div>

        <div class="pb-75px pt-75px relative flex flex-col lg:flex-row items-center justify-center gap-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-5 mb-5">
          <div class="lg:w-10/12 w-full">
            <h2 class="text-5xl pb-37px text-center text-2xl font-bold">Make sure your <span class="text-blue-300">CMS</span>  project is <span class="text-orange-300">safe</span></h2>
            <p class="text-center pb-37px"><span class="text-blue-300">CMS Health Checks</span> in action</p>
            <div class="wrapper border-[10px] border-blue-300 rounded-lg bg-blue-300">
              <div id="content" class="bg-white border-white rounded-lg bg-white">
                <slot/>
              </div>
              <div class="bg-blue-100 border-white rounded-lg bg-blue-100 flex flex-col lg:flex-row gap-6 mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
                <div class="column lg:w-1/3 flex flex-col">
                  <p>What you get:</p>
                </div>
                <div class="column lg:w-2/3 flex flex-col">
                  <p>
                    <ul>
                      <li>
                        ✅ Quick Checkup: Instant site health overview
                      </li>
                      <li>
                        ⚠️ Spot Issues: Identify critical problems easily
                      </li>
                      <li>
                        ✅ Simple Fixes: Get straightforward solutions
                      </li>
                      <li>
                        ✅ Detailed Insights: View specific configuration details
                      </li>
                      <li>
                        ⚠️ Enhanced Security: Protect against potential risks
                      </li>
                      <li>
                        ✅ Improved Performance: Boost speed and reliability
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="ellipse-bg">
            <img class="block w-100" src="/images/Ellipse.png" alt="process"/>
          </div>
        </div>
        <h2 class="pt-75px text-5xl text-center text-2xl font-bold mb-4">Receive <span class="text-orange-300">Easy <br/>to interpret</span> data</h2>
        <div class="relative pt-37px pb-75px flex flex-col lg:flex-row items-center justify-center gap-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-5 mb-5">
          <div class="column lg:w-1/3 flex flex-col bg-white border-white rounded-lg box-shadow p-5">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_89)">
                <path d="M25 45.8334C13.4938 45.8334 4.16667 36.5063 4.16667 25.0001C4.16667 13.4938 13.4938 4.16675 25 4.16675C36.5063 4.16675 45.8333 13.4938 45.8333 25.0001C45.8333 36.5063 36.5063 45.8334 25 45.8334ZM25 41.6668C29.4203 41.6668 33.6595 39.9108 36.7851 36.7852C39.9107 33.6596 41.6667 29.4204 41.6667 25.0001C41.6667 20.5798 39.9107 16.3406 36.7851 13.215C33.6595 10.0894 29.4203 8.33342 25 8.33342C20.5797 8.33342 16.3405 10.0894 13.2149 13.215C10.0893 16.3406 8.33334 20.5798 8.33334 25.0001C8.33334 29.4204 10.0893 33.6596 13.2149 36.7852C16.3405 39.9108 20.5797 41.6668 25 41.6668ZM22.9229 33.3334L14.0833 24.4938L17.0292 21.548L22.9229 27.4417L34.7063 15.6563L37.6542 18.6022L22.9229 33.3334Z" fill="#22C55D"/>
              </g>
              <defs>
                <clipPath id="clip0_2_89">
                  <rect width="50" height="50" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            What worked:
            <ol>
              <li>
                The updates were applied successfully.
              </li>
              <li>
                Performance improved across all users.
              </li>
              <li>
                Users information is safe.
              </li>
            </ol>
          </div>
          <div class="column lg:w-1/3 flex flex-col bg-white border-white rounded-lg box-shadow p-5">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_96)">
                <path d="M25 45.8334C13.4938 45.8334 4.16669 36.5063 4.16669 25.0001C4.16669 13.4938 13.4938 4.16675 25 4.16675C36.5063 4.16675 45.8334 13.4938 45.8334 25.0001C45.8334 36.5063 36.5063 45.8334 25 45.8334ZM25 41.6668C29.4203 41.6668 33.6595 39.9108 36.7851 36.7852C39.9107 33.6596 41.6667 29.4204 41.6667 25.0001C41.6667 20.5798 39.9107 16.3406 36.7851 13.215C33.6595 10.0894 29.4203 8.33342 25 8.33342C20.5797 8.33342 16.3405 10.0894 13.2149 13.215C10.0893 16.3406 8.33335 20.5798 8.33335 25.0001C8.33335 29.4204 10.0893 33.6596 13.2149 36.7852C16.3405 39.9108 20.5797 41.6668 25 41.6668ZM25 22.0543L30.8917 16.1605L33.8396 19.1084L27.9459 25.0001L33.8396 30.8918L30.8917 33.8397L25 27.9459L19.1084 33.8397L16.1604 30.8918L22.0542 25.0001L16.1604 19.1084L19.1084 16.1605L25 22.0543Z" fill="#FF0000"/>
              </g>
              <defs>
                <clipPath id="clip0_2_96">
                  <rect width="50" height="50" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            What didn’t work:
            <ol>
              <li>
                Vulnerability was found in the code
              </li>
              <li>
                Loading speed was slower than expected.
              </li>
              <li>
                features X Y Z were inaccessible.
              </li>
            </ol>
          </div>
          <div class="column lg:w-1/3 flex flex-col bg-white border-white rounded-lg box-shadow p-5">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_103)">
                <path d="M30.4166 16.6668H43.75C44.855 16.6668 45.9149 17.1057 46.6963 17.8871C47.4777 18.6685 47.9166 19.7283 47.9166 20.8334V25.2168C47.9172 25.7613 47.811 26.3006 47.6041 26.8043L41.1562 42.4605C40.9989 42.8422 40.7318 43.1686 40.3887 43.3982C40.0456 43.6278 39.642 43.7503 39.2291 43.7501H4.16665C3.61411 43.7501 3.08421 43.5306 2.69351 43.1399C2.30281 42.7492 2.08331 42.2193 2.08331 41.6668V20.8334C2.08331 20.2809 2.30281 19.751 2.69351 19.3603C3.08421 18.9696 3.61411 18.7501 4.16665 18.7501H11.4208C11.7543 18.7502 12.083 18.6702 12.3792 18.5168C12.6754 18.3635 12.9304 18.1412 13.1229 17.8688L24.4833 1.77092C24.6269 1.5674 24.8387 1.42209 25.0803 1.36131C25.3218 1.30054 25.5772 1.32834 25.8 1.43967L29.5791 3.32925C30.6427 3.86084 31.4923 4.74032 31.9869 5.82158C32.4815 6.90283 32.5912 8.12076 32.2979 9.273L30.4166 16.6668ZM14.5833 22.0584V39.5834H37.8333L43.75 25.2168V20.8334H30.4166C29.7821 20.8333 29.1559 20.6883 28.5859 20.4094C28.0159 20.1305 27.5171 19.725 27.1276 19.224C26.7382 18.723 26.4683 18.1397 26.3386 17.5185C26.2088 16.8973 26.2227 16.2547 26.3791 15.6397L28.2604 8.248C28.3193 8.01743 28.2974 7.77366 28.1985 7.55723C28.0996 7.3408 27.9295 7.16477 27.7166 7.05842L26.3396 6.37092L16.5271 20.2709C16.0062 21.0084 15.3396 21.6126 14.5833 22.0584ZM10.4166 22.9168H6.24998V39.5834H10.4166V22.9168Z" fill="#74B9FF"/>
              </g>
              <defs>
                <clipPath id="clip0_2_103">
                  <rect width="50" height="50" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            Recommendations
            <ol>
              <li>
                Address accessibility issues promptly.
              </li>
              <li>
                Investigate loading speed issues.
              </li>
              <li>
                Contact users to insert 2 factor authentication
              </li>
            </ol>
          </div>
          <div class="process-bg">
            <img class="block w-100" src="/images/process.png" alt="process"/>
          </div>
        </div>
      </div>
      <div class="relative pt-75px pb-75px flex flex-col lg:flex-row items-center justify-center gap-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-5 mb-5">
        <div class="lg:w-10/12">
          <h2 class="text-5xl text-center text-2xl font-bold mb-4"><span class="text-blue-300">CMS Health</span> Checkers</h2>
          <p class="text-center pb-37px">We will help you to monitor your content management systems and services.</p>
          <img class="w-full pt-5" src="/images/group25.png" alt="Hackers Checker 2025"/>
        </div>
        <div class="footer-bg">
          <img class="block w-100" src="/images/checkers_bg.png" alt="footer background bubbles"/>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper relative">
    <div class="pt-75px pb-75px flex flex-col mb-5lg:flex-row items-center justify-center gap-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-5">
      <div class="lg:w-10/12 text-center mb-5 relative">
        <h2 class="text-5xl text-center text-2xl font-bold mb-4"><span class="text-blue-300">CMS Health Checks</span> simplifies<br/>Your Compliance Journey</h2>
        <p class="text-center pb-75px">Visit our <a href="" target="_blank">GitHub page</a> to explore the code</p>
        <button class="btn-primary mb-5 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Get Started</button>
      </div>
    </div>
    <div class="footer-bg">
      <img class="block w-full" src="/images/footer.png" alt="footer background bubbles"/>
    </div>
  </div>
</template>

<style>

.plan-lite {
  @apply bg-lime-200;
  @apply text-black;
}

.plan-business {
  @apply bg-yellow-200;
  @apply text-black;
}

@media (max-width: 1000px) {
  #layout-portal {
    .center {
      width: calc(100% - 40px);
      margin-left: 20px;
      margin-right: 20px;
    }
  }
}
</style>

