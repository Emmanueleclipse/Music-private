<template>
<div>
    <div class="grid lg:grid-cols-3 gap-5 lg:gap-10 py-10">
        <div class="flex items-center justify-between bg-white shadow px-3 py-5 rounded-lg">
            <div class="flex items-center">
                <div class="w-10 h-10 flex  justify-center items-center">
                    <img src="/images/admin/dashboard-img-4.svg" width="71" height="71" alt="">
                </div>
                <div class="px-2">
                    <h2 class="text-3xl font-bold color-blue-500 leading-tight tracking-tighter">5.3 k</h2>
                    <p class="text-base text-gray-600">Users</p>
                </div>
            </div>
            <div class="pr-5">
                <a href="#">
                    <img src="/images/admin/dashboard-img-2.svg" width="31" height="31" alt="">
                </a>
            </div>
        </div>
        <div class="flex items-center justify-between bg-white shadow px-3 py-5 rounded-lg">
            <div class="flex items-center">
                <div class="w-10 h-10 flex  justify-center items-center ">
                    <img src="/images/admin/dashboard-img-3.svg" width="71" height="71" alt="">
                </div>
                <div class="px-2">
                    <h2 class="text-3xl font-bold color-blue-500 leading-tight tracking-tighter">2.6 k</h2>
                    <p class="text-base text-gray-600">Added Product</p>
                </div>
            </div>
            <div class="pr-5">
                <a href="#">
                    <img src="/images/admin/dashboard-img-2.svg" width="31" height="31" alt="">
                </a>
            </div>
        </div>
        <div class="flex items-center justify-between bg-white shadow px-3 py-5 rounded-lg">
            <div class="flex items-center">
                <div class="w-10 h-10 flex  justify-center items-center">
                    <img src="/images/admin/dashboard-img-5.svg" width="71" height="71" alt="">
                </div>
                <div class="px-2">
                    <h2 class="text-3xl font-bold color-blue-500 leading-tight tracking-tighter">3.8 k</h2>
                    <p class="text-base text-gray-600">Transaction</p>
                </div>
            </div>
            <div class="pr-5">
                <a href="#">
                    <img src="/images/admin/dashboard-img-2.svg" width="31" height="31" alt="">
                </a>
            </div>
        </div>
    </div>
    <div class="py-5">
        <h2 class="text-lg font-semibold text-gray-600 pb-3">Latest Users</h2>

        <div class="table--area shadow rounded-lg  bg-white ">
            <table class="lg:w-full table-auto  overflow-y-scroll">
                <thead>
                    <tr class="text-left">
                        <th class="md:w-24 xl:w-10"></th>
                        <th class="color-blue-500 py-3 px-2 w-48">Full Name</th>
                        <th class="color-blue-500 py-3 px-2 w-56">Email</th>
                        <th class="color-blue-500 py-3 px-2 w-56">Producer Name</th>
                        <th class="color-blue-500 py-3 px-2">Invite Code</th>
                        <th class="color-blue-500 py-3 px-2">Location</th>
                        <th class="color-blue-500 py-3 px-2">Paypal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="">
                        <td class="text-gray-600 px-2 py-3"><img src="/images/admin/dashboard-img-6.svg" width="25" alt=""></td>
                        <td data-column="Full Name" class="text-gray-600 px-2 py-2">Oliver</td>
                        <td data-column="Email" class="text-gray-600 px-2 py-2">developer@gmail.com</td>
                        <td data-column="Producer Name" class="text-gray-600 px-2 py-2">Tomas</td>
                        <td data-column="Invite Code" class="text-gray-600 px-2 py-2">H5566d5</td>
                        <td data-column="Location" class="text-gray-600 px-2 py-2">Germany</td>
                        <td data-column="Paypal" class="text-gray-600 px-2 py-2">Paypal@gmail.com</td>
                        <td class="text-gray-600 px-2 py-2">
                            <img src="/images/admin/img-path-35.svg" width="6" height="21" alt="">
                        </td>
                    </tr>
                    <tr class="">
                        <td class="text-gray-600 px-2 py-3"><img src="/images/admin/dashboard-img-6.svg" width="25" alt=""></td>
                        <td data-column="Full Name" class="text-gray-600 px-2 py-2">Oliver</td>
                        <td data-column="Email" class="text-gray-600 px-2 py-2">developer@gmail.com</td>
                        <td data-column="Producer Name" class="text-gray-600 px-2 py-2">Tomas</td>
                        <td data-column="Invite Code" class="text-gray-600 px-2 py-2">H5566d5</td>
                        <td data-column="Location" class="text-gray-600 px-2 py-2">Germany</td>
                        <td data-column="Paypal" class="text-gray-600 px-2 py-2">Paypal@gmail.com</td>
                        <td class="text-gray-600 px-2 py-2">
                            <img src="/images/admin/img-path-35.svg" width="6" height="21" alt="">
                        </td>
                    </tr>
                    <tr class="">
                        <td class="text-gray-600 px-2 py-3"><img src="/images/admin/dashboard-img-6.svg" width="25" alt=""></td>
                        <td data-column="Full Name" class="text-gray-600 px-2 py-2">Oliver</td>
                        <td data-column="Email" class="text-gray-600 px-2 py-2">developer@gmail.com</td>
                        <td data-column="Producer Name" class="text-gray-600 px-2 py-2">Tomas</td>
                        <td data-column="Invite Code" class="text-gray-600 px-2 py-2">H5566d5</td>
                        <td data-column="Location" class="text-gray-600 px-2 py-2">Germany</td>
                        <td data-column="Paypal" class="text-gray-600 px-2 py-2">Paypal@gmail.com</td>
                        <td class="text-gray-600 px-2 py-2">
                            <img src="/images/admin/img-path-35.svg" width="6" height="21" alt="">
                        </td>
                    </tr>
                    <tr class="">
                        <td class="text-gray-600 px-2 py-3"><img src="/images/admin/dashboard-img-6.svg" width="25" alt=""></td>
                        <td data-column="Full Name" class="text-gray-600 px-2 py-2">Oliver</td>
                        <td data-column="Email" class="text-gray-600 px-2 py-2">developer@gmail.com</td>
                        <td data-column="Producer Name" class="text-gray-600 px-2 py-2">Tomas</td>
                        <td data-column="Invite Code" class="text-gray-600 px-2 py-2">H5566d5</td>
                        <td data-column="Location" class="text-gray-600 px-2 py-2">Germany</td>
                        <td data-column="Paypal" class="text-gray-600 px-2 py-2">Paypal@gmail.com</td>
                        <td class="text-gray-600 px-2 py-2">
                            <img src="/images/admin/img-path-35.svg" width="6" height="21" alt="">
                        </td>
                    </tr>
                    <tr class="">
                        <td class="text-gray-600 px-2 py-3"><img src="/images/admin/dashboard-img-6.svg" width="25" alt=""></td>
                        <td data-column="Full Name" class="text-gray-600 px-2 py-2">Oliver</td>
                        <td data-column="Email" class="text-gray-600 px-2 py-2">developer@gmail.com</td>
                        <td data-column="Producer Name" class="text-gray-600 px-2 py-2">Tomas</td>
                        <td data-column="Invite Code" class="text-gray-600 px-2 py-2">H5566d5</td>
                        <td data-column="Location" class="text-gray-600 px-2 py-2">Germany</td>
                        <td data-column="Paypal" class="text-gray-600 px-2 py-2">Paypal@gmail.com</td>
                        <td class="text-gray-600 px-2 py-2">
                            <img src="/images/admin/img-path-35.svg" width="6" height="21" alt="">
                        </td>
                    </tr>
                    <tr class="">
                        <td class="text-gray-600 px-2 py-3"><img src="/images/admin/dashboard-img-6.svg" width="25" alt=""></td>
                        <td data-column="Full Name" class="text-gray-600 px-2 py-2">Oliver</td>
                        <td data-column="Email" class="text-gray-600 px-2 py-2">developer@gmail.com</td>
                        <td data-column="Producer Name" class="text-gray-600 px-2 py-2">Tomas</td>
                        <td data-column="Invite Code" class="text-gray-600 px-2 py-2">H5566d5</td>
                        <td data-column="Location" class="text-gray-600 px-2 py-2">Germany</td>
                        <td data-column="Paypal" class="text-gray-600 px-2 py-2">Paypal@gmail.com</td>
                        <td class="text-gray-600 px-2 py-2">
                            <img src="/images/admin/img-path-35.svg" width="6" height="21" alt="">
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

    </div>
</div>
</template>

<script>
export default {
    layout: 'admin',
}
</script>
