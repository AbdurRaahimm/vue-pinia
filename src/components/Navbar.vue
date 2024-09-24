<script setup>

const openMune = () => {
    const menu = document.querySelector('#modileMenu')
    menu.classList.toggle('hidden')

}

const menu = [
    { title: 'counter', link: '/' },
    { title: 'todo', link: '/todo' },
    { title: 'API CRUD', link: '/apicrud' }

]

</script>
<template>
    <header class="px-5 py-1 flex justify-between items-center shadow-md sticky top-0">
        <RouterLink to="/" class="flex items-center justify-around gap-2">
            <img width="25" src="https://pinia.vuejs.org/logo.svg" alt="logo">
            <p class="text-xl font-bold capitalize">vue pinia</p>
        </RouterLink>
        <nav class="hidden sm:block">
            <ul class="divide-x-2 space-x-3 flex">
                <li v-for="item in menu" :key="item.title">
                    <RouterLink :to="item.link"
                        class="px-2 py-1 font-semibold hover:bg-gray-100 capitalize m-3 rounded-md"
                        exactActiveClass="bg-gray-100">
                        {{ item.title }}
                    </RouterLink>

                </li>

            </ul>
        </nav>

        <!-- github code -->
        <div class="hidden sm:block">
            <a href="https://github.com/AbdurRaahimm/vue-pinia.git"
                class="px-2 py-1 flex justify-center items-center gap-1 hover:bg-gray-300 rounded-full font-semibold">
                Github
                <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="css-1yyhkcy">
                    <path fill="currentColor"
                        d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0, 0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z ">
                    </path>
                    <polygon fill="currentColor"
                        points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8, 14.9 62.8,22.9 71.5,22.9 ">
                    </polygon>
                </svg>
            </a>
        </div>

        <span v-on:click="openMune" class="cursor-pointer sm:hidden">menu</span>

    </header>


    <!-- mobile menu -->
    <div id="modileMenu" class="hidden shadow-md py-4">
        <nav class=" space-y-3">
            <ul class="divide-y-2 space-y-3">
                <li v-for="item in menu" :key="item.title">
                    <RouterLink :to="item.link"
                        class="px-2 py-1 font-semibold hover:bg-gray-100 capitalize m-3 rounded-md"
                        exactActiveClass="bg-gray-100">
                        {{ item.title }}
                    </RouterLink>

                </li>

            </ul>
        </nav>
    </div>

</template>