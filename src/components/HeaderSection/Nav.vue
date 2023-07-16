<template>
  <header class="py-4 md:py-6 bg-[#f6fffa]">
    <div class="container px-4 mx-auto sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
            <div class="flex-shrink-0">
                <router-link to="/" class="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                    <span class="logo">Paw-Love</span>
                </router-link>
            </div>
        </div>
    </div>
</header>
</template>

<style scoped>
.logo {
    font-family: 'Arial', sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #474a4b;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    position: relative;
  }
  
  .logo::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -15px;
    width: 20px;
    height: 20px;
    background-color: #474a4b;
    transform: rotate(45deg);
  }
  
  .logo::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: -15px;
    width: 20px;
    height: 20px;
    background-color: #474a4b;
    transform: rotate(45deg);
  }
  
</style>