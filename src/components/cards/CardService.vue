<template>
    <div class="grid gap-3 grid-cols-2 w-full" v-if="data.length">
        <router-link v-for="(item,index) in data" :key="index" :to="{name: ROUTE_NAME.order, params:{ id: item.id }}" class="bg-white rounded-lg h-auto">
            <div class="h-[150px] rounded-t-lg">
                <img loading="lazy" :src="item.thumbnail_url" class="object-cover w-full h-full rounded-t-lg"/>
            </div>
            <div class="p-3">
                <h5 class="mb-1 text-lg text-black-900">{{ item.title ?? '' }}</h5>
                <h5 class="mb-2 text-lg font-bold text-black-900">{{ item.price ?? '' }}</h5>
            </div>
        </router-link>
    </div>

    <!-- <ul>
        <li>
            <div class="lazy-image" style="width: 100%; height: 300px; position: relative;">
                <span class="loader"></span>
                <img class="fade-in" style="width: 100%; height: 100%;" data-src="https://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg"/>
            </div>
        </li>
        <li>Let Maligne Adventures showcase all the natural beauty and adventure Jasper National Park offers. Located in the Canadian Rockies, along the Icefields Parkway (north of Banff National Park), Jasper is famous for its abundant wildlife and incredible scenery. Choose from a wide selection of activities geared for all family members. The Wildlife & Waterfalls Tour explores the Maligne Valley, Maligne Canyon and the Scenic Cruise to Spirit Island on Maligne Lake, while daily Morning or Evening Wildlife Tours give the chance to observe various native animals in their natural habitat. For those looking for an active adventure, Jasper's Whitewater rafting is bound to be a highlight of any summer vacation. Rafting trips include family-friendly Class 2 rapids on the Athabasca River's Canyon Run or Class 3 exciting whitewater on the Sunwapta River or Fraser River.</li>
        <li>
            <div class="lazy-image" style="width: 100%; height: 300px; background-color: black; position: relative;">
                <div class="animate-pulse h-full">
                    <div class="flex items-center justify-center w-full h-full bg-gray-500 rounded">
                        <svg class="w-14 h-14 text-gray-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                    </div>
                </div>
                <img class="fade-in" style="width: 100%; height: 100%;" data-src="https://az837918.vo.msecnd.net/publishedimages/Listings/1196/en-CA/images/1/jasper-national-park-L-17.jpg"/>
            </div>
        </li>
        <li>
            <div class="lazy-image" style="width: 100%; height: 300px; background-color: black; position: relative;">
                <div class="animate-pulse h-full">
                    <div class="flex items-center justify-center w-full h-full bg-gray-500 rounded">
                        <svg class="w-14 h-14 text-gray-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                    </div>
                </div>
                <img class="fade-in" style="width: 100%; height: 100%;" data-src="https://az837918.vo.msecnd.net/publishedimages/Listings/1196/en-CA/images/2/jasper-national-park-L-17.jpg"/>
            </div>
        </li>
        <li>Let Maligne Adventures showcase all the natural beauty and adventure Jasper National Park offers. Located in the Canadian Rockies, along the Icefields Parkway (north of Banff National Park), Jasper is famous for its abundant wildlife and incredible scenery. Choose from a wide selection of activities geared for all family members. The Wildlife & Waterfalls Tour explores the Maligne Valley, Maligne Canyon and the Scenic Cruise to Spirit Island on Maligne Lake, while daily Morning or Evening Wildlife Tours give the chance to observe various native animals in their natural habitat. For those looking for an active adventure, Jasper's Whitewater rafting is bound to be a highlight of any summer vacation. Rafting trips include family-friendly Class 2 rapids on the Athabasca River's Canyon Run or Class 3 exciting whitewater on the Sunwapta River or Fraser River.</li>
        <li>
            <div class="lazy-image" style="width: 100%; height: 300px; background-color: black; position: relative;">
                <div class="animate-pulse h-full">
                    <div class="flex items-center justify-center w-full h-full bg-gray-500 rounded">
                        <svg class="w-14 h-14 text-gray-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                    </div>
                </div>
                <img class="fade-in" style="width: 100%; height: 100%;" data-src="https://az837918.vo.msecnd.net/publishedimages/Listings/1196/en-CA/images/3/jasper-national-park-L-17.jpg"/>
            </div>
        </li>
        <li>
            <div class="lazy-image" style="width: 100%; height: 300px; background-color: black; position: relative;">
                <div class="animate-pulse h-full">
                    <div class="flex items-center justify-center w-full h-full bg-gray-500 rounded">
                        <svg class="w-14 h-14 text-gray-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                    </div>
                </div>
                <img class="fade-in" style="width: 100%; height: 100%;" data-src="https://az837918.vo.msecnd.net/publishedimages/Listings/1196/en-CA/images/4/jasper-national-park-L-17.jpg"/>
            </div>
        </li>
        <li>Let Maligne Adventures showcase all the natural beauty and adventure Jasper National Park offers. Located in the Canadian Rockies, along the Icefields Parkway (north of Banff National Park), Jasper is famous for its abundant wildlife and incredible scenery. Choose from a wide selection of activities geared for all family members. The Wildlife & Waterfalls Tour explores the Maligne Valley, Maligne Canyon and the Scenic Cruise to Spirit Island on Maligne Lake, while daily Morning or Evening Wildlife Tours give the chance to observe various native animals in their natural habitat. For those looking for an active adventure, Jasper's Whitewater rafting is bound to be a highlight of any summer vacation. Rafting trips include family-friendly Class 2 rapids on the Athabasca River's Canyon Run or Class 3 exciting whitewater on the Sunwapta River or Fraser River.</li>
        <li>
            <div class="lazy-image" style="width: 100%; height: 300px; background-color: black; position: relative;">
                <div class="animate-pulse h-full">
                    <div class="flex items-center justify-center w-full h-full bg-gray-500 rounded">
                        <svg class="w-14 h-14 text-gray-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                    </div>
                </div>
                <img class="fade-in" style="width: 100%; height: 100%;" data-src="https://az837918.vo.msecnd.net/publishedimages/Listings/1196/en-CA/images/5/jasper-national-park-L-17.jpg"/>
            </div>
        </li>
        <li>
            <div class="lazy-image" style="width: 100%; height: 300px; background-color: black; position: relative;">
                <div class="animate-pulse h-full">
                    <div class="flex items-center justify-center w-full h-full bg-gray-500 rounded">
                        <svg class="w-14 h-14 text-gray-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                    </div>
                </div>
                <img class="fade-in" style="width: 100%; height: 100%;" data-src="https://az837918.vo.msecnd.net/publishedimages/articles/2305/en-CA/images/1/jasper-in-january-L-7.jpg"/>
            </div>
        </li>
        <li>
            <div class="lazy-image" style="width: 100%; height: 300px; background-color: black; position: relative;">
                <div class="animate-pulse h-full">
                    <div class="flex items-center justify-center w-full h-full bg-gray-500 rounded">
                        <svg class="w-14 h-14 text-gray-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                    </div>
                </div>
                <img class="fade-in" style="width: 100%; height: 100%;" data-src="https://az837918.vo.msecnd.net/publishedimages/articles/3169/en-CA/images/1/keep-your-eyes-on-the-skies-all-year-long-in-jasper-national-park-L-2.jpg"/>
            </div>
        </li>
        <li>Let Maligne Adventures showcase all the natural beauty and adventure Jasper National Park offers. Located in the Canadian Rockies, along the Icefields Parkway (north of Banff National Park), Jasper is famous for its abundant wildlife and incredible scenery. Choose from a wide selection of activities geared for all family members. The Wildlife & Waterfalls Tour explores the Maligne Valley, Maligne Canyon and the Scenic Cruise to Spirit Island on Maligne Lake, while daily Morning or Evening Wildlife Tours give the chance to observe various native animals in their natural habitat. For those looking for an active adventure, Jasper's Whitewater rafting is bound to be a highlight of any summer vacation. Rafting trips include family-friendly Class 2 rapids on the Athabasca River's Canyon Run or Class 3 exciting whitewater on the Sunwapta River or Fraser River.</li>
        <li>
            <div class="lazy-image" style="width: 100%; height: 300px; background-color: black; position: relative;">
                <div class="animate-pulse h-full">
                    <div class="flex items-center justify-center w-full h-full bg-gray-500 rounded">
                        <svg class="w-14 h-14 text-gray-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                    </div>
                </div>
                <img class="fade-in" style="width: 100%; height: 100%;" data-src="https://az837918.vo.msecnd.net/publishedimages/articles/3169/en-CA/images/2/keep-your-eyes-on-the-skies-all-year-long-in-jasper-national-park-L-2.jpg"/>
            </div>
        </li>
        <li>
            <div class="lazy-image" style="width: 100%; height: 300px; background-color: black; position: relative;">
                <div class="animate-pulse h-full">
                    <div class="flex items-center justify-center w-full h-full bg-gray-500 rounded">
                        <svg class="w-14 h-14 text-gray-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                    </div>
                </div>
                <img class="fade-in" style="width: 100%; height: 100%;" data-src="https://az837918.vo.msecnd.net/publishedimages/Listings/1175/en-CA/images/1/maligne-adventures-L-24.jpg"/>
            </div>
        </li>
        <li>
            <div class="lazy-image" style="width: 100%; height: 300px; background-color: black; position: relative;">
                <div class="animate-pulse h-full">
                    <div class="flex items-center justify-center w-full h-full bg-gray-500 rounded">
                        <svg class="w-14 h-14 text-gray-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                    </div>
                </div>
                <img class="fade-in" style="width: 100%; height: 100%;" data-src="https://az837918.vo.msecnd.net/publishedimages/Listings/1175/en-CA/images/2/maligne-adventures-L-24.jpg"/>
            </div>
        </li>
        <li>Let Maligne Adventures showcase all the natural beauty and adventure Jasper National Park offers. Located in the Canadian Rockies, along the Icefields Parkway (north of Banff National Park), Jasper is famous for its abundant wildlife and incredible scenery. Choose from a wide selection of activities geared for all family members. The Wildlife & Waterfalls Tour explores the Maligne Valley, Maligne Canyon and the Scenic Cruise to Spirit Island on Maligne Lake, while daily Morning or Evening Wildlife Tours give the chance to observe various native animals in their natural habitat. For those looking for an active adventure, Jasper's Whitewater rafting is bound to be a highlight of any summer vacation. Rafting trips include family-friendly Class 2 rapids on the Athabasca River's Canyon Run or Class 3 exciting whitewater on the Sunwapta River or Fraser River.</li>
        <li>
            <div class="lazy-image" style="width: 100%; height: 300px; background-color: black; position: relative;">
                <div class="animate-pulse h-full">
                    <div class="flex items-center justify-center w-full h-full bg-gray-500 rounded">
                        <svg class="w-14 h-14 text-gray-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                    </div>
                </div>
                <img class="fade-in" style="width: 100%; height: 100%;" data-src="https://az837918.vo.msecnd.net/publishedimages/Listings/1175/en-CA/images/6/maligne-adventures-L-24.jpg"/>
            </div>
        </li>
        <li>Let Maligne Adventures showcase all the natural beauty and adventure Jasper National Park offers. Located in the Canadian Rockies, along the Icefields Parkway (north of Banff National Park), Jasper is famous for its abundant wildlife and incredible scenery. Choose from a wide selection of activities geared for all family members. The Wildlife & Waterfalls Tour explores the Maligne Valley, Maligne Canyon and the Scenic Cruise to Spirit Island on Maligne Lake, while daily Morning or Evening Wildlife Tours give the chance to observe various native animals in their natural habitat. For those looking for an active adventure, Jasper's Whitewater rafting is bound to be a highlight of any summer vacation. Rafting trips include family-friendly Class 2 rapids on the Athabasca River's Canyon Run or Class 3 exciting whitewater on the Sunwapta River or Fraser River.</li>
        <li>
            <div class="lazy-image" style="width: 100%; height: 300px; background-color: black; position: relative;">
                <div class="animate-pulse h-full">
                    <div class="flex items-center justify-center w-full h-full bg-gray-500 rounded">
                        <svg class="w-14 h-14 text-gray-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                    </div>
                </div>
                <img class="fade-in" style="width: 100%; height: 100%;" data-src="https://az837918.vo.msecnd.net/publishedimages/Listings/1175/en-CA/images/10/maligne-adventures-L-24.jpg"/>
            </div>
        </li>
        <li>
            <div class="lazy-image" style="width: 100%; height: 300px; background-color: black; position: relative;">
                <div class="animate-pulse h-full">
                    <div class="flex items-center justify-center w-full h-full bg-gray-500 rounded">
                        <svg class="w-14 h-14 text-gray-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                    </div>
                </div>
                <img class="fade-in" style="width: 100%; height: 100%;" data-src="https://az837918.vo.msecnd.net/publishedimages/Listings/1175/en-CA/images/8/maligne-adventures-L-24.jpg"/>
            </div>
        </li>
    </ul> -->
</template>
<script setup>
    // import { onMounted } from 'vue'
    import { defineProps, computed } from 'vue'
    import { ROUTE_NAME } from '@/utils/constants'
    const props = defineProps({
        data : {
            type: Array,
            required: true,
            default: () => []
        }
    });
    const data = computed(()=>{
        return props.data;
    });

    // onMounted(()=>{
    //     const imgs = Array.from(document.querySelectorAll('.lazy-image img'));

    //     const toggleImgNSpinner =(imgObject, display)=>{
    //         if(imgObject && imgObject.previousElementSibling){
    //             imgObject.previousElementSibling.style.display = display;
    //             imgObject.style.display = display && display == 'none' ? 'block' : display;
    //         }
    //     }
    //     if ('IntersectionObserver' in window && imgs.length) {
    //         const imgObserver = new IntersectionObserver(entries => {
    //             entries.forEach(entry => {
    //                 if (entry.isIntersecting) {
    //                     // IMAGE LOADING 
    //                     const image = entry.target;
    //                     image.src = image.dataset.src;
    //                     toggleImgNSpinner(image, 'block');
    //                     // IMAGE LOADED 
    //                     image.onload =()=>toggleImgNSpinner(image, 'none');
    //                     // IMAGE LOAD ERROR 
    //                     image.onerror =()=>console.log('error');
    //                     imgObserver.unobserve(image);
    //                 }
    //             });
    //         });
    //         imgs.forEach(img => imgObserver.observe(img));
    //     }
    //     // This won’t work if the browser doesn’t support IntersectionObserver. Although global support is around 92%, IE doesn’t support it at all. If you have traffic in the millions, 1–2% can still mean tens of thousands of users.
    // })
</script>

<!-- <style scoped>
    .loader {
        left: 45%;
        top: 45%;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: inline-block;
        border-top: 3px solid #000000;
        border-right: 3px solid transparent;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
        position: absolute;
    }
    .fade-in {
        animation: fadeIn 3s;
        -webkit-animation: fadeIn 3s;
        -moz-animation: fadeIn 3s;
        -o-animation: fadeIn 3s;
        -ms-animation: fadeIn 3s;
    }
    @keyframes rotation {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    } 
    @keyframes fadeIn {
        0% { opacity: 0.5; }
        100% { opacity: 1; }
    }
    @-moz-keyframes fadeIn {
        0% { opacity: 0.5; }
        100% { opacity: 1; }
    }
    @-webkit-keyframes fadeIn {
        0% { opacity: 0.5; }
        100% { opacity: 1; }
    }
    @-o-keyframes fadeIn {
        0% { opacity: 0.5; }
        100% { opacity: 1; }
    }
    @-ms-keyframes fadeIn {
        0% { opacity: 0.5; }
        100% { opacity: 1; }
    }
</style> -->

