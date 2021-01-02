<template>
  <!-- ##### Welcome Area Start ##### -->
  <div class="breadcumb-area clearfix auto-init">
    <!-- breadcumb content -->
    <div class="breadcumb-content">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <nav aria-label="breadcrumb" class="breadcumb--con text-center">
              <h2
                class="w-text title wow text-white fadeInUp"
                data-wow-delay="0.2s"
              >
                {{ $route.name }}
                <span v-if="$route.name == 'FAQ'">Questions </span>
              </h2>
              <ol
                class="breadcrumb text-white justify-content-center wow fadeInUp bg-transparent"
                data-wow-delay="0.4s"
              >
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li
                  class="breadcrumb-item active text-white"
                  aria-current="page"
                >
                  {{ $route.name }}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ##### Welcome Area End ##### -->
</template>