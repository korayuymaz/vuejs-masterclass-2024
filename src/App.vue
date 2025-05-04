<script setup lang="ts">
const { activeError } = storeToRefs(useErrorStore())
</script>

<template>
  <AuthLayout>
    <AppErrorPage v-if="activeError" />
    <RouterView v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name"> </Component>
        <template #fallback>
          <div>
            <!-- <LoadingSpinner /> -->
            Loading..
          </div>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
